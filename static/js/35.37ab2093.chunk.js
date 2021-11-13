(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[35],{1507:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(60),s=a(385),c=a(430);const r=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='286.903 256 416 177.877 416 141.115 415.717 140.646 272 227.617 272 72 240 72 240 227.617 96.283 140.646 96 141.115 96 177.877 225.097 256 96 334.123 96 370.885 96.283 371.354 240 284.383 240 440 272 440 272 284.383 415.717 371.354 416 370.885 416 334.123 286.903 256' class='ci-primary'/>"];var o=a(34),l=a(121),d=a(384),j=a(12),u=a(8);var b=e=>{const[t,a]=Object(n.useState)(""),[s,c]=Object(n.useState)("");let r=Object(j.g)();const{userDispatch:b}=Object(n.useContext)(o.a),[m,h]=Object(n.useState)(!1);return Object(u.jsxs)(i.v,{noValidate:!0,validated:m,children:[Object(u.jsx)("h2",{children:"Reset password"}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(i.z,{htmlFor:"new_pass",children:"New Password"}),Object(u.jsx)(i.y,{type:"password",id:"new_pass",required:!0,onChange:e=>a(e.target.value)}),Object(u.jsx)(i.x,{invalid:!0,children:"Please provide new password."})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)(i.z,{htmlFor:"confirm_new_pass",children:"Confirm New Password"}),Object(u.jsx)(i.y,{type:"password",id:"confirm_new_pass",required:!0,onChange:e=>c(e.target.value)}),Object(u.jsx)(i.x,{invalid:!0,children:"Please confirm new password."})]}),Object(u.jsx)("div",{className:"d-flex justify-content-end",children:Object(u.jsx)(i.e,{color:"primary",onClick:a=>{!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),t===s?(h(!0),Object(o.n)(e.userId,e.token,t).then((e=>{l.store.addNotification(Object(d.b)(e.message)),b({type:"request_reset",temp_token:e.auth_id}),r.push("/input_otp")})).catch((e=>{let t=e.response.data;console.log(t),l.store.addNotification(Object(d.a)(t.message))}))):l.store.addNotification(Object(d.a)("Check confirmation field"))},children:"Save"})})]})};t.default=()=>{const[e,t]=Object(n.useState)(""),[a,j]=Object(n.useState)(""),[m,h]=Object(n.useState)(!1),[p,O]=Object(n.useState)(""),[x,f]=Object(n.useState)(""),[_,v]=Object(n.useState)(!1);return Object(u.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(u.jsx)(i.o,{children:Object(u.jsx)(i.S,{className:"justify-content-center",children:Object(u.jsx)(i.n,{md:5,children:Object(u.jsx)(i.h,{className:"p-4",children:Object(u.jsx)(i.i,{children:m?Object(u.jsx)(b,{userId:p,token:x}):Object(u.jsxs)(i.v,{noValidate:!0,validated:_,onSubmit:function(t){t.preventDefault();const n=t.currentTarget;!1===n.checkValidity()&&(t.preventDefault(),t.stopPropagation()),v(!0),n.checkValidity()&&Object(o.f)(e,a).then((e=>{e.ok?(l.store.addNotification(Object(d.b)(e.message)),O(e.url_link.split("/")[5]),f(e.url_link.split("/")[6]),h(!0)):l.store.addNotification(Object(d.a)(e.message))}))},children:[Object(u.jsx)("h2",{children:"Reset password"}),Object(u.jsx)("br",{}),Object(u.jsxs)(i.J,{className:"mb-3",children:[Object(u.jsx)(i.K,{children:Object(u.jsx)(s.a,{icon:c.a})}),Object(u.jsx)(i.y,{placeholder:"WhatsApp number",type:"tel",pattern:"^\\+62[0-9]{9,15}$",required:!0,value:e,onChange:e=>t(e.target.value)}),Object(u.jsx)(i.x,{invalid:!0,children:"Please provide a valid phone number."})]}),Object(u.jsxs)(i.J,{className:"mb-4",children:[Object(u.jsx)(i.K,{children:Object(u.jsx)(s.a,{icon:r})}),Object(u.jsx)(i.y,{placeholder:"KTP number",required:!0,pattern:"^[0-9]{16}$",value:a,onChange:e=>j(e.target.value)}),Object(u.jsx)(i.x,{invalid:!0,children:"Please provide a valid KTP number."})]}),Object(u.jsx)(i.S,{children:Object(u.jsx)(i.n,{className:"d-flex justify-content-end",children:Object(u.jsx)(i.e,{color:"primary",className:"px-4",type:"submit",children:"Submit"})})})]})})})})})})})}},384:function(e,t,a){"use strict";function n(e){return{title:"Success",message:e,type:"success",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function i(e){return{title:"Error",message:e,type:"danger",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function s(e){return{title:"Info",message:e,type:"info",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}))},430:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=35.37ab2093.chunk.js.map