"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[684],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>p});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),c=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,u=r(t,["components","mdxType","originalType","parentName"]),h=c(a),p=n,g=h["".concat(l,".").concat(p)]||h[p]||d[p]||o;return a?i.createElement(g,s(s({ref:e},u),{},{components:a})):i.createElement(g,s({ref:e},u))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=h;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:n,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},228:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const o={id:"installation",title:"Manage Installations",sidebar_position:2},s=void 0,r={unversionedId:"guides/installation",id:"guides/installation",title:"Manage Installations",description:"Before you start",source:"@site/docs/guides/installations.md",sourceDirName:"guides",slug:"/guides/installation",permalink:"/argo-accounting/docs/guides/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"installation",title:"Manage Installations",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage providers",permalink:"/argo-accounting/docs/guides/provider"},next:{title:"Syntax a search filter",permalink:"/argo-accounting/docs/guides/search-filter"}},l={},c=[{value:"Before you start",id:"before-you-start",level:3},{value:"OPERATIONS",id:"operations",level:2},{value:"READ the installation",id:"read-the-installation",level:3},{value:"UPDATE the installation",id:"update-the-installation",level:3},{value:"DELETE the installation",id:"delete-the-installation",level:3},{value:"ASSIGN metrics to the installation",id:"assign-metrics-to-the-installation",level:3},{value:"READ a specific metric assigned to the installation",id:"read-a-specific-metric-assigned-to-the-installation",level:3},{value:"UPDATE a specific metric belonging to the installation",id:"update-a-specific-metric-belonging-to-the-installation",level:3},{value:"DELETE a specific metric belonging to the installation",id:"delete-a-specific-metric-belonging-to-the-installation",level:3},{value:"COLLECT metrics assigned to an installation",id:"collect-metrics-assigned-to-an-installation",level:3},{value:"SEARCH metrics assigned to an installation",id:"search-metrics-assigned-to-an-installation",level:3}],u={toc:c};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"You can manage an installation assigned to a specific project and provider.\nFirstly, you need to be registered to the accounting-system and then you need to contact the administrator of the project or the administrator of the project's provider, that this installation is associated with, to assign you one or more roles on the installation"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE")," In accounting sytem, already exists the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"installation_admin"))," role , that permits the user to perform any operation on a specific Installation. In case the user is assigned with any other role, he can perform according to the defined role's permissions"),(0,n.kt)("h2",{id:"operations"},"OPERATIONS"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"read-the-installation"},"READ the installation"),(0,n.kt)("details",null,"You can display the installation's details. Apply a request to the api.",(0,n.kt)("b",null," For more details ,how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#get---fetch-an-existing-installation"},"here")),(0,n.kt)("b",null," For more details, how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#get---fetch-an-existing-installation"},"here"))),(0,n.kt)("h3",{id:"update-the-installation"},"UPDATE the installation"),(0,n.kt)("details",null,"You can update the installation's details. Apply a request to the api, providing the new values of the installation's properties",(0,n.kt)("b",null," For more details, how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#patch---update-an-existing-installation"},"here"))),(0,n.kt)("h3",{id:"delete-the-installation"},"DELETE the installation"),(0,n.kt)("details",null,"You can delete the installation.Apply a request to the api. If metrics are assigned to the installation , no DELETE action can take place. In this case, you need to delete all the assigned metrics.",(0,n.kt)("b",null," For more details, how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#delete---delete-an-existing-installation"},"here"))),(0,n.kt)("h3",{id:"assign-metrics-to-the-installation"},"ASSIGN metrics to the installation"),(0,n.kt)("details",null,"You can assign one or more metrics to the installation. Apply a request to the api. In order to successfully assign a metric you need to provide a metric definition id, a start and an end period timestamp and a value.",(0,n.kt)("b",null," For more details , how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#post---create-a-new-metric"},"here"))),(0,n.kt)("h3",{id:"read-a-specific-metric-assigned-to-the-installation"},"READ a specific metric assigned to the installation"),(0,n.kt)("details",null,"You can display the details of a metric assigned to the installation. Apply a request to the api",(0,n.kt)("b",null," For more details ,how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#get---fetch-an-existing-metric"},"here"))),(0,n.kt)("h3",{id:"update-a-specific-metric-belonging-to-the-installation"},"UPDATE a specific metric belonging to the installation"),(0,n.kt)("details",null,"You can update an assigned metrics's details. Apply a request to the api. In order to successfully update a specific metric you need to provide the new properties' values of the metric.",(0,n.kt)("b",null," For more details, how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#patch---update-an-existing-metric"},"here"))),(0,n.kt)("h3",{id:"delete-a-specific-metric-belonging-to-the-installation"},"DELETE a specific metric belonging to the installation"),(0,n.kt)("details",null,"You can delete an assigned metric. Apply a request to the api.",(0,n.kt)("b",null," For more details ,how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#delete---delete-an-existing-metric"},"here"))),(0,n.kt)("h3",{id:"collect-metrics-assigned-to-an-installation"},"COLLECT metrics assigned to an installation"),(0,n.kt)("details",null,"You can collect and read  all the metrics that are assigned to the installation. Apply a request to the api.",(0,n.kt)("b",null," For more details, how to syntax the request, see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/collect_metrics#get---collecting-metrics-from-specific-installation"},"here"))),(0,n.kt)("h3",{id:"search-metrics-assigned-to-an-installation"},"SEARCH metrics assigned to an installation"),(0,n.kt)("details",null,"You can search for specific metric/metrics assigned to an installation, that matches one or more criteria. Apply a request to the api. You need to provide the search criteria in a specific",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/search-filter"},"  syntax"))," .",(0,n.kt)("b",null," For more details ,how to syntax the request, see ",(0,n.kt)("a",{href:""},"here"))),(0,n.kt)("hr",null))}d.isMDXComponent=!0}}]);