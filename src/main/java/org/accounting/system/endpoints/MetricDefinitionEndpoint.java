package org.accounting.system.endpoints;

import io.quarkus.security.Authenticated;
import jakarta.inject.Inject;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.PATCH;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.UriInfo;
import org.accounting.system.beans.RequestUserContext;
import org.accounting.system.constraints.NotFoundEntity;
import org.accounting.system.dtos.InformativeResponse;
import org.accounting.system.dtos.metricdefinition.MetricDefinitionRequestDto;
import org.accounting.system.dtos.metricdefinition.MetricDefinitionResponseDto;
import org.accounting.system.dtos.metricdefinition.UpdateMetricDefinitionRequestDto;
import org.accounting.system.dtos.pagination.PageResource;
import org.accounting.system.enums.AccessType;
import org.accounting.system.enums.Collection;
import org.accounting.system.enums.Operation;
import org.accounting.system.interceptors.annotations.AccessPermission;
import org.accounting.system.repositories.metricdefinition.MetricDefinitionRepository;
import org.accounting.system.services.MetricDefinitionService;
import org.accounting.system.util.AccountingUriInfo;
import org.accounting.system.util.Utility;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.openapi.annotations.enums.SchemaType;
import org.eclipse.microprofile.openapi.annotations.enums.SecuritySchemeIn;
import org.eclipse.microprofile.openapi.annotations.enums.SecuritySchemeType;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.ExampleObject;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.parameters.Parameter;
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.security.SecurityRequirement;
import org.eclipse.microprofile.openapi.annotations.security.SecurityScheme;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.json.simple.parser.ParseException;

import java.util.List;

import static org.eclipse.microprofile.openapi.annotations.enums.ParameterIn.QUERY;

@Path("/metric-definitions")
@Authenticated
@SecurityScheme(securitySchemeName = "Authentication",
        description = "JWT token",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER)

public class MetricDefinitionEndpoint {

    @ConfigProperty(name = "quarkus.resteasy-reactive.path")
    String basePath;

    @ConfigProperty(name = "api.server.url")
    String serverUrl;

    @Inject
    MetricDefinitionService metricDefinitionService;

    @Inject
    Utility utility;

    @Inject
    RequestUserContext requestInformation;

    public MetricDefinitionEndpoint(MetricDefinitionService metricDefinitionService, Utility utility) {
        this.metricDefinitionService = metricDefinitionService;
        this.utility = utility;
    }

