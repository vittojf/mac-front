(this.webpackJsonpMac=this.webpackJsonpMac||[]).push([[21],{1016:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(142),n=a(473),s=a(547),i=a(932),l=a(550),o=a(545),d=a(216),j=a(630),x=a(141),b=a(15),h=a(23),O=a(103),u=a(179),p=a(964),m=a(548),v=a(734),f=a(543),g=a(485),y=a(553),w=a(536),k=a(554),C=a(533),S=a(912),z=a(1),M=[{id:"b91cbe81ee3efefba6b915a7",content:"Hola, estoy entregando el pedido",date:Object(O.a)(new Date,2),senderAvatar:"/static/mock-images/avatars/avatar-alcides_antonio.png",senderName:"Alcides Antonio"},{id:"de0eb1ac517aae1aa57c0b7e",content:"Hola, me gustaria saber mis ganancias esta semana",date:Object(O.a)(new Date,56),senderAvatar:"/static/mock-images/avatars/avatar-marcus_finn.png",senderName:"Marcus Finn"},{id:"38e2b0942c90d0ad724e6f40",content:"Como puedo recargar saldo?",date:Object(u.a)(Object(O.a)(new Date,23),3),senderAvatar:"/static/mock-images/avatars/avatar-carson_darrin.png",senderName:"Carson Darrin"},{id:"467505f3356f25a69f4c4890",content:"Me gustaria comunicarme con el cliente",date:Object(u.a)(Object(O.a)(new Date,6),8),senderAvatar:"/static/mock-images/avatars/avatar-fran_perez.png",senderName:"Fran Perez"},{id:"7e6af808e801a8361ce4cf8b",content:"Necesito mas informaci\xf3n sobre mis ganancias",date:Object(u.a)(Object(O.a)(new Date,18),10),senderAvatar:"/static/mock-images/avatars/avatar-jie_yan_song.png",senderName:"Carlos Perez"}],P=function(e){return Object(z.jsxs)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(z.jsx)(v.a,{title:"Chat Conductores"}),Object(z.jsx)(f.a,{disablePadding:!0,children:M.map((function(e,t){return Object(z.jsx)(n.a,{children:Object(z.jsxs)(g.b,{divider:t+1<M.length,children:[Object(z.jsx)(y.a,{children:Object(z.jsx)(w.a,{alt:e.senderName,src:e.senderAvatar})}),Object(z.jsx)(k.a,{disableTypography:!0,primary:0===t?Object(z.jsx)(C.a,{color:"primary",sx:{".MuiBadge-badge":{right:-16,top:11}},variant:"dot",children:Object(z.jsx)(l.a,{color:"textPrimary",variant:"subtitle2",children:e.senderName})}):Object(z.jsx)(l.a,{color:"textPrimary",variant:"subtitle2",children:e.senderName}),secondary:Object(z.jsxs)(n.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[Object(z.jsx)(l.a,{color:"textSecondary",sx:{overflow:"hidden",pr:2,textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"body2",children:e.content}),Object(z.jsx)(l.a,{color:"textSecondary",variant:"caption",children:"".concat(Object(p.a)(e.date,{addSuffix:!0}))})]})})]})},e.id)}))}),Object(z.jsx)(S.a,{children:Object(z.jsx)(o.a,{color:"primary",variant:"text",children:"ir al chat"})})]}))},R=a(480),B=a(291),A=a(584),I=a.n(A),D=a(1036),T=a(1037),H=a(1038),L=a(1039),V=[{id:"d46800328cd510a668253b45",amount:25,currency:"usd",date:new Date,sender:"Macuto",type:"receive"},{id:"b4b19b21656e44b487441c50",amount:6,currency:"usd",date:Object(R.a)(new Date,1),sender:"Traki",type:"receive"},{id:"56c09ad91f6d44cb313397db",amount:91,currency:"usd",date:Object(R.a)(new Date,1),sender:"Zara",type:"receive"},{id:"aaeb96c5a131a55d9623f44d",amount:49,currency:"usd",date:Object(R.a)(new Date,3),sender:"Nike",type:"receive"}],W=function(e){return Object(z.jsxs)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(z.jsx)(v.a,{title:"\xdaltimas \xd3rdenes"}),Object(z.jsx)(D.a,{children:Object(z.jsx)(T.a,{children:V.map((function(e){return Object(z.jsxs)(H.a,{sx:{"&:last-child td":{border:0}},children:[Object(z.jsx)(L.a,{width:100,children:Object(z.jsxs)(n.a,{sx:{p:1},children:[Object(z.jsx)(l.a,{align:"center",color:"textSecondary",variant:"subtitle2",children:Object(B.a)(e.date,"LLL").toUpperCase()}),Object(z.jsx)(l.a,{align:"center",color:"textSecondary",variant:"h6",children:Object(B.a)(e.date,"d")})]})}),Object(z.jsx)(L.a,{children:Object(z.jsxs)("div",{children:[Object(z.jsx)(l.a,{color:"textPrimary",variant:"subtitle2",children:e.sender}),Object(z.jsx)(l.a,{color:"textSecondary",variant:"body2",children:"receive"===e.type?"Payment received":"Payment sent"})]})}),Object(z.jsxs)(L.a,{align:"right",children:[Object(z.jsxs)(l.a,{color:"receive"===e.type?"success.main":"error.main",variant:"subtitle2",children:["receive"===e.type?"+":"-"," ",I()(e.amount).format("$0,0.00")]}),Object(z.jsx)(l.a,{color:"textSecondary",variant:"body2",children:e.currency.toUpperCase()})]})]},e.id)}))})})]}))},_=a(735),N=a.n(_),F=a(549),G=a(551),E=a(48),U=a(26),$=a(570),J=a(233),X=function(e){var t=Object(E.a)(),a={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#27c6db"],labels:[""],plotOptions:{radialBar:{dataLabels:{value:{show:!1}},hollow:{size:"60%"},track:{background:t.palette.background.default}}},theme:{mode:t.palette.mode}};return Object(z.jsxs)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(z.jsxs)(F.a,{sx:{display:"flex",alignItems:"center"},children:[Object(z.jsx)(N.a,{height:"160",options:a,series:[83],type:"radialBar",width:"160"}),Object(z.jsxs)(n.a,{sx:{display:"flex",flex:1},children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(l.a,{color:"textPrimary",variant:"h4",children:I()(215e4).format("$0,0.00")}),Object(z.jsx)(l.a,{color:"textPrimary",sx:{mt:1},variant:"subtitle2",children:"Ganancias Totales"})]}),Object(z.jsx)(n.a,{sx:{flexGrow:1}}),Object(z.jsx)(w.a,{sx:{backgroundColor:Object(U.a)(t.palette.error.main,.08),color:"error.main"},variant:"rounded",children:Object(z.jsx)(J.a,{fontSize:"small"})})]})]}),Object(z.jsx)(G.a,{}),Object(z.jsx)(S.a,{children:Object(z.jsx)(o.a,{color:"primary",endIcon:Object(z.jsx)($.a,{fontSize:"small"}),variant:"text",children:"Detalles"})})]}))},Z=[{amount:21500,color:"#6C76C4",name:"Macuto"},{amount:15300,color:"#33BB78",name:"Traki"},{amount:1076.81,color:"#FF4081",name:"Zara"}],q=function(e){return Object(z.jsxs)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(z.jsx)(v.a,{subheader:Object(z.jsx)(l.a,{color:"textPrimary",variant:"h4",children:I()(3787681).format("$0,0.00")}),sx:{pb:0},title:Object(z.jsx)(l.a,{color:"textSecondary",variant:"overline",children:"Balance Total"})}),Object(z.jsxs)(F.a,{children:[Object(z.jsx)(G.a,{sx:{mb:2}}),Object(z.jsx)(l.a,{color:"textSecondary",variant:"overline",children:"Saldo de Tiendas"}),Object(z.jsx)(f.a,{disablePadding:!0,sx:{pt:2},children:Z.map((function(e){return Object(z.jsx)(g.b,{disableGutters:!0,sx:{pb:2,pt:0},children:Object(z.jsx)(k.a,{disableTypography:!0,primary:Object(z.jsxs)(n.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(z.jsx)(C.a,{anchorOrigin:{vertical:"top",horizontal:"left"},variant:"dot",sx:{pl:"20px","& .MuiBadge-badge":{backgroundColor:e.color,left:6,top:11}},children:Object(z.jsx)(l.a,{color:"textPrimary",variant:"subtitle2",children:e.name})}),Object(z.jsx)(l.a,{color:"textSecondary",variant:"subtitle2",children:I()(e.amount).format("$0,0.00")})]})})},e.name)}))}),Object(z.jsx)(G.a,{}),Object(z.jsx)(n.a,{sx:{alignItems:"flex-start",display:"flex",flexDirection:"column",pt:2},children:Object(z.jsx)(o.a,{color:"primary",endIcon:Object(z.jsx)($.a,{fontSize:"small"}),variant:"text",children:"Detalles"})})]})]}))},K=a(213),Q={series:[{data:[12,24,36,48,60,72,84]},{data:[12,24,36,48,60,72,84]},{data:[12,24,36,48,60,72,84]}],categories:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"]},Y=function(e){var t=Object(E.a)(),a={chart:{background:"transparent",stacked:!0,toolbar:{show:!1}},colors:["#3C4693","#7783DB","#7783DB"],dataLabels:{enabled:!1},grid:{borderColor:t.palette.divider,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},legend:{show:!1},stroke:{colors:["transparent"],show:!0,width:2},theme:{mode:t.palette.mode},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},categories:Q.categories,labels:{style:{colors:t.palette.text.secondary}}},yaxis:{labels:{offsetX:-12,style:{colors:t.palette.text.secondary}}}},r=Q.series;return Object(z.jsxs)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(z.jsx)(v.a,{subheader:Object(z.jsx)(l.a,{color:"textSecondary",variant:"body2",children:Object(B.a)(new Date,"MMM yyyy")}),title:"Total de \xf3rdenes por mes"}),Object(z.jsx)(K.a,{children:Object(z.jsx)(n.a,{sx:{height:336,minWidth:500,px:2},children:Object(z.jsx)(N.a,{height:"300",options:a,series:r,type:"bar"})})})]}))},ee=a(31),te=Object(ee.a)(Object(z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(z.jsx)("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),"ChevronUp"),ae=function(e){var t=Object(E.a)(),a={chart:{background:"transparent",stacked:!1,toolbar:{show:!1}},colors:["#27c6db"],labels:[""],plotOptions:{radialBar:{dataLabels:{value:{show:!1}},hollow:{size:"60%"},track:{background:t.palette.background.default}}},theme:{mode:t.palette.mode}};return Object(z.jsxs)(m.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(z.jsxs)(F.a,{sx:{alignItems:"center",display:"flex"},children:[Object(z.jsx)(N.a,{height:"160",options:a,series:[60],type:"radialBar",width:"160"}),Object(z.jsxs)(n.a,{sx:{display:"flex",flex:1},children:[Object(z.jsxs)("div",{children:[Object(z.jsx)(l.a,{color:"primary",variant:"h4",children:"$50.000"}),Object(z.jsx)(l.a,{color:"textPrimary",sx:{mt:1},variant:"subtitle2",children:"Ganancias de la Semana"})]}),Object(z.jsx)(n.a,{sx:{flexGrow:1}}),Object(z.jsx)(w.a,{sx:{backgroundColor:Object(U.a)(t.palette.success.main,.08),color:"success.main"},variant:"rounded",children:Object(z.jsx)(te,{fontSize:"small"})})]})]}),Object(z.jsx)(G.a,{}),Object(z.jsx)(S.a,{children:Object(z.jsx)(o.a,{color:"primary",endIcon:Object(z.jsx)($.a,{fontSize:"small"}),variant:"text",children:"Detalles"})})]}))},re=a(88),ce=["vehiclesCon","vehiclesWork","clients","orders"],ne=function(e){var t=e.vehiclesCon,a=e.vehiclesWork,r=e.clients,c=e.orders,s=Object(re.a)(e,ce);return Object(z.jsx)(n.a,Object(h.a)(Object(h.a)({sx:{backgroundColor:"background.default",p:3}},s),{},{children:Object(z.jsx)(m.a,{children:Object(z.jsxs)(i.a,{alignItems:"center",container:!0,justifyContent:"space-between",children:[Object(z.jsxs)(i.a,{item:!0,md:3,sm:6,xs:12,sx:{borderRight:function(e){return{md:"1px solid ".concat(e.palette.divider)}},borderBottom:function(e){return{md:"none",xs:"1px solid ".concat(e.palette.divider)}},p:3,textAlign:"center"},children:[Object(z.jsx)(l.a,{color:"textPrimary",variant:"h5",children:t}),Object(z.jsx)(l.a,{color:"textSecondary",sx:{mt:1},variant:"overline",children:"Tiendas"})]}),Object(z.jsxs)(i.a,{item:!0,md:3,sm:6,xs:12,sx:{borderRight:function(e){return{md:"1px solid ".concat(e.palette.divider)}},borderBottom:function(e){return{md:"none",xs:"1px solid ".concat(e.palette.divider)}},p:3,textAlign:"center"},children:[Object(z.jsx)(l.a,{color:"textPrimary",variant:"h5",children:a}),Object(z.jsx)(l.a,{color:"textSecondary",sx:{mt:1},variant:"overline",children:"Drivers"})]}),Object(z.jsxs)(i.a,{item:!0,md:3,sm:6,xs:12,sx:{borderRight:function(e){return{md:"1px solid ".concat(e.palette.divider)}},borderBottom:function(e){return{sm:"none",xs:"1px solid ".concat(e.palette.divider)}},p:3,textAlign:"center"},children:[Object(z.jsx)(l.a,{color:"textPrimary",variant:"h5",children:r}),Object(z.jsx)(l.a,{color:"textSecondary",sx:{mt:1},variant:"overline",children:"Clientes"})]}),Object(z.jsxs)(i.a,{item:!0,md:3,sm:6,xs:12,sx:{p:3,textAlign:"center"},children:[Object(z.jsx)(n.a,{sx:{alignItems:"center",display:"flex",justifyContent:"center"},children:Object(z.jsx)(l.a,{color:"textPrimary",component:"span",variant:"h5",children:c})}),Object(z.jsx)(l.a,{color:"textSecondary",sx:{mt:1},variant:"overline",children:"\xd3rdenes Activas"})]})]})})}))},se=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){x.a.push({event:"page_view"}),c(!1)}),[]),Object(z.jsxs)(z.Fragment,{children:[!a&&Object(z.jsx)(i.a,{item:!0,md:12,xs:12,children:Object(z.jsx)(ne,{vehiclesCon:5,vehiclesWork:6,clients:10,orders:10})}),Object(z.jsx)(i.a,{item:!0,md:6,xs:12,children:Object(z.jsx)(ae,{})}),Object(z.jsx)(i.a,{item:!0,md:6,xs:12,children:Object(z.jsx)(X,{})}),Object(z.jsx)(i.a,{item:!0,md:8,xs:12,children:Object(z.jsx)(Y,{})}),Object(z.jsx)(i.a,{item:!0,md:4,xs:12,children:Object(z.jsx)(q,{})}),Object(z.jsx)(i.a,{item:!0,md:8,xs:12,children:Object(z.jsx)(W,{})}),Object(z.jsx)(i.a,{item:!0,md:4,xs:12,children:Object(z.jsx)(P,{})})]})},ie=a(22),le=a(12),oe=a.n(le),de=a(1042),je=a(581),xe=a(742),be=a(666),he=function(){return Object(z.jsx)(n.a,{sx:{backgroundColor:"background.default",p:3},children:Object(z.jsxs)(i.a,{container:!0,spacing:3,children:[Object(z.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(z.jsxs)(m.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",p:3},children:[Object(z.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(z.jsx)(l.a,{color:"textSecondary",gutterBottom:!0,variant:"overline",children:"GANANCIA SEMANAL"}),Object(z.jsxs)(n.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap"},children:[Object(z.jsx)(l.a,{color:"textPrimary",sx:{mr:1},variant:"h5",children:"$24,000"}),Object(z.jsx)(je.a,{color:"success",children:"4%"})]})]}),Object(z.jsx)(w.a,{sx:{backgroundColor:"primary.main",color:"primary.contrastText",height:48,width:48},children:Object(z.jsx)(xe.a,{fontSize:"small"})})]})}),Object(z.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(z.jsxs)(m.a,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",p:3},children:[Object(z.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(z.jsx)(l.a,{color:"textSecondary",gutterBottom:!0,variant:"overline",children:"Clientes"}),Object(z.jsx)(n.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap"},children:Object(z.jsx)(l.a,{color:"textPrimary",sx:{mr:1},variant:"h5",children:"12"})})]}),Object(z.jsx)(w.a,{sx:{backgroundColor:"primary.main",color:"primary.contrastText",height:48,width:48},children:Object(z.jsx)(be.a,{fontSize:"small"})})]})}),Object(z.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(z.jsxs)(m.a,{sx:{p:3},children:[Object(z.jsx)(l.a,{color:"textSecondary",gutterBottom:!0,variant:"overline",children:"Perfil"}),Object(z.jsxs)(n.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap"},children:[Object(z.jsx)(l.a,{color:"textPrimary",sx:{mr:1},variant:"h5",children:"74%"}),Object(z.jsx)(n.a,{sx:{flexGrow:1},children:Object(z.jsx)(de.a,{color:"primary",value:74,variant:"determinate"})})]})]})}),Object(z.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(z.jsxs)(m.a,{sx:{alignItems:"center",backgroundColor:"primary.main",color:"primary.contrastText",display:"flex",justifyContent:"space-between",p:3},children:[Object(z.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(z.jsx)(l.a,{color:"inherit",gutterBottom:!0,variant:"overline",children:"Ganancia Mensual"}),Object(z.jsx)(n.a,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(z.jsx)(l.a,{color:"inherit",variant:"h5",children:"$25.50"})})]}),Object(z.jsx)(w.a,{sx:{backgroundColor:"primary.contrastText",color:"primary.main",height:48,width:48},children:Object(z.jsx)(xe.a,{fontSize:"small"})})]})})]})})},Oe=a(895),ue=a(919),pe=a(89),me=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],n=new Oe.a,s=Object(r.useState)([]),l=Object(b.a)(s,2),o=l[0],d=l[1],j=Object(pe.a)();Object(r.useEffect)((function(){x.a.push({event:"page_view"}),c(!1)}),[]);var h=Object(r.useCallback)(Object(ie.a)(oe.a.mark((function e(){var t;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,n.getAllOrders();case 4:t=e.sent,console.log(t),d(t),j.current&&(console.log(t),d(t)),c(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),[j]);return Object(r.useEffect)((function(){h()}),[h]),Object(z.jsxs)(z.Fragment,{children:[!a&&Object(z.jsx)(i.a,{item:!0,md:12,xs:12,children:Object(z.jsx)(he,{})}),Object(z.jsx)(i.a,{item:!0,md:12,xs:12,children:!a&&Object(z.jsx)(ue.a,{orders:o})})]})},ve=a(36);t.default=function(){var e=Object(d.a)().settings,t=localStorage.getItem("rank_id"),a="";return"ADM"===t?a="Nueva Tienda":"STR"===t&&(a="Crear Orden"),Object(r.useEffect)((function(){x.a.push({event:"page_view"})}),[]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(c.a,{children:Object(z.jsx)("title",{children:"Dashboard: Resumen | Mac Admin"})}),Object(z.jsx)(n.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(z.jsx)(s.a,{maxWidth:!!e.compact&&"xl",children:Object(z.jsxs)(i.a,{container:!0,spacing:3,children:[Object(z.jsxs)(i.a,{alignItems:"center",container:!0,justifyContent:"space-between",spacing:3,item:!0,xs:12,children:[Object(z.jsxs)(i.a,{item:!0,children:[Object(z.jsx)(l.a,{color:"textSecondary",variant:"overline",children:"Resumen"}),Object(z.jsxs)(l.a,{color:"textPrimary",variant:"h5",children:["Buenos dias"," ",localStorage.getItem("name")]}),Object(z.jsx)(l.a,{color:"textSecondary",variant:"subtitle2",children:"Aqu\xed encontraras un resumen del d\xeda de hoy"})]}),Object(z.jsx)(i.a,{item:!0,children:Object(z.jsx)(o.a,{color:"primary",startIcon:Object(z.jsx)(j.a,{fontSize:"small"}),variant:"contained",component:ve.b,to:"/dashboard/store/order/create",children:a})})]}),"ADM"===t&&Object(z.jsx)(se,{}),"STO"===t&&Object(z.jsx)(me,{})]})})})]})}},570:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=n},581:function(e,t,a){"use strict";var r=a(23),c=a(88),n=a(7),s=a(1),i=["color","children"],l=Object(n.a)("span")((function(e){var t=e.theme,a=e.styleProps,r=t.palette[a.color].main,c=t.palette[a.color].contrastText;return{alignItems:"center",backgroundColor:r,borderRadius:t.shape.borderRadius,color:c,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(11),fontWeight:t.typography.fontWeightMedium,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingBottom:t.spacing(.5),paddingLeft:t.spacing(1),paddingRight:t.spacing(1),paddingTop:t.spacing(.5),textTransform:"uppercase",whiteSpace:"nowrap"}}));t.a=function(e){var t=e.color,a=void 0===t?"primary":t,n=e.children,o=Object(c.a)(e,i),d={color:a};return Object(s.jsx)(l,Object(r.a)(Object(r.a)({styleProps:d},o),{},{children:n}))}},583:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=n},589:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal");t.a=n},591:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z",clipRule:"evenodd"})]}),"PencilAlt");t.a=n},592:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})}),"DocumentText");t.a=n},593:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),Object(c.jsx)("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})]}),"Duplicate");t.a=n},609:function(e,t,a){"use strict";var r=a(23),c=a(15),n=a(0),s=a(552),i=a(546),l=a(292),o=a(934),d=a(907),j=a(554),x=a(610),b=a(592),h=a(589),O=a(583),u=a(593),p=a(1),m=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(!1),m=Object(c.a)(a,2),v=m[0],f=m[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{title:"More options",children:Object(p.jsx)(i.a,Object(r.a)(Object(r.a)({onClick:function(){f(!0)},ref:t},e),{},{children:Object(p.jsx)(h.a,{fontSize:"small"})}))}),Object(p.jsxs)(l.a,{anchorEl:t.current,anchorOrigin:{horizontal:"left",vertical:"top"},onClose:function(){f(!1)},open:v,PaperProps:{sx:{maxWidth:"100%",width:256}},transformOrigin:{horizontal:"left",vertical:"top"},children:[Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(O.a,{fontSize:"small"})}),Object(p.jsx)(j.a,{primary:"Import"})]}),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(b.a,{fontSize:"small"})}),Object(p.jsx)(j.a,{primary:"Export"})]}),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(u.a,{fontSize:"small"})}),Object(p.jsx)(j.a,{primary:"Copy"})]}),Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{children:Object(p.jsx)(x.a,{fontSize:"small"})}),Object(p.jsx)(j.a,{primary:"Archive"})]})]})]})};t.a=Object(n.memo)(m)},610:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",clipRule:"evenodd"})]}),"Archive");t.a=n},611:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}),"Trash");t.a=n},630:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=n},666:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),"User");t.a=n},669:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),"X");t.a=n},733:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(c.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check");t.a=n},742:function(e,t,a){"use strict";var r=a(31),c=a(1),n=Object(r.a)(Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(c.jsx)("path",{d:"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}),Object(c.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",clipRule:"evenodd"})]}),"CurrencyDollar");t.a=n},895:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(22),c=a(19),n=a(18),s=a(12),i=a.n(s),l=a(219),o=a.n(l),d=a(145),j=function(){function e(){Object(c.a)(this,e)}return Object(n.a)(e,[{key:"ws",get:function(){var e=new d.a;return o.a.create({baseURL:e.URL_DEV,headers:e.headerToken()})}},{key:"getAllOrders",value:function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/deliveries",e.next=3,this.ws.get("/deliveries");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getOrderById",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="/deliveries/".concat(t),e.next=3,this.ws.get(a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createOrder",value:function(){var e=Object(r.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/deliveries",e.next=3,this.ws.post("/deliveries",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},919:function(e,t,a){"use strict";var r=a(23),c=a(33),n=a(15),s=a(88),i=a(0),l=a(36),o=a(548),d=a(734),j=a(551),x=a(473),b=a(1036),h=a(1040),O=a(1038),u=a(1039),p=a(671),m=a(1037),v=a(555),f=a(550),g=a(546),y=a(1022),w=a(570),k=a(591),C=a(581),S=a(609),z=a(213),M=a(537),P=a(932),R=a(545),B=a(733),A=a(611),I=a(669),D=a(1),T=["onDelete","onMarkPaid","onMarkUnpaid","open","selected"],H=function(e){var t=e.onDelete,a=e.onMarkPaid,c=e.onMarkUnpaid,n=e.open,i=e.selected,l=Object(s.a)(e,T);return Object(D.jsx)(M.a,{anchor:"bottom",open:n,PaperProps:{elevation:1},variant:"persistent",children:Object(D.jsx)(x.a,Object(r.a)(Object(r.a)({sx:{p:2}},l),{},{children:Object(D.jsxs)(P.a,{alignItems:"center",container:!0,spacing:2,children:[Object(D.jsx)(P.a,{item:!0,md:3,sx:{display:{md:"block",xs:"none"}},children:Object(D.jsxs)(f.a,{color:"textSecondary",variant:"subtitle1",children:[i.length," ","selected"]})}),Object(D.jsx)(P.a,{item:!0,md:6,xs:12,children:Object(D.jsxs)(x.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center","& > * + *":{ml:2}},children:[Object(D.jsx)(R.a,{color:"primary",onClick:a,startIcon:Object(D.jsx)(B.a,{fontSize:"small"}),variant:"text",children:"Mark Paid"}),Object(D.jsx)(R.a,{color:"primary",onClick:c,startIcon:Object(D.jsx)(I.a,{fontSize:"small"}),variant:"text",children:"Mark Unpaid"}),Object(D.jsx)(R.a,{color:"primary",onClick:t,startIcon:Object(D.jsx)(A.a,{fontSize:"small"}),variant:"text",children:"Delete"})]})})]})}))})};H.defaultProps={open:!1};var L=H,V=["orders"],W=function(e){var t;switch(e){case"0":t={color:"warning",text:"Pendiente"};break;case"1":t={color:"success",text:"Completado"};break;case"2":default:t={color:"error",text:"Cancelado"};break;case"3":t={color:"error",text:"Rejected"}}var a=t,r=a.text,c=a.color;return Object(D.jsx)(C.a,{color:c,children:r})};t.a=function(e){var t=e.orders,a=Object(s.a)(e,V),C=Object(i.useState)([]),M=Object(n.a)(C,2),P=M[0],R=M[1],B=Object(i.useState)(0),A=Object(n.a)(B,2),I=A[0],T=A[1],H=Object(i.useState)(5),_=Object(n.a)(H,2),N=_[0],F=_[1],G=function(e,t,a){return e.slice(t*a,t*a+a)}(t,I,N),E=P.length>0,U=P.length>0&&P.length<t.length,$=P.length===t.length;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(o.a,Object(r.a)(Object(r.a)({},a),{},{children:[Object(D.jsx)(d.a,{action:Object(D.jsx)(S.a,{}),title:"Historial de Ordenes"}),Object(D.jsx)(j.a,{}),Object(D.jsx)(z.a,{children:Object(D.jsx)(x.a,{sx:{minWidth:1150},children:Object(D.jsxs)(b.a,{children:[Object(D.jsx)(h.a,{children:Object(D.jsxs)(O.a,{children:[Object(D.jsx)(u.a,{padding:"checkbox",children:Object(D.jsx)(p.a,{checked:$,color:"primary",indeterminate:U,onChange:function(e){R(e.target.checked?t.map((function(e){return e.id})):[])}})}),Object(D.jsx)(u.a,{children:"Id"}),Object(D.jsx)(u.a,{children:"Fecha"}),Object(D.jsx)(u.a,{children:"Id del Cliente"}),Object(D.jsx)(u.a,{children:"Precio Total"}),Object(D.jsx)(u.a,{children:"Status"}),Object(D.jsx)(u.a,{align:"right",children:"Actions"})]})}),Object(D.jsx)(m.a,{children:G.map((function(e){var t=P.includes(e.id);return Object(D.jsxs)(O.a,{hover:!0,selected:-1!==P.indexOf(e.id),children:[Object(D.jsx)(u.a,{padding:"checkbox",children:Object(D.jsx)(p.a,{checked:t,color:"primary",onChange:function(t){return a=e.id,void(P.includes(a)?R((function(e){return e.filter((function(e){return e!==a}))})):R((function(e){return[].concat(Object(c.a)(e),[a])})));var a},value:t})}),Object(D.jsx)(u.a,{children:Object(D.jsx)(v.a,{color:"textPrimary",component:l.b,to:"/dashboard/store/order/detail/".concat(e.id),underline:"none",variant:"subtitle2",children:e.id})}),Object(D.jsx)(u.a,{children:Object(D.jsx)(f.a,{color:"textPrimary",variant:"subtitle2",children:e.created_at.split("T")[0]})}),Object(D.jsx)(u.a,{children:e.client_id}),Object(D.jsx)(u.a,{children:e.final_price}),Object(D.jsx)(u.a,{children:W(e.status_id)}),Object(D.jsxs)(u.a,{align:"right",children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(k.a,{fontSize:"small"})}),Object(D.jsx)(g.a,{component:l.b,to:"/dashboard/store/order/detail/".concat(e.id),children:Object(D.jsx)(w.a,{fontSize:"small"})})]})]},e.id)}))})]})})}),Object(D.jsx)(y.a,{component:"div",count:t.length,onPageChange:function(e,t){T(t)},onRowsPerPageChange:function(e){F(parseInt(e.target.value,10))},page:I,rowsPerPage:N,rowsPerPageOptions:[5,10,25]})]})),Object(D.jsx)(L,{open:E,selected:P})]})}}}]);
//# sourceMappingURL=21.25c3d693.chunk.js.map