(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[8],{1513:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(57),r=a(12),i=a(118),s=a(382),o=a(117),d=a(356),l=a(360),u=a(355),p=a(353),j=a(38),b=a(7);t.default=()=>{const{userState:e}=Object(n.useContext)(j.a),t=Object(r.g)(),[a,h]=Object(n.useState)([]),[g,O]=Object(n.useState)(),[x,f]=Object(n.useState)({}),[m,v]=Object(n.useState)(!1),[y,k]=Object(n.useState)(""),[N,w]=Object(n.useState)(""),[P,C]=Object(n.useState)(""),[_,A]=Object(n.useState)("");return Object(n.useEffect)((()=>{console.log(_),Object(s.b)(y,N,P,_).then((e=>{!0===e.ok&&(console.log(e),h(e.services),g||Object(s.c)().then((e=>{!0===e.ok&&(console.log(e),f(e.service_margin),O(!0))})))}))}),[y,N,P,_]),g?Object(b.jsxs)(c.o,{children:[Object(b.jsxs)(c.X,{className:"align-items-center mb-4",children:[Object(b.jsxs)(c.n,{xl:4,children:[Object(b.jsx)(c.z,{htmlFor:"searchInput",children:"Search"}),Object(b.jsx)(c.y,{type:"text",id:"searchInput",placeholder:"Enter search query..",onChange:e=>{k(e.target.value)}})]}),Object(b.jsxs)(c.n,{children:[Object(b.jsx)(c.z,{htmlFor:"categoryInput",children:"Category"}),Object(b.jsxs)(c.A,{id:"categoryInput",onChange:e=>{w(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"All"}),Object(b.jsx)("option",{value:"postpaid",children:"Postpaid"}),Object(b.jsx)("option",{value:"prepaid",children:"Prepaid"})]})]}),Object(b.jsxs)(c.n,{children:[Object(b.jsx)(c.z,{htmlFor:"statusInput",children:"Status"}),Object(b.jsxs)(c.A,{id:"statusInput",onChange:e=>{C(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"All"}),Object(b.jsx)("option",{value:1,children:"Active"}),Object(b.jsx)("option",{value:0,children:"Inactive"})]})]}),Object(b.jsxs)(c.n,{children:[Object(b.jsx)(c.z,{htmlFor:"marginByInput",children:"Margin By"}),Object(b.jsxs)(c.A,{id:"marginByInput",onChange:e=>{A(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:"All"}),Object(b.jsx)("option",{value:"fix_cost",children:"Fix Cost"}),Object(b.jsx)("option",{value:"percent",children:"Percent"})]})]})]}),Object(b.jsx)(c.v,{noValidate:!0,validated:m,onSubmit:t=>{t.preventDefault();const a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),v(!0),a.checkValidity()&&(console.log(x),Object(s.e)(x).then((t=>{t.ok?(console.log(t),Object(u.a)(e.user.wa_number,p.b.ppobAllMarginEdit,"").then((e=>{console.log("Notification created: "+e.id)})),o.store.addNotification(Object(d.c)("Service margin updated successfully."))):(console.log(t),o.store.addNotification(Object(d.a)(t.error)))})))},children:Object(b.jsxs)(c.X,{className:"align-items-center mb-5",children:[Object(b.jsxs)(c.n,{xl:3,children:[Object(b.jsx)(c.z,{htmlFor:"margin_by",children:"Margin By (for all)"}),Object(b.jsxs)(c.A,{id:"margin_by",defaultValue:x.margin_by,onChange:e=>{f((t=>({...t,margin_by:e.target.value})))},children:[Object(b.jsx)("option",{value:"fix_cost",children:"Fix Cost"}),Object(b.jsx)("option",{value:"percent",children:"Percent"})]})]}),Object(b.jsxs)(c.n,{xl:3,children:[Object(b.jsx)(c.z,{htmlFor:"nominal",children:"Nominal"}),Object(b.jsx)(c.y,{id:"nominal",type:"number",defaultValue:x.nominal,max:"percent"===x.margin_by?100:1e5,onChange:e=>{f((t=>({...t,nominal:Object(l.a)(e.target.value)})))}})]}),Object(b.jsx)(c.n,{xl:3,children:Object(b.jsx)(c.e,{className:"mt-4",size:"sm",type:"submit",children:"Update margin"})})]})}),Object(b.jsx)(c.X,{className:"justify-content-start",children:a.length>0?null===a||void 0===a?void 0:a.map(((e,a)=>Object(b.jsx)(c.n,{xxl:3,md:5,className:"mb-4",children:Object(b.jsxs)(c.h,{style:{width:"18rem",height:"100%",cursor:"pointer"},onClick:()=>{t.push("/products/ppob/"+e.id)},children:[Object(b.jsx)(c.k,{orientation:"top",src:"https://via.placeholder.com/550x390.png?text="+e.name}),Object(b.jsxs)(c.i,{className:"text-center",children:[Object(b.jsx)(c.m,{children:e.name}),Object(b.jsx)(c.l,{children:e.desc}),e.active?Object(b.jsx)(c.b,{color:"success",shape:"rounded-pill",children:"Active"}):Object(b.jsx)(c.b,{color:"dark",shape:"rounded-pill",children:"Inactive"})]})]})},a))):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(c.G,{children:"No PPOB found"})})})})]}):Object(i.a)()}},353:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));const n={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},c={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},r={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var n=a(354),c=a.n(n),r=a(352),i=a(353);const s="https://api.ekoop.id/v01";function o(e){return c.a.get(s+"/users/notification?skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return c.a.get(s+"/users/notification/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const n={sender:e,service:t,title:i.c[t],content:i.a[t]+a,reference_id:""};return c.a.post(s+"/users/notification",n,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},360:function(e,t,a){"use strict";function n(e){const t=parseInt(e);return isNaN(t)?"":t}a.d(t,"a",(function(){return n}))},382:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return u}));var n=a(354),c=a.n(n),r=a(352);const i="https://api.ekoop.id/v01";function s(e,t,a,n){return c.a.get(i+"/transaction/services?search="+e+"&category="+t+"&active="+a+"&margin_by="+n,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function o(e){return c.a.get(i+"/transaction/services/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(e,t){return c.a.put(i+"/transaction/services/"+e,t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(){return c.a.get(i+"/transaction/service_margin",{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return c.a.put(i+"/transaction/service_margin",{margin_by:e.margin_by,nominal:e.nominal},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=8.56110b35.chunk.js.map