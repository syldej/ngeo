(function(i){function r(r){var e=r[0];var n=r[1];var t=r[2];var o,a,l=0,u=[];for(;l<e.length;l++){a=e[l];if(p[a]){u.push(p[a][0])}p[a]=0}for(o in n){if(Object.prototype.hasOwnProperty.call(n,o)){i[o]=n[o]}}if(d)d(r);while(u.length){u.shift()()}s.push.apply(s,t||[]);return c()}function c(){var r;for(var e=0;e<s.length;e++){var n=s[e];var t=true;for(var o=1;o<n.length;o++){var a=n[o];if(p[a]!==0)t=false}if(t){s.splice(e--,1);r=l(l.s=n[0])}}return r}var n={};var p={5:0};var s=[];function l(r){if(n[r]){return n[r].exports}var e=n[r]={i:r,l:false,exports:{}};i[r].call(e.exports,e,e.exports,l);e.l=true;return e.exports}l.m=i;l.c=n;l.d=function(r,e,n){if(!l.o(r,e)){Object.defineProperty(r,e,{enumerable:true,get:n})}};l.r=function(r){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(r,"__esModule",{value:true})};l.t=function(e,r){if(r&1)e=l(e);if(r&8)return e;if(r&4&&typeof e==="object"&&e&&e.__esModule)return e;var n=Object.create(null);l.r(n);Object.defineProperty(n,"default",{enumerable:true,value:e});if(r&2&&typeof e!="string")for(var t in e)l.d(n,t,function(r){return e[r]}.bind(null,t));return n};l.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};l.d(r,"a",r);return r};l.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};l.p="";var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var t=e.push.bind(e);e.push=r;e=e.slice();for(var o=0;o<e.length;o++)r(e[o]);var d=t;s.push([411,0]);return c()})({411:function(r,e,n){n(51);n(52);r.exports=n(412)},412:function(r,e,n){"use strict";n.r(e);var t=n(413);var o=n.n(t);var a=n(183);var l=n(88);var u=n(19);var i=n(25);var c=n(77);var p=n(18);var s=n(74);var d=n(23);var f={};f.module=angular.module("app",["gettext",d["a"].name]);f.module.run(["$templateCache",function(r){r.put("partials/backgroundlayerdropdown",n(414))}]);f.backgroundlayerComponent={bindings:{map:"=appBackgroundlayerMap"},templateUrl:"partials/backgroundlayerdropdown",controller:"AppBackgroundlayerController"};f.module.component("appBackgroundlayer",f.backgroundlayerComponent);f.BackgroundlayerController=function(r,e){var n=this;r.get("data/backgroundlayers.json").then(function(r){var e=r.data;n["bgLayers"]=e;n.setLayer(e[0])});this.backgroundLayerMgr_=e};f.BackgroundlayerController.$inject=["$http","ngeoBackgroundLayerMgr"];f.BackgroundlayerController.prototype.setLayer=function(r){this["currentBgLayer"]=r;var e=this.createLayer_(r["name"]);this.backgroundLayerMgr_.set(this["map"],e)};f.BackgroundlayerController.prototype.createLayer_=function(r){if(r==="blank"){return new p["a"]}var e=new a["a"]({layer:r});return new p["a"]({source:e})};f.module.controller("AppBackgroundlayerController",f.BackgroundlayerController);f.MainController=function(r){var e=new u["a"]({view:new i["a"]({projection:l["a"],resolutions:[1e3,500,200,100,50,20,10,5,2.5,2,1,.5],center:[6e5,2e5],zoom:1})});this["map"]=e;var n=new c["a"]({source:new s["a"]({url:"https://wms.geo.admin.ch",params:{LAYERS:"ch.swisstopo.dreiecksvermaschung"},serverType:"mapserver"})});e.addLayer(n)};f.MainController.$inject=["$scope"];f.module.controller("MainController",f.MainController);e["default"]=f},413:function(r,e){},414:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj){__p+='<div class="dropdown">\n  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n    {{$ctrl.currentBgLayer.name}}\n  </button>\n  <ul class="dropdown-menu" role="menu">\n    <li class="dropdown-item" ng-repeat="layer in ::$ctrl.bgLayers">\n      <a href ng-click="$ctrl.setLayer(layer)">{{::layer.name}}</a>\n    </li>\n  </ul>\n</div>\n'}return __p}}});
//# sourceMappingURL=backgroundlayerdropdown.6c7d19.js.map