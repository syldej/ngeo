(function(i){function e(e){var r=e[0];var t=e[1];var n=e[2];var o,a,u=0,l=[];for(;u<r.length;u++){a=r[u];if(c[a]){l.push(c[a][0])}c[a]=0}for(o in t){if(Object.prototype.hasOwnProperty.call(t,o)){i[o]=t[o]}}if(v)v(e);while(l.length){l.shift()()}p.push.apply(p,n||[]);return s()}function s(){var e;for(var r=0;r<p.length;r++){var t=p[r];var n=true;for(var o=1;o<t.length;o++){var a=t[o];if(c[a]!==0)n=false}if(n){p.splice(r--,1);e=u(u.s=t[0])}}return e}var t={};var c={25:0};var p=[];function u(e){if(t[e]){return t[e].exports}var r=t[e]={i:e,l:false,exports:{}};i[e].call(r.exports,r,r.exports,u);r.l=true;return r.exports}u.m=i;u.c=t;u.d=function(e,r,t){if(!u.o(e,r)){Object.defineProperty(e,r,{enumerable:true,get:t})}};u.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};u.t=function(r,e){if(e&1)r=u(r);if(e&8)return r;if(e&4&&typeof r==="object"&&r&&r.__esModule)return r;var t=Object.create(null);u.r(t);Object.defineProperty(t,"default",{enumerable:true,value:r});if(e&2&&typeof r!="string")for(var n in r)u.d(t,n,function(e){return r[e]}.bind(null,n));return t};u.n=function(r){var e=r&&r.__esModule?function e(){return r["default"]}:function e(){return r};u.d(e,"a",e);return e};u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};u.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=r.push.bind(r);r.push=e;r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var v=n;p.push([479,0]);return s()})({479:function(e,r,t){t(51);t(52);e.exports=t(480)},480:function(e,r,t){"use strict";t.r(r);var l=t(113);var n=t(481);var o=t.n(n);var i=t(88);var a=t(155);var s=t(166);var u=t(23);var c=t(116);var p=t(76);var v=t(129);var f=t(284);var m=t(230);var y=t(19);var d=t(25);var h=t(77);var b=t(18);var w=t(74);var g=t(30);var A={};A.module=angular.module("app",["gettext",a["a"].module.name,u["a"].name,c["a"].name,v["a"].module.name,f["a"].name,m["a"].name]);A.module.run(["$templateCache",function(e){e.put("partials/queryresult",t(322))}]);A.module.value("ngeoQueryOptions",{limit:20});A.queryresultComponent={controller:"AppQueryresultController",templateUrl:"partials/queryresult"};A.module.component("appQueryresult",A.queryresultComponent);A.QueryresultController=function(e){this.result=e};A.QueryresultController.$inject=["ngeoQueryResult"];A.module.controller("AppQueryresultController",A.QueryresultController);A.MainController=function(e,r,t){this.dummyActive=false;this.queryActive=true;var n=new h["a"]({source:new w["a"]({url:l["a"].MAPSERVER_PROXY,params:{LAYERS:"bus_stop"}})});var o=new h["a"]({source:new w["a"]({url:l["a"].MAPSERVER_PROXY,params:{LAYERS:"information"}})});this.map=new y["a"]({layers:[new b["a"]({source:new g["b"]}),o,n],view:new d["a"]({projection:i["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})});r.map=this.map;r.collection.push(new s["a"]({id:1,name:"bus_stop",visible:true,wmsUrl:l["a"].MAPSERVER_PROXY,ogcLayers:[{name:"bus_stop",queryable:true}]}));r.collection.push(new s["a"]({id:2,name:"information",visible:true,wmsUrl:l["a"].MAPSERVER_PROXY,ogcLayers:[{name:"information",queryable:true}]}));var a=new p["a"](this,"queryActive");t.registerTool("mapTools",a,true);var u=new p["a"](this,"dummyActive");t.registerTool("mapTools",u)};A.MainController.$inject=["$scope","ngeoDataSources","ngeoToolActivateMgr"];A.MainController.prototype.getSetDummyActive=function(e){if(e!==undefined){this.dummyActive=e}else{return this.dummyActive}};A.module.controller("MainController",A.MainController);r["default"]=A},481:function(e,r){}});
//# sourceMappingURL=mapquery.3f2752.js.map