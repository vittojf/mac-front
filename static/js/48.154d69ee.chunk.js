(this.webpackJsonpMac=this.webpackJsonpMac||[]).push([[48],{1031:function(e,t,r){"use strict";r.r(t);var a=r(15),n=r(0),c=r(29),s=r(36),o=r(142),i=r(473),l=r(547),d=r(932),u=r(550),b=r(665),j=r(555),p=r(551),h=r(23),x=r(88),O=r(143),v=r(548),m=r(549),f=r(536),y=r(545),g=r(734),w=r(1036),k=r(1037),C=r(1038),R=r(1039),D=r(898),P=r(1),M=["driver"],S=function(e){var t=e.driver,r=Object(x.a)(e,M),a=new D.a;return Object(P.jsxs)(d.a,Object(h.a)(Object(h.a)({container:!0,spacing:3},r),{},{children:[Object(P.jsx)(d.a,{item:!0,lg:4,md:6,xl:3,xs:12,children:Object(P.jsx)(v.a,{children:Object(P.jsx)(m.a,{children:Object(P.jsxs)(i.a,{sx:{alignItems:"center",display:"flex",flexDirection:"column",textAlign:"center"},children:[Object(P.jsx)(i.a,{sx:{p:1,border:function(e){return"1px dashed ".concat(e.palette.divider)},borderRadius:"50%"},children:Object(P.jsx)(f.a,{src:t.image,sx:{height:100,width:100}})}),Object(P.jsx)(u.a,{color:"textPrimary",sx:{mt:1,mb:1},variant:"h5",children:t.name}),Object(P.jsxs)(u.a,{color:"textSecondary",variant:"body2",children:["Rango:"," ",Object(P.jsx)(j.a,{color:"primary",component:s.b,to:"/dashboard/account",children:"Driver"})]}),Object(P.jsx)(y.a,{color:"primary",sx:{m:1},component:s.b,variant:"contained",to:"/dashboard/drivers",onClick:function(e){var r=t.id,n={status_id:e};a.updateStatusDriver(r,n).then((function(){O.b.success("Driver aceptado!")})).catch((function(e){O.b.error("Ha ocurrido un error!"),console.log(e)}))},children:"Aceptar Driver"})]})})})}),Object(P.jsx)(d.a,{item:!0,lg:8,md:6,xl:9,xs:12,children:Object(P.jsxs)(v.a,{children:[Object(P.jsx)(g.a,{title:"Detalle del Driver"}),Object(P.jsx)(p.a,{}),Object(P.jsx)(m.a,{children:Object(P.jsx)(w.a,{children:Object(P.jsxs)(k.a,{children:[Object(P.jsxs)(C.a,{children:[Object(P.jsx)(R.a,{children:Object(P.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:"Nombre"})}),Object(P.jsx)(R.a,{children:Object(P.jsx)(u.a,{color:"textSecondary",variant:"body2",children:"".concat(t.name," ").concat(t.lastname)})})]}),Object(P.jsxs)(C.a,{children:[Object(P.jsx)(R.a,{children:Object(P.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:"Direcci\xf3n"})}),Object(P.jsx)(R.a,{children:Object(P.jsx)(u.a,{color:"textSecondary",variant:"body2",children:"N/A"})})]}),Object(P.jsxs)(C.a,{children:[Object(P.jsx)(R.a,{children:Object(P.jsx)(u.a,{color:"textPrimary",variant:"subtitle2",children:"Terminos y Condiciones"})}),Object(P.jsx)(R.a,{children:Object(P.jsx)(u.a,{color:"textSecondary",variant:"body2",children:t.flag_terms_accepte?"Aceptado":"Rechazado"})})]})]})})})]})})]}))},N=r(216),B=r(217),T=r(141);t.default=function(){var e=Object(N.a)().settings,t=new D.a,r=Object(n.useState)({}),h=Object(a.a)(r,2),x=h[0],O=h[1],v=Object(c.h)().id;return Object(n.useEffect)((function(){t.getUserById(v).then((function(e){O(e.data)})).catch((function(e){console.log(e)})),T.a.push({event:"page_view"})}),[]),Object.keys(x).length>0?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(o.a,{children:Object(P.jsx)("title",{children:"Dashboard: Detalles del Driver | Mac"})}),Object(P.jsx)(i.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(P.jsxs)(l.a,{maxWidth:!!e.compact&&"xl",children:[Object(P.jsx)(d.a,{container:!0,justifyContent:"space-between",spacing:3,children:Object(P.jsxs)(d.a,{item:!0,children:[Object(P.jsx)(u.a,{color:"textPrimary",variant:"h5",children:"Detalle del Driver"}),Object(P.jsxs)(b.a,{"aria-label":"breadcrumb",separator:Object(P.jsx)(B.a,{fontSize:"small"}),sx:{mt:1},children:[Object(P.jsx)(j.a,{color:"textPrimary",component:s.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(P.jsx)(j.a,{color:"textPrimary",component:s.b,to:"/dashboard/drivers",variant:"subtitle2",children:"Listado de Drivers"}),Object(P.jsx)(u.a,{color:"textSecondary",variant:"subtitle2",children:"Detalle del Driver"})]})]})}),Object(P.jsx)(p.a,{}),Object(P.jsx)(i.a,{sx:{mt:3},children:Object(P.jsx)(S,{driver:x})})]})})]}):null}},665:function(e,t,r){"use strict";var a=r(33),n=r(15),c=r(4),s=r(6),o=r(2),i=r(0),l=(r(128),r(11)),d=r(515),u=r(7),b=r(13),j=r(550),p=r(26),h=r(31),x=r(1),O=Object(h.a)(Object(x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=r(532),m=Object(u.a)(v.a,{},{skipSx:!0})((function(e){var t=e.theme;return Object(o.a)({display:"flex",marginLeft:t.spacing(.5),marginRight:t.spacing(.5)},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(o.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(o.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(p.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(p.c)(t.palette.grey[600],.12)})})})),f=Object(u.a)(O)({width:24,height:16});var y=function(e){var t=e;return Object(x.jsx)("li",{children:Object(x.jsx)(m,Object(o.a)({focusRipple:!0},e,{styleProps:t,children:Object(x.jsx)(f,{styleProps:t})}))})},g=r(475),w=r(516);function k(e){return Object(g.a)("MuiBreadcrumbs",e)}var C=Object(w.a)("MuiBreadcrumbs",["root","ol","li","separator"]),R=Object(u.a)(j.a,{},{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return Object(o.a)(Object(c.a)({},"& .".concat(C.li),t.li),t.root)}})({}),D=Object(u.a)("ol",{},{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=Object(u.a)("li",{},{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,t,r,a){return e.reduce((function(n,c,s){return s<e.length-1?n=n.concat(c,Object(x.jsx)(P,{"aria-hidden":!0,className:t,styleProps:a,children:r},"separator-".concat(s))):n.push(c),n}),[])}var S=i.forwardRef((function(e,t){var r=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),c=r.children,u=r.className,j=r.component,p=void 0===j?"nav":j,h=r.expandText,O=void 0===h?"Show path":h,v=r.itemsAfterCollapse,m=void 0===v?1:v,f=r.itemsBeforeCollapse,g=void 0===f?1:f,w=r.maxItems,C=void 0===w?8:w,P=r.separator,S=void 0===P?"/":P,N=Object(s.a)(r,["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),B=i.useState(!1),T=Object(n.a)(B,2),A=T[0],H=T[1],I=Object(o.a)({},r,{component:p,expanded:A,expandText:O,itemsAfterCollapse:m,itemsBeforeCollapse:g,maxItems:C,separator:S}),z=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(I),L=i.useRef(null),U=i.Children.toArray(c).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return Object(x.jsx)("li",{className:z.li,children:e},"child-".concat(t))}));return Object(x.jsx)(R,Object(o.a)({ref:t,component:p,color:"text.secondary",className:Object(l.a)(z.root,u),styleProps:I},N,{children:Object(x.jsx)(D,{className:z.ol,ref:L,styleProps:I,children:M(A||C&&U.length<=C?U:function(e){return g+m>=e.length?e:[].concat(Object(a.a)(e.slice(0,g)),[Object(x.jsx)(y,{"aria-label":O,onClick:function(){H(!0);var e=L.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(a.a)(e.slice(e.length-m,e.length)))}(U),z.separator,S,I)})}))}));t.a=S},734:function(e,t,r){"use strict";var a=r(4),n=r(6),c=r(2),s=r(0),o=r(11),i=r(515),l=r(550),d=r(13),u=r(7),b=r(475),j=r(516);function p(e){return Object(b.a)("MuiCardHeader",e)}var h=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=r(1),O=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var r;return Object(c.a)((r={},Object(a.a)(r,"& .".concat(h.title),t.title),Object(a.a)(r,"& .".concat(h.subheader),t.subheader),r),t.root)}})({display:"flex",alignItems:"center",padding:16}),v=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),m=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(u.a)("div",{},{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=s.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiCardHeader"}),a=r.action,s=r.avatar,u=r.className,b=r.component,j=void 0===b?"div":b,h=r.disableTypography,y=void 0!==h&&h,g=r.subheader,w=r.subheaderTypographyProps,k=r.title,C=r.titleTypographyProps,R=Object(n.a)(r,["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),D=Object(c.a)({},r,{component:j,disableTypography:y}),P=function(e){var t=e.classes;return Object(i.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(D),M=k;null==M||M.type===l.a||y||(M=Object(x.jsx)(l.a,Object(c.a)({variant:s?"body2":"h5",className:P.title,component:"span",display:"block"},C,{children:M})));var S=g;return null==S||S.type===l.a||y||(S=Object(x.jsx)(l.a,Object(c.a)({variant:s?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:S}))),Object(x.jsxs)(O,Object(c.a)({className:Object(o.a)(P.root,u),as:j,ref:t,styleProps:D},R,{children:[s&&Object(x.jsx)(v,{className:P.avatar,styleProps:D,children:s}),Object(x.jsxs)(f,{className:P.content,styleProps:D,children:[M,S]}),a&&Object(x.jsx)(m,{className:P.action,styleProps:D,children:a})]}))}));t.a=y},898:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(22),n=r(19),c=r(18),s=r(12),o=r.n(s),i=r(219),l=r.n(i),d=r(145),u=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,[{key:"ws",get:function(){var e=new d.a;return l.a.create({baseURL:e.URL_DEV,headers:e.headerToken()})}},{key:"getAllDrivers",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/drivers",e.next=3,this.ws.get("/drivers");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllUsers",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/users",e.next=3,this.ws.get("/users");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDriverById",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/drivers/".concat(t),e.next=3,this.ws.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUserById",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/users/".concat(t),e.next=3,this.ws.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateStatusDriver",value:function(){var e=Object(a.a)(o.a.mark((function e(t,r){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/users/".concat(t),e.next=3,this.ws.put(a,r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=48.154d69ee.chunk.js.map