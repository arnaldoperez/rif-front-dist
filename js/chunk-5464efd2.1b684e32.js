(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5464efd2"],{"0fd9":function(t,e,i){"use strict";i("4b85");var a=i("2b0e"),n=i("d9f7"),s=i("80d2");const o=["sm","md","lg","xl"],r=["start","end","center"];function l(t,e){return o.reduce((i,a)=>{return i[t+Object(s["B"])(a)]=e(),i},{})}const c=t=>[...r,"baseline","stretch"].includes(t),p=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...r,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:d})),f=t=>[...r,"space-between","space-around","stretch"].includes(t),h=l("alignContent",()=>({type:String,default:null,validator:f})),g={align:Object.keys(p),justify:Object.keys(u),alignContent:Object.keys(h)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,i){let a=b[t];if(null!=i){if(e){const i=e.replace(t,"");a+=`-${i}`}return a+=`-${i}`,a.toLowerCase()}}const m=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...p,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:f},...h},render(t,{props:e,data:i,children:a}){let s="";for(const n in e)s+=String(e[n]);let o=m.get(s);if(!o){let t;for(t in o=[],g)g[t].forEach(i=>{const a=e[i],n=v(t,i,a);n&&o.push(n)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(s,o)}return t(e.tag,Object(n["a"])(i,{staticClass:"row",class:o}),a)}})},"145b":function(t,e,i){"use strict";var a=i("5f39"),n=i.n(a);n.a},1859:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"dashboard-core-footer"}},[i("v-container",[i("v-row",{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(e,a){return i("v-col",{key:a,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[i("a",{staticClass:"mr-0",attrs:{href:e.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(e.text)}})])})),i("v-spacer",{staticClass:"hidden-sm-and-down"}),i("v-col",{attrs:{cols:"12",md:"auto"}},[i("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v("\n          © 2019, creado por "),i("a",{attrs:{href:"https://rif.pe"}},[t._v("RIF")]),t._v(".\n        ")])])],2)],1)],1)},n=[],s={name:"DashboardCoreFooter",data:function(){return{links:[{href:"#",text:"Soporte Tecnico"}]}}},o=s,r=(i("145b"),i("2877")),l=i("6544"),c=i.n(l),p=i("62ad"),d=i("a523"),u=(i("b5b6"),i("3a66")),f=i("8dd9"),h=i("d10f"),g=i("58df"),b=i("80d2"),v=Object(g["a"])(f["a"],Object(u["a"])("footer",["height","inset"]),h["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...f["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...f["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(b["f"])(t),left:Object(b["f"])(this.computedLeft),right:Object(b["f"])(this.computedRight),bottom:Object(b["f"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),m=i("0fd9"),y=i("2fa4"),j=Object(r["a"])(o,a,n,!1,null,null,null);e["default"]=j.exports;c()(j,{VCol:p["a"],VContainer:d["a"],VFooter:v,VRow:m["a"],VSpacer:y["a"]})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("fe6c"),n=i("58df");function s(t,e=[]){return Object(n["a"])(Object(a["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},"5f39":function(t,e,i){},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var a=i("2b0e");function n(t){return a["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:a,children:n}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=` ${t.join(" ")}`)}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,n)}})}var s=i("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:a}){let n;const{attrs:o}=i;return o&&(i.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),a)}})},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5464efd2.1b684e32.js.map