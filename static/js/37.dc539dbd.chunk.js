(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[37],{1521:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(57),r=a(12),i=a(118),s=a(117),o=a(356),d=a(383),l=a(360),u=a(355),p=a(354),b=a(38),j=a(369),h=a(69),g=a(7);t.default=()=>{const{userState:e}=Object(n.useContext)(b.a),t=Object(r.g)(),{id:a}=Object(r.i)(),[m,f]=Object(n.useState)({}),[O,x]=Object(n.useState)(!1),[v,y]=Object(n.useState)(!1),[k,N]=Object(n.useState)({});return Object(n.useEffect)((()=>{Object(d.a)(a).then((t=>{if(t.ok){let a=t.data;a.vendor_slug=a.vendor_slug_selected,delete a.vendor_slug_selected,f(a),O||"account-officer"===e.user.role?x(!0):Object(d.c)().then((e=>{!0===e.ok&&(console.log(e),N(e.service_margin),x(!0))}))}else t.message?(console.log(t),s.store.addNotification(Object(o.c)(t.message))):(console.log(t),s.store.addNotification(Object(o.a)(t.error)))}))}),[]),O?Object(g.jsxs)(c.v,{noValidate:!0,validated:v,onSubmit:n=>{n.preventDefault();const c=n.currentTarget;!1===c.checkValidity()&&(n.preventDefault(),n.stopPropagation()),y(!0),c.checkValidity()&&(console.log(m),"all"===m.margin_by&&(m.nominal=k.nominal),Object(d.d)(a,m).then((a=>{a.ok?(console.log(a),Object(u.a)(e.user.wa_number,p.b.ppobEdit,m.name).then((e=>{console.log("Notification created: "+e.id)})),s.store.addNotification(Object(o.c)("PPOB updated successfully.")),t.push("/products/ppob")):(console.log(a),s.store.addNotification(Object(o.a)(a.error)))})))},children:[Object(g.jsxs)(c.X,{xs:{cols:1},md:{cols:2},className:"mb-4",children:[Object(g.jsxs)(c.n,{children:[Object(g.jsx)(c.z,{htmlFor:"category",children:"Category"}),Object(g.jsxs)(c.A,{id:"category",defaultValue:m.category,onChange:e=>{f((t=>({...t,category:e.target.value})))},children:[Object(g.jsx)("option",{value:"postpaid",children:"Postpaid"}),Object(g.jsx)("option",{value:"prepaid",children:"Prepaid"})]}),Object(g.jsx)(c.o,{fluid:!0,className:"d-flex justify-content-center mt-4 mb-3",children:Object(g.jsx)(c.I,{thumbnail:!0,rounded:!0,src:"https://via.placeholder.com/550x390.png?text="+m.name,width:500,height:500})})]}),Object(g.jsxs)(c.n,{children:[Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)(c.z,{htmlFor:"name",children:"PPOB Name"}),Object(g.jsx)(c.y,{type:"text",id:"name",required:!0,defaultValue:m.name,onChange:e=>{f((t=>({...t,name:e.target.value})))}})]}),Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)(c.z,{htmlFor:"slug",children:"Slug"}),Object(g.jsx)(c.y,{type:"text",id:"slug",required:!0,defaultValue:m.slug,onChange:e=>{f((t=>({...t,slug:e.target.value})))}})]}),Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)(c.z,{htmlFor:"description",children:"Description"}),Object(g.jsx)(c.B,{type:"text",id:"description",rows:"3",required:!0,defaultValue:m.desc,onChange:e=>{f((t=>({...t,desc:e.target.value})))}})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)(c.z,{htmlFor:"vendor",children:"Vendor"}),Object(g.jsx)(c.A,{id:"vendor",defaultValue:m.vendor_slug,onChange:e=>{f((t=>({...t,vendor_slug:e.target.value})))},children:m.vendors.map(((e,t)=>Object(g.jsx)("option",{value:e,children:e.toUpperCase()},t)))})]}),Object(g.jsx)("h5",{children:"Margin by"}),Object(g.jsxs)(c.X,{xs:{cols:1},md:{cols:2},className:"mb-3 mt-3 align-items-center",children:[Object(g.jsxs)(c.n,{children:[Object(g.jsx)(c.w,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox1",value:"all",label:"All (Default)",defaultChecked:"all"===m.margin_by,onChange:()=>{f((e=>({...e,margin_by:"all"})))}}),Object(g.jsx)(c.w,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox2",value:"percent",label:"Percent",defaultChecked:"percent"===m.margin_by,onChange:()=>{f((e=>({...e,margin_by:"percent"})))}}),Object(g.jsx)(c.w,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox3",value:"fix",label:"Fix",defaultChecked:"fix_cost"===m.margin_by,onChange:()=>{f((e=>({...e,margin_by:"fix_cost"})))}})]}),Object(g.jsx)(c.n,{children:Object(g.jsx)(c.y,{type:"number",id:"nominal",required:!0,max:"percent"===m.margin_by?100:1e5,value:"all"===m.margin_by?"":m.nominal,disabled:"all"===m.margin_by,onChange:e=>{f((t=>({...t,nominal:Object(l.a)(e.target.value)})))}})})]}),Object(g.jsxs)(c.X,{className:"mb-3 align-items-center",children:[Object(g.jsx)(c.n,{xs:5,children:"Retail Price (after margin added)"}),Object(g.jsx)(c.n,{children:Object(g.jsx)(c.y,{type:"text",id:"retail_price"})})]}),Object(g.jsx)(c.z,{htmlFor:"status",children:"Status"}),Object(g.jsxs)(c.A,{id:"status",defaultValue:m.active,onChange:e=>{f((t=>({...t,active:"true"===e.target.value})))},children:[Object(g.jsx)("option",{value:"true",children:"Active"}),Object(g.jsx)("option",{value:"false",children:"Inactive"})]})]})]}),Object(g.jsxs)(c.X,{xs:{cols:1},md:{cols:2},children:[Object(g.jsx)(c.n,{className:"d-grid d-md-flex justify-content-md-start mb-2",children:Object(g.jsx)(j.a,{allowedRoles:[h.c["koperasi-owner"],h.c["credit-analyst"],h.c["account-officer"]],children:Object(g.jsx)(c.e,{color:"primary",variant:"outline",onClick:()=>{t.push("/products/ppob/"+a+"/buy")},children:"Buy"})})}),Object(g.jsx)(c.n,{className:"d-grid d-md-flex justify-content-md-end mb-3",children:Object(g.jsx)(j.a,{allowedRoles:[h.c["koperasi-owner"],h.c["credit-analyst"],h.c["account-officer"]],children:Object(g.jsx)(c.e,{color:"primary",type:"submit",children:"Edit"})})})]})]}):Object(i.a)()}},354:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return r}));const n={changePassword:"change-password",clientRegister:"client-register",clientApprove:"client-approve",clientReject:"client-reject",userCreate:"user-create",userEdit:"user-edit",nasabahCreate:"nasabah-create",nasabahEdit:"nasabah-edit",profileEdit:"profile-edit",packageCreate:"package-create",packageEdit:"package-edit",productCreate:"product-create",productEdit:"product-edit",ppobAllMarginEdit:"ppob-all-margin-edit",ppobEdit:"ppob-edit"},c={"change-password":"Password changed","client-register":"New client registered","client-approve":"Request approved","client-reject":"Request rejected","user-create":"New user created","user-edit":"User updated","nasabah-create":"New nasabah created","nasabah-edit":"Nasabah updated","profile-edit":"Profile updated","package-create":"New package created","package-edit":"Package updated","product-create":"New product created","product-edit":"Product updated","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB updated"},r={"change-password":"User's password changed","client-register":"New client registration request created","client-approve":"Client registration request approved","client-reject":"Client registration request rejected","user-create":"New user created: ","user-edit":"User`s info edited: ","nasabah-create":"New nasabah created: ","nasabah-edit":"Nasabah`s info updated: ","profile-edit":"Profile`s info updated","package-create":"New package created: ","package-edit":"Package`s info updated: ","product-create":"New product created: ","product-edit":"Product`s info updated: ","ppob-all-margin-edit":"All services margin updated","ppob-edit":"PPOB`s info updated: "}},355:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return l}));var n=a(353),c=a.n(n),r=a(352),i=a(354);const s="https://api.ekoop.id/v01";function o(e){return c.a.get(s+"/users/notification?skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function d(e){return c.a.get(s+"/users/notification/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e,t,a){const n={sender:e,service:t,title:i.c[t],content:i.a[t]+a,reference_id:""};return c.a.post(s+"/users/notification",n,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}},360:function(e,t,a){"use strict";function n(e){const t=parseInt(e);return isNaN(t)?"":t}a.d(t,"a",(function(){return n}))},369:function(e,t,a){"use strict";var n=a(49),c=a.n(n),r=a(38);const i=({children:e,allowedRoles:t})=>{const a=Object(r.d)();return t.includes(a)&&e};i.propTypes={children:c.a.element,request:c.a.array},t.a=i},383:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return u}));var n=a(353),c=a.n(n),r=a(352);const i="https://api.ekoop.id/v01";function s(e,t,a,n){return c.a.get(i+"/transaction/services?search="+e+"&category="+t+"&active="+a+"&margin_by="+n,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function o(e){return c.a.get(i+"/transaction/services/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(e,t){return c.a.put(i+"/transaction/services/"+e,t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function l(){return c.a.get(i+"/transaction/service_margin",{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return c.a.put(i+"/transaction/service_margin",{margin_by:e.margin_by,nominal:e.nominal},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=37.dc539dbd.chunk.js.map