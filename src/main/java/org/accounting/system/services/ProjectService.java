package org.accounting.system.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.quarkus.mongodb.panache.PanacheQuery;
import io.quarkus.oidc.TokenIntrospection;
import org.accounting.system.dtos.acl.role.RoleAccessControlRequestDto;
import org.accounting.system.dtos.acl.role.RoleAccessControlResponseDto;
import org.accounting.system.dtos.acl.role.RoleAccessControlUpdateDto;
import org.accounting.system.dtos.installation.InstallationResponseDto;
import org.accounting.system.dtos.pagination.PageResource;
import org.accounting.system.entities.authorization.Role;
import org.accounting.system.entities.projections.HierarchicalRelationProjection;
import org.accounting.system.entities.projections.InstallationProjection;
import org.accounting.system.entities.projections.MetricProjection;
import org.accounting.system.entities.projections.ProjectProjection;
import org.accounting.system.exceptions.ConflictException;
import org.accounting.system.mappers.AccessControlMapper;
import org.accounting.system.mappers.InstallationMapper;
import org.accounting.system.repositories.HierarchicalRelationRepository;
import org.accounting.system.repositories.acl.AccessControlRepository;
import org.accounting.system.repositories.authorization.RoleRepository;
import org.accounting.system.repositories.project.ProjectRepository;
import org.accounting.system.services.acl.RoleAccessControlService;
import org.accounting.system.services.authorization.RoleService;
import org.accounting.system.util.QueryParser;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.UriInfo;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@ApplicationScoped
public class ProjectService implements RoleAccessControlService {

    @Inject
    ProjectRepository projectRepository;

    @Inject
    RoleRepository roleRepository;

    @Inject
    HierarchicalRelationRepository hierarchicalRelationRepository;

    @Inject
    AccessControlRepository accessControlRepository;

    @Inject
    TokenIntrospection tokenIntrospection;

    @Inject
    RoleService roleService;

    @Inject
    QueryParser queryParser;

    @ConfigProperty(name = "key.to.retrieve.id.from.access.token")
    String id;

    @Inject
    ObjectMapper objectMapper;

    /**
     * This method correlates the given Providers with a specific Project and creates an hierarchical structure with root
     * the given Project and children the given Providers.
     *
     * @param projectId The Project id with which the Providers are going to be correlated.
     * @param providerIds List of Providers which will be correlated with a specific Provider
     * @throws NotFoundException If a Provider doesn't exist
     */
    public void associateProjectWithProviders(String projectId, Set<String> providerIds){

        projectRepository.associateProjectWithProviders(projectId, providerIds);
    }

    public PageResource<MetricProjection> fetchAllMetrics(String id, int page, int size, UriInfo uriInfo){

        var projection = projectRepository.fetchAllMetrics(id, page, size);

        return new PageResource<>(projection, projection.list(), uriInfo);
    }

    /**
     * This method dissociated Providers from a specific Project.
     *
     * @param projectId The Project id from which the Providers are going to be dissociated
     * @param providerIds List of Providers which will be dissociated from a specific Provider
     */
    public void dissociateProviderFromProject(String projectId, Set<String> providerIds){

        projectRepository.dissociateProviderFromProject(projectId, providerIds);
    }

    public List<HierarchicalRelationProjection> hierarchicalStructure(final String externalId) {

        return projectRepository.hierarchicalStructure(externalId);
    }

    public ProjectProjection getById(final String id) {

        return projectRepository.fetchById(id);
    }

