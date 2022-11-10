"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[329],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>p});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(i),p=n,g=h["".concat(c,".").concat(p)]||h[p]||d[p]||r;return i?a.createElement(g,o(o({ref:t},u),{},{components:i})):a.createElement(g,o({ref:t},u))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},7406:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=i(7462),n=(i(7294),i(3905));const r={id:"metric",title:"Manage Metrics",sidebar_position:5},o=void 0,s={unversionedId:"guides/api_actions/metric",id:"guides/api_actions/metric",title:"Manage Metrics",description:"This is a guide that refers to Metrics. Metrics are measures of quantitative assessment, commonly used for assessing, comparing, and tracking usage or performance of a service. They are the main indicators.",source:"@site/docs/guides/api_actions/metrics.md",sourceDirName:"guides/api_actions",slug:"/guides/api_actions/metric",permalink:"/argo-accounting/docs/guides/api_actions/metric",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"metric",title:"Manage Metrics",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Manage Metric Definitions",permalink:"/argo-accounting/docs/guides/api_actions/metric_definition"},next:{title:"Syntax a search filter",permalink:"/argo-accounting/docs/guides/api_actions/search-filter"}},c={},l=[{value:"ASSIGN Metrics,to the Installation",id:"assign-metricsto-the-installation",level:3},{value:"GET details of specific Metric,assigned to the Installation",id:"get-details-of-specific-metricassigned-to-the-installation",level:3},{value:"UPDATE a specific Metric,assigned to the Installation",id:"update-a-specific-metricassigned-to-the-installation",level:3},{value:"DELETE a specific Metric,assigned to the Installation",id:"delete-a-specific-metricassigned-to-the-installation",level:3},{value:"FETCH all Metrics,assigned to the Installation",id:"fetch-all-metricsassigned-to-the-installation",level:3},{value:"SEARCH Metrics,assigned to the Installation",id:"search-metricsassigned-to-the-installation",level:3}],u={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is a guide that refers to Metrics. Metrics are measures of quantitative assessment, commonly used for assessing, comparing, and tracking usage or performance of a service. They are the main indicators.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"If you are permitted to act on one or ore Installations (see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/installation#before-you-start"},"here"),"), you can also act on the Metrics.Via this guide you can see all the options you have."),(0,n.kt)("h3",{id:"assign-metricsto-the-installation"},"ASSIGN Metrics,to the Installation"),(0,n.kt)("details",null,"You can assign one or more Metrics to the Installation.Apply a request to the Accounting Service API.In order to successfully assign a Metric you need to provide a MetricDefinition id,a start and an end period timestamp and a value.",(0,n.kt)("b",null," For more details,how to syntax the request,see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#post---create-a-new-metric"},"here"))),(0,n.kt)("h3",{id:"get-details-of-specific-metricassigned-to-the-installation"},"GET details of specific Metric,assigned to the Installation"),(0,n.kt)("details",null,"You can get the details of a specific Metric,assigned to the Installation.Apply a request to the Accounting Service API.",(0,n.kt)("b",null," For more details,how to syntax the request,see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#get---fetch-an-existing-metric"},"here"))),(0,n.kt)("h3",{id:"update-a-specific-metricassigned-to-the-installation"},"UPDATE a specific Metric,assigned to the Installation"),(0,n.kt)("details",null,"You can update the details of a Metrics, assigned to the Installation. Apply a request to the Accounting Service API.In order to successfully update a specific Metric you need to provide the new properties' values of the Metric.",(0,n.kt)("b",null," For more details,how to syntax the request,see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#patch---update-an-existing-metric"},"here"))),(0,n.kt)("h3",{id:"delete-a-specific-metricassigned-to-the-installation"},"DELETE a specific Metric,assigned to the Installation"),(0,n.kt)("details",null,"You can delete a Metric,assigned to the Installation. Apply a request to the Accounting Service API.",(0,n.kt)("b",null," For more details,how to syntax the request,see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#delete---delete-an-existing-metric"},"here"))),(0,n.kt)("h3",{id:"fetch-all-metricsassigned-to-the-installation"},"FETCH all Metrics,assigned to the Installation"),(0,n.kt)("details",null,"You can fetch all Metrics,assigned to the Installation.Apply a request to the Accounting Service API.",(0,n.kt)("b",null," For more details,how to syntax the request,see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/collect_metrics#get---collecting-metrics-from-specific-installation"},"here"))),(0,n.kt)("h3",{id:"search-metricsassigned-to-the-installation"},"SEARCH Metrics,assigned to the Installation"),(0,n.kt)("details",null,"You can search for specific Metric/Metrics assigned to the Installation,that matches one or more criteria.You can define search criteria on each field of the ",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric"},"Metrics Collection"))," or a combination of search criteria on more than one fields. You can search for Metrics by Metric Definition id, value, period or a combination of them. Apply a request to the Accounting Service API.You need to provide the search criteria in a specific",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/guides/search-filter"},"  syntax"))," .",(0,n.kt)("b",null," For more details,how to syntax the request,see ",(0,n.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric#post---search-for-metrics"},"here"))))}d.isMDXComponent=!0}}]);