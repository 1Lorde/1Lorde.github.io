(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[13],{1499:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(57),s=a(368),c=a(12),i=a(118),d=a(356),o=a(117),u=a(69),l=a(369),p=a(355),b=a(354),h=a(38),j=a(7);t.default=()=>{const{userState:e}=Object(r.useContext)(h.a),t=Object(c.g)();let{id:a}=Object(c.i)();const[g,O]=Object(r.useState)(),[f,m]=Object(r.useState)();Object(r.useEffect)((()=>{Object(l.b)(a).then((e=>{O(e),m(!0)}))}),[]);return f?Object(j.jsx)(n.o,{className:"d-flex justify-content-center",children:Object(j.jsxs)(n.h,{style:{width:"35rem"},children:[Object(j.jsx)(n.k,{orientation:"top",src:g.avatar?g.avatar:s.a}),Object(j.jsx)(n.i,{children:Object(j.jsxs)(n.v,{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(n.z,{htmlFor:"fullnameInput",children:"Full Name"}),Object(j.jsx)(n.y,{type:"text",id:"fullnameInput",value:g.name,onChange:e=>{O((t=>({...t,name:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(n.z,{htmlFor:"ktpnumberInput",children:"KTP Number"}),Object(j.jsx)(n.y,{type:"text",id:"ktpnumberInput",value:g.ktp_id,onChange:e=>{O((t=>({...t,ktp_id:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(n.z,{htmlFor:"wanumberInput",children:"WhatsApp Number"}),Object(j.jsx)(n.y,{type:"text",id:"wanumberInput",value:g.wa_number,onChange:e=>{O((t=>({...t,wa_number:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(n.z,{htmlFor:"addressInput",children:"Address"}),Object(j.jsx)(n.y,{type:"text",id:"addressInput",value:g.address,onChange:e=>{O((t=>({...t,address:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(n.z,{htmlFor:"positionInput",children:"Position"}),Object(j.jsx)(n.A,{"aria-label":"Position",value:g.role,onChange:e=>{O((t=>({...t,role:e.target.value})))},children:(v=g.role,v in u.a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("option",{value:"app-owner",children:"App Owner"}),Object(j.jsx)("option",{value:"product-technical",children:"Product & Technical"}),Object(j.jsx)("option",{value:"marketing-finance",children:"Marketing & Finance"})]}):v in u.b?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("option",{value:"koperasi-owner",children:"Koperasi Owner"}),Object(j.jsx)("option",{value:"credit-analyst",children:"Credit & Analyst"}),Object(j.jsx)("option",{value:"account-officer",children:"Account Officer"})]}):void console.log("Not valid role: "+v))})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)(n.z,{htmlFor:"statusInput",children:"Status"}),Object(j.jsxs)(n.A,{"aria-label":"Status",value:g.status,onChange:e=>{O((t=>({...t,status:e.target.value})))},children:[Object(j.jsx)("option",{disabled:!0,children:"Please select"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(n.e,{color:"primary",variant:"outline",onClick:()=>{console.log(g),Object(l.d)(g).then((a=>{a.ok?(i.store.addNotification(Object(d.c)(a.message)),Object(p.a)(e.user.wa_number,b.b.userEdit,g.name).then((e=>{console.log("Notification created: "+e.id)})),t.push("/users")):i.store.addNotification(Object(d.a)(a.message))}))},children:"Save changes"})})]})})]})}):Object(o.a)();var v}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s}));const r={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a(353),n=a.n(r),s=a(352),c=a(354);const i="https://api.ekoop.id/v01";function d(e){return n.a.get(i+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.get(i+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function u(e,t,a){const r={sender:e,service:t,title:c.c[t],content:c.a[t]+a,reference_id:""};return n.a.post(i+"/users/notification",r,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},369:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a(353),n=a.n(r),s=a(352);const c="https://api.ekoop.id/v01";function i(e,t,a,r,i){return n.a.get(c+"/auth/user?search="+t+"&status="+a+"&role="+r+"&sort="+i+"&skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(console.log(e.message),403===e.response.status)return console.log(e.message),null}))}function d(e){return n.a.get(c+"/auth/user/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.put(c+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.post(c+"/auth/user",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=13.a4087400.chunk.js.map