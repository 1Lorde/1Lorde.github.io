(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[6],{1506:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(60),r=a(385),c=a(1480),i=a(398),l=a(432),o=a(8);var u=function(e){return Object(o.jsx)(s.gb,{className:"mb-4",color:"info",value:e.value,title:e.title,action:Object(o.jsxs)(s.p,{alignment:"end",children:[Object(o.jsx)(s.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(r.a,{icon:c.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(s.s,{children:[Object(o.jsx)(s.r,{children:"Action"}),Object(o.jsx)(s.r,{children:"Another action"}),Object(o.jsx)(s.r,{children:"Something else here..."}),Object(o.jsx)(s.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(i.b,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:Object(l.getStyle)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})};var d=function(e){return Object(o.jsx)(s.gb,{className:"mb-4",color:"warning",value:e.value,title:e.title,action:Object(o.jsxs)(s.p,{alignment:"end",children:[Object(o.jsx)(s.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(r.a,{icon:c.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(s.s,{children:[Object(o.jsx)(s.r,{children:"Action"}),Object(o.jsx)(s.r,{children:"Another action"}),Object(o.jsx)(s.r,{children:"Something else here..."}),Object(o.jsx)(s.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(i.b,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})};var b=a(383),h=a(121);t.default=()=>{const[e,t]=Object(n.useState)(),[a,r]=Object(n.useState)(0),[c,i]=Object(n.useState)(0),[l,j]=Object(n.useState)(0);return Object(n.useEffect)((()=>{Object(b.g)().then((e=>{r(e.data.all.count)})),Object(b.c)().then((e=>{i(e.data.all.count),t(!0)}))}),[]),e?Object(o.jsxs)(s.o,{children:[Object(o.jsxs)(s.S,{className:"align-items-center",children:[Object(o.jsx)(s.n,{xl:2,children:"Virtual Accounts"}),Object(o.jsx)(s.n,{xl:6,children:Object(o.jsx)(s.y,{type:"text"})}),Object(o.jsx)(s.n,{children:Object(o.jsxs)(s.f,{role:"group",className:"p-3",children:[Object(o.jsx)(s.e,{color:"primary",variant:"outline",children:"View Transactions"}),Object(o.jsx)(s.e,{color:"primary",variant:"outline",children:"Download Transactions"})]})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(s.S,{children:[Object(o.jsxs)(s.n,{lg:4,children:[Object(o.jsx)(u,{title:"Total Number of Account Officer",value:c}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-3",children:Object(o.jsx)(s.e,{color:"dark",size:"sm",children:"View Details"})})]}),Object(o.jsxs)(s.n,{lg:4,children:[Object(o.jsx)(d,{title:"Total Number of Nasabah",value:a}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-3",children:Object(o.jsx)(s.e,{color:"dark",size:"sm",children:"View Details"})})]})]})]}):Object(h.a)()}},383:function(e,t,a){"use strict";a.d(t,"k",(function(){return i})),a.d(t,"j",(function(){return l})),a.d(t,"n",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"l",(function(){return b})),a.d(t,"e",(function(){return h})),a.d(t,"h",(function(){return j})),a.d(t,"a",(function(){return p})),a.d(t,"m",(function(){return O})),a.d(t,"i",(function(){return m})),a.d(t,"f",(function(){return f})),a.d(t,"g",(function(){return g})),a.d(t,"c",(function(){return x}));var n=a(31),s=a.n(n),r=a(32);const c="https://api.ekoop.id/v01";function i(e){return s.a.get(c+"/auth/user?search="+e,{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e){return s.a.get(c+"/auth/user/"+e,{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return s.a.put(c+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function u(e){return s.a.post(c+"/auth/user",e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return s.a.get(c+"/users/admin/client/"+e,{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function b(e,t){return s.a.put(c+"/users/admin/client/"+e,t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function h(){return s.a.get(c+"/users/admin/client",{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function j(e,t){return s.a.get(c+"/transaction/products?search="+e+"&tipe="+t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function p(e){return s.a.post(c+"/transaction/products",e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e.response.data)}))}function O(e){const t={name:e.name,description:e.description,balance_start:e.balance_start,percent_rate:e.percent_rate,limit_min:e.limit_min,limit_max:e.limit_max,active:e.active,rate_type:e.rate_type};return s.a.put(c+"/transaction/products/"+e.credit_simulation_id,t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function m(){return s.a.get(c+"/transaction/services",{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function f(){return s.a.get(c+"/nasabah/nasabah",{headers:Object(r.b)()}).then((e=>e.data.nasabah_list)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function g(){return s.a.get(c+"/auth/stat/nasabah/all",{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function x(){return s.a.get(c+"/auth/stat/account_officer/all",{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}}}]);
//# sourceMappingURL=6.b9724d5a.chunk.js.map