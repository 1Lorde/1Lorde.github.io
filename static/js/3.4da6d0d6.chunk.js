(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[3],{1490:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(60),r=n(12),o=n(383),i=n(121),d=n(390),l=n(8);t.default=()=>{const e=Object(r.g)(),[t,n]=Object(a.useState)(),[u,j]=Object(a.useState)([]),[h,b]=Object(a.useState)(""),[p,O]=Object(a.useState)(""),[g,m]=Object(a.useState)("");Object(a.useEffect)((()=>{Object(o.e)(h,p,g).then((t=>{j(null===t||void 0===t?void 0:t.map((t=>({name:t.company,contact_ktp_id:t.contact.ktp_id,contact_name:t.contact.dir_name,status:t.status.toLowerCase(),action:Object(l.jsx)(s.e,{color:"dark",size:"sm",onClick:()=>e.push("/clients/"+t.id),children:"Edit"})})))),n(!0)}))}),[e,h,p,g]);const x=c.a.useMemo((()=>[{Header:"Company Name",accessor:"name"},{Header:"KTP ID",accessor:"contact_ktp_id"},{Header:"Director Name",accessor:"contact_name"},{Header:"Status",accessor:"status"},{Header:"Action",accessor:"action"}]),[]);return t?Object(l.jsxs)(s.o,{children:[Object(l.jsxs)(s.S,{className:"align-items-center",children:[Object(l.jsxs)(s.n,{children:[Object(l.jsx)(s.z,{htmlFor:"searchInput",children:"Search"}),Object(l.jsx)(s.y,{type:"text",id:"searchInput",placeholder:"Enter search query..",onChange:e=>{b(e.target.value)}})]}),Object(l.jsxs)(s.n,{children:[Object(l.jsx)(s.z,{htmlFor:"statusInput",children:"Status"}),Object(l.jsxs)(s.A,{id:"statusInput",onChange:e=>{O(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"All"}),Object(l.jsx)("option",{value:"REQUEST",children:"Request"}),Object(l.jsx)("option",{value:"VERIFIED",children:"Verified"}),Object(l.jsx)("option",{value:"ACTIVE",children:"Active"}),Object(l.jsx)("option",{value:"REJECT",children:"Reject"}),Object(l.jsx)("option",{value:"NON_ACTIVE",children:"Non active"}),Object(l.jsx)("option",{value:"FAILED",children:"Failed"})]})]}),Object(l.jsxs)(s.n,{children:[Object(l.jsx)(s.z,{htmlFor:"sortInput",children:"Sort By"}),Object(l.jsxs)(s.A,{id:"sortInput",onChange:e=>{m(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"Company Name (ascending)"}),Object(l.jsx)("option",{value:"company:desc",children:"Company Name (descending)"}),Object(l.jsx)("option",{value:"created_at:desc",children:"Creation date (new first)"}),Object(l.jsx)("option",{value:"created_at:asc",children:"Creation date (old first)"}),Object(l.jsx)("option",{value:"NPWP:asc",children:"NPWP (ascending)"}),Object(l.jsx)("option",{value:"NPWP:desc",children:"NPWP (descending)"}),Object(l.jsx)("option",{value:"contact_dir_name:asc",children:"Contact Name (ascending)"}),Object(l.jsx)("option",{value:"contact_dir_name:desc",children:"Contact Name (descending)"}),Object(l.jsx)("option",{value:"contact_ktp_id:asc",children:"Contact KTP ID (ascending)"}),Object(l.jsx)("option",{value:"contact_ktp_id:desc",children:"Contact KTP ID (descending)"})]})]}),Object(l.jsx)(s.n,{className:"d-flex justify-content-end",children:Object(l.jsx)(s.e,{color:"primary",onClick:()=>e.push("/clients/create"),children:"Add New"})})]}),Object(l.jsx)("br",{}),Object(l.jsx)(s.S,{children:Object(l.jsx)(s.h,{children:Object(l.jsx)(s.i,{children:u.length>0?Object(l.jsx)(d.a,{columns:x,data:u}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)(s.G,{children:"No clients found"})})})})})})]}):Object(i.a)()}},383:function(e,t,n){"use strict";n.d(t,"k",(function(){return o})),n.d(t,"j",(function(){return i})),n.d(t,"n",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"l",(function(){return j})),n.d(t,"e",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"m",(function(){return O})),n.d(t,"i",(function(){return g})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"c",(function(){return f}));var a=n(31),c=n.n(a),s=n(32);const r="https://api.ekoop.id/v01";function o(e,t,n,a){return c.a.get(r+"/auth/user?search="+e+"&status="+t+"&role="+n+"&sort="+a,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function i(e){return c.a.get(r+"/auth/user/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return c.a.put(r+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return c.a.post(r+"/auth/user",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return c.a.get(r+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function j(e,t){return c.a.put(r+"/users/admin/client/"+e,t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function h(e,t,n){return c.a.get(r+"/users/admin/client?search="+e+"&status="+t+"&sort="+n,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function b(e,t){return c.a.get(r+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function p(e){return c.a.post(r+"/transaction/products",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function O(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return c.a.put(r+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function g(){return c.a.get(r+"/transaction/services",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function m(e,t,n){return c.a.get(r+"/nasabah/nasabah?search="+e+"&status="+t+"&sort="+n,{headers:Object(s.b)()}).then((e=>e.data.nasabah_list)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function x(){return c.a.get(r+"/auth/stat/nasabah/all",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function f(){return c.a.get(r+"/auth/stat/account_officer/all",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}},390:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(400),c=n(60),s=(n(0),n(8));function r({columns:e,data:t}){const{getTableProps:n,getTableBodyProps:r,headerGroups:o,prepareRow:i,page:d,canPreviousPage:l,canNextPage:u,pageOptions:j,pageCount:h,gotoPage:b,nextPage:p,previousPage:O,state:{pageIndex:g}}=Object(a.useTable)({columns:e,data:t,autoResetPageIndex:!0},a.usePagination);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(c.ab,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...n(),children:[Object(s.jsx)(c.db,{children:o.map(((e,t)=>Object(s.jsx)(c.fb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(s.jsx)(c.eb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(s.jsx)(c.bb,{...r(),children:d.map(((e,t)=>(i(e),Object(s.jsx)(c.fb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(s.jsx)(c.cb,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(s.jsxs)(c.o,{className:"d-flex justify-content-end align-items-center",children:[Object(s.jsx)(c.G,{className:"pe-2",children:"Go to page:"}),Object(s.jsx)(c.y,{min:1,max:h,type:"number",defaultValue:g+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;b(t)},style:{width:"100px"}})]}),Object(s.jsxs)(c.Q,{align:"center","aria-label":"Page navigation",children:[Object(s.jsx)(c.R,{"aria-label":"First",onClick:()=>b(0),disabled:!l,children:"<<"}),Object(s.jsx)(c.R,{"aria-label":"Previous",onClick:()=>O(),disabled:!u,children:"<"}),Object(s.jsxs)(c.R,{"aria-label":"Current",style:{pointerEvents:"none"},children:["Page ",Object(s.jsx)("strong",{children:g+1})," of ",Object(s.jsx)("strong",{children:j.length})]}),Object(s.jsx)(c.R,{"aria-label":"Next",onClick:()=>p(),disabled:!l,children:">"}),Object(s.jsx)(c.R,{"aria-label":"Last",onClick:()=>b(h-1),disabled:!u,children:">>"})]})]})}}}]);
//# sourceMappingURL=3.4da6d0d6.chunk.js.map