(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{110:function(e,t,n){},138:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var r=n(3),i=n(2),o=n.n(i),a=n(40),c=n.n(a),s=(n(110),n(11)),d=n(12),l=n(14),u=n(13),b=function(e){return e.children},h=n(10),p=n.p+"static/media/burger-logo.ec69c7f6.png",g=function(e){var t={Logo:{backgroundColor:"rgb(112, 59, 9)",padding:"8px",height:e.height?e.height:"100%",boxSizing:"border-box",borderRadius:"5px"},img:{height:"100%"}};return Object(r.jsx)("div",{style:t.Logo,children:Object(r.jsx)("img",{style:t.img,src:p,alt:"MyBurger"})})},j=n(16),x=n(28),f={NavigationItems:{margin:"0",padding:"0",listStyle:"none",display:"flex",flexFlow:"column",alignItems:"center",height:"100%","@media (min-width: 500px)":{flexFlow:"row"}},NavigationItem:{margin:"10px 0",padding:"10px",boxSizing:"border-box",display:"block",width:"100%","@media (min-width: 500px)":{margin:"0",display:"flex",height:"100%",width:"auto",alignItems:"center"}},a:{color:"white",textDecoration:"none",width:"100%",boxSizing:"border-box",display:"block",":hover":{backgroundColor:"#8F5C2C",borderBottom:"4px solid #40A4C8",color:"white"},"@media (min-width: 500px)":{color:"white",height:"100%",padding:"16px 10px",borderBottom:"4px solid transparent"}}},m=Object(j.a)((function(e){return Object(r.jsxs)("ul",{style:f.NavigationItems,children:[Object(r.jsx)("li",{style:f.NavigationItem,children:Object(r.jsx)(x.b,{style:f.a,to:"/",exact:!0,activeStyle:{color:"green"},children:"Burger Builder"})}),Object(r.jsx)("li",{style:f.NavigationItem,children:Object(r.jsx)(x.b,{style:f.a,to:"/checkout",activeStyle:{color:"green"},children:"Checkout"})})]})})),O={Backdrop:{width:"100%",height:"100%",position:"fixed",zIndex:"100",left:"0",top:"0",backgroundColor:"rgba(0, 0, 0, 0.5)"}},w=function(e){return e.show?Object(r.jsx)("div",{style:O.Backdrop,onClick:e.clicked}):null},y={position:"fixed",width:"280px",maxWidth:"70%",height:"100%",left:"0",top:"0",zIndex:"200",backgroundColor:"rgb(112, 59, 9)",padding:"32px 16px",boxSizing:"border-box",transition:"transform 0.3s ease-out","@media (min-width: 500px)":{display:"none"}},v={transform:"translateX(0)"},k={transform:"translate(-100%)"},C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=Object(h.a)(Object(h.a)({},y),k);return this.props.open&&(e=Object(h.a)(Object(h.a)({},y),v)),Object(r.jsxs)(b,{children:[Object(r.jsx)(w,{show:this.props.open,clicked:this.props.closed}),Object(r.jsxs)("div",{style:e,children:[Object(r.jsx)("div",{style:{height:"11%",marginBottom:"32px"},children:Object(r.jsx)(g,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(m,{})})]})]})}}]),n}(o.a.Component),S=Object(j.a)(C),I={DrawerToggle:{width:"40px",height:"100%",display:"flex",flexFlow:"column",justifyContent:"space-around",alignItems:"center",padding:"10px 0",boxSizing:"border-box",cursor:"pointer","@media (min-width: 500px)":{display:"none"}},div:{width:"90%",height:"3px",backgroundColor:"white","@media (min-width: 500px)":{display:"none"}}},T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{style:I.DrawerToggle,onClick:this.props.clicked,children:[Object(r.jsx)("div",{style:I.div}),Object(r.jsx)("div",{style:I.div}),Object(r.jsx)("div",{style:I.div})]})}}]),n}(o.a.Component),A=Object(j.a)(T),B={Toolbar:{height:"56px",width:"100%",position:"fixed",top:"0",left:"0",backgroundColor:"#703B09",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",boxSizing:"border-box",zIndex:"90"},navbar:{height:"100%","@media (max-width: 499px)":{display:"none"}}},N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("header",{style:B.Toolbar,children:[Object(r.jsx)(A,{clicked:this.props.drawerToggleClicked}),Object(r.jsx)("div",{style:{height:"80%"},children:Object(r.jsx)(g,{})}),Object(r.jsx)("nav",{style:B.navbar,children:Object(r.jsx)(m,{})})]})}}]),n}(o.a.Component),D=Object(j.a)(N),R={marginTop:"72px"},E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(b,{children:[Object(r.jsx)(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(S,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{style:R,children:this.props.children})]})}}]),n}(o.a.Component),P=n(104),W={BreadBottom:{height:"13%",width:"80%",background:"linear-gradient(#F08E4A, #e27b36)",borderRadius:"0 0 30px 30px",boxShadow:"inset -15px 0 #c15711",margin:"2% auto"},BreadTop:{height:"20%",width:"80%",background:"linear-gradient(#bc581e, #e27b36)",borderRadius:"50% 50% 0 0",boxShadow:"inset -15px 0 #c15711",margin:"2% auto",position:"relative"},Seeds1:{width:"10%",height:"15%",position:"absolute",backgroundColor:"white",left:"30%",top:"50%",borderRadius:"40%",transform:"rotate(-20deg)",boxShadow:"inset -2px -3px #c9c9c9",":before":{content:"",width:"100%",height:"100%",position:"absolute",backgroundColor:"white",left:"180%",top:"-50%",borderRadius:"40%",transform:"rotate(60deg)",boxShadow:"inset -1px -3px #c9c9c9"},":after":{content:"",width:"100%",height:"100%",position:"absolute",backgroundColor:"white",left:"-170%",top:"-260%",borderRadius:"40%",transform:"rotate(60deg)",boxShadow:"inset -1px 2px #c9c9c9"}},Seeds2:{width:"10%",height:"15%",position:"absolute",backgroundColor:"white",left:"64%",top:"50%",borderRadius:"40%",transform:"rotate(10deg)",boxShadow:"inset -3px 0 #c9c9c9",":before":{content:"",width:"100%",height:"100%",position:"absolute",backgroundColor:"white",left:"150%",top:"-130%",borderRadius:"40%",transform:"rotate(90deg)",boxShadow:"inset 1px 3px #c9c9c9"}},Meat:{width:"80%",height:"8%",background:"linear-gradient(#7f3608, #702e05)",margin:"2% auto",borderRadius:"15px"},Cheese:{width:"90%",height:"4.5%",margin:"2% auto",background:"linear-gradient(#f4d004, #d6bb22)",borderRadius:"20px"},Salad:{width:"85%",height:"7%",margin:"2% auto",background:"linear-gradient(#228c1d, #91ce50)",borderRadius:"20px"},Bacon:{width:"80%",height:"3%",background:"linear-gradient(#bf3813, #c45e38)",margin:"2% auto"}},F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{style:W.BreadBottom});break;case"bread-top":e=Object(r.jsxs)("div",{style:W.BreadTop,children:[Object(r.jsx)("div",{style:W.Seeds1}),Object(r.jsx)("div",{style:W.Seeds2})]});break;case"meat":e=Object(r.jsx)("div",{style:W.Meat});break;case"cheese":e=Object(r.jsx)("div",{style:W.Cheese});break;case"bacon":e=Object(r.jsx)("div",{style:W.Bacon});break;case"salad":e=Object(r.jsx)("div",{style:W.Salad});break;default:e=null}return e}}]),n}(o.a.Component),H=Object(j.a)(F),L={Burger:{width:"100%",margin:"auto",height:"350px",overflowY:"scroll",textAlign:"center",fontWeight:"bold",fontSize:"1.2rem","@media(minWidth:500px) and (minHeight:401px)":{width:"450px",height:"400px"},"@media(maxWidth:768px) and (minHeight:401px)":{width:"450px",height:"400px"}}},z=Object(j.a)((function(e){var t=Object.keys(e.ingrediants).map((function(t){return Object(P.a)(Array(e.ingrediants[t])).map((function(e,n){return Object(r.jsx)(H,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please start adding Ingrediants!!!"})),Object(r.jsxs)(b,{children:[Object(r.jsxs)("div",{style:L.Burger,children:[Object(r.jsx)(H,{type:"bread-top"}),t,Object(r.jsx)(H,{type:"bread-bottom"})]}),Object(r.jsx)("div",{})]})})),M={BuildControl:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"5px 0"},Label:{padding:"10px",fontWeight:"bold",width:"80px"},Less:{backgroundColor:"#D39952",color:"white",":active":{backgroundColor:"#DAA972",color:"white"},":hover":{backgroundColor:"#DAA972",color:"white"}},More:{backgroundColor:"#8F5E1E",color:"white",":active":{backgroundColor:"#99703F",color:"white"},":hover":{backgroundColor:"#99703F",color:"white"}},BuildControlButton:{display:"block",font:"inherit",padding:"5px",margin:"0 5px",width:"80px",border:"1px solid #AA6817",cursor:"pointer",outline:"none",":disabled":{backgroundColor:"#AC9980",border:"1px solid #7E7365",color:"#ccc",cursor:"default"},":hover:disabled":{backgroundColor:"red",color:"#ccc",cursor:"not-allowed"}}},K=(Object.assign({},M.BuildControlButton,M.Less),Object.assign({},M.BuildControlButton,M.More)),U=function(e){return Object(r.jsxs)("div",{style:M.BuildControl,children:[Object(r.jsx)("div",{style:M.Label,children:e.label}),Object(r.jsx)("button",{style:M.BuildControlButton,onClick:e.removed,disabled:e.disabled,children:"Less"},"less"+e.label),Object(r.jsx)("button",{style:K,onClick:e.added,children:"More"},"more"+e.label)]})},Y={width:"100%",backgroundColor:"#CF8F2E",display:"flex",flexFlow:"column",alignItems:"center",boxShadow:"0 2px 1px #ccc",margin:"auto",padding:"10px 0"},_=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],G=function(e){return Object(r.jsxs)("div",{style:Y,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsx)("strong",{children:e.totalPrice.toFixed(2)})]}),_.map((function(t){return Object(r.jsx)(U,{label:t.label,added:function(){return e.addIngrediant(t.type)},removed:function(){return e.removeIngrediant(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},J={position:"fixed",zIndex:"100",backgroundColor:"white",width:"70%",border:"1px solid #ccc",boxShadow:"1px 1px 1px black",padding:"16px",left:"15%",top:"30%",boxSizing:"border-box",transition:"all 0.5s ease-out","@media (minWidth: 600px)":{width:"500px",left:"calc(50% - 250px)"}},Z=function(e){var t=Object.assign({},J,{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"});return Object(r.jsxs)(b,{children:[Object(r.jsx)(w,{show:e.show,clicked:e.modalClosed}),Object(r.jsx)("div",{style:t,children:e.children})]})},V=function(e){var t={Button:{backgroundColor:"transparent",border:"none",color:"white",outline:"none",cursor:"pointer",font:"inherit",padding:"10px",margin:"10px",fontWeight:"bold"},Success:{color:"#5C9210"},Danger:{color:"#944317"}};return t.Button.color="Success"===e.type?"#5C9210":"#944317",Object(r.jsx)("button",{style:t.Button,onClick:e.clicked,children:e.children})},X=function(e){var t=Object.keys(e.ingrediants).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingrediants[t]]},t)}));return Object(r.jsxs)(b,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with following Ingrediants:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsxs)("p",{children:["Total Price:",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)(V,{clicked:e.cancelPurchase,type:"Danger",children:"CANCEL"}),Object(r.jsx)(V,{clicked:e.continuePurchase,type:"Success",children:"CONTINUE"})]})},Q="ADD_INGREDIANT",q="REMOVE_INGREDIANT",$="GET_INGREDIANT_FROM_SERVER",ee="SET_FIREBASETOKEN",te=n(26),ne=n(103),re=n.n(ne).a.create({baseURL:"https://react-burger-builder-2ccc0-default-rtdb.firebaseio.com/"}),ie=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={totalPrice:4,purchasable:!1,purchasing:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.state.purchasing;e.setState({purchasing:false})},e.purchaseContinueHandler=function(){e.props.history.push("/checkout")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;re.get("/ingrediants.json").then((function(t){e.props.getIngrediantFromServer(t.data)})).catch((function(e){alert("Error getting Ingrediant Details")}))}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(h.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;return Object(r.jsxs)(b,{children:[Object(r.jsx)(Z,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(r.jsx)(X,{ingrediants:this.props.ings,cancelPurchase:this.purchaseCancelHandler,continuePurchase:this.purchaseContinueHandler,price:this.props.totalPrice})}),Object(r.jsx)(z,{ingrediants:this.props.ings}),Object(r.jsx)(G,{addIngrediant:this.props.onIngrediantAdded,removeIngrediant:this.props.onIngrediantRemoved,disabled:e,totalPrice:this.props.totalPrice,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler})]})}}]),n}(o.a.Component),oe=Object(te.b)((function(e){return{ings:e.ingrediants,totalPrice:e.totalPrice}}),(function(e){return{getIngrediantFromServer:function(t){return e({type:$,ings:t})},onIngrediantAdded:function(t){return e({type:Q,ingrediantName:t})},onIngrediantRemoved:function(t){return e({type:q,ingrediantName:t})}}}))(ie),ae={CheckoutSummary:{width:"80%",margin:"auto",textAlign:"center"}},ce=function(e){return Object(r.jsxs)("div",{style:ae.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"We hope it tastes well!!!"}),Object(r.jsx)("div",{style:{width:"300px",height:"300px",margin:"auto"},children:Object(r.jsx)(z,{ingrediants:e.ingrediants})}),Object(r.jsxs)("div",{style:{marginTop:"60px"},children:[Object(r.jsx)(V,{type:"Danger",clicked:e.cancelCheckout,children:"CANCEL"}),Object(r.jsx)(V,{type:"Success",clicked:e.continueCheckout,children:"CONTINUE"})]})]})},se={CondactData:{margin:"20px auto",width:"80%",textAlign:"center",boxShadow:"0 2px 3px #ccc",border:"1px solid #eee",padding:"10px",boxSizing:"border-box"},Input:{display:"block"}},de=(o.a.Component,n(138),{loader:{color:"#341133",fontSize:"11px",textIndent:"-99999em",margin:"55px auto",position:"relative",width:"10em",height:"10em",boxShadow:"inset 0 0 0 1em",WebkitTransform:"translateZ(0)",MsTransform:"translateZ(0)",transform:"translateZ(0)",borderRadius:"50%",":before":{width:"5.2em",height:"10.2em",background:"#eef1f1",borderRadius:"10.2em 0 0 10.2em",top:"-0.1em",left:"-0.1em",transformOrigin:"5.1em 5.1em",animation:"load2 2s infinite ease 1.5s",position:"absolute",content:"",WebkitTransformOrigin:"5.1em 5.1em",WebkitAnimation:"load2 2s infinite ease 1.5s"},":after":{width:"5.2em",height:"10.2em",background:"#eef1f1",borderRadius:"0 10.2em 10.2em 0",top:"-0.1em",left:"4.9em",transformOrigin:"0.1em 5.1em",animation:"load2 2s infinite ease",position:"absolute",content:"",WebkitTransformOrigin:"0.1em 5.1em",WebkitAnimation:"load2 2s infinite ease"},"@WebkitKeyframes load2":{"0%":{WebkitTransform:"rotate(0deg)",transform:"rotate(0deg)"}},"@keyframes load2":{"0%":{WebkitTransform:"rotate(0deg)",transform:"rotate(0deg)"}}}}),le=Object(j.a)((function(){return Object(r.jsx)("div",{style:de.loader,children:"Loading..."})})),ue=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={loading:!1},e.cancelCheckoutHandler=function(){e.props.history.goBack()},e.continueCheckoutHandler=function(){var t={ingrediants:e.props.ings,price:e.props.price};e.setState({loading:!0}),re.post("/orders.json",t).then((function(t){e.setState({loading:!1});var n={"Content-Type":"application/json",Authorization:"key="+e.props.storeKey},r={notification:{title:"Order Success",body:"Your Order Successfully Placed!!!",click_action:window.location.origin+"/",icon:window.location.origin+"/icon.png"},to:e.props.firebaseToken};re.post("https://fcm.googleapis.com/fcm/send",JSON.stringify(r),{headers:n}).then((function(e){console.log("Notification sent",e)})).catch((function(e){console.log("err",e)})),e.props.history.push("/")})).catch((function(t){e.setState({loading:!1}),console.log("Error ->",t),alert("Error saving order")}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object(r.jsx)(ce,{ingrediants:this.props.ings,cancelCheckout:this.cancelCheckoutHandler,continueCheckout:this.continueCheckoutHandler});return this.state.loading&&(e=Object(r.jsx)(le,{})),Object(r.jsx)("div",{children:e})}}]),n}(o.a.Component),be=Object(te.b)((function(e){return{ings:e.ingrediants,price:e.totalPrice,firebaseToken:e.firebaseToken,storeKey:e.storeKey}}))(ue),he=n(55),pe=n(9),ge=n(39),je=n.n(ge),xe=n(60),fe=n(49),me=function(){var e=Object(xe.a)(je.a.mark((function e(){var t,n;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return fe.a.initializeApp({apiKey:"AIzaSyDPLCoetChy2tY5JVYSJA0R9NXfC99L2iw",authDomain:"react-burger-builder-2ccc0.firebaseapp.com",databaseURL:"https://react-burger-builder-2ccc0-default-rtdb.firebaseio.com",projectId:"react-burger-builder-2ccc0",storageBucket:"react-burger-builder-2ccc0.appspot.com",messagingSenderId:"701624320065",appId:"1:701624320065:web:ab9ad8631eca75a48246c0",measurementId:"G-GBW3DHTKQ2"}),e.prev=1,t=fe.a.messaging(),e.next=5,t.requestPermission();case 5:return e.next=7,t.getToken();case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),Oe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;me().then((function(t){console.log(t),e.props.setFirebaseToken(t)}))}},{key:"render",value:function(){return Object(r.jsx)(he.a,{children:Object(r.jsx)(E,{children:Object(r.jsxs)(pe.c,{children:[Object(r.jsx)(pe.a,{path:"/checkout",component:be}),Object(r.jsx)(pe.a,{path:"/",exact:!0,component:oe})]})})})}}]),n}(o.a.Component),we=Object(te.b)(null,(function(e){return{setFirebaseToken:function(t){return e({type:ee,firebaseToken:t})}}}))(Oe),ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,144)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))},ve=(n(142),n(48)),ke=n(37),Ce={ingrediants:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,firebaseToken:null,storeKey:"AAAAo1wRgEE:APA91bEEtbejoPNtrR6iydb8FQ1Z-iJp5IlAVGXy9d3tSZ8XxJ9oWkvHMduwyZq3cby36XjuY2BR6RDj9yhg4ET82nNp-fj6SsIWjVDmaN6TlnnUO-mrQS_LaHQ4LopySxkK8b6nfi-l"},Se={salad:.5,bacon:.6,cheese:.7,meat:.8},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(h.a)(Object(h.a)({},e),{},{ingrediants:Object(h.a)(Object(h.a)({},e.ingrediants),{},Object(ke.a)({},t.ingrediantName,e.ingrediants[t.ingrediantName]+1)),totalPrice:e.totalPrice+Se[t.ingrediantName]});case q:return Object(h.a)(Object(h.a)({},e),{},{ingrediants:Object(h.a)(Object(h.a)({},e.ingrediants),{},Object(ke.a)({},t.ingrediantName,e.ingrediants[t.ingrediantName]-1)),totalPrice:e.totalPrice-Se[t.ingrediantName]});case $:return Object(h.a)(Object(h.a)({},e),{},{ingrediants:t.ings,totalPrice:4});case ee:return Object(h.a)(Object(h.a)({},e),{},{firebaseToken:t.firebaseToken});default:return e}},Te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Be=Object(ve.b)(Ie),Ne=Object(r.jsx)(te.a,{store:Be,children:Object(r.jsx)(x.a,{children:Object(r.jsx)(we,{})})});c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Ne}),document.getElementById("root")),ye(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Te?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ae(t,e)}))}}()}},[[143,1,2]]]);
//# sourceMappingURL=main.348e06e9.chunk.js.map