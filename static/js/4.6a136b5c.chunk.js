(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[4],{1523:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(57),r=a(12),i=a(365),o=a(363),d=a(358);const l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z' class='ci-primary'/>"],u=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'/>"];var p=a(1484),j=a(117),b=a(356),h=a(355),g=a(353),m=a(38),O=a(7);t.default=()=>{const e=Object(r.g)(),{userState:t}=Object(c.useContext)(m.a),[a,x]=Object(c.useState)(),[f,v]=Object(c.useState)([]),[N,C]=Object(c.useState)(""),[P,k]=Object(c.useState)(""),[w,y]=Object(c.useState)(""),[_,E]=Object(c.useState)(0),A=Object(c.useRef)(0);function I(e,a){Object(o.a)(e).then((e=>{e.ok?(Object(h.a)(t.user.wa_number,g.b.clientReject,"").then((e=>{console.log("Notification created: "+e.id)})),j.store.addNotification(Object(b.b)("Client "+a+" has been approved."))):(console.log(e),j.store.addNotification(Object(b.a)("Error occurred.")))}))}function R(e){switch(e.toLowerCase()){case"request":return Object(O.jsx)(s.b,{className:"mt-1",color:"warning",shape:"rounded-pill",children:e});case"verified":return Object(O.jsx)(s.b,{className:"mt-1",color:"info",shape:"rounded-pill",children:e});case"active":return Object(O.jsx)(s.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e});case"reject":return Object(O.jsx)(s.b,{className:"mt-1",color:"danger",shape:"rounded-pill",children:e});default:return Object(O.jsx)(s.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:"unknown"})}}function S(e,a,c){switch(e){case"verified":return Object(O.jsxs)(s.f,{role:"group",className:"ms-3",children:[Object(O.jsx)(s.e,{color:"success",variant:"outline",size:"sm",onClick:()=>{I(a,c)},children:Object(O.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(O.jsx)("span",{children:"Approve"}),Object(O.jsx)(d.a,{icon:l,className:"ms-1"})]})}),Object(O.jsx)(s.e,{color:"danger",variant:"outline",size:"sm",onClick:()=>function(e,a){Object(o.e)(e).then((e=>{e.ok?(Object(h.a)(t.user.wa_number,g.b.clientApprove,"").then((e=>{console.log("Notification created: "+e)})),j.store.addNotification(Object(b.b)("Client "+a+" has been rejected."))):(console.log(e),j.store.addNotification(Object(b.a)("Error occurred.")))}))}(a,c),children:Object(O.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(O.jsx)("span",{children:"Reject"}),Object(O.jsx)(d.a,{icon:u,className:"ms-1"})]})})]});case"reject":return Object(O.jsx)(s.e,{color:"success",variant:"outline",size:"sm",onClick:()=>I(a,c),children:Object(O.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(O.jsx)("span",{children:"Approve"}),Object(O.jsx)(d.a,{icon:l,className:"ms-1"})]})});default:return Object(O.jsx)("p",{className:"text-medium-emphasis",children:"No actions"})}}const T=Object(c.useCallback)((({skip:t})=>{++A.current===A.current&&(x(!1),Object(o.c)(t,N,P,w).then((t=>{var a;console.log(t);let c=Math.floor(t.pagination.total/t.pagination.limit);t.pagination.total/t.pagination.limit>_&&(c+=1),E(c),v(null===(a=t.data)||void 0===a?void 0:a.map((t=>({name:t.company,contact_wa_number:t.contact.wa_number,contact_name:t.contact.dir_name,status:R(t.status),actions:Object(O.jsx)(s.n,{children:Object(O.jsxs)(s.e,{color:"dark",size:"sm",onClick:()=>e.push("/clients/"+t.id),children:[Object(O.jsx)(d.a,{icon:p.a,className:"me-1"}),Object(O.jsx)("span",{children:"Edit"})]})}),approval:S(t.status.toLowerCase(),t.id,t.company)})))),x(!0)})))}),[e,N,P,w]),W=n.a.useMemo((()=>[{Header:"Company Name",accessor:"name"},{Header:"WhatsApp number",accessor:"contact_wa_number"},{Header:"Director Name",accessor:"contact_name"},{Header:"Status",accessor:"status"},{Header:"Approval",accessor:"approval"},{Header:"",accessor:"actions"}]),[]);return Object(O.jsxs)(s.o,{children:[Object(O.jsxs)(s.X,{className:"align-items-center",children:[Object(O.jsxs)(s.n,{children:[Object(O.jsx)(s.z,{htmlFor:"searchInput",children:"Search"}),Object(O.jsx)(s.y,{type:"text",id:"searchInput",placeholder:"Enter search query..",onChange:e=>{C(e.target.value)}})]}),Object(O.jsxs)(s.n,{children:[Object(O.jsx)(s.z,{htmlFor:"statusInput",children:"Status"}),Object(O.jsxs)(s.A,{id:"statusInput",onChange:e=>{k(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"All"}),Object(O.jsx)("option",{value:"REQUEST",children:"Request"}),Object(O.jsx)("option",{value:"VERIFIED",children:"Verified"}),Object(O.jsx)("option",{value:"ACTIVE",children:"Active"}),Object(O.jsx)("option",{value:"REJECT",children:"Reject"}),Object(O.jsx)("option",{value:"NON_ACTIVE",children:"Non active"}),Object(O.jsx)("option",{value:"FAILED",children:"Failed"})]})]}),Object(O.jsxs)(s.n,{children:[Object(O.jsx)(s.z,{htmlFor:"sortInput",children:"Sort By"}),Object(O.jsxs)(s.A,{id:"sortInput",onChange:e=>{y(e.target.value)},children:[Object(O.jsx)("option",{value:"created_at:desc",children:"Creation date (new first)"}),Object(O.jsx)("option",{value:"created_at:asc",children:"Creation date (old first)"}),Object(O.jsx)("option",{value:"company:asc",children:"Company name (ascending)"}),Object(O.jsx)("option",{value:"company:desc",children:"Company name (descending)"}),Object(O.jsx)("option",{value:"NPWP:asc",children:"NPWP (ascending)"}),Object(O.jsx)("option",{value:"NPWP:desc",children:"NPWP (descending)"}),Object(O.jsx)("option",{value:"contact_dir_name:asc",children:"Contact name (ascending)"}),Object(O.jsx)("option",{value:"contact_dir_name:desc",children:"Contact name (descending)"}),Object(O.jsx)("option",{value:"contact_ktp_id:asc",children:"Contact KTP ID (ascending)"}),Object(O.jsx)("option",{value:"contact_ktp_id:desc",children:"Contact KTP ID (descending)"})]})]}),Object(O.jsx)(s.n,{className:"d-flex justify-content-end",children:Object(O.jsx)(s.e,{color:"primary",onClick:()=>e.push("/register"),children:"Register New"})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(s.X,{children:Object(O.jsx)(s.h,{children:Object(O.jsx)(s.i,{children:Object(O.jsx)(i.a,{columns:W,data:f,controlledPageCount:_,fetchData:T,hasLoaded:a})})})})]})}},353:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s}));const c={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var c=a(354),n=a.n(c),s=a(352),r=a(353);const i="https://api.ekoop.id/v01";function o(e){return n.a.get(i+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return n.a.get(i+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const c={sender:e,service:t,title:r.c[t],content:r.a[t]+a,reference_id:""};return n.a.post(i+"/users/notification",c,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},363:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return p}));var c=a(354),n=a.n(c),s=a(352);const r="https://api.ekoop.id/v01";function i(e){return n.a.get(r+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e,t){return n.a.put(r+"/users/admin/client/"+e,{company:t.company,contact_dir_name:t.contact.dir_name,address:t.address},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return n.a.post(r+"/users/clients/register",e,{headers:Object(s.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return n.a.put(r+"/users/admin/client/status/"+e,{status:"ACTIVE"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.put(r+"/users/admin/client/status/"+e,{status:"REJECT"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function p(e,t,a,c){return""===c&&(c="created_at:desc"),n.a.get(r+"/users/admin/client?search="+t+"&status="+a+"&sort="+c+"&skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(373),n=a(57),s=a(0),r=a(118),i=a(7);function o({columns:e,data:t,controlledPageCount:a,fetchData:o,hasLoaded:d}){const{getTableProps:l,getTableBodyProps:u,headerGroups:p,prepareRow:j,page:b,canPreviousPage:h,canNextPage:g,pageOptions:m,gotoPage:O,nextPage:x,previousPage:f,state:{pageIndex:v}}=Object(c.useTable)({columns:e,data:t,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:a},c.usePagination);return Object(s.useEffect)((()=>{o&&o({skip:10*v})}),[o,v]),d?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(n.fb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...l(),children:[Object(i.jsx)(n.ib,{children:p.map(((e,t)=>Object(i.jsx)(n.kb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(i.jsx)(n.jb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(i.jsx)(n.gb,{...u(),children:b.map(((e,t)=>(j(e),Object(i.jsx)(n.kb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(i.jsx)(n.hb,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(i.jsxs)(n.o,{className:"d-flex justify-content-end align-items-center",children:[Object(i.jsx)(n.G,{className:"pe-2",children:"Go to page:"}),Object(i.jsx)(n.y,{min:1,max:a,type:"number",defaultValue:v+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;O(t)},style:{width:"100px"}})]}),Object(i.jsxs)(n.V,{align:"center","aria-label":"Page navigation",children:[Object(i.jsx)(n.W,{"aria-label":"First",onClick:()=>O(0),disabled:!h,children:"<<"}),Object(i.jsx)(n.W,{"aria-label":"Previous",onClick:()=>f(),disabled:!h,children:"<"}),Object(i.jsxs)(n.W,{"aria-label":"Current",style:{pointerEvents:"none"},children:["Page ",Object(i.jsx)("strong",{children:v+1})," of ",Object(i.jsx)("strong",{children:m.length})]}),Object(i.jsx)(n.W,{"aria-label":"Next",onClick:()=>x(),disabled:!g,children:">"}),Object(i.jsx)(n.W,{"aria-label":"Last",onClick:()=>O(a-1),disabled:!g,children:">>"})]})]}):Object(r.a)()}}}]);
//# sourceMappingURL=4.6a136b5c.chunk.js.map