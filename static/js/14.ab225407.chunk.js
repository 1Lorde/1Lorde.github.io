(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[14],{1495:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(57),s=a(355),i=a(365),d=a(12),o=a(7);t.default=()=>{const e=Object(d.g)(),[t,a]=Object(r.useState)([]),[l,p]=Object(r.useState)(0),[u,b]=Object(r.useState)(!1),j=Object(r.useRef)(0),g=Object(r.useCallback)((({skip:t})=>{++j.current===j.current&&(b(!1),Object(s.c)(t).then((t=>{if(t.ok){var r;console.log(t);let c=Math.floor(t.pagination.total/t.pagination.limit);t.pagination.total/t.pagination.limit>l&&(c+=1),p(c),a(null===(r=t.data)||void 0===r?void 0:r.map((t=>({created:t.created,sender:t.sender,title:t.title,content:t.content,action:Object(o.jsx)(n.e,{color:"dark",size:"sm",onClick:()=>e.push("/notifications/"+t.id),children:"View"})})))),b(!0)}})))}),[]),h=c.a.useMemo((()=>[{Header:"Date",accessor:"created"},{Header:"Sender",accessor:"sender"},{Header:"Title",accessor:"title"},{Header:"Content",accessor:"content"},{Header:"Action",accessor:"action"}]),[]);return Object(o.jsxs)(n.o,{fluid:!0,children:[Object(o.jsxs)(n.X,{className:"align-items-center",children:[Object(o.jsx)(n.n,{xl:1,children:"Search"}),Object(o.jsx)(n.n,{children:Object(o.jsx)(n.y,{})}),Object(o.jsx)(n.n,{children:Object(o.jsxs)(n.A,{children:[Object(o.jsx)("option",{value:"1",children:"One"}),Object(o.jsx)("option",{value:"2",children:"Two"}),Object(o.jsx)("option",{value:"3",children:"Three"})]})})]}),Object(o.jsx)("br",{}),Object(o.jsx)(n.X,{children:Object(o.jsx)(n.h,{children:Object(o.jsx)(n.i,{children:Object(o.jsx)(i.a,{columns:h,data:t,controlledPageCount:l,fetchData:g,hasLoaded:u})})})})]})}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return n}));const r={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},c={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},n={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var r=a(353),c=a.n(r),n=a(352),s=a(354);const i="https://api.ekoop.id/v01";function d(e){return c.a.get(i+"/users/notification?skip="+e,{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return c.a.get(i+"/users/notification/"+e,{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const r={sender:e,service:t,title:s.c[t],content:s.a[t]+a,reference_id:""};return c.a.post(i+"/users/notification",r,{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(373),c=a(57),n=a(0),s=a(117),i=a(7);function d({columns:e,data:t,controlledPageCount:a,fetchData:d,hasLoaded:o}){const{getTableProps:l,getTableBodyProps:p,headerGroups:u,prepareRow:b,page:j,canPreviousPage:g,canNextPage:h,pageOptions:O,gotoPage:f,nextPage:x,previousPage:m,state:{pageIndex:P}}=Object(r.useTable)({columns:e,data:t,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:a},r.usePagination);return Object(n.useEffect)((()=>{d&&d({skip:10*P})}),[d,P]),o?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(c.fb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...l(),children:[Object(i.jsx)(c.ib,{children:u.map(((e,t)=>Object(i.jsx)(c.kb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(i.jsx)(c.jb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(i.jsx)(c.gb,{...p(),children:j.map(((e,t)=>(b(e),Object(i.jsx)(c.kb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(i.jsx)(c.hb,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(i.jsxs)(c.o,{className:"d-flex justify-content-end align-items-center",children:[Object(i.jsx)(c.G,{className:"pe-2",children:"Go to page:"}),Object(i.jsx)(c.y,{min:1,max:a,type:"number",defaultValue:P+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;f(t)},style:{width:"100px"}})]}),Object(i.jsxs)(c.V,{align:"center","aria-label":"Page navigation",children:[Object(i.jsx)(c.W,{"aria-label":"First",onClick:()=>f(0),disabled:!g,children:"<<"}),Object(i.jsx)(c.W,{"aria-label":"Previous",onClick:()=>m(),disabled:!g,children:"<"}),Object(i.jsxs)(c.W,{"aria-label":"Current",style:{pointerEvents:"none"},children:["Page ",Object(i.jsx)("strong",{children:P+1})," of ",Object(i.jsx)("strong",{children:O.length})]}),Object(i.jsx)(c.W,{"aria-label":"Next",onClick:()=>x(),disabled:!h,children:">"}),Object(i.jsx)(c.W,{"aria-label":"Last",onClick:()=>f(a-1),disabled:!h,children:">>"})]})]}):Object(s.a)()}}}]);
//# sourceMappingURL=14.ab225407.chunk.js.map