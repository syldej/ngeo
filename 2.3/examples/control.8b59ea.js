(function(r){function e(e){var t=e[0];var u=e[1];var i=e[2];var l,f,c=0,p=[];for(;c<t.length;c++){f=t[c];if(a[f]){p.push(a[f][0])}a[f]=0}for(l in u){if(Object.prototype.hasOwnProperty.call(u,l)){r[l]=u[l]}}if(s)s(e);while(p.length){p.shift()()}o.push.apply(o,i||[]);return n()}function n(){var r;for(var e=0;e<o.length;e++){var n=o[e];var t=true;for(var i=1;i<n.length;i++){var l=n[i];if(a[l]!==0)t=false}if(t){o.splice(e--,1);r=u(u.s=n[0])}}return r}var t={};var a={35:0};var o=[];function u(e){if(t[e]){return t[e].exports}var n=t[e]={i:e,l:false,exports:{}};r[e].call(n.exports,n,n.exports,u);n.l=true;return n.exports}u.m=r;u.c=t;u.d=function(r,e,n){if(!u.o(r,e)){Object.defineProperty(r,e,{configurable:false,enumerable:true,get:n})}};u.r=function(r){Object.defineProperty(r,"__esModule",{value:true})};u.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};u.d(e,"a",e);return e};u.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=i.push.bind(i);i.push=e;i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var s=l;o.push([411,0]);return n()})({410:function(r,e,n){"use strict";n.r(e);var t=n(507);var a=n.n(t);var o=n(17);var u=n(236);var i=n(43);var l=n(53);var f=n(469);var s=n(36);var c=n(57);var p={};p.module=angular.module("app",["gettext",o["a"].name,u["a"].name]);p.MainController=function(){this.map=new i["a"]({layers:[new s["a"]({source:new c["b"]})],view:new l["a"]({center:[0,0],zoom:4})});this.control=new f["a"]({className:"mouse-position"})};p.module.controller("MainController",p.MainController);e["default"]=p},411:function(r,e,n){n(40);n(39);r.exports=n(410)},507:function(r,e){}});
//# sourceMappingURL=control.8b59ea.js.map