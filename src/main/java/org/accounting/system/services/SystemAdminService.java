package org.accounting.system.services;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.NotFoundException;
import org.accounting.system.clients.ProjectClient;
import org.accounting.system.dtos.InformativeResponse;
import org.accounting.system.dtos.project.ProjectRequest;
import org.accounting.system.dtos.resource.ResourceRequest;
import org.accounting.system.dtos.resource.ResourceResponse;
import org.accounting.system.entities.Project;
import org.accounting.system.entities.acl.RoleAccessControl;
import org.accounting.system.entities.client.Client;
import org.accounting.system.entities.projections.normal.ProjectProjection;
import org.accounting.system.exceptions.ConflictException;
import org.accounting.system.mappers.ResourceMapper;
import org.accounting.system.repositories.ResourceRepository;
import org.accounting.system.repositories.authorization.RoleRepository;
import org.accounting.system.repositories.client.ClientRepository;
import org.accounting.system.repositories.project.ProjectModulator;
import org.accounting.system.repositories.project.ProjectRepository;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@ApplicationScoped
public class SystemAdminService {

    @Inject
    RoleRepository roleRepository;

    @Inject
    ClientRepository clientRepository;

    @Inject
    @RestClient
    ProjectClient projectClient;

    @Inject
    ProjectRepository projectRepository;

    @Inject
    ResourceRepository resourceRepository;

    /**
     * This method is responsible for registering several Projects into Accounting Service.
     * Those Projects are also assigned to all system admins.
     * @param projects A list of Projects to be registered.
     * @param who The system admin who performs the assignment.
     */
    public InformativeResponse registerProjectsToAccountingService(Set<String> projects, String who){

        var response = new InformativeResponse();

        var success = new HashSet<String>();
        var errors = new HashSet<String>();

        for(String projectID : projects){

            var optional = projectRepository.findByIdOptional(projectID);

            if(optional.isEmpty()){

                try{

                    var projectAdminRole = roleRepository.getRolesByName(Set.of("project_admin"));

                    var function = ProjectModulator.openAire();

                    var project = function.apply(projectID, projectClient);

                    project.setCreatorId(who);

                    projectRepository.persist(project);

                    var systemAdmins = clientRepository.getSystemAdmins();

                    var systemAdminsAccessControls = systemAdmins
                            .stream()
                            .map(Client::getId)
                            .map(id->{

                                var systemAdminAccessControl = new RoleAccessControl();
                                systemAdminAccessControl.setWho(id);
                                systemAdminAccessControl.setCreatorId(who);
                                systemAdminAccessControl.setRoles(projectAdminRole);
                                return systemAdminAccessControl;
                            }).collect(Collectors.toSet());

                    projectRepository.insertListOfRoleAccessControl(projectID, systemAdminsAccessControls);

                    success.add(projectID);

                } catch (NotFoundException nfe){

                    errors.add(nfe.getMessage());

                } catch (Exception e){

                    errors.add(String.format("Project : %s has not been registered. Please try again.", projectID));
                }
            } else {

                errors.add(String.format("Project %s has already been registered.", projectID));
            }
        }

        if(success.isEmpty()){

            response.message = "No project registration was performed";
        } else {

            response.message = "Project(s) : "+success+" registered successfully.";
        }

        response.code = 200;
        response.errors = errors;

        return response;
    }

    /**
     * Creates a new Project.
     *
     * @param request The data transfer object containing project details.
     * @param who The system admin who performs the request.
     * @return The created Project.
     */
    public ProjectProjection createProject(ProjectRequest request, String who){

        var function = ProjectModulator.openAireOptional();

        var eeProject = function.apply(request.id, projectClient);

        if(eeProject.isPresent()){

            throw new ConflictException(String.format("Project with ID [%s] exists in European Database.", request.id));
        }

        var databaseProject = projectRepository.findByIdOptional(request.id);

        if(databaseProject.isPresent()){

            throw new ConflictException(String.format("Project with ID [%s] has already been registered in Accounting Service.", request.id));
        }

        var project = new Project();
        project.setId(request.id);
        project.setTitle(request.title);
        project.setAcronym(request.acronym);
        project.setEndDate(request.endDate);
        project.setStartDate(request.startDate);
        project.setCallIdentifier(request.callIdentifier);
        project.setCreatorId(who);

        projectRepository.persist(project);

        var systemAdmins = clientRepository.getSystemAdmins();

        var projectAdminRole = roleRepository.getRolesByName(Set.of("project_admin"));

        var systemAdminsAccessControls = systemAdmins
                .stream()
                .map(Client::getId)
                .map(id->{

                    var systemAdminAccessControl = new RoleAccessControl();
                    systemAdminAccessControl.setWho(id);
                    systemAdminAccessControl.setCreatorId(who);
                    systemAdminAccessControl.setRoles(projectAdminRole);
                    return systemAdminAccessControl;
                }).collect(Collectors.toSet());

        projectRepository.insertListOfRoleAccessControl(project.getId(), systemAdminsAccessControls);

        return projectRepository.fetchById(project.getId());
    }

    /**
     * Creates a new Resource.
     *
     * @param request The data transfer object containing project details.
     * @return The created Project.
     */
    public ResourceResponse createResource(ResourceRequest request){

        var databaseResource = resourceRepository.findByIdOptional(request.id);

        if(databaseResource.isPresent()){

            throw new ConflictException(String.format("Resource with ID [%s] has already been registered in Accounting Service.", request.id));
        }

        var resource = ResourceMapper.INSTANCE.dtoToResource(request);

        resourceRepository.persist(resource);

        return ResourceMapper.INSTANCE.resourceToDto(resource);
    }
}