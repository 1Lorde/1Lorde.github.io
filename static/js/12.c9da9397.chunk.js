(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[12],{1500:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(57),s=a(12),c=a(118),i=a(356),d=a(69),o=a(38),u=a(369),l=a(355),p=a(354),b=a(7);t.default=()=>{const e=Object(s.g)(),{userState:t}=Object(r.useContext)(o.a),[a,h]=Object(r.useState)({role:"koperasi-owner"}),[j,g]=Object(r.useState)(!1);return Object(b.jsx)(n.o,{className:"d-flex justify-content-center",children:Object(b.jsx)(n.h,{style:{width:"35rem"},children:Object(b.jsx)(n.i,{children:Object(b.jsxs)(n.v,{noValidate:!0,validated:j,onSubmit:r=>{r.preventDefault();const n=r.currentTarget;!1===n.checkValidity()&&(r.preventDefault(),r.stopPropagation()),g(!0),n.checkValidity()&&(console.log(a),Object(u.a)(a).then((r=>{r.ok?(Object(l.a)(t.user.wa_number,p.b.userCreate,a.name).then((e=>{console.log("Notification created: "+e.id)})),c.store.addNotification(Object(i.c)("User ("+r.wa_number+") created")),e.push("/users")):c.store.addNotification(Object(i.a)(r.message))})))},children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(n.z,{htmlFor:"fullnameInput",children:"Full Name"}),Object(b.jsx)(n.y,{type:"text",id:"fullnameInput",required:!0,defaultValue:a.name,onChange:e=>{h((t=>({...t,name:e.target.value})))}})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(n.z,{htmlFor:"ktpnumberInput",children:"KTP Number"}),Object(b.jsx)(n.y,{type:"text",id:"ktpnumberInput",minLength:16,maxLength:16,required:!0,defaultValue:a.ktp_id,onChange:e=>{h((t=>({...t,ktp_id:e.target.value})))}}),Object(b.jsx)(n.x,{invalid:!0,children:"Please provide a valid KTP number (min length 16)."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(n.z,{htmlFor:"wanumberInput",children:"WhatsApp Number"}),Object(b.jsx)(n.y,{id:"wanumberInput",type:"tel",pattern:"^\\+62[0-9]{9,15}$",required:!0,defaultValue:a.wa_number,onChange:e=>{h((t=>({...t,wa_number:e.target.value})))}}),Object(b.jsx)(n.x,{invalid:!0,children:"Please provide a valid phone number."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(n.z,{htmlFor:"addressInput",children:"Address"}),Object(b.jsx)(n.y,{type:"text",id:"addressInput",minLength:5,required:!0,defaultValue:a.address,onChange:e=>{h((t=>({...t,address:e.target.value})))}}),Object(b.jsx)(n.x,{invalid:!0,children:"Please provide a valid address (min length 5)."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(n.z,{htmlFor:"positionInput",children:"Position"}),Object(b.jsxs)(n.A,{"aria-label":"Position",defaultValue:a.role,onChange:e=>{h((t=>({...t,role:e.target.value})))},children:[Object(b.jsx)("option",{disabled:!0,children:"Please select"}),(f=t.user.role,d.c[f]===d.c["app-owner"]?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("option",{value:"app-owner",children:"App Owner"}),Object(b.jsx)("option",{value:"product-technical",children:"Product & Technical"}),Object(b.jsx)("option",{value:"marketing-finance",children:"Marketing & Finance"})]}):d.c[f]===d.c["koperasi-owner"]?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("option",{value:"koperasi-owner",children:"Koperasi Owner"}),Object(b.jsx)("option",{value:"credit-analyst",children:"Credit & Analyst"}),Object(b.jsx)("option",{value:"account-officer",children:"Account Officer"})]}):void console.log("Not valid role: "+f))]})]}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(n.e,{color:"primary",variant:"outline",type:"submit",children:"Create"})})]})})})});var f}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s}));const r={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a(353),n=a.n(r),s=a(352),c=a(354);const i="https://api.ekoop.id/v01";function d(e){return n.a.get(i+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.get(i+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function u(e,t,a){const r={sender:e,service:t,title:c.c[t],content:c.a[t]+a,reference_id:""};return n.a.post(i+"/users/notification",r,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},369:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a(353),n=a.n(r),s=a(352);const c="https://api.ekoop.id/v01";function i(e,t,a,r,i){return n.a.get(c+"/auth/user?search="+t+"&status="+a+"&role="+r+"&sort="+i+"&skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(console.log(e.message),403===e.response.status)return console.log(e.message),null}))}function d(e){return n.a.get(c+"/auth/user/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.put(c+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.post(c+"/auth/user",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=12.c9da9397.chunk.js.map