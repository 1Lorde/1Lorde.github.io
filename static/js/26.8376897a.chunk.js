(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[26],{1539:function(e,t,c){"use strict";c.r(t);var s=c(0),n=(c(473),c(421)),a=c(60),o=c(12),i=c(394),r=c(123),d=c(122),l=c(369),u=c(41),j=c(444),b=c(7);t.default=()=>{const{t:e}=Object(j.a)(),{userState:t}=Object(s.useContext)(u.a),c=Object(o.g)();let{uid:m}=Object(o.i)();const[h,p]=Object(s.useState)(),[O,f]=Object(s.useState)(),[x,k]=Object(s.useState)(!1),[g,y]=Object(s.useState)(""),[N,v]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{f(!1),v(!1),Object(i.e)(m).then((e=>{p(e.data),f(!0),k(!1)}))}),[x]),O?Object(b.jsxs)(a.o,{children:[Object(b.jsxs)(a.g,{className:"mb-5",color:"info",style:{backgroundColor:"white"},children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)("span",{children:[e("created")+": ",new Date(h.history[0].date).toLocaleString("en-US",{weekday:"short",day:"numeric",year:"numeric",month:"long",hour:"numeric",minute:"numeric",second:"numeric"})]}),Object(b.jsxs)("span",{children:[e("ticket_id")+" #"+h.uid," ",function(t){switch(t){case 0:return Object(b.jsx)(a.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e("new")});case 1:return Object(b.jsx)(a.b,{className:"mt-1",color:"danger",shape:"rounded-pill",children:e("open")});case 2:return Object(b.jsx)(a.b,{className:"mt-1",color:"info",shape:"rounded-pill",children:e("pending")});case 3:return Object(b.jsx)(a.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:e("closed")});default:return Object(b.jsx)(a.b,{className:"mt-1",color:"dark",shape:"rounded-pill",children:e("unknown")})}}(h.status)]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"d-flex justify-content-start",children:[Object(b.jsx)("h5",{children:e("ticket_id")+":"}),Object(b.jsx)("span",{className:"ms-3",children:h.subject})]})]}),Object(b.jsxs)("div",{style:{overflowY:"scroll",maxHeight:"40vh"},children:[h.history.map(((e,t)=>Object(b.jsx)(n.SystemMessage,{text:e.description+" by "+e.owner.fullname},t))),Object(b.jsx)(n.MessageList,{className:"message-list",lockable:!0,toBottomHeight:"100%",dataSource:h.comments.map(((e,c)=>({position:e.owner.fullname===t.company.contact.dir_name?"right":"left",type:"text",text:Object(b.jsx)("div",{className:"mb-1",dangerouslySetInnerHTML:{__html:e.text}}),date:new Date})))})]}),Object(b.jsxs)(a.v,{noValidate:!0,validated:N,onSubmit:function(t){t.preventDefault();const c=t.currentTarget;!1===c.checkValidity()&&t.stopPropagation(),v(!0),c.checkValidity()&&Object(i.b)(h._id,g).then((t=>{t.ok?(k(!0),d.store.addNotification(Object(l.c)(e("notifications.comment_create")))):t.message?(console.log(t),d.store.addNotification(Object(l.a)(t.message))):(console.log(t),d.store.addNotification(Object(l.a)(t.error)))}))},children:[Object(b.jsxs)("div",{className:"m-4",children:[Object(b.jsx)(a.z,{htmlFor:"comment",children:e("comment")}),Object(b.jsx)(a.y,{type:"text",id:"comment",disabled:3===h.status,required:!0,onChange:e=>{y(e.target.value)}}),Object(b.jsx)(a.x,{invalid:!0,children:e("invalid_comment")})]}),Object(b.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(b.jsx)(a.e,{color:"primary",className:"me-md-2",variant:"outline",onClick:function(){Object(i.a)(h._id).then((t=>{t.ok?(d.store.addNotification(Object(l.c)(e("notifications.ticket_close"))),c.push("/support/tickets")):d.store.addNotification(Object(l.a)("notifications.error"))}))},disabled:3===h.status,children:e("close_ticket")}),Object(b.jsx)(a.e,{type:"submit",color:"dark",className:"me-md-2",variant:"outline",disabled:3===h.status,children:e("new_comment")})]})]})]}):Object(r.a)()}},394:function(e,t,c){"use strict";c.d(t,"f",(function(){return i})),c.d(t,"e",(function(){return r})),c.d(t,"a",(function(){return d})),c.d(t,"c",(function(){return l})),c.d(t,"b",(function(){return u})),c.d(t,"d",(function(){return j}));var s=c(367),n=c.n(s),a=c(366);const o="https://api.ekoop.id/v01";function i(e,t){return n.a.get(o+"/tiket/tickets?skip="+e+"&search="+t,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function r(e){return n.a.get(o+"/tiket/tickets/"+e,{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function d(e){return n.a.put(o+"/tiket/tickets/"+e,{status:3},{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function l(e){return n.a.post(o+"/tiket/tickets",{subject:e.title,description:e.description,type:"Issue",priority:"Normal"},{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function u(e,t){return n.a.post(o+"/tiket/tickets/comment",{ticket_id:e,text:t},{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function j(e,t,c){return n.a.post(o+"/tiket/users",{ekoop_user_id:e,username:t.replace("+",""),password:t.replace("+","")+"123!",email:t.replace("+","")+"@example.com",fullname:c},{headers:Object(a.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}}}]);
//# sourceMappingURL=26.8376897a.chunk.js.map