    @Tag(name = "Metric Definition")
    @org.eclipse.microprofile.openapi.annotations.Operation(
            operationId = "submit-metric-definition",
            summary = "Records a new Metric Definition.",
            description = "Retrieves and inserts a Metric Definition into the database. Typically, " +
                    "a Metric Definition is the metadata describing a Virtual Access Metric. " +
                    "It should be noted that the combination of unit_type and metric_name should be unique. " +
                    "If you execute a request with a unit_type and metric_name, which have already been generated, you receive an error response. ")
    @APIResponse(
            responseCode = "201",
            description = "Metric Definition has been created successfully.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = MetricDefinitionResponseDto.class)))
    @APIResponse(
            responseCode = "400",
            description = "Bad Request.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "401",
            description = "Client has not been authenticated.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "403",
            description = "The authenticated client is not permitted to perform the requested operation.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "404",
            description = "Unit/Metric type not found.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "409",
            description = "There is a Metric Definition with that unit_type and metric_name.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "415",
            description = "Cannot consume content type.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "500",
            description = "Internal Server Errors.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @SecurityRequirement(name = "Authentication")

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    @AccessPermission(collection = Collection.MetricDefinition, operation = Operation.CREATE)
    public Response save(@Valid @NotNull(message = "The request body is empty.") MetricDefinitionRequestDto metricDefinitionRequestDto, @Context UriInfo uriInfo) {

        var serverInfo = new AccountingUriInfo(serverUrl.concat(basePath).concat(uriInfo.getPath()));

        metricDefinitionService.exist(metricDefinitionRequestDto.unitType, metricDefinitionRequestDto.metricName);

        var response = metricDefinitionService.save(metricDefinitionRequestDto);

        return Response.created(serverInfo.getAbsolutePathBuilder().path(response.id).build()).entity(response).build();
    }

    @Tag(name = "Metric Definition")
    @org.eclipse.microprofile.openapi.annotations.Operation(
            summary = "Returns the recorded Metric Definitions.",
            description = "This operation fetches all database records of Metric Definition. By default, the first page of 10 Metric Definitions will be returned. You can tune the default values by using the query parameters page and size.")
    @APIResponse(
            responseCode = "200",
            description = "Array of Metric Definitions.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = PageableMetricDefinitionResponseDto.class)))
    @APIResponse(
            responseCode = "401",
            description = "Client has not been authenticated.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "403",
            description = "The authenticated client is not permitted to perform the requested operation.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "500",
            description = "Internal Server Errors.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @SecurityRequirement(name = "Authentication")

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    @AccessPermission(collection = Collection.MetricDefinition, operation = Operation.READ)
    public Response getAll(@Parameter(name = "page", in = QUERY,
            description = "Indicates the page number. Page number must be >= 1.") @DefaultValue("1") @Min(value = 1, message = "Page number must be >= 1.") @QueryParam("page") int page,
                           @Parameter(name = "size", in = QUERY,
                                   description = "The page size.") @DefaultValue("10") @Min(value = 1, message = "Page size must be between 1 and 100.")
                           @Max(value = 100, message = "Page size must be between 1 and 100.") @QueryParam("size") int size,
                           @Context UriInfo uriInfo) {

        var serverInfo = new AccountingUriInfo(serverUrl.concat(basePath).concat(uriInfo.getPath()));

        return Response.ok().entity(metricDefinitionService.findAllMetricDefinitionsPageable(page - 1, size, serverInfo)).build();
    }

    @Tag(name = "Metric Definition")
    @org.eclipse.microprofile.openapi.annotations.Operation(
            summary = "Returns an existing Metric Definition.",
            description = "This operation accepts the id of a Metric Definition and fetches from the database the corresponding record.")
    @APIResponse(
            responseCode = "200",
            description = "The corresponding Metric Definition.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = MetricDefinitionResponseDto.class)))
    @APIResponse(
            responseCode = "401",
            description = "Client has not been authenticated.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "403",
            description = "The authenticated client is not permitted to perform the requested operation.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "404",
            description = "Metric Definition has not been found.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "500",
            description = "Internal Server Errors.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @SecurityRequirement(name = "Authentication")

    @GET
    @Path("/{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    @AccessPermission(collection = Collection.MetricDefinition, operation = Operation.READ)
    public Response get(
            @Parameter(
                    description = "The Metric Definition to be retrieved.",
                    required = true,
                    example = "507f1f77bcf86cd799439011",
                    schema = @Schema(type = SchemaType.STRING))
            @PathParam("id") @Valid @NotFoundEntity(repository = MetricDefinitionRepository.class, message = "There is no Metric Definition with the following id:") String id) {

        var response = metricDefinitionService.fetchMetricDefinition(id);

        return Response.ok().entity(response).build();
    }

    @Tag(name = "Metric Definition")
    @org.eclipse.microprofile.openapi.annotations.Operation(
            summary = "Updates an existing Metric Definition.",
            description = "In order to update the resource properties, the body of the request must contain an updated representation of Metric Definition. " +
                    "You can update a part or all attributes of Metric Definition except for metric_definition_id. The empty or null values are ignored. " +
                    "Bear in mind that you cannot update an existing Metric Definition if there are Metrics assigned to it.")
    @APIResponse(
            responseCode = "200",
            description = "Metric Definition was updated successfully.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = MetricDefinitionResponseDto.class)))
    @APIResponse(
            responseCode = "400",
            description = "Bad Request.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "401",
            description = "Client has not been authenticated.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "403",
            description = "The authenticated client is not permitted to perform the requested operation.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "404",
            description = "Metric Definition has not been found.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "409",
            description = "There is a Metric Definition with that unit_type and metric_name.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "415",
            description = "Cannot consume content type.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "500",
            description = "Internal Server Errors.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @SecurityRequirement(name = "Authentication")

    @PATCH
    @Path("/{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    @AccessPermission(collection = Collection.MetricDefinition, operation = Operation.UPDATE)
    public Response update(
            @Parameter(
                    description = "The Metric Definition to be updated.",
                    required = true,
                    example = "507f1f77bcf86cd799439011",
                    schema = @Schema(type = SchemaType.STRING))
            @PathParam("id") @Valid @NotFoundEntity(repository = MetricDefinitionRepository.class, message = "There is no Metric Definition with the following id:") String id, @Valid @NotNull(message = "The request body is empty.") UpdateMetricDefinitionRequestDto updateMetricDefinitionRequest) {

        metricDefinitionService.hasChildren(id, "The Metric Definition cannot be updated. There is a Metric assigned to it.");

        var response = metricDefinitionService.update(id, updateMetricDefinitionRequest);

        return Response.ok().entity(response).build();
    }

    @Tag(name = "Metric Definition")
    @org.eclipse.microprofile.openapi.annotations.Operation(
            summary = "Deletes an existing Metric Definition.",
            description = "You can only delete a Metric Definition that doesn’t have any assigned Metrics to it. If the Metric Definition has no Metrics, you can safely delete it.")
    @APIResponse(
            responseCode = "200",
            description = "Metric Definition has been deleted successfully.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "401",
            description = "Client has not been authenticated.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "403",
            description = "The authenticated client is not permitted to perform the requested operation.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "404",
            description = "Metric Definition has not been found.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "500",
            description = "Internal Server Errors.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @SecurityRequirement(name = "Authentication")

    @DELETE
    @Path("/{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    @AccessPermission(collection = Collection.MetricDefinition, operation = Operation.DELETE)
    public Response delete(@Parameter(
            description = "The Metric Definition to be deleted.",
            required = true,
            example = "507f1f77bcf86cd799439011",
            schema = @Schema(type = SchemaType.STRING))
                               @PathParam("id") @Valid @NotFoundEntity(repository = MetricDefinitionRepository.class, message = "There is no Metric Definition with the following id:") String id) {

        metricDefinitionService.hasChildren(id, "The Metric Definition cannot be deleted. There is a Metric assigned to it.");

        var success = metricDefinitionService.delete(id);

        var successResponse = new InformativeResponse();

        if (success) {
            successResponse.code = 200;
            successResponse.message = "Metric Definition has been deleted successfully.";
        } else {
            successResponse.code = 500;
            successResponse.message = "Metric Definition cannot be deleted due to a server issue. Please try again.";
        }
        return Response.ok().entity(successResponse).build();
    }

    @Tag(name = "Metric Definition")
    @org.eclipse.microprofile.openapi.annotations.Operation(
            operationId = "search-metric-definition",
            summary = "Searches a new Metric Definition.",
            description = "Searches a metric definition ")
    @APIResponse(
            responseCode = "200",
            description = "Array of Metric Definitions.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = PageableMetricDefinitionResponseDto.class)))
    @APIResponse(
            responseCode = "401",
            description = "Client has not been authenticated.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "403",
            description = "The authenticated client is not permitted to perform the requested operation.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @APIResponse(
            responseCode = "500",
            description = "Internal Server Errors.",
            content = @Content(schema = @Schema(
                    type = SchemaType.OBJECT,
                    implementation = InformativeResponse.class)))
    @SecurityRequirement(name = "Authentication")

    @POST
    @Path("/search")
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    @AccessPermission(operation = Operation.READ, collection = Collection.MetricDefinition)

    public Response search(@Valid @NotNull(message = "The request body is empty.") @DefaultValue("")   @RequestBody(description = "a json object to describe the search criteria",


            content = @Content(
                    schema = @Schema(implementation = String.class),
                    mediaType = MediaType.APPLICATION_JSON,
                    examples = {
                            @ExampleObject(
                                    name = "An example of a search on metric definitions",
                                    value = "{\n" +
                                            "           \"type\":\"query\",\n" +
                                            "           \"field\": \"metric_type\",\n" +
                                            "           \"values\": \"count\",\n" +
                                            "           \"operand\": \"eq\"\n" +
                                            "}\n",
                                    summary = "A simple search on a specific field of the metric definition"),
                            @ExampleObject(
                                    name = "An example request with a combination of criteria of a search on metric definitions",
                                    value = "{\n" +
                                            "  \"type\": \"filter\",\n" +
                                            "  \"operator\": \"OR\",\n" +
                                            "  \"criteria\": [\n" +
                                            "    {\n" +
                                            "      \"type\": \"query\",\n" +
                                            "      \"field\": \"metric_name\",\n" +
                                            "      \"values\": \"mdname1\",\n" +
                                            "      \"operand\": \"eq\"\n" +
                                            "    },\n" +
                                            "    {\n" +
                                            "      \"type\": \"filter\",\n" +
                                            "      \"operator\": \"AND\",\n" +
                                            "      \"criteria\": [\n" +
                                            "        {\n" +
                                            "          \"type\": \"query\",\n" +
                                            "          \"field\": \"metric_type\",\n" +
                                            "          \"values\": \"count\",\n" +
                                            "          \"operand\": \"eq\"\n" +
                                            "        },\n" +
                                            "        {\n" +
                                            "          \"type\": \"query\",\n" +
                                            "          \"field\": \"unit_type\",\n" +
                                            "          \"values\": \"#\",\n" +
                                            "          \"operand\": \"eq\"\n" +
                                            "        }\n" +
                                            "      ]\n" +
                                            "    }\n" +
                                            "  ]\n" +
                                            "}\n",
                                    summary = "A complex search on Metric definitions")})


    ) String json, @Parameter(name = "page", in = QUERY,
            description = "Indicates the page number. Page number must be >= 1.") @DefaultValue("1") @Min(value = 1, message = "Page number must be >= 1.") @QueryParam("page") int page,
                           @Parameter(name = "size", in = QUERY,
                                   description = "The page size.") @DefaultValue("10") @Min(value = 1, message = "Page size must be between 1 and 100.")
                           @Max(value = 100, message = "Page size must be between 1 and 100.") @QueryParam("size") int size, @Context UriInfo uriInfo) throws NoSuchFieldException, ParseException {

        var serverInfo = new AccountingUriInfo(serverUrl.concat(basePath).concat(uriInfo.getPath()));

        var list = metricDefinitionService.searchMetricDefinition(json, requestInformation.getAccessType().equals(AccessType.ALWAYS), page - 1, size, serverInfo);

      return Response.ok().entity(list).build();

    }

    public static class PageableMetricDefinitionResponseDto extends PageResource<MetricDefinitionResponseDto> {

        private List<MetricDefinitionResponseDto> content;

        @Override
        public List<MetricDefinitionResponseDto> getContent() {
            return content;
        }

        @Override
        public void setContent(List<MetricDefinitionResponseDto> content) {
            this.content = content;
        }
    }
}

