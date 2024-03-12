"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5802],{3977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(4848),s=r(8453);const i={id:"resource",title:"Resource",sidebar_position:9},o=void 0,c={id:"api/resource",title:"Resource",description:"The Accounting System communicates with EOSC Resource Catalogue to retrieve the available Resources. From the response we receive we keep specific information, which expresses a Resource. The Resource for the Accounting Service has the following structure:",source:"@site/docs/api/resource.md",sourceDirName:"api",slug:"/api/resource",permalink:"/argo-accounting/docs/api/resource",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"resource",title:"Resource",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Unit Type",permalink:"/argo-accounting/docs/api/unit_type"},next:{title:"Collecting Metrics from different levels",permalink:"/argo-accounting/docs/api/collect_metrics"}},a={},l=[{value:"[GET] - Fetch the available EOSC Resources",id:"get---fetch-the-available-eosc-resources",level:3},{value:"Errors",id:"errors",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Accounting System communicates with EOSC Resource Catalogue to retrieve the available Resources. From the response we receive we keep specific information, which expresses a Resource. The Resource for the Accounting Service has the following structure:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"id"}),(0,n.jsx)(t.td,{children:"A unique Resource identifier"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"The name of Resource"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"get---fetch-the-available-eosc-resources",children:"[GET] - Fetch the available EOSC Resources"}),"\n",(0,n.jsx)(t.p,{children:"The client can retrieve the Resources that are available in the EOSC Resource Catalogue by executing the following request:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"GET /accounting-system/resources\n\nAuthorization: Bearer {token}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The response returned to the client is the following:"}),"\n",(0,n.jsxs)(t.p,{children:["Success Response ",(0,n.jsx)(t.code,{children:"200 OK"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'{\n  "size_of_page": 10,\n  "number_of_page": 1,\n  "total_elements": 15,\n  "total_pages": 2,\n  "links": [\n    {\n      "href": "http://localhost:8080/accounting-system/metric-definitions/61eeab7bb3b68f5c3f8c4c24/metrics?page=1&size=10",\n      "rel": "first"\n    }\n  ],\n  "content": [\n    {\n      "id": "openaire.european_marine_science_openaire_dashboard",\n      "name": "European Marine Science OpenAIRE Community Gateway"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsxs)(t.p,{children:["Please refer to section ",(0,n.jsx)(t.a,{href:"./api_errors",children:"Errors"})," to see all possible Errors."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);