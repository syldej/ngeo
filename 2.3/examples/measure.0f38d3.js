(function(e){function t(t){var n=t[0];var s=t[1];var i=t[2];var u,l,m=0,p=[];for(;m<n.length;m++){l=n[m];if(a[l]){p.push(a[l][0])}a[l]=0}for(u in s){if(Object.prototype.hasOwnProperty.call(s,u)){e[u]=s[u]}}if(c)c(t);while(p.length){p.shift()()}o.push.apply(o,i||[]);return r()}function r(){var e;for(var t=0;t<o.length;t++){var r=o[t];var n=true;for(var i=1;i<r.length;i++){var u=r[i];if(a[u]!==0)n=false}if(n){o.splice(t--,1);e=s(s.s=r[0])}}return e}var n={};var a={17:0};var o=[];function s(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,s);r.l=true;return r.exports}s.m=e;s.c=n;s.d=function(e,t,r){if(!s.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};s.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};s.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};s.d(t,"a",t);return t};s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[];var u=i.push.bind(i);i.push=t;i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([368,0]);return r()})({366:function(e,t){e.exports='<div ngeo-btn-group class=btn-group> <a ngeo-btn class="btn btn-default" ng-model=$ctrl.measureLength.active>Length</a> <a ngeo-btn class="btn btn-default" ng-model=$ctrl.measureArea.active>Area</a> <a ngeo-btn class="btn btn-default" ng-model=$ctrl.measureAzimut.active>Azimut</a> </div> '},367:function(e,t,r){"use strict";r.r(t);var n=r(488);var a=r.n(n);var o=r(172);var s=r(144);var i=r(171);var u=r(17);var l=r(99);var c=r(77);var m=r(90);var p=r(43);var g=r(53);var f=r(305);var h=r(36);var v=r(57);var d=r(19);var b=r(108);var M=r(46);var A=r(47);var C=r(276);var w=r.n(C);var k={};k.module=angular.module("app",["gettext",u["a"].name,l["a"].name,m["a"].name,"ngSanitize"]);k.measuretoolsComponent={bindings:{map:"=appMeasuretoolsMap",lang:"=appMeasuretoolsLang"},controller:"AppMeasuretoolsController",template:r(366)};k.module.component("appMeasuretools",k.measuretoolsComponent);k.MeasuretoolsController=function(e,t,r,n,a){var u=this;this.map;this.lang;this.measureStartMsg=null;this.measureLengthContinueMsg=null;this.measureAreaContinueMsg=null;this.measureAzimutContinueMsg=null;var l={en:r.trustAsHtml("Click to start drawing."),fr:r.trustAsHtml("Cliquer pour commencer à dessiner.")};var m={en:r.trustAsHtml("Click to continue drawing.<br>"+"Double-click or click last point to finish."),fr:r.trustAsHtml("Cliquer pour continuer le dessin.<br>"+"Double-cliquer ou cliquer sur dernier point pour finir.")};var p={en:r.trustAsHtml("Click to continue drawing.<br>"+"Double-click or click starting point to finish."),fr:r.trustAsHtml("Cliquer pour continuer le dessin.<br>"+"Double-cliquer ou cliquer sur point de départ pour finir.")};var g={en:r.trustAsHtml("Click to finish."),fr:r.trustAsHtml("Cliquer pour finir.")};var f=angular.element('<span ng-bind-html="ctrl.measureStartMsg"></span>');f=t(f)(e);var h=angular.element('<span ng-bind-html="ctrl.measureLengthContinueMsg"></span>');h=t(h)(e);var v=angular.element('<span ng-bind-html="ctrl.measureAreaContinueMsg"></span>');v=t(v)(e);var C=angular.element('<span ng-bind-html="ctrl.measureAzimutContinueMsg"></span>');C=t(C)(e);e.$watch(function(){return u.lang},function(e){u.measureStartMsg=l[e];u.measureLengthContinueMsg=m[e];u.measureAreaContinueMsg=p[e];u.measureAzimutContinueMsg=g[e]});var w=new d["c"]({fill:new A["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new M["a"]({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new b["a"]({radius:5,stroke:new M["a"]({color:"rgba(0, 0, 0, 0.7)"}),fill:new A["a"]({color:"rgba(255, 255, 255, 0.2)"})})});this.measureLength=new i["a"](n("ngeoUnitPrefix"),a,{sketchStyle:w,startMsg:f[0],continueMsg:h[0]});this.measureLength.setActive(false);c["a"].interaction(this.measureLength);this.measureArea=new o["a"](n("ngeoUnitPrefix"),a,{sketchStyle:w,startMsg:f[0],continueMsg:v[0]});this.measureArea.setActive(false);c["a"].interaction(this.measureArea);this.measureAzimut=new s["a"](n("ngeoUnitPrefix"),n("ngeoNumber"),{sketchStyle:w,startMsg:f[0],continueMsg:C[0]});this.measureAzimut.setActive(false);c["a"].interaction(this.measureAzimut);this.measureAzimut.on("measureend",function(e){var t=e.target.getTooltipElement();t.innerHTML+="<br>Additional info"})};k.MeasuretoolsController.$inject=["$scope","$compile","$sce","$filter","gettextCatalog"];k.module.controller("AppMeasuretoolsController",k.MeasuretoolsController);k.MeasuretoolsController.prototype.$onInit=function(){this.map.addInteraction(this.measureLength);this.map.addInteraction(this.measureArea);this.map.addInteraction(this.measureAzimut)};k.MainController=function(){this.lang="en";this.map=new p["a"]({layers:[new h["a"]({source:new v["b"]})],view:new g["a"]({center:[692114.718759744,5743119.914347709],zoom:15})});this.map.addControl(new f["a"])};k.module.controller("MainController",k.MainController);t["default"]=k},368:function(e,t,r){r(40);r(39);e.exports=r(367)},488:function(e,t){}});
//# sourceMappingURL=measure.0f38d3.js.map