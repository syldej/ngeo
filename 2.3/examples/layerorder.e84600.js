(function(e){function r(r){var t=r[0];var s=r[1];var i=r[2];var l,u,v=0,f=[];for(;v<t.length;v++){u=t[v];if(n[u]){f.push(n[u][0])}n[u]=0}for(l in s){if(Object.prototype.hasOwnProperty.call(s,l)){e[l]=s[l]}}if(c)c(r);while(f.length){f.shift()()}o.push.apply(o,i||[]);return a()}function a(){var e;for(var r=0;r<o.length;r++){var a=o[r];var t=true;for(var i=1;i<a.length;i++){var l=a[i];if(n[l]!==0)t=false}if(t){o.splice(r--,1);e=s(s.s=a[0])}}return e}var t={};var n={22:0};var o=[];function s(r){if(t[r]){return t[r].exports}var a=t[r]={i:r,l:false,exports:{}};e[r].call(a.exports,a,a.exports,s);a.l=true;return a.exports}s.m=e;s.c=t;s.d=function(e,r,a){if(!s.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:a})}};s.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};s.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};s.d(r,"a",r);return r};s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=i.push.bind(i);i.push=r;i=i.slice();for(var u=0;u<i.length;u++)r(i[u]);var c=l;o.push([378,0]);return a()})({325:function(e,r,a){"use strict";a.r(r);var t=a(493);var n=a(17);var o=a(234);var s=a(1);var i=function e(r,a,t,n,o){var i=n.$watchCollection(function(){return r},function(){var e=void 0,n=void 0,s=void 0;if(t){for(e=r.length-1,s=0;e>=0;--e){if(o(r[e])){a[s++]=r[e]}}}else{for(e=0,n=r.length,s=0;e<n;++e){if(o(r[e])){a[s++]=r[e]}}}a.length=s});var l=n.$watchCollection(function(){return a},function(){var e=void 0,n=void 0,i=void 0;if(t){for(e=0,n=r.length,i=a.length-1;e<n;++e){if(o(r[e])){r[e]=a[i--]}}s["a"].assert(i==-1)}else{for(e=0,n=r.length,i=0;e<n;++e){if(o(r[e])){r[e]=a[i++]}}s["a"].assert(i==a.length)}});return function(){i();l()}};var l=i;var u=a(154);var c=a(74);var v=a(43);var f=a(53);var p=a(36);var h=a(147);var d={};d.module=angular.module("app",["gettext",n["a"].name,o["a"].name]);d.MainController=function(e){var r=new p["a"]({source:new u["a"]({layer:"asitvd.fond_couleur"})});r.set("name","asitvd");var a=new p["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill"},serverType:"mapserver"})});a.set("name","Boundaries");var t=new p["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.geologie-gravimetrischer_atlas"},serverType:"mapserver"})});t.set("name","Water bodies");var n=new p["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});n.set("name","Cities");this.map=new v["a"]({layers:[r,a,t,n],view:new f["a"]({projection:c["a"],resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var o=this.map;this.roads_=new p["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.bafu.laerm-strassenlaerm_tag"},serverType:"mapserver"})});this.roads_.set("name","Roads");this.selectedLayers=[];var s=this.selectedLayers;l(o.getLayers().getArray(),s,true,e,i);e.$watchCollection(function(){return s},function(){o.render()});function i(e){return e!==r}};d.MainController.$inject=["$scope"];d.MainController.prototype.toggleRoadsLayer=function(e){if(e===undefined){return this.map.getLayers().getArray().indexOf(this.roads_)>=0}else{if(e){this.map.addLayer(this.roads_)}else{this.map.removeLayer(this.roads_)}}};d.module.controller("MainController",d.MainController);var m=r["default"]=d},378:function(e,r,a){a(40);a(39);e.exports=a(325)},493:function(e,r){}});
//# sourceMappingURL=layerorder.e84600.js.map