(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[11],{1525:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(60),r=t(12),i=t(376),l=t(392),o=t(404),d=t(371),u=t(444),b=t(7);a.default=()=>{const{t:e}=Object(u.a)(),a=Object(r.g)(),[t,j]=Object(c.useState)(),[h,p]=Object(c.useState)([]),[O,g]=Object(c.useState)(""),[m,x]=Object(c.useState)(""),[f,v]=Object(c.useState)(0),y=Object(c.useRef)(0),C=Object(c.useCallback)((({skip:t})=>{++y.current===y.current&&(j(!1),Object(l.c)(t,O,m).then((t=>{var c;console.log(t);let s=Math.floor(t.pagination.total/t.pagination.limit);t.pagination.total/t.pagination.limit>f&&(s+=1),v(s),p(null===(c=t.data)||void 0===c?void 0:c.map((t=>({name:t.name,number:t.wa_number,location:t.address,status:t.active?Object(b.jsx)(n.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e("active").toUpperCase()}):Object(b.jsx)(n.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:e("inactive").toUpperCase()}),action:Object(b.jsxs)(n.e,{color:"dark",size:"sm",onClick:()=>a.push("/nasabah/"+t.id),children:[Object(b.jsx)(d.a,{icon:o.a,className:"me-1"}),e("edit")]})})))),j(!0)})))}),[a,O,m]),k=s.a.useMemo((()=>[{Header:e("name"),accessor:"name"},{Header:e("whatsapp"),accessor:"number"},{Header:e("location"),accessor:"location"},{Header:e("status"),accessor:"status"},{Header:e("action"),accessor:"action"}]),[]);return Object(b.jsxs)(n.o,{children:[Object(b.jsxs)(n.V,{className:"align-items-center",children:[Object(b.jsxs)(n.n,{children:[Object(b.jsx)(n.z,{htmlFor:"searchInput",children:e("search")}),Object(b.jsx)(n.y,{type:"text",id:"searchInput",placeholder:e("enter_search_query"),onChange:e=>{g(e.target.value)}})]}),Object(b.jsxs)(n.n,{children:[Object(b.jsx)(n.z,{htmlFor:"statusInput",children:e("status")}),Object(b.jsxs)(n.A,{id:"statusInput",onChange:e=>{x(e.target.value)},children:[Object(b.jsx)("option",{value:"",children:e("all")}),Object(b.jsx)("option",{value:"false",children:e("inactive")}),Object(b.jsx)("option",{value:"true",children:e("true")})]})]}),Object(b.jsx)(n.n,{className:"d-flex justify-content-end",children:Object(b.jsx)(n.e,{color:"primary",onClick:()=>a.push("/nasabah/create"),children:e("add_new")})})]}),Object(b.jsx)("br",{}),Object(b.jsx)(n.V,{children:Object(b.jsx)(n.h,{children:Object(b.jsx)(n.i,{children:Object(b.jsx)(i.a,{columns:k,data:h,controlledPageCount:f,fetchData:C,hasLoaded:t})})})})]})}},376:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var c=t(381),s=t(60),n=t(0),r=t(371);const i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z' class='ci-primary'/><rect width='40' height='40' x='152' y='200' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='40' height='40' x='320' y='200' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,288a88.1,88.1,0,0,0-88,88h32a56,56,0,0,1,112,0h32A88.1,88.1,0,0,0,256,288Z' class='ci-primary'/>"];var l=t(444),o=t(7);function d({columns:e,data:a,controlledPageCount:t,fetchData:d,hasLoaded:u}){const{t:b}=Object(l.a)(),{getTableProps:j,getTableBodyProps:h,headerGroups:p,prepareRow:O,page:g,canPreviousPage:m,canNextPage:x,pageOptions:f,gotoPage:v,nextPage:y,previousPage:C,state:{pageIndex:k}}=Object(c.useTable)({columns:e,data:a,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:t},c.usePagination);return Object(n.useEffect)((()=>{d&&d({skip:10*k})}),[d,k]),u?g.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(s.bb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...j(),children:[Object(o.jsx)(s.eb,{children:p.map(((e,a)=>Object(o.jsx)(s.gb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,a)=>Object(o.jsx)(s.fb,{...e.getHeaderProps(),children:e.render("Header")},a)))},a)))}),Object(o.jsx)(s.cb,{...h(),children:g.map(((e,a)=>(O(e),Object(o.jsx)(s.gb,{...e.getRowProps(),children:e.cells.map(((e,a)=>Object(o.jsx)(s.db,{...e.getCellProps(),children:e.render("Cell")},a)))},a))))})]}),Object(o.jsxs)(s.o,{className:"d-flex justify-content-end align-items-center",children:[Object(o.jsx)(s.G,{className:"pe-2",children:b("go_to_page")+":"}),Object(o.jsx)(s.y,{min:1,max:t,type:"number",defaultValue:k+1,onChange:e=>{const a=e.target.value?Number(e.target.value)-1:0;v(a)},style:{width:"100px"}})]}),Object(o.jsxs)(s.T,{align:"center","aria-label":"Page navigation",children:[Object(o.jsx)(s.U,{"aria-label":"First",onClick:()=>v(0),disabled:!m,children:"<<"}),Object(o.jsx)(s.U,{"aria-label":"Previous",onClick:()=>C(),disabled:!m,children:"<"}),Object(o.jsxs)(s.U,{"aria-label":"Current",style:{pointerEvents:"none"},children:[b("page")," ",Object(o.jsx)("strong",{children:k+1})," of ",Object(o.jsx)("strong",{children:f.length})]}),Object(o.jsx)(s.U,{"aria-label":"Next",onClick:()=>y(),disabled:!x,children:">"}),Object(o.jsx)(s.U,{"aria-label":"Last",onClick:()=>v(t-1),disabled:!x,children:">>"})]})]}):Object(o.jsx)(s.n,{className:"d-flex justify-content-center",children:Object(o.jsxs)(s.G,{children:[b("nothing_there")," ",Object(o.jsx)(r.a,{icon:i})," "]})}):Object(o.jsx)(s.n,{className:"d-flex justify-content-center",children:Object(o.jsx)(s.ab,{color:"primary"})})}},392:function(e,a,t){"use strict";t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return l})),t.d(a,"d",(function(){return o})),t.d(a,"a",(function(){return d}));var c=t(367),s=t.n(c),n=t(366);const r="https://api.ekoop.id/v01";function i(e,a,t){return s.a.get(r+"/nasabah/nasabah?search="+a+"&status="+t+"&skip="+e,{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function l(e){return s.a.get(r+"/nasabah/nasabah/"+e,{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e,a){return s.a.put(r+"/nasabah/nasabah/"+e,{name:a.name,ktp_id:a.ktp_id,wa_number:a.wa_number,address:a.address,reason:a.reason,group:a.group,active:"true"===a.active},{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return s.a.post(r+"/nasabah/nasabah",e,{headers:Object(n.b)()}).then((e=>e.data)).catch((e=>e.response.data))}},404:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));const c=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=11.68176a0e.chunk.js.map