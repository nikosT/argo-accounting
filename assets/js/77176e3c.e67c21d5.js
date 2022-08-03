"use strict";(self.webpackChunkaccounting_system=self.webpackChunkaccounting_system||[]).push([[928],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"project",title:"Project"},s=void 0,c={unversionedId:"project",id:"project",title:"Project",description:"A Project is the main resource of the Accounting System. The first step a user must follow is to create a project under which the metric data will belong.",source:"@site/docs/project.md",sourceDirName:".",slug:"/project",permalink:"/argo-accounting/docs/project",draft:!1,tags:[],version:"current",frontMatter:{id:"project",title:"Project"},sidebar:"someSidebar",previous:{title:"Metric Definition",permalink:"/argo-accounting/docs/metric_definition"},next:{title:"Provider",permalink:"/argo-accounting/docs/provider"}},p={},u=[{value:"POST - Register a Project",id:"post---register-a-project",level:3},{value:"POST - Associate Providers with a specific Project",id:"post---associate-providers-with-a-specific-project",level:3},{value:"POST - Dissociate Providers from a Project",id:"post---dissociate-providers-from-a-project",level:3},{value:"GET - Project Hierarchical Structure",id:"get---project-hierarchical-structure",level:3},{value:"GET - Fetch all Projects",id:"get---fetch-all-projects",level:3},{value:"POST - Access Control Entry for a particular Project",id:"post---access-control-entry-for-a-particular-project",level:3},{value:"POST - Access Control Entry for a particular Project",id:"post---access-control-entry-for-a-particular-project-1",level:3},{value:"POST - Search for Projects",id:"post---search-for-projects",level:3},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Errors",id:"errors",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Project is the main resource of the Accounting System. The first step a user must follow is to create a project under which the metric data will belong."),(0,o.kt)("p",null,"Currently, we support only projects that are available in the EU database.  Basically, you can register information about a particular Project in our system using the unique ID that every European Project has for its identification."),(0,o.kt)("h3",{id:"post---register-a-project"},"[POST]"," - Register a Project"),(0,o.kt)("p",null,"In order to register your project, one needs to just send a request to the API with the  unique ID that every European Project has for its identification. So you may register an European Project into the Accounting System via the following action:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /accounting-system/projects/{project_id}\n\nAuthorization: Bearer {token}\n")),(0,o.kt)("p",null,"Once the above request is executed, the Accounting System communicates with OpenAire. From the response we receive, we keep specific information which is stored in the collection named Project. The collection has the following structure:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"Project ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"acronym"),(0,o.kt)("td",{parentName:"tr",align:null},"Project Acronym")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"Project Title")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"start_date"),(0,o.kt)("td",{parentName:"tr",align:null},"Project Start Date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"end_date"),(0,o.kt)("td",{parentName:"tr",align:null},"Project End Date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"call_identifier"),(0,o.kt)("td",{parentName:"tr",align:null},"Project Unique Identifier")))),(0,o.kt)("p",null,"For instance, if you want to register the EGI-ACE project, you have to execute the following request where 101017567 is the ID of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /accounting-system/projects/101017567\n\nAuthorization: Bearer {token}\n")),(0,o.kt)("p",null,"The response is as follows:"),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "id": "101017567",\n   "acronym": "EGI-ACE",\n   "title": "EGI Advanced Computing for EOSC",\n   "start_date": "2021-01-01",\n   "end_date": "2023-06-30",\n   "call_identifier": "H2020-INFRAEOSC-2020-2"\n}\n')),(0,o.kt)("h3",{id:"post---associate-providers-with-a-specific-project"},"[POST]"," - Associate Providers with a specific Project"),(0,o.kt)("p",null,"To be able to register Metrics in an installation, first you must associate a Project with one or more  Providers. The following action is responsible for generating a hierarchical relationship between a Project and one or more Providers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /accounting-system/projects/{project_id}/associate\n\nContent-Type: application-json\nAuthorization: Bearer {token}\n\n{\n   "providers":[\n      "bioexcel",\n      "osmooc",\n      "grnet",\n      "sites"\n   ]\n}\n')),(0,o.kt)("p",null,"The response is:"),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message": "The following providers [bioexcel, osmooc, grnet, sites] have been associated with Project {project_id}"\n}\n')),(0,o.kt)("h3",{id:"post---dissociate-providers-from-a-project"},"[POST]"," - Dissociate Providers from a Project"),(0,o.kt)("p",null,"You can also dissociate one or more Providers from a Project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /accounting-system/projects/{project_id}/dissociate\n\nContent-Type: application-json\nAuthorization: Bearer {token}\n\n{\n   "providers":[\n      "grnet"\n   ]\n}\n')),(0,o.kt)("p",null,"The response is :"),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message": "The following providers [grnet] have been dissociated from Project {project_id}"\n}\n')),(0,o.kt)("p",null,"If there are Installations registered to Provider, the dissociation is not allowed:"),(0,o.kt)("p",null,"Error Response ",(0,o.kt)("inlineCode",{parentName:"p"},"409 CONFLICT")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "code": 409,\n   "message": "Dissociation is not allowed. There are registered Installations to {project_id, provider_id}"\n}\n')),(0,o.kt)("h3",{id:"get---project-hierarchical-structure"},"[GET]"," - Project Hierarchical Structure"),(0,o.kt)("p",null,"You can retrieve the Providers and Installations associated with a specific project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /accounting-system/projects/{project_id}\n\nAuthorization: Bearer {token}\n")),(0,o.kt)("p",null,"Basically, the hierarchical structure of a Project is returned:"),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "project_id": "101017567",\n   "acronym": "EGI-ACE",\n   "title": "EGI Advanced Computing for EOSC",\n   "providers": [\n       {\n           "provider_id": "bioexcel",\n           "name": "BioExcel Centre of Excellence",\n           "installations": []\n       },\n       {\n           "provider_id": "grnet",\n           "name": "National Infrastructures for Research and Technology",\n           "installations": [\n               {\n                   "installation_id": "62a075dddc4e0770e91f651a",\n                   "installation": "GRNET-KNS",\n                   "infrastructure": "okeanos-knossos"\n               }\n           ]\n       },\n       {\n           "provider_id": "osmooc",\n           "name": "Open Science MOOC",\n           "installations": []\n       },\n       {\n           "provider_id": "sites",\n           "name": "Swedish Infrastructure for Ecosystem Science",\n           "installations": []\n       }\n   ]\n}\n')),(0,o.kt)("h3",{id:"get---fetch-all-projects"},"[GET]"," - Fetch all Projects"),(0,o.kt)("p",null,"You can retrieve all Projects assigned to you by executing the following GET request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /accounting-system/projects\n\nAuthorization: Bearer {token}\n")),(0,o.kt)("p",null,"By default, the first page of 10 Projects will be returned. You can tune the default values by using the query parameters page and size as shown in the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET /accounting-system/projects?page=2&size=5\n\nAuthorization: Bearer {token}\n")),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "size_of_page": 3,\n  "number_of_page": 1,\n  "total_elements": 9,\n  "total_pages": 3,\n  "content": [\n    {\n      "project_id": "1214-032274",\n      "acronym": "",\n      "title": "Die biblischen Orte und Regionen im Norden Israels/Pal\xe4stinas in griech.-r\xf6m. Zeit: Topographie, Arch\xe4ologie, literarische Quellen und heutiger Zustand.",\n      "providers": []\n    },\n    {\n      "project_id": "1700115839",\n      "acronym": "",\n      "title": "Code as Law on Cyberspace",\n      "providers": []\n    },\n    {\n      "project_id": "2159864",\n      "acronym": "",\n      "title": "Separate, Combined or Parallel Routes? An Interdisciplinary Approach to Complex Word Processing",\n      "providers": []\n    }\n  ],\n  "links": [\n    {\n      "href": "http://localhost:8080/accounting-system/projects?page=1&size=3",\n      "rel": "first"\n    },\n    {\n      "href": "http://localhost:8080/accounting-system/projects?page=3&size=3",\n      "rel": "last"\n    },\n    {\n      "href": "http://localhost:8080/accounting-system/projects?page=1&size=3",\n      "rel": "self"\n    },\n    {\n      "href": "http://localhost:8080/accounting-system/projects?page=2&size=3",\n      "rel": "next"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"post---access-control-entry-for-a-particular-project"},"[POST]"," - Access Control Entry for a particular Project"),(0,o.kt)("p",null,"The general endpoint that is responsible for creating an Access Control entry for a Project is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /accounting-system/projects/{project_id}/acl/{who}\n\nContent-Type: application/json\nAuthorization: Bearer {token}\n \n{\n  "roles":[\n     {role_name}\n  ]\n}\n')),(0,o.kt)("p",null,"where {who} is the client ID in which the roles will be assigned."),(0,o.kt)("p",null,"The response is :"),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message": "Access Control entry has been created successfully."\n}\n')),(0,o.kt)("p",null,"One client can have different roles at different Projects. For instance, in one Project can be an admin executing all the Project operations while in another it can only read the Project Metrics.\nConsequently, any client can have different responsibilities at different Projects. The actions the client can perform at each Project are determined by the role, and the permissions it has."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep in mind that")," to execute the above operation, you must have been assigned a role containing the Project Acl permission."),(0,o.kt)("h3",{id:"post---access-control-entry-for-a-particular-project-1"},"[POST]"," - Access Control Entry for a particular Project"),(0,o.kt)("p",null,"The general endpoint that is responsible for creating an Access Control entry for a Project is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'POST /accounting-system/projects/{project_id}/acl/{who}\n\nContent-Type: application/json\nAuthorization: Bearer {token}\n \n{\n  "roles":[\n     {role_name}\n  ]\n}\n')),(0,o.kt)("p",null,"where {who} is the client ID in which the roles will be assigned."),(0,o.kt)("p",null,"The response is :"),(0,o.kt)("p",null,"Success Response ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message": "Access Control entry has been created successfully."\n}\n')),(0,o.kt)("p",null,"One client can have different roles at different Projects. For instance, in one Project can be an admin executing all the Project operations while in another it can only read the Project Metrics.\nConsequently, any client can have different responsibilities at different Projects. The actions the client can perform at each Project are determined by the role, and the permissions it has."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep in mind that")," to execute the above operation, you must have been assigned a role containing the Project Acl permission."),(0,o.kt)("h3",{id:"post---search-for-projects"},"[POST]"," - Search for Projects"),(0,o.kt)("p",null,"You can search on Projects, to find the ones corresponding to the given search criteria. Projects  can be searched by executing the following request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST accounting-system/projects/search\nContent-Type: application/json\n\n")),(0,o.kt)("h4",{id:"example-1"},"Example 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' {\n      "type": "query",\n      "field": "title",\n      "values": "Functional and Molecular Characterisation of Breast Cancer Stem Cells",\n      "operand": "eq"\n    }\n')),(0,o.kt)("h4",{id:"example-2"},"Example 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type": "filter",\n  "operator": "OR",\n  "criteria": [\n    {\n      "type": "query",\n      "field": "title",\n      "values": "Functional and Molecular Characterisation of Breast Cancer Stem Cells",\n      "operand": "eq"\n    },\n    {\n      "type": "query",\n      "field": "acronym",\n      "values": "El_CapiTun",\n      "operand": "eq"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"The context of the request can be a json object of type \u2018query\u2019 or \u2018filter\u2019.\n\u2018query\u2019 defines a criterio in a specific field of the project. "),(0,o.kt)("p",null,"\u2018query\u2019 can be syntaxed as a json object :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type":string,\n  "field": string ,\n  "values":primitive,\n  "operand": string  \n}\n')),(0,o.kt)("p",null,"In the \u2018query\u2019 element we need to define the following properties: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of the search and it\u2019s value is \u2018query\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"field"),(0,o.kt)("td",{parentName:"tr",align:null},"The field of the collection on which we search")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"values"),(0,o.kt)("td",{parentName:"tr",align:null},"The value of the equation , and it can be of any type depending on the type of the field we search")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"operand"),(0,o.kt)("td",{parentName:"tr",align:null},"The equation we want to apply on the field in order to search results. it\u2019s value can be {eq, neq, lt, lte, gt, gte}")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1"),' defines a search on field title. The \u2018query\u2019 searches for projects that have title="Functional and Molecular Characterisation of Breast Cancer Stem Cells"\n\u2018filter\u2019 defines multiple criteria and the way they are combined . A filter can include criteria of \u2018filter\u2019 or \u2018query\u2019 types.\n\u2018filter\u2019 can be syntaxed as a json object :'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type":string,\n  "operator": string ,\n  criteria:array of \u2018query\u2019 or \u2018filter\u2019 elements\n}\n')),(0,o.kt)("p",null,"In the \u2018query\u2019 element we need to define the following properties: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of the search and it\u2019s value is \u2018filter\u2019")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"operator"),(0,o.kt)("td",{parentName:"tr",align:null},"The operation on which the elements in the criteria will be combined. it\u2019s values is AND or OR")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"criteria"),(0,o.kt)("td",{parentName:"tr",align:null},"The specific subqueries that will be matched by the operator. criteria is an array of objects of \u2018query\u2019 or \u2018filter\u2019 type")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2"),' defines a \u2018filter\u2019 containing criteria both of filter and query type. The \u2018filter\u2019 searches for  projects  that have\ntitle="TRAJECTORY MODIFICATION IN CHRONIC STROKE PATIENTS"\nOR acronym=\u2019El_CapiTun\u2019'),(0,o.kt)("p",null,"If the operation is successful, you get a list of projects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n   "size_of_page": 2,\n   "number_of_page": 1,\n   "total_elements": 2,\n   "total_pages": 1,\n   "content": [\n       {\n           "project_id": "5R44NS032194-03",\n           "acronym": "",\n           "title": "TRAJECTORY MODIFICATION IN CHRONIC STROKE PATIENTS",\n           "providers": []\n       },\n       {\n           "project_id": "750802",\n           "acronym": "El_CapiTun",\n           "title": "An elastocapillary-enabled self-tunable microfluidic chip",\n           "providers": [\n               {\n                   "provider_id": "grnet",\n                   "name": "National Infrastructures for Research and Technology",\n                   "installations": []\n               },\n               {\n                   "provider_id": "osmooc",\n                   "name": "Open Science MOOC",\n                   "installations": []\n               },\n               {\n                   "provider_id": "sites",\n                   "name": "Swedish Infrastructure for Ecosystem Science",\n                   "installations": [\n                       {\n                           "installation_id": "62da5f68d3d2e80761293830",\n                           "installation": "GRNET-KNS-1",\n                           "infrastructure": "okeanos-knossos-1"\n                       }\n                   ]\n               }\n           ]\n       }\n   ],\n   "links": []\n\n')),(0,o.kt)("p",null,"Otherwise, an empty response will be returned."),(0,o.kt)("h3",{id:"errors"},"Errors"),(0,o.kt)("p",null,"Please refer to section ",(0,o.kt)("a",{parentName:"p",href:"./api_errors"},"Errors")," to see all possible Errors."))}h.isMDXComponent=!0}}]);