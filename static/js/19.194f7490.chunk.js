(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[19],{1495:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(57),c=a(364),r=a(12),i=a(117),l=a(354),o=a(118),u=a(69),d=a(366),j=a(7);t.default=()=>{const e=Object(r.g)();let{id:t}=Object(r.i)();const[a,b]=Object(n.useState)(),[h,p]=Object(n.useState)();Object(n.useEffect)((()=>{Object(d.b)(t).then((e=>{b(e),p(!0)}))}),[]);return h?Object(j.jsx)(s.o,{className:"d-flex justify-content-center",children:Object(j.jsxs)(s.h,{style:{width:"35rem"},children:[Object(j.jsx)(s.k,{orientation:"top",src:a.avatar?a.avatar:c.a}),Object(j.jsx)(s.i,{children:Object(j.jsxs)(s.v,{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(s.z,{htmlFor:"fullnameInput",children:"Full Name"}),Object(j.jsx)(s.y,{type:"text",id:"fullnameInput",value:a.name,onChange:e=>{b((t=>({...t,name:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(s.z,{htmlFor:"ktpnumberInput",children:"KTP Number"}),Object(j.jsx)(s.y,{type:"text",id:"ktpnumberInput",value:a.ktp_id,onChange:e=>{b((t=>({...t,ktp_id:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(s.z,{htmlFor:"wanumberInput",children:"WhatsApp Number"}),Object(j.jsx)(s.y,{type:"text",id:"wanumberInput",value:a.wa_number,onChange:e=>{b((t=>({...t,wa_number:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(s.z,{htmlFor:"addressInput",children:"Address"}),Object(j.jsx)(s.y,{type:"text",id:"addressInput",value:a.address,onChange:e=>{b((t=>({...t,address:e.target.value})))}})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(s.z,{htmlFor:"positionInput",children:"Position"}),Object(j.jsx)(s.A,{"aria-label":"Position",value:a.role,onChange:e=>{b((t=>({...t,role:e.target.value})))},children:(O=a.role,O in u.a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("option",{value:"app-owner",children:"App Owner"}),Object(j.jsx)("option",{value:"product-technical",children:"Product & Technical"}),Object(j.jsx)("option",{value:"marketing-finance",children:"Marketing & Finance"})]}):O in u.b?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("option",{value:"koperasi-owner",children:"Koperasi Owner"}),Object(j.jsx)("option",{value:"credit-analyst",children:"Credit & Analyst"}),Object(j.jsx)("option",{value:"account-officer",children:"Account Officer"})]}):void console.log("Not valid role: "+O))})]}),Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)(s.z,{htmlFor:"statusInput",children:"Status"}),Object(j.jsxs)(s.A,{"aria-label":"Status",value:a.status,onChange:e=>{b((t=>({...t,status:e.target.value})))},children:[Object(j.jsx)("option",{disabled:!0,children:"Please select"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(s.e,{color:"primary",variant:"outline",onClick:()=>{console.log(a),Object(d.d)(a).then((t=>{t.ok?(i.store.addNotification(Object(l.c)(t.message)),e.push("/users")):i.store.addNotification(Object(l.a)(t.message))}))},children:"Save changes"})})]})})]})}):Object(o.a)();var O}},366:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return u}));var n=a(353),s=a.n(n),c=a(352);const r="https://api.ekoop.id/v01";function i(e,t,a,n){return s.a.get(r+"/auth/user?search="+e+"&status="+t+"&role="+a+"&sort="+n,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e){return s.a.get(r+"/auth/user/"+e,{headers:Object(c.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return s.a.put(r+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return s.a.post(r+"/auth/user",e,{headers:Object(c.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=19.194f7490.chunk.js.map