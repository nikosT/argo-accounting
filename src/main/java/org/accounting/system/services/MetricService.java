package org.accounting.system.services;

import com.mongodb.MongoWriteException;
import com.mongodb.client.model.Filters;
import io.quarkus.oidc.TokenIntrospection;
import org.accounting.system.dtos.metric.MetricResponseDto;
import org.accounting.system.dtos.metric.UpdateMetricRequestDto;
import org.accounting.system.endpoints.MetricEndpoint;
import org.accounting.system.entities.HierarchicalRelation;
import org.accounting.system.entities.Metric;
import org.accounting.system.exceptions.ConflictException;
import org.accounting.system.mappers.MetricMapper;
import org.accounting.system.repositories.HierarchicalRelationRepository;
import org.accounting.system.repositories.acl.AccessControlRepository;
import org.accounting.system.repositories.metric.MetricRepository;
import org.accounting.system.services.authorization.RoleService;
import org.accounting.system.services.installation.InstallationService;
import org.accounting.system.util.QueryParser;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.BadRequestException;
import javax.ws.rs.NotFoundException;
import java.time.Instant;
import java.util.Optional;

/**
 * This service exposes business logic, which uses the {@link MetricRepository}.
 * It is used to keep logic to a minimum in {@link MetricEndpoint} and
 * {@link MetricRepository}
 */
@ApplicationScoped
public class MetricService {

    @Inject
    MetricRepository metricRepository;

    @Inject
    MetricDefinitionService metricDefinitionService;

    @Inject
    InstallationService installationService;

    @Inject
    HierarchicalRelationRepository hierarchicalRelationRepository;

    @Inject
    QueryParser queryParser;

    @Inject
    TokenIntrospection tokenIntrospection;
    @Inject
    AccessControlRepository accessControlRepository;
    @Inject
    RoleService roleService;
    @ConfigProperty(name = "key.to.retrieve.id.from.access.token")
    String id;

    public MetricService(MetricRepository metricRepository, MetricDefinitionService metricDefinitionService) {
        this.metricRepository = metricRepository;
        this.metricDefinitionService = metricDefinitionService;
    }

    /**
     * Passing the Metric Definition id, you can retrieve the total number of metrics assigned to it.
     *
     * @param metricDefinitionId
     * @return the number of the Metrics assigned to the given metric definition id
     */
    public long countMetricsByMetricDefinitionId(String metricDefinitionId){

        return metricRepository.countMetricsByMetricDefinitionId(metricDefinitionId);
    }

    /**
     * Fetches a Metric by given metric id. Afterwards,
     * if the {@link Metric} exists, it turns it into {@link MetricResponseDto}.
     *
     * @param metricId
     * @return  metric response body
     */
    public MetricResponseDto fetchMetric(String metricId){

        var metric = metricRepository.findById(new ObjectId(metricId));

        return MetricMapper.INSTANCE.metricToResponse(metric);
    }

    /**
     * Delete a Metric by given id.
     * @param metricId The Metric to be deleted
     * @param installationId The Installation in which the Metric belongs to.
     * @return if the operation is successful or not
     * @throws NotFoundException If the Metric doesn't exist
     */
    public boolean delete(String metricId, String installationId){

        // first delete Metric from Metric Collection
        var deletedFromMetricCollection = metricRepository.deleteById(new ObjectId(metricId));

        // then delete Metric ID from HierarchicalRelation collection
        var installation = installationService.fetchInstallation(installationId);

        Bson filter = Filters.in("metrics", new ObjectId(metricId));
        Bson query = new Document().append("_id", installation.getProject() + HierarchicalRelation.PATH_SEPARATOR + installation.getOrganisation() + HierarchicalRelation.PATH_SEPARATOR + installationId);
        Bson update = new Document("$pull", filter);

        hierarchicalRelationRepository.getMongoCollection().updateOne(query, update);

        return deletedFromMetricCollection;
    }

