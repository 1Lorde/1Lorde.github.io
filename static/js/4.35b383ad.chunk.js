(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[4],{1490:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(60),s=a(12),r=a(383),d=a(122),o=a(121),i=a(384),l=a(8);t.default=()=>{var e,t,a,u,h,j,b,m;const p=Object(s.g)();let{id:O}=Object(s.i)();const[v,x]=Object(c.useState)(),[g,f]=Object(c.useState)();Object(c.useEffect)((()=>{Object(r.c)(O).then((e=>{x(e),console.log(e),f(!0)}))}),[]),Object(c.useEffect)((()=>{console.log(v)}),[v]);return g?Object(l.jsxs)(n.v,{children:[Object(l.jsxs)(n.S,{children:[Object(l.jsxs)(n.n,{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"company_name",children:"Company name"}),Object(l.jsx)(n.y,{type:"text",id:"company_name",placeholder:"No data provided",value:v.company,onChange:e=>{x((t=>({...t,company:e.target.value})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"address",children:"Address"}),Object(l.jsx)(n.y,{type:"text",id:"address",placeholder:"No data provided",value:v.address,onChange:e=>{x((t=>({...t,address:e.target.value})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"npwp",children:"NPWP Number"}),Object(l.jsx)(n.y,{type:"text",id:"npwp",placeholder:"No data provided",value:null===(e=v.documents.NPWP)||void 0===e?void 0:e.no,onChange:e=>{x((t=>({...t,documents:{...t.documents,NPWP:{...t.documents.NPWP,no:e.target.value}}})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"siup",children:"SIUP Number"}),Object(l.jsx)(n.y,{type:"text",id:"siup",placeholder:"No data provided",value:null===(t=v.documents)||void 0===t||null===(a=t.SIUP)||void 0===a?void 0:a.no,onChange:e=>{x((t=>({...t,documents:{...t.documents,SIUP:{...t.documents.SIUP,no:e.target.value}}})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"tdp",children:"TDP Number"}),Object(l.jsx)(n.y,{type:"text",id:"tdp",placeholder:"No data provided",defaultValue:null===(u=v.documents.TDP)||void 0===u?void 0:u.no,onChange:e=>{x((t=>({...t,documents:{...t.documents,TDP:{...t.documents.TDP,no:e.target.value}}})))}})]})]}),Object(l.jsx)(n.n,{children:Object(l.jsx)(n.o,{fluid:!0,className:"d-flex justify-content-center",children:Object(l.jsx)(n.I,{rounded:!0,src:"https://via.placeholder.com/550x390.png?text="+v.company,width:550,height:390,className:"mt-4"})})})]}),Object(l.jsxs)(n.S,{className:"mb-4 mt-3",children:[Object(l.jsxs)(n.n,{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"website",children:"Website"}),Object(l.jsx)(n.y,{type:"text",id:"website",placeholder:"No data provided"})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"subscription",children:"Subscription Package"}),Object(l.jsx)(n.y,{type:"text",id:"subscription",placeholder:"No data provided",value:null===(h=v.package)||void 0===h?void 0:h.name,onChange:e=>{x((t=>({...t,package:{...t.package,name:e.target.value}})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"status",children:"Status"}),Object(l.jsx)(n.y,{type:"text",id:"status",placeholder:"No data provided",value:v.status,onChange:e=>{x((t=>({...t,status:e.target.value})))}})]})]}),Object(l.jsxs)(n.n,{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"director",children:"Director Name"}),Object(l.jsx)(n.y,{type:"text",id:"director",placeholder:"No data provided",value:null===(j=v.contact)||void 0===j?void 0:j.dir_name,onChange:e=>{x((t=>({...t,contact:{...t.contact,dir_name:e.target.value}})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"ktp",children:"KTP Number"}),Object(l.jsx)(n.y,{type:"text",id:"ktp",placeholder:"No data provided",value:null===(b=v.contact)||void 0===b?void 0:b.ktp_id,onChange:e=>{x((t=>({...t,contact:{...t.contact,ktp_id:e.target.value}})))}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(n.z,{htmlFor:"wa",children:"WhatsApp Number"}),Object(l.jsx)(n.y,{type:"text",id:"wa",placeholder:"No data provided",defaultValue:null===(m=v.contact)||void 0===m?void 0:m.wa_number,onChange:e=>{x((t=>({...t,contact:{...t.contact,wa_number:e.target.value}})))}})]})]})]}),Object(l.jsx)(n.S,{className:"mb-3",children:Object(l.jsx)("div",{className:"d-flex justify-content-end",children:Object(l.jsx)(n.e,{color:"primary",onClick:()=>{console.log(v),Object(r.i)(v.id,v).then((e=>{e.ok?(o.store.addNotification(Object(i.c)(e.message)),p.push("/clients")):e.message?o.store.addNotification(Object(i.a)(e.message)):o.store.addNotification(Object(i.a)(e.error))}))},children:"Edit"})})})]}):Object(d.a)()}},383:function(e,t,a){"use strict";a.d(t,"h",(function(){return d})),a.d(t,"g",(function(){return o})),a.d(t,"k",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"i",(function(){return h})),a.d(t,"d",(function(){return j})),a.d(t,"e",(function(){return b})),a.d(t,"a",(function(){return m})),a.d(t,"j",(function(){return p})),a.d(t,"f",(function(){return O}));var c=a(32),n=a.n(c),s=a(33);const r="https://api.ekoop.id/v01";function d(e){return n.a.get(r+"/auth/user?search="+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.get(r+"/auth/user/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function i(e){return n.a.put(r+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return n.a.post(r+"/auth/user",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.get(r+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function h(e,t){return n.a.put(r+"/users/admin/client/"+e,t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function j(){return n.a.get(r+"/users/admin/client",{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function b(e,t){return n.a.get(r+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function m(e){return n.a.post(r+"/transaction/products",e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function p(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return n.a.put(r+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function O(){return n.a.get(r+"/transaction/services",{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}}}]);
//# sourceMappingURL=4.35b383ad.chunk.js.map