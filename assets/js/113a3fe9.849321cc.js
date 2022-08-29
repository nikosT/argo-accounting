"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),d=l,c=m["".concat(u,".").concat(d)]||m[d]||k[d]||r;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7638:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={id:"accounting_system_roles",title:"Accounting System Roles",sidebar_position:2},i=void 0,o={unversionedId:"authorization/accounting_system_roles",id:"authorization/accounting_system_roles",title:"Accounting System Roles",description:"When clients register to the system, they can perform the following actions :",source:"@site/docs/authorization/accounting_system_roles.md",sourceDirName:"authorization",slug:"/authorization/accounting_system_roles",permalink:"/argo-accounting/docs/authorization/accounting_system_roles",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"accounting_system_roles",title:"Accounting System Roles",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authorising API Resources",permalink:"/argo-accounting/docs/authorization/authorising_api_resources"},next:{title:"Assigning Roles to a Client",permalink:"/argo-accounting/docs/authorization/assigning_roles"}},u={},p=[{value:"Metric Definition Creator",id:"metric-definition-creator",level:3},{value:"Project Admin",id:"project-admin",level:3},{value:"Provider Admin",id:"provider-admin",level:3},{value:"Installation Admin",id:"installation-admin",level:3}],s={toc:p};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When clients register to the system, they can perform the following actions :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read all the metric definitions")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MetricDefinition"),(0,l.kt)("td",{parentName:"tr",align:null},"Always")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read all the providers")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"Always")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read all the clients")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client"),(0,l.kt)("td",{parentName:"tr",align:null},"Always")))),(0,l.kt)("p",null,"By default, in the accounting system the following roles exist and can be assigned to the registered client."),(0,l.kt)("h3",{id:"metric-definition-creator"},"Metric Definition Creator"),(0,l.kt)("p",null,"Metric Definition Creator can perform the following actions :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create metric definitions"),(0,l.kt)("li",{parentName:"ul"},"Read all the metric definitions"),(0,l.kt)("li",{parentName:"ul"},"Update/Delete their  created metric definitions")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MetricDefinition"),(0,l.kt)("td",{parentName:"tr",align:null},"Always"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Entity ",(0,l.kt)("sup",null,"**")),(0,l.kt)("td",{parentName:"tr",align:null},"Always")))),(0,l.kt)("sup",null,"*")," You cannot update an existing Metric Definition, if there are Metrics assigned to it.",(0,l.kt)("br",null),(0,l.kt)("sup",null,"**")," You cannot delete an existing Metric Definition, if there are Metrics assigned to it.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"project-admin"},"Project Admin"),(0,l.kt)("p",null,"Project admin role, has  full access  on the projects it is assigned and can perform all actions on the projects as well as the providers, installations and metrics that are assigned to these projects."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"On an assigned project and the providers/installation/metrics of the project, the project admin role can : ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Register the assigned Project"),(0,l.kt)("li",{parentName:"ul"},"Read the project"),(0,l.kt)("li",{parentName:"ul"},"Associate and dissociate providers on the project"),(0,l.kt)("li",{parentName:"ul"},"Grant access to a client  with a specific role, on a project")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Register"),(0,l.kt)("th",{parentName:"tr",align:null},"Associate"),(0,l.kt)("th",{parentName:"tr",align:null},"Dissociate"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"),(0,l.kt)("th",{parentName:"tr",align:null},"Acl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Project"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create/Update/Delete/Read  Installations, on a project"),(0,l.kt)("li",{parentName:"ul"},"Grant access to a client with a specific role , on an installation")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"),(0,l.kt)("th",{parentName:"tr",align:null},"Acl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Installation"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create/Update/Delete/Read Metrics on  a project")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Metric"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create providers"),(0,l.kt)("li",{parentName:"ul"},"Read all the providers"),(0,l.kt)("li",{parentName:"ul"},"Update/Delete their  created providers"),(0,l.kt)("li",{parentName:"ul"},"Grant access to a client  with a specific role , on a provider")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"),(0,l.kt)("th",{parentName:"tr",align:null},"Acl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"Always"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity ",(0,l.kt)("sup",null,"**")),(0,l.kt)("td",{parentName:"tr",align:null},"Entity ",(0,l.kt)("sup",null,"***")),(0,l.kt)("td",{parentName:"tr",align:null},"Always"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("sup",null,"*")," You can always perform that action on a particular Project",(0,l.kt)("br",null),(0,l.kt)("sup",null,"**")," You cannot update an existing Provider, if it belongs to a Project.",(0,l.kt)("br",null),(0,l.kt)("sup",null,"***")," You cannot delete an existing Provider, if it belongs to a Project.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"provider-admin"},"Provider Admin"),(0,l.kt)("p",null,"A provider admin role,  has full access on the providers it is assigned and can perform all actions on the installations as well as the  metrics that are assigned to the specific providers"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"On an assigned provider and the installations/metrics of the provider, the provider  admin role  can : ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create/Update/Delete/Read  Installations, on a specific Provider"),(0,l.kt)("li",{parentName:"ul"},"Grant access to a client with a specific role , on an installation")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"),(0,l.kt)("th",{parentName:"tr",align:null},"Acl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Installation"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create/Update/Delete/Read Metrics on an Installation")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Metric"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Grant access to a client  with a specific role , on a provider")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Acl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Provider"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("sup",null,"*")," You can always perform that action on a particular Provider",(0,l.kt)("br",null),(0,l.kt)("h3",{id:"installation-admin"},"Installation Admin"),(0,l.kt)("p",null,"An installation admin role, has full access on the installations it is assigned and can perform all actions on the metrics that are assigned to the specific installations"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"On an assigned installation and the metrics of the installation, the installation  admin role can : ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Read/Update/Delete installation"),(0,l.kt)("li",{parentName:"ul"},"Grant access to a client  with a specific role , on an installation")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"),(0,l.kt)("th",{parentName:"tr",align:null},"Acl"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Installation"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create/Read/Update/Delete metrics , on an installation")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Collection"),(0,l.kt)("th",{parentName:"tr",align:null},"Create"),(0,l.kt)("th",{parentName:"tr",align:null},"Update"),(0,l.kt)("th",{parentName:"tr",align:null},"Delete"),(0,l.kt)("th",{parentName:"tr",align:null},"Read"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Metric"),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*")),(0,l.kt)("td",{parentName:"tr",align:null},"Always ",(0,l.kt)("sup",null,"*"))))),(0,l.kt)("sup",null,"*")," You can always perform that action on a particular Installation",(0,l.kt)("br",null))}k.isMDXComponent=!0}}]);