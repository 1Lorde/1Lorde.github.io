(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[9],{1527:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(60),s=a(389),c=a(12),i=a(122),d=a(369),o=a(392),u=a(370),p=a(368),l=a(41),b=a(444),h=a(7);t.default=()=>{const{t:e}=Object(b.a)(),{userState:t}=Object(r.useContext)(l.a),a=Object(c.g)(),[j,g]=Object(r.useState)({}),[f,m]=Object(r.useState)(!1);return Object(h.jsx)(n.o,{className:"d-flex justify-content-center",children:Object(h.jsxs)(n.h,{style:{width:"35rem"},children:[Object(h.jsx)(n.k,{orientation:"top",src:s.a}),Object(h.jsx)(n.i,{children:Object(h.jsxs)(n.v,{noValidate:!0,validated:f,onSubmit:function(r){r.preventDefault();const n=r.currentTarget;!1===n.checkValidity()&&r.stopPropagation(),m(!0),n.checkValidity()&&(console.log(j),Object(o.a)(j).then((r=>{r.ok?(Object(u.a)(t.user.wa_number,p.b.userCreate,j.name).then((e=>{console.log("Notification created"+e.id)})),i.store.addNotification(Object(d.c)(e("notifications.nasabah_create",{name:j.name}))),a.push("/nasabah")):r.message?(console.log(r),i.store.addNotification(Object(d.a)(r.message))):(console.log(r),i.store.addNotification(Object(d.a)(r.error)))})))},children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(n.z,{htmlFor:"name",children:e("name")}),Object(h.jsx)(n.y,{type:"text",id:"name",required:!0,onChange:e=>{g((t=>({...t,name:e.target.value})))}}),Object(h.jsx)(n.x,{invalid:!0,children:e("invalid_name")})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(n.z,{htmlFor:"ktp",children:e("ktp")}),Object(h.jsx)(n.y,{type:"text",id:"ktp",required:!0,minLength:16,maxLength:16,onChange:e=>{g((t=>({...t,ktp_id:e.target.value})))}}),Object(h.jsx)(n.x,{invalid:!0,children:e("invalid_ktp")})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(n.z,{htmlFor:"wa",children:e("whatsapp")}),Object(h.jsx)(n.y,{type:"tel",id:"wa",required:!0,pattern:"^\\+62[0-9]{9,15}$",onChange:e=>{g((t=>({...t,wa_number:e.target.value})))}}),Object(h.jsx)(n.x,{invalid:!0,children:e("invalid_wa")})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(n.z,{htmlFor:"address",children:e("address")}),Object(h.jsx)(n.y,{type:"text",id:"address",minLength:5,required:!0,onChange:e=>{g((t=>({...t,address:e.target.value})))}}),Object(h.jsx)(n.x,{invalid:!0,children:e("invalid_address")})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(n.z,{htmlFor:"group",children:e("group")}),Object(h.jsx)(n.y,{type:"text",id:"group",onChange:e=>{g((t=>({...t,group:e.target.value})))}})]}),Object(h.jsx)("div",{className:"d-flex justify-content-end",children:Object(h.jsx)(n.e,{color:"primary",type:"submit",children:e("create")})})]})})]})})}},368:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s}));const r={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},370:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a(367),n=a.n(r),s=a(366),c=a(368);const i="https://api.ekoop.id/v01";function d(e){return n.a.get(i+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.get(i+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function u(e,t,a){const r={sender:e,service:t,title:c.c[t],content:c.a[t]+a,reference_id:""};return n.a.post(i+"/users/notification",r,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},392:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return u}));var r=a(367),n=a.n(r),s=a(366);const c="https://api.ekoop.id/v01";function i(e,t,a){return n.a.get(c+"/nasabah/nasabah?search="+t+"&status="+a+"&skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return n.a.get(c+"/nasabah/nasabah/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e,t){return n.a.put(c+"/nasabah/nasabah/"+e,{name:t.name,ktp_id:t.ktp_id,wa_number:t.wa_number,address:t.address,reason:t.reason,group:t.group,active:"true"===t.active},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.post(c+"/nasabah/nasabah",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=9.66c572a2.chunk.js.map