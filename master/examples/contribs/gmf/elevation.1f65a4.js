(function(i){function e(e){var r=e[0];var t=e[1];var n=e[2];var a,o,l=0,u=[];for(;l<r.length;l++){o=r[l];if(c[o]){u.push(c[o][0])}c[o]=0}for(a in t){if(Object.prototype.hasOwnProperty.call(t,a)){i[a]=t[a]}}if(v)v(e);while(u.length){u.shift()()}s.push.apply(s,n||[]);return f()}function f(){var e;for(var r=0;r<s.length;r++){var t=s[r];var n=true;for(var a=1;a<t.length;a++){var o=t[a];if(c[o]!==0)n=false}if(n){s.splice(r--,1);e=l(l.s=t[0])}}return e}var t={};var c={10:0};var s=[];function l(e){if(t[e]){return t[e].exports}var r=t[e]={i:e,l:false,exports:{}};i[e].call(r.exports,r,r.exports,l);r.l=true;return r.exports}l.m=i;l.c=t;l.d=function(e,r,t){if(!l.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t})}};l.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};l.t=function(r,e){if(e&1)r=l(r);if(e&8)return r;if(e&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);l.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(e&2&&typeof r!="string")for(var n in r)l.d(t,n,function(e){return r[e]}.bind(null,n));return t};l.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};l.d(e,"a",e);return e};l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=r.push.bind(r);r.push=e;r=r.slice();for(var a=0;a<r.length;a++)e(r[a]);var v=n;s.push([554,0]);return f()})({554:function(e,r,t){t(72);t(73);e.exports=t(555)},555:function(e,r,t){"use strict";t.r(r);var n=t(32);var a=t(556);var o=t.n(a);var l=t(55);var u=t(369);var i=t(56);var f=t(34);var c=t(43);var s=t(28);var v=t(49);var p={};p.module=angular.module("gmfapp",["gettext",l["a"].name,u["a"].name]);p.module.value("gmfRasterUrl",n["a"].RASTER);p.module.constant("defaultTheme","Demo");p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");p.MainController=function(){this.elevationLayers=["aster","srtm"];this.selectedElevationLayer=this.elevationLayers[0];this.map=new f["a"]({layers:[new s["a"]({source:new v["a"]})],view:new c["a"]({projection:i["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:3})})};p.module.controller("MainController",p.MainController);r["default"]=p},556:function(e,r){}});
//# sourceMappingURL=elevation.1f65a4.js.map