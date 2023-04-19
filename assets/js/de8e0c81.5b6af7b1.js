"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,g=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={id:"accounting_system_api",title:"Accounting System API",sidebar_position:2},o=void 0,c={unversionedId:"system/accounting_system_api",id:"system/accounting_system_api",title:"Accounting System API",description:"The Accounting System is a platform that is responsible for collecting, aggregating, and exchanging the metrics between different infrastructures, providers, and projects.",source:"@site/docs/system/accounting_system_api.md",sourceDirName:"system",slug:"/system/accounting_system_api",permalink:"/argo-accounting/docs/system/accounting_system_api",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"accounting_system_api",title:"Accounting System API",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Development and Production Environment",permalink:"/argo-accounting/docs/"},next:{title:"Authenticating Clients",permalink:"/argo-accounting/docs/category/authenticating-clients"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Accounting System is a platform that is responsible for collecting, aggregating, and exchanging the metrics between different infrastructures, providers, and projects."),(0,i.kt)("p",null,"Essentially, the main functions of the platform are expressed by a REST API. Therefore, the primary duties of the API are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accepting input from several different resources."),(0,i.kt)("li",{parentName:"ul"},"Storing the input into a database."),(0,i.kt)("li",{parentName:"ul"},"Aggregating the incoming input."),(0,i.kt)("li",{parentName:"ul"},"Offering the aggregated input to several different clients."),(0,i.kt)("li",{parentName:"ul"},"Request accounting data for a specific time period.")),(0,i.kt)("p",null,"In addition, API resources must only be obtainable by authenticated clients. For this reason, every client who wants access to API resources should be authenticated."))}p.isMDXComponent=!0}}]);