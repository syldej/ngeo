(function(l){function t(t){var e=t[0];var r=t[1];var n=t[2];var o,a,i=0,u=[];for(;i<e.length;i++){a=e[i];if(p[a]){u.push(p[a][0])}p[a]=0}for(o in r){if(Object.prototype.hasOwnProperty.call(r,o)){l[o]=r[o]}}if(c)c(t);while(u.length){u.shift()()}s.push.apply(s,n||[]);return f()}function f(){var t;for(var e=0;e<s.length;e++){var r=s[e];var n=true;for(var o=1;o<r.length;o++){var a=r[o];if(p[a]!==0)n=false}if(n){s.splice(e--,1);t=i(i.s=r[0])}}return t}var r={};var p={3:0};var s=[];function i(t){if(r[t]){return r[t].exports}var e=r[t]={i:t,l:false,exports:{}};l[t].call(e.exports,e,e.exports,i);e.l=true;return e.exports}i.m=l;i.c=r;i.d=function(t,e,r){if(!i.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:r})}};i.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};i.t=function(e,t){if(t&1)e=i(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);i.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r};i.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};i.d(t,"a",t);return t};i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};i.p="";var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=e.push.bind(e);e.push=t;e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var c=n;s.push([405,0]);return f()})({405:function(t,e,r){r(51);r(52);t.exports=r(406)},406:function(t,e,r){"use strict";r.r(e);var n=r(238);var o=r(275);var a=r(15);var i=r(23);var u={};u.module=angular.module("app",["gettext",i["a"].name,o["a"].name]);u.MainController=function(t,e,r){var n=this;this.timeout_=e;this.attributes=null;this.disabled=false;this.feature=new a["a"]({name:"A feature",kind:"house"});t.get("data/xsdattributes.xml").then(this.handleXSDAttributeGet_.bind(this));this.log="";r.$watch(function(){return n.feature.get("name")},function(t,e){if(t!==e){n.appendLog("name changed from '"+e+"' to '"+t+"'")}});r.$watch(function(){return n.feature.get("kind")},function(t,e){if(t!==e){n.appendLog("kind changed from '"+e+"' to '"+t+"'")}})};u.MainController.$inject=["$http","$timeout","$scope"];u.MainController.prototype.handleXSDAttributeGet_=function(t){var e=new n["a"];var r=e.read(t.data);this.attributes=r;return r};u.MainController.prototype.updateName=function(){var t=this;this.timeout_(function(){t.feature.set("name","An alternate name")},0)};u.MainController.prototype.appendLog=function(t){this.log=t+"\n"+this.log};u.module.controller("MainController",u.MainController);e["default"]=u}});
//# sourceMappingURL=attributes.8c6ae8.js.map