(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[42],{1520:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(57),s=a(12),n=a(117),i=a(118),o=a(356),d=a(360),l=a(355),u=a(354),p=a(38),h=a(7);t.default=()=>{const{userState:e}=Object(c.useContext)(p.a),t=Object(s.g)();let{id:a}=Object(s.i)();const[b,j]=Object(c.useState)({}),[g,m]=Object(c.useState)();Object(c.useEffect)((()=>{Object(d.c)(a).then((e=>{e.ok?(j(e.data),console.log(e.data),m(!0)):e.message?(console.log(e),i.store.addNotification(Object(o.a)(e.message))):(console.log(e),i.store.addNotification(Object(o.a)(e.error)))}))}),[]),Object(c.useEffect)((()=>{console.log(b)}),[b]);return g?Object(h.jsx)(r.o,{className:"d-flex justify-content-center",children:Object(h.jsxs)(r.h,{style:{width:"35rem"},children:[Object(h.jsx)(r.k,{orientation:"top",src:"https://via.placeholder.com/550x390.png?text="+(b.name?b.name:"No name")}),Object(h.jsx)(r.i,{children:Object(h.jsxs)(r.v,{children:[Object(h.jsx)(r.X,{children:Object(h.jsxs)(r.n,{children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"name",children:"Name"}),Object(h.jsx)(r.y,{type:"text",id:"name",required:!0,placeholder:"No data provided",value:b.name,onChange:e=>{j((t=>({...t,name:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"description",children:"Description"}),Object(h.jsx)(r.y,{type:"text",id:"description",placeholder:"No data provided",value:b.description,onChange:e=>{j((t=>({...t,description:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"slug",children:"Slug"}),Object(h.jsx)(r.y,{type:"text",id:"slug",required:!0,placeholder:"No data provided",value:b.slug,onChange:e=>{j((t=>({...t,slug:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"status",children:"Status"}),Object(h.jsxs)(r.A,{id:"status",value:b.active,onChange:e=>{j((t=>({...t,active:e.target.value})))},children:[Object(h.jsx)("option",{value:"true",children:"Active"}),Object(h.jsx)("option",{value:"false",children:"Inactive"})]})]}),Object(h.jsxs)("div",{className:"pt-1",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Price"}),Object(h.jsxs)(r.X,{className:"pt-2",children:[Object(h.jsx)(r.n,{children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"monthly",children:"Monthly"}),Object(h.jsx)(r.y,{type:"number",id:"monthly",required:!0,placeholder:"No data provided",value:b.price.monthly,onChange:e=>{j((t=>({...t,price:{...t.price,monthly:parseInt(e.target.value)}})))}})]})}),Object(h.jsx)(r.n,{children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"yearly",children:"Yearly"}),Object(h.jsx)(r.y,{type:"number",id:"yearly",required:!0,placeholder:"No data provided",value:b.price.yearly,onChange:e=>{j((t=>({...t,price:{...t.price,yearly:parseInt(e.target.value)}})))}})]})})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Quota"}),Object(h.jsxs)(r.X,{className:"pt-2",children:[Object(h.jsx)(r.n,{children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"account_officer",children:"Account Officer"}),Object(h.jsx)(r.y,{type:"number",id:"account_officer",required:!0,placeholder:"No data provided",value:b.quota.account_officer,onChange:e=>{j((t=>({...t,quota:{...t.quota,account_officer:parseInt(e.target.value)}})))}})]})}),Object(h.jsx)(r.n,{children:Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.z,{htmlFor:"nasabah",children:"Nasabah"}),Object(h.jsx)(r.y,{type:"number",id:"nasabah",required:!0,placeholder:"No data provided",value:b.quota.nasabah,onChange:e=>{j((t=>({...t,quota:{...t.quota,nasabah:parseInt(e.target.value)}})))}})]})})]})]})]})}),Object(h.jsx)(r.X,{className:"mt-3 mb-1",children:Object(h.jsx)("div",{className:"d-flex justify-content-end",children:Object(h.jsx)(r.e,{color:"primary",onClick:()=>{console.log(b),Object(d.e)(b.id,b).then((a=>{a.ok?(Object(l.a)(e.user.wa_number,u.b.packageEdit,b.name).then((e=>{console.log("Notification created: "+e.id)})),i.store.addNotification(Object(o.c)("Package "+b.name+" updated successfully.")),t.push("/packages")):a.message?(console.log(a),i.store.addNotification(Object(o.a)(a.message))):(console.log(a),i.store.addNotification(Object(o.a)(a.error)))}))},children:"Edit"})})})]})})]})}):Object(n.a)()}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return s}));const c={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},r={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},s={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var c=a(353),r=a.n(c),s=a(352),n=a(354);const i="https://api.ekoop.id/v01";function o(e){return r.a.get(i+"/users/notification?skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return r.a.get(i+"/users/notification/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const c={sender:e,service:t,title:n.c[t],content:n.a[t]+a,reference_id:""};return r.a.post(i+"/users/notification",c,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},360:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return d})),a.d(t,"e",(function(){return l})),a.d(t,"a",(function(){return u}));var c=a(353),r=a.n(c),s=a(352);const n="https://api.ekoop.id/v01";function i(){return r.a.get(n+"/users/packages",{headers:Object(s.a)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function o(){return r.a.get(n+"/users/admin/packages",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(e){return r.a.get(n+"/users/admin/packages/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function l(e,t){return r.a.put(n+"/users/admin/packages/"+e,{name:t.name,slug:t.slug,description:t.description,price_monthly:t.price.monthly,price_yearly:t.price.yearly,quota_AO:t.quota.account_officer,quota_nasabah:t.quota.nasabah,active:"true"===t.active},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return r.a.post(n+"/users/admin/packages",{name:e.name,slug:e.slug,description:e.description,price_monthly:e.price.monthly,price_yearly:e.price.yearly,quota_AO:e.quota.account_officer,quota_nasabah:e.quota.nasabah},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=42.6dbfa1b1.chunk.js.map