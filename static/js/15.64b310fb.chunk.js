(this.webpackJsonpekoop=this.webpackJsonpekoop||[]).push([[15],{1522:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(60),s=a(12),i=a(73),l=a(377),o=a(392),d=a(405),u=a(372),j=a(445),h=a(8);t.default=()=>{const{t:e}=Object(j.a)(),t=Object(s.g)(),[a,b]=Object(c.useState)(!1),[p,O]=Object(c.useState)([]),[x,m]=Object(c.useState)(""),[g,f]=Object(c.useState)(""),[v,y]=Object(c.useState)(""),[C,k]=Object(c.useState)(""),[w,_]=Object(c.useState)(0),P=Object(c.useRef)(0);function N(t){switch(t.toLowerCase()){case"active":return Object(h.jsx)(r.b,{className:"mt-1",color:"success",shape:"rounded-pill",children:e("active")});case"inactive":return Object(h.jsx)(r.b,{className:"mt-1",color:"secondary",shape:"rounded-pill",children:e("inactive")});default:return Object(h.jsx)(r.b,{className:"mt-1",color:"dark",shape:"rounded-pill",children:e("unknown")})}}const I=Object(c.useCallback)((a=>{let{skip:c}=a;++P.current===P.current&&(b(!1),Object(o.c)(c,x,g,v,C).then((a=>{var c;console.log(a);let n=Math.floor(a.pagination.total/a.pagination.limit);a.pagination.total/a.pagination.limit>w&&(n+=1),_(n),O(null===(c=a.data)||void 0===c?void 0:c.map((a=>({name:a.name,number:a.wa_number,role:i.c[a.role],status:N(a.status.toUpperCase()),action:Object(h.jsxs)(r.e,{color:"dark",size:"sm",onClick:()=>t.push("/users/"+a.id),children:[Object(h.jsx)(u.a,{icon:d.a,className:"me-1"}),e("edit")]})})))),b(!0)})))}),[t,x,g,v,C]),S=n.a.useMemo((()=>[{Header:e("name"),accessor:"name"},{Header:e("whatsapp"),accessor:"number"},{Header:e("role"),accessor:"role"},{Header:e("status"),accessor:"status"},{Header:e("action"),accessor:"action"}]),[e]);return Object(h.jsxs)(r.o,{children:[Object(h.jsxs)(r.V,{className:"align-items-center",children:[Object(h.jsxs)(r.n,{children:[Object(h.jsx)(r.z,{htmlFor:"searchInput",children:e("search")}),Object(h.jsx)(r.y,{type:"text",id:"searchInput",placeholder:e("enter_search_query"),onChange:e=>{m(e.target.value)}})]}),Object(h.jsxs)(r.n,{children:[Object(h.jsx)(r.z,{htmlFor:"statusInput",children:e("status")}),Object(h.jsxs)(r.A,{id:"statusInput",onChange:e=>{f(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:e("all")}),Object(h.jsx)("option",{value:"inactive",children:e("inactive")}),Object(h.jsx)("option",{value:"active",children:e("active")})]})]}),Object(h.jsxs)(r.n,{children:[Object(h.jsx)(r.z,{htmlFor:"roleInput",children:e("role")}),Object(h.jsxs)(r.A,{id:"roleInput",onChange:e=>{y(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:e("all")}),Object(h.jsx)("option",{value:"app-owner",children:e("app_owner")}),Object(h.jsx)("option",{value:"product-technical",children:e("product_technical")}),Object(h.jsx)("option",{value:"marketing-finance",children:e("marketing_finance")}),Object(h.jsx)("option",{value:"koperasi-owner",children:e("koperasi_owner")}),Object(h.jsx)("option",{value:"credit-analyst",children:e("credit_analyst")}),Object(h.jsx)("option",{value:"account-officer",children:e("account_officer")})]})]}),Object(h.jsxs)(r.n,{children:[Object(h.jsx)(r.z,{htmlFor:"sortInput",children:e("sort_by")}),Object(h.jsxs)(r.A,{id:"sortInput",onChange:e=>{k(e.target.value)},children:[Object(h.jsx)("option",{value:"name:asc",children:e("name")+" ("+e("ascending")+")"}),Object(h.jsx)("option",{value:"name:desc",children:e("name")+" ("+e("descending")+")"}),Object(h.jsx)("option",{value:"created_at:desc",children:e("created_new")}),Object(h.jsx)("option",{value:"created_at:asc",children:e("created_old")})]})]}),Object(h.jsx)(r.n,{className:"d-flex justify-content-end",children:Object(h.jsx)(r.e,{color:"primary",onClick:()=>t.push("/users/create"),children:e("add_new")})})]}),Object(h.jsx)("br",{}),Object(h.jsx)(r.V,{children:Object(h.jsx)(r.h,{children:Object(h.jsx)(r.i,{children:Object(h.jsx)(l.a,{columns:S,data:p,controlledPageCount:w,fetchData:I,hasLoaded:a})})})})]})}},377:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(382),n=a(60),r=a(0),s=a(372);const i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z' class='ci-primary'/><rect width='40' height='40' x='152' y='200' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='40' height='40' x='320' y='200' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,288a88.1,88.1,0,0,0-88,88h32a56,56,0,0,1,112,0h32A88.1,88.1,0,0,0,256,288Z' class='ci-primary'/>"];var l=a(445),o=a(8);function d(e){let{columns:t,data:a,controlledPageCount:d,fetchData:u,hasLoaded:j}=e;const{t:h}=Object(l.a)(),{getTableProps:b,getTableBodyProps:p,headerGroups:O,prepareRow:x,page:m,canPreviousPage:g,canNextPage:f,pageOptions:v,gotoPage:y,nextPage:C,previousPage:k,state:{pageIndex:w}}=Object(c.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:10},manualPagination:!0,pageCount:d},c.usePagination);return Object(r.useEffect)((()=>{u&&u({skip:10*w})}),[u,w]),j?m.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(n.bb,{hover:!0,responsive:!0,style:{minWidth:"45rem"},...b(),children:[Object(o.jsx)(n.eb,{children:O.map(((e,t)=>Object(o.jsx)(n.gb,{...e.getHeaderGroupProps(),children:e.headers.map(((e,t)=>Object(o.jsx)(n.fb,{...e.getHeaderProps(),children:e.render("Header")},t)))},t)))}),Object(o.jsx)(n.cb,{...p(),children:m.map(((e,t)=>(x(e),Object(o.jsx)(n.gb,{...e.getRowProps(),children:e.cells.map(((e,t)=>Object(o.jsx)(n.db,{...e.getCellProps(),children:e.render("Cell")},t)))},t))))})]}),Object(o.jsxs)(n.o,{className:"d-flex justify-content-end align-items-center",children:[Object(o.jsx)(n.G,{className:"pe-2",children:h("go_to_page")+":"}),Object(o.jsx)(n.y,{min:1,max:d,type:"number",defaultValue:w+1,onChange:e=>{const t=e.target.value?Number(e.target.value)-1:0;y(t)},style:{width:"100px"}})]}),Object(o.jsxs)(n.T,{align:"center","aria-label":"Page navigation",children:[Object(o.jsx)(n.U,{"aria-label":"First",onClick:()=>y(0),disabled:!g,children:"<<"}),Object(o.jsx)(n.U,{"aria-label":"Previous",onClick:()=>k(),disabled:!g,children:"<"}),Object(o.jsxs)(n.U,{"aria-label":"Current",style:{pointerEvents:"none"},children:[h("page")," ",Object(o.jsx)("strong",{children:w+1})," of ",Object(o.jsx)("strong",{children:v.length})]}),Object(o.jsx)(n.U,{"aria-label":"Next",onClick:()=>C(),disabled:!f,children:">"}),Object(o.jsx)(n.U,{"aria-label":"Last",onClick:()=>y(d-1),disabled:!f,children:">>"})]})]}):Object(o.jsx)(n.n,{className:"d-flex justify-content-center",children:Object(o.jsxs)(n.G,{children:[h("nothing_there")," ",Object(o.jsx)(s.a,{icon:i})," "]})}):Object(o.jsx)(n.n,{className:"d-flex justify-content-center",children:Object(o.jsx)(n.ab,{color:"primary"})})}},392:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return d}));var c=a(368),n=a.n(c),r=a(367);const s="https://api.ekoop.id/v01";function i(e,t,a,c,i){return n.a.get(s+"/auth/user?search="+t+"&status="+a+"&role="+c+"&sort="+i+"&skip="+e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>{if(console.log(e.message),403===e.response.status)return console.log(e.message),null}))}function l(e){return n.a.get(s+"/auth/user/"+e,{headers:Object(r.b)()}).then((e=>e.data.data)).catch((e=>{if(403===e.response.status)return console.log(e.message),null}))}function o(e){return n.a.put(s+"/auth/user/"+e.id,{wa_number:e.wa_number,name:e.name,address:e.address,role:e.role,status:e.status},{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}function d(e){return n.a.post(s+"/auth/user",e,{headers:Object(r.b)()}).then((e=>e.data)).catch((e=>e.response.data))}},405:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));const c=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=15.64b310fb.chunk.js.map