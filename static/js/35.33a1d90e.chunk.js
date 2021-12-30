(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[35],{1489:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(57),r=a(12),i=a(68),s=a(356),d=a(117),o=a(363),u=a(364),l=a(118),p=a(355),h=a(353),b=a(7);t.default=()=>{const e=Object(r.g)(),[t,a]=Object(n.useState)({NPWP_image:"",contact_ktp_image:"",package_slug:"standard"}),[j,m]=Object(n.useState)([]),[g,f]=Object(n.useState)(""),[O,x]=Object(n.useState)(!1),[v,_]=Object(n.useState)(!1),[y,k]=Object(n.useState)(!1);Object(n.useEffect)((()=>{Object(u.d)().then((e=>{e.ok?(m(e.data),k(!0)):e.message?(console.log(e),d.store.addNotification(Object(s.a)(e.message))):(console.log(e),d.store.addNotification(Object(s.a)(e.error)))}))}),[]);return y?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(b.jsx)(c.o,{className:"d-flex justify-content-center",children:Object(b.jsx)(c.h,{className:"p-4",children:Object(b.jsx)(c.i,{children:Object(b.jsxs)(c.v,{noValidate:!0,validated:O,onSubmit:e=>{e.preventDefault();const a=e.currentTarget;!1===a.checkValidity()&&(e.preventDefault(),e.stopPropagation()),x(!0),a.checkValidity()&&(console.log(t),Object(o.d)(t).then((e=>{e.ok?(console.log(e),f(e.verify_code),_(!0),Object(p.a)(t.contact_wa_number,h.b.clientRegister,"").then((e=>{console.log("Notification created: "+e.id)})),d.store.addNotification(Object(s.c)("Client registration request created successfully."))):(console.log(e),d.store.addNotification(Object(s.a)(e.error)))})))},children:[Object(b.jsx)("h1",{children:"Client registration form"}),Object(b.jsx)("hr",{}),Object(b.jsxs)(c.X,{className:"pt-3",children:[Object(b.jsxs)(c.n,{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"companyInput",children:"Company Name"}),Object(b.jsx)(c.y,{type:"text",id:"companyInput",required:!0,onChange:e=>{a((t=>({...t,company:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a company name."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"emailInput",children:"Email"}),Object(b.jsx)(c.y,{type:"email",id:"emailInput",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",required:!0,onChange:e=>{a((t=>({...t,email:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a valid email."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"npwpInput",children:"NPWP"}),Object(b.jsx)(c.y,{type:"text",id:"npwpInput",minLength:12,required:!0,onChange:e=>{a((t=>({...t,NPWP:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a valid NPWP."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"addressInput",children:"Address"}),Object(b.jsx)(c.y,{type:"text",id:"addressInput",minLength:5,required:!0,onChange:e=>{a((t=>({...t,address:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a valid address."})]})]}),Object(b.jsxs)(c.n,{children:[Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"packageInput",children:"Package"}),Object(b.jsxs)(c.A,{id:"packageInput","aria-label":"package",onChange:e=>{a((t=>({...t,package_slug:e.target.value})))},children:[Object(b.jsx)("option",{disabled:!0,children:"Please select"}),j.map(((e,t)=>Object(b.jsx)("option",{value:e.slug,children:e.name},t)))]})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"contactNameInput",children:"Contact Name"}),Object(b.jsx)(c.y,{type:"text",id:"contactNameInput",required:!0,onChange:e=>{a((t=>({...t,contact_dir_name:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a contact name."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"wanumberInput",children:"Contact WhatsApp Number"}),Object(b.jsx)(c.y,{id:"wanumberInput",type:"tel",pattern:"^\\+62[0-9]{9,15}$",required:!0,onChange:e=>{a((t=>({...t,contact_wa_number:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a valid phone number."})]}),Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(c.z,{htmlFor:"ktpnumberInput",children:"Contact KTP Number"}),Object(b.jsx)(c.y,{type:"text",id:"ktpnumberInput",minLength:16,required:!0,onChange:e=>{a((t=>({...t,contact_ktp_id:e.target.value})))}}),Object(b.jsx)(c.x,{invalid:!0,children:"Please provide a valid KTP number (min length 16)."})]})]})]}),Object(b.jsx)("div",{className:"d-flex justify-content-center mt-4",children:Object(b.jsx)(c.e,{color:"primary",type:"submit",children:"Register"})}),Object(b.jsx)("div",{className:"d-flex justify-content-end pt-2",children:Object(b.jsx)(i.b,{to:"/login",children:"Back to login"})})]})})})})}),Object(b.jsxs)(c.M,{alignment:"center",visible:v,onClose:()=>_(!1),children:[Object(b.jsx)(c.P,{children:Object(b.jsx)(c.Q,{children:"Verification Code"})}),Object(b.jsxs)(c.N,{className:"text-center",children:[Object(b.jsx)("p",{children:"Your verification code is:"}),Object(b.jsx)("h1",{children:g}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Send this code with the next format via WhatsApp to +6281222888757:"," ",Object(b.jsxs)("code",{children:["!VERIFY ",g]})]})]}),Object(b.jsx)(c.O,{children:Object(b.jsx)(c.e,{color:"primary",onClick:()=>{_(!1),e.push("/login")},children:"Close"})})]})]}):Object(l.a)()}},352:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a(38);function c(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}function r(){if(Object(n.e)()){return{Authorization:"Bearer "+localStorage.getItem("token"),"Ekoop-Api-Key":"4a6e486c-3167-4112-97e7-5aa690042613","X-Request-Id":c()}}return{}}function i(){return{"Ekoop-Api-Key":"4a6e486c-3167-4112-97e7-5aa690042613","X-Request-Id":c()}}},353:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));const n={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},c={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},r={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u}));var n=a(354),c=a.n(n),r=a(352),i=a(353);const s="https://api.ekoop.id/v01";function d(e){return c.a.get(s+"/users/notification?skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return c.a.get(s+"/users/notification/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function u(e,t,a){const n={sender:e,service:t,title:i.c[t],content:i.a[t]+a,reference_id:""};return c.a.post(s+"/users/notification",n,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},356:function(e,t,a){"use strict";function n(e){return{title:"Success",message:e,type:"success",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function c(e){return{title:"Error",message:e,type:"danger",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function r(e){return{title:"Info",message:e,type:"info",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return r}))},363:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"g",(function(){return d})),a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"c",(function(){return h}));var n=a(354),c=a.n(n),r=a(352);const i="https://api.ekoop.id/v01";function s(e){return c.a.get(i+"/users/admin/client/"+e,{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e,t){return c.a.put(i+"/users/admin/client/"+e,{company:t.company,address:t.address},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function o(e,t){return c.a.put(i+"/users/admin/client/"+e,{company:t.company,contact_dir_name:t.contact.dir_name,address:t.address},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return c.a.post(i+"/users/clients/register",e,{headers:Object(r.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return c.a.put(i+"/users/admin/client/status/"+e,{status:"ACTIVE"},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function p(e){return c.a.put(i+"/users/admin/client/status/"+e,{status:"REJECT"},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function h(e,t,a,n){return""===n&&(n="created_at:desc"),c.a.get(i+"/users/admin/client?search="+t+"&status="+a+"&sort="+n+"&skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}},364:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return o})),a.d(t,"e",(function(){return u})),a.d(t,"a",(function(){return l}));var n=a(354),c=a.n(n),r=a(352);const i="https://api.ekoop.id/v01";function s(){return c.a.get(i+"/users/packages",{headers:Object(r.a)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(){return c.a.get(i+"/users/admin/packages",{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function o(e){return c.a.get(i+"/users/admin/packages/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function u(e,t){return c.a.put(i+"/users/admin/packages/"+e,{name:t.name,slug:t.slug,description:t.description,price_monthly:t.price.monthly,price_yearly:t.price.yearly,quota_AO:t.quota.account_officer,quota_nasabah:t.quota.nasabah,active:"true"===t.active},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(e){return c.a.post(i+"/users/admin/packages",{name:e.name,slug:e.slug,description:e.description,price_monthly:e.price.monthly,price_yearly:e.price.yearly,quota_AO:e.quota.account_officer,quota_nasabah:e.quota.nasabah},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=35.33a1d90e.chunk.js.map