(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},131:function(e,t,a){e.exports=a.p+"static/media/gh.283497e5.png"},143:function(e,t,a){e.exports=a(238)},170:function(e,t,a){},171:function(e,t,a){},202:function(e,t){},205:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(22),c=a.n(o),s=a(23),i=a(17),u=a(26),m=a(8),d=function(){return l.a.createElement("div",{className:"col-md-6 p-0 bg-main h-md-100"},l.a.createElement("div",{className:"text-white d-md-flex align-items-center h-100 p-5 justify-content-center"},l.a.createElement("div",{className:"logoarea pt-5 pb-5"},l.a.createElement("ol",null,l.a.createElement("i",{className:"fa fa-heart icon",style:{marginLeft:"0.1rem"}}),"\xa0 Follow your interests."),l.a.createElement("ol",null,"\xa0",l.a.createElement("i",{className:"fa fa-user icon"}),"\xa0 Collaborate with others."),l.a.createElement("ol",null,"\xa0",l.a.createElement("i",{className:"fa fa-search icon"}),"\xa0 See what's happening."))))},f=a(95),h=a(35),p=a(246),g=a(247),E=a(244),b=a(40),v=a(13),y=a(14),O=a(18),N=a(16),j=a(15),w=a(12),S=a.n(w),C=function(e){e?(S.a.defaults.headers.common.Authorization="Bearer ".concat(e),console.log(S.a.defaults.headers.common.Authorization),console.log(e)):S.a.defaults.headers.common.Authorization=null},k=function(){return function(e){S.a.get("/api/users").then((function(t){return e(x(t.data))}))}},x=function(e){return{type:"SET_CURRENT_USER",payload:e}},_=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={fullname:"",email:"",password:"",password2:"",errors:{}},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(y.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={fullname:this.state.fullname,email:this.state.email,password:this.state.password};console.log(t),this.props.registerUser(t,this.props.history)}},{key:"render",value:function(){var e=this,t=(this.props.classes,this.state.errors);return l.a.createElement("div",null,l.a.createElement(f.a,{className:"modal-body"},l.a.createElement(f.a.Group,{className:"md-form form-sm mb-4"},l.a.createElement("i",{className:"fa fa-user prefix mr-2"}),l.a.createElement(f.a.Label,{"data-error":"wrong","data-success":"right"},"Your Name"),l.a.createElement(f.a.Control,{type:"name",placeholder:"Enter name",className:"form-control form-control-sm validate",value:this.state.fullname,onChange:this.handleChange,name:"fullname"}),l.a.createElement(f.a.Text,null," ",t.fullname?t.fullname:null," ")),l.a.createElement(f.a.Group,{className:"md-form form-sm mb-4"},l.a.createElement("i",{className:"fa fa-envelope prefix mr-2"}),l.a.createElement(f.a.Label,{"data-error":"wrong","data-success":"right"},"Your Email"),l.a.createElement(f.a.Control,{type:"email",placeholder:"Enter email",className:"form-control form-control-sm validate",value:this.state.email,onChange:this.handleChange,name:"email"}),l.a.createElement(f.a.Text,null,t.email?t.email:null)),l.a.createElement(f.a.Group,{className:"md-form form-sm mb-4"},l.a.createElement("i",{className:"fa fa-lock prefix mr-2"}),l.a.createElement(f.a.Label,{"data-error":"wrong","data-success":"right"},"Your Password"),l.a.createElement(f.a.Control,{type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",className:"form-control form-control-sm validate",value:this.state.password,onChange:this.handleChange,name:"password"}),l.a.createElement(f.a.Text,null,t.password?t.password:null)),l.a.createElement("div",{className:"text-center form-sm mt-2"},l.a.createElement(h.a,{className:"modalSignin btn btn-primary",onClick:function(){return e.handleSubmit}},"Sign up ",l.a.createElement("i",{className:"fa fa-sign-in ml-1"})))),l.a.createElement(p.a.Footer,null,l.a.createElement("div",{className:"options text-right"},l.a.createElement("p",{className:"pt-1"},"Already have an account?"," ",l.a.createElement("a",{href:"login",className:"text-primary mr-1"},"Log In")),l.a.createElement("p",null,"Escape to close"))))}}]),a}(r.Component),I=Object(i.b)((function(e){return{errors:e.errors}}),{registerUser:function(e,t){return function(a){S.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(m.g)(_)),L=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",errors:{}},n.handleChange=n.handleChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(y.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};console.log(t),this.props.loginUser(t),this.props.history.push("/profile/")}},{key:"render",value:function(){this.props.classes;var e=this.state.errors;return l.a.createElement("div",null,l.a.createElement(f.a,{className:"modal-body mx-4",ref:"loggingIn",action:"/profile"},l.a.createElement(f.a.Group,{className:"md-form mb-4",controlId:"formBasicEmail"},l.a.createElement(f.a.Label,{"data-error":"wrong","data-success":"right"},"Your email"),l.a.createElement(f.a.Control,{type:"email",placeholder:"Enter email",className:"form-control validate",name:"email",value:this.state.email,onChange:this.handleChange}),l.a.createElement(f.a.Text,{className:"text-muted"},e.email?e.email:"We'll never share your email with anyone else.")),l.a.createElement(f.a.Group,{className:"md-form pb-3",controlId:"formBasicPassword"},l.a.createElement(f.a.Label,{"data-error":"wrong","data-success":"right"},"Your password"),l.a.createElement(f.a.Control,{type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",className:"form-control validate",name:"password",value:this.state.password,onChange:this.handleChange}),l.a.createElement("div",{className:"text-center mb-3"}),l.a.createElement(f.a.Text,{className:"text-muted"},e.password?e.password:""),l.a.createElement("p",{className:"font-small blue-text d-flex justify-content-end"},l.a.createElement("a",{href:"/",className:"blue-text ml-1"},"Forgot Password?"))),l.a.createElement("div",{className:"text-center mb-3"},l.a.createElement(h.a,{type:"button",className:"modalSignin btn btn-primary btn-block btn-rounded",onClick:this.handleSubmit},"Sign in")),l.a.createElement("p",{className:"font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"},"Or Sign in with"),l.a.createElement("div",{className:"row my-2 d-flex justify-content-center"},l.a.createElement(h.a,{href:"/googlelogin",type:"button",className:"goog btn-dark mr-2 md-2"},l.a.createElement("i",{className:"fab fa-google",style:{fontSize:30}})),l.a.createElement(h.a,{href:"/githublogin",type:"button",className:"github btn-dark mr-2 md-2"},l.a.createElement("i",{className:"fab fa-github",style:{fontSize:30}})))),l.a.createElement(p.a.Footer,null,l.a.createElement("div",{className:"options text-right"},l.a.createElement("p",null,"Escape to close"))))}}]),a}(r.Component),T=Object(i.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){S.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwToken",a),C(a),t(k())})).catch((function(e){t({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(m.g)(L)),P=function(e){return l.a.createElement(p.a,Object.assign({},e,{backdrop:"static",keyboard:!0}),l.a.createElement(p.a.Body,null,l.a.createElement(g.a,{defaultActiveKey:"login"},l.a.createElement(E.a,{eventKey:"login",title:"Login"},l.a.createElement(T,null)),l.a.createElement(E.a,{eventKey:"register",title:"Register",id:"register"},l.a.createElement(I,null)))))},R=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-6 p-0 bg-dark h-md-100 loginarea"},l.a.createElement("div",{className:"d-md-flex align-items-center h-md-100 p-5 justify-content-center loginarea"},l.a.createElement("div",{className:"d-md-flex align-items-center h-md-100 p-5 justify-content-center"},l.a.createElement(f.a,{className:"p-5"},l.a.createElement(h.a,{type:"button",className:"signinBtn btn btn-primary btn-round btn-block",onClick:function(){return n(!0)}},"Sign in"))))),l.a.createElement(P,{show:a,onHide:function(){return n(!1)}}))},A=(a(170),function(){return l.a.createElement("div",{className:"d-md-flex h-md-100 align-items-center"},l.a.createElement(d,null),l.a.createElement(R,null))}),U=a(6),D=a(131),G=a.n(D),F=(a(171),function(){var e=Object(r.useContext)(We),t=e.state,a=e.dispatch,n=Object(r.useState)({errorMessage:"",isLoading:!1}),o=Object(s.a)(n,2),c=o[0],i=o[1],u=t.client_id,d=t.redirect_uri;return Object(r.useEffect)((function(){var e=window.location.href;if(e.includes("?code=")){var n=e.split("?code=");window.history.pushState({},null,n[0]),i(Object(U.a)(Object(U.a)({},c),{},{isLoading:!0}));var r={client_id:t.client_id,redirect_uri:t.redirect_uri,client_secret:t.client_secret,code:n[1]},l=t.proxy_url;fetch(l,{method:"POST",body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){a({type:"LOGIN",payload:{user:e,isLoggedIn:!0}})})).catch((function(e){console.log(e),i({isLoading:!1,errorMessage:"Sorry! Login failed"})}))}}),[t,a,c]),t.isLoggedIn?l.a.createElement(m.a,{to:"/profile/:id"}):l.a.createElement("div",{className:"gitContainer"},l.a.createElement("div",{className:"login-card"},l.a.createElement("h1",{className:"welcome"},"Welcome"),l.a.createElement("h5",{className:"coding"},"Coding Society"),l.a.createElement("img",{src:G.a,alt:"GitHub OctoCat",className:"octocat"}),l.a.createElement("span",{className:"errMsg"},c.errorMessage),l.a.createElement("div",{className:"login-bar"},c.isLoading?l.a.createElement("div",{className:"loader-container"},l.a.createElement("div",{className:"loader"})):l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{className:"login-link",href:"https://github.com/login/oauth/authorize?scope=user&client_id=".concat(u,"&redirect_uri=").concat(d),onClick:function(){i(Object(U.a)(Object(U.a)({},c),{},{errorMessage:""}))}},"Authorize"))),l.a.createElement("p",{className:"text-secondary text-center"},"This leads to GitHub's Authorization")))}),B=a(44),W=a(132),M=a.n(W),K=a(133),z=a.n(K),H=a(245),J=a(140),Y=(a(205),function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleSelect=function(e){var t,a=JSON.parse(localStorage.getItem("user"));t=a?a.name:n.props.auth.user.fullname,n.setState({name:t}),n.setState({room:e.currentTarget})},n.state={name:"",room:""},n}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.auth,e.user,e.profile,e.isAuthenticated),a=t&&l.a.createElement(h.a,{href:"/reduxProfile/".concat(this.props.auth.user._id),className:"navbarLogo"},l.a.createElement("i",{className:"far fa-user-circle",alt:"reduxProfile","aria-hidden":"true"}));return l.a.createElement("div",{className:"navbarContainer"},l.a.createElement(h.a,{href:"/Posts",className:"navbarLogo"},l.a.createElement("i",{className:"fas fa-stream","aria-hidden":"true",title:"profile"})),l.a.createElement(H.a,{className:"navbarLogo",title:l.a.createElement("i",{className:"far fa-comment-alt","aria-hidden":"true"}),drop:"up"},l.a.createElement(J.a.Item,{className:"liveChats"},"Chat Rooms:"),l.a.createElement(J.a.Item,{href:"/chat?name=".concat(this.state.name,"&room=Frontend"),eventKey:"Frontend",onSelect:this.handleSelect},"#frontend"),l.a.createElement(J.a.Item,{href:"/chat?name=".concat(this.state.name,"&room=Backend"),eventKey:"Backend",onSelect:this.handleSelect},"#backend"),l.a.createElement(J.a.Item,{href:"/chat?name=".concat(this.state.name,"&room=Hardware"),eventKey:"Hardware",onSelect:this.handleSelect},"#hardware"),l.a.createElement(J.a.Item,{href:"/chat?name=".concat(this.state.name,"&room=Gaming"),eventKey:"Gaming",onSelect:this.handleSelect},"#gaming"),l.a.createElement(J.a.Item,{href:"/chat?name=".concat(this.state.name,"&room=Life"),eventKey:"Life",onSelect:this.handleSelect},"#life")),l.a.createElement(h.a,{href:"/profile/:id",className:"navbarLogo"},l.a.createElement("i",{className:"far fa-user-circle","aria-hidden":"true"})),t?a:null)}}]),a}(r.Component)),q=Object(i.b)((function(e){return{auth:e.auth,profile:e.profile,user:e.user,isAuthenticated:e.auth.isAuthenticated}}))(Y),V=a(135),X=a.n(V),$=a(94),Q=a.n($),Z=(a(226),a(125),a(126),a(127),a(128),function(e){var t=e.message,a=t.text,n=t.user,o=e.name,c=(Object(r.useContext)(We).state,!1),s=o.trim().toLowerCase();return n===s&&(c=!0),c?l.a.createElement("div",{className:"message-content-inner"},l.a.createElement("div",{className:"message-bubble me"},l.a.createElement("div",{className:"message-bubble-inner"},l.a.createElement("div",{className:"message-avatar"}),l.a.createElement("div",{className:"message-text"},l.a.createElement("p",null,Q.a.emojify(a)))),l.a.createElement("div",{className:"uk-clearfix"}),l.a.createElement("p",{className:"sentText justifyEnd"},s),l.a.createElement("span",{className:"sentText justifyEnd"}," ",(new Date).toLocaleString()," "))):l.a.createElement("div",{className:"message-content-inner"},l.a.createElement("div",{className:"message-bubble"},l.a.createElement("div",{className:"message-bubble-inner"},l.a.createElement("div",{className:"message-avatar"}),l.a.createElement("div",{className:"message-text"},l.a.createElement("p",null,Q.a.emojify(a)))),l.a.createElement("div",{className:"uk-clearfix"}),l.a.createElement("p",{className:"sentText paddingLeft"},n),l.a.createElement("span",{className:"sentText paddingLeft"}," ",(new Date).toLocaleString()," ")))}),ee=(a(227),function(e){var t=e.messages,a=e.name;return l.a.createElement(X.a,{className:"messages messageViewer"},t.map((function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(Z,{message:e,name:a}))})))}),te=(a(228),function(e){var t=e.room;return l.a.createElement("div",{className:"infoBar chats-headline"},l.a.createElement("div",{className:"leftInnerContainer uk-flex"},l.a.createElement("h3",null,t),l.a.createElement("i",{className:"onlineIcon ml-2 mt-1 text-success fas fa-signal"})))}),ae=(a(229),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return l.a.createElement("form",{className:"message-reply uk-flex-middle uk-width-1-1"},l.a.createElement("textarea",{className:"chatInput uk-textarea uk-width-expand",type:"text",placeholder:"What's up?",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),l.a.createElement("button",{className:"sendButton button primary",onClick:function(e){return a(e)}},l.a.createElement("i",{className:"uil-plane"})))}),ne=(a(230),function(e){var t=e.location,a=Object(r.useState)(""),o=Object(s.a)(a,2),c=o[0],i=o[1],u=Object(r.useState)(""),m=Object(s.a)(u,2),d=m[0],f=m[1],h=Object(r.useState)(""),p=Object(s.a)(h,2),g=(p[0],p[1]),E=Object(r.useState)(""),b=Object(s.a)(E,2),v=b[0],y=b[1],O=Object(r.useState)([]),N=Object(s.a)(O,2),j=N[0],w=N[1];Object(r.useEffect)((function(){var e=M.a.parse(t.search),a=e.name,r=e.room;return n=z()("localhost:5000"),f(r),i(a),n.emit("join",{name:a,room:r},(function(e){e&&alert(e)})),function(){n.emit("disconnect"),n.off()}}),["localhost:5000",t.search]),Object(r.useEffect)((function(){n.on("message",(function(e){w((function(t){return[].concat(Object(B.a)(t),[e])}))})),n.on("roomData",(function(e){var t=e.users;g(t)}))}),[]);return l.a.createElement("div",{className:"outerChatContainer"},l.a.createElement(q,null),l.a.createElement("div",{className:"chatContainer"},l.a.createElement(te,{room:d}),l.a.createElement(ee,{messages:j,name:c}),l.a.createElement(ae,{message:v,setMessage:y,sendMessage:function(e){e.preventDefault(),v&&n.emit("sendMessage",v,(function(){return y("")}))}})))}),re=function(e){return S.a.post("/api/gitinfo/addGitInfo",e)},le=function(e){return S.a.get("/api/userInfo/"+e)},oe=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_CLIENT_ID:"1903c18312e99078f989",REACT_APP_CLIENT_SECRET:"638ace22dde44ac2aad94d0cd93918d3a99f4257",REACT_APP_REDIRECT_URI:"http://localhost:3000/githublogin",REACT_APP_PROXY_URL:"http://localhost:5000/authenticate"}),ce=oe.REACT_APP_CLIENT_ID,se=oe.REACT_APP_CLIENT_SECRET,ie=oe.REACT_APP_REDIRECT_URI,ue=oe.REACT_APP_PROXY_URL,me={isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn"))||!1,user:JSON.parse(localStorage.getItem("user"))||null,id:"",client_id:ce,redirect_uri:ie,client_secret:se,proxy_url:ue},de=function(e,t){switch(t.type){case"LOGIN":localStorage.setItem("isLoggedIn",JSON.stringify(t.payload.isLoggedIn)),localStorage.setItem("user",JSON.stringify(t.payload.user));var a={id:t.payload.user.id,htmlURL:t.payload.user.html_url,name:t.payload.user.name,avatarUrl:t.payload.user.avatar_url,bio:t.payload.user.bio,blog:t.payload.user.blog,company:t.payload.user.company,hireable:t.payload.user.hireable};return re(a),Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:t.payload.isLoggedIn,user:t.payload.user});case"LOGOUT":return localStorage.clear(),Object(U.a)(Object(U.a)({},e),{},{isLoggedIn:!1,user:null});case"VIEWUSER":return le().then(console.log(t.payload)).catch((function(e){return console.log(e)})),Object(U.a)({},e);default:return e}},fe=a(136),he=a(34),pe=a(137),ge={},Ee={list:null,loading:!1},be={user:JSON.parse(localStorage.getItem("user"))||null,isAuthenticated:!1},ve={loading:!1,user:null},ye=Object(he.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(U.a)(Object(U.a)({},e),{},{list:[t.payload].concat(Object(B.a)(e.list))});case"LOADING_POSTS":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"GET_POSTS":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,list:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(U.a)(Object(U.a)({},e),{},{isAuthenticated:0!==Object.keys(t.payload).length,user:t.payload});case"FOLLOW":return Object(U.a)(Object(U.a)({},e.user),{},{following:[].concat(Object(B.a)(e.user.following),[t.payload])});case"UNFOLLOW":return Object(U.a)(Object(U.a)({},e),{},{user:Object(U.a)(Object(U.a)({},e.user),{},{following:e.user.following.filter((function(e){return e!==t.payload}))})});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PROFILE":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"GET_PROFILE":return Object(U.a)(Object(U.a)({},e),{},{loading:!1,user:t.payload});default:return e}}}),Oe=Object(he.d)(ye,Object(he.a)(pe.a)),Ne=(a(231),function(){var e=Object(r.useContext)(We).state;if(!e.isLoggedIn)return l.a.createElement(m.a,{to:"/login"});var t=e.user,a=t.avatar_url,n=t.name,o=t.public_repos,c=t.followers,s=t.following;return l.a.createElement("div",{className:"card profCard container",id:"profile"},e.avatar_url?l.a.createElement("i",{className:"avatar fas fa-user-circle",alt:"Avatar"}):l.a.createElement("img",{className:"avatar",src:a,alt:"Avatar"}),l.a.createElement("h1",null,n),l.a.createElement("ul",{className:"ghStats mt-3"},l.a.createElement("h5",null,"GitHub Stats"),e.user?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,o," Repos"),l.a.createElement("li",null,c," Followers"),l.a.createElement("li",null,s," Following")):l.a.createElement("li",null,"Click the Octocat button below to check out my profile!")),l.a.createElement("p",null," Maybe this will be the one box you can edit & write something about yourself. Plus, I couldn't look at the Lorem Ipsum anymore."),l.a.createElement(h.a,{href:"#",target:"_blank",className:"msgBtn"},"Message me"))}),je=(a(232),function(){var e=Object(r.useContext)(We).state;if(!e.isLoggedIn)return l.a.createElement(m.a,{to:"/"});var t=e.user.html_url;return l.a.createElement("div",{className:"card profCard container my-2 d-flex justify-content-center",id:"social"},l.a.createElement(h.a,{href:"#",type:"button",className:"socialBtn"},l.a.createElement("i",{className:"fab fa-facebook-square m-2","aria-hidden":"true",title:"facebook"})),l.a.createElement(h.a,{href:"#",type:"button",className:"socialBtn"},l.a.createElement("i",{className:"fab fa-instagram m-2","aria-hidden":"true",title:"Instagram"})),l.a.createElement(h.a,{href:"#",type:"button",className:"socialBtn"},l.a.createElement("i",{className:"fab fa-linkedin m-2","aria-hidden":"true",title:"Linkedin"})),l.a.createElement(h.a,{href:t,type:"button",className:"socialBtn"},l.a.createElement("i",{className:"fab fa-github-square m-2","aria-hidden":"true",title:"Github"})))}),we=(a(233),function(){return l.a.createElement("div",{className:"card profCard text-align container"},l.a.createElement("h2",{className:"d-flex justify-content-center"},"About me"),l.a.createElement("div",{className:"book-card"},l.a.createElement("div",{className:"book-content"},l.a.createElement("h4",null,"Favorite Book"),l.a.createElement("p",null,'The book concerns duality in Kerouac\'s life and ideals, examining the relationship of the outdoors, mountaineering, hiking, and hitchhiking through the West with his "city life" of jazz clubs, poetry readings, and drunken parties. The protagonist\'s search for a "Buddhist" context to his experiences (and those of others he encounters) recurs throughout the story.'))),l.a.createElement("div",{className:"book-card"},l.a.createElement("div",{className:"book-content"},l.a.createElement("h4",null,"My Experience"),l.a.createElement("p",null,"The quests of Fitz Chivalry, from royal bastard to assassin's apprentice"))))}),Se=(a(234),function(){var e=Object(r.useContext)(We),t=e.state,a=e.dispatch;if(!t.isLoggedIn)return l.a.createElement(m.a,{to:"/"});return l.a.createElement("div",{className:"card profCard actions container"},l.a.createElement("h2",{className:"d-flex justify-content-center"},"Settings"),l.a.createElement("div",{className:"row justify-content-around my-2"},l.a.createElement(h.a,{className:"settingBtn"},l.a.createElement("i",{className:"fas fa-sliders-h"})),l.a.createElement(h.a,{className:"settingBtn",onClick:function(){a({type:"LOGOUT"})}},l.a.createElement("i",{className:"fas fa-sign-out-alt"}))))}),Ce=(a(235),function(){return l.a.createElement("div",{className:"profContainer"},l.a.createElement(q,null),l.a.createElement("div",{className:"cardContainer"},l.a.createElement(Ne,null),l.a.createElement(je,null),l.a.createElement(we,null),l.a.createElement(Se,null)))}),ke=function(){return{type:"LOAD_PROFILE"}},xe=function(){return{type:"LOADING_POSTS"}},_e=a(75),Ie=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.classes,e.post);return l.a.createElement(_e.a,null,l.a.createElement("div",null),l.a.createElement("div",null," ",t.user.fullname,l.a.createElement("h3",null,l.a.createElement(u.b,{to:"/reduxProfile/".concat(t.user.id)}," ",t.user.fullname," "),l.a.createElement("span",null," ",new Date(t.createdAt).toLocaleString()," ")),t.text))}}]),a}(r.Component),Le=a(138),Te=function(e){e.classes;return l.a.createElement("div",null,l.a.createElement(Le.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))},Pe=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleFollow=n.handleFollow.bind(Object(O.a)(n)),n.handleUnfollow=n.handleUnfollow.bind(Object(O.a)(n)),n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getPostsByUserId(this.props.match.params.userId),this.props.getUserProfile(this.props.match.params.userId)}},{key:"componentDidUpdate",value:function(e){this.props.auth.isAuthenticated&&e.user&&e.user.following!==this.props.user.following&&this.props.refreshUserProfile(this.props.match.params.userId)}},{key:"handleFollow",value:function(){this.props.followUser(this.props.match.params.userId)}},{key:"handleUnfollow",value:function(){this.props.unfollowUser(this.props.match.params.userId)}},{key:"render",value:function(){var e,t,a=this.props,n=a.classes,r=a.loadingPosts,o=a.loadingProfile,c=a.list,s=a.auth,i=a.user,u=a.profile,m=c&&c.map((function(e){return l.a.createElement(Ie,{key:e._id,post:e})}));return s.isAuthenticated&&(t=i&&i.following&&-1===i.following.indexOf(this.props.match.params.userId)?l.a.createElement("div",null,l.a.createElement(h.a,{onClick:this.handleFollow},"Follow")):l.a.createElement("div",null,l.a.createElement(h.a,{onClick:this.handleUnfollow},"Unfollow"))),u&&m&&(e=l.a.createElement(_e.a,{className:n},l.a.createElement("h1",null," ",u.fullname," "),l.a.createElement("div",null," ",u.email," "),l.a.createElement("div",null,l.a.createElement("div",null,m.length,l.a.createElement("span",null," posts ")),l.a.createElement("div",null,u.followers.length,l.a.createElement("span",null," followers ")),l.a.createElement("div",null,u.following.length,l.a.createElement("span",null," following ")),t))),l.a.createElement("div",null,l.a.createElement(we,null),o?l.a.createElement("div",null,"Loading"):e,r?l.a.createElement(Te,null):m,l.a.createElement(q,null))}}]),a}(r.Component),Re=Object(i.b)((function(e){return{loadingPosts:e.post.loading,list:e.post.list,profile:e.profile.user,loadingProfile:e.profile.loading,auth:e.auth,user:e.auth.user}}),{getPostsByUserId:function(e){return function(t){t(xe()),S.a.get("/api/posts/".concat(e)).then((function(e){return t({type:"GET_POSTS",payload:e.data})})).catch((function(e){return console.log(e)}))}},getUserProfile:function(e){return function(t){t(ke()),S.a.get("/api/users/".concat(e)).then((function(e){return t({type:"GET_PROFILE",payload:e.data})})).catch((function(e){return console.log(e)}))}},unfollowUser:function(e){return function(t){S.a.post("/api/users/unfollow",{userId:e}).then((function(e){return t({type:"UNFOLLOW",payload:e.data})})).catch((function(e){return console.log(e)}))}},followUser:function(e){return function(t){S.a.post("/api/users/follow",{userId:e}).then((function(e){return t({type:"FOLLOW",payload:e.data})})).catch((function(e){return console.log(e)}))}},refreshUserProfile:function(e){return function(t){S.a.get("/api/users/".concat(e)).then((function(e){return t({type:"GET_PROFILE",payload:e.data})})).catch((function(e){return console.log(e)}))}}})(Pe),Ae=function(){return{type:"LOADING_POSTS"}},Ue=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={text:""},n.handleTweetChange=n.handleTweetChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(y.a)(a,[{key:"handleTweetChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={text:this.state.text};console.log(t),this.props.addPost(t),this.setState({text:""})}},{key:"render",value:function(){this.props.classes;return l.a.createElement("div",null,l.a.createElement(f.a.Group,null,l.a.createElement(f.a.Control,{label:"What's new?",as:"textarea",rows:"3",onChange:this.handleTweetChange,value:this.state.text})),l.a.createElement(h.a,{onClick:this.handleSubmit},"Send Tweet"))}}]),a}(r.Component),De=Object(i.b)(null,{addPost:function(e){return function(t){S.a.post("/api/posts/add",e).then((function(e){return t({type:"ADD_POST",payload:e.data})})).catch((function(e){return console.log(e)}))}}})(Ue),Ge=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.loading,n=t&&t.map((function(e){return l.a.createElement(Ie,{key:e._id,post:e})}));return l.a.createElement("div",null,l.a.createElement(De,null),"List Post Page",a?l.a.createElement(Te,null):n,l.a.createElement(q,null))}}]),a}(r.Component),Fe=Object(i.b)((function(e){return{list:e.post.list,loading:e.post.loading}}),{getPosts:function(){return function(e){e(Ae),S.a.get("/api/posts/").then((function(t){return e({type:"GET_POSTS",payload:t.data})})).catch((function(e){return console.log(e)}))}}})(Ge),Be=function(e){Object(N.a)(a,e);var t=Object(j.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"Sorry we couldn't find that page Here's a picture of a dog instead",l.a.createElement("div",null,l.a.createElement("img",{src:"",alt:"insert cute puppy here :) "})),l.a.createElement(q,null))}}]),a}(r.Component),We=(a(236),Object(r.createContext)());localStorage.getItem("jwToken")&&(Date.now()/1e3>Object(fe.a)(localStorage.getItem("jwToken")).exp?Oe.dispatch((function(e){localStorage.removeItem("jwtToken"),C(),e(x())})):(C(localStorage.getItem("jwToken")),Oe.dispatch(k())));var Me=function(){var e=Object(r.useReducer)(de,me),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,{store:Oe},l.a.createElement(We.Provider,{value:{state:a,dispatch:n}},l.a.createElement(u.a,null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0,component:A}),l.a.createElement(m.b,{path:"/githublogin",exact:!0,component:F}),l.a.createElement(m.b,{path:"/profile/:id",exact:!0,component:Ce}),l.a.createElement(m.b,{path:"/reduxProfile/:userId",component:Re}),l.a.createElement(m.b,{path:"/Posts",component:Fe}),l.a.createElement(m.b,{path:"/join",exact:!0,component:ne}),l.a.createElement(m.b,{path:"/chat",exact:!0,component:ne}),l.a.createElement(m.b,{component:Be}))))))},Ke=(a(237),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ze(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(Me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ke?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ze(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ze(t,e)}))}}()}},[[143,1,2]]]);
//# sourceMappingURL=main.6a067d84.chunk.js.map