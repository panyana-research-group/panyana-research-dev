(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{460:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={data:function(){return{rules:{required:function(t){return!!t||"Required!"},number:function(t){return!isNaN(t)||"Must be a number!"}}}}}},461:function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return o})},464:function(t,e,n){var content=n(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("c6a73764",content,!0,{sourceMap:!1})},475:function(t,e,n){var o=n(32);t.exports=function(t,e){if(!o(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},476:function(t,e,n){"use strict";n(240)("small",function(t){return function(){return t(this,"small","","")}})},477:function(t,e,n){"use strict";var o=n(464);n.n(o).a},478:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".upload-btn[data-v-23e895ce]{padding-left:16px;padding-right:16px}.upload-btn input[type=file][data-v-23e895ce]{position:absolute;height:.1px;width:.1px;overflow:hidden;opacity:0;z-index:-1}.upload-btn>.v-btn__content>span[data-v-23e895ce]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.upload-btn.v-btn--disabled[data-v-23e895ce]{background-color:grey!important}.upload-btn-hover[data-v-23e895ce]{cursor:pointer}",""])},479:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},480:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(78),n(238),n(41);var o={data:function(){return{snack:{text:"none",color:"error",show:!1}}},computed:{auth:function(){return this.$store.state.auth}},methods:{checkRole:function(t){var e=this;return new Promise(function(n,o){e.auth.loggedIn||n(!1),e.$auth.getUserRoles().then(function(e){e.find(function(e){return e.name===t||e.id===t})?n(!0):n(!1)}).catch(function(t){console.error(t),o(t)})})},checkRoles:function(t){var e=this;return new Promise(function(n,o){e.auth.loggedIn||n(!1),e.$auth.getUserRoles().then(function(e){t.forEach(function(t){e.find(function(e){return e.name===t||e.id===t})?n(!0):n(!1)})}).catch(function(t){console.error(t),o(t)})})},noPerms:function(){this.snack.text="Not logged in or insufficient permissions!",this.snack.color="error",this.snack.show=!0}}}},481:function(t,e,n){"use strict";n(239);var o={name:"DataTable",props:{name:{type:String,default:null},add:Boolean,useSearch:Boolean,search:{type:String,default:null},loading:Boolean,snack:{type:Object,default:function(){return{text:"none",color:"error",show:!1}}}},computed:{searchModel:{get:function(){return this.search},set:function(t){this.$emit("update:search",t)}}}},r=n(40),l=n(95),c=n.n(l),d=n(150),f=n(151),h=n(171),m=n(208),v=n(217),_=n(166),k=n(219),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"info",elevation:"5"}},[n("v-toolbar",{attrs:{color:"primary","extension-height":"65px",dense:"",card:""},scopedSlots:t._u([t.useSearch?{key:"extension",fn:function(){return[n("v-text-field",{staticClass:"grow",attrs:{"append-icon":"search",label:"Search "+t.name,color:"accent","persistent-hint":"",box:"","hide-details":"",clearable:"",dark:""},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),t._v(" "),t._t("extension")]},proxy:!0}:null],null,!0)},[n("v-toolbar-title",{staticClass:"secondary--text"},[t._v("\n      "+t._s(t.name||"")+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),t._t("buttons"),t._v(" "),t.add?n("v-btn",{staticClass:"secondary--text",attrs:{loading:t.loading,color:"success",small:""},on:{click:function(e){return t.$emit("add")}}},[t._v("\n      Add"+t._s(t.name?" "+t.name:"")+"\n    ")]):t._e()],2),t._v(" "),t._t("default"),t._v(" "),n("v-snackbar",{attrs:{timeout:5e3,color:t.snack.color},model:{value:t.snack.show,callback:function(e){t.$set(t.snack,"show",e)},expression:"snack.show"}},[t._v("\n    "+t._s(t.snack.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snack.show=!1}}},[t._v("\n      Close\n    ")])],1)],2)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VSnackbar:h.a,VSpacer:m.e,VTextField:v.a,VToolbar:_.a,VToolbarTitle:k.d})},482:function(t,e,n){"use strict";var o={name:"NewData",props:{name:{type:String,default:null},show:Boolean}},r=n(40),l=n(95),c=n.n(l),d=n(151),f=n(218),h=n(152),m=n(87),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.show,"max-width":"500px",persistent:""}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"title secondary--text justify-center"},[t._v("\n      New"+t._s(t.name?" "+t.name:"")+"\n    ")]),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[t._t("actions")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardActions:f.b,VCardText:f.d,VCardTitle:h.a,VDialog:m.a})},483:function(t,e,n){"use strict";var o={name:"EditData",props:{name:{type:String,default:null},item:{type:Object,default:function(){}},show:Boolean}},r=n(40),l=n(95),c=n.n(l),d=n(151),f=n(218),h=n(152),m=n(87),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.show,"max-width":"500px",persistent:""}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"title secondary--text justify-center pb-0"},[t._v("\n      Edit"+t._s(t.name?" "+t.name:"")+t._s(t.item&&t.item.type?" "+t.item.type.slice(0,1).toUpperCase()+t.item.type.slice(1):"")+"\n    ")]),t._v(" "),t.item?n("v-card-title",{staticClass:"body-2 secondary--text justify-center py-0"},[t._v("\n      "+t._s(t.item.name||"")+"\n    ")]):t._e(),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[t._t("actions")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardActions:f.b,VCardText:f.d,VCardTitle:h.a,VDialog:m.a})},484:function(t,e,n){"use strict";n(78),n(476);var o={name:"UploadBtn",props:{accept:{default:"*",type:String},block:{default:!1,type:Boolean},depressed:{default:!1,type:Boolean},color:{default:"primary",type:String},disabled:{default:!1,type:Boolean},fixedWidth:{default:null,type:String},flat:{default:!1,type:Boolean},hover:{default:!0,type:Boolean},icon:{default:!1,type:Boolean},labelClass:{default:"",type:String},large:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},maxWidth:{default:"100%",type:String},multiple:{default:!1,type:Boolean},name:{default:"uploadFile",type:String},outline:{default:!1,type:Boolean},ripple:{default:!0,type:Boolean},round:{default:!1,type:Boolean},small:{default:!1,type:Boolean},title:{default:"Upload",type:String},noTitleUpdate:{default:!1,type:Boolean}},data:function(){return{uTitle:null}},computed:{classes:function(){var t={"v-btn--block":this.block,"v-btn--flat":this.flat,"upload-btn-hover":this.hover,"v-btn--icon":this.icon,"v-btn--large":this.large,"v-btn--loading":this.loading,"v-btn--outline v-btn--depressed":this.outline,"v-btn--round":this.round,"v-btn--small":this.small,"v-btn--disabled":this.disabled,"v-btn--depressed":this.depressed};this.flat&&(this.color="");var e="";for(var n in t)t[n]&&(e+="".concat(n," "));return e}},methods:{fileChanged:function(t){if(t)if(t.target.files.length>0)if(this.multiple){for(var title="",i=0;i<t.target.files.length;i++)title+=t.target.files[i].name+", ";title=title.slice(0,title.length-2),this.uTitle=title,this.$emit("file-update",t.target.files)}else this.uTitle=t.target.files[0].name,this.$emit("file-update",t.target.files[0]);else this.uTitle=null,this.$emit("file-update")},clear:function(){document.getElementById("".concat(this._uid,"uploadFile")).value="",this.$emit("file-update"),this.uTitle=null}}},r=(n(477),n(40)),l=n(479),c=n.n(l),d=n(26),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-btn"},[n("input",{ref:"fileInput",attrs:{id:t._uid+"uploadFile",type:"file",name:t.name,accept:t.accept,multiple:t.multiple},on:{change:t.fileChanged}}),t._v(" "),n("label",{directives:[{name:"ripple",rawName:"v-ripple",value:t.ripple,expression:"ripple"}],class:"v-btn "+t.classes+t.color+" "+t.labelClass+" upload-btn",style:{maxWidth:t.maxWidth,width:t.fixedWidth||"auto"},attrs:{id:"label"+t._uid+"uploadFile",for:t._uid+"uploadFile"}},[n("div",{staticClass:"v-btn__content",staticStyle:{"max-width":"100%"}},[t._t("icon-left"),t._v(" "),n("span",[t._v("\n        "+t._s(t.icon?"":t.noTitleUpdate?t.title:t.uTitle||t.title)+"\n      ")]),t._v(" "),t._t("icon")],2)])])},[],!1,null,"23e895ce",null);e.a=component.exports;c()(component,{Ripple:d.a})},488:function(t,e,n){"use strict";var strong=n(489),o=n(475);t.exports=n(490)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return strong.def(o(this,"Set"),t=0===t?0:t,t)}},strong)},489:function(t,e,n){"use strict";var o=n(34).f,r=n(181),l=n(237),c=n(62),d=n(235),f=n(236),h=n(186),m=n(241),v=n(188),_=n(31),k=n(234).fastKey,x=n(475),y=_?"_s":"size",w=function(t,e){var n,o=k(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var m=t(function(t,o){d(t,m,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[y]=0,null!=o&&f(o,n,t[h],t)});return l(m.prototype,{clear:function(){for(var t=x(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var n=x(this,e),o=w(n,t);if(o){var r=o.n,l=o.p;delete n._i[o.i],o.r=!0,l&&(l.n=r),r&&(r.p=l),n._f==o&&(n._f=r),n._l==o&&(n._l=l),n[y]--}return!!o},forEach:function(t){x(this,e);for(var n,o=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!w(x(this,e),t)}}),_&&o(m.prototype,"size",{get:function(){return x(this,e)[y]}}),m},def:function(t,e,n){var o,r,l=w(t,e);return l?l.v=n:(t._l=l={i:r=k(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=l),o&&(o.n=l),t[y]++,"F"!==r&&(t._i[r]=l)),t},getEntry:w,setStrong:function(t,e,n){h(t,e,function(t,n){this._t=x(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?m(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,m(1))},n?"entries":"values",!n,!0),v(e)}}},490:function(t,e,n){"use strict";var o=n(18),r=n(25),l=n(35),c=n(237),meta=n(234),d=n(236),f=n(235),h=n(32),m=n(30),v=n(242),_=n(98),k=n(233);t.exports=function(t,e,n,x,y,w){var C=o[t],W=C,P=y?"set":"add",T=W&&W.prototype,S={},E=function(t){var e=T[t];l(T,t,"delete"==t?function(a){return!(w&&!h(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(w&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return w&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof W&&(w||T.forEach&&!m(function(){(new W).entries().next()}))){var $=new W,O=$[P](w?{}:-0,1)!=$,D=m(function(){$.has(1)}),V=v(function(t){new W(t)}),j=!w&&m(function(){for(var t=new W,e=5;e--;)t[P](e,e);return!t.has(-0)});V||((W=e(function(e,n){f(e,W,t);var o=k(new C,e,W);return null!=n&&d(n,y,o[P],o),o})).prototype=T,T.constructor=W),(D||j)&&(E("delete"),E("has"),y&&E("get")),(j||O)&&E(P),w&&T.clear&&delete T.clear}else W=x.getConstructor(e,t,y,P),c(W.prototype,n),meta.NEED=!0;return _(W,t),S[t]=W,r(r.G+r.W+r.F*(W!=C),S),w||x.setStrong(W,t,y),W}},491:function(t,e,n){var content=n(500);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("20577da6",content,!0,{sourceMap:!1})},499:function(t,e,n){"use strict";var o=n(491);n.n(o).a},500:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"#lore-table table tbody tr,#lore-table table thead tr{border-bottom:1px solid #000!important}#lore-table table tbody tr{border-top:1px solid #000!important}.upload-btn.v-btn--disabled{background-color:grey!important}",""])},509:function(t,e,n){"use strict";n.r(e);n(189);var o=n(461),r=n(474),l=n.n(r),c=n(481),d=n(482),f=n(460),h={name:"NewLore",components:{NewData:d.a},mixins:[f.a],props:{show:Boolean},data:function(){return{loading:!1,form:!1,formData:{title:null,pageCount:null},noQuotesRule:function(t){return!!t&&t.indexOf('"')<0||"You cannot use \" in the name! Use ' instead"}}},watch:{show:function(t,e){var n=this;t&&this.$nextTick(function(){return n.$refs.loreTitleField.focus()})}},mounted:function(){this.reset()},methods:{submit:function(){var t=this,e={title:this.formData.title,onWiki:"0/".concat(this.formData.pageCount),missingWiki:l.a.range(1,parseInt(this.formData.pageCount)+1).join(", "),missingPics:"title, ".concat(l.a.range(1,parseInt(this.formData.pageCount)+1).join(", "))};this.loading=!0,this.$api.post("/lore",e).then(function(e){t.$emit("close","success"),t.reset()}).catch(function(e){console.error(e),t.$emit("close","error"),t.reset()})},reset:function(){this.loading=!1,this.$refs.form.reset()}}},m=n(40),v=n(95),_=n.n(v),k=n(150),x=n(156),y=n(170),w=n(159),C=n(217),component=Object(m.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("new-data",{attrs:{show:t.show,name:"Lore"},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{color:"error"},on:{click:function(e){t.$emit("close"),t.reset()}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("v-btn",{staticClass:"primary--text",attrs:{color:"info"},on:{click:function(e){return t.$refs.form.reset()}}},[t._v("\n      Reset\n    ")]),t._v(" "),n("v-btn",{attrs:{color:"success",loading:t.loading,disabled:!t.form},on:{click:t.submit}},[t._v("\n      Add\n    ")])]},proxy:!0}])},[n("v-form",{ref:"form",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md6:"","px-1":""}},[n("v-text-field",{ref:"loreTitleField",attrs:{id:"loreTitle",name:"loreTitle",label:"Lore Title",box:"",color:"secondary",clearable:"","persistent-hint":"",rules:[t.rules.required,t.noQuotesRule]},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:"","px-1":""}},[n("v-text-field",{attrs:{id:"pageCount",name:"pageCount",label:"Page Count","persistent-hint":"",box:"",color:"secondary",clearable:"",rules:[t.rules.required,t.rules.number]},model:{value:t.formData.pageCount,callback:function(e){t.$set(t.formData,"pageCount",e)},expression:"formData.pageCount"}})],1)],1)],1)],1)},[],!1,null,null,null),W=component.exports;_()(component,{VBtn:k.a,VFlex:x.a,VForm:y.a,VLayout:w.a,VTextField:C.a});n(96),n(41),n(185),n(488),n(239),n(133),n(187);var P=n(483),T=n(484),S={name:"EditLore",components:{EditData:P.a,"upload-btn":T.a},mixins:[f.a],props:{show:Boolean,item:{type:Object,default:function(){}},haveWiki:{type:String,default:""}},data:function(){return{form:!1,loading:!1,uploaded:[],uploadedTwo:[],twoPages:[],headers:[{text:"Page",sortable:!1},{text:"On wiki",align:"center",sortable:!1},{text:"Upload image",align:"center",sortable:!1,width:"180px"},{text:"2 pages?",align:"center",sortable:!1}]}},computed:{have:{get:function(){return""===this.haveWiki?[]:this.haveWiki.split(", ")},set:function(t){this.$emit("update",t)}}},methods:{openTwoPage:function(t){this.twoPages.includes(t)?this.$refs["twoPage-"+t].style.display="table-row":this.$refs["twoPage-"+t].style.display="none"},checkDisabled:function(t){return!!this.isOnWiki(t)||(!this.item.addWiki||(!this.item.addWiki.split(", ").includes(String(t))||void 0))},isOnWiki:function(t){return"COMPLETED"===this.item.missingWiki||this.item.missingWiki.split(", ").indexOf(t)<0},upload:function(t,e){t?e.search(/page/)>-1?this.uploadedTwo.indexOf(e.split("-")[1])<0&&this.uploadedTwo.push(e.split("-")[1]):this.uploaded.indexOf(e)<0&&this.uploaded.push(e):e.search(/page/)>-1?this.uploadedTwo=this.uploadedTwo.filter(function(p){return p!==e.split("-")[1]}):this.uploaded=this.uploaded.filter(function(p){return p!==e})},edit:function(){var t=this;this.loading=!0,this.$api.get("/lore/"+this.item._id).then(function(data){for(var e=parseInt(t.item.onWiki.split("/")[1]),n=["title"],i=1;i<=e;i++)t.item.missingWiki.split(", ").indexOf(String(i))<0&&n.push(String(i));t.have=Object(o.a)(new Set([].concat(n,Object(o.a)(t.have)))),t.item.missingPics=data.data.missingPics,t.item.missingWiki=data.data.missingWiki,t.item.onWiki=data.data.onWiki,t.item.addWiki=data.data.addWiki;var r={title:t.item.title,onWiki:"".concat(t.have.length-1,"/").concat(e),folderId:t.item.folderId,missingPics:t.item.missingPics.split(", ").filter(function(p){return t.uploaded.indexOf(p)<0}).join(", "),missingWiki:t.item.missingWiki.split(", ").filter(function(p){return t.have.indexOf(p)<0}).join(", ")};t.item.addWiki&&""!==t.item.addWiki?r.addWiki=t.item.addWiki.split(", "):r.addWiki=[],r.addWiki=r.addWiki.concat(t.uploaded).filter(function(p){return"title"!==p}).filter(function(p){return r.missingWiki.split(", ").indexOf(p)>-1}).sort(function(a,b){return parseInt(a)<parseInt(b)?-1:1}).join(", "),""===r.missingPics&&(r.missingPics="COMPLETED"),""===r.missingWiki&&(r.missingWiki="COMPLETED");var l=new FormData;for(var c in r)r.hasOwnProperty(c)&&l.append(c,r[c]);for(var d=0;d<t.uploaded.length;d++){var input=t.$refs["ref-"+t.uploaded[d]].$refs.fileInput;l.append("page-"+t.uploaded[d]+"-0",input.files[0])}for(var f=0;f<t.uploadedTwo.length;f++){var h=t.$refs["twoPageFile-"+t.uploadedTwo[f]].$refs.fileInput;l.append("page-"+t.uploadedTwo[f]+"-1",h.files[0])}t.$api.put("/lore/"+t.item._id,l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.$emit("close","success")}).catch(function(e){console.error(e),t.$emit("close","error")}).finally(function(){t.reset()})})},reset:function(){this.loading=!1;for(var i=0;i<this.uploaded.length;i++){var t=this.$refs["ref-"+this.uploaded[i]];t.title="Upload",t.$refs.fileInput.value=null}this.uploaded=[];for(var e=0;e<this.uploadedTwo.length;e++){var n=this.$refs["twoPageFile-"+this.uploadedTwo[e]];n.title="Upload",n.$refs.fileInput.value=null}this.uploadedTwo=[];for(var o=0;o<this.twoPages.length;o++)this.$refs["twoPage-"+this.twoPages[o]].style.display="none";this.twoPages=[]},cancel:function(){this.reset(),this.$emit("close")}}},E=n(169),$=n(177),O=n(158),D=Object(m.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("edit-data",{attrs:{show:t.show,name:"Lore",item:t.item||null},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{color:"error",dark:""},on:{click:t.cancel}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("v-btn",{attrs:{color:"success",loading:t.loading},on:{click:t.edit}},[t._v("\n      Edit\n    ")])]},proxy:!0}])},[t.item?n("v-data-table",{ref:"editStory",staticClass:"elevation-1",attrs:{id:"edit-story",headers:t.headers,items:t.item.pages,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("tr",[n("td",[t._v(t._s(e.item.page))]),t._v(" "),n("td",[n("v-layout",{attrs:{"justify-center":""}},[n("v-checkbox",{staticStyle:{"max-width":"24px"},attrs:{value:String(e.item.page),disabled:t.checkDisabled(String(e.item.page)),"hide-details":""},model:{value:t.have,callback:function(e){t.have=e},expression:"have"}})],1)],1),t._v(" "),n("td",{staticClass:"px-0"},[n("upload-btn",{ref:"ref-"+e.item.page,staticClass:"px-0",attrs:{disabled:t.item.missingPics&&!t.item.missingPics.split(", ").includes(String(e.item.page)),"fixed-width":"180px",block:""},on:{"file-update":function(n){t.upload(n,String(e.item.page))}}},[n("template",{slot:"icon-left"},[n("v-icon",{class:t.item.missingPics&&!t.item.missingPics.split(", ").includes(String(e.item.page))?"green--text":"blue--text"},[t._v("\n                "+t._s(t.item.missingPics&&!t.item.missingPics.split(", ").includes(String(e.item.page))?"check_circle":"attach_file")+"\n              ")])],1)],2)],1),t._v(" "),n("td",[n("v-layout",{attrs:{"justify-center":""}},[n("v-checkbox",{staticStyle:{"max-width":"24px"},attrs:{disabled:t.item.missingPics&&!t.item.missingPics.split(", ").includes(String(e.item.page)),indeterminate:t.item.missingPics&&!t.item.missingPics.split(", ").includes(String(e.item.page)),value:e.item.page,"hide-details":""},on:{change:function(n){return t.openTwoPage(e.item.page)}},model:{value:t.twoPages,callback:function(e){t.twoPages=e},expression:"twoPages"}})],1)],1)]),t._v(" "),n("tr",{ref:"twoPage-"+e.item.page,staticStyle:{display:"none"}},[n("td",[t._v(t._s(e.item.page)),n("br"),t._v("Page 2")]),t._v(" "),n("td"),t._v(" "),n("td",{staticClass:"px-0"},[n("upload-btn",{ref:"twoPageFile-"+e.item.page,staticClass:"px-0",attrs:{"fixed-width":"180px",block:""},on:{"file-update":function(n){return t.upload(n,"page2-"+e.item.page)}}},[n("template",{slot:"icon-left"},[n("v-icon",{staticClass:"blue--text"},[t._v("\n                attach_file\n              ")])],1)],2)],1),t._v(" "),n("td")])]}}],null,!1,922550170)}):t._e()],1)},[],!1,null,null,null),V=D.exports;_()(D,{VBtn:k.a,VCheckbox:E.a,VDataTable:$.a,VIcon:O.a,VLayout:w.a});var j=n(480),L={name:"Lore",head:function(){return{title:"Lore",meta:[{hid:"og:title",name:"og:title",content:"Lore"},{hid:"og:description",name:"og:description",content:"A ongoing collection of all the lore in WA"}]}},components:{DataTable:c.a,NewLore:W,EditLore:V},mixins:[j.a],data:function(){return{newLoading:!1,data:{loading:!0,error:!1},pagination:{sortBy:"title",descending:!0,rowsPerPage:-1},search:"",lore:[],dialogs:{new:!1,edit:!1},snack:{text:"none",color:"error",show:!1},headers:[{text:"Title",value:"title",width:"23%"},{text:"On Wiki",value:"onWiki",width:"7%"},{text:"Missing from wiki",value:"missingWiki",width:"18%"},{text:"Missing images",value:"missingPics",width:"17%"},{text:"Add to wiki",value:"addWiki",width:"10%"},{text:"Lore Pages",sortable:!1,width:"15%",align:"center"},{text:"Edit",sortable:!1,width:"10%",align:"center"}],currentEdit:{title:"",onWiki:"",missingWiki:"",missingPics:"",addWiki:"",pages:[]},currentHaveWiki:""}},mounted:function(){this.refresh()},methods:{refresh:function(){var t=this;this.data.loading=!0,this.lore=[],this.$api.get("/lore/all").then(function(e){var n;t.data.loading=!1,(n=t.lore).push.apply(n,Object(o.a)(e.data))}).catch(function(e){console.error(e),t.data.loading=!1,t.data.error=!1})},openNew:function(){var t=this;this.newLoading=!0,this.checkRole("Collector").then(function(e){t.newLoading=!1,e?t.dialogs.new=!0:t.noPerms()})},update:function(t){this.currentHaveWiki=t.join(", ")},close:function(t,e){switch(this.dialogs[t]=!1,e){case"success":this.snack.color="success",this.snack.text="Successfully updated lore!",this.refresh();break;case"error":this.snack.color="error",this.snack.text="Error updating lore!"}e&&(this.snack.show=!0)},editStory:function(t){var e=this;this.checkRole("Collector").then(function(n){if(n){var o=parseInt(t.onWiki.split("/")[1]);e.currentEdit=Object.assign({},t),e.currentEdit.pages=[{page:"title"}],l.a.range(1,o+1).forEach(function(p){e.currentEdit.pages.push({page:p})});for(var r=["title"],i=1;i<=o;i++)e.currentEdit.missingWiki.split(", ").indexOf(String(i))<0&&r.push(String(i));e.currentHaveWiki=r.join(", "),e.dialogs.edit=!0}else e.noPerms()})},getClasses:function(t){return"COMPLETED"===t.missingWiki?"green lighten-2":""!==t.addWiki?"cyan lighten-2":t.missingPics.split(", ").length>10?"red lighten-2":t.missingPics.split(", ").length>5?"orange lighten-3":"yellow lighten-4"},customSort:function(t,e,n){return t.sort(function(a,b){switch(e){case"title":return n?a.title<b.title?-1:1:a.title<b.title?1:-1;case"addWiki":var t=""===a.addWiki?0:a.addWiki.split(", ").length,o=""===b.addWiki?0:b.addWiki.split(", ").length;return t===o?0:n?t<o?-1:1:t<o?1:-1;case"missingPics":var r="COMPLETED"===a.missingPics?0:a.missingPics.split(", ").length,l="COMPLETED"===b.missingPics?0:b.missingPics.split(", ").length;return r===l?0:n?r<l?-1:1:r<l?1:-1;case"missingWiki":var c="COMPLETED"===a.missingWiki?0:a.missingWiki.split(", ").length,d="COMPLETED"===b.missingWiki?0:b.missingWiki.split(", ").length;return c===d?0:n?c<d?-1:0:c<d?1:-1}}),t}}},B=(n(499),n(168)),I=n(174),F=Object(m.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",lg11:"",xl8:""}},[n("data-table",{attrs:{name:"Lore",search:t.search,loading:t.newLoading,snack:t.snack,add:"","use-search":""},on:{"update:search":function(e){t.search=e},"update:loading":function(e){t.newLoading=e},add:t.openNew},scopedSlots:t._u([{key:"buttons",fn:function(){return[n("v-btn",{staticClass:"primary--text",attrs:{loading:t.data.loading,color:"accent",small:""},on:{click:t.refresh}},[t._v("\n          Refresh\n        ")])]},proxy:!0}])},[t._v(" "),n("v-data-table",{staticClass:"ma-2",attrs:{id:"lore-table",headers:t.headers,items:t.lore,loading:t.data.loading,search:t.search,"custom-sort":t.customSort,pagination:t.pagination,"item-key":"title",dark:"","must-sort":"","hide-actions":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("tr",{class:t.getClasses(e.item)+" black--text"},[n("td",[t._v(t._s(e.item.title))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[t._v("\n              "+t._s(e.item.onWiki)+"\n            ")]),t._v(" "),n("td",[t._v(t._s(e.item.missingWiki))]),t._v(" "),n("td",[t._v(t._s(e.item.missingPics))]),t._v(" "),n("td",[t._v(t._s(e.item.addWiki))]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("v-tooltip",{attrs:{top:""}},[n("v-btn",{attrs:{slot:"activator",href:"https://drive.google.com/drive/folders/"+e.item.folderId,color:"orange",small:"",target:"_blank"},slot:"activator"},[t._v("\n                  Pictures\n                ")]),t._v("\n                Images of the story's pages\n              ")],1)],1),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("v-tooltip",{attrs:{disabled:"COMPLETED"===e.item.missingWiki,top:""}},[n("v-btn",{staticClass:"lighten-2",attrs:{slot:"activator",disabled:"COMPLETED"===e.item.missingWiki,color:"primary",icon:""},on:{click:function(n){return t.editStory(e.item)}},slot:"activator"},[n("v-icon",{attrs:{color:"info"}},[t._v("\n                    edit\n                  ")])],1),t._v("\n                Edit the story\n              ")],1)],1)])]}},{key:"no-data",fn:function(){return[!t.data.loading&&t.data.error?n("v-alert",{staticClass:"primary--text",attrs:{type:"error",value:!0}},[t._v("\n            Error loading lore data. Probably a network issue.\n          ")]):t.data.loading&&!t.data.error?n("v-alert",{staticClass:"primary--text",attrs:{type:"info",value:!0}},[t._v("\n            Loading lore data...\n          ")]):t.data.loading||t.data.error?t._e():n("v-alert",{staticClass:"primary--text",attrs:{type:"info",value:!0}},[t._v("\n            No lore data!\n          ")])]},proxy:!0}])},[t._v(" "),n("v-alert",{attrs:{slot:"no-results",value:!0,type:"warning",icon:"warning"},slot:"no-results"},[t._v('\n          Your search for "'+t._s(t.search)+'" found no results.\n        ')])],1)],1),t._v(" "),n("edit-lore",{ref:"editStory",attrs:{show:t.dialogs.edit,item:t.currentEdit,"have-wiki":t.currentHaveWiki},on:{close:function(e){return t.close("edit",e)},update:function(e){return t.update(e)}}}),t._v(" "),n("new-lore",{attrs:{show:t.dialogs.new},on:{close:function(e){return t.close("new",e)}}})],1)],1)},[],!1,null,null,null);e.default=F.exports;_()(F,{VAlert:B.a,VBtn:k.a,VDataTable:$.a,VFlex:x.a,VIcon:O.a,VLayout:w.a,VTooltip:I.a})}}]);