    public PageResource<InstallationResponseDto> getInstallationsByProject(String projectId, int page, int size, UriInfo uriInfo){

        PanacheQuery<InstallationProjection> projectionQuery = projectRepository.fetchProjectInstallations(projectId, page, size);

        return new PageResource<>(projectionQuery, InstallationMapper.INSTANCE.installationProjectionsToResponse(projectionQuery.list()), uriInfo);
    }

//    public  PageResource<String> searchProject(String json, int page, int size, UriInfo uriInfo) throws  NoSuchFieldException, org.json.simple.parser.ParseException {
//
//        var ids=accessControlRepository.findByWhoAndCollection(tokenIntrospection.getJsonObject().getString(id),Collection.Project).stream().filter(projects ->
//                roleService.hasRoleAccess(projects.getRoles(), Collection.Project, Operation.READ)).map(projects -> projects.getEntity()).collect(Collectors.toList());
//        Bson query=queryParser.parseFile(json, false, ids, Project.class);
//
//        PanacheQuery<Project> projectionQuery = projectRepository.search(query,page,size);
//        return new PageResource<>(projectionQuery, projectToJson(projectionQuery.list().stream().map(Project::getId).collect(Collectors.toList())), uriInfo);
//
//    }

    public PageResource<ProjectProjection> getAll(int page, int size, UriInfo uriInfo) throws NoSuchFieldException, org.json.simple.parser.ParseException, JsonProcessingException {

       var projectionQuery = projectRepository.fetchAll(page, size);

       return new PageResource<>(projectionQuery, projectionQuery.list(), uriInfo);
    }

    @Override
    public void grantPermission(String who, RoleAccessControlRequestDto request, String... id) {

        var projectID = id[0];

        var optional = projectRepository.fetchRoleAccessControl(projectID, who);

        if(optional.isPresent()){

            throw new ConflictException("There is a Project Access Control for the client : "+who);
        }

        var accessControl = AccessControlMapper.INSTANCE.requestToRoleAccessControl(request);

        accessControl.setWho(who);

        accessControl.setRoles(roleRepository.getRolesByName(request.roles));

        projectRepository.insertNewRoleAccessControl(projectID, accessControl);
    }

    @Override
    public RoleAccessControlResponseDto modifyPermission(String who, RoleAccessControlUpdateDto updateDto, String... id) {

        var projectID = id[0];

        var optional = projectRepository.fetchRoleAccessControl(projectID, who);

        optional.orElseThrow(() -> new NotFoundException("There is no Access Control."));

        projectRepository.updateRoleAccessControl(projectID, who, roleRepository.getRolesByName(updateDto.roles));

        var updated = projectRepository.fetchRoleAccessControl(projectID, who);

        var response = AccessControlMapper.INSTANCE.roleAccessControlToResponse(updated.get());

        response.roles = updated.get().getRoles().stream().map(Role::getName).collect(Collectors.toSet());

        return response;
    }

    @Override
    public void deletePermission(String who, String... id) {

        var projectID = id[0];

        var optional = projectRepository.fetchRoleAccessControl(projectID, who);

        optional.orElseThrow(() -> new NotFoundException("There is no Access Control."));

        projectRepository.deleteRoleAccessControl(projectID, who);
    }

    @Override
    public RoleAccessControlResponseDto fetchPermission(String who, String... id) {

        var projectID = id[0];

        var optional = projectRepository.fetchRoleAccessControl(projectID, who);

        optional.orElseThrow(() -> new NotFoundException("There is no Access Control."));

        var response = AccessControlMapper.INSTANCE.roleAccessControlToResponse(optional.get());

        response.roles = optional.get().getRoles().stream().map(Role::getName).collect(Collectors.toSet());

        return response;
    }

    @Override
    public PageResource<RoleAccessControlResponseDto> fetchAllPermissions(int page, int size, UriInfo uriInfo, String... id) {

        var projectID = id[0];

        var panacheQuery = projectRepository.fetchAllRoleAccessControls(projectID, page, size);

        var responses = panacheQuery
                .list()
                .stream()
                .map(acl->{

                    var response = AccessControlMapper.INSTANCE.roleAccessControlToResponse(acl);

                    response.roles = acl.getRoles().stream().map(Role::getName).collect(Collectors.toSet());

                    return response;

                })
                .collect(Collectors.toList());

        return new PageResource<>(panacheQuery, responses, uriInfo);
    }
}