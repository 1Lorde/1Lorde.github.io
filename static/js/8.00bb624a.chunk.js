(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[8],{1536:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(32),r=a(124),i=a(123),s=a(370),d=a(12),o=a(394),l=a(375),u=a(371),p=a(369),j=a(42),b=a(445),h=a(3);t.default=()=>{const{t:e}=Object(b.a)(),{userState:t}=Object(c.useContext)(j.a),{id:a}=Object(d.i)(),[m,O]=Object(c.useState)(),[g,x]=Object(c.useState)();return Object(c.useEffect)((()=>{Object(o.b)(a).then((e=>{e.ok?(O(e.data),x(!0)):e.message?(console.log(e),i.store.addNotification(Object(s.a)(e.message))):(console.log(e),i.store.addNotification(Object(s.a)(e.error)))}))}),[]),g?Object(h.jsxs)(n.v,{children:[Object(h.jsxs)(n.V,{xs:{cols:1},md:{cols:2},className:"mb-4",children:[Object(h.jsxs)(n.n,{children:[Object(h.jsx)(n.z,{htmlFor:"type",children:e("product_type")}),Object(h.jsxs)(n.A,{id:"type",value:m.tipe,disabled:!0,children:[Object(h.jsx)("option",{value:"savings",children:e("savings")}),Object(h.jsx)("option",{value:"credits",children:e("credits")})]}),Object(h.jsx)(n.o,{fluid:!0,className:"d-flex justify-content-center mb-5",children:Object(h.jsx)(n.I,{thumbnail:!0,rounded:!0,src:"https://via.placeholder.com/550x390.png?text="+m.name,width:500,height:500,className:"mt-5"})})]}),Object(h.jsxs)(n.n,{children:[Object(h.jsxs)("div",{className:"mb-2",children:[Object(h.jsx)(n.z,{htmlFor:"name",children:e("name")}),Object(h.jsx)(n.y,{type:"text",id:"name",value:m.name,onChange:e=>{O((t=>({...t,name:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(n.z,{htmlFor:"description",children:e("description")}),Object(h.jsx)(n.B,{type:"text",id:"description",rows:"3",value:m.description,onChange:e=>{O((t=>({...t,description:e.target.value})))}})]}),Object(h.jsx)("h5",{children:e("balance")}),Object(h.jsxs)("div",{className:"ms-4 mb-2",children:[Object(h.jsx)(n.z,{htmlFor:"start",children:e("start")}),Object(h.jsx)(n.y,{type:"number",id:"start",value:m.balance_start,onChange:e=>{O((t=>({...t,balance_start:Object(l.a)(e.target.value)})))}})]}),Object(h.jsxs)("div",{className:"ms-4 mb-2",children:[Object(h.jsx)(n.z,{htmlFor:"min",children:e("min")}),Object(h.jsx)(n.y,{type:"number",id:"min"})]}),Object(h.jsx)("h5",{children:e("rate")}),Object(h.jsxs)(n.V,{className:"ms-3 mb-3",children:[Object(h.jsxs)(n.n,{xs:4,children:[Object(h.jsx)(n.z,{htmlFor:"percent_rate",children:e("percentage")}),Object(h.jsx)(n.y,{type:"number",id:"percent_rate",value:m.percent_rate,onChange:e=>{O((t=>({...t,percent_rate:Object(l.a)(e.target.value)})))}})]}),Object(h.jsxs)(n.n,{children:[Object(h.jsx)(n.z,{htmlFor:"rate_type",children:e("type")}),Object(h.jsxs)(n.A,{id:"rate_type",defaultValue:m.rate_type,onChange:e=>{O((t=>({...t,rate_type:e.target.value})))},children:[Object(h.jsx)("option",{value:"fix",children:e("fix")}),Object(h.jsx)("option",{value:"efektif",children:e("effective")}),Object(h.jsx)("option",{value:"syaria",children:e("syaria")})]})]})]}),Object(h.jsx)("h5",{children:e("requirements")}),Object(h.jsxs)(n.V,{className:"mb-3 ms-3",children:[Object(h.jsxs)(n.n,{children:[Object(h.jsx)(n.z,{htmlFor:"limit_min",children:e("limit_min")}),Object(h.jsx)(n.y,{type:"number",id:"limit_min",value:m.limit_min,onChange:e=>{O((t=>({...t,limit_min:Object(l.a)(e.target.value)})))}})]}),Object(h.jsxs)(n.n,{children:[Object(h.jsx)(n.z,{htmlFor:"limit_max",children:e("limit_max")}),Object(h.jsx)(n.y,{type:"number",id:"limit_max",value:m.limit_max,onChange:e=>{O((t=>({...t,limit_max:Object(l.a)(e.target.value)})))}})]})]}),Object(h.jsx)(n.z,{htmlFor:"status",children:e("status")}),Object(h.jsxs)(n.A,{id:"status",value:m.active,onChange:e=>{O((t=>({...t,active:"true"===e.target.value})))},children:[Object(h.jsx)("option",{value:"true",children:e("active")}),Object(h.jsx)("option",{value:"false",children:e("inactive")})]})]})]}),Object(h.jsxs)(n.V,{xs:{cols:1},md:{cols:2},children:[Object(h.jsx)(n.n,{className:"d-grid d-md-flex justify-content-md-start mb-3",children:Object(h.jsx)(n.e,{color:"primary",variant:"outline",children:e("register_nasabah_to_product")})}),Object(h.jsx)(n.n,{className:"d-grid d-md-flex justify-content-md-end mb-3",onClick:function(){console.log(m),Object(o.d)(m).then((a=>{console.log(a),a.ok?(Object(u.a)(t.user.wa_number,p.b.productCreate,m.name+" ("+m.tipe+")").then((e=>{console.log("Notification created: "+e.id)})),i.store.addNotification(Object(s.c)(e("notifications.product_update")))):i.store.addNotification(Object(s.a)(a.message))}))},children:Object(h.jsx)(n.e,{color:"primary",children:e("edit")})})]})]}):Object(r.a)()}},369:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));const c={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},n={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},r={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},371:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));var c=a(368),n=a.n(c),r=a(367),i=a(369);const s="https://api.ekoop.id/v01";function d(e){return n.a.get(s+"/users/notification?skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.get(s+"/users/notification/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const c={sender:e,service:t,title:i.c[t],content:i.a[t]+a,reference_id:""};return n.a.post(s+"/users/notification",c,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},375:function(e,t,a){"use strict";function c(e){const t=parseInt(e);return isNaN(t)?"":t}a.d(t,"a",(function(){return c}))},394:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return l}));var c=a(368),n=a.n(c),r=a(367);const i="https://api.ekoop.id/v01";function s(e,t){return n.a.get(i+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(e){return n.a.get(i+"/transaction/products/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function o(e){return n.a.post(i+"/transaction/products",e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function l(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return n.a.put(i+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=8.00bb624a.chunk.js.map