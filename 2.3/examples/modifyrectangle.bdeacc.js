(function(e){function r(r){var n=r[0];var i=r[1];var u=r[2];var l,s,v=0,f=[];for(;v<n.length;v++){s=n[v];if(a[s]){f.push(a[s][0])}a[s]=0}for(l in i){if(Object.prototype.hasOwnProperty.call(i,l)){e[l]=i[l]}}if(c)c(r);while(f.length){f.shift()()}o.push.apply(o,u||[]);return t()}function t(){var e;for(var r=0;r<o.length;r++){var t=o[r];var n=true;for(var u=1;u<t.length;u++){var l=t[u];if(a[l]!==0)n=false}if(n){o.splice(r--,1);e=i(i.s=t[0])}}return e}var n={};var a={13:0};var o=[];function i(r){if(n[r]){return n[r].exports}var t=n[r]={i:r,l:false,exports:{}};e[r].call(t.exports,t,t.exports,i);t.l=true;return t.exports}i.m=e;i.c=n;i.d=function(e,r,t){if(!i.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:t})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};i.d(r,"a",r);return r};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=u.push.bind(u);u.push=r;u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var c=l;o.push([360,0]);return t()})({359:function(e,r,t){"use strict";t.r(r);var n=t(484);var a=t.n(n);var o=t(245);var i=t(43);var u=t(53);var l=t(36);var s=t(64);var c=t(57);var v=t(52);var f=t(45);var p=t(42);var w=t(24);var h=t(19);var d=t(108);var g=t(47);var y=t(46);var b=t(17);var m={};var x=angular.module("app",["gettext",b["a"].name]);m.MainController=function(){this.map=new i["a"]({layers:[new l["a"]({source:new c["b"]})],view:new u["a"]({center:[-10997148,4569099],zoom:4})});var e=this.map;var r=new f["b"]([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new p["a"];this.features.push(new w["a"]({geometry:r,isRectangle:true}));var t=function(){var e={};e["Polygon"]=[new h["c"]({fill:new g["a"]({color:[255,255,255,.5]})}),new h["c"]({stroke:new y["a"]({color:[255,255,255,1],width:5})}),new h["c"]({stroke:new y["a"]({color:[0,153,255,1],width:3})})];e["Point"]=[new h["c"]({image:new d["a"]({radius:7,fill:new g["a"]({color:[0,153,255,1]}),stroke:new y["a"]({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})];e["GeometryCollection"]=e["Polygon"].concat(e["Point"]);return function(r,t){return e[r.getGeometry().getType()]}}();var n=new v["a"]({features:this.features});var a=new s["a"]({source:n});a.setMap(e);this.interaction=new o["a"]({features:this.features,style:t});var b=this.interaction;e.addInteraction(b);b.setActive(true)};x.controller("MainController",m.MainController);r["default"]=m},360:function(e,r,t){t(40);t(39);e.exports=t(359)},484:function(e,r){}});
//# sourceMappingURL=modifyrectangle.bdeacc.js.map