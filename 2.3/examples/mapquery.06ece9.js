(function(e){function r(r){var o=r[0];var u=r[1];var l=r[2];var i,s,m=0,c=[];for(;m<o.length;m++){s=o[m];if(a[s]){c.push(a[s][0])}a[s]=0}for(i in u){if(Object.prototype.hasOwnProperty.call(u,i)){e[i]=u[i]}}if(p)p(r);while(c.length){c.shift()()}n.push.apply(n,l||[]);return t()}function t(){var e;for(var r=0;r<n.length;r++){var t=n[r];var o=true;for(var l=1;l<t.length;l++){var i=t[l];if(a[i]!==0)o=false}if(o){n.splice(r--,1);e=u(u.s=t[0])}}return e}var o={};var a={18:0};var n=[];function u(r){if(o[r]){return o[r].exports}var t=o[r]={i:r,l:false,exports:{}};e[r].call(t.exports,t,t.exports,u);t.l=true;return t.exports}u.m=e;u.c=o;u.d=function(e,r,t){if(!u.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:t})}};u.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};u.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};u.d(r,"a",r);return r};u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[];var i=l.push.bind(l);l.push=r;l=l.slice();for(var s=0;s<l.length;s++)r(l[s]);var p=i;n.push([370,0]);return t()})({369:function(e,r,t){"use strict";t.r(r);var o=t(489);var a=t.n(o);var n=t(74);var u=t(134);var l=t(137);var i=t(17);var s=t(99);var p=t(66);var m=t(111);var c=t(241);var v=t(43);var f=t(53);var y=t(113);var h=t(36);var d=t(104);var w=t(57);var g={};g.module=angular.module("app",["gettext",u["a"].module.name,i["a"].name,s["a"].name,m["a"].module.name,c["a"].name]);g.module.value("ngeoQueryOptions",{limit:20});g.queryresultComponent={controller:"AppQueryresultController",template:t(291)};g.module.component("appQueryresult",g.queryresultComponent);g.QueryresultController=function(e){this.result=e};g.QueryresultController.$inject=["ngeoQueryResult"];g.module.controller("AppQueryresultController",g.QueryresultController);g.MainController=function(e,r,t){this.dummyActive=false;this.queryActive=true;var o=new y["a"]({source:new d["a"]({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"bus_stop"}})});var a=new y["a"]({source:new d["a"]({url:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",params:{LAYERS:"information"}})});this.map=new v["a"]({layers:[new h["a"]({source:new w["b"]}),a,o],view:new f["a"]({projection:n["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:0})});r.map=this.map;r.collection.push(new l["a"]({id:1,name:"bus_stop",visible:true,wmsUrl:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",ogcLayers:[{name:"bus_stop",queryable:true}]}));r.collection.push(new l["a"]({id:2,name:"information",visible:true,wmsUrl:"https://geomapfish-demo.camptocamp.com/2.3/wsgi/mapserv_proxy",ogcLayers:[{name:"information",queryable:true}]}));var u=new p["a"](this,"queryActive");t.registerTool("mapTools",u,true);var i=new p["a"](this,"dummyActive");t.registerTool("mapTools",i)};g.MainController.$inject=["$scope","ngeoDataSources","ngeoToolActivateMgr"];g.MainController.prototype.getSetDummyActive=function(e){if(e!==undefined){this.dummyActive=e}else{return this.dummyActive}};g.module.controller("MainController",g.MainController);r["default"]=g},370:function(e,r,t){t(40);t(39);e.exports=t(369)},489:function(e,r){}});
//# sourceMappingURL=mapquery.06ece9.js.map