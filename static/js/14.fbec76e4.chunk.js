(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[14],{1504:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(57),r=a(12),i=a(365),o=a(371),l=a(1486),d=a(357),b=a(7);t.default=()=>{const e=Object(r.g)(),[t,a]=Object(n.useState)(),[j,u]=Object(n.useState)([]),[h,p]=Object(n.useState)(""),[O,g]=Object(n.useState)(""),[x,m]=Object(n.useState)(0),f=Object(n.useRef)(0),v=Object(n.useCallback)((({skip:t})=>{++f.current===f.current&&(a(!1),Object(o.c)(t,h,O).then((t=>{var n;console.log(t);let s=Math.floor(t.pagination.total/t.pagination.limit);t.pagination.total/t.pagination.limit>x&&(s+=1),m(s),u(null===(n=t.data)||void 0===n?void 0:n.map((t=>({name:t.name,number:t.wa_number,location:t.address,status:t.active?Object(b.jsx)(c.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:"ACTIVE"}):Object(b.jsx)(c.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:"INACTIVE"}),action:Object(b.jsxs)(c.e,{color:"dark",size:"sm",onClick:()=>e.push("/nasabah/"+t.id),children:[Object(b.jsx)(d.a,{icon:l.a,className:"me-1"}),"Edit"]})})))),a(!0)})))}),[e,h,O]),k=s.a.useMemo((()=>[{Header:"Name",accessor:"name"},{Header:"WhatsApp Number",accessor:"number"},{Header:"Location",accessor:"location"},{Header:"Status",accessor:"status"},{Header:"Action",accessor:"action"}]),[]);return Object(b.jsxs)(c.o,{children:[Object(b.jsxs)(c.X,{className:"align-items-center",children:[Object(b.jsxs)(c.n,{children:[Object(b.jsx)(c.z,{htmlFor:"searchInput",children:"Search"}),Object(b.jsx)(c.y,{type:"text",id:"searchInput",placeholder:"Enter search query..",onChange:e=>{p(e.target.value)}})]}),Object(b.jsxs)(c.n,{children:[Object(b.jsx)(c.z,{htmlFor:"statusInput",children:"Status"}),Object(b.jsxs)(c.A,{id:"statusInput",onChange:e=>{g(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"All"}),Object(b.jsx)("option",{value:"false",children:"Inactive"}),Object(b.jsx)("option",{value:"true",children:"Active"})]})]}),Object(b.jsx)(c.n,{className:"d-flex justify-content-end",children:Object(b.jsx)(c.e,{color:"primary",onClick:()=>e.push("/nasabah/create"),children:"Add New"})})]}),Object(b.jsx)("br",{}),Object(b.jsx)(c.X,{children:Object(b.jsx)(c.h,{children:Object(b.jsx)(c.i,{children:Object(b.jsx)(i.a,{columns:k,data:j,controlledPageCount:x,fetchData:v,hasLoaded:t})})})})]})}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(369),s=a(57),c=a(0),r=a(7);function i({columns:e,data:t,controlledPageCount:a,fetchData:i,hasLoaded:o}){const{getTableProps:l,getTableBodyProps:d,headerGroups:b,prepareRow:j,page:u,canPreviousPage:h,canNextPage:p,pageOptions:O,gotoPage:g,nextPage:x,previousPage:m,state:{pageIndex:f}}=Object(n.useTable)({columns:e,data:t,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:a},n.usePagination);return Object(c.useEffect)((()=>{i&&i({skip:10*f})}),[i,f]),o?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(s.fb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...l(),children:[Object(r.jsx)(s.ib,{children:b.map(((e,t)=>Object(r.jsx)(s.kb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(r.jsx)(s.jb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(r.jsx)(s.gb,{...d(),children:u.map(((e,t)=>(j(e),Object(r.jsx)(s.kb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(r.jsx)(s.hb,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(r.jsxs)(s.o,{className:"d-flex justify-content-end align-items-center",children:[Object(r.jsx)(s.G,{className:"pe-2",children:"Go to page:"}),Object(r.jsx)(s.y,{min:1,max:a,type:"number",defaultValue:f+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;g(t)},style:{width:"100px"}})]}),Object(r.jsxs)(s.V,{align:"center","aria-label":"Page navigation",children:[Object(r.jsx)(s.W,{"aria-label":"First",onClick:()=>g(0),disabled:!h,children:"<<"}),Object(r.jsx)(s.W,{"aria-label":"Previous",onClick:()=>m(),disabled:!h,children:"<"}),Object(r.jsxs)(s.W,{"aria-label":"Current",style:{pointerEvents:"none"},children:["Page ",Object(r.jsx)("strong",{children:f+1})," of ",Object(r.jsx)("strong",{children:O.length})]}),Object(r.jsx)(s.W,{"aria-label":"Next",onClick:()=>x(),disabled:!p,children:">"}),Object(r.jsx)(s.W,{"aria-label":"Last",onClick:()=>g(a-1),disabled:!p,children:">>"})]})]}):Object(r.jsx)(s.n,{className:"d-flex justify-content-center",children:Object(r.jsx)(s.cb,{color:"primary"})})}},371:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(353),s=a.n(n),c=a(352);const r="https://api.ekoop.id/v01";function i(e,t,a){return s.a.get(r+"/nasabah/nasabah?search="+t+"&status="+a+"&skip="+e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return s.a.get(r+"/nasabah/nasabah/"+e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t){return s.a.put(r+"/nasabah/nasabah/"+e,{name:t.name,ktp_id:t.ktp_id,wa_number:t.wa_number,address:t.address,reason:t.reason,group:t.group,active:"true"===t.active},{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return s.a.post(r+"/nasabah/nasabah",e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=14.fbec76e4.chunk.js.map