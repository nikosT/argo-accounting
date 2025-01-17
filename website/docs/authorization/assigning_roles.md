---
id: assigning_roles
title: Assigning Roles to a Client
sidebar_position: 3
---

As we have already mentioned, a client can interact with a Project-Provider-Installation relationship only if it has been assigned to it one of the following roles:

- [Project Admin](/authorization/accounting_system_roles.md#project-admin)
- [Provider Admin](/authorization/accounting_system_roles.md#provider-admin)
- [Installation Admin](/authorization/accounting_system_roles.md#installation-admin)

Initially, no client has a role. The Accounting System Administrators can initially turn any client into a Project Admin.

| ![](assets/info.png)     |  If you want to be a Project Admin to a particular Project, then send an email to <accounting@einfra.grnet.gr>.|
|------------------ |-------- |

Once you have been assigned the Project Admin role, you can in turn grant roles to other clients.
Generally, any of the above roles can assign roles to other clients at the level of the Project-Provider-Installation relationship they manage.

### Assigning Roles to a Client as a Project Admin

As a Project Admin, you can grant the above roles to other clients for a specific Project :

- [You can turn a client into a Project Admin for the Project you manage.](/api/project.md#post-access-control)
- [You can turn a client into a Provider Admin for the Providers belonging to the Project you manage.](/api/provider.md#post---access-control-entry-for-a-particular-provider-of-a-specific-project)
- [You can turn a client into an Installation Admin for the Installations belonging to the Project you manage.](/api/installation.md#post---access-control-entry-for-a-particular-installation)

### Assigning Roles to a Client as a Provider Admin

As a Provider Admin, you can grant the Provider Admin and Installation Admin roles to other clients for a particular Provider:

- [You can turn a client into a Provider Admin for the Provider you manage.](/api/provider.md#post---access-control-entry-for-a-particular-provider-of-a-specific-project)
- [You can turn a client into an Installation Admin for the Installations belonging to the Provider you manage.](/api/installation.md#post---access-control-entry-for-a-particular-installation)

### Assigning Roles to a Client as an Installation Admin

As an Installation Admin, you can grant the Installation Admin role to other clients for a particular Installation:

- [You can turn a client into an Installation Admin for the Installation you manage.](/api/installation.md#post---access-control-entry-for-a-particular-installation)
