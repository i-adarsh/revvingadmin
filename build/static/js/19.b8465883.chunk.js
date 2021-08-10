(this["webpackJsonprevving-customer"]=this["webpackJsonprevving-customer"]||[]).push([[19],{136:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(164),r=t.n(n),s=function(e,a){var t={},n=!0;return a.forEach((function(a){for(var s=a.field,c=a.validations,o=0;o<c.length;o++){var i=c[o].split(":");switch(i[0]){case"numeric":if(!r.a.isEmpty("".concat(e[s]))&&!r.a.isNumeric("".concat(e[s]))){t[s]="".concat(a.name," must be numeric."),n=!1;continue}break;case"email":if(!r.a.isEmpty("".concat(e[s]))&&!r.a.isEmail("".concat(e[s]))){t[s]="Please enter valid email address.",n=!1;continue}break;case"digit":var u=i,l=!1;if(3===i.length&&(l=!0),!r.a.isEmpty("".concat(e[s]))&&!r.a.isLength("".concat(e[s]),{min:Number(u[1]),max:Number(l?u[2]:u[1])})){t[s]=l?"".concat(a.name," must be ").concat(Number(u[1])," - ").concat(Number(u[2])," characters"):"".concat(a.name," must be ").concat(Number(u[1])," digits."),n=!1;continue}break;case"password":if(!r.a.isEmpty("".concat(e[s]))){if(!r.a.isLength("".concat(e[s]),{min:8})||!r.a.isLength("".concat(e[s]),{max:25})){t[s]="".concat(a.name," must be atleast 8 characters."),n=!1;continue}var d=new RegExp("^(?=.*[A-Z])");if(!d.test("".concat(e[s]))){t[s]="".concat(a.name," must contain one capital character"),n=!1;continue}if(!(d=new RegExp("^(?=.*[a-z])")).test("".concat(e[s]))){t[s]="".concat(a.name," must contain one small character"),n=!1;continue}if(!(d=new RegExp("^(?=.*[0-9])")).test("".concat(e[s]))){t[s]="".concat(a.name," must contain a digit"),n=!1;continue}if(!(d=new RegExp("^(?=.*[@$!%*#?&\xa3=+^\u20ac])")).test("".concat(e[s]))){t[s]="".concat(a.name," must contain a special character"),n=!1;continue}}break;case"confirm":if(!r.a.equals("".concat(e[s]),"".concat(e["".concat(s,"Confirm")]))){t["".concat(s,"Confirm")]="".concat(a.name," did not match"),n=!1;continue}break;case"required":default:if(r.a.isEmpty("".concat(e[s]))||!"".concat(e[s]).trim()){t[s]="".concat(a.name," is required."),n=!1;continue}}}})),{isValid:n,errors:t}}},687:function(e,a,t){"use strict";t.r(a);var n=t(61),r=t(0),s=t(59),c=t(2),o=t(690),i=t(648),u=t(128),l=t(127),d=t(691),m=t(651),p=t(650),b=t(441),f=t.n(b),v=t(125),j=t(124),g=t(640),h=t(649),O=t(46),x=t(64),y=t(60),w=[{field:"username",validations:["required"],name:"User name"},{field:"password",validations:["required"],name:"Password"}],S=[{field:"otp",validations:["required"],name:"Otp"}],N=t(136),E=t(7),k=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),background:"#fff",boxShadow:"none",border:"1px solid #3c3c3c",borderRadius:4,"&:hover":{backgroundColor:"#fff",boxShadow:"none"}},btnWrapper:{position:"relative"},buttonProgress:{color:O.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));a.default=Object(y.b)((function(e){return{loginData:e.login.data,sendSmsReducer:e.sendSmsReducer.data}}))((function(e){var a=e.dispatch,t=e.loginData,b=e.history,j=e.sendSmsReducer,O=Object(c.useState)({}),y=Object(s.a)(O,2),C=y[0],_=y[1],R=Object(c.useState)(!1),L=Object(s.a)(R,2),P=L[0],W=L[1],q=Object(c.useState)(!1),D=Object(s.a)(q,2),T=D[0],V=D[1],F=Object(c.useState)({username:"",password:"",otp:""}),I=Object(s.a)(F,2),U=I[0],z=I[1],K=Object(c.useRef)({value:""}),M=Object(x.b)().enqueueSnackbar;Object(c.useEffect)((function(){var e=function(e){M(j.message.data?j.message.data:j.message,{variant:e})};"success"===(null===j||void 0===j?void 0:j.status)&&("send_sms"===K.current.value?(K.current.value="",W(!1),V(!0)):"resend-otp"===K.current.value&&(M("Login security code Sent",{variant:"success"}),K.current.value="")),"failure"===(null===j||void 0===j?void 0:j.status)&&("send_sms"===K.current.value?(e("error"),K.current.value="",W(!1)):"resend-otp"===K.current.value&&(e("error"),K.current.value=""))}),[j,b,M]),Object(c.useEffect)((function(){var e;"success"===(null===t||void 0===t?void 0:t.status)&&"verify_otp"===K.current.value&&(b.push("/funding"),K.current.value="",W(!1)),"failure"===(null===t||void 0===t?void 0:t.status)&&"verify_otp"===K.current.value&&(e="error",M(t.message.data?t.message.data:t.message,{variant:e}),K.current.value="",W(!1))}),[t,b,M]);var G=k(),J=function(e){z((function(a){return Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},e.target.name,e.target.value))}))},A=function(e){var a={errors:{},isValid:!1};return"login"===e?(a=Object(N.a)(U,w),_(a.errors)):(a=Object(N.a)(U,S),_(a.errors)),a.isValid},Z=function(e,t){if("Enter"===e.key){var n=U.username,r=U.password,s=U.otp;A(t)&&(W(!0),"login"===t?(K.current.value="send_sms","login"===t&&n&&r&&a({type:"SEND_SMS",payload:{username:n,password:r}})):(K.current.value="verify_otp","otp"===t&&n&&r&&s&&a({type:"LOGIN_USER",payload:{username:n,password:r,otp:s}})))}};return Object(E.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(E.jsx)(l.a,{}),Object(E.jsx)(u.a,{className:G.paper,children:T?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(o.a,{className:G.avatar,children:Object(E.jsx)(f.a,{})}),Object(E.jsx)(v.a,{component:"h1",variant:"h5",children:"Login security code"}),Object(E.jsxs)("form",{className:G.form,noValidate:!1,children:[Object(E.jsx)(d.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"user-otp",label:"Login security code",name:"otp",autoComplete:"otp",autoFocus:!0,value:U.otp,onChange:function(e){return J(e)},error:!!C.otp,helperText:C.otp?C.otp:"",onKeyPress:function(e){return Z(e,"otp")}}),Object(E.jsx)(v.a,{component:"h6",variant:"body1",align:"right",style:{cursor:"pointer"},onClick:function(){return function(){var e=U.username,t=U.password;K.current.value="resend-otp",e&&t&&a({type:"SEND_SMS",payload:{username:e,password:t}})}()},children:"Resend"}),Object(E.jsxs)(u.a,{className:G.btnWrapper,children:[Object(E.jsx)(i.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",disabled:P,className:G.submit,onClick:function(){return function(){var e=U.username,t=U.password,n=U.otp;A("otp")&&(K.current.value="verify_otp",W(!0),e&&t&&n&&a({type:"LOGIN_USER",payload:{username:e,password:t,otp:n}}))}()},children:"Verify login security code"}),P&&Object(E.jsx)(h.a,{size:24,className:G.buttonProgress})]})]})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(o.a,{className:G.avatar,children:Object(E.jsx)(f.a,{})}),Object(E.jsx)(v.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(E.jsxs)("form",{className:G.form,noValidate:!1,children:[Object(E.jsx)(d.a,{variant:"outlined",margin:"normal",fullWidth:!0,id:"user",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){return J(e)},error:!!C.username,helperText:C.username?C.username:"",onKeyPress:function(e){return Z(e,"login")}}),Object(E.jsx)(d.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return J(e)},error:!!C.password,helperText:C.password?C.password:"",onKeyPress:function(e){return Z(e,"login")}}),Object(E.jsxs)(u.a,{className:G.btnWrapper,children:[Object(E.jsx)(i.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",disabled:P,className:G.submit,onClick:function(){return function(){var e=U.username,t=U.password;A("login")&&(K.current.value="send_sms",W(!0),e&&t&&a({type:"SEND_SMS",payload:{username:e,password:t}}))}()},children:"Sign In"}),P&&Object(E.jsx)(h.a,{size:24,className:G.buttonProgress})]}),Object(E.jsx)(p.a,{container:!0,children:Object(E.jsx)(p.a,{item:!0,xs:!0,children:Object(E.jsx)(m.a,{href:"#",variant:"body2",children:"Forgot password?"})})})]})]})})]})}))}}]);
//# sourceMappingURL=19.b8465883.chunk.js.map