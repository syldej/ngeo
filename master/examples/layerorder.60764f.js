(function(u){function e(e){var r=e[0];var t=e[1];var a=e[2];var n,o,s=0,i=[];for(;s<r.length;s++){o=r[s];if(f[o]){i.push(f[o][0])}f[o]=0}for(n in t){if(Object.prototype.hasOwnProperty.call(t,n)){u[n]=t[n]}}if(p)p(e);while(i.length){i.shift()()}c.push.apply(c,a||[]);return l()}function l(){var e;for(var r=0;r<c.length;r++){var t=c[r];var a=true;for(var n=1;n<t.length;n++){var o=t[n];if(f[o]!==0)a=false}if(a){c.splice(r--,1);e=s(s.s=t[0])}}return e}var t={};var f={21:0};var c=[];function s(e){if(t[e]){return t[e].exports}var r=t[e]={i:e,l:false,exports:{}};u[e].call(r.exports,r,r.exports,s);r.l=true;return r.exports}s.m=u;s.c=t;s.d=function(e,r,t){if(!s.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t})}};s.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};s.t=function(r,e){if(e&1)r=s(r);if(e&8)return r;if(e&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);s.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(e&2&&typeof r!="string")for(var a in r)s.d(t,a,function(e){return r[e]}.bind(null,a));return t};s.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};s.d(e,"a",e);return e};s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[];var a=r.push.bind(r);r.push=e;r=r.slice();for(var n=0;n<r.length;n++)e(r[n]);var p=a;c.push([467,0]);return l()})({467:function(e,r,t){t(51);t(52);e.exports=t(542)},468:function(e,r){},542:function(e,r,t){"use strict";t.r(r);var a=t(468);var n=t(23);var o=t(291);var u=t(1);var s=function e(a,n,o,r,s){var t=r.$watchCollection(function(){return a},function(){var e,r,t;if(o){for(e=a.length-1,t=0;e>=0;--e){if(s(a[e])){n[t++]=a[e]}}}else{for(e=0,r=a.length,t=0;e<r;++e){if(s(a[e])){n[t++]=a[e]}}}n.length=t});var i=r.$watchCollection(function(){return n},function(){var e,r,t;if(o){for(e=0,r=a.length,t=n.length-1;e<r;++e){if(s(a[e])){a[e]=n[t--]}}u["a"].assert(t==-1)}else{for(e=0,r=a.length,t=0;e<r;++e){if(s(a[e])){a[e]=n[t++]}}u["a"].assert(t==n.length)}});return function(){t();i()}};var l=s;var f=t(183);var c=t(88);var p=t(19);var v=t(25);var d=t(18);var h=t(131);var i={};i.module=angular.module("app",["gettext",n["a"].name,o["a"].name]);i.MainController=function(e){var r=new d["a"]({source:new f["a"]({layer:"asitvd.fond_couleur"})});r.set("name","asitvd");var t=new d["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.swissboundaries3d-gemeinde-flaeche.fill"},serverType:"mapserver"})});t.set("name","Boundaries");var a=new d["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.geologie-gravimetrischer_atlas"},serverType:"mapserver"})});a.set("name","Water bodies");var n=new d["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});n.set("name","Cities");this.map=new p["a"]({layers:[r,t,a,n],view:new v["a"]({projection:c["a"],resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});var o=this.map;this.roads_=new d["a"]({source:new h["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.bafu.laerm-strassenlaerm_tag"},serverType:"mapserver"})});this.roads_.set("name","Roads");this.selectedLayers=[];var s=this.selectedLayers;l(o.getLayers().getArray(),s,true,e,i);e.$watchCollection(function(){return s},function(){o.render()});function i(e){return e!==r}};i.MainController.$inject=["$scope"];i.MainController.prototype.toggleRoadsLayer=function(e){if(e===undefined){return this.map.getLayers().getArray().indexOf(this.roads_)>=0}else{if(e){this.map.addLayer(this.roads_)}else{this.map.removeLayer(this.roads_)}}};i.module.controller("MainController",i.MainController);var m=r["default"]=i}});
//# sourceMappingURL=layerorder.60764f.js.map