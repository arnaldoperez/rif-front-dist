(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e78c93b6"],{"0fd9":function(t,n,e){"use strict";e("4b85");var a=e("2b0e"),r=e("d9f7"),i=e("80d2");const s=["sm","md","lg","xl"],o=["start","end","center"];function l(t,n){return s.reduce((e,a)=>{return e[t+Object(i["B"])(a)]=n(),e},{})}const d=t=>[...o,"baseline","stretch"].includes(t),c=l("align",()=>({type:String,default:null,validator:d})),u=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:p})),y={align:Object.keys(c),justify:Object.keys(f),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function v(t,n,e){let a=b[t];if(null!=e){if(n){const e=n.replace(t,"");a+=`-${e}`}return a+=`-${e}`,a.toLowerCase()}}const j=new Map;n["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...c,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:n,data:e,children:a}){let i="";for(const r in n)i+=String(n[r]);let s=j.get(i);if(!s){let t;for(t in s=[],y)y[t].forEach(e=>{const a=n[e],r=v(t,e,a);r&&s.push(r)});s.push({"no-gutters":n.noGutters,"row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),j.set(i,s)}return t(n.tag,Object(r["a"])(e,{staticClass:"row",class:s}),a)}})},a523:function(t,n,e){"use strict";e("20f6"),e("4b85");var a=e("2b0e");function r(t){return a["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:e,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:i}=a;if(i){a.attrs={};const t=Object.keys(i).filter(t=>{if("slot"===t)return!1;const n=i[t];return t.startsWith("data-")?(a.attrs[t]=n,!1):n||"string"===typeof n});t.length&&(a.staticClass+=` ${t.join(" ")}`)}return e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),n(e.tag,a,r)}})}var i=e("d9f7");n["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:n,data:e,children:a}){let r;const{attrs:s}=e;return s&&(e.attrs={},r=Object.keys(s).filter(t=>{if("slot"===t)return!1;const n=s[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n})),n.id&&(e.domProps=e.domProps||{},e.domProps.id=n.id),t(n.tag,Object(i["a"])(e,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),a)}})},bfd9:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{id:"dashboard",fluid:"",tag:"section"}},[e("v-row",[t._v("\n    Categorias de Productos\n  ")])],1)},r=[],i={name:"ProductoCategoria",data:function(){return{}}},s=i,o=e("2877"),l=e("6544"),d=e.n(l),c=e("a523"),u=e("0fd9"),f=Object(o["a"])(s,a,r,!1,null,null,null);n["default"]=f.exports;d()(f,{VContainer:c["a"],VRow:u["a"]})}}]);
//# sourceMappingURL=chunk-e78c93b6.171bd487.js.map