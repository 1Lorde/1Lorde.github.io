(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[43],{1549:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(52),i=n.n(o);var s="styles_react-code-input-container__tpiKG",c="styles_react-code-input__CRulA",l="styles_loading__Z65VQ",u="styles_blur__19vMK",d="styles_title__1cca0",p="styles_spin__6y_8G";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* add css styles here (optional) */\n\n.styles_react-code-input-container__tpiKG {\n  position: relative;\n}\n\n.styles_react-code-input__CRulA > input {\n  border: solid 1px #a8adb7;\n  border-right: none;\n  font-family: 'Lato';\n  font-size: 20px;\n  color: #525461;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 0;\n  -webkit-appearance: initial;\n}\n\n.styles_react-code-input__CRulA > input:last-child {\n  border-right: solid 1px #a8adb7;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:focus {\n  outline: none;\n  border: 1px solid #006fff;\n  caret-color: #006fff;\n}\n\n.styles_react-code-input__CRulA > input:focus + input {\n  border-left: none;\n}\n\n.styles_loading__Z65VQ {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n}\n\n.styles_blur__19vMK {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  opacity: 0.5;\n  filter: blur(0.5px);\n  transition: opacity 0.3s;\n}\n\n.styles_title__1cca0 {\n  margin: 0;\n  height: 20px;\n  padding-bottom: 10px;\n}\n\n.styles_spin__6y_8G {\n  display: inline-block;\n  animation: styles_loadingCircle__293ky 1s infinite linear;\n}\n\n@keyframes styles_loadingCircle__293ky {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n");var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=8,b=37,_=38,g=39,m=40,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));v.call(n);var a=e.fields,o=e.values,i=void 0,s=0;if(o&&o.length){i=[];for(var c=0;c<a;c++)i.push(o[c]||"");s=o.length>=a?0:o.length}else i=Array(a).fill("");n.state={values:i,autoFocusIndex:s},n.iRefs=[];for(var l=0;l<a;l++)n.iRefs.push(r.a.createRef());return n.id=+new Date,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.values,a=t.autoFocusIndex,o=this.props,i=o.loading,f=o.title,h=o.fieldHeight,b=o.fieldWidth,_=o.fields,g=o.autoFocus,m=o.className,y=o.type,v={width:b,height:h},j={width:_*b},O={lineHeight:h+"px"};return r.a.createElement("div",{className:s+" "+m,style:j},f&&r.a.createElement("p",{className:d},f),r.a.createElement("div",{className:c},n.map((function(t,n){return r.a.createElement("input",{type:"number"===y?"tel":y,pattern:"number"===y?"[0-9]*":null,autoFocus:g&&n===a,style:v,key:e.id+"-"+n,"data-id":n,value:t,id:e.props.id?e.props.id+"-"+n:null,ref:e.iRefs[n],onChange:e.onChange,onKeyDown:e.onKeyDown,onFocus:e.onFocus,disabled:e.props.disabled,required:e.props.required,placeholder:e.props.placeholder[n]})}))),i&&r.a.createElement("div",{className:l,style:O},r.a.createElement("div",{className:u}),r.a.createElement("svg",{className:p,viewBox:"0 0 1024 1024","data-icon":"loading",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{fill:"#006fff",d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}))))}}]),t}(a.Component);y.propTypes={type:i.a.oneOf(["text","number"]),onChange:i.a.func,onComplete:i.a.func,fields:i.a.number,loading:i.a.bool,title:i.a.string,fieldWidth:i.a.number,id:i.a.string,fieldHeight:i.a.number,autoFocus:i.a.bool,className:i.a.string,values:i.a.arrayOf(i.a.string),disabled:i.a.bool,required:i.a.bool,placeholder:i.a.arrayOf(i.a.string)},y.defaultProps={type:"number",fields:6,fieldWidth:58,fieldHeight:54,autoFocus:!0,disabled:!1,required:!1,placeholder:[]};var v=function(){var e=this;this.__clearvalues__=function(){var t=e.props.fields;e.setState({values:Array(t).fill("")}),e.iRefs[0].current.focus()},this.triggerChange=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.values,n=e.props,a=n.onChange,r=n.onComplete,o=n.fields,i=t.join("");a&&a(i),r&&i.length>=o&&r(i)},this.onChange=function(t){var n=parseInt(t.target.dataset.id);if("number"===e.props.type&&(t.target.value=t.target.value.replace(/[^\d]/gi,"")),""!==t.target.value&&("number"!==e.props.type||t.target.validity.valid)){var a=e.props.fields,r=void 0,o=t.target.value,i=e.state.values;if(i=Object.assign([],i),o.length>1){var s=o.length+n-1;s>=a&&(s=a-1),r=e.iRefs[s],o.split("").forEach((function(e,t){var r=n+t;r<a&&(i[r]=e)})),e.setState({values:i})}else r=e.iRefs[n+1],i[n]=o,e.setState({values:i});r&&(r.current.focus(),r.current.select()),e.triggerChange(i)}},this.onKeyDown=function(t){var n=parseInt(t.target.dataset.id),a=n-1,r=n+1,o=e.iRefs[a],i=e.iRefs[r];switch(t.keyCode){case h:t.preventDefault();var s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.state.values));e.state.values[n]?(s[n]="",e.setState({values:s}),e.triggerChange(s)):o&&(s[a]="",o.current.focus(),e.setState({values:s}),e.triggerChange(s));break;case b:t.preventDefault(),o&&o.current.focus();break;case g:t.preventDefault(),i&&i.current.focus();break;case _:case m:t.preventDefault()}},this.onFocus=function(e){e.target.select(e)}},j=y,O=n(60),x=n(41),w=n(12),k=n(122),C=n(369),N=n(377),R=n(444),A=n(7);t.default=()=>{const{t:e}=Object(R.a)(),{userState:t}=Object(a.useContext)(x.a),n=Object(w.g)(),[r,o]=Object(a.useState)(""),[i,s]=Object(a.useState)();return Object(a.useEffect)((()=>{console.log(t),t&&0===Object.keys(t).length&&Object.getPrototypeOf(t)===Object.prototype&&n.push("/login")}),[]),Object(A.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(A.jsx)(O.o,{children:Object(A.jsx)(O.V,{className:"justify-content-center",children:Object(A.jsx)(O.n,{xl:4,children:Object(A.jsx)(O.h,{className:"p-4",children:Object(A.jsx)(O.i,{children:Object(A.jsxs)(O.v,{children:[Object(A.jsx)("h2",{children:e("input_otp")}),Object(A.jsx)("br",{}),Object(A.jsx)(O.V,{children:Object(A.jsx)(O.n,{className:"d-flex justify-content-center",children:Object(A.jsx)(j,{loading:i,autoFocus:!0,fieldWidth:40,onChange:e=>o(e)})})}),Object(A.jsx)("br",{}),Object(A.jsx)(O.V,{children:Object(A.jsx)(O.n,{className:"d-flex justify-content-end",children:Object(A.jsx)(O.e,{color:"primary",className:"px-4",onClick:a=>function(a){s(!0),t.status===x.b.WAITING_FOR_OTP?Object(N.b)(a).then((e=>{console.log(e),k.store.addNotification(Object(C.c)(e.message)),s(!1),n.push("/profile")})):t.status===x.b.TRY_TO_LOGIN?Object(N.e)(t.temp_token,a).then((t=>{console.log(t),k.store.addNotification(Object(C.c)(e("notifications.welcome_back"))),s(!1),n.push("/profile")})):t.status===x.b.RESET_PASS&&Object(N.g)(t.temp_token,a).then((e=>{!0===e.ok?(console.log(e),k.store.addNotification(Object(C.c)(e.message)),s(!1),n.push("/profile")):(k.store.addNotification(Object(C.a)(e.message)),s(!1))}))}(r),children:e("submit")})})})]})})})})})})})}},366:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(41);function r(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}function o(){if(Object(a.f)()){return{Authorization:"Bearer "+localStorage.getItem("token"),"Ekoop-Api-Key":"4a6e486c-3167-4112-97e7-5aa690042613","X-Request-Id":r()}}return{}}function i(){return{"Ekoop-Api-Key":"4a6e486c-3167-4112-97e7-5aa690042613","X-Request-Id":r()}}},369:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(93);function r(e){return{title:a.a.t("success"),message:e,type:"success",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function o(e){return{title:a.a.t("error"),message:e,type:"danger",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}function i(e){return{title:a.a.t("info"),message:e,type:"info",insert:"bottom",container:"bottom-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3}}}},377:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return f}));var a=n(367),r=n.n(a),o=n(366);const i="https://api.ekoop.id/v01";function s(e,t){return r.a.post(i+"/auth/auth/login/password",{wa_number:e,password:t},{headers:Object(o.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function c(e,t){return r.a.post(i+"/auth/auth/login/otp",{auth_id:e,otp:t},{headers:Object(o.a)()}).then((e=>(e.data.access_token&&localStorage.setItem("token",e.data.access_token),e.data)))}function l(e,t){return r.a.post(i+"/auth/profile/change_password",{old_password:e,new_password:t},{headers:Object(o.b)()}).then((e=>(console.log(e.data),e.data)))}function u(e){return r.a.post(i+"/auth/profile/change_password/otp",{otp:e},{headers:Object(o.b)()}).then((e=>(console.log(e),e.data)))}function d(e,t){return r.a.post(i+"/auth/auth/forgot_password",{wa_number:e,ktp_id:t},{headers:Object(o.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function p(e,t,n){return console.log(e),r.a.post(i+"/auth/auth/reset_password",{user_id:e,token:t,new_password:n},{headers:Object(o.a)()}).then((e=>e.data)).catch((e=>e.response.data))}function f(e,t){return r.a.post(i+"/auth/auth/reset_password_otp",{auth_id:e,otp:t},{headers:Object(o.a)()}).then((e=>e.data)).catch((e=>e.response.data))}}}]);
//# sourceMappingURL=43.bfd81ac4.chunk.js.map