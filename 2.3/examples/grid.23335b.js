(function(e){function r(r){var t=r[0];var i=r[1];var p=r[2];var l,u,m=0,f=[];for(;m<t.length;m++){u=t[m];if(a[u]){f.push(a[u][0])}a[u]=0}for(l in i){if(Object.prototype.hasOwnProperty.call(i,l)){e[l]=i[l]}}if(s)s(r);while(f.length){f.shift()()}o.push.apply(o,p||[]);return n()}function n(){var e;for(var r=0;r<o.length;r++){var n=o[r];var t=true;for(var p=1;p<n.length;p++){var l=n[p];if(a[l]!==0)t=false}if(t){o.splice(r--,1);e=i(i.s=n[0])}}return e}var t={};var a={25:0};var o=[];function i(r){if(t[r]){return t[r].exports}var n=t[r]={i:r,l:false,exports:{}};e[r].call(n.exports,n,n.exports,i);n.l=true;return n.exports}i.m=e;i.c=t;i.d=function(e,r,n){if(!i.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:n})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};i.d(r,"a",r);return r};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var p=window["webpackJsonp"]=window["webpackJsonp"]||[];var l=p.push.bind(p);p.push=r;p=p.slice();for(var u=0;u<p.length;u++)r(p[u]);var s=l;o.push([384,0]);return n()})({383:function(e,r,n){"use strict";n.r(r);var t=n(496);var a=n.n(t);var o=n(197);var i=n(229);var p={};p.module=angular.module("app",["gettext",i["a"].name]);p.MainController=function(){var e=[{name:"row_1",display_name:"Row 1",type:12,timestamp:"2010-11-09T22:56:26Z"},{name:"row_2",display_name:"Row 2",type:121,timestamp:"2010-11-07T22:56:26Z"},{name:"row_3",display_name:"Row 3",type:7,timestamp:"2010-11-03T22:56:26Z"},{name:"row_4",display_name:"Row 4",type:5,timestamp:"2010-11-19T22:56:26Z"},{name:"row_5",display_name:"Row 5",type:23,timestamp:"2010-11-23T22:56:26Z"},{name:"row_6",display_name:"Row 6",type:111,timestamp:"2010-11-17T22:56:26Z"}];var r=[{name:"name"},{name:"display_name"},{name:"timestamp"},{name:"type"}];this.gridConfig=new o["a"](e,r)};p.module.controller("MainController",p.MainController);r["default"]=p},384:function(e,r,n){n(40);n(39);e.exports=n(383)},496:function(e,r){}});
//# sourceMappingURL=grid.23335b.js.map