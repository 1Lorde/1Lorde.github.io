(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[4],{1549:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(60),s=a(12),i=a(377),o=a(379),l=a(372);const d=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M199.066,456l-7.379-7.514-3.94-3.9-86.2-86.2.053-.055L17.936,274.665l97.614-97.613,83.565,83.565L398.388,61.344,496,158.958,296.729,358.229,285.469,369.6ZM146.6,358.183l52.459,52.46.1-.1.054.054,52.311-52.311,11.259-11.368L450.746,158.958,398.388,106.6,199.115,305.871,115.55,222.306,63.191,274.665l83.464,83.463Z' class='ci-primary'/>"],u=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'/>"];var p=a(405),j=a(122),b=a(370),h=a(371),m=a(369),g=a(41),O=a(445),f=a(8);t.default=()=>{const{t:e}=Object(O.a)(),t=Object(s.g)(),{userState:a}=Object(c.useContext)(g.a),[x,v]=Object(c.useState)(),[y,N]=Object(c.useState)([]),[C,_]=Object(c.useState)(""),[k,w]=Object(c.useState)(""),[P,E]=Object(c.useState)(""),[A,I]=Object(c.useState)(0),M=Object(c.useRef)(0);function S(t,c){Object(o.a)(t).then((t=>{t.ok?(Object(h.a)(a.user.wa_number,m.b.clientReject,"").then((e=>{console.log("Notification created: "+e.id)})),j.store.addNotification(Object(b.b)(e("notifications.client_approve",{name:c})))):(console.log(t),j.store.addNotification(Object(b.a)(e("notifications.error"))))}))}function R(t){switch(t.toLowerCase()){case"request":return Object(f.jsx)(r.b,{className:"mt-1",color:"warning",shape:"rounded-pill",children:e("request")});case"verified":return Object(f.jsx)(r.b,{className:"mt-1",color:"info",shape:"rounded-pill",children:e("verified")});case"active":return Object(f.jsx)(r.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e("active")});case"reject":return Object(f.jsx)(r.b,{className:"mt-1",color:"danger",shape:"rounded-pill",children:e("reject")});default:return Object(f.jsx)(r.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:e("unknown")})}}function L(t,c,n){switch(t){case"verified":return Object(f.jsxs)(r.f,{role:"group",className:"ms-3",children:[Object(f.jsx)(r.e,{color:"success",variant:"outline",size:"sm",onClick:()=>{S(c,n)},children:Object(f.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(f.jsx)("span",{children:e("approve")}),Object(f.jsx)(l.a,{icon:d,className:"ms-1"})]})}),Object(f.jsx)(r.e,{color:"danger",variant:"outline",size:"sm",onClick:()=>function(t,c){Object(o.e)(t).then((t=>{t.ok?(Object(h.a)(a.user.wa_number,m.b.clientApprove,"").then((e=>{console.log("Notification created: "+e)})),j.store.addNotification(Object(b.b)(e("notifications.client_reject",{name:c})))):(console.log(t),j.store.addNotification(Object(b.a)(e("notifications.error"))))}))}(c,n),children:Object(f.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(f.jsx)("span",{children:e("reject")}),Object(f.jsx)(l.a,{icon:u,className:"ms-1"})]})})]});case"reject":return Object(f.jsx)(r.e,{color:"success",variant:"outline",size:"sm",onClick:()=>S(c,n),children:Object(f.jsxs)("div",{className:"d-inline-flex align-items-center",children:[Object(f.jsx)("span",{children:e("approve")}),Object(f.jsx)(l.a,{icon:d,className:"ms-1"})]})});default:return Object(f.jsx)("p",{className:"text-medium-emphasis",children:e("no_actions")})}}const T=Object(c.useCallback)((a=>{let{skip:c}=a;++M.current===M.current&&(v(!1),Object(o.c)(c,C,k,P).then((a=>{var c;console.log(a);let n=Math.floor(a.pagination.total/a.pagination.limit);a.pagination.total/a.pagination.limit>A&&(n+=1),I(n),N(null===(c=a.data)||void 0===c?void 0:c.map((a=>({name:a.company,contact_wa_number:a.contact.wa_number,contact_name:a.contact.dir_name,status:R(a.status),actions:Object(f.jsx)(r.n,{children:Object(f.jsxs)(r.e,{color:"dark",size:"sm",onClick:()=>t.push("/clients/"+a.id),children:[Object(f.jsx)(l.a,{icon:p.a,className:"me-1"}),Object(f.jsx)("span",{children:e("edit")})]})}),approval:L(a.status.toLowerCase(),a.id,a.company)})))),v(!0)})))}),[t,C,k,P]),Z=n.a.useMemo((()=>[{Header:e("company_name"),accessor:"name"},{Header:e("whatsapp"),accessor:"contact_wa_number"},{Header:e("director_name"),accessor:"contact_name"},{Header:e("status"),accessor:"status"},{Header:e("approval"),accessor:"approval"},{Header:"",accessor:"actions"}]),[e]);return Object(f.jsxs)(r.o,{children:[Object(f.jsxs)(r.V,{className:"align-items-center",children:[Object(f.jsxs)(r.n,{children:[Object(f.jsx)(r.z,{htmlFor:"searchInput",children:e("search")}),Object(f.jsx)(r.y,{type:"text",id:"searchInput",placeholder:e("enter_search_query"),onChange:e=>{_(e.target.value)}})]}),Object(f.jsxs)(r.n,{children:[Object(f.jsx)(r.z,{htmlFor:"statusInput",children:e("status")}),Object(f.jsxs)(r.A,{id:"statusInput",onChange:e=>{w(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:e("all")}),Object(f.jsx)("option",{value:"REQUEST",children:e("request")}),Object(f.jsx)("option",{value:"VERIFIED",children:e("verified")}),Object(f.jsx)("option",{value:"ACTIVE",children:e("active")}),Object(f.jsx)("option",{value:"REJECT",children:e("reject")}),Object(f.jsx)("option",{value:"NON_ACTIVE",children:e("inactive")}),Object(f.jsx)("option",{value:"FAILED",children:e("failed")})]})]}),Object(f.jsxs)(r.n,{children:[Object(f.jsx)(r.z,{htmlFor:"sortInput",children:e("sort_by")}),Object(f.jsxs)(r.A,{id:"sortInput",onChange:e=>{E(e.target.value)},children:[Object(f.jsx)("option",{value:"created_at:desc",children:e("created_new")}),Object(f.jsx)("option",{value:"created_at:asc",children:e("created_old")}),Object(f.jsx)("option",{value:"company:asc",children:e("company_name")+" ("+e("ascending")+")"}),Object(f.jsx)("option",{value:"company:desc",children:e("company_name")+" ("+e("descending")+")"}),Object(f.jsx)("option",{value:"NPWP:asc",children:e("npwp")+" ("+e("ascending")+")"}),Object(f.jsx)("option",{value:"NPWP:desc",children:e("npwp")+" ("+e("descending")+")"}),Object(f.jsx)("option",{value:"contact_dir_name:asc",children:e("contact")+" "+e("name")+" ("+e("ascending")+")"}),Object(f.jsx)("option",{value:"contact_dir_name:desc",children:e("contact")+" "+e("name")+" ("+e("descending")+")"}),Object(f.jsx)("option",{value:"contact_ktp_id:asc",children:e("contact")+" "+e("ktp")+" ("+e("ascending")+")"}),Object(f.jsx)("option",{value:"contact_ktp_id:desc",children:e("contact")+" "+e("ktp")+" ("+e("descending")+")"})]})]}),Object(f.jsx)(r.n,{className:"d-flex justify-content-end",children:Object(f.jsx)(r.e,{color:"primary",onClick:()=>t.push("/register"),children:e("register")})})]}),Object(f.jsx)("br",{}),Object(f.jsx)(r.V,{children:Object(f.jsx)(r.h,{children:Object(f.jsx)(r.i,{children:Object(f.jsx)(i.a,{columns:Z,data:y,controlledPageCount:A,fetchData:T,hasLoaded:x})})})})]})}},369:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));const c={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},r={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},371:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var c=a(368),n=a.n(c),r=a(367),s=a(369);const i="https://api.ekoop.id/v01";function o(e){return n.a.get(i+"/users/notification?skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e){return n.a.get(i+"/users/notification/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e,t,a){const c={sender:e,service:t,title:s.c[t],content:s.a[t]+a,reference_id:""};return n.a.post(i+"/users/notification",c,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},377:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(382),n=a(60),r=a(0),s=a(372);const i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z' class='ci-primary'/><rect width='40' height='40' x='152' y='200' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='40' height='40' x='320' y='200' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,288a88.1,88.1,0,0,0-88,88h32a56,56,0,0,1,112,0h32A88.1,88.1,0,0,0,256,288Z' class='ci-primary'/>"];var o=a(445),l=a(8);function d(e){let{columns:t,data:a,controlledPageCount:d,fetchData:u,hasLoaded:p}=e;const{t:j}=Object(o.a)(),{getTableProps:b,getTableBodyProps:h,headerGroups:m,prepareRow:g,page:O,canPreviousPage:f,canNextPage:x,pageOptions:v,gotoPage:y,nextPage:N,previousPage:C,state:{pageIndex:_}}=Object(c.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:d},c.usePagination);return Object(r.useEffect)((()=>{u&&u({skip:10*_})}),[u,_]),p?O.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.bb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...b(),children:[Object(l.jsx)(n.eb,{children:m.map(((e,t)=>Object(l.jsx)(n.gb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(l.jsx)(n.fb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(l.jsx)(n.cb,{...h(),children:O.map(((e,t)=>(g(e),Object(l.jsx)(n.gb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(l.jsx)(n.db,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(l.jsxs)(n.o,{className:"d-flex justify-content-end align-items-center",children:[Object(l.jsx)(n.G,{className:"pe-2",children:j("go_to_page")+":"}),Object(l.jsx)(n.y,{min:1,max:d,type:"number",defaultValue:_+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;y(t)},style:{width:"100px"}})]}),Object(l.jsxs)(n.T,{align:"center","aria-label":"Page navigation",children:[Object(l.jsx)(n.U,{"aria-label":"First",onClick:()=>y(0),disabled:!f,children:"<<"}),Object(l.jsx)(n.U,{"aria-label":"Previous",onClick:()=>C(),disabled:!f,children:"<"}),Object(l.jsxs)(n.U,{"aria-label":"Current",style:{pointerEvents:"none"},children:[j("page")," ",Object(l.jsx)("strong",{children:_+1})," of ",Object(l.jsx)("strong",{children:v.length})]}),Object(l.jsx)(n.U,{"aria-label":"Next",onClick:()=>N(),disabled:!x,children:">"}),Object(l.jsx)(n.U,{"aria-label":"Last",onClick:()=>y(d-1),disabled:!x,children:">>"})]})]}):Object(l.jsx)(n.n,{className:"d-flex justify-content-center",children:Object(l.jsxs)(n.G,{children:[j("nothing_there")," ",Object(l.jsx)(s.a,{icon:i})," "]})}):Object(l.jsx)(n.n,{className:"d-flex justify-content-center",children:Object(l.jsx)(n.ab,{color:"primary"})})}},379:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"g",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return j}));var c=a(368),n=a.n(c),r=a(367);const s="https://api.ekoop.id/v01";function i(e){return n.a.get(s+"/users/admin/client/"+e,{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e,t){return n.a.put(s+"/users/admin/client/"+e,{company:t.company,address:t.address},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e,t){return n.a.put(s+"/users/admin/client/"+e,{company:t.company,contact_dir_name:t.contact.dir_name,address:t.address},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return n.a.post(s+"/users/clients/register",e,{headers:Object(r.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.put(s+"/users/admin/client/status/"+e,{status:"ACTIVE"},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function p(e){return n.a.put(s+"/users/admin/client/status/"+e,{status:"REJECT"},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function j(e,t,a,c){return""===c&&(c="created_at:desc"),n.a.get(s+"/users/admin/client?search="+t+"&status="+a+"&sort="+c+"&skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}},405:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));const c=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=4.01e4ec4d.chunk.js.map