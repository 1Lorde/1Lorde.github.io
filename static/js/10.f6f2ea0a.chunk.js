(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[10],{1498:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(60),s=n(122),r=n(383),i=n(121),o=n(384),l=n(12),d=n(8);t.default=e=>{const t=Object(l.g)(),[n,u]=Object(a.useState)(),[j,h]=Object(a.useState)();function b(e){const t=parseInt(e);return isNaN(t)?"":t}return Object(a.useEffect)((()=>{e.location.state||t.push("/products/savings"),u(e.location.state),h(!0),console.log(e.location.state)}),[]),j?Object(d.jsxs)(c.v,{children:[Object(d.jsxs)(c.S,{xs:{cols:1},md:{cols:2},className:"mb-4",children:[Object(d.jsxs)(c.n,{children:[Object(d.jsx)(c.z,{htmlFor:"type",children:"Type of Product"}),Object(d.jsxs)(c.A,{id:"type",value:n.tipe,disabled:!0,children:[Object(d.jsx)("option",{value:"savings",children:"Savings"}),Object(d.jsx)("option",{value:"credits",children:"Credits"})]}),Object(d.jsx)(c.o,{fluid:!0,className:"d-flex justify-content-center mb-5",children:Object(d.jsx)(c.I,{thumbnail:!0,rounded:!0,src:"https://via.placeholder.com/550x390.png?text="+n.name,width:500,height:500,className:"mt-5"})})]}),Object(d.jsxs)(c.n,{children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)(c.z,{htmlFor:"name",children:"Products Name"}),Object(d.jsx)(c.y,{type:"text",id:"name",value:n.name,onChange:e=>{u((t=>({...t,name:e.target.value})))}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(c.z,{htmlFor:"description",children:"Description"}),Object(d.jsx)(c.B,{type:"text",id:"description",rows:"3",value:n.description,onChange:e=>{u((t=>({...t,description:e.target.value})))}})]}),Object(d.jsx)("h5",{children:"Balance"}),Object(d.jsxs)("div",{className:"ms-4 mb-2",children:[Object(d.jsx)(c.z,{htmlFor:"start",children:"Start"}),Object(d.jsx)(c.y,{type:"number",id:"start",value:n.balance_start,onChange:e=>{u((t=>({...t,balance_start:b(e.target.value)})))}})]}),Object(d.jsxs)("div",{className:"ms-4 mb-2",children:[Object(d.jsx)(c.z,{htmlFor:"min",children:"Minimal"}),Object(d.jsx)(c.y,{type:"number",id:"min"})]}),Object(d.jsx)("h5",{children:"Rate"}),Object(d.jsxs)(c.S,{className:"ms-3 mb-3",children:[Object(d.jsxs)(c.n,{xs:4,children:[Object(d.jsx)(c.z,{htmlFor:"percent_rate",children:"Percentage"}),Object(d.jsx)(c.y,{type:"number",id:"percent_rate",value:n.percent_rate,onChange:e=>{u((t=>({...t,percent_rate:b(e.target.value)})))}})]}),Object(d.jsxs)(c.n,{children:[Object(d.jsx)(c.z,{htmlFor:"rate_type",children:"Type"}),Object(d.jsxs)(c.A,{id:"rate_type",defaultValue:n.rate_type,onChange:e=>{u((t=>({...t,rate_type:e.target.value})))},children:[Object(d.jsx)("option",{value:"fix",children:"Fix"}),Object(d.jsx)("option",{value:"efektif",children:"Efektif"}),Object(d.jsx)("option",{value:"syaria",children:"Syaria"})]})]})]}),Object(d.jsx)("h5",{children:"Requirements"}),Object(d.jsxs)(c.S,{className:"mb-3 ms-3",children:[Object(d.jsxs)(c.n,{children:[Object(d.jsx)(c.z,{htmlFor:"limit_min",children:"Limit Min"}),Object(d.jsx)(c.y,{type:"number",id:"limit_min",value:n.limit_min,onChange:e=>{u((t=>({...t,limit_min:b(e.target.value)})))}})]}),Object(d.jsxs)(c.n,{children:[Object(d.jsx)(c.z,{htmlFor:"limit_max",children:"Limit Max"}),Object(d.jsx)(c.y,{type:"number",id:"limit_max",value:n.limit_max,onChange:e=>{u((t=>({...t,limit_max:b(e.target.value)})))}})]})]}),Object(d.jsx)(c.z,{htmlFor:"status",children:"Status"}),Object(d.jsxs)(c.A,{id:"status",value:n.active,onChange:e=>{u((t=>({...t,active:"true"===e.target.value})))},children:[Object(d.jsx)("option",{value:"true",children:"Active"}),Object(d.jsx)("option",{value:"false",children:"Inactive"})]})]})]}),Object(d.jsxs)(c.S,{xs:{cols:1},md:{cols:2},children:[Object(d.jsx)(c.n,{className:"d-grid d-md-flex justify-content-md-start mb-3",children:Object(d.jsx)(c.e,{color:"primary",variant:"outline",children:"Register Nasabah to this Product"})}),Object(d.jsx)(c.n,{className:"d-grid d-md-flex justify-content-md-end mb-3",onClick:function(){console.log(n),Object(r.j)(n).then((e=>{console.log(e),e.ok?i.store.addNotification(Object(o.c)("Product updated")):i.store.addNotification(Object(o.a)(e.message))}))},children:Object(d.jsx)(c.e,{color:"primary",children:"Edit"})})]})]}):Object(s.a)()}},383:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"k",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"f",(function(){return x}));var a=n(32),c=n.n(a),s=n(33);const r="https://api.ekoop.id/v01";function i(e){return c.a.get(r+"/auth/user?search="+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return c.a.get(r+"/auth/user/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e){return c.a.put(r+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return c.a.post(r+"/auth/user",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return c.a.get(r+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function j(e,t){return c.a.put(r+"/users/admin/client/"+e,t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function h(){return c.a.get(r+"/users/admin/client",{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function b(e,t){return c.a.get(r+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function m(e){return c.a.post(r+"/transaction/products",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function p(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return c.a.put(r+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function x(){return c.a.get(r+"/transaction/services",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}}}]);
//# sourceMappingURL=10.f6f2ea0a.chunk.js.map