---
id: accounting_system_roles
title: Accounting System Roles
sidebar_position: 2
---

When clients register to the system, they can perform the following actions :

- Read all the metric definitions

| Collection        | Read    |
|------------------ |-------- |
| MetricDefinition  |  Always  |

- Read all the providers

| Collection        | Read    |
|------------------ | ------ |
| Provider       | Always  |

- Read all the Unit Types

| Collection        | Read    |
|------------------ |-------- |
| UnitType         | Always  |

- Read all the Metric Types

| Collection        | Read    |
|------------------ |-------- |
| MetricType        | Always  |

- Read all the clients

| Collection        | Read    |
|------------------ |-------- |
| Client         | Always  |

By default, in the accounting system the following roles exist and can be assigned to the registered client.

### Project Admin

Project admin role, has  full access  on the projects it is assigned and can perform all actions on the projects as well as the providers, installations and metrics that are assigned to these projects.

**On an assigned project and the providers/installation/metrics of the project, the project admin role can :**

- Read the project
- Associate and dissociate providers on the project
- Grant access to a client  with a specific role, on a project

| Collection        | Associate | Dissociate | Read    | Acl    |
|------------------ |-------- |--------  |-------- | ------ |
| Project         | Always <sup>*</sup>  | Always <sup>*</sup>   | Always <sup>*</sup>  | Always <sup>*</sup> |

- Create/Update/Delete/Read  Installations, on a project
- Grant access to a client with a specific role , on an installation

| Collection        | Create  | Update    | Delete     | Read    | Acl    |
|------------------ |-------- |-------- |--------  |-------- | ------ |
| Installation      | Always <sup>*</sup>  | Always <sup>*</sup>  | Always <sup>*</sup>   | Always <sup>*</sup>  | Always <sup>*</sup> |

- Create/Update/Delete/Read Metrics on  a project

| Collection        | Create  | Update    | Delete     | Read    |
|------------------ |-------- |-------- |--------  |-------- |
| Metric            | Always <sup>*</sup>  | Always <sup>*</sup>  | Always <sup>*</sup>  | Always <sup>*</sup> |

- Grant access to a client  with a specific role , on a provider

| Collection        | Acl      |
|------------------ | -------- |
| Provider       | Always <sup>*</sup> |

<sup>*</sup> You can always perform that action on a particular Project
<br/>
<br/>

**They can also :**

- Create providers
- Read all the providers
- Update/Delete their  created providers

| Collection        | Create  | Update  | Delete  | Read    |
|------------------ |-------- |-------- |-------- |-------- |
| Provider       | Always  | Entity <sup>*</sup> | Entity <sup>*</sup> | Always  |

<sup>*</sup> You cannot update or delete an existing Provider, if it belongs to a Project.
<br/>
<br/>

- Create metric definitions
- Read all the metric definitions
- Update/Delete their created metric definitions

| Collection        | Create  | Update  | Delete      | Read    |
|------------------ |-------- |-------- |------------- |-------- |
| MetricDefinition  | Always  | Entity <sup>**</sup>  | Entity <sup>**</sup>  | Always  |

<sup>**</sup> You cannot update or delete an existing Metric Definition, if there are Metrics assigned to it.
<br/>
<br/>

- Create Unit Types
- Read all the Unit Types
- Update/Delete their created Unit Types

| Collection        | Create  | Update  | Delete      | Read    |
|------------------ |-------- |-------- |------------- |-------- |
| UnitType  | Always  | Entity <sup>***</sup>  | Entity <sup>***</sup>  | Always  |

<sup>***</sup> You cannot update or delete a Unit Type registered by Accounting Service or a Unit Type used in an existing Metric Definition.
<br/>
<br/>

- Create Metric Types
- Read all the Metric Types
- Update/Delete their created Metric Types

| Collection        | Create  | Update  | Delete      | Read    |
|------------------ |-------- |-------- |------------- |-------- |
| MetricType  | Always  | Entity <sup>****</sup>  | Entity <sup>****</sup>  | Always  |

<sup>****</sup> You cannot update or delete a Metric Type registered by Accounting Service or a Metric Type used in an existing Metric Definition.
<br/>
<br/>

### Provider Admin

A provider admin role,  has full access on the providers it is assigned and can perform all actions on the installations as well as the  metrics that are assigned to the specific providers

**On an assigned provider and the installations/metrics of the provider, the provider  admin role  can :**

- Create/Update/Delete/Read  Installations, on a specific Provider
- Grant access to a client with a specific role , on an installation

| Collection        | Create  | Update    | Delete     | Read    | Acl    |
|------------------ |-------- |-------- |--------  |-------- | ------ |
| Installation      | Always <sup>*</sup>  | Always <sup>*</sup>  | Always <sup>*</sup>   | Always <sup>*</sup>  | Always <sup>*</sup> |

- Create/Update/Delete/Read Metrics on an Installation

| Collection        | Create  | Update    | Delete     | Read    |
|------------------ |-------- |-------- |--------  |-------- |
| Metric            | Always <sup>*</sup>  | Always <sup>*</sup>  | Always <sup>*</sup>   | Always <sup>*</sup>  |

- Grant access to a client  with a specific role , on a provider

| Collection        | Acl    |
|------------------ |-------- |
| Provider         | Always <sup>*</sup>  |

<sup>*</sup> You can always perform that action on a particular Provider
<br/>

### Installation Admin

An installation admin role, has full access on the installations it is assigned and can perform all actions on the metrics that are assigned to the specific installations

**On an assigned installation and the metrics of the installation, the installation  admin role can :**

- Read/Update/Delete installation
- Grant access to a client  with a specific role , on an installation

| Collection        | Update    | Delete     | Read    | Acl    |
|------------------ |-------- |--------  |-------- | ------ |
| Installation      | Always <sup>*</sup>  | Always <sup>*</sup>   | Always <sup>*</sup>  | Always <sup>*</sup> |

- Create/Read/Update/Delete metrics , on an installation

| Collection        | Create  | Update    | Delete     | Read    |
|------------------ |-------- |-------- |--------  |-------- |
| Metric            | Always <sup>*</sup>  | Always <sup>*</sup>  | Always <sup>*</sup>   | Always <sup>*</sup>  |

<sup>*</sup> You can always perform that action on a particular Installation
<br/>
