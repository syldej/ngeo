(function(f){function e(e){var r=e[0];var t=e[1];var n=e[2];var a,o,i=0,u=[];for(;i<r.length;i++){o=r[i];if(s[o]){u.push(s[o][0])}s[o]=0}for(a in t){if(Object.prototype.hasOwnProperty.call(t,a)){f[a]=t[a]}}if(c)c(e);while(u.length){u.shift()()}v.push.apply(v,n||[]);return l()}function l(){var e;for(var r=0;r<v.length;r++){var t=v[r];var n=true;for(var a=1;a<t.length;a++){var o=t[a];if(s[o]!==0)n=false}if(n){v.splice(r--,1);e=i(i.s=t[0])}}return e}var t={};var s={29:0};var v=[];function i(e){if(t[e]){return t[e].exports}var r=t[e]={i:e,l:false,exports:{}};f[e].call(r.exports,r,r.exports,i);r.l=true;return r.exports}i.m=f;i.c=t;i.d=function(e,r,t){if(!i.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(r,e){if(e&1)r=i(r);if(e&8)return r;if(e&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);i.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(e&2&&typeof r!="string")for(var n in r)i.d(t,n,function(e){return r[e]}.bind(null,n));return t};i.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};i.d(e,"a",e);return e};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=r.push.bind(r);r.push=e;r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var c=n;v.push([491,0]);return l()})({491:function(e,r,t){t(51);t(52);e.exports=t(492)},492:function(e,r,t){"use strict";t.r(r);var n=t(493);var a=t.n(n);var i=t(59);var u=t(278);var f=t(19);var l=t(25);var s=t(18);var v=t(41);var c=t(30);var p=t(36);var d=t(142);var h=t(26);var b=t(39);var w=t(15);var o=t(23);var y={};var g=angular.module("app",["gettext",o["a"].name]);y.MainController=function(){this.map=new f["a"]({layers:[new s["a"]({source:new c["b"]})],view:new l["a"]({center:[-10997148,4569099],zoom:4})});var e=this.map;var r=new d["a"]([-10691093,4966327],465e3);this.features=new b["a"];var t=new w["a"]({geometry:Object(h["c"])(r),color:"#000000",label:"Circle 1",opacity:"0.5",stroke:"2"});t.set(i["a"].IS_CIRCLE,true);this.features.push(t);var n=new p["a"]({features:this.features});var a=new v["a"]({source:n});a.setMap(e);this.interaction=new u["a"]({features:this.features});var o=this.interaction;o.setActive(true);e.addInteraction(o)};g.controller("MainController",y.MainController);r["default"]=y},493:function(e,r){}});
//# sourceMappingURL=modifycircle.fdf513.js.map