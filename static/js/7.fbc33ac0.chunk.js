(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[7],{1499:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(60),a=n(12),r=n(122),i=n(383),o=n(8);t.default=()=>{const e=Object(a.g)(),[t,n]=Object(c.useState)([]),[l,d]=Object(c.useState)();return Object(c.useEffect)((()=>{Object(i.f)().then((e=>{!0===e.ok&&(n(e.services),d(!0))}))}),[]),l?Object(o.jsxs)(s.o,{children:[Object(o.jsxs)(s.S,{className:"align-items-center mb-4",children:[Object(o.jsxs)(s.n,{xs:6,children:[Object(o.jsx)(s.z,{htmlFor:"search",children:"Search"}),Object(o.jsx)(s.y,{type:"text",id:"search"})]}),Object(o.jsxs)(s.n,{children:[Object(o.jsx)(s.z,{htmlFor:"category",children:"Category"}),Object(o.jsxs)(s.A,{id:"category",children:[Object(o.jsx)("option",{value:"1",children:"One"}),Object(o.jsx)("option",{value:"2",children:"Two"}),Object(o.jsx)("option",{value:"3",children:"Three"})]})]}),Object(o.jsxs)(s.n,{children:[Object(o.jsx)(s.z,{htmlFor:"sort",children:"Sort By"}),Object(o.jsxs)(s.A,{id:"sort",children:[Object(o.jsx)("option",{value:"1",children:"One"}),Object(o.jsx)("option",{value:"2",children:"Two"}),Object(o.jsx)("option",{value:"3",children:"Three"})]})]})]}),Object(o.jsxs)(s.S,{className:"align-items-center mb-5",children:[Object(o.jsx)(s.n,{xl:2,className:"mb-2",children:"All Services Margin"}),Object(o.jsx)(s.n,{xl:4,className:"mb-2",children:Object(o.jsxs)(s.A,{children:[Object(o.jsx)("option",{value:"1",children:"One"}),Object(o.jsx)("option",{value:"2",children:"Two"}),Object(o.jsx)("option",{value:"3",children:"Three"})]})}),Object(o.jsx)(s.n,{xl:4,className:"mb-2",children:Object(o.jsx)(s.y,{type:"text"})})]}),Object(o.jsx)(s.S,{className:"justify-content-start",children:null===t||void 0===t?void 0:t.map(((t,n)=>Object(o.jsx)(s.n,{xxl:3,md:5,className:"mb-4",children:Object(o.jsxs)(s.h,{style:{width:"18rem",height:"100%",cursor:"pointer"},onClick:()=>{e.push({pathname:"/products/ppob/details",state:t})},children:[Object(o.jsx)(s.k,{orientation:"top",src:"https://via.placeholder.com/550x390.png?text="+t.name}),Object(o.jsxs)(s.i,{className:"text-center",children:[Object(o.jsx)(s.m,{children:t.name}),Object(o.jsx)(s.l,{children:t.desc}),t.active?Object(o.jsx)(s.b,{color:"success",shape:"rounded-pill",children:"Active"}):Object(o.jsx)(s.b,{color:"dark",shape:"rounded-pill",children:"Inactive"})]})]})},n)))})]}):Object(r.a)()}},383:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"k",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"f",(function(){return m}));var c=n(32),s=n.n(c),a=n(33);const r="https://api.ekoop.id/v01";function i(e){return s.a.get(r+"/auth/user?search="+e,{headers:Object(a.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return s.a.get(r+"/auth/user/"+e,{headers:Object(a.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e){return s.a.put(r+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return s.a.post(r+"/auth/user",e,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return s.a.get(r+"/users/admin/client/"+e,{headers:Object(a.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function h(e,t){return s.a.put(r+"/users/admin/client/"+e,t,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function j(){return s.a.get(r+"/users/admin/client",{headers:Object(a.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function b(e,t){return s.a.get(r+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function p(e){return s.a.post(r+"/transaction/products",e,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function O(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return s.a.put(r+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function m(){return s.a.get(r+"/transaction/services",{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}}}]);
//# sourceMappingURL=7.fbc33ac0.chunk.js.map