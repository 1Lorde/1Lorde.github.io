(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[4],{1523:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(57),r=a(12),i=a(117),o=a(365),d=a(364),l=a(358);const u=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z' class='ci-primary'/>"],p=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'/>"];var j=a(1484),b=a(118),h=a(356),O=a(355),g=a(354),m=a(38),x=a(7);t.default=()=>{const e=Object(r.g)(),{userState:t,userDispatch:a}=Object(c.useContext)(m.a),[f,v]=Object(c.useState)(),[N,C]=Object(c.useState)([]),[P,k]=Object(c.useState)(""),[w,y]=Object(c.useState)(""),[E,_]=Object(c.useState)("");function A(e,a){Object(d.a)(e).then((e=>{e.ok?(Object(O.a)(t.user.wa_number,g.b.clientReject,"").then((e=>{console.log("Notification created: "+e.id)})),b.store.addNotification(Object(h.b)("Client "+a+" has been approved."))):(console.log(e),b.store.addNotification(Object(h.a)("Error occurred.")))}))}function I(e){switch(e.toLowerCase()){case"request":return Object(x.jsx)(s.b,{className:"mt-1",color:"warning",shape:"rounded-pill",children:e});case"verified":return Object(x.jsx)(s.b,{className:"mt-1",color:"info",shape:"rounded-pill",children:e});case"active":return Object(x.jsx)(s.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e});case"reject":return Object(x.jsx)(s.b,{className:"mt-1",color:"danger",shape:"rounded-pill",children:e});default:return Object(x.jsx)(s.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:"unknown"})}}function R(e,a,c){switch(e){case"verified":return Object(x.jsxs)(s.f,{role:"group",className:"ms-3",children:[Object(x.jsx)(s.e,{color:"success",variant:"outline",size:"sm",onClick:()=>{A(a,c)},children:Object(x.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(x.jsx)("span",{children:"Approve"}),Object(x.jsx)(l.a,{icon:u,className:"ms-1"})]})}),Object(x.jsx)(s.e,{color:"danger",variant:"outline",size:"sm",onClick:()=>function(e,a){Object(d.e)(e).then((e=>{e.ok?(Object(O.a)(t.user.wa_number,g.b.clientApprove,"").then((e=>{console.log("Notification created: "+e)})),b.store.addNotification(Object(h.b)("Client "+a+" has been rejected."))):(console.log(e),b.store.addNotification(Object(h.a)("Error occurred.")))}))}(a,c),children:Object(x.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(x.jsx)("span",{children:"Reject"}),Object(x.jsx)(l.a,{icon:p,className:"ms-1"})]})})]});case"reject":return Object(x.jsx)(s.e,{color:"success",variant:"outline",size:"sm",onClick:()=>A(a,c),children:Object(x.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(x.jsx)("span",{children:"Approve"}),Object(x.jsx)(l.a,{icon:u,className:"ms-1"})]})});default:return Object(x.jsx)("p",{className:"text-medium-emphasis",children:"No actions"})}}Object(c.useEffect)((()=>{Object(d.c)(P,w,E).then((t=>{C(null===t||void 0===t?void 0:t.map((t=>({name:t.company,contact_wa_number:t.contact.wa_number,contact_name:t.contact.dir_name,status:I(t.status),actions:Object(x.jsx)(s.n,{children:Object(x.jsxs)(s.e,{color:"dark",size:"sm",onClick:()=>e.push("/clients/"+t.id),children:[Object(x.jsx)(l.a,{icon:j.a,className:"me-1"}),Object(x.jsx)("span",{children:"Edit"})]})}),approval:R(t.status.toLowerCase(),t.id,t.company)})))),v(!0)}))}),[e,P,w,E]);const S=n.a.useMemo((()=>[{Header:"Company Name",accessor:"name"},{Header:"WhatsApp number",accessor:"contact_wa_number"},{Header:"Director Name",accessor:"contact_name"},{Header:"Status",accessor:"status"},{Header:"Approval",accessor:"approval"},{Header:"",accessor:"actions"}]),[]);return f?Object(x.jsxs)(s.o,{children:[Object(x.jsxs)(s.X,{className:"align-items-center",children:[Object(x.jsxs)(s.n,{children:[Object(x.jsx)(s.z,{htmlFor:"searchInput",children:"Search"}),Object(x.jsx)(s.y,{type:"text",id:"searchInput",placeholder:"Enter search query..",onChange:e=>{k(e.target.value)}})]}),Object(x.jsxs)(s.n,{children:[Object(x.jsx)(s.z,{htmlFor:"statusInput",children:"Status"}),Object(x.jsxs)(s.A,{id:"statusInput",onChange:e=>{y(e.target.value)},children:[Object(x.jsx)("option",{value:"",children:"All"}),Object(x.jsx)("option",{value:"REQUEST",children:"Request"}),Object(x.jsx)("option",{value:"VERIFIED",children:"Verified"}),Object(x.jsx)("option",{value:"ACTIVE",children:"Active"}),Object(x.jsx)("option",{value:"REJECT",children:"Reject"}),Object(x.jsx)("option",{value:"NON_ACTIVE",children:"Non active"}),Object(x.jsx)("option",{value:"FAILED",children:"Failed"})]})]}),Object(x.jsxs)(s.n,{children:[Object(x.jsx)(s.z,{htmlFor:"sortInput",children:"Sort By"}),Object(x.jsxs)(s.A,{id:"sortInput",onChange:e=>{_(e.target.value)},children:[Object(x.jsx)("option",{value:"created_at:desc",children:"Creation date (new first)"}),Object(x.jsx)("option",{value:"created_at:asc",children:"Creation date (old first)"}),Object(x.jsx)("option",{value:"company:asc",children:"Company name (ascending)"}),Object(x.jsx)("option",{value:"company:desc",children:"Company name (descending)"}),Object(x.jsx)("option",{value:"NPWP:asc",children:"NPWP (ascending)"}),Object(x.jsx)("option",{value:"NPWP:desc",children:"NPWP (descending)"}),Object(x.jsx)("option",{value:"contact_dir_name:asc",children:"Contact name (ascending)"}),Object(x.jsx)("option",{value:"contact_dir_name:desc",children:"Contact name (descending)"}),Object(x.jsx)("option",{value:"contact_ktp_id:asc",children:"Contact KTP ID (ascending)"}),Object(x.jsx)("option",{value:"contact_ktp_id:desc",children:"Contact KTP ID (descending)"})]})]}),Object(x.jsx)(s.n,{className:"d-flex justify-content-end",children:Object(x.jsx)(s.e,{color:"primary",onClick:()=>e.push("/register"),children:"Register New"})})]}),Object(x.jsx)("br",{}),Object(x.jsx)(s.X,{children:Object(x.jsx)(s.h,{children:Object(x.jsx)(s.i,{children:N.length>0?Object(x.jsx)(o.a,{columns:S,data:N}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsx)(s.G,{children:"No clients found"})})})})})})]}):Object(i.a)()}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s}));const c={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var c=a(353),n=a.n(c),s=a(352),r=a(354);const i="https://api.ekoop.id/v01";function o(e){return n.a.get(i+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return n.a.get(i+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const c={sender:e,service:t,title:r.c[t],content:r.a[t]+a,reference_id:""};return n.a.post(i+"/users/notification",c,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},364:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return p}));var c=a(353),n=a.n(c),s=a(352);const r="https://api.ekoop.id/v01";function i(e){return n.a.get(r+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e,t){return n.a.put(r+"/users/admin/client/"+e,{company:t.company,contact_dir_name:t.contact.dir_name,address:t.address},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return n.a.post(r+"/users/clients/register",e,{headers:Object(s.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return n.a.put(r+"/users/admin/client/status/"+e,{status:"ACTIVE"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.put(r+"/users/admin/client/status/"+e,{status:"REJECT"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function p(e,t,a){return""===a&&(a="created_at:desc"),n.a.get(r+"/users/admin/client?search="+e+"&status="+t+"&sort="+a,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}},365:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(373),n=a(57),s=a(0),r=a(117),i=a(7);function o({columns:e,data:t,controlledPageCount:a,fetchData:o,hasLoaded:d}){const{getTableProps:l,getTableBodyProps:u,headerGroups:p,prepareRow:j,page:b,canPreviousPage:h,canNextPage:O,pageOptions:g,gotoPage:m,nextPage:x,previousPage:f,state:{pageIndex:v}}=Object(c.useTable)({columns:e,data:t,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:a},c.usePagination);return Object(s.useEffect)((()=>{o&&o({skip:10*v})}),[o,v]),d?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(n.fb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...l(),children:[Object(i.jsx)(n.ib,{children:p.map(((e,t)=>Object(i.jsx)(n.kb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(i.jsx)(n.jb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(i.jsx)(n.gb,{...u(),children:b.map(((e,t)=>(j(e),Object(i.jsx)(n.kb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(i.jsx)(n.hb,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(i.jsxs)(n.o,{className:"d-flex justify-content-end align-items-center",children:[Object(i.jsx)(n.G,{className:"pe-2",children:"Go to page:"}),Object(i.jsx)(n.y,{min:1,max:a,type:"number",defaultValue:v+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;m(t)},style:{width:"100px"}})]}),Object(i.jsxs)(n.V,{align:"center","aria-label":"Page navigation",children:[Object(i.jsx)(n.W,{"aria-label":"First",onClick:()=>m(0),disabled:!h,children:"<<"}),Object(i.jsx)(n.W,{"aria-label":"Previous",onClick:()=>f(),disabled:!h,children:"<"}),Object(i.jsxs)(n.W,{"aria-label":"Current",style:{pointerEvents:"none"},children:["Page ",Object(i.jsx)("strong",{children:v+1})," of ",Object(i.jsx)("strong",{children:g.length})]}),Object(i.jsx)(n.W,{"aria-label":"Next",onClick:()=>x(),disabled:!O,children:">"}),Object(i.jsx)(n.W,{"aria-label":"Last",onClick:()=>m(a-1),disabled:!O,children:">>"})]})]}):Object(r.a)()}}}]);
//# sourceMappingURL=4.dd672557.chunk.js.map