(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[4],{1518:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(57),r=c(12),i=c(118),o=c(365),l=c(361),d=c(355);const j=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z' class='ci-primary'/>"],u=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'/>"];var b=c(1480),h=c(117),p=c(354),O=c(7);t.default=()=>{const e=Object(r.g)(),[t,c]=Object(n.useState)(),[m,x]=Object(n.useState)([]),[g,v]=Object(n.useState)(""),[f,C]=Object(n.useState)(""),[N,y]=Object(n.useState)("");function P(e,t){Object(l.a)(e).then((e=>{e.ok?h.store.addNotification(Object(p.b)("Client "+t+" has been approved.")):(console.log(e),h.store.addNotification(Object(p.a)("Error occurred.")))}))}function _(e){switch(e.toLowerCase()){case"request":return Object(O.jsx)(s.b,{className:"mt-1",color:"warning",shape:"rounded-pill",children:e});case"verified":return Object(O.jsx)(s.b,{className:"mt-1",color:"info",shape:"rounded-pill",children:e});case"active":return Object(O.jsx)(s.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e});case"reject":return Object(O.jsx)(s.b,{className:"mt-1",color:"danger",shape:"rounded-pill",children:e});default:return Object(O.jsx)(s.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:"unknown"})}}function k(e,t,c){switch(e){case"verified":return Object(O.jsxs)(s.f,{role:"group",className:"ms-3",children:[Object(O.jsx)(s.e,{color:"success",variant:"outline",size:"sm",onClick:()=>{P(t,c)},children:Object(O.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(O.jsx)("span",{children:"Approve"}),Object(O.jsx)(d.a,{icon:j,className:"ms-1"})]})}),Object(O.jsx)(s.e,{color:"danger",variant:"outline",size:"sm",onClick:()=>function(e,t){Object(l.e)(e).then((e=>{e.ok?h.store.addNotification(Object(p.b)("Client "+t+" has been rejected.")):(console.log(e),h.store.addNotification(Object(p.a)("Error occurred.")))}))}(t,c),children:Object(O.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(O.jsx)("span",{children:"Reject"}),Object(O.jsx)(d.a,{icon:u,className:"ms-1"})]})})]});case"reject":return Object(O.jsx)(s.e,{color:"success",variant:"outline",size:"sm",onClick:()=>P(t,c),children:Object(O.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(O.jsx)("span",{children:"Approve"}),Object(O.jsx)(d.a,{icon:j,className:"ms-1"})]})});default:return Object(O.jsx)("p",{className:"text-medium-emphasis",children:"No actions"})}}Object(n.useEffect)((()=>{Object(l.c)(g,f,N).then((t=>{x(null===t||void 0===t?void 0:t.map((t=>({name:t.company,contact_wa_number:t.contact.wa_number,contact_name:t.contact.dir_name,status:_(t.status),actions:Object(O.jsx)(s.n,{children:Object(O.jsxs)(s.e,{color:"dark",size:"sm",onClick:()=>e.push("/clients/"+t.id),children:[Object(O.jsx)(d.a,{icon:b.a,className:"me-1"}),Object(O.jsx)("span",{children:"Edit"})]})}),approval:k(t.status.toLowerCase(),t.id,t.company)})))),c(!0)}))}),[e,g,f,N]);const E=a.a.useMemo((()=>[{Header:"Company Name",accessor:"name"},{Header:"WhatsApp number",accessor:"contact_wa_number"},{Header:"Director Name",accessor:"contact_name"},{Header:"Status",accessor:"status"},{Header:"Approval",accessor:"approval"},{Header:"",accessor:"actions"}]),[]);return t?Object(O.jsxs)(s.o,{children:[Object(O.jsxs)(s.X,{className:"align-items-center",children:[Object(O.jsxs)(s.n,{children:[Object(O.jsx)(s.z,{htmlFor:"searchInput",children:"Search"}),Object(O.jsx)(s.y,{type:"text",id:"searchInput",placeholder:"Enter search query..",onChange:e=>{v(e.target.value)}})]}),Object(O.jsxs)(s.n,{children:[Object(O.jsx)(s.z,{htmlFor:"statusInput",children:"Status"}),Object(O.jsxs)(s.A,{id:"statusInput",onChange:e=>{C(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"All"}),Object(O.jsx)("option",{value:"REQUEST",children:"Request"}),Object(O.jsx)("option",{value:"VERIFIED",children:"Verified"}),Object(O.jsx)("option",{value:"ACTIVE",children:"Active"}),Object(O.jsx)("option",{value:"REJECT",children:"Reject"}),Object(O.jsx)("option",{value:"NON_ACTIVE",children:"Non active"}),Object(O.jsx)("option",{value:"FAILED",children:"Failed"})]})]}),Object(O.jsxs)(s.n,{children:[Object(O.jsx)(s.z,{htmlFor:"sortInput",children:"Sort By"}),Object(O.jsxs)(s.A,{id:"sortInput",onChange:e=>{y(e.target.value)},children:[Object(O.jsx)("option",{value:"created_at:desc",children:"Creation date (new first)"}),Object(O.jsx)("option",{value:"created_at:asc",children:"Creation date (old first)"}),Object(O.jsx)("option",{value:"company:asc",children:"Company name (ascending)"}),Object(O.jsx)("option",{value:"company:desc",children:"Company name (descending)"}),Object(O.jsx)("option",{value:"NPWP:asc",children:"NPWP (ascending)"}),Object(O.jsx)("option",{value:"NPWP:desc",children:"NPWP (descending)"}),Object(O.jsx)("option",{value:"contact_dir_name:asc",children:"Contact name (ascending)"}),Object(O.jsx)("option",{value:"contact_dir_name:desc",children:"Contact name (descending)"}),Object(O.jsx)("option",{value:"contact_ktp_id:asc",children:"Contact KTP ID (ascending)"}),Object(O.jsx)("option",{value:"contact_ktp_id:desc",children:"Contact KTP ID (descending)"})]})]}),Object(O.jsx)(s.n,{className:"d-flex justify-content-end",children:Object(O.jsx)(s.e,{color:"primary",onClick:()=>e.push("/register"),children:"Register New"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(s.X,{children:Object(O.jsx)(s.h,{children:Object(O.jsx)(s.i,{children:m.length>0?Object(O.jsx)(o.a,{columns:E,data:m}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)(s.G,{children:"No clients found"})})})})})})]}):Object(i.a)()}},361:function(e,t,c){"use strict";c.d(t,"b",(function(){return i})),c.d(t,"f",(function(){return o})),c.d(t,"d",(function(){return l})),c.d(t,"a",(function(){return d})),c.d(t,"e",(function(){return j})),c.d(t,"c",(function(){return u}));var n=c(353),a=c.n(n),s=c(352);const r="https://api.ekoop.id/v01";function i(e){return a.a.get(r+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e,t){return a.a.put(r+"/users/admin/client/"+e,{company:t.company,contact_dir_name:t.contact.dir_name,address:t.address},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return a.a.post(r+"/users/clients/register",e,{headers:Object(s.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return a.a.put(r+"/users/admin/client/status/"+e,{status:"ACTIVE"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function j(e){return a.a.put(r+"/users/admin/client/status/"+e,{status:"REJECT"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e,t,c){return""===c&&(c="created_at:desc"),a.a.get(r+"/users/admin/client?search="+e+"&status="+t+"&sort="+c,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}},365:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(378),a=c(57),s=(c(0),c(7));function r({columns:e,data:t}){const{getTableProps:c,getTableBodyProps:r,headerGroups:i,prepareRow:o,page:l,canPreviousPage:d,canNextPage:j,pageOptions:u,pageCount:b,gotoPage:h,nextPage:p,previousPage:O,state:{pageIndex:m}}=Object(n.useTable)({columns:e,data:t,autoResetPageIndex:!0},n.usePagination);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(a.fb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...c(),children:[Object(s.jsx)(a.ib,{children:i.map(((e,t)=>Object(s.jsx)(a.kb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(s.jsx)(a.jb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(s.jsx)(a.gb,{...r(),children:l.map(((e,t)=>(o(e),Object(s.jsx)(a.kb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(s.jsx)(a.hb,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(s.jsxs)(a.o,{className:"d-flex justify-content-end align-items-center",children:[Object(s.jsx)(a.G,{className:"pe-2",children:"Go to page:"}),Object(s.jsx)(a.y,{min:1,max:b,type:"number",defaultValue:m+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;h(t)},style:{width:"100px"}})]}),Object(s.jsxs)(a.V,{align:"center","aria-label":"Page navigation",children:[Object(s.jsx)(a.W,{"aria-label":"First",onClick:()=>h(0),disabled:!d,children:"<<"}),Object(s.jsx)(a.W,{"aria-label":"Previous",onClick:()=>O(),disabled:!j,children:"<"}),Object(s.jsxs)(a.W,{"aria-label":"Current",style:{pointerEvents:"none"},children:["Page ",Object(s.jsx)("strong",{children:m+1})," of ",Object(s.jsx)("strong",{children:u.length})]}),Object(s.jsx)(a.W,{"aria-label":"Next",onClick:()=>p(),disabled:!d,children:">"}),Object(s.jsx)(a.W,{"aria-label":"Last",onClick:()=>h(b-1),disabled:!j,children:">>"})]})]})}}}]);
//# sourceMappingURL=4.a35a0470.chunk.js.map