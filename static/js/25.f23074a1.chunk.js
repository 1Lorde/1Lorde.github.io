(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[25],{1538:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(60),s=c(12),o=c(122),a=c(369),r=c(394),d=c(444),l=c(7);e.default=()=>{const{t:t}=Object(d.a)(),e=Object(s.g)(),[c,u]=Object(n.useState)({}),[h,j]=Object(n.useState)(!1);return Object(l.jsx)(i.o,{className:"d-flex justify-content-center",children:Object(l.jsx)(i.h,{style:{width:"35rem"},children:Object(l.jsx)(i.i,{children:Object(l.jsxs)(i.v,{noValidate:!0,validated:h,onSubmit:function(n){n.preventDefault();const i=n.currentTarget;!1===i.checkValidity()&&n.stopPropagation(),j(!0),i.checkValidity()&&(console.log(c),Object(r.c)(c).then((c=>{c.ok?(o.store.addNotification(Object(a.c)(t("notifications.ticket_create"))),e.push("/support/tickets")):c.message?(console.log(c),o.store.addNotification(Object(a.a)(c.message))):(console.log(c),o.store.addNotification(Object(a.a)(c.error)))})))},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(i.z,{htmlFor:"title",children:t("title")}),Object(l.jsx)(i.y,{type:"text",id:"name",required:!0,onChange:t=>{u((e=>({...e,title:t.target.value})))}}),Object(l.jsx)(i.x,{invalid:!0,children:t("invalid_title")})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)(i.z,{htmlFor:"description",children:t("description")}),Object(l.jsx)(i.B,{type:"text",id:"description",required:!0,onChange:t=>{u((e=>({...e,description:t.target.value})))}}),Object(l.jsx)(i.x,{invalid:!0,children:t("invalid_description")})]}),Object(l.jsx)("div",{className:"d-flex justify-content-end",children:Object(l.jsx)(i.e,{color:"primary",type:"submit",children:t("create")})})]})})})})}},394:function(t,e,c){"use strict";c.d(e,"f",(function(){return a})),c.d(e,"e",(function(){return r})),c.d(e,"a",(function(){return d})),c.d(e,"c",(function(){return l})),c.d(e,"b",(function(){return u})),c.d(e,"d",(function(){return h}));var n=c(367),i=c.n(n),s=c(366);const o="https://api.ekoop.id/v01";function a(t,e){return i.a.get(o+"/tiket/tickets?skip="+t+"&search="+e,{headers:Object(s.b)()}).then((t=>t.data)).catch((t=>{console.log(t)}))}function r(t){return i.a.get(o+"/tiket/tickets/"+t,{headers:Object(s.b)()}).then((t=>t.data)).catch((t=>{console.log(t)}))}function d(t){return i.a.put(o+"/tiket/tickets/"+t,{status:3},{headers:Object(s.b)()}).then((t=>t.data)).catch((t=>{console.log(t)}))}function l(t){return i.a.post(o+"/tiket/tickets",{subject:t.title,description:t.description,type:"Issue",priority:"Normal"},{headers:Object(s.b)()}).then((t=>t.data)).catch((t=>{console.log(t.response.data)}))}function u(t,e){return i.a.post(o+"/tiket/tickets/comment",{ticket_id:t,text:e},{headers:Object(s.b)()}).then((t=>t.data)).catch((t=>{console.log(t.response.data)}))}function h(t,e,c){return i.a.post(o+"/tiket/users",{ekoop_user_id:t,username:e.replace("+",""),password:e.replace("+","")+"123!",email:e.replace("+","")+"@example.com",fullname:c},{headers:Object(s.b)()}).then((t=>t.data)).catch((t=>{console.log(t.response.data)}))}}}]);
//# sourceMappingURL=25.f23074a1.chunk.js.map