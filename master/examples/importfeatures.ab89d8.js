(function(l){function e(e){var r=e[0];var t=e[1];var n=e[2];var o,a,i=0,u=[];for(;i<r.length;i++){a=r[i];if(c[a]){u.push(c[a][0])}c[a]=0}for(o in t){if(Object.prototype.hasOwnProperty.call(t,o)){l[o]=t[o]}}if(v)v(e);while(u.length){u.shift()()}s.push.apply(s,n||[]);return f()}function f(){var e;for(var r=0;r<s.length;r++){var t=s[r];var n=true;for(var o=1;o<t.length;o++){var a=t[o];if(c[a]!==0)n=false}if(n){s.splice(r--,1);e=i(i.s=t[0])}}return e}var t={};var c={19:0};var s=[];function i(e){if(t[e]){return t[e].exports}var r=t[e]={i:e,l:false,exports:{}};l[e].call(r.exports,r,r.exports,i);r.l=true;return r.exports}i.m=l;i.c=t;i.d=function(e,r,t){if(!i.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(r,e){if(e&1)r=i(r);if(e&8)return r;if(e&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);i.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(e&2&&typeof r!="string")for(var n in r)i.d(t,n,function(e){return r[e]}.bind(null,n));return t};i.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};i.d(e,"a",e);return e};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=r.push.bind(r);r.push=e;r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var v=n;s.push([461,0]);return f()})({461:function(e,r,t){t(51);t(52);e.exports=t(462)},462:function(e,r,t){"use strict";t.r(r);var n=t(463);var o=t.n(n);var a=t(23);var i=t(290);var u=t(19);var l=t(25);var f=t(3);var c=t(256);var s=t(18);var v=t(41);var p=t(30);var d=t(36);var h={};h.module=angular.module("app",["gettext",a["a"].name,i["a"].name]);h.MainController=function(e){var r=this;this.kmlFormat_=new c["a"]({extractStyles:false});this.vectorSource_=new d["a"];this.map=new u["a"]({layers:[new s["a"]({source:new p["b"]}),new v["a"]({source:this.vectorSource_})],view:new l["a"]({center:[0,0],zoom:2})});this.fileReaderSupported=undefined;this.fileContent="";e.$watch(function(){return r.fileContent},this.importKml_.bind(this))};h.MainController.$inject=["$scope"];h.MainController.prototype.importKml_=function(e){var r=this.map;var t=this.vectorSource_;var n=this.kmlFormat_.readFeatures(e,{featureProjection:"EPSG:3857"});t.clear(true);t.addFeatures(n);var o=t.getExtent();var a=r.getSize();if(a&&!f["H"](o)){r.getView().fit(o,a)}};h.module.controller("MainController",h.MainController);r["default"]=h},463:function(e,r){}});
//# sourceMappingURL=importfeatures.ab89d8.js.map