(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[14],{1485:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(60),i=s(34),r=s(121),n=s(384),o=s(12),d=s(8);t.default=()=>{const[e,t]=Object(a.useState)(""),[s,l]=Object(a.useState)(""),[j,p]=Object(a.useState)("");let b=Object(o.g)();const{userState:h,userDispatch:u}=Object(a.useContext)(i.a),[O,m]=Object(a.useState)(!1);return Object(d.jsx)(c.o,{className:"d-flex justify-content-center",children:Object(d.jsx)(c.h,{style:{width:"35rem"},children:Object(d.jsx)(c.i,{children:Object(d.jsxs)(c.v,{noValidate:!0,validated:O,onSubmit:t=>{t.preventDefault();const a=t.currentTarget;!1===a.checkValidity()&&t.stopPropagation(),s===j?(m(!0),a.checkValidity()&&Object(i.c)(e,s).then((e=>{r.store.addNotification(Object(n.b)(e.message)),u({type:"request_otp",user:h.user,company:h.company}),b.push("/input_otp")})).catch((e=>{let t=e.response.data;console.log(t),r.store.addNotification(Object(n.a)(t.message))}))):r.store.addNotification(Object(n.a)("Check confirmation field"))},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(c.z,{htmlFor:"old_pass",children:"Old Password"}),Object(d.jsx)(c.y,{type:"password",id:"old_pass",required:!0,onChange:e=>t(e.target.value)}),Object(d.jsx)(c.x,{invalid:!0,children:"Please provide old password."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(c.z,{htmlFor:"new_pass",children:"New Password"}),Object(d.jsx)(c.y,{type:"password",pattern:"^.{6,}$",id:"new_pass",required:!0,onChange:e=>l(e.target.value)}),Object(d.jsx)(c.x,{invalid:!0,children:"Please provide new password (min 6 chars)."})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)(c.z,{htmlFor:"confirm_new_pass",children:"Confirm New Password"}),Object(d.jsx)(c.y,{type:"password",pattern:"^.{6,}$",id:"confirm_new_pass",required:!0,onChange:e=>p(e.target.value)}),Object(d.jsx)(c.x,{invalid:!0,children:"Please confirm new password."})]}),Object(d.jsx)("div",{className:"d-flex justify-content-end",children:Object(d.jsx)(c.e,{color:"primary",type:"submit",children:"Save"})})]})})})})}}}]);
//# sourceMappingURL=14.ecd94d94.chunk.js.map