(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[11],{1488:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(60),c=n(12),s=n(121),i=n(384),o=n(383),u=n(72),d=n(34),l=n(8);t.default=()=>{const e=Object(c.g)(),{userState:t}=Object(a.useContext)(d.a),[n,h]=Object(a.useState)({role:"koperasi-owner"}),[b,j]=Object(a.useState)(!1);return Object(l.jsx)(r.o,{className:"d-flex justify-content-center",children:Object(l.jsx)(r.h,{style:{width:"35rem"},children:Object(l.jsx)(r.i,{children:Object(l.jsxs)(r.v,{noValidate:!0,validated:b,onSubmit:t=>{t.preventDefault();const a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),j(!0),a.checkValidity()&&(console.log(n),Object(o.b)(n).then((t=>{t.ok?(s.store.addNotification(Object(i.c)("User ("+t.wa_number+") created")),e.push("/users")):s.store.addNotification(Object(i.a)(t.message))})))},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(r.z,{htmlFor:"fullnameInput",children:"Full Name"}),Object(l.jsx)(r.y,{type:"text",id:"fullnameInput",required:!0,defaultValue:n.name,onChange:e=>{h((t=>({...t,name:e.target.value})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(r.z,{htmlFor:"ktpnumberInput",children:"KTP Number"}),Object(l.jsx)(r.y,{type:"text",id:"ktpnumberInput",minLength:16,required:!0,defaultValue:n.ktp_id,onChange:e=>{h((t=>({...t,ktp_id:e.target.value})))}}),Object(l.jsx)(r.x,{invalid:!0,children:"Please provide a valid phone number (min length 16)."})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(r.z,{htmlFor:"wanumberInput",children:"WhatsApp Number"}),Object(l.jsx)(r.y,{type:"tel",pattern:"^\\+62[0-9]{9,15}$",required:!0,defaultValue:n.wa_number,onChange:e=>{h((t=>({...t,wa_number:e.target.value})))}}),Object(l.jsx)(r.x,{invalid:!0,children:"Please provide a valid phone number."})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(r.z,{htmlFor:"addressInput",children:"Address"}),Object(l.jsx)(r.y,{type:"text",id:"addressInput",minLength:5,required:!0,defaultValue:n.address,onChange:e=>{h((t=>({...t,address:e.target.value})))}}),Object(l.jsx)(r.x,{invalid:!0,children:"Please provide a valid phone number (min length 5)."})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(r.z,{htmlFor:"positionInput",children:"Position"}),Object(l.jsxs)(r.A,{"aria-label":"Position",defaultValue:n.role,onChange:e=>{h((t=>({...t,role:e.target.value})))},children:[Object(l.jsx)("option",{disabled:!0,children:"Please select"}),(p=t.user.role,u.c[p]===u.c["app-owner"]?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("option",{value:"app-owner",children:"App Owner"}),Object(l.jsx)("option",{value:"product-technical",children:"Product & Technical"}),Object(l.jsx)("option",{value:"marketing-finance",children:"Marketing & Finance"})]}):u.c[p]===u.c["koperasi-owner"]?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("option",{value:"koperasi-owner",children:"Koperasi Owner"}),Object(l.jsx)("option",{value:"credit-analyst",children:"Credit & Analyst"}),Object(l.jsx)("option",{value:"account-officer",children:"Account Officer"})]}):void console.log("Not valid role: "+p))]})]}),Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)(r.e,{color:"primary",variant:"outline",type:"submit",children:"Create"})})]})})})});var p}},383:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"k",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"f",(function(){return O}));var a=n(32),r=n.n(a),c=n(33);const s="https://api.ekoop.id/v01";function i(e){return r.a.get(s+"/auth/user?search="+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return r.a.get(s+"/auth/user/"+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function u(e){return r.a.put(s+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return r.a.post(s+"/auth/user",e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return r.a.get(s+"/users/admin/client/"+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function h(e,t){return r.a.put(s+"/users/admin/client/"+e,t,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function b(){return r.a.get(s+"/users/admin/client",{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function j(e,t){return r.a.get(s+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function p(e){return r.a.post(s+"/transaction/products",e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function m(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return r.a.put(s+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function O(){return r.a.get(s+"/transaction/services",{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}}}]);
//# sourceMappingURL=11.b61adb59.chunk.js.map