"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=i,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),i=r(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7462),i=r(7294),a=r(6010),o=r(2389),l=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:o,block:d,defaultValue:g,values:h,groupId:m,className:f}=e,v=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,l.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===g?g:null!=(t=null!=g?g:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,s.U)(),[x,A]=(0,i.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=m){const e=T[m];null!=e&&e!==x&&y.some((t=>t.value===e))&&A(e)}const P=e=>{const t=e.currentTarget,r=E.indexOf(t),n=y[r].value;n!==x&&(O(t),A(n),null!=m&&w(m,String(n)))},I=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;r=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var i;const t=E.indexOf(e.currentTarget)-1;r=null!=(i=E[t])?i:E[E.length-1];break}}null==(t=r)||t.focus()};return i.createElement("div",{className:(0,a.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:t,label:r,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>E.push(e),onKeyDown:I,onFocus:P,onClick:P},o,{className:(0,a.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),o?(0,i.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function g(e){const t=(0,o.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},1650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),a=r(5488),o=r(5162);const l={id:"registration",title:"Register Accounting Service",sidebar_position:3},s=void 0,u={unversionedId:"guides/registration",id:"guides/registration",title:"Register Accounting Service",description:"Steps to Register into Accounting Service",source:"@site/docs/guides/register.md",sourceDirName:"guides",slug:"/guides/registration",permalink:"/argo-accounting/docs/guides/registration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"registration",title:"Register Accounting Service",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"My Providers",permalink:"/argo-accounting/docs/guides/ui_actions/my_providers"},next:{title:"Setting up a Project",permalink:"/argo-accounting/docs/guides/setting_up_a_project"}},c={},p=[{value:"Steps to Register into Accounting Service",id:"steps-to-register-into-accounting-service",level:3},{value:"The first way",id:"the-first-way",level:3},{value:"The second way",id:"the-second-way",level:3},{value:"Upon successful Registration",id:"upon-successful-registration",level:3},{value:"READ Metric Definitions",id:"read-metric-definitions",level:3},{value:"READ Providers",id:"read-providers",level:3},{value:"READ all Clients",id:"read-all-clients",level:3},{value:"READ Unit Types",id:"read-unit-types",level:3}],d={toc:p};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"steps-to-register-into-accounting-service"},"Steps to Register into Accounting Service"),(0,i.kt)("p",null,"There are two ways to register yourself into Accounting Service :"),(0,i.kt)("h3",{id:"the-first-way"},"The first way"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Authenticate yourself")),(0,i.kt)("br",null),"\nFirst you need to authenticate yourself to EOSC Core Infrastructure Proxy. Instructions are provided ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/authentication/authenticating_clients"},"here")),". Once you gain an access token, copy it.",(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Register yourself")),(0,i.kt)("br",null),"\nThen you need to apply a request to the Accounting Service API, in order to register yourself. ",(0,i.kt)("b",null," For more details, how to syntax the request, see ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/client#post---client-registration"},"here")),".",(0,i.kt)("br",null))),(0,i.kt)("h3",{id:"the-second-way"},"The second way"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Just log in to ",(0,i.kt)("a",{parentName:"p",href:"https://accounting.eosc-portal.eu/"},"Accounting User Interface"),"."),(0,i.kt)("h3",{id:"upon-successful-registration"},"Upon successful Registration"),(0,i.kt)("p",null,"Once you register the Accounting Service, you can perform the following actions:"),(0,i.kt)("h3",{id:"read-metric-definitions"},"READ Metric Definitions"),(0,i.kt)("admonition",{title:"Choose your preferred way",type:"info"},(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"View Metric Definitions on ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/metrics-definitions"},"website"),"."),(0,i.kt)(o.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"All users, with roles, can display all the Metric Definitions, existing in the Accounting Service. Apply a request to the api.",(0,i.kt)("b",null," For more details, how to syntax the request, see ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/metric_definition#get----fetch-all-metric-definitions"},"here"),".")))),(0,i.kt)("h3",{id:"read-providers"},"READ Providers"),(0,i.kt)("admonition",{title:"Choose your preferred way",type:"info"},(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"View Providers on ",(0,i.kt)("a",{href:"https://accounting.eosc-portal.eu/providers"},"website"),"."),(0,i.kt)(o.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"You can read the Providers available on the EOSC Resource Catalogue and the ones registered through the Accounting Service API. Apply a request to the api. ",(0,i.kt)("b",null," For more details, how to syntax the request, see  ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/provider#get---fetch-all-registered-providers"},"here"),".")))),(0,i.kt)("h3",{id:"read-all-clients"},"READ all Clients"),(0,i.kt)("admonition",{title:"Choose your preferred way",type:"info"},(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"It's currently under development."),(0,i.kt)(o.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"You can read all the Clients registered to Accounting Service. Apply a request to the api. ",(0,i.kt)("b",null," For more details, how to syntax the request, see  ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/client#get---read-the-registered-clients"},"here"),".")))),(0,i.kt)("h3",{id:"read-unit-types"},"READ Unit Types"),(0,i.kt)("admonition",{title:"Choose your preferred way",type:"info"},(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ui",label:"User Interface",mdxType:"TabItem"},"It's currently under development."),(0,i.kt)(o.Z,{value:"http",label:"HTTP Request",mdxType:"TabItem"},"You can read all the Unit Types registered to Accounting Service. Apply a request to the api. ",(0,i.kt)("b",null," For more details, how to syntax the request, see  ",(0,i.kt)("a",{href:"https://argoeu.github.io/argo-accounting/docs/api/unit_type#get----fetch-all-the-unit-types"},"here"),".")))))}g.isMDXComponent=!0}}]);