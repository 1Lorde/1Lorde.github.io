(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[13],{1487:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(60),c=n(391),r=n(12),i=n(121),o=n(384),u=n(383),l=n(122),d=n(72),h=n(8);t.default=()=>{const e=Object(r.g)();let{id:t}=Object(r.i)();const[n,b]=Object(a.useState)(),[j,p]=Object(a.useState)();Object(a.useEffect)((()=>{Object(u.h)(t).then((e=>{b(e),p(!0)}))}),[]);return j?Object(h.jsx)(s.o,{className:"d-flex justify-content-center",children:Object(h.jsxs)(s.h,{style:{width:"35rem"},children:[Object(h.jsx)(s.k,{orientation:"top",src:n.avatar?n.avatar:c.a}),Object(h.jsx)(s.i,{children:Object(h.jsxs)(s.v,{children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(s.z,{htmlFor:"fullnameInput",children:"Full Name"}),Object(h.jsx)(s.y,{type:"text",id:"fullnameInput",value:n.name,onChange:e=>{b((t=>({...t,name:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(s.z,{htmlFor:"ktpnumberInput",children:"KTP Number"}),Object(h.jsx)(s.y,{type:"text",id:"ktpnumberInput",value:n.ktp_id,onChange:e=>{b((t=>({...t,ktp_id:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(s.z,{htmlFor:"wanumberInput",children:"WhatsApp Number"}),Object(h.jsx)(s.y,{type:"text",id:"wanumberInput",value:n.wa_number,onChange:e=>{b((t=>({...t,wa_number:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(s.z,{htmlFor:"addressInput",children:"Address"}),Object(h.jsx)(s.y,{type:"text",id:"addressInput",value:n.address,onChange:e=>{b((t=>({...t,address:e.target.value})))}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(s.z,{htmlFor:"positionInput",children:"Position"}),Object(h.jsx)(s.A,{"aria-label":"Position",value:n.role,onChange:e=>{b((t=>({...t,role:e.target.value})))},children:(m=n.role,m in d.a?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("option",{value:"app-owner",children:"App Owner"}),Object(h.jsx)("option",{value:"product-technical",children:"Product & Technical"}),Object(h.jsx)("option",{value:"marketing-finance",children:"Marketing & Finance"})]}):m in d.b?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("option",{value:"koperasi-owner",children:"Koperasi Owner"}),Object(h.jsx)("option",{value:"credit-analyst",children:"Credit & Analyst"}),Object(h.jsx)("option",{value:"account-officer",children:"Account Officer"})]}):void console.log("Not valid role: "+m))})]}),Object(h.jsxs)("div",{className:"mb-4",children:[Object(h.jsx)(s.z,{htmlFor:"statusInput",children:"Status"}),Object(h.jsxs)(s.A,{"aria-label":"Status",value:n.status,onChange:e=>{b((t=>({...t,status:e.target.value})))},children:[Object(h.jsx)("option",{disabled:!0,children:"Please select"}),Object(h.jsx)("option",{value:"active",children:"Active"}),Object(h.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(s.e,{color:"primary",variant:"outline",onClick:()=>{console.log(n),Object(u.l)(n).then((t=>{t.ok?(i.store.addNotification(Object(o.c)(t.message)),e.push("/users")):i.store.addNotification(Object(o.a)(t.message))}))},children:"Save changes"})})]})})]})}):Object(l.a)();var m}},383:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"l",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"a",(function(){return p})),n.d(t,"k",(function(){return m})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return f}));var a=n(31),s=n.n(a),c=n(32);const r="https://api.ekoop.id/v01";function i(e){return s.a.get(r+"/auth/user?search="+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return s.a.get(r+"/auth/user/"+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function u(e){return s.a.put(r+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return s.a.post(r+"/auth/user",e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return s.a.get(r+"/users/admin/client/"+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function h(e,t){return s.a.put(r+"/users/admin/client/"+e,t,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function b(){return s.a.get(r+"/users/admin/client",{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function j(e,t){return s.a.get(r+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function p(e){return s.a.post(r+"/transaction/products",e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function m(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return s.a.put(r+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function O(){return s.a.get(r+"/transaction/services",{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function f(){return s.a.get(r+"/nasabah/nasabah",{headers:Object(c.b)()}).then((e=>e.data.nasabah_list)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}}}]);
//# sourceMappingURL=13.2c14d467.chunk.js.map