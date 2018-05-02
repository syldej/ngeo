(function(l){function e(e){var t=e[0];var o=e[1];var r=e[2];var a,n,i=0,c=[];for(;i<t.length;i++){n=t[i];if(u[n]){c.push(u[n][0])}u[n]=0}for(a in o){if(Object.prototype.hasOwnProperty.call(o,a)){l[a]=o[a]}}if(f)f(e);while(c.length){c.shift()()}p.push.apply(p,r||[]);return s()}function s(){var e;for(var t=0;t<p.length;t++){var o=p[t];var r=true;for(var a=1;a<o.length;a++){var n=o[a];if(u[n]!==0)r=false}if(r){p.splice(t--,1);e=i(i.s=o[0])}}return e}var o={};var u={12:0};var p=[];function i(e){if(o[e]){return o[e].exports}var t=o[e]={i:e,l:false,exports:{}};l[e].call(t.exports,t,t.exports,i);t.l=true;return t.exports}i.m=l;i.c=o;i.d=function(e,t,o){if(!i.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:o})}};i.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};i.t=function(t,e){if(e&1)t=i(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var o=Object.create(null);i.r(o);Object.defineProperty(o,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o};i.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};i.d(e,"a",e);return e};i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};i.p="";var t=window["webpackJsonp"]=window["webpackJsonp"]||[];var r=t.push.bind(t);t.push=e;t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var f=r;p.push([433,0]);return s()})({433:function(e,t,o){o(51);o(52);e.exports=o(540)},434:function(e,t){},540:function(e,t,o){"use strict";o.r(t);var r=o(434);var c=o(19);var a=o(25);var n=o(18);var i=o(30);var l=o(73);var s=o(16);var u=o(33);var p=o(34);var f=o(23);var v=o(1);var h=o(182);var g=o(226);var _=o(2);var y=o(15);var d=o(293);var m=o(27);var w=angular.module("ngeoDesktopGeolocation",[h["a"].module.name,g["a"].module.name]);w.GeolocationEventType={ERROR:"desktop-geolocation-error"};w.directive_=function(){return{restrict:"A",scope:{getDesktopMapFn:"&ngeoDesktopGeolocationMap",getDesktopGeolocationOptionsFn:"&ngeoDesktopGeolocationOptions"},controller:"ngeoGeolocationDesktopController"}};w.directive("ngeoDesktopGeolocation",w.directive_);w.Controller_=function(t,e,o,r){var a=this;e.on("click",this.toggle.bind(this));var n=t["getDesktopMapFn"]();v["a"].assertInstanceof(n,c["a"]);this.map_=n;var i=t["getDesktopGeolocationOptionsFn"]()||{};v["a"].assertObject(i);this.$scope_=t;this.notification_=r;this.featureOverlay_=o.getFeatureOverlay();this.geolocation_=new d["a"]({projection:n.getView().getProjection()});this.geolocation_.on("error",function(e){this.deactivate_();this.notification_.error(e.message);t.$emit(w.GeolocationEventType.ERROR,e)},this);this.positionFeature_=new y["a"];if(i.positionFeatureStyle){this.positionFeature_.setStyle(i.positionFeatureStyle)}this.accuracyFeature_=new y["a"];if(i.accuracyFeatureStyle){this.accuracyFeature_.setStyle(i.accuracyFeatureStyle)}this.zoom_=i.zoom;this.active_=false;_["a"](this.geolocation_,"change:accuracyGeometry",function(){a.accuracyFeature_.setGeometry(a.geolocation_.getAccuracyGeometry())});_["a"](this.geolocation_,"change:position",function(e){a.setPosition_(e)})};w.Controller_.$inject=["$scope","$element","ngeoFeatureOverlayMgr","ngeoNotification"];w.Controller_.prototype.toggle=function(){if(this.active_){this.deactivate_()}else{this.activate_()}};w.Controller_.prototype.activate_=function(){this.featureOverlay_.addFeature(this.positionFeature_);this.featureOverlay_.addFeature(this.accuracyFeature_);this.geolocation_.setTracking(true);this.active_=true};w.Controller_.prototype.deactivate_=function(){this.featureOverlay_.clear();this.active_=false;this.notification_.clear()};w.Controller_.prototype.setPosition_=function(e){var t=this.geolocation_.getPosition();var o=new m["a"](t);this.positionFeature_.setGeometry(o);this.map_.getView().setCenter(t);if(this.zoom_!==undefined){this.map_.getView().setZoom(this.zoom_)}this.geolocation_.setTracking(false)};w.controller("ngeoGeolocationDesktopController",w.Controller_);var b=w;var F={};F.module=angular.module("app",["gettext",b.name,f["a"].name]);F.MainController=function(e,t){var o=new s["c"]({image:new l["a"]({radius:6,fill:new u["a"]({color:"rgba(230, 100, 100, 1)"}),stroke:new p["a"]({color:"rgba(230, 40, 40, 1)",width:2})})});var r=new s["c"]({fill:new u["a"]({color:"rgba(100, 100, 230, 0.3)"}),stroke:new p["a"]({color:"rgba(40, 40, 230, 1)",width:2})});this.desktopGeolocationOptions={positionFeatureStyle:o,accuracyFeatureStyle:r,zoom:17};this.map=new c["a"]({layers:[new n["a"]({source:new i["b"]})],view:new a["a"]({center:[0,0],zoom:4})});t.init(this.map)};F.MainController.$inject=["$scope","ngeoFeatureOverlayMgr"];F.module.controller("MainController",F.MainController);var O=t["default"]=F}});
//# sourceMappingURL=desktopgeolocation.f53f98.js.map