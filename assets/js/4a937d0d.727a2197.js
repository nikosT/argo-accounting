"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4087],{4957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(4848),s=t(8453);const a={id:"installation",title:"Installation",sidebar_position:5},r=void 0,o={id:"api/installation",title:"Installation",description:"We use the term installation as it is defined in the Virtual Access documentation to refer to a specific instance or part of a resource/service that is allocated to a specific Project by one Provider.",source:"@site/docs/api/installation.md",sourceDirName:"api",slug:"/api/installation",permalink:"/argo-accounting/docs/api/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"installation",title:"Installation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Provider",permalink:"/argo-accounting/docs/api/provider"},next:{title:"Metric",permalink:"/argo-accounting/docs/api/metric"}},l={},c=[{value:"[POST] - Create a new Installation",id:"post---create-a-new-installation",level:3},{value:"[DELETE] - Delete an existing Installation",id:"delete---delete-an-existing-installation",level:3},{value:"[PATCH] - Update an existing Installation",id:"patch---update-an-existing-installation",level:3},{value:"[GET] - Fetch an existing Installation",id:"get---fetch-an-existing-installation",level:3},{value:"[GET] Fetch all Project Installations",id:"get-fetch-all-project-installations",level:3},{value:"[GET] Fetch all Provider Installations",id:"get-fetch-all-provider-installations",level:3},{value:"[POST] - Access Control Entry for a particular Installation",id:"post---access-control-entry-for-a-particular-installation",level:3},{value:"[POST] - Search for Installations",id:"post---search-for-installations",level:3},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Errors",id:"errors",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We use the term installation as it is defined in the Virtual Access documentation to refer to a specific instance or part of a resource/service that is allocated to a specific Project by one Provider."}),"\n",(0,i.jsx)(n.p,{children:"An Installation can only be generated through the endpoint we are going to describe below."}),"\n",(0,i.jsx)(n.p,{children:"The Installation collection has the following structure:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/argo-accounting/docs/api/project",children:"project"})}),(0,i.jsx)(n.td,{children:"It must point to a Project ID that has already been registered"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/argo-accounting/docs/api/provider",children:"organisation"})}),(0,i.jsx)(n.td,{children:"It must point to a Provider ID that has been either registered through the EOSC Resource Catalogue or Accounting System API"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/argo-accounting/docs/api/resource",children:"resource"})}),(0,i.jsx)(n.td,{children:"This field is optional. If you want to associate an Installation with a Resource, please fill this field in with the corresponding Resource ID from the EOSC Resource Catalogue"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"infrastructure"}),(0,i.jsx)(n.td,{children:"Short name of infrastructure"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"installation"}),(0,i.jsx)(n.td,{children:"Short name of installation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/argo-accounting/docs/api/metric_definition",children:"unit_of_access"})}),(0,i.jsx)(n.td,{children:"It must point to an existing Metric Definition. Obviously, you can add different Metrics to an Installation, but this attribute expresses the primary Unit of Access"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"post---create-a-new-installation",children:"[POST] - Create a new Installation"}),"\n",(0,i.jsx)(n.p,{children:"You can submit a new Installation by executing the following POST request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'POST /accounting-system/installations\n\nContent-type: application/json\nAuthorization: Bearer {token}\n\n{\n  "project" : "101017567t",\n  "organisation" : "grnet",\n  "infrastructure" : "okeanos-knossos",\n  "installation" : "GRNET-KNS",\n  "unit_of_access" : "62973fea0f41a20c683e9014"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Upon inserting the record into the database, the API returns the Installation enhanced with the generated installation ID :"}),"\n",(0,i.jsxs)(n.p,{children:["Success Response ",(0,i.jsx)(n.code,{children:"201 CREATED"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id" : "61dc142f6a278e43e8d6b3be",\n  "project" : "101017567t",\n  "organisation" : "grnet",\n  "infrastructure" : "okeanos-knossos",\n  "installation" : "GRNET-KNS",\n  "unit_of_access": {\n        "metric_definition_id": "62973fea0f41a20c683e9014",\n        "metric_name": "lalala",\n        "metric_description": "Number of users",\n        "unit_type": "#",\n        "metric_type": "aggregated",\n        "creator_id": "115143399384cc3177df5377691ccdbb284cb245fad1c@aai.eosc-portal.eu"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"delete---delete-an-existing-installation",children:"[DELETE] - Delete an existing Installation"}),"\n",(0,i.jsx)(n.p,{children:"You can also delete an existing Installation by executing the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DELETE /accounting-system/installations/{installation_id}\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the deletion is successful the following response is returned:"}),"\n",(0,i.jsxs)(n.p,{children:["Success Response ",(0,i.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n   "code": 200,\n   "message": "Installation has been deleted successfully."\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"patch---update-an-existing-installation",children:"[PATCH] - Update an existing Installation"}),"\n",(0,i.jsx)(n.p,{children:"You can update an existing Installation by executing the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'PATCH /accounting-system/installations/{installation_id}\n\nContent-type: application/json\nAuthorization: Bearer {token}\n\n{\n  "organisation" : "organisation to be updated",\n  "infrastructure" : "infrastructure to be updated",\n  "installation" : "installation to be updated",\n  "unit_of_access" : "unit_of_access to be updated"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The body of the request must contain an updated representation of Installation. You can update a part or all attributes of the Installation. The empty or null values are ignored."}),"\n",(0,i.jsx)(n.p,{children:"The response will be the updated entity :"}),"\n",(0,i.jsxs)(n.p,{children:["Success Response ",(0,i.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n   "updated_entity"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"get---fetch-an-existing-installation",children:"[GET] - Fetch an existing Installation"}),"\n",(0,i.jsx)(n.p,{children:"You can fetch a created Installation by executing the following GET HTTP request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /accounting-system/installations/{installation_id}\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The response is as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["Success Response ",(0,i.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "id": "6350f13072dda00a3ce5f0cb",\n    "project": "725025",\n    "organisation": "sites",\n    "infrastructure": "infra-grnet-test",\n    "installation": "installation-grnet",\n    "unit_of_access": {\n        "metric_definition_id": "6350f12772dda00a3ce5f0ca",\n        "metric_name": "lalala",\n        "metric_description": "Number of users",\n        "unit_type": "#",\n        "metric_type": "aggregated"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"get-fetch-all-project-installations",children:"[GET] Fetch all Project Installations"}),"\n",(0,i.jsx)(n.p,{children:"Essentially, the following endpoint returns all Installations available in a specific Project. By default, the first page of 10 Installations will be returned."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /accounting-system/projects/{project_id}/installations\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can tune the default values by using the query parameters page and size as shown in the example below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /accounting-system/projects/{project_id}/installations?page=2&size=15\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above request returns the second page which contains 15 Installations:"}),"\n",(0,i.jsx)(n.p,{children:"Success Response 200 OK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n   "size_of_page": 15,\n   "number_of_page": 2,\n   "total_elements": 237,\n   "total_pages": 16,\n   "content": [\n   {\n   "id": "62986c61683f693f470bb67c",\n   "organisation": "grnet",\n   "infrastructure": "okeanos-knossos",\n   "installation": "GRNET-KNS",\n   "unit_of_access": {\n       "metric_definition_id": "62986c4e683f693f470bb67b",\n       "metric_name": "number_of_users",\n       "metric_description": "Number of users",\n       "unit_type": "#",\n       "metric_type": "aggregated"\n   }\n   }\n   ],\n   "links": [\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",\n           "rel": "first"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=16&size=15",\n           "rel": "last"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=2&size=15",\n           "rel": "self"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",\n           "rel": "prev"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=3&size=15",\n           "rel": "next"\n       }\n   ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"get-fetch-all-provider-installations",children:"[GET] Fetch all Provider Installations"}),"\n",(0,i.jsx)(n.p,{children:"Essentially, the following endpoint returns all Installations available in a Provider belonging to a specific Project. By default, the first page of 10 Installations will be returned."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /accounting-system/projects/{project_id}/providers/{provider_id}/installations\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can tune the default values by using the query parameters page and size as shown in the example below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /accounting-system/projects/{project_id}/providers/{provider_id}/installations?page=2&size=15\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The above request returns the second page which contains 15 Installations:"}),"\n",(0,i.jsx)(n.p,{children:"Success Response 200 OK"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n   "size_of_page": 15,\n   "number_of_page": 2,\n   "total_elements": 237,\n   "total_pages": 16,\n   "content": [\n        {\n            "id": "6350f13072dda00a3ce5f0cb",\n            "project": "725025",\n            "organisation": "sites",\n            "infrastructure": "infra-grnet-test",\n            "installation": "installation-grnet",\n            "unit_of_access": {\n                "metric_definition_id": "6350f12772dda00a3ce5f0ca",\n                "metric_name": "lalala",\n                "metric_description": "Number of users",\n                "unit_type": "#",\n                "metric_type": "aggregated"\n            }\n        }\n    ],\n   "links": [\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",\n           "rel": "first"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=16&size=15",\n           "rel": "last"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=2&size=15",\n           "rel": "self"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=1&size=15",\n           "rel": "prev"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/installations?page=3&size=15",\n           "rel": "next"\n       }\n   ]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"post---access-control-entry-for-a-particular-installation",children:"[POST] - Access Control Entry for a particular Installation"}),"\n",(0,i.jsx)(n.p,{children:"The same goes for the Installations. Any client can have different responsibilities at different Installations. The actions the client can perform at each Installation are determined by the role, and the permissions it has."}),"\n",(0,i.jsx)(n.p,{children:"To grant a role to a client on a specific Installation, you have to execute the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'POST /accounting-system/installations/{installation_id}/acl/{who}\n\nContent-Type: application/json\nAuthorization: Bearer {token}\n \n{\n  "roles":[\n     {role_name}\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["where ",(0,i.jsx)(n.code,{children:"{who}"})," is the client ID in which the roles will be assigned."]}),"\n",(0,i.jsx)(n.p,{children:"The response is :"}),"\n",(0,i.jsxs)(n.p,{children:["Success Response ",(0,i.jsx)(n.code,{children:"200 OK"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n   "code": 200,\n   "message": "Installation Access Control was successfully created."\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Keep in mind that"})," to execute the above operation, you must have been assigned a role containing the Installation Acl permission."]}),"\n",(0,i.jsx)(n.h3,{id:"post---search-for-installations",children:"[POST] - Search for Installations"}),"\n",(0,i.jsx)(n.p,{children:"You can search on Installations, to find the ones corresponding to the given search criteria. Installations  can be searched by executing the following request:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"POST accounting-system/installations/search\nContent-Type: application/json\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n           "type":"query",\n           "field": "installation",\n           "values": "GRNET-KNS-1",\n           "operand": "eq"         \n\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n "type": "filter",\n "operator": "OR",\n "criteria": [\n   {\n     "type": "filter",\n     "operator": "OR",\n     "criteria": [{\n           "type":"query",\n           "field": "installation",\n           "values": "GRNET-KNS-1",\n           "operand": "eq"         \n\n},{\n           "type":"query",\n           "field": "organisation",\n           "values": "grnet",\n           "operand": "eq"         \n\n}]\n\n   }]}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The context of the request should be a json object. The syntax of the json object , is described ",(0,i.jsxs)("b",{children:[" ",(0,i.jsx)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/search-filter",children:"here"})]}),"\nIf the operation is successful, you get a list of installations"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n   "size_of_page": 2,\n   "number_of_page": 1,\n   "total_elements": 2,\n   "total_pages": 1,\n   "content": [\n       {\n           "installation_id": "62de52a3be6b3a161e01c75b",\n           "project": "750802",\n           "organisation": "sites",\n           "infrastructure": "okeanos-knossos-1",\n           "installation": "GRNET-KNS-1",\n           "unit_of_access": {\n               "metric_definition_id": "62de528dbe6b3a161e01c75a",\n               "metric_name": "number_of_active_users",\n               "metric_description": "Number of active users",\n               "unit_type": "#",\n               "metric_type": "aggregated"\n           }\n       },\n       {\n           "installation_id": "62de532cbe6b3a161e01c75d",\n           "project": "750802",\n           "organisation": "grnet",\n           "infrastructure": "okeanos-knossos-2",\n           "installation": "GRNET-KNS-2",\n           "unit_of_access": {\n               "metric_definition_id": "62de531cbe6b3a161e01c75c",\n               "metric_name": "number_of_users_deleted",\n               "metric_description": "Number of deleted users",\n               "unit_type": "#",\n               "metric_type": "aggregated"\n           }\n       }\n   ],\n   "links": []\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"errors",children:"Errors"}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to section ",(0,i.jsx)(n.a,{href:"./api_errors",children:"Errors"})," to see all possible Errors."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);