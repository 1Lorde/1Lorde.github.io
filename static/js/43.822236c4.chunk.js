(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[43],{1519:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(57),s=a(12),n=a(117),d=a(355),i=a(7);t.default=()=>{const e=Object(s.g)();let{id:t}=Object(s.i)();const[a,o]=Object(r.useState)(),[l,u]=Object(r.useState)();return Object(r.useEffect)((()=>{Object(d.b)(t).then((e=>{o(e.data),u(!0)}))}),[]),l?Object(i.jsx)(c.o,{className:"d-flex justify-content-center",children:Object(i.jsx)(c.h,{style:{width:"35rem"},children:Object(i.jsx)(c.i,{children:Object(i.jsxs)(c.v,{children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)(c.z,{htmlFor:"date",children:"Date"}),Object(i.jsx)(c.y,{type:"text",id:"date",readOnly:!0,defaultValue:a.created})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)(c.z,{htmlFor:"sender",children:"Sender"}),Object(i.jsx)(c.y,{type:"text",id:"sender",readOnly:!0,defaultValue:a.sender})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)(c.z,{htmlFor:"title",children:"Title"}),Object(i.jsx)(c.y,{type:"text",id:"title",readOnly:!0,defaultValue:a.title})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)(c.z,{htmlFor:"content",children:"Content"}),Object(i.jsx)(c.B,{type:"text",id:"content",readOnly:!0,defaultValue:a.content})]}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(c.e,{onClick:()=>{e.push("/notifications")},children:"Return back"})})]})})})}):Object(n.a)()}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s}));const r={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},c={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var r=a(353),c=a.n(r),s=a(352),n=a(354);const d="https://api.ekoop.id/v01";function i(e){return c.a.get(d+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return c.a.get(d+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const r={sender:e,service:t,title:n.c[t],content:n.a[t]+a,reference_id:""};return c.a.post(d+"/users/notification",r,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}}}]);
//# sourceMappingURL=43.822236c4.chunk.js.map