(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[27],{1546:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(60),c=a(371),l=a(1515),n=a(403),i=a(469),o=a(7);var d=function(e){return Object(o.jsx)(r.hb,{className:"mb-4",color:"info",value:e.value,title:e.title,action:Object(o.jsxs)(r.p,{alignment:"end",children:[Object(o.jsx)(r.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(c.a,{icon:l.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(r.s,{children:[Object(o.jsx)(r.r,{children:"Action"}),Object(o.jsx)(r.r,{children:"Another action"}),Object(o.jsx)(r.r,{children:"Something else here..."}),Object(o.jsx)(r.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(n.b,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:Object(i.getStyle)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})};var b=function(e){return Object(o.jsx)(r.hb,{className:"mb-4",color:"warning",value:e.value,title:e.title,action:Object(o.jsxs)(r.p,{alignment:"end",children:[Object(o.jsx)(r.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(c.a,{icon:l.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(r.s,{children:[Object(o.jsx)(r.r,{children:"Action"}),Object(o.jsx)(r.r,{children:"Another action"}),Object(o.jsx)(r.r,{children:"Something else here..."}),Object(o.jsx)(r.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(n.b,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})};var j=function(e){return Object(o.jsx)(r.hb,{className:"mb-4",color:"danger",value:e.value,title:e.title,action:Object(o.jsxs)(r.p,{alignment:"end",children:[Object(o.jsx)(r.t,{color:"transparent",caret:!1,className:"p-0",children:Object(o.jsx)(c.a,{icon:l.a,className:"text-high-emphasis-inverse"})}),Object(o.jsxs)(r.s,{children:[Object(o.jsx)(r.r,{children:"Action"}),Object(o.jsx)(r.r,{children:"Another action"}),Object(o.jsx)(r.r,{children:"Something else here..."}),Object(o.jsx)(r.r,{disabled:!0,children:"Disabled action"})]})]}),chart:Object(o.jsx)(n.a,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})},h=a(123),u=a(367),p=a.n(u),x=a(366);const O="https://api.ekoop.id/v01";var m=a(41),g=a(73),y=a(390),v=a(444);t.default=()=>{const{t:e}=Object(v.a)(),{userState:t}=Object(s.useContext)(m.a),[a,c]=Object(s.useState)(),[l,n]=Object(s.useState)(0),[i,u]=Object(s.useState)(0),[f,k]=Object(s.useState)(0);return Object(s.useEffect)((()=>{p.a.get(O+"/auth/stat/nasabah/all",{headers:Object(x.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null})).then((e=>{n(e.data.all.count)})),p.a.get(O+"/auth/stat/account_officer/all",{headers:Object(x.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null})).then((e=>{u(e.data.all.count),c(!0)})),Object(g.d)().includes(g.c[t.user.role])&&p.a.get(O+"/users/stat/clients/all",{headers:Object(x.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null})).then((e=>{k(e.data.all.count)}))}),[]),a?Object(o.jsxs)(r.o,{children:[Object(o.jsxs)(r.V,{className:"align-items-center",children:[Object(o.jsx)(r.n,{xl:2,children:e("virtual_accounts")}),Object(o.jsx)(r.n,{xl:6,children:Object(o.jsx)(r.y,{type:"text"})}),Object(o.jsx)(r.n,{children:Object(o.jsxs)(r.f,{role:"group",className:"p-3",children:[Object(o.jsx)(r.e,{color:"primary",variant:"outline",children:e("view_transactions")}),Object(o.jsx)(r.e,{color:"primary",variant:"outline",children:e("download_transactions")})]})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsxs)(r.V,{children:[Object(o.jsx)(r.n,{lg:4,children:Object(o.jsx)(d,{title:e("total_number")+" "+e("account_officer"),value:i})}),Object(o.jsx)(r.n,{lg:4,children:Object(o.jsx)(b,{title:e("total_number")+" "+e("nasabah"),value:l})}),Object(o.jsx)(r.n,{lg:4,children:Object(o.jsx)(y.a,{allowedRoles:["app-owner","marketing-finance","credit-analyst"],children:Object(o.jsx)(j,{title:e("total_number")+" "+e("clients"),value:f})})})]})]}):Object(h.a)()}},390:function(e,t,a){"use strict";var s=a(52),r=a.n(s),c=a(41);const l=({children:e,allowedRoles:t})=>{const a=Object(c.e)();return t.includes(a)&&e};l.propTypes={children:r.a.element,request:r.a.array},t.a=l}}]);
//# sourceMappingURL=27.37e3b202.chunk.js.map