(function(i){function e(e){var a=e[0];var r=e[1];var t=e[2];var n,o,l=0,u=[];for(;l<a.length;l++){o=a[l];if(c[o]){u.push(c[o][0])}c[o]=0}for(n in r){if(Object.prototype.hasOwnProperty.call(r,n)){i[n]=r[n]}}if(p)p(e);while(u.length){u.shift()()}f.push.apply(f,t||[]);return s()}function s(){var e;for(var a=0;a<f.length;a++){var r=f[a];var t=true;for(var n=1;n<r.length;n++){var o=r[n];if(c[o]!==0)t=false}if(t){f.splice(a--,1);e=l(l.s=r[0])}}return e}var r={};var c={11:0};var f=[];function l(e){if(r[e]){return r[e].exports}var a=r[e]={i:e,l:false,exports:{}};i[e].call(a.exports,a,a.exports,l);a.l=true;return a.exports}l.m=i;l.c=r;l.d=function(e,a,r){if(!l.o(e,a)){Object.defineProperty(e,a,{enumerable:true,get:r})}};l.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};l.t=function(a,e){if(e&1)a=l(a);if(e&8)return a;if(e&4&&typeof a==="object"&&a&&a.__esModule)return a;var r=Object.create(null);l.r(r);Object.defineProperty(r,"default",{enumerable:true,value:a});if(e&2&&typeof a!="string")for(var t in a)l.d(r,t,function(e){return a[e]}.bind(null,t));return r};l.n=function(a){var e=a&&a.__esModule?function e(){return a["default"]}:function e(){return a};l.d(e,"a",e);return e};l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)};l.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[];var t=a.push.bind(a);a.push=e;a=a.slice();for(var n=0;n<a.length;n++)e(a[n]);var p=t;f.push([557,0]);return s()})({557:function(e,a,r){r(72);r(73);e.exports=r(558)},558:function(e,a,r){"use strict";r.r(a);var t=r(559);var n=r.n(t);var o=r(256);var l=r(55);var f=r(1);var p=r(13);var u=r(62);var v=r(14);var h=r(34);var d=r(43);var O=r(163);var g=r(35);var m=r(21);var w=r(31);var y=r(28);var C=r(64);var S=r(49);var E=r(65);var i={};i.module=angular.module("gmfapp",["gettext",o["a"].name,l["a"].name,u["a"].module.name]);i.module.value("ngeoMeasureDecimals",2);i.module.constant("defaultTheme","Demo");i.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");i.MainController=function(e,a){this.scope_=e;this.featureHelper_=a;var r=[];var t={geometry:new m["a"]([-8458215,6672646])};t[p["a"].COLOR]="#009D57";t[p["a"].NAME]="Point1";t[p["a"].SIZE]="6";r.push(new v["a"](t));var n={geometry:new m["a"]([-8007848,6209744])};n[p["a"].ANGLE]="0";n[p["a"].COLOR]="#000000";n[p["a"].IS_TEXT]=true;n[p["a"].NAME]="Text 1";n[p["a"].SIZE]="16";n[p["a"].STROKE]="2";r.push(new v["a"](n));var o={geometry:new g["a"]([[-8321240,6523441],[-8103547,6726458],[-8091318,6408480],[-7973910,6631065]])};o[p["a"].COLOR]="#0BA9CC";o[p["a"].NAME]="LineString 1";o[p["a"].STROKE]="4";r.push(new v["a"](o));var l={geometry:new w["a"]([[[-8512027,6359560],[-8531595,6080718],[-8267428,6031798],[-8238077,6247045],[-8512027,6359560]]])};l[p["a"].COLOR]="#4186F0";l[p["a"].NAME]="Polygon 1";l[p["a"].OPACITY]="0.5";l[p["a"].SHOW_MEASURE]=true;l[p["a"].STROKE]="1";r.push(new v["a"](l));var u={geometry:new w["a"]([[[-7952508,6096617],[-8051570,5959642],[-7848554,5926621],[-7754383,6025683],[-7952508,6096617]]])};u[p["a"].COLOR]="#CCCCCC";u[p["a"].NAME]="Polygon 2";u[p["a"].OPACITY]="1";u[p["a"].STROKE]="3";r.push(new v["a"](u));var i={geometry:Object(w["c"])([-7874848,6496535,-7730535,6384020])};i[p["a"].COLOR]="#000000";i[p["a"].IS_RECTANGLE]=true;i[p["a"].NAME]="Rectangle 1";i[p["a"].OPACITY]="0.5";i[p["a"].STROKE]="2";r.push(new v["a"](i));var s={geometry:Object(w["b"])(new O["a"]([-7691093,6166327],35e3),64)};s[p["a"].COLOR]="#000000";s[p["a"].IS_CIRCLE]=true;s[p["a"].NAME]="Circle 1";s[p["a"].OPACITY]="0.5";s[p["a"].STROKE]="2";r.push(new v["a"](s));var c=new d["a"]({center:[-8174482,6288627],zoom:6});a.setProjection(f["a"].assert(c.getProjection()));r.forEach(function(e){a.setStyle(e)});this.map=new h["a"]({layers:[new y["a"]({source:new S["a"]}),new C["a"]({source:new E["a"]({wrapX:false,features:r})})],view:c});this.selectedFeature=null;this.map.on("singleclick",this.handleMapSingleClick_.bind(this),this)};i.MainController.$inject=["$scope","ngeoFeatureHelper"];i.MainController.prototype.handleMapSingleClick_=function(e){var a=e.pixel;var r=this.map.forEachFeatureAtPixel(a,function(e){return e});if(this.selectedFeature){this.featureHelper_.setStyle(this.selectedFeature)}if(r){if(this.selectedFeature!==r){this.selectedFeature=r;this.featureHelper_.setStyle(r,true)}}else{this.selectedFeature=null}this.scope_.$apply()};i.module.controller("MainController",i.MainController);a["default"]=i},559:function(e,a){}});
//# sourceMappingURL=featurestyle.1ff535.js.map