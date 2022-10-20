package org.accounting.system.repositories.project;

import com.pivovarit.function.ThrowingBiFunction;
import io.quarkus.mongodb.panache.PanacheQuery;
import org.accounting.system.clients.ProjectClient;
import org.accounting.system.entities.Project;
import org.accounting.system.entities.acl.RoleAccessControl;
import org.accounting.system.entities.projections.HierarchicalRelationProjection;
import org.accounting.system.entities.projections.MetricProjection;
import org.accounting.system.mappers.ProjectMapper;
import org.accounting.system.repositories.modulators.AbstractModulator;

import javax.inject.Inject;
import javax.ws.rs.NotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.Set;


public class ProjectModulator extends AbstractModulator<Project, String, RoleAccessControl> {


    @Inject
    ProjectAccessEntityRepository projectAccessEntityRepository;

    @Inject
    ProjectRepository projectRepository;

    @Inject
    ProjectAccessAlwaysRepository projectAccessAlwaysRepository;

    public Project save(String id){

        return projectAccessAlwaysRepository.save(id, openAire());

//        switch (getRequestInformation().getAccessType()){
//            case ALWAYS:
//                 return projectAccessAlwaysRepository.save(id, openAire());
//            case ENTITY:
//                return projectAccessEntityRepository.save(id, openAire());
//            default:
//                throw new ForbiddenException(ApiMessage.NO_PERMISSION.message);
//        }
    }

    public void associateProjectWithProviders(String projectId, Set<String> providerIds){

        projectRepository.associateProjectWithProviders(projectId, providerIds);


//        switch (getRequestInformation().getAccessType()){
//            case ALWAYS:
//                 projectAccessAlwaysRepository.associateProjectWithProviders(projectId, providerIds);
//                 break;
//            case ENTITY:
//                 projectAccessEntityRepository.associateProjectWithProviders(projectId, providerIds);
//                 break;
//            default:
//                throw new ForbiddenException(ApiMessage.NO_PERMISSION.message);
//        }
    }

    public void dissociateProviderFromProject(String projectId, Set<String> providerIds){

        projectRepository.dissociateProviderFromProject(projectId, providerIds);


//        switch (getRequestInformation().getAccessType()){
//            case ALWAYS:
//                projectAccessAlwaysRepository.dissociateProviderFromProject(projectId, providerIds);
//                break;
//            case ENTITY:
//                projectAccessEntityRepository.dissociateProviderFromProject(projectId, providerIds);
//                break;
//            default:
//                throw new ForbiddenException(ApiMessage.NO_PERMISSION.message);
//        }
    }

    public List<HierarchicalRelationProjection> hierarchicalStructure(final String externalId) {

        return projectAccessAlwaysRepository.hierarchicalStructure(externalId);
//        switch (getRequestInformation().getAccessType()){
//            case ALWAYS:
//                return projectAccessAlwaysRepository.hierarchicalStructure(externalId);
//            case ENTITY:
//                return projectAccessEntityRepository.hierarchicalStructure(externalId);
//            default:
//                throw new ForbiddenException(ApiMessage.NO_PERMISSION.message);
//        }
    }

    public PanacheQuery<MetricProjection> fetchAllMetrics(String id, int page, int size){

        return projectAccessAlwaysRepository.fetchAllMetrics(id, page, size);


//        switch (getRequestInformation().getAccessType()){
//            case ALWAYS:
//                return projectAccessAlwaysRepository.fetchAllMetrics(id, page, size);
//            case ENTITY:
//                return projectAccessEntityRepository.fetchAllMetrics(id, page, size);
//            default:
//                throw new ForbiddenException(ApiMessage.NO_PERMISSION.message);
//        }
    }

    @Override
    public ProjectAccessAlwaysRepository always() {
        return projectAccessAlwaysRepository;
    }

    @Override
    public ProjectAccessEntityRepository entity() {
        return projectAccessEntityRepository;
    }

    public static ThrowingBiFunction<String, ProjectClient, Project, NotFoundException> openAire() {

        return (id, client) -> {
            var responseFromOpenAire = client.getById(id, "json");

            if(Objects.isNull(responseFromOpenAire.response.results)){
                throw new NotFoundException("Project with id {"+id+"} not found.");
            }

            return ProjectMapper.INSTANCE.openAireResponseToProject(responseFromOpenAire);
        };
    }
}
