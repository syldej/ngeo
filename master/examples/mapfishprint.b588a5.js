(function(s){function t(t){var e=t[0];var r=t[1];var n=t[2];var a,o,i=0,u=[];for(;i<e.length;i++){o=e[i];if(p[o]){u.push(p[o][0])}p[o]=0}for(a in r){if(Object.prototype.hasOwnProperty.call(r,a)){s[a]=r[a]}}if(f)f(t);while(u.length){u.shift()()}c.push.apply(c,n||[]);return l()}function l(){var t;for(var e=0;e<c.length;e++){var r=c[e];var n=true;for(var a=1;a<r.length;a++){var o=r[a];if(p[o]!==0)n=false}if(n){c.splice(e--,1);t=i(i.s=r[0])}}return t}var r={};var p={24:0};var c=[];function i(t){if(r[t]){return r[t].exports}var e=r[t]={i:t,l:false,exports:{}};s[t].call(e.exports,e,e.exports,i);e.l=true;return e.exports}i.m=s;i.c=r;i.d=function(t,e,r){if(!i.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:r})}};i.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);i.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};i.p="";var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=e.push.bind(e);e.push=t;e=e.slice();for(var a=0;a<e.length;a++)t(e[a]);var f=n;c.push([476,0]);return l()})({476:function(t,e,r){r(51);r(52);t.exports=r(477)},477:function(t,e,r){"use strict";r.r(e);var a=r(113);var n=r(478);var o=r.n(n);var i=r(88);var u=r(300);var s=r(281);var l=r(19);var p=r(25);var c=r(159);var f=r(77);var _=r(41);var v=r(74);var d=r(36);var h=r(23);var P={};var S=angular.module("app",["gettext",h["a"].name,u["a"].module.name,s["a"].module.name]);P.PRINT_SCALES_=[100,250,500,2500,5e3,1e4,25e3,5e4,1e5,5e5];P.PRINT_FORMAT_="pdf";P.PRINT_LAYOUT_="1 A4 portrait";P.PRINT_DPI_=72;P.PRINT_PAPER_SIZE_=[555,675];P.MainController=function(t,e,n){this.map=new l["a"]({layers:[new f["a"]({source:new v["a"]({url:a["a"].MAPSERVER_PROXY,params:{LAYERS:"osm"},serverType:"mapserver"})}),new _["a"]({source:new d["a"]({url:"data/polygon-swizerland.json",format:new c["a"]({defaultDataProjection:i["a"]})})})],view:new p["a"]({projection:i["a"],resolutions:[200,100,50,20,10,5,2.5,2,1],center:[537635,152640],zoom:3})});this.printState="";this.$timeout_=t;this.print_=e(a["a"].PRINT_PROXY);this.printUtils_=n;var r=n.createPrintMaskPostcompose(function(){return P.PRINT_PAPER_SIZE_},function(t){var e=t.size;var r=t.viewState.resolution;return e!==undefined&&r!==undefined?n.getOptimalScale(e,r,P.PRINT_PAPER_SIZE_,P.PRINT_SCALES_):P.PRINT_SCALES_[0]});this.map.on("postcompose",r)};P.MainController.$inject=["$timeout","ngeoCreatePrint","ngeoPrintUtils"];P.MainController.prototype.print=function(){var t=this.map;var e=t.getSize();var r=t.getView().getResolution();var n=e!==undefined&&r!==undefined?this.printUtils_.getOptimalScale(e,r,P.PRINT_PAPER_SIZE_,P.PRINT_SCALES_):P.PRINT_SCALES_[0];var a=P.PRINT_DPI_;var o=P.PRINT_FORMAT_;var i=P.PRINT_LAYOUT_;this.printState="Printing...";var u=this.print_.createSpec(t,n,a,i,o,{datasource:[],debug:0,comments:"My comments",title:"My print"});this.print_.createReport(u).then(this.handleCreateReportSuccess_.bind(this),this.handleCreateReportError_.bind(this))};P.MainController.prototype.handleCreateReportSuccess_=function(t){var e=t.data;this.getStatus_(e.ref)};P.MainController.prototype.getStatus_=function(t){this.print_.getStatus(t).then(this.handleGetStatusSuccess_.bind(this,t),this.handleGetStatusError_.bind(this))};P.MainController.prototype.handleCreateReportError_=function(t){this.printState="Print error"};P.MainController.prototype.handleGetStatusSuccess_=function(t,e){var r=e.data;var n=r.done;if(n){this.printState="";window.location.href=this.print_.getReportUrl(t)}else{var a=this;this.$timeout_(function(){a.getStatus_(t)},1e3,false)}};P.MainController.prototype.handleGetStatusError_=function(t){this.printState="Print error"};S.controller("MainController",P.MainController);e["default"]=P},478:function(t,e){}});
//# sourceMappingURL=mapfishprint.b588a5.js.map