(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5965f59c"],{"5c07":function(e,a,l){},"6f2e":function(e,a,l){"use strict";var t=l("f3d6"),i=l.n(t);i.a},"7ccb":function(e,a,l){},"8ec7":function(e,a,l){},a814:function(e,a,l){"use strict";var t=l("5c07"),i=l.n(t);i.a},bb49:function(e,a,l){},c1db:function(e,a,l){"use strict";var t=l("8ec7"),i=l.n(t);i.a},c6f3:function(e,a,l){"use strict";var t=l("7ccb"),i=l.n(t);i.a},c867:function(e,a,l){"use strict";var t=l("bb49"),i=l.n(t);i.a},f3d6:function(e,a,l){},f5df:function(e,a,l){"use strict";l.r(a);var t=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-6"},[l("register-form",{on:{"on-submit":e.onRegisterSubmit}})],1),l("div",{staticClass:"col-md-6"},[l("login-form",{on:{"on-submit":e.onLoginSubmit}})],1),l("div",{staticClass:"col-md-12"},[l("type-validation-form",{on:{"on-submit":e.onTypeValidationSubmit}})],1),l("div",{staticClass:"col-md-12"},[l("range-validation-form",{on:{"on-submit":e.onRangeValidationSubmit}})],1)])},i=[],o=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("form",[l("card",{attrs:{"no-footer-line":""}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("h4",{staticClass:"card-title"},[e._v("\n        Register Form\n      ")])]),l("div",[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.email,expression:"modelValidations.email"}],attrs:{type:"email",required:"",name:"email",label:"Email address",error:e.getError("email")},model:{value:e.model.email,callback:function(a){e.$set(e.model,"email",a)},expression:"model.email"}}),l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.password,expression:"modelValidations.password"}],attrs:{label:"Password",required:"",type:"password",name:"password",error:e.getError("password")},model:{value:e.model.password,callback:function(a){e.$set(e.model,"password",a)},expression:"model.password"}}),l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.confirmPassword,expression:"modelValidations.confirmPassword"}],attrs:{label:"Confirm Password",required:"",type:"password",name:"confirm",error:e.getError("confirm")},model:{value:e.model.confirmPassword,callback:function(a){e.$set(e.model,"confirmPassword",a)},expression:"model.confirmPassword"}}),l("div",{staticClass:"category form-category"},[e._v("* Required fields")])],1),l("div",{staticClass:"text-right",attrs:{slot:"footer"},slot:"footer"},[l("checkbox",{staticClass:"pull-left",attrs:{name:"subscribe"},model:{value:e.model.subscribe,callback:function(a){e.$set(e.model,"subscribe",a)},expression:"model.subscribe"}},[e._v("\n        Subscribe to newsletter\n      ")]),l("n-button",{attrs:{"native-type":"submit",type:"primary"},nativeOn:{click:function(a){return a.preventDefault(),e.validate(a)}}},[e._v("Register")])],1)])],1)},r=[],s=l("2af9"),n={components:{Checkbox:s["g"]},data:function(){return{model:{email:"",password:"",confirmPassword:"",subscribe:!1},modelValidations:{email:{required:!0,email:!0},password:{required:!0,min:5},confirmPassword:{required:!0,confirmed:"password"},subscribe:{required:!0}}}},methods:{getError:function(e){return this.errors.first(e)},validate:function(){var e=this;this.$validator.validateAll().then(function(a){e.$emit("on-submit",e.registerForm,a)})}}},d=n,m=(l("c1db"),l("2877")),c=Object(m["a"])(d,o,r,!1,null,null,null);c.options.__file="RegisterForm.vue";var u=c.exports,v=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("form",[l("card",[l("div",{attrs:{slot:"header"},slot:"header"},[l("h4",{staticClass:"card-title"},[e._v("\n        Login Form\n      ")])]),l("div",[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.fullName,expression:"modelValidations.fullName"}],attrs:{label:"Full Name",required:"",error:e.getError("full name"),name:"full name"},model:{value:e.model.fullName,callback:function(a){e.$set(e.model,"fullName",a)},expression:"model.fullName"}}),l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.email,expression:"modelValidations.email"}],attrs:{label:"Email address",required:"",error:e.getError("email"),name:"email",type:"email"},model:{value:e.model.email,callback:function(a){e.$set(e.model,"email",a)},expression:"model.email"}}),l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.password,expression:"modelValidations.password"}],attrs:{label:"Passowrd",required:"",name:"password",error:e.getError("password"),type:"password"},model:{value:e.model.password,callback:function(a){e.$set(e.model,"password",a)},expression:"model.password"}})],1),l("div",{staticClass:"d-flex justify-content-center"},[l("n-button",{attrs:{"native-type":"submit",type:"primary"},nativeOn:{click:function(a){return a.preventDefault(),e.validate(a)}}},[e._v("Login")])],1)])],1)},f=[],b={data:function(){return{model:{email:"",password:"",fullName:""},modelValidations:{fullName:{required:!0},email:{required:!0,email:!0},password:{required:!0,min:5}}}},methods:{getError:function(e){return this.errors.first(e)},validate:function(){var e=this;this.$validator.validateAll().then(function(a){e.$emit("on-submit",e.registerForm,a)})}}},p=b,g=(l("6f2e"),Object(m["a"])(p,v,f,!1,null,null,null));g.options.__file="LoginForm.vue";var h=g.exports,V=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("form",{staticClass:"form-horizontal"},[l("card",[l("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v("\n      Type Validation\n    ")]),l("div",[l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Requred Text")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.required,expression:"modelValidations.required"}],attrs:{name:"required",error:e.getError("required")},model:{value:e.model.required,callback:function(a){e.$set(e.model,"required",a)},expression:"model.required"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('required="true"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Email")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.email,expression:"modelValidations.email"}],attrs:{name:"email",error:e.getError("email")},model:{value:e.model.email,callback:function(a){e.$set(e.model,"email",a)},expression:"model.email"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('email="true"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Number")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.number,expression:"modelValidations.number"}],attrs:{name:"number",error:e.getError("number")},model:{value:e.model.number,callback:function(a){e.$set(e.model,"number",a)},expression:"model.number"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('numeric="true"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Url")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.url,expression:"modelValidations.url"}],attrs:{name:"url",error:e.getError("url")},model:{value:e.model.url,callback:function(a){e.$set(e.model,"url",a)},expression:"model.url"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('url="true"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Url")]),l("div",{staticClass:"col-sm-3"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.equalToSource,expression:"modelValidations.equalToSource"}],attrs:{name:"equalToSource",placeholder:"Source field",error:e.getError("equalToSource")},model:{value:e.model.equalToSource,callback:function(a){e.$set(e.model,"equalToSource",a)},expression:"model.equalToSource"}})],1),l("div",{staticClass:"col-sm-3"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.equalToDest,expression:"modelValidations.equalToDest"}],attrs:{name:"equalToDest",placeholder:"Destination field",error:e.getError("equalToDest")},model:{value:e.model.equalToDest,callback:function(a){e.$set(e.model,"equalToDest",a)},expression:"model.equalToDest"}})],1),l("label",{staticClass:"col-sm-4 label-on-right"},[l("code",[e._v('confirmed="equalToSource"')])])])]),l("div",{staticClass:"text-center"},[l("n-button",{attrs:{"native-type":"submit",type:"primary"},nativeOn:{click:function(a){return a.preventDefault(),e.validate(a)}}},[e._v("Validate inputs")])],1)])],1)},x=[],w={data:function(){return{model:{required:"",email:"",number:"",equalToSourceurl:"",equalToSource:"",equalToDest:""},modelValidations:{required:{required:!0},email:{email:!0},number:{numeric:!0},url:{url:!0},equalToSource:{required:!0},equalToDest:{required:!0,confirmed:"equalToSource"}}}},methods:{getError:function(e){return this.errors.first(e)},validate:function(){var e=this;this.$validator.validateAll().then(function(a){e.$emit("on-submit",e.registerForm,a)})}}},C=w,_=(l("c6f3"),Object(m["a"])(C,V,x,!1,null,null,null));_.options.__file="TypeValidationForm.vue";var q=_.exports,$=function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("form",{staticClass:"form-horizontal"},[l("card",[l("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v("\n      Range Validation\n    ")]),l("div",[l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Min Length")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.minLength,expression:"modelValidations.minLength"}],attrs:{name:"minLength",error:e.getError("minLength")},model:{value:e.model.minLength,callback:function(a){e.$set(e.model,"minLength",a)},expression:"model.minLength"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('min="5"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Max Length")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.maxLength,expression:"modelValidations.maxLength"}],attrs:{name:"maxLength",error:e.getError("maxLength")},model:{value:e.model.maxLength,callback:function(a){e.$set(e.model,"maxLength",a)},expression:"model.maxLength"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('max="5"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Range")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.range,expression:"modelValidations.range"}],attrs:{name:"range",error:e.getError("range")},model:{value:e.model.range,callback:function(a){e.$set(e.model,"range",a)},expression:"model.range"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('min_value="6", max_value="10"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Min Value")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.minValue,expression:"modelValidations.minValue"}],attrs:{name:"minValue",error:e.getError("minValue")},model:{value:e.model.minValue,callback:function(a){e.$set(e.model,"minValue",a)},expression:"model.minValue"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('min_value="6"')])])]),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Max Value")]),l("div",{staticClass:"col-sm-7"},[l("fg-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.maxValue,expression:"modelValidations.maxValue"}],attrs:{name:"maxValue",error:e.getError("maxValue")},model:{value:e.model.maxValue,callback:function(a){e.$set(e.model,"maxValue",a)},expression:"model.maxValue"}})],1),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('max_value="6"')])])])]),l("div",{staticClass:"text-center"},[l("n-button",{attrs:{"native-type":"submit",type:"primary"},nativeOn:{click:function(a){return a.preventDefault(),e.validate(a)}}},[e._v("Validate inputs")])],1)])],1)},E=[],y={data:function(){return{model:{minLength:"",maxLength:"",range:"",minValue:"",maxValue:""},modelValidations:{minLength:{min:5},maxLength:{max:5},range:{min_value:6,max_value:10},minValue:{min_value:6},maxValue:{max_value:6}}}},methods:{getError:function(e){return this.errors.first(e)},validate:function(){var e=this;this.$validator.validateAll().then(function(a){e.$emit("on-submit",e.registerForm,a)})}}},k=y,T=(l("c867"),Object(m["a"])(k,$,E,!1,null,null,null));T.options.__file="RangeValidationForm.vue";var L=T.exports,N={components:{RegisterForm:u,LoginForm:h,TypeValidationForm:q,RangeValidationForm:L},data:function(){return{registerModel:{},loginModel:{},typeValidationModel:{},rangeValidationModel:{}}},methods:{onRegisterSubmit:function(e){this.registerModel=e},onLoginSubmit:function(e){this.loginModel=e},onTypeValidationSubmit:function(e){this.typeValidationModel=e},onRangeValidationSubmit:function(e){this.rangeValidationModel=e}}},S=N,F=(l("a814"),Object(m["a"])(S,t,i,!1,null,null,null));F.options.__file="ValidationForms.vue";a["default"]=F.exports}}]);
//# sourceMappingURL=chunk-5965f59c.fa37124e.js.map