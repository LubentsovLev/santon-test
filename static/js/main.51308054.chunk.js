(this["webpackJsonpsanton-test"]=this["webpackJsonpsanton-test"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"auth_container__2tT85",form:"auth_form__1B9Lp",err:"auth_err__2ETNj",x:"auth_x__18tmb"}},15:function(t,e,n){t.exports={address:"modal_address__1cf3Y",x:"modal_x__1drC4"}},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),c=n.n(a),r=n(16),s=n.n(r),o=n(3),u=n(4),d=n(6),l=n(5),h=n(2),p=n(7),j=n(9),f=n(9).Store,b=new(function(){function t(){Object(o.a)(this,t),this.stores={},this.dispatch=this.dispatch.bind(this)}return Object(u.a)(t,[{key:"addStore",value:function(t){if(!t instanceof f)throw new Error("Given value is not a store instance!");this.stores[t.name]=t}},{key:"getStore",value:function(t){return this.stores[t]}},{key:"dispatch",value:function(t,e){for(var n=0,i=Object.keys(this.stores);n<i.length;n++){var a=i[n];this.stores[a].dispatch(t,e)}}}]),t}()),O="ADD_PRODUCT",m="REMOVE_PRODUCT",v=new j.Store("products",{data:{products:[]},options:{shouldInitFromState:!0,stateKey:"products"},reducers:[{type:O,action:function(t,e){var n=[].concat(Object(p.a)(t.products),[e]);return Object(h.a)(Object(h.a)({},t),{},{products:n})}},{type:m,action:function(t,e){var n=Object(p.a)(t.products),i=n.findIndex((function(t){return t.id===e}));return-1!==i&&n.splice(i,1),Object(h.a)(Object(h.a)({},t),{},{products:n})}}]});b.addStore(v);var x="SET_AUTH",_=new j.Store("auth",{auth:{login:"",password:""},options:{shouldInitFromState:!0,stateKey:"auth"},reducers:[{type:x,action:function(t,e){return{auth:e.auth}}},{type:"REMOVE_AUTH",action:function(t,e){var n=[].concat(Object(p.a)(t.auth),[e]);return Object(h.a)(Object(h.a)({},t),{},{loginRemove:n})}}]});b.addStore(_);n(23);var g=n(12);function y(t,e){var n=b.getStore(t);return function(t){var a,r;return r=a=function(a){Object(d.a)(r,a);var c=Object(l.a)(r);function r(t){var e;return Object(o.a)(this,r),(e=c.call(this,t)).state={data:n?n.data:{}},e.handleStoreUpdate=e.handleStoreUpdate.bind(Object(g.a)(e)),e}return Object(u.a)(r,[{key:"handleStoreUpdate",value:function(t){this.setState({data:t})}},{key:"componentDidMount",value:function(){n.subscribe(this.handleStoreUpdate)}},{key:"componentWillUnmount",value:function(){n.unsubscribe(this.handleStoreUpdate)}},{key:"render",value:function(){return Object(i.jsx)(t,Object(h.a)(Object(h.a)(Object(h.a)({},this.props),e(this.state.data)),{},{dispatch:b.dispatch}))}}]),r}(c.a.Component),a.displayName=t.displayName,r}}n(24);var S=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.product,n=e.price.toLocaleString("ru",{maximumFractionDigits:2,minimumFractionDigits:2,currency:"RUB",style:"currency"});return Object(i.jsxs)("div",{className:"product",children:[Object(i.jsx)("div",{className:"product-image-frame",children:Object(i.jsx)("img",{className:"product-image",src:"https://s1.ticketm.net/dam/a/3ea/a7473588-64b1-4fac-ad26-596f70b993ea_647801_TABLET_LANDSCAPE_LARGE_16_9.jpg",alt:""})}),Object(i.jsxs)("div",{className:"product-info",children:[Object(i.jsxs)("div",{className:"",children:[Object(i.jsxs)("p",{className:"product-info-title",children:[e.title," - ",e.id]}),Object(i.jsx)("p",{className:"product-info-description",children:e.description})]}),Object(i.jsx)("div",{children:Object(i.jsx)("span",{className:"product-info-price",children:n})})]}),Object(i.jsx)("button",{onClick:function(){t.props.removeProduct(e.id)},children:"delete Item"})]})}}]),n}(c.a.Component),w=n(15),k=n.n(w),N=function(t){var e=c.a.useRef(null),n=c.a.useRef(null),a=c.a.useRef(null),r=c.a.useRef(null);return Object(i.jsxs)("div",{className:k.a.address,children:[Object(i.jsx)("div",{className:k.a.x,onClick:function(){t.closeModal()},children:Object(i.jsx)("img",{src:"https://www.pngkey.com/png/full/515-5150375_open-multiply-icon.png",alt:""})}),Object(i.jsx)("input",{ref:e,name:"id",placeholder:"id",required:!0}),Object(i.jsx)("input",{ref:n,name:"title",placeholder:"title",required:!0}),Object(i.jsx)("input",{ref:a,name:"description",placeholder:"description",required:!0}),Object(i.jsx)("input",{ref:r,name:"price",placeholder:"price",required:!0}),Object(i.jsx)("button",{onClick:function(){!function(){var i={id:e.current.value,title:n.current.value,description:a.current.value,price:r.current.value};t.AddProduct(i),t.closeModal(i)}()},children:"Add card"})]})},C=(n(25),function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={modalShow:!1},i}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.products,a=e.dispatch,c=function(t){a(m,t)};return Object(i.jsxs)("div",{className:"product-list",children:[this.state.modalShow?Object(i.jsx)("div",{className:"product-list__modal",children:Object(i.jsx)("div",{className:"product-list__modal-container",children:Object(i.jsx)(N,{AddProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n[0];a(O,t)},closeModal:function(){t.setState({modalShow:!1})}})})}):null,Object(i.jsx)("button",{className:"product-list-btn",onClick:function(){t.setState({modalShow:!0})},children:"Add new one"}),Object(i.jsx)("div",{className:"product-list__inner",children:n.map((function(t){return Object(i.jsx)(S,{removeProduct:c,product:t},t.id)}))})]})}}]),n}(c.a.Component)),E=y("products",(function(t){return t}))(C),R=n(17),A=n(11),M=n.n(A),U=y("auth",(function(t){return t}))((function(t){var e=c.a.useRef(null),n=c.a.useRef(null),a=c.a.useState(0),r=Object(R.a)(a,2),s=r[0],o=r[1];return Object(i.jsx)("div",{className:M.a.container,children:Object(i.jsxs)("form",{onSubmit:function(i){i.preventDefault();var a={auth:{login:e.current.value,pass:n.current.value}};"superMan"===a.auth.login&&12345===+a.auth.pass?(t.dispatch(x,a),o(!0),t.closeModal()):o(!1)},className:!1===s?M.a.err:M.a.form,children:[Object(i.jsx)("div",{className:M.a.x,onClick:function(){t.closeModal()},children:Object(i.jsx)("img",{src:"https://www.pngkey.com/png/full/515-5150375_open-multiply-icon.png",alt:""})}),Object(i.jsx)("input",{ref:e,required:!0,type:"text",placeholder:"login"}),Object(i.jsx)("input",{ref:n,required:!0,type:"password",placeholder:"password"}),Object(i.jsx)("button",{children:"login"}),Object(i.jsx)("div",{className:"",children:"login: superMan"}),Object(i.jsx)("div",{className:"",children:"pass: 12345"})]})})})),I=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).state={authShow:!1},i}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("main",{children:[Object(i.jsx)(D,{logOut:function(){t.props.dispatch(x,{auth:{login:"",pass:""}})},openModal:function(){t.setState({authShow:!0})}}),this.state.authShow?Object(i.jsx)(U,{closeModal:function(){t.setState({authShow:!1})}}):null,Object(i.jsx)(E,{})]})}}]),n}(c.a.Component),D=y("auth",(function(t){return t}))((function(t){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("div",{className:"header__inner",children:Object(i.jsxs)("div",{className:"header__right",children:[t.auth.login?Object(i.jsx)("h6",{className:"header__title",children:t.auth.login}):null,""===t.auth.login?Object(i.jsx)("div",{onClick:function(){t.openModal()},className:"header__auth header__auth_gr",children:"login"}):Object(i.jsx)("div",{onClick:function(){t.logOut()},className:"header__auth header__auth_rd",children:"logOut"})]})})})})),F=y("auth",(function(t){return t}))(I);s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.r(e),n.d(e,"Store",(function(){return u}));var i=n(14),a=n(7),c=n(2),r=n(3),s=n(4),o={products:{products:[{id:42355,title:"\u0418\u0433\u0440\u0443\u0448\u043a\u0430 \u041a\u043e\u0440\u043e\u043b\u044c",description:"\u0418\u0433\u0440\u0443\u0448\u043a\u0430 \u041a\u043e\u0440\u043e\u043b\u044c. \u0412\u043e\u0437\u0432\u0440\u0430\u0441\u0442 5+. \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043b\u044e\u0448. \u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 - \u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f",price:11990},{id:63479,title:"\u041f\u0435\u0432\u0435\u0446 \u041a\u043e\u0440\u043e\u043b\u044c",description:"\u0418\u0433\u0440\u0443\u0448\u043a\u0430 \u041a\u043e\u0440\u043e\u043b\u044c. \u0412\u043e\u0437\u0432\u0440\u0430\u0441\u0442 5+. \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043b\u044e\u0448. \u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 - \u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f",price:18990},{id:45018,title:"\u041f\u0440\u043e\u0441\u0442\u043e \u041a\u043e\u0440\u043e\u043b\u044c",description:"\u0418\u0433\u0440\u0443\u0448\u043a\u0430 \u041a\u043e\u0440\u043e\u043b\u044c. \u0412\u043e\u0437\u0432\u0440\u0430\u0441\u0442 5+. \u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u043f\u043b\u044e\u0448. \u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 - \u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f",price:1400}]},auth:{auth:{login:"",password:""}}},u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Object(r.a)(this,t),!e)throw new Error("Could not create store without name!");var i={options:this.getOptions(n.options),reducers:this.getReducers(n.reducers)};if(this.name=e,this.listeners=[],this.config=i,this.data=n.data||{},this.config.options.shouldInitFromState){if(!this.config.options.stateKey)throw new Error("shouldInitFromState is true, but stateKey is not stated!");this.initFromGlobalState()}}return Object(s.a)(t,[{key:"getOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={shouldEmitAfterSubscription:!0,shouldInitFromState:!1,stateKey:void 0};return Object(c.a)(Object(c.a)({},e),t)}},{key:"getReducers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return[].concat(e,Object(a.a)(t))}},{key:"initFromGlobalState",value:function(){var t=o[this.config.options.stateKey]||{};this.data=Object(c.a)(Object(c.a)({},this.data),t)}},{key:"dispatch",value:function(t,e){var n,a=Object(i.a)(this.config.reducers);try{for(a.s();!(n=a.n()).done;){var c=n.value;if(c.type===t){if("function"!==typeof c.action)throw new Error("Action function must be specified on reducer!");this.data=c.action(this.data,e)}}}catch(r){a.e(r)}finally{a.f()}this.__emit()}},{key:"subscribe",value:function(t){-1===this.listeners.findIndex((function(e){return e===t}))&&(this.listeners.push(t),this.config.options.shouldEmitAfterSubscription&&t(this.data))}},{key:"unsubscribe",value:function(t){var e=this.listeners.findIndex((function(e){return e===t}));-1!==e&&this.listeners.splice(e,1)}},{key:"__emit",value:function(){var t,e=Object(i.a)(this.listeners);try{for(e.s();!(t=e.n()).done;){var n=t.value;"function"===typeof n?n(this.data):console.warn("listener is not a function!")}}catch(a){e.e(a)}finally{e.f()}}}]),t}()}},[[26,1,2]]]);
//# sourceMappingURL=main.51308054.chunk.js.map