"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"metric",title:"Metric",sidebar_position:6},o=void 0,l={unversionedId:"api/metric",id:"api/metric",title:"Metric",description:"In order to register a new Metric in the Accounting System, first you have to complete the following steps:",source:"@site/docs/api/metric.md",sourceDirName:"api",slug:"/api/metric",permalink:"/argo-accounting/docs/api/metric",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"metric",title:"Metric",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/argo-accounting/docs/api/installation"},next:{title:"Collecting Metrics from different levels",permalink:"/argo-accounting/docs/api/collect_metrics"}},c={},s=[{value:"POST - Create a new Metric",id:"post---create-a-new-metric",level:3},{value:"DELETE - Delete an existing Metric",id:"delete---delete-an-existing-metric",level:3},{value:"PATCH - Update an existing Metric",id:"patch---update-an-existing-metric",level:3},{value:"GET - Fetch an existing Metric",id:"get---fetch-an-existing-metric",level:3},{value:"Errors",id:"errors",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to register a new Metric in the Accounting System, first you have to complete the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new Metric Definition"),(0,i.kt)("li",{parentName:"ul"},"Register your Project"),(0,i.kt)("li",{parentName:"ul"},"Correlate Providers with the registered Project"),(0,i.kt)("li",{parentName:"ul"},"Use a Provider from EOSC-Portal or create a new Provider through AS API"),(0,i.kt)("li",{parentName:"ul"},"Create a new Installation")),(0,i.kt)("p",null,"Once you have completed the above steps, you can submit a new metric in the Accounting System."),(0,i.kt)("p",null,"The Metric consists of the following attributes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique ID of the Metric")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric_definition_id"),(0,i.kt)("td",{parentName:"tr",align:null},"Reference Id from the metric definition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"time_period_start"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of the starting date time (Zulu timestamp)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"time_period_end"),(0,i.kt)("td",{parentName:"tr",align:null},"Timestamp of the end date time (Zulu timestamp)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"value"),(0,i.kt)("td",{parentName:"tr",align:null},"Value of the metric for the given period (decimal value)")))),(0,i.kt)("h3",{id:"post---create-a-new-metric"},"[POST]"," - Create a new Metric"),(0,i.kt)("p",null,"You can create a new Metric by executing the following POST request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POST /accounting-system/installations/{installation_id}/metrics\n\nContent-type: application/json\nAuthorization: Bearer {token}\n\n{\n"metric_definition_id" : "62973fea0f41a20c683e9014",\n"time_period_start": "2020-12-20T09:13:07Z",\n"time_period_end": "2020-12-25T11:14:07Z",  \n"value": 700\n}\n')),(0,i.kt)("p",null,"Upon inserting the record into the database, the API returns the Metric enhanced with the metric id :"),(0,i.kt)("p",null,"Success Response ",(0,i.kt)("inlineCode",{parentName:"p"},"201 CREATED")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "metric_id": "72983kea0h41a20c683e3589",\n    "metric_definition_id": "62973fea0f41a20c683e9014",\n    "time_period_start": "2020-12-20T09:13:07Z",\n    "time_period_end": "2020-12-25T11:14:07Z",\n    "value": 700\n}\n')),(0,i.kt)("h3",{id:"delete---delete-an-existing-metric"},"[DELETE]"," - Delete an existing Metric"),(0,i.kt)("p",null,"The client should be able to delete an existing Metric. As a result, the Accounting System API has to offer an operation deleting the Metric that the client wants.\nSubsequently, the registered Metric can be deleted by executing the following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"DELETE /accounting-system/installations/{installation_id}/metrics/{metric_id}\n\nAuthorization: Bearer {token}\n")),(0,i.kt)("p",null,"Upon the successful deletion, the API will return the following informative response:"),(0,i.kt)("p",null,"Success Response ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "message: "The Metric has been deleted successfully." \n}\n')),(0,i.kt)("h3",{id:"patch---update-an-existing-metric"},"[PATCH]"," - Update an existing Metric"),(0,i.kt)("p",null,"The following endpoint is used to update the values of an existing Metric:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'PATCH /accounting-system/installations/{installation_id}/metrics/{id}\n\nContent-type: application/json\nAuthorization: Bearer {token}\n\n{\n   "time_period_start": "time_period_start_to_be_updated",\n   "time_period_end": "time_period_end_to_be_updated",\n   "value": value_to_be_updated\n}\n')),(0,i.kt)("p",null,"In order to update the resource properties, the body of the request must contain an updated representation of Metric. You can update a part or all attributes of the Metric. The empty or null values are ignored.\nThe response will be the updated entity :"),(0,i.kt)("p",null,"Success Response ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "updated_entity"\n}\n')),(0,i.kt)("h3",{id:"get---fetch-an-existing-metric"},"[GET]"," - Fetch an existing Metric"),(0,i.kt)("p",null,"Having the id of a Metric, the client can request the relevant to that id Metric by executing the following request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /accounting-system/installations/{installation_id}/metrics/{metric_id}\n\nAuthorization: Bearer {token}\n")),(0,i.kt)("p",null,"The response is as follows:"),(0,i.kt)("p",null,"Success Response ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{    \n"metric_id": "72983kea0h41a20c683e3589",\n"metric_definition_id": "62973fea0f41a20c683e9014", \n"time_period_start": "2020-12-20T09:13:07Z", \n"time_period_end": "2020-12-25T11:14:07Z",   \n"value": 55\n}\n')),(0,i.kt)("h3",{id:"errors"},"Errors"),(0,i.kt)("p",null,"Please refer to section ",(0,i.kt)("a",{parentName:"p",href:"./api_errors"},"Errors")," to see all possible Errors."))}u.isMDXComponent=!0}}]);