    /**
     * This method is responsible for updating a part or all attributes of existing Metric.
     *
     * @param id The Metric to be updated.
     * @param request The Metric attributes to be updated
     * @return The updated Metric
     * @throws NotFoundException If the Metric/Metric Definition doesn't exist
     */
    public MetricResponseDto update(String id, UpdateMetricRequestDto request){

        var metric = findById(id).get();

        //TODO We have to reconstruct better the conditions below

        if(request.start !=null && request.end ==null && Instant.parse(request.start).isAfter(metric.getEnd())){
            throw new BadRequestException("Timestamp of the starting date time cannot be after of Timestamp of the end date time.");
        }

        if(request.end !=null && request.start==null && Instant.parse(request.end).isBefore(metric.getStart())){
            throw new BadRequestException("Timestamp of the end date time cannot be before of Timestamp of the starting date time.");
        }

        if(request.end !=null && request.start!=null && Instant.parse(request.start).isAfter(Instant.parse(request.end))){
            throw new BadRequestException("Timestamp of the starting date time cannot be after of Timestamp of the end date time.");
        }

        if(request.end !=null && request.start!=null && Instant.parse(request.start).equals(Instant.parse(request.end))){
            throw new BadRequestException("Timestamp of the starting date time cannot be equal to Timestamp of the end date time.");
        }

        if(request.end !=null && request.start!=null && Instant.parse(request.start).isAfter(Instant.parse(request.end))){
            throw new BadRequestException("Timestamp of the starting date time cannot be after of Timestamp of the end date time.");
        }

        if(request.start !=null && request.end ==null && Instant.parse(request.start).equals(metric.getEnd())){
            throw new BadRequestException("Timestamp of the starting date time cannot be equal to Timestamp of the end date time.");
        }

        if(request.end !=null && request.start ==null && Instant.parse(request.end).equals(metric.getStart())){
            throw new BadRequestException("Timestamp of the starting date time cannot be equal to Timestamp of the end date time.");
        }

        Metric updatedMetric = null;

        try{
            updatedMetric = metricRepository.updateEntity(new ObjectId(id), request);
        } catch (MongoWriteException e){
            throw new ConflictException("Metric already exists.");
        }

        return MetricMapper.INSTANCE.metricToResponse(updatedMetric);
    }

    /**
     * Fetches a Metric by given id.
     *
     * @param id The Metric id
     * @return Optional of Metric
     */
    public Optional<Metric> findById(String id){

        return metricRepository.findByIdOptional(new ObjectId(id));
    }

//    public List<MetricResponseDto> searchMetric(String json,   int page, int size, UriInfo uriInfo) throws ParseException, NoSuchFieldException {
//
//        ArrayList<String> installations = new ArrayList<>();
//
//        //find the installations of projects accessible
//        var projectIds = accessControlRepository.findByWhoAndCollection(tokenIntrospection.getJsonObject().getString(id), Collection.Project).stream().filter(projects ->
//                roleService.hasRoleAccess(projects.getRoles(), Collection.Project, Operation.READ)).map(projects -> projects.getEntity()).collect(Collectors.toList());
//
//        installations.addAll(hierarchicalRelationRepository.findInstallationsOfProjects(projectIds, "MetricDefinition", "unit_of_access", "_id", "unit_of_access").stream().map(InstallationProjection::convertIdToStr).collect(Collectors.toList()));
//        //find the installations of providers accessible
//        var providersIds = accessControlRepository.findByWhoAndCollection(tokenIntrospection.getJsonObject().getString(id), Collection.Provider).stream().collect(Collectors.toList());
//        providersIds.stream().map(RoleAccessControl::getEntity).map(providersId -> {
//            return providersId.trim().split("\\" + HierarchicalRelation.PATH_SEPARATOR);
//        }).forEach(inst -> {
//            installations.addAll(hierarchicalRelationRepository.findInstallationsByProvider(inst[0], inst[1], "MetricDefinition", "unit_of_access", "_id", "unit_of_access").stream().map(InstallationProjection::convertIdToStr).collect(Collectors.toList()));
//        });
//        //find the installations accessible
//        installations.addAll(accessControlRepository.findByWhoAndCollection(tokenIntrospection.getJsonObject().getString(id), Collection.Installation).stream().filter(inst -> roleService.hasRoleAccess(inst.getRoles(), Collection.Installation, Operation.READ)).map(inst -> inst.getEntity()).collect(Collectors.toList()));
//        var metricIds=metricRepository.findMetricsOfInstallations(installations).stream().map(mid-> mid.getId().toString() ).collect(Collectors.toList());
//        Bson query=queryParser.parseFile(json, false,metricIds, Metric.class);
//        var list = metricRepository.search(query);
//        return  MetricMapper.INSTANCE.metricsToResponse( list.stream().collect(Collectors.toList()));
//    }

}
