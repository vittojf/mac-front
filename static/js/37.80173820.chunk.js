(this.webpackJsonpMac=this.webpackJsonpMac||[]).push([[37],{1021:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(0),i=n(29),c=n(36),s=n(142),o=n(473),l=n(547),u=n(932),d=n(550),j=n(665),p=n(555),b=n(545),h=n(216),x=n(668),m=n(217),f=n(141),O=n(23),v=n(22),g=n(12),_=n.n(g),y=n(143),w=n(61),C=n(114),k=n(548),S=n(549),R=n(528),I=n(544),B=n(900),q=n(1),z=function(e){var t=new B.a,n=Object(a.useState)([]),i=Object(r.a)(n,2),c=i[0],s=i[1],l=Object(a.useState)(!1),d=Object(r.a)(l,2),j=d[0],p=d[1],h=e.setStatusForm,x=e.setDataClient,m=e.dataClient,f=e.setStatusRegisterClient;return Object(a.useEffect)((function(){t.getAllClients().then((function(e){s(e),console.log(e)}))}),[]),Object(q.jsx)(C.a,{initialValues:{client_dni:""},validationSchema:w.f().shape({client_dni:w.h().max(255).required("El DNI del cliente es obligatorio")}),onSubmit:function(){var e=Object(v.a)(_.a.mark((function e(t,n){var r,a,i,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setErrors,a=n.setStatus,i=n.setSubmitting,e.prev=1,1===(s=c.filter((function(e){return e.dni===t.client_dni}))).length?(x(s[0]),y.b.success("El Cliente existe!"),f(!0)):(Object(y.b)("El Cliente no esta Registrado!",{icon:"\u26a0"}),x({dni:t.client_dni})),h("2"),i(!0),p(!0),console.log(m),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(1),console.error(e.t0),y.b.error("Ha Ocurrido un Error"),a({success:!1}),r({submit:e.t0.message}),i(!1),p(!1),e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(t){var n=t.errors,r=t.handleBlur,a=t.handleChange,i=t.handleSubmit,c=t.touched,s=t.values;return Object(q.jsx)("form",Object(O.a)(Object(O.a)({onSubmit:i},e),{},{children:Object(q.jsxs)(u.a,{container:!0,spacing:3,children:[Object(q.jsx)(u.a,{item:!0,lg:12,md:12,xs:12,children:Object(q.jsx)(k.a,{children:Object(q.jsx)(S.a,{children:Object(q.jsx)(u.a,{container:!0,spacing:3,children:Object(q.jsx)(u.a,{item:!0,md:12,xs:12,children:Object(q.jsx)(R.a,{error:Boolean(c.client_dni&&n.client_dni),fullWidth:!0,helperText:c.client_dni&&n.client_dni?"Campo Requerido":null,label:"DNI del Cliente",name:"client_dni",type:"text",onBlur:r,onChange:a,value:s.client_dni,variant:"outlined"})})})})})}),Object(q.jsxs)(u.a,{item:!0,lg:2,md:2,xs:12,children:[n.submit&&Object(q.jsx)(o.a,{sx:{mt:3},children:Object(q.jsx)(I.a,{error:!0,children:n.submit})}),Object(q.jsx)(o.a,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:Object(q.jsx)(b.a,{color:"primary",disabled:j,type:"submit",variant:"contained",onClick:function(){},children:"Continuar"})})]})]})}))}})},D=n(584),T=n.n(D),E=n(734),W=n(551),L=n(933),V=n(895),P=n(1014),U=function(e){var t=Object(a.useState)(e),n=Object(r.a)(t,2),i=n[0],c=n[1],s=Object(a.useState)([]),o=Object(r.a)(s,2),l=o[0],u=o[1],d=function(){var e=Object(v.a)(_.a.mark((function e(t){var n,r,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(t.target.value),e.prev=1,n="https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(t.target.value,".json?access_token=pk.eyJ1IjoiZXplcXVpZWxmcmlhczIwIiwiYSI6ImNsMmpkdWlxcTAxM2QzY2t3ajR0N3pyOGUifQ.gxfc3ag0w310q1l9t0VYJw&autocomplete=true"),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:a=e.sent,u(null===a||void 0===a?void 0:a.features),console.log(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return{value:i,onchange:d,setValue:c,suggestions:l,setSuggestions:u}},N=n(19),A=n(18),M=n(219),F=n.n(M),H=n(145),J=function(){function e(){Object(N.a)(this,e)}return Object(A.a)(e,[{key:"ws",get:function(){var e=new H.a;return F.a.create({baseURL:e.URL_DEV,headers:e.headerToken()})}},{key:"getAllDrivers",value:function(){var e=Object(v.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/driver",e.next=3,this.ws.get("/driver");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDriverById",value:function(){var e=Object(v.a)(_.a.mark((function e(t){var n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/driver/".concat(t),e.next=3,this.ws.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"postNotify",value:function(){var e=Object(v.a)(_.a.mark((function e(t,n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/driver/delivery/notify",e.next=3,this.ws.post("/driver/delivery/notify",{driverId:t,deliveryId:n});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),Y=function(e){var t=new B.a,n=new V.a,r=new J,i=U("");console.log(i.suggestions);var c=e.setStatusForm,s=e.dataClient,l=e.statusRegisterClient,j=function(){var e=Object(v.a)(_.a.mark((function e(n){var r,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={dni:n.client_dni,name:n.client_name,lastname:n.client_lastname,phones:[n.phones],direction:n.direction,zipcode:n.zipcode,status_id:"0",coordinates:"-87, 64",score:"0"},e.next=3,t.createClient(a).then((function(e){r=e})).catch((function(e){console.log("Error al crear usuario",e)}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(v.a)(_.a.mark((function e(t){var r,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("---------",s.id),!l){e.next=8;break}return a={client_id:s.id,store_id:1,driver_id:null,status_id:"0",price:20,final_price:20,preparation_estimated_time:t.preparation_estimated_time,delivery_estimated_time:t.delivery_estimated_time},e.next=5,n.createOrder(a);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,j(t).then(function(){var e=Object(v.a)(_.a.mark((function e(r){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("---------",r),a={client_id:r.data.data.id,store_id:1,driver_id:null,status_id:"0",price:20,final_price:20,preparation_estimated_time:t.preparation_estimated_time,delivery_estimated_time:t.delivery_estimated_time},e.abrupt("return",n.createOrder(a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:r=e.sent;case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){}),[]),Object(q.jsx)(C.a,{initialValues:{client_dni:s.dni,client_name:l?s.name:"",client_lastname:l?s.lastname:"",phones:l?s.phones[0].toString():"",direction:l?s.direction:"",zipcode:l?s.zipcode:"",origin_location:"",destination_location:"",price:"",final_price:"",preparation_estimated_time:(new Date).toISOString(),delivery_estimated_time:(new Date).toISOString()},validationSchema:w.f().shape({client_dni:w.h().max(255).required(),client_name:w.h().max(255).required(),client_lastname:w.h().max(255).required(),phones:w.h().max(255).required(),direction:w.h().max(255).required("Campo Requerido"),zipcode:w.h().max(255).required(),price:w.h().max(255),final_price:w.h().max(255),preparation_estimated_time:w.d().required("Campo Requerido"),delivery_estimated_time:w.d().required("Campo Requerido")}),onSubmit:function(){var e=Object(v.a)(_.a.mark((function e(t,n){var a,i,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,s=n.setSubmitting;try{console.log(t),p(t).then((function(e){console.log(e.data.data.id),r.postNotify(1,e.data.data.id).then((function(e){return console.log("SE CREO",e)})),201!==e.status&&"201"!==e.status||c("3")}))}catch(o){console.error(o),y.b.error("Ha Ocurrido un error para crear su Orden!"),i({success:!1}),a({submit:o.message}),s(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(t){var n=t.errors,r=t.handleBlur,a=t.handleChange,s=t.handleSubmit,j=t.isSubmitting,p=t.setFieldValue,h=t.touched,x=t.values;return Object(q.jsx)("form",Object(O.a)(Object(O.a)({onSubmit:s},e),{},{children:Object(q.jsxs)(u.a,{container:!0,spacing:3,children:[Object(q.jsx)(u.a,{item:!0,lg:12,md:12,xs:12,children:Object(q.jsxs)(k.a,{children:[Object(q.jsx)(E.a,{title:"Datos del Cliente"}),Object(q.jsx)(W.a,{}),Object(q.jsx)(S.a,{children:Object(q.jsxs)(u.a,{container:!0,spacing:3,children:[Object(q.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(q.jsx)(R.a,{error:Boolean(h.client_name&&n.client_name),fullWidth:!0,disabled:l,helperText:h.client_name&&n.client_name?"Campo Requerido":null,label:"Nombre",name:"client_name",type:"text",onBlur:r,onChange:a,value:x.client_name,variant:"outlined"})}),Object(q.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(q.jsx)(R.a,{error:Boolean(h.client_lastname&&n.client_lastname),fullWidth:!0,disabled:l,helperText:h.client_lastname&&n.client_lastname?"Campo Requerido":null,label:"Apellido",name:"client_lastname",type:"text",onBlur:r,onChange:a,value:x.client_lastname,variant:"outlined"})}),Object(q.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(q.jsx)(R.a,{error:Boolean(h.client_dni&&n.client_dni),fullWidth:!0,disabled:!0,helperText:h.client_dni&&n.client_dni?"Campo Requerido":null,label:"DNI",name:"dni",type:"text",onBlur:r,onChange:a,value:x.client_dni})}),Object(q.jsx)(u.a,{item:!0,md:6,xs:12,children:Object(q.jsx)(R.a,{error:Boolean(h.phones&&n.phones),fullWidth:!0,disabled:l,helperText:h.phones&&n.phones?"Campo Requerido":null,label:"Telefono",name:"phones",type:"number",onBlur:r,onChange:a,value:x.phones,variant:"outlined"})}),Object(q.jsx)(u.a,{item:!0,md:6,xs:6,children:Object(q.jsx)(R.a,{error:Boolean(h.zipcode&&n.zipcode),fullWidth:!0,disabled:l,helperText:h.zipcode&&n.zipcode?"Campo Requerido":null,label:"C\xf3digo Postal",name:"zipcode",type:"text",onBlur:r,onChange:a,value:x.zipcode,variant:"outlined"})}),Object(q.jsx)(u.a,{item:!0,md:12,xs:12,children:Object(q.jsx)(R.a,{error:Boolean(h.direction&&n.direction),fullWidth:!0,disabled:l,helperText:h.direction&&n.direction,label:"Direcci\xf3n",name:"direction",type:"text",multiline:!0,onBlur:r,onChange:a,value:x.direction,variant:"outlined",rows:6})})]})})]})}),Object(q.jsx)(u.a,{item:!0,lg:12,md:12,xs:12,children:Object(q.jsx)(o.a,{sx:{mt:3},children:Object(q.jsxs)(k.a,{children:[Object(q.jsx)(E.a,{title:"Descripci\xf3n de la Orden"}),Object(q.jsx)(W.a,{}),Object(q.jsxs)(S.a,{children:[Object(q.jsx)(L.a,{getOptionLabel:function(e){return e.place_name},isOptionEqualToValue:function(e,t){return e.place_name===t.place_name},onChange:function(e,t){p("origin_location",t)},options:i.suggestions,renderInput:function(e){return Object(q.jsx)(R.a,Object(O.a)({error:Boolean(h.origin_location&&n.origin_location),fullWidth:!0,label:"Ubicaci\xf3n de Origen",placeholder:"Introduzca la ubicaci\xf3n de origen",helperText:h.origin_location&&n.origin_location,name:"origin_location",variant:"outlined",onChange:function(e){i.onchange(e)},value:x.origin_location},e))}}),Object(q.jsx)(L.a,{getOptionLabel:function(e){return e.place_name},isOptionEqualToValue:function(e,t){return e.place_name===t.place_name},onChange:function(e,t){p("destination_location",t)},options:i.suggestions,sx:{mt:3},renderInput:function(e){return Object(q.jsx)(R.a,Object(O.a)({error:Boolean(h.destination_location&&n.destination_location),fullWidth:!0,label:"Ubicaci\xf3n de Destino",placeholder:"Introduzca la ubicaci\xf3n de ",helperText:h.destination_location&&n.destination_location,name:"destination_location",variant:"outlined",onChange:function(e){i.onchange(e)},value:x.destination_location},e))}}),Object(q.jsx)(o.a,{sx:{mt:2},children:Object(q.jsx)(P.a,{label:"Tiempo estimada de Preparaci\xf3n",onChange:function(e){return p("preparation_estimated_time",e.toISOString())},renderInput:function(e){return Object(q.jsx)(R.a,Object(O.a)({fullWidth:!0,variant:"outlined"},e))},value:x.preparation_estimated_time})}),Object(q.jsx)(o.a,{sx:{mt:2},children:Object(q.jsx)(P.a,{label:"Tiempo estimado para el Delivery",onChange:function(e){return p("delivery_estimated_time",e.toISOString())},renderInput:function(e){return Object(q.jsx)(R.a,Object(O.a)({fullWidth:!0,variant:"outlined"},e))},value:x.delivery_estimated_time})})]})]})})}),Object(q.jsx)(u.a,{item:!0,lg:12,md:12,xs:12,children:Object(q.jsx)(o.a,{sx:{mt:3},children:Object(q.jsxs)(k.a,{children:[Object(q.jsx)(E.a,{title:"Tarifa"}),Object(q.jsx)(W.a,{}),Object(q.jsxs)(S.a,{children:[Object(q.jsxs)(o.a,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[Object(q.jsx)(d.a,{color:"textPrimary",variant:"subtitle2",children:"Subtotal"}),Object(q.jsxs)(d.a,{color:"textPrimary",variant:"subtitle2",children:["$",T()(20).format("00.00")]})]}),Object(q.jsx)(W.a,{sx:{my:2}}),Object(q.jsxs)(o.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(q.jsx)(d.a,{color:"textPrimary",variant:"subtitle2",children:"Total"}),Object(q.jsxs)(d.a,{color:"textPrimary",variant:"subtitle2",children:["$",T()(20).format("00.00")]})]})]})]})})}),Object(q.jsxs)(u.a,{item:!0,lg:2,md:2,xs:12,children:[n.submit&&Object(q.jsx)(o.a,{sx:{mt:3},children:Object(q.jsx)(I.a,{error:!0,children:n.submit})}),Object(q.jsx)(o.a,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:Object(q.jsx)(b.a,{color:"primary",disabled:j,type:"submit",variant:"contained",onClick:function(){return c("2")},children:"Registrar Orden"})})]})]})}))}})},Q=n(542),X=n(536),Z=n(26),$=n(733),G=function(){return Object(q.jsx)(o.a,{sx:{backgroundColor:"background.default",minHeight:"100%",p:3},children:Object(q.jsx)(l.a,{maxWidth:"sm",children:Object(q.jsxs)(Q.a,{elevation:12,sx:{p:3,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(q.jsx)(X.a,{sx:{backgroundColor:function(e){return Object(Z.a)(e.palette.success.main,.08)},color:"success.main",mb:2},children:Object(q.jsx)($.a,{})}),Object(q.jsx)(d.a,{color:"textPrimary",variant:"h5",children:"Orden Creada!"}),Object(q.jsx)(d.a,{align:"center",color:"textSecondary",sx:{mt:1},variant:"body2",children:"Su orden ha sido enviada correctamente, este atento en la bandeja de notificaciones en donde se le avisar\xe1 si un driver acept\xf3 la orden."}),Object(q.jsx)(b.a,{color:"primary",fullWidth:!0,size:"large",sx:{mt:4},variant:"contained",component:c.b,to:"/dashboard",children:"Ir al Inicio"})]})})})};t.default=function(){var e=Object(h.a)().settings,t=Object(a.useState)("1"),n=Object(r.a)(t,2),O=n[0],v=n[1],g=Object(a.useState)({}),_=Object(r.a)(g,2),y=_[0],w=_[1],C=Object(a.useState)(!1),k=Object(r.a)(C,2),S=k[0],R=k[1],I=Object(i.g)();return Object(a.useEffect)((function(){f.a.push({event:"page_view"})}),[]),Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(s.a,{children:Object(q.jsx)("title",{children:"Dashboard: Crear Orden | Mac "})}),Object(q.jsx)(o.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(q.jsxs)(l.a,{maxWidth:!!e.compact&&"xl",children:[Object(q.jsxs)(u.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(q.jsxs)(u.a,{item:!0,children:[Object(q.jsx)(d.a,{color:"textPrimary",variant:"h5",children:"Crear Orden"}),Object(q.jsxs)(j.a,{"aria-label":"breadcrumb",separator:Object(q.jsx)(m.a,{fontSize:"small"}),sx:{mt:1},children:[Object(q.jsx)(p.a,{color:"textPrimary",component:c.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(q.jsx)(d.a,{color:"textSecondary",variant:"subtitle2",children:"Crear Orden"})]})]}),Object(q.jsx)(u.a,{item:!0,children:Object(q.jsx)(o.a,{sx:{m:-1},children:Object(q.jsx)(b.a,{color:"primary",startIcon:Object(q.jsx)(x.a,{fontSize:"small"}),sx:{mt:1},variant:"outlined",onClick:function(){"1"===O||"3"===O?I("/dashboard"):"2"===O&&v("1")},children:"2"===O?"Regresar":"Cancelar"})})})]}),Object(q.jsxs)(o.a,{sx:{mt:3},children:["1"===O&&Object(q.jsx)(z,{setStatusForm:v,setDataClient:w,dataClient:y,setStatusRegisterClient:R}),"2"===O&&Object(q.jsx)(Y,{setStatusForm:v,dataClient:y,statusRegisterClient:S}),"3"===O&&Object(q.jsx)(u.a,{container:!0,spacing:3,children:Object(q.jsx)(u.a,{item:!0,lg:12,md:12,xs:12,children:Object(q.jsx)(G,{})})})]})]})})]})}},668:function(e,t,n){"use strict";var r=n(31),a=n(1),i=Object(r.a)(Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),"ArrowLeft");t.a=i},733:function(e,t,n){"use strict";var r=n(31),a=n(1),i=Object(r.a)(Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(a.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),"Check");t.a=i},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(22),a=n(19),i=n(18),c=n(12),s=n.n(c),o=n(219),l=n.n(o),u=n(145),d=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"ws",get:function(){var e=new u.a;return l.a.create({baseURL:e.URL_DEV,headers:e.headerToken()})}},{key:"getAllOrders",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/deliveries",e.next=3,this.ws.get("/deliveries");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getOrderById",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/deliveries/".concat(t),e.next=3,this.ws.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createOrder",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/deliveries",e.next=3,this.ws.post("/deliveries",t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},900:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(22),a=n(19),i=n(18),c=n(12),s=n.n(c),o=n(219),l=n.n(o),u=n(145),d=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"ws",get:function(){var e=new u.a;return l.a.create({baseURL:e.URL_DEV,headers:e.headerToken()})}},{key:"getAllClients",value:function(){var e=Object(r.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/clients",e.next=3,this.ws.get("/clients");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getClientById",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/clients/".concat(t),e.next=3,this.ws.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateClient",value:function(){var e=Object(r.a)(s.a.mark((function e(t,n){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/clients/".concat(t),e.next=3,this.ws.put(r,n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createClient",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/clients",e.next=3,this.ws.post("/clients",t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeClient",value:function(){var e=Object(r.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/clients/".concat(t),e.next=3,this.ws.delete(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=37.80173820.chunk.js.map