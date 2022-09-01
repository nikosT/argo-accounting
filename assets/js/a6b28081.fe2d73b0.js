"use strict";(self.webpackChunkaccounting_system=self.webpackChunkaccounting_system||[]).push([[150],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"provider",title:"Provider"},l=void 0,p={unversionedId:"provider",id:"provider",title:"Provider",description:"As Provider, we refer to the Organisation that offers at least one installation to a specific project.",source:"@site/docs/provider.md",sourceDirName:".",slug:"/provider",permalink:"/argo-accounting/docs/provider",draft:!1,tags:[],version:"current",frontMatter:{id:"provider",title:"Provider"},sidebar:"someSidebar",previous:{title:"Project",permalink:"/argo-accounting/docs/project"},next:{title:"Installation",permalink:"/argo-accounting/docs/installation"}},c={},d=[{value:"Registering Provider by following the EOSC Onboarding Process at https://providers.eosc-portal.eu/becomeAProvider",id:"registering-provider-by-following-the-eosc-onboarding-process-at-httpsproviderseosc-portaleubecomeaprovider",level:3},{value:"Registering Provider through Accounting System API",id:"registering-provider-through-accounting-system-api",level:3},{value:"POST - Create a new Provider",id:"post---create-a-new-provider",level:3},{value:"DELETE - Delete an existing Provider",id:"delete---delete-an-existing-provider",level:3},{value:"PATCH - Update an existing Provider",id:"patch---update-an-existing-provider",level:3},{value:"GET - Fetch a registered Provider",id:"get---fetch-a-registered-provider",level:3},{value:"GET - Fetch all registered Providers",id:"get---fetch-all-registered-providers",level:3},{value:"POST - Access Control Entry for a particular Provider of a specific Project",id:"post---access-control-entry-for-a-particular-provider-of-a-specific-project",level:3},{value:"POST - Search for Providers",id:"post---search-for-providers",level:3},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Errors",id:"errors",level:3}],u={toc:d};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As Provider, we refer to the Organisation that offers at least one installation to a specific project."),(0,a.kt)("p",null,"The Provider can either be registered by communicating with EOSC Resource Catalogue, or you can create a new Provider by using the endpoints the Accounting System provides."),(0,a.kt)("h3",{id:"registering-provider-by-following-the-eosc-onboarding-process-at-httpsproviderseosc-portaleubecomeaprovider"},"Registering Provider by following the EOSC Onboarding Process at ",(0,a.kt)("a",{parentName:"h3",href:"https://providers.eosc-portal.eu/becomeAProvider"},"https://providers.eosc-portal.eu/becomeAProvider")),(0,a.kt)("p",null,"The Accounting System communicates with EOSC Providers to retrieve the available Providers.\nA cron job, which runs every day at 12 am, collects the Providers and stores them in the database. From the response we receive we keep specific information which is stored in the collection named Provider. The collection has the following structure:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Provider ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Provider name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"website"),(0,a.kt)("td",{parentName:"tr",align:null},"Url of Provider website")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"abbreviation"),(0,a.kt)("td",{parentName:"tr",align:null},"Provider abbreviation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"logo"),(0,a.kt)("td",{parentName:"tr",align:null},"Url of Provider logo")))),(0,a.kt)("h3",{id:"registering-provider-through-accounting-system-api"},"Registering Provider through Accounting System API"),(0,a.kt)("p",null,"If the Provider is not registered in the EOSC Resource Catalogue, the API offers the functionality to create a new one. Below, we will describe the available operations regarding the Provider that you can interact with."),(0,a.kt)("h3",{id:"post---create-a-new-provider"},"[POST]"," - Create a new Provider"),(0,a.kt)("p",null,"You can submit a new Provider by executing the following POST request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /accounting-system/providers\n\nContent-type: application/json\nAuthorization: Bearer {token}\n\n{\n  "id" : "grnet",\n  "name" : "National Infrastructures for Research and Technology",\n  "website" : "https://www.grnet.gr/",\n  "abbreviation" : "GRNET",\n"logo": : "https://grnet.gr/wp-content/uploads/sites/13/2016/04/GRNET_Logo_Transparent-e1431694322566-1.png"\n}\n')),(0,a.kt)("p",null,"The response is the stored Provider:"),(0,a.kt)("p",null,"Success Response ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n"id" : "grnet",\n"name" : "National Infrastructures for Research and Technology",\n"website" : "https://www.grnet.gr/",\n"abbreviation" : "GRNET",\n"logo": : "https://grnet.gr/wp-content/uploads/sites/13/2016/04/GRNET_Logo_Transparent-e1431694322566-1.png"\n}\n')),(0,a.kt)("h3",{id:"delete---delete-an-existing-provider"},"[DELETE]"," - Delete an existing Provider"),(0,a.kt)("p",null,"You can also delete an existing Provider registered through the Accounting System API by executing the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DELETE /accounting-system/providers/{provider_id}\n\nAuthorization: Bearer {token}\n")),(0,a.kt)("p",null,"If the deletion is successful the following response is returned:"),(0,a.kt)("p",null,"Success Response ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message": "Provider has been deleted successfully."\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Finally, it should be noted that deleting Providers which derive from the EOSC Resource Catalogue  is not allowed.")),(0,a.kt)("h3",{id:"patch---update-an-existing-provider"},"[PATCH]"," - Update an existing Provider"),(0,a.kt)("p",null,"You can update an existing Provider registered through the Accounting System API by executing the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PATCH /accounting-system/providers/{provider_id}\n\nContent-type: application/json\nAuthorization: Bearer {token}\n\n{\n  "id" : "id to be updated",\n  "name" : "name to be updated",\n  "website" : "website to be updated",\n  "abbreviation" : "abbreviation to be updated",\n  "logo" : "logo to be updated"\n}\n')),(0,a.kt)("p",null,"The body of the request must contain an updated representation of Provider. You can update a part or all attributes of the Provider. The empty or null values are ignored."),(0,a.kt)("p",null,"The response will be the updated entity :"),(0,a.kt)("p",null,"Success Response ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "updated_entity"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Finally, it should be noted that updating Providers which derive from the EOSC Resource Catalogue is not allowed.")),(0,a.kt)("h3",{id:"get---fetch-a-registered-provider"},"[GET]"," - Fetch a registered Provider"),(0,a.kt)("p",null,"You can either fetch a Provider registered through the Accounting System API or EOSC Resource Catalogue by executing the following GET HTTP request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /accounting-system/providers/{provider_id}\n\nAuthorization: Bearer {token}\n")),(0,a.kt)("p",null,"The response is as follows:"),(0,a.kt)("p",null,"Success Response ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "id": "osmooc",\n   "name": "Open Science MOOC",\n   "website": "https://opensciencemooc.eu/",\n   "abbreviation": "OSMOOC",\n   "logo": "https://opensciencemooc.eu/assets/img/osm/osm-logo.png"\n}\n')),(0,a.kt)("h3",{id:"get---fetch-all-registered-providers"},"[GET]"," - Fetch all registered Providers"),(0,a.kt)("p",null,"Essentially, the following endpoint returns all Providers available on the EOSC Resource Catalogue as well as all Providers registered through the Accounting System API. By default, the first page of 10 Providers will be returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /accounting-system/providers\n\nAuthorization: Bearer {token}\n")),(0,a.kt)("p",null,"You can tune the default values by using the query parameters page and size as shown in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET /accounting-system/providers?page=2&size=15\n\nAuthorization: Bearer {token}\n")),(0,a.kt)("p",null,"The above request returns the second page which contains 15 providers:"),(0,a.kt)("p",null,"Success Response ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "size_of_page": 15,\n   "number_of_page": 2,\n   "total_elements": 237,\n   "total_pages": 16,\n   "content": [\n       {\n           "id": "ubora",\n           "name": "Open Biomedical Engineering e-platform for Innovation through Education",\n           "website": "http://ubora-biomedical.org/",\n           "abbreviation": "UBORA",\n           "logo": "http://ubora-biomedical.org/wp-content/uploads/2017/01/UBORA-Logo-Final-JPEGb.jpg"\n       },\n       {\n           "id": "bioexcel",\n           "name": "BioExcel Centre of Excellence",\n           "website": "https://bioexcel.eu/",\n           "abbreviation": "BIOEXCEL",\n           "logo": "https://bioexcel.eu/wp-content/uploads/2017/02/Bioexcell_logo_payoff_1080px_transp.png"\n       },\n       {\n           "id": "surf-nl",\n           "name": "SURF",\n           "website": "https://www.surf.nl/",\n           "abbreviation": "SURF",\n           "logo": "https://www.surf.nl/themes/surf/logo.svg"\n       },\n       {\n           "id": "emso_eric",\n           "name": "European Multidisciplinary Seafloor and water column Observatory",\n           "website": "http://emso.eu",\n           "abbreviation": "EMSO ERIC",\n           "logo": "http://emso.eu/wp-content/uploads/2018/03/logo-w-300.png"\n       },\n       {\n           "id": "elixir-belgium",\n           "name": "ELIXIR Belgium",\n           "website": "https://www.elixir-belgium.org/",\n           "abbreviation": "ELIXIR Belgium",\n           "logo": "https://www.elixir-belgium.org/sites/default/files/logo.jpg"\n       },\n       {\n           "id": "cyi",\n           "name": "The Cyprus Institute",\n           "website": "https://www.cyi.ac.cy/",\n           "abbreviation": "CyI",\n           "logo": "https://numismatics-medieval.dioptra.cyi.ac.cy/sites/default/files/CyI.png"\n       },\n       {\n           "id": "uni-freiburg",\n           "name": "University of Freiburg",\n           "website": "https://www.uni-freiburg.de",\n           "abbreviation": "UNI FREIBURG",\n           "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9gnjhQ5503SSs1_6E8Rr7UITWeacwmm3u3rK1eSdLQiKdywpqQ&s"\n       },\n       {\n           "id": "dcc-uk",\n           "name": "Digital Curation Centre",\n           "website": "https://www.dcc.ac.uk/",\n           "abbreviation": "DMPonline",\n           "logo": "https://arts.unimelb.edu.au/__data/assets/image/0009/2913867/DDC2019.jpg"\n       },\n       {\n           "id": "cloudferro",\n           "name": "CloudFerro",\n           "website": "https://cloudferro.com/",\n           "abbreviation": "CloudFerro",\n           "logo": "https://cf2.cloudferro.com:8080/94d2acacf10346a18c289981f4d0bd33:cloudferro_cms/static/img/cloudferro-logo.svg"\n       },\n       {\n           "id": "psnc",\n           "name": "Poznan Supercomputing and Networking Center",\n           "website": "https://www.psnc.pl/",\n           "abbreviation": "PSNC",\n           "logo": "https://www.psnc.pl/files/PSNC_logo_.svg"\n       },\n       {\n           "id": "forschungsdaten",\n           "name": "Forschungsdaten.info",\n           "website": "https://www.forschungsdaten.info/praxis-kompakt/english-pages/",\n           "abbreviation": "forschungsdaten",\n           "logo": "https://www.forschungsdaten.info/typo3temp/secure_downloads/99679/0/ba8ae03722cb4bfb8baa63cfb1ab045bb7a03c78/csm_logo_long_seeblau100_af47d6577b.png"\n       },\n       {\n           "id": "umg-br",\n           "name": "University of Minas Gerais",\n           "website": "https://ufmg.br/",\n           "abbreviation": "UMG",\n           "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Symbolfumg.jpg/375px-Symbolfumg.jpg"\n       },\n       {\n           "id": "coard",\n           "name": "Collaborative Open Access Research and Development",\n           "website": "https://coard.community/",\n           "abbreviation": "COARD",\n           "logo": "https://images.squarespace-cdn.com/content/v1/5f44f92bd523407260108ba6/1598444273981-CRFZ1SC35B9VTRNT0QUS/Coard+logo%402x.png"\n       },\n       {\n           "id": "erasmusmc",\n           "name": "Erasmus Medical Center",\n           "website": "https://www.erasmusmc.nl/",\n           "abbreviation": "Erasmus MC",\n           "logo": "https://seeklogo.com/images/E/Erasmus_MC-logo-B857CA0725-seeklogo.com.png"\n       },\n       {\n           "id": "osmooc",\n           "name": "Open Science MOOC",\n           "website": "https://opensciencemooc.eu/",\n           "abbreviation": "OSMOOC",\n           "logo": "https://opensciencemooc.eu/assets/img/osm/osm-logo.png"\n       }\n   ],\n   "links": [\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/providers?page=1&size=15",\n           "rel": "first"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/providers?page=16&size=15",\n           "rel": "last"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/providers?page=2&size=15",\n           "rel": "self"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/providers?page=1&size=15",\n           "rel": "prev"\n       },\n       {\n           "href": "https://acc.devel.argo.grnet.gr/accounting-system/providers?page=3&size=15",\n           "rel": "next"\n       }\n   ]\n}\n')),(0,a.kt)("h3",{id:"post---access-control-entry-for-a-particular-provider-of-a-specific-project"},"[POST]"," - Access Control Entry for a particular Provider of a specific Project"),(0,a.kt)("p",null,"Any client can have different responsibilities at different Providers. The actions the client can perform at each Provider are determined by the role and the permissions it has."),(0,a.kt)("p",null,"To grant a role to a client on a specific Provider of a Project, you have to execute the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POST /accounting-system/projects/{project_id}/providers/{provider_id}/acl/{who}\n\nContent-Type: application/json\nAuthorization: Bearer {token}\n \n{\n  "roles":[\n     {role_name}\n  ]\n}\n')),(0,a.kt)("p",null,"where {who} is the client ID in which the roles will be assigned."),(0,a.kt)("p",null,"The response is :"),(0,a.kt)("p",null,"Success Response ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message": "Access Control entry has been created successfully."\n}\n')),(0,a.kt)("h3",{id:"post---search-for-providers"},"[POST]"," - Search for Providers"),(0,a.kt)("p",null,"You can search on Providers, to find the ones corresponding to the given search criteria. Providers  can be searched by executing the following request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"POST accounting-system/providers/search\nContent-Type: application/json\n")),(0,a.kt)("h4",{id:"example-1"},"Example 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n\n           "type":"query",\n           "field": "name",\n           "values":"European Space Agency",\n           "operand": "eq"\n   }\n')),(0,a.kt)("h4",{id:"example-2"},"Example 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type": "filter",\n  "operator": "OR",\n  "criteria": [\n    {\n\n           "type":"query",\n           "field": "name",\n           "values":"European Space Agency",\n           "operand": "eq"\n   },\n    {\n\n           "type":"query",\n           "field": "abbreviation",\n           "values":"SITES",\n           "operand": "eq"\n   }\n  ]\n} \n')),(0,a.kt)("p",null,"The context of the request can be a json object of type \u2018query\u2019 or \u2018filter\u2019.\n\u2018query\u2019 defines a criterio in a specific field of the provider. "),(0,a.kt)("p",null,"\u2018query\u2019 can be syntaxed as a json object :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type":string,\n  "field": string ,\n  "values":primitive,\n  "operand": string  \n}\n')),(0,a.kt)("p",null,"In the \u2018query\u2019 element we need to define the following properties:\n| Field          \t| Description   \t      |\n|------------------\t|-------------------------|\n|type                  |The type of the search and it\u2019s value is \u2018query\u2019 |\n|field                 | The field of the collection on which we search |\n|values                |The value of the equation , and it can be of any type depending on the type of the field we search |\n|operand               |The equation we want to apply on the field in order to search results. it\u2019s value can be {eq, neq, lt, lte, gt, gte} |"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1"),' defines a search on field title. The \u2018query\u2019 searches for providers that have title="Functional and Molecular Characterisation of Breast Cancer Stem Cells"\n\u2018filter\u2019 defines multiple criteria and the way they are combined . A filter can include criteria of \u2018filter\u2019 or \u2018query\u2019 types.\n\u2018filter\u2019 can be syntaxed as a json object :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "type":string,\n  "operator": string ,\n  criteria:array of \u2018query\u2019 or \u2018filter\u2019 elements\n}\n')),(0,a.kt)("p",null,"In the \u2018query\u2019 element we need to define the following properties: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"The type of the search and it\u2019s value is \u2018filter\u2019")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"operator"),(0,a.kt)("td",{parentName:"tr",align:null},"The operation on which the elements in the criteria will be combined. it\u2019s values is AND or OR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"criteria"),(0,a.kt)("td",{parentName:"tr",align:null},"The specific subqueries that will be matched by the operator. criteria is an array of objects of \u2018query\u2019 or \u2018filter\u2019 type")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2"),' defines a \u2018filter\u2019 containing criteria both of filter and query type. The \u2018filter\u2019 searches for  providers  that have\nname="European Space Agency" OR abbreviation=\u2019SITES\u2019'),(0,a.kt)("p",null,"If the operation is successful, you get a list of providers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "size_of_page": 2,\n   "number_of_page": 1,\n   "total_elements": 2,\n   "total_pages": 1,\n   "content": [\n       {\n           "id": "esa-int",\n           "name": "European Space Agency",\n           "website": "https://www.esa.int/",\n           "abbreviation": "ESA",\n           "logo": "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2014/03/b_esa_b/14337112-1-eng-GB/b_ESA_b_pillars.png"\n       },\n       {\n           "id": "sites",\n           "name": "Swedish Infrastructure for Ecosystem Science",\n           "website": "https://www.fieldsites.se/en-GB",\n           "abbreviation": "SITES",\n           "logo": "https://dst15js82dk7j.cloudfront.net/231546/95187636-P5q11.png"\n       }\n   ],\n   "links": []\n\n')),(0,a.kt)("p",null,"Otherwise, an empty response will be returned.\n",(0,a.kt)("strong",{parentName:"p"},"Keep in mind that")," to execute the above operation, you must have been assigned a role containing the Provider Acl permission."),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("p",null,"Please refer to section ",(0,a.kt)("a",{parentName:"p",href:"./api_errors"},"Errors")," to see all possible Errors."))}g.isMDXComponent=!0}}]);