"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(v,a(a({ref:t},l),{},{components:n})):o.createElement(v,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={id:"test_prod_environment",title:"Development and Production Environment",sidebar_position:1,slug:"/"},a=void 0,s={unversionedId:"system/test_prod_environment",id:"system/test_prod_environment",title:"Development and Production Environment",description:"Our development and production environments are designed to facilitate the development, testing, and deployment of our software applications in a secure and stable environment. This document provides an overview of our development and production environments.",source:"@site/docs/system/test_prod_environments.md",sourceDirName:"system",slug:"/",permalink:"/argo-accounting/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"test_prod_environment",title:"Development and Production Environment",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",previous:{title:"Accounting System",permalink:"/argo-accounting/docs/category/accounting-system"},next:{title:"Accounting System API",permalink:"/argo-accounting/docs/system/accounting_system_api"}},c={},p=[{value:"Development Environment Location",id:"development-environment-location",level:3},{value:"Production Environment Location",id:"production-environment-location",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Our development and production environments are designed to facilitate the development, testing, and deployment of our software applications in a secure and stable environment. This document provides an overview of our development and production environments."),(0,r.kt)("p",null,"The purpose of our development and production environments are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Development Environment:")," To provide a secure and stable environment for software development and testing activities. This environment is isolated from our production environment, ensuring that any issues or bugs discovered during development and testing do not affect our production systems.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Production Environment:")," To provide a secure and stable environment for hosting and running our software applications in a live production environment."))),(0,r.kt)("p",null,"Our development and production environments consist of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accounting System API:")," The REST API is the core component of our software applications. It receives input data from external systems and stores it in the database. The API is responsible for aggregating and processing the data, making it available for querying through the user interface. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface:")," The user interface is the primary point of interaction for clients to access the Accounting Service. It provides a graphical interface that allows users to view and interact with accounting data."))),(0,r.kt)("h3",{id:"development-environment-location"},"Development Environment Location"),(0,r.kt)("p",null,"Our development environment consists of two components: the REST API and User Interface.\nThe REST API is accessible via the development API URL, which is currently ",(0,r.kt)("a",{parentName:"p",href:"https://acc.devel.argo.grnet.gr/"},"https://acc.devel.argo.grnet.gr/"),". The User Interface is accessible via the development UI URL, which is currently ",(0,r.kt)("a",{parentName:"p",href:"https://accounting-eosc-dev.apps.wok.in2p3.fr/"},"https://accounting-eosc-dev.apps.wok.in2p3.fr/"),". "),(0,r.kt)("p",null,"This environment is dedicated to development and testing activities and is isolated from the production environment. Access to the development environment is restricted to authorized personnel only.\nIf you require access to our development environment via the API, please identify yourself at the ",(0,r.kt)("a",{parentName:"p",href:"https://acc.devel.argo.grnet.gr/oidc-client/index.php"},"demo AAI Proxy"),". Otherwise, just log in to development Accounting User Interface."),(0,r.kt)("h3",{id:"production-environment-location"},"Production Environment Location"),(0,r.kt)("p",null,"Our production environment consists of two components: the REST API and User Interface.\nThe REST API is accessible via the production API URL, which is currently ",(0,r.kt)("a",{parentName:"p",href:"https://api.accounting.argo.grnet.gr/"},"https://api.accounting.argo.grnet.gr/"),". The User Interface is accessible via the production UI URL, which is currently ",(0,r.kt)("a",{parentName:"p",href:"https://accounting.eosc-portal.eu/"},"https://accounting.eosc-portal.eu/"),"."),(0,r.kt)("p",null,"Access to the production environment is restricted to authorized personnel only.\nIf you require access to our production environment via the API, please identify yourself at the ",(0,r.kt)("a",{parentName:"p",href:"https://api.accounting.argo.grnet.gr/oidc-client/index.php"},"production AAI Proxy"),". Otherwise, just log in to production Accounting User Interface."))}u.isMDXComponent=!0}}]);