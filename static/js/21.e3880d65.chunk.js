(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[21],{1508:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(57),s=c(12),r=c(118),o=c(364),i=c(7);t.default=()=>{const e=Object(s.g)(),[t,c]=Object(a.useState)([]),[u,d]=Object(a.useState)();return Object(a.useEffect)((()=>{Object(o.b)().then((e=>{!0===e.ok&&(console.log(e),c(e.data),d(!0))}))}),[]),u?Object(i.jsxs)(n.o,{children:[Object(i.jsx)(n.X,{className:"align-items-center",children:Object(i.jsx)(n.n,{className:"d-flex justify-content-end",children:Object(i.jsx)(n.e,{color:"primary",onClick:()=>e.push("/packages/create"),children:"Add New"})})}),Object(i.jsx)(n.X,{className:"mt-5 justify-content-start",children:null===t||void 0===t?void 0:t.map(((t,c)=>Object(i.jsx)(n.n,{xxl:3,md:5,className:"mb-4",children:Object(i.jsxs)(n.h,{style:{width:"18rem",height:"100%",cursor:"pointer"},onClick:()=>{e.push("/packages/"+t.id)},children:[Object(i.jsx)(n.k,{orientation:"top",src:"https://via.placeholder.com/550x390.png?text="+t.name}),Object(i.jsxs)(n.i,{className:"text-center",children:[Object(i.jsx)(n.m,{children:t.name}),Object(i.jsx)(n.l,{children:t.description}),t.active?Object(i.jsx)(n.b,{color:"success",shape:"rounded-pill",children:"Active"}):Object(i.jsx)(n.b,{color:"dark",shape:"rounded-pill",children:"Inactive"})]})]})},c)))})]}):Object(r.a)()}},364:function(e,t,c){"use strict";c.d(t,"d",(function(){return o})),c.d(t,"b",(function(){return i})),c.d(t,"c",(function(){return u})),c.d(t,"e",(function(){return d})),c.d(t,"a",(function(){return l}));var a=c(354),n=c.n(a),s=c(352);const r="https://api.ekoop.id/v01";function o(){return n.a.get(r+"/users/packages",{headers:Object(s.a)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function i(){return n.a.get(r+"/users/admin/packages",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function u(e){return n.a.get(r+"/users/admin/packages/"+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(e,t){return n.a.put(r+"/users/admin/packages/"+e,{name:t.name,slug:t.slug,description:t.description,price_monthly:t.price.monthly,price_yearly:t.price.yearly,quota_AO:t.quota.account_officer,quota_nasabah:t.quota.nasabah,active:"true"===t.active},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return n.a.post(r+"/users/admin/packages",{name:e.name,slug:e.slug,description:e.description,price_monthly:e.price.monthly,price_yearly:e.price.yearly,quota_AO:e.quota.account_officer,quota_nasabah:e.quota.nasabah},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=21.e3880d65.chunk.js.map