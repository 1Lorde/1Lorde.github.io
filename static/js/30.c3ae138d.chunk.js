(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[30],{1486:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(49),i=n.n(s);var o="styles_react-code-input-container__tpiKG",l="styles_react-code-input__CRulA",c="styles_loading__Z65VQ",u="styles_blur__19vMK",d="styles_title__1cca0",p="styles_spin__6y_8G";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* add css styles here (optional) */\n\n.styles_react-code-input-container__tpiKG {\n  position: relative;\n}\n\n.styles_react-code-input__CRulA > input {\n  border: solid 1px #a8adb7;\n  border-right: none;\n  font-family: 'Lato';\n  font-size: 20px;\n  color: #525461;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 0;\n  -webkit-appearance: initial;\n}\n\n.styles_react-code-input__CRulA > input:last-child {\n  border-right: solid 1px #a8adb7;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\n.styles_react-code-input__CRulA > input:focus {\n  outline: none;\n  border: 1px solid #006fff;\n  caret-color: #006fff;\n}\n\n.styles_react-code-input__CRulA > input:focus + input {\n  border-left: none;\n}\n\n.styles_loading__Z65VQ {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n}\n\n.styles_blur__19vMK {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fff;\n  opacity: 0.5;\n  filter: blur(0.5px);\n  transition: opacity 0.3s;\n}\n\n.styles_title__1cca0 {\n  margin: 0;\n  height: 20px;\n  padding-bottom: 10px;\n}\n\n.styles_spin__6y_8G {\n  display: inline-block;\n  animation: styles_loadingCircle__293ky 1s infinite linear;\n}\n\n@keyframes styles_loadingCircle__293ky {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n");var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=8,b=37,y=38,g=39,m=40,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));_.call(n);var r=e.fields,s=e.values,i=void 0,o=0;if(s&&s.length){i=[];for(var l=0;l<r;l++)i.push(s[l]||"");o=s.length>=r?0:s.length}else i=Array(r).fill("");n.state={values:i,autoFocusIndex:o},n.iRefs=[];for(var c=0;c<r;c++)n.iRefs.push(a.a.createRef());return n.id=+new Date,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.values,r=t.autoFocusIndex,s=this.props,i=s.loading,f=s.title,h=s.fieldHeight,b=s.fieldWidth,y=s.fields,g=s.autoFocus,m=s.className,v=s.type,_={width:b,height:h},x={width:y*b},j={lineHeight:h+"px"};return a.a.createElement("div",{className:o+" "+m,style:x},f&&a.a.createElement("p",{className:d},f),a.a.createElement("div",{className:l},n.map((function(t,n){return a.a.createElement("input",{type:"number"===v?"tel":v,pattern:"number"===v?"[0-9]*":null,autoFocus:g&&n===r,style:_,key:e.id+"-"+n,"data-id":n,value:t,id:e.props.id?e.props.id+"-"+n:null,ref:e.iRefs[n],onChange:e.onChange,onKeyDown:e.onKeyDown,onFocus:e.onFocus,disabled:e.props.disabled,required:e.props.required,placeholder:e.props.placeholder[n]})}))),i&&a.a.createElement("div",{className:c,style:j},a.a.createElement("div",{className:u}),a.a.createElement("svg",{className:p,viewBox:"0 0 1024 1024","data-icon":"loading",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},a.a.createElement("path",{fill:"#006fff",d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}))))}}]),t}(r.Component);v.propTypes={type:i.a.oneOf(["text","number"]),onChange:i.a.func,onComplete:i.a.func,fields:i.a.number,loading:i.a.bool,title:i.a.string,fieldWidth:i.a.number,id:i.a.string,fieldHeight:i.a.number,autoFocus:i.a.bool,className:i.a.string,values:i.a.arrayOf(i.a.string),disabled:i.a.bool,required:i.a.bool,placeholder:i.a.arrayOf(i.a.string)},v.defaultProps={type:"number",fields:6,fieldWidth:58,fieldHeight:54,autoFocus:!0,disabled:!1,required:!1,placeholder:[]};var _=function(){var e=this;this.__clearvalues__=function(){var t=e.props.fields;e.setState({values:Array(t).fill("")}),e.iRefs[0].current.focus()},this.triggerChange=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.values,n=e.props,r=n.onChange,a=n.onComplete,s=n.fields,i=t.join("");r&&r(i),a&&i.length>=s&&a(i)},this.onChange=function(t){var n=parseInt(t.target.dataset.id);if("number"===e.props.type&&(t.target.value=t.target.value.replace(/[^\d]/gi,"")),""!==t.target.value&&("number"!==e.props.type||t.target.validity.valid)){var r=e.props.fields,a=void 0,s=t.target.value,i=e.state.values;if(i=Object.assign([],i),s.length>1){var o=s.length+n-1;o>=r&&(o=r-1),a=e.iRefs[o],s.split("").forEach((function(e,t){var a=n+t;a<r&&(i[a]=e)})),e.setState({values:i})}else a=e.iRefs[n+1],i[n]=s,e.setState({values:i});a&&(a.current.focus(),a.current.select()),e.triggerChange(i)}},this.onKeyDown=function(t){var n=parseInt(t.target.dataset.id),r=n-1,a=n+1,s=e.iRefs[r],i=e.iRefs[a];switch(t.keyCode){case h:t.preventDefault();var o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.state.values));e.state.values[n]?(o[n]="",e.setState({values:o}),e.triggerChange(o)):s&&(o[r]="",s.current.focus(),e.setState({values:o}),e.triggerChange(o));break;case b:t.preventDefault(),s&&s.current.focus();break;case g:t.preventDefault(),i&&i.current.focus();break;case y:case m:t.preventDefault()}},this.onFocus=function(e){e.target.select(e)}},x=v,j=n(57),O=n(10);t.default=()=>Object(O.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(O.jsxs)(j.o,{children:[Object(O.jsx)(j.Q,{className:"justify-content-center",children:Object(O.jsx)(j.n,{md:6,children:Object(O.jsx)(j.h,{className:"p-4",children:Object(O.jsx)(j.i,{children:Object(O.jsxs)(j.v,{children:[Object(O.jsx)("h2",{children:"Input OTP"}),Object(O.jsx)("br",{}),Object(O.jsx)(j.Q,{children:Object(O.jsx)(j.n,{className:"d-flex justify-content-center",children:Object(O.jsx)(x,{})})}),Object(O.jsx)("br",{}),Object(O.jsx)(j.Q,{children:Object(O.jsx)(j.n,{className:"d-flex justify-content-end",children:Object(O.jsx)(j.e,{color:"primary",className:"px-4",children:"Submit"})})})]})})})})}),Object(O.jsx)("br",{}),Object(O.jsxs)(j.Q,{className:"align-items-baseline",children:[Object(O.jsx)(j.n,{md:5,className:"d-flex justify-content-end",children:Object(O.jsx)(j.e,{color:"primary",variant:"outline",children:"Request OTP"})}),Object(O.jsx)(j.n,{md:4,className:"d-flex justify-content-center",children:Object(O.jsx)("p",{children:"or sent !OTP via WhatsApp to +6281xxxxxxxxxx"})})]})]})})}}]);
//# sourceMappingURL=30.c3ae138d.chunk.js.map