(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[22],{1524:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(60),s=a(12),d=a(123),o=a(122),i=a(369),l=a(378),r=a(444),u=a(7);t.default=()=>{var e,t,a,j,h,b,p,m;const{t:O}=Object(r.a)(),x=Object(s.g)();let{id:v}=Object(s.i)();const[g,f]=Object(c.useState)(),[y,_]=Object(c.useState)();Object(c.useEffect)((()=>{Object(l.b)(v).then((e=>{f(e),console.log(e),_(!0)}))}),[]),Object(c.useEffect)((()=>{console.log(g)}),[g]);return y?Object(u.jsxs)(n.v,{children:[Object(u.jsxs)(n.V,{children:[Object(u.jsxs)(n.n,{children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"company_name",children:O("company_name")}),Object(u.jsx)(n.y,{type:"text",id:"company_name",placeholder:O("no_data"),value:g.company,onChange:e=>{f((t=>({...t,company:e.target.value})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"address",children:O("address")}),Object(u.jsx)(n.y,{type:"text",id:"address",placeholder:O("no_data"),value:g.address,onChange:e=>{f((t=>({...t,address:e.target.value})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"npwp",children:O("npwp")}),Object(u.jsx)(n.y,{disabled:!0,type:"text",id:"npwp",placeholder:O("no_data"),value:null===(e=g.documents.NPWP)||void 0===e?void 0:e.no,onChange:e=>{f((t=>({...t,documents:{...t.documents,NPWP:{...t.documents.NPWP,no:e.target.value}}})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"siup",children:O("siup")}),Object(u.jsx)(n.y,{type:"text",id:"siup",disabled:!0,placeholder:O("no_data"),value:null===(t=g.documents)||void 0===t||null===(a=t.SIUP)||void 0===a?void 0:a.no,onChange:e=>{f((t=>({...t,documents:{...t.documents,SIUP:{...t.documents.SIUP,no:e.target.value}}})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"tdp",children:O("tdp")}),Object(u.jsx)(n.y,{disabled:!0,type:"text",id:"tdp",placeholder:O("no_data"),defaultValue:null===(j=g.documents.TDP)||void 0===j?void 0:j.no,onChange:e=>{f((t=>({...t,documents:{...t.documents,TDP:{...t.documents.TDP,no:e.target.value}}})))}})]})]}),Object(u.jsx)(n.n,{children:Object(u.jsx)(n.o,{fluid:!0,className:"d-flex justify-content-center",children:Object(u.jsx)(n.I,{rounded:!0,src:"https://via.placeholder.com/550x390.png?text="+g.company,width:550,height:390,className:"mt-4"})})})]}),Object(u.jsxs)(n.V,{className:"mb-4 mt-3",children:[Object(u.jsxs)(n.n,{children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"director",children:O("director_name")}),Object(u.jsx)(n.y,{type:"text",id:"director",placeholder:O("no_data"),value:null===(h=g.contact)||void 0===h?void 0:h.dir_name,onChange:e=>{f((t=>({...t,contact:{...t.contact,dir_name:e.target.value}})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"ktp",children:O("ktp")}),Object(u.jsx)(n.y,{disabled:!0,type:"text",id:"ktp",placeholder:O("no_data"),value:null===(b=g.contact)||void 0===b?void 0:b.ktp_id,onChange:e=>{f((t=>({...t,contact:{...t.contact,ktp_id:e.target.value}})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"wa",children:O("whatsapp")}),Object(u.jsx)(n.y,{disabled:!0,type:"text",id:"wa",placeholder:O("no_data"),defaultValue:null===(p=g.contact)||void 0===p?void 0:p.wa_number,onChange:e=>{f((t=>({...t,contact:{...t.contact,wa_number:e.target.value}})))}})]})]}),Object(u.jsxs)(n.n,{children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"subscription",children:O("subscription_package")}),Object(u.jsx)(n.y,{disabled:!0,type:"text",id:"subscription",placeholder:O("no_data"),value:null===(m=g.package)||void 0===m?void 0:m.name,onChange:e=>{f((t=>({...t,package:{...t.package,name:e.target.value}})))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(n.z,{htmlFor:"status",children:O("status")}),Object(u.jsxs)(n.A,{disabled:!0,id:"status",placeholder:O("no_data"),value:g.status,onChange:e=>{f((t=>({...t,status:e.target.value})))},children:[Object(u.jsx)("option",{value:"",children:O("all")}),Object(u.jsx)("option",{value:"REQUEST",children:O("request")}),Object(u.jsx)("option",{value:"VERIFIED",children:O("verified")}),Object(u.jsx)("option",{value:"ACTIVE",children:O("active")}),Object(u.jsx)("option",{value:"REJECT",children:O("reject")}),Object(u.jsx)("option",{value:"NON_ACTIVE",children:O("inactive")}),Object(u.jsx)("option",{value:"FAILED",children:O("failed")})]})]})]})]}),Object(u.jsx)(n.V,{className:"mb-3",children:Object(u.jsx)("div",{className:"d-flex justify-content-end",children:Object(u.jsx)(n.e,{color:"primary",onClick:()=>{console.log(g),Object(l.f)(g.id,g).then((e=>{e.ok?(o.store.addNotification(Object(i.c)(O("notifications.client_update",{client:g.company}))),x.push("/clients")):e.message?(console.log(e),o.store.addNotification(Object(i.a)(e.message))):(console.log(e),o.store.addNotification(Object(i.a)(e.error)))}))},children:O("edit")})})})]}):Object(d.a)()}},378:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"g",(function(){return i})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return u})),a.d(t,"e",(function(){return j})),a.d(t,"c",(function(){return h}));var c=a(367),n=a.n(c),s=a(366);const d="https://api.ekoop.id/v01";function o(e){return n.a.get(d+"/users/admin/client/"+e,{headers:Object(s.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function i(e,t){return n.a.put(d+"/users/admin/client/"+e,{company:t.company,address:t.address},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e,t){return n.a.put(d+"/users/admin/client/"+e,{company:t.company,contact_dir_name:t.contact.dir_name,address:t.address},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function r(e){return n.a.post(d+"/users/clients/register",e,{headers:Object(s.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return n.a.put(d+"/users/admin/client/status/"+e,{status:"ACTIVE"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function j(e){return n.a.put(d+"/users/admin/client/status/"+e,{status:"REJECT"},{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function h(e,t,a,c){return""===c&&(c="created_at:desc"),n.a.get(d+"/users/admin/client?search="+t+"&status="+a+"&sort="+c+"&skip="+e,{headers:Object(s.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}}}]);
//# sourceMappingURL=22.d2c9b9b0.chunk.js.map