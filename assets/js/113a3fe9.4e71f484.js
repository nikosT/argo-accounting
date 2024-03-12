"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8616],{1825:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=n(4848),t=n(8453);const l={id:"accounting_system_roles",title:"Accounting System Roles",sidebar_position:2},r=void 0,d={id:"authorization/accounting_system_roles",title:"Accounting System Roles",description:"When clients register to the system, they can perform the following actions :",source:"@site/docs/authorization/accounting_system_roles.md",sourceDirName:"authorization",slug:"/authorization/accounting_system_roles",permalink:"/argo-accounting/docs/authorization/accounting_system_roles",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"accounting_system_roles",title:"Accounting System Roles",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authorising API Resources",permalink:"/argo-accounting/docs/authorization/authorising_api_resources"},next:{title:"Assigning Roles to a Client",permalink:"/argo-accounting/docs/authorization/assigning_roles"}},c={},h=[{value:"Project Admin",id:"project-admin",level:3},{value:"Provider Admin",id:"provider-admin",level:3},{value:"Installation Admin",id:"installation-admin",level:3}];function a(e){const s={h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"When clients register to the system, they can perform the following actions :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read all the metric definitions"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MetricDefinition"}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read all the providers"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Provider"}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read all the Unit Types"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"UnitType"}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read all the Metric Types"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MetricType"}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read all the clients"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Client"}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsx)(s.p,{children:"By default, in the accounting system the following roles exist and can be assigned to the registered client."}),"\n",(0,i.jsx)(s.h3,{id:"project-admin",children:"Project Admin"}),"\n",(0,i.jsx)(s.p,{children:"Project admin role, has  full access  on the projects it is assigned and can perform all actions on the projects as well as the providers, installations and metrics that are assigned to these projects."}),"\n",(0,i.jsx)(s.p,{children:"**On an assigned project and the providers/installation/metrics of the project, the project admin role can : **"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read the project"}),"\n",(0,i.jsx)(s.li,{children:"Associate and dissociate providers on the project"}),"\n",(0,i.jsx)(s.li,{children:"Grant access to a client  with a specific role, on a project"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Associate"}),(0,i.jsx)(s.th,{children:"Dissociate"}),(0,i.jsx)(s.th,{children:"Read"}),(0,i.jsx)(s.th,{children:"Acl"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Project"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create/Update/Delete/Read  Installations, on a project"}),"\n",(0,i.jsx)(s.li,{children:"Grant access to a client with a specific role , on an installation"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"}),(0,i.jsx)(s.th,{children:"Acl"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Installation"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create/Update/Delete/Read Metrics on  a project"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Metric"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Grant access to a client  with a specific role , on a provider"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Acl"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Provider"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"*"})," You can always perform that action on a particular Project"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.p,{children:"**They can also : **"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create providers"}),"\n",(0,i.jsx)(s.li,{children:"Read all the providers"}),"\n",(0,i.jsx)(s.li,{children:"Update/Delete their  created providers"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Provider"}),(0,i.jsx)(s.td,{children:"Always"}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"*"})," You cannot update or delete an existing Provider, if it belongs to a Project."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create metric definitions"}),"\n",(0,i.jsx)(s.li,{children:"Read all the metric definitions"}),"\n",(0,i.jsx)(s.li,{children:"Update/Delete their created metric definitions"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MetricDefinition"}),(0,i.jsx)(s.td,{children:"Always"}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"**"})]}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"**"})]}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"**"})," You cannot update or delete an existing Metric Definition, if there are Metrics assigned to it."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create Unit Types"}),"\n",(0,i.jsx)(s.li,{children:"Read all the Unit Types"}),"\n",(0,i.jsx)(s.li,{children:"Update/Delete their created Unit Types"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"UnitType"}),(0,i.jsx)(s.td,{children:"Always"}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"***"})]}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"***"})]}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"***"})," You cannot update or delete a Unit Type registered by Accounting Service or a Unit Type used in an existing Metric Definition."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create Metric Types"}),"\n",(0,i.jsx)(s.li,{children:"Read all the Metric Types"}),"\n",(0,i.jsx)(s.li,{children:"Update/Delete their created Metric Types"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"MetricType"}),(0,i.jsx)(s.td,{children:"Always"}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"****"})]}),(0,i.jsxs)(s.td,{children:["Entity ",(0,i.jsx)("sup",{children:"****"})]}),(0,i.jsx)(s.td,{children:"Always"})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"****"})," You cannot update or delete a Metric Type registered by Accounting Service or a Metric Type used in an existing Metric Definition."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"provider-admin",children:"Provider Admin"}),"\n",(0,i.jsx)(s.p,{children:"A provider admin role,  has full access on the providers it is assigned and can perform all actions on the installations as well as the  metrics that are assigned to the specific providers"}),"\n",(0,i.jsx)(s.p,{children:"**On an assigned provider and the installations/metrics of the provider, the provider  admin role  can : **"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create/Update/Delete/Read  Installations, on a specific Provider"}),"\n",(0,i.jsx)(s.li,{children:"Grant access to a client with a specific role , on an installation"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"}),(0,i.jsx)(s.th,{children:"Acl"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Installation"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create/Update/Delete/Read Metrics on an Installation"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Metric"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Grant access to a client  with a specific role , on a provider"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Acl"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Provider"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"*"})," You can always perform that action on a particular Provider"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h3,{id:"installation-admin",children:"Installation Admin"}),"\n",(0,i.jsx)(s.p,{children:"An installation admin role, has full access on the installations it is assigned and can perform all actions on the metrics that are assigned to the specific installations"}),"\n",(0,i.jsx)(s.p,{children:"**On an assigned installation and the metrics of the installation, the installation  admin role can : **"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Read/Update/Delete installation"}),"\n",(0,i.jsx)(s.li,{children:"Grant access to a client  with a specific role , on an installation"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"}),(0,i.jsx)(s.th,{children:"Acl"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Installation"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Create/Read/Update/Delete metrics , on an installation"}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Collection"}),(0,i.jsx)(s.th,{children:"Create"}),(0,i.jsx)(s.th,{children:"Update"}),(0,i.jsx)(s.th,{children:"Delete"}),(0,i.jsx)(s.th,{children:"Read"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Metric"}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]}),(0,i.jsxs)(s.td,{children:["Always ",(0,i.jsx)("sup",{children:"*"})]})]})})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("sup",{children:"*"})," You can always perform that action on a particular Installation"]}),"\n",(0,i.jsx)("br",{})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var i=n(6540);const t={},l=i.createContext(t);function r(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);