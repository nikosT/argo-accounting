package org.accounting.system.repositories.modulators;

import io.quarkus.mongodb.panache.PanacheMongoRepository;
import io.quarkus.mongodb.panache.PanacheMongoRepositoryBase;
import net.jodah.typetools.TypeResolver;
import org.accounting.system.beans.RequestInformation;
import org.accounting.system.entities.Entity;
import org.accounting.system.entities.acl.AccessControl;
import org.accounting.system.enums.Collection;
import org.accounting.system.repositories.acl.AccessControlRepository;
import org.bson.Document;
import org.bson.conversions.Bson;

import javax.inject.Inject;
import javax.ws.rs.ForbiddenException;
import java.util.*;
import java.util.stream.Collectors;

/**
 * This {@link AccessModulator} defines the operations that determine the degree of accessibility to Collection Entities. Each
 * class that extends {@link AccessModulator} must specify which entities will be accessible.
 * Since it implements {@link PanacheMongoRepository}, it also provides access to mongo collections. Because every Accounting
 * System API class that extends {@link Entity}, it represents a mongo collection.
 *
 * @param <E> Generic class that represents a mongo collection.
 */
public abstract class AccessModulator<E extends Entity, I> implements PanacheMongoRepositoryBase<E, I> {

    @Inject
    RequestInformation requestInformation;

    @Inject
    AccessControlRepository accessControlRepository;

    protected Class<E> clazz;

    public AccessModulator(){
        Class<?>[] typeArguments = TypeResolver.resolveRawArguments(AccessModulator.class, getClass());
        this.clazz = (Class<E>) typeArguments[0];
    }

    public  E fetchEntityById(I id){
        throw new ForbiddenException("You have no access to this entity : " + id.toString());
    }

    public boolean deleteEntityById(I id){
        throw new ForbiddenException("You have no access to this entity : " + id.toString());
    }

    public E updateEntity(E entity, I id){
        throw new ForbiddenException("You have no access to this entity : " + id.toString());
    }

    public List<E> getAllEntities(){
        return Collections.emptyList();
    }

    /**
     * This method is responsible fοr granting permissions to specific entity within a generic collection.
     * @param accessControl It essentially expresses the permissions that will be granted.
     */
    public void grantPermission(AccessControl accessControl){
        throw new ForbiddenException("You have no access to this entity : " + accessControl.getEntity());
    }

    /**
     * This method is responsible fοr updating existing permissions which have already been granted to a specific entity.
     * @param accessControl It essentially expresses the permissions that will be modified.
     */
    public void modifyPermission(AccessControl accessControl){
        throw new ForbiddenException("You have no access to modify this permission.");
    }

    /**
     * This method is responsible fοr deleting existing permissions which have already been granted to a specific entity.
     * @param accessControl It essentially expresses the permissions that will be deleted.
     */
    public void deletePermission(AccessControl accessControl){
        throw new ForbiddenException("You have no access to delete this permission.");
    }

    /**
     * This method is responsible fοr fetching existing permissions which have already been granted to a specific entity.
     * @param entity The entity id to which permissions have been assigned.
     * @param who To whom the permissions have been assigned.
     */
    public AccessControl getPermission(String entity, String who){
        throw new ForbiddenException("You have no access to read this permission.");
    }

    /**
     * This method is responsible for returning all permissions granted in a Collection.
     */
    public List<AccessControl> getAllPermissions(){
        return Collections.emptyList();
    }

    public List<E> combineTwoLists(List<E> a, List<E> b){

        // We wanna avoid duplicates
        Set<E> setA = new HashSet<>(a);
        Set<E> setB = new HashSet<>(b);

        setA.addAll(setB);

        return new ArrayList<>(setA);
    }
    public RequestInformation getRequestInformation() {
        return requestInformation;
    }

    public AccessControlRepository getAccessControlRepository() {
        return accessControlRepository;
    }
    public Collection collection() {
        return Collection.valueOf(clazz.getSimpleName());
    }
    public List<E> search(Bson query){
        return  find(Document.parse(query.toBsonDocument().toJson())).stream().collect(Collectors.toList());
    }
}