(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[24],{1522:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(57),l=a(358),i=a(1492),r=a(381),n=a(443),o=a(7);var j=function(e){return Object(o.jsx)(c.lb,{className:"mb-4",color:"info",value:e.value,title:e.title,action:Object(o.jsxs)(c.p,{alignment:"end",children:[Object(o.jsx)(c.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(l.a,{icon:i.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(c.s,{children:[Object(o.jsx)(c.r,{children:"Action"}),Object(o.jsx)(c.r,{children:"Another action"}),Object(o.jsx)(c.r,{children:"Something else here..."}),Object(o.jsx)(c.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(r.b,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:Object(n.getStyle)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})};var d=function(e){return Object(o.jsx)(c.lb,{className:"mb-4",color:"warning",value:e.value,title:e.title,action:Object(o.jsxs)(c.p,{alignment:"end",children:[Object(o.jsx)(c.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(l.a,{icon:i.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(c.s,{children:[Object(o.jsx)(c.r,{children:"Action"}),Object(o.jsx)(c.r,{children:"Another action"}),Object(o.jsx)(c.r,{children:"Something else here..."}),Object(o.jsx)(c.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(r.b,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})};var b=a(117),h=a(353),u=a.n(h),x=a(352);const O="https://api.ekoop.id/v01";t.default=()=>{const[e,t]=Object(s.useState)(),[a,l]=Object(s.useState)(0),[i,r]=Object(s.useState)(0),[n,h]=Object(s.useState)(0);return Object(s.useEffect)((()=>{u.a.get(O+"/auth/stat/nasabah/all",{headers:Object(x.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null})).then((e=>{l(e.data.all.count)})),u.a.get(O+"/auth/stat/account_officer/all",{headers:Object(x.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null})).then((e=>{r(e.data.all.count),t(!0)}))}),[]),e?Object(o.jsxs)(c.o,{children:[Object(o.jsxs)(c.X,{className:"align-items-center",children:[Object(o.jsx)(c.n,{xl:2,children:"Virtual Accounts"}),Object(o.jsx)(c.n,{xl:6,children:Object(o.jsx)(c.y,{type:"text"})}),Object(o.jsx)(c.n,{children:Object(o.jsxs)(c.f,{role:"group",className:"p-3",children:[Object(o.jsx)(c.e,{color:"primary",variant:"outline",children:"View Transactions"}),Object(o.jsx)(c.e,{color:"primary",variant:"outline",children:"Download Transactions"})]})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(c.X,{children:[Object(o.jsxs)(c.n,{lg:4,children:[Object(o.jsx)(j,{title:"Total Number of Account Officer",value:i}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-3",children:Object(o.jsx)(c.e,{color:"dark",size:"sm",children:"View Details"})})]}),Object(o.jsxs)(c.n,{lg:4,children:[Object(o.jsx)(d,{title:"Total Number of Nasabah",value:a}),Object(o.jsx)("div",{className:"d-flex justify-content-end pb-3",children:Object(o.jsx)(c.e,{color:"dark",size:"sm",children:"View Details"})})]})]})]}):Object(b.a)()}}}]);
//# sourceMappingURL=24.3cc75b74.chunk.js.map