(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[39],{1526:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(57),s=a(358),o=a(442);const i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"];var c=a(12),d=a(68),u=a(38),l=a(356),h=a(118),p=a(363),m=a(7);e.default=()=>{const[t,e]=Object(n.useState)(""),[a,j]=Object(n.useState)(""),{userDispatch:b}=Object(n.useContext)(u.a),f=Object(c.g)(),[O,_]=Object(n.useState)(!1);return Object(m.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(m.jsx)(r.o,{children:Object(m.jsx)(r.X,{className:"justify-content-center",children:Object(m.jsx)(r.n,{md:5,children:Object(m.jsx)(r.h,{className:"p-4",children:Object(m.jsx)(r.i,{children:Object(m.jsxs)(r.v,{noValidate:!0,validated:O,onSubmit:function(e){e.preventDefault();const n=e.currentTarget;!1===n.checkValidity()&&e.stopPropagation(),_(!0),n.checkValidity()&&Object(p.d)(t,a).then((t=>{t.ok?(b({type:"request_login",temp_token:t.auth_id}),console.log(t),h.store.addNotification(Object(l.b)(t.message)),f.push("/input_otp")):h.store.addNotification(Object(l.a)(t.message))}))},children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),Object(m.jsxs)(r.J,{className:"mb-3",children:[Object(m.jsx)(r.K,{children:Object(m.jsx)(s.a,{icon:o.a})}),Object(m.jsx)(r.y,{type:"tel",pattern:"^\\+62[0-9]{9,15}$",placeholder:"WhatsApp number",required:!0,value:t,onChange:t=>e(t.target.value)}),Object(m.jsx)(r.x,{invalid:!0,children:"Please provide a valid phone number."})]}),Object(m.jsxs)(r.J,{className:"mb-4",children:[Object(m.jsx)(r.K,{children:Object(m.jsx)(s.a,{icon:i})}),Object(m.jsx)(r.y,{type:"password",placeholder:"Password",required:!0,value:a,onChange:t=>j(t.target.value)}),Object(m.jsx)(r.x,{invalid:!0,children:"Please provide a password."})]}),Object(m.jsx)("div",{className:"d-flex justify-content-start",children:Object(m.jsx)(r.e,{color:"primary",className:"px-4",type:"submit",children:"Login"})}),Object(m.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(m.jsx)(d.b,{to:"/register",children:"Client registration"}),"\xa0\xa0\xa0\xa0",Object(m.jsx)(d.b,{to:"/reset_password",children:"Forgot password"})]})]})})})})})})})}},352:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return o}));var n=a(38);function r(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))}function s(){if(Object(n.e)()){return{Authorization:"Bearer "+localStorage.getItem("token"),"Ekoop-Api-Key":"4a6e486c-3167-4112-97e7-5aa690042613","X-Request-Id":r()}}return{}}function o(){return{"Ekoop-Api-Key":"4a6e486c-3167-4112-97e7-5aa690042613","X-Request-Id":r()}}},356:function(t,e,a){"use strict";function n(t){return{title:"Success",message:t,type:"success",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function r(t){return{title:"Error",message:t,type:"danger",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function s(t){return{title:"Info",message:t,type:"info",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}))},363:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"e",(function(){return c})),a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return l})),a.d(e,"f",(function(){return h})),a.d(e,"g",(function(){return p}));var n=a(353),r=a.n(n),s=a(352);const o="https://api.ekoop.id/v01";function i(t,e){return r.a.post(o+"/auth/auth/login/password",{wa_number:t,password:e},{headers:Object(s.a)()}).then((t=>t.data)).catch((t=>t.response.data))}function c(t,e){return r.a.post(o+"/auth/auth/login/otp",{auth_id:t,otp:e},{headers:Object(s.a)()}).then((t=>(t.data.access_token&&localStorage.setItem("token",t.data.access_token),t.data)))}function d(t,e){return r.a.post(o+"/auth/profile/change_password",{old_password:t,new_password:e},{headers:Object(s.b)()}).then((t=>(console.log(t.data),t.data)))}function u(t){return r.a.post(o+"/auth/profile/change_password/otp",{otp:t},{headers:Object(s.b)()}).then((t=>(console.log(t),t.data)))}function l(t,e){return r.a.post(o+"/auth/auth/forgot_password",{wa_number:t,ktp_id:e},{headers:Object(s.a)()}).then((t=>t.data)).catch((t=>t.response.data))}function h(t,e,a){return console.log(t),r.a.post(o+"/auth/auth/reset_password",{user_id:t,token:e,new_password:a},{headers:Object(s.a)()}).then((t=>t.data)).catch((t=>t.response.data))}function p(t,e){return r.a.post(o+"/auth/auth/reset_password_otp",{auth_id:t,otp:e},{headers:Object(s.a)()}).then((t=>t.data)).catch((t=>t.response.data))}},442:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));const n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=39.50501da6.chunk.js.map