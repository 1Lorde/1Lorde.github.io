(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[19],{1550:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),r=c(60),n=c(12),o=c(404),l=c(371),i=c(381),d=c(7);function j({columns:e,data:t,fetchData:c,hasLoaded:a}){const{getTableProps:n,getTableBodyProps:o,headerGroups:l,prepareRow:j,rows:b}=Object(i.useTable)({columns:e,data:t});return Object(s.useEffect)((()=>{c()}),[c]),a?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.bb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...n(),children:[Object(d.jsx)(r.eb,{children:l.map(((e,t)=>Object(d.jsx)(r.gb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(d.jsx)(r.fb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(d.jsx)(r.cb,{...o(),children:b.map(((e,t)=>(j(e),Object(d.jsx)(r.gb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(d.jsx)(r.db,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]})}):Object(d.jsx)(r.n,{className:"d-flex justify-content-center",children:Object(d.jsx)(r.ab,{color:"primary"})})}var b=c(406),u=c(444);t.default=()=>{const{t:e}=Object(u.a)(),t=Object(n.g)(),[c,i]=Object(s.useState)(),[h,p]=Object(s.useState)([]),[O,x]=Object(s.useState)(""),[m,v]=Object(s.useState)(""),f=Object(s.useRef)(0),g=Object(s.useCallback)((()=>{++f.current===f.current&&(i(!1),Object(b.b)(O,m).then((c=>{var s;console.log(c),p(null===(s=c.vendors)||void 0===s?void 0:s.map((c=>({name:c.name,url:c.api_base_url,location:c.address,status:"ACTIVE"===c.status?Object(d.jsx)(r.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e("active")}):Object(d.jsx)(r.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:e("inactive")}),action:Object(d.jsxs)(r.e,{color:"dark",size:"sm",onClick:()=>t.push("/ppob/vendors/"+c.id),children:[Object(d.jsx)(l.a,{icon:o.a,className:"me-1"}),e("edit")]})})))),i(!0)})))}),[t,O,m]),y=a.a.useMemo((()=>[{Header:e("company_name"),accessor:"name"},{Header:"API URL",accessor:"url"},{Header:e("status"),accessor:"status"},{Header:e("action"),accessor:"action"}]),[]);return Object(d.jsxs)(r.o,{children:[Object(d.jsxs)(r.V,{className:"align-items-center",children:[Object(d.jsxs)(r.n,{children:[Object(d.jsx)(r.z,{htmlFor:"searchInput",children:e("search")}),Object(d.jsx)(r.y,{type:"text",id:"searchInput",placeholder:e("enter_search_query"),onChange:e=>{x(e.target.value)}})]}),Object(d.jsxs)(r.n,{children:[Object(d.jsx)(r.z,{htmlFor:"statusInput",children:e("status")}),Object(d.jsxs)(r.A,{id:"statusInput",onChange:e=>{v(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:e("all")}),Object(d.jsx)("option",{value:"ACTIVE",children:e("active")}),Object(d.jsx)("option",{value:"NOT-ACTIVE",children:e("inactive")})]})]}),Object(d.jsx)(r.n,{className:"d-flex justify-content-end",children:Object(d.jsx)(r.e,{color:"primary",onClick:()=>t.push("/nasabah/create"),children:e("add_new")})})]}),Object(d.jsx)("br",{}),Object(d.jsx)(r.V,{children:Object(d.jsx)(r.h,{children:Object(d.jsx)(r.i,{children:Object(d.jsx)(j,{columns:y,data:h,fetchData:g,hasLoaded:c})})})})]})}},404:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));const s=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]},406:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"a",(function(){return l}));var s=c(367),a=c.n(s),r=c(366);const n="https://api.ekoop.id/v01";function o(e,t){return a.a.get(n+"/transaction/vendors?search="+e+"&status="+t,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}function l(e){return a.a.get(n+"/transaction/vendors/"+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{console.log(e)}))}}}]);
//# sourceMappingURL=19.1e692d29.chunk.js.map