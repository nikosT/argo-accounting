"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5113],{4023:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=s(4848),n=s(8453);const d={id:"api_errors",title:"API Errors",sidebar_position:11},i=void 0,o={id:"api/api_errors",title:"API Errors",description:"Errors",source:"@site/docs/api/api_errors.md",sourceDirName:"api",slug:"/api/api_errors",permalink:"/argo-accounting/docs/api/api_errors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"api_errors",title:"API Errors",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Collecting Metrics from different levels",permalink:"/argo-accounting/docs/api/collect_metrics"},next:{title:"Guides",permalink:"/argo-accounting/docs/category/guides"}},c={},l=[{value:"Errors",id:"errors",level:2},{value:"Error Codes",id:"error-codes",level:2}];function a(e){const r={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"errors",children:"Errors"}),"\n",(0,t.jsx)(r.p,{children:"In case of Error during handling user\u2019s request the API responds using the following schema:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "code": 500,\n  "message": "Internal Server Error"\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,t.jsx)(r.p,{children:"The following error codes are the possible errors of all methods"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Error"}),(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Status"}),(0,t.jsx)(r.th,{children:"Related Requests"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Bad Request"}),(0,t.jsx)(r.td,{children:"400"}),(0,t.jsx)(r.td,{children:"BAD_REQUEST"}),(0,t.jsx)(r.td,{children:"All POST, PATCH, and PUT requests"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Unauthorized"}),(0,t.jsx)(r.td,{children:"401"}),(0,t.jsx)(r.td,{children:"UNAUTHORIZED"}),(0,t.jsxs)(r.td,{children:["All requests ",(0,t.jsx)(r.em,{children:"(if a user is not authenticated)"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Forbidden Access to Resource"}),(0,t.jsx)(r.td,{children:"403"}),(0,t.jsx)(r.td,{children:"FORBIDDEN"}),(0,t.jsxs)(r.td,{children:["All requests ",(0,t.jsx)(r.em,{children:"(if a user is forbidden to access the resource)"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Entity Not Found"}),(0,t.jsx)(r.td,{children:"404"}),(0,t.jsx)(r.td,{children:"NOT_FOUND"}),(0,t.jsx)(r.td,{children:"All GET requests"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Entity already exists"}),(0,t.jsx)(r.td,{children:"409"}),(0,t.jsx)(r.td,{children:"CONFLICT"}),(0,t.jsx)(r.td,{children:"All POST, PATCH, and PUT requests"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Cannot consume content type"}),(0,t.jsx)(r.td,{children:"415"}),(0,t.jsx)(r.td,{children:"UNSUPPORTED_MEDIA_TYPE"}),(0,t.jsx)(r.td,{children:"All POST, PATCH, and PUT requests"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Internal Server Error"}),(0,t.jsx)(r.td,{children:"500"}),(0,t.jsx)(r.td,{children:"INTERNAL_SERVER_ERROR"}),(0,t.jsx)(r.td,{children:"All requests"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>o});var t=s(6540);const n={},d=t.createContext(n);function i(e){const r=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:r},e.children)}}}]);