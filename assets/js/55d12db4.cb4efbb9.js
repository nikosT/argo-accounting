"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return r?o.createElement(g,n(n({ref:t},p),{},{components:r})):o.createElement(g,n({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var c=2;c<a;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),i=(r(7294),r(3905));const a={id:"provider",title:"Manage providers",sidebar_position:1},n=void 0,s={unversionedId:"guides/provider",id:"guides/provider",title:"Manage providers",description:"Before you start",source:"@site/docs/guides/providers.md",sourceDirName:"guides",slug:"/guides/provider",permalink:"/argo-accounting/docs/guides/provider",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"provider",title:"Manage providers",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/argo-accounting/docs/category/guides"},next:{title:"Manage Installations",permalink:"/argo-accounting/docs/guides/installation"}},l={},c=[{value:"Before you start",id:"before-you-start",level:3},{value:"OPERATIONS",id:"operations",level:2},{value:"READ the provider",id:"read-the-provider",level:3},{value:"ASSIGN installations to the provider",id:"assign-installations-to-the-provider",level:3},{value:"COLLECT all installations assigned to the provider",id:"collect-all-installations-assigned-to-the-provider",level:3},{value:"SEARCH installations",id:"search-installations",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"before-you-start"},"Before you start"),(0,i.kt)("p",null,"You can manage a provider assigned to a specific project.\nFirstly, you need to be registered to the accounting-system and then you need to contact the administrator of the project, that this provider is associated with, to assign you one or more roles on the provider. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u039d\u039f\u03a4\u0395")," In accounting sytem, already exists the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"provider_admin"))," role , that permits the user to perform any operation, on a specific provider. In case the user is assigned with any other role, he can operate according to the role's permissions."),(0,i.kt)("h2",{id:"operations"},"OPERATIONS"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"read-the-provider"},"READ the provider"),(0,i.kt)("details",null,"You can display the providers's details. Apply a request to the api.",(0,i.kt)("b",null," For more details,how to syntax the request, see ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/provider#get---fetch-an-existing-provider"},"here"))),(0,i.kt)("h3",{id:"assign-installations-to-the-provider"},"ASSIGN installations to the provider"),(0,i.kt)("details",null,"You can assign one or more installations to the provider. Apply a request to the api.",(0,i.kt)("b",null," For more details,how to syntax the request, see ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#post---create-a-new-installation"},"here"))),(0,i.kt)("h3",{id:"collect-all-installations-assigned-to-the-provider"},"COLLECT all installations assigned to the provider"),(0,i.kt)("details",null,"You can collect and display the details of all the installations assigned to the provider. Apply a request to the api",(0,i.kt)("b",null," For more details,how to syntax the request, see ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#get-fetch-all-provider-installations"},"here"))),(0,i.kt)("h3",{id:"search-installations"},"SEARCH installations"),(0,i.kt)("details",null,"You can search for specific installation assigned to the provider, that matches one or more criteria. Apply a request to the api. You need to provide the search criteria in a specific ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/search-filter"}," syntax")),". ",(0,i.kt)("b",null," For more details,how to syntax the request, see ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#post---search-for-installations"},"here"))),(0,i.kt)("b",null," Also, if the role, assigned to you , is administrative,  you are permitted to perform all the actions described at this ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/installation"}," section")),", on the installations assigned to the provider",(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);