(function(e){function r(r){var a=r[0];var i=r[1];var o=r[2];var u,s,c=0,m=[];for(;c<a.length;c++){s=a[c];if(t[s]){m.push(t[s][0])}t[s]=0}for(u in i){if(Object.prototype.hasOwnProperty.call(i,u)){e[u]=i[u]}}if(f)f(r);while(m.length){m.shift()()}l.push.apply(l,o||[]);return n()}function n(){var e;for(var r=0;r<l.length;r++){var n=l[r];var a=true;for(var o=1;o<n.length;o++){var u=n[o];if(t[u]!==0)a=false}if(a){l.splice(r--,1);e=i(i.s=n[0])}}return e}var a={};var t={3:0};var l=[];function i(r){if(a[r]){return a[r].exports}var n=a[r]={i:r,l:false,exports:{}};e[r].call(n.exports,n,n.exports,i);n.l=true;return n.exports}i.m=e;i.c=a;i.d=function(e,r,n){if(!i.o(e,r)){Object.defineProperty(e,r,{configurable:false,enumerable:true,get:n})}};i.r=function(e){Object.defineProperty(e,"__esModule",{value:true})};i.n=function(e){var r=e&&e.__esModule?function r(){return e["default"]}:function r(){return e};i.d(r,"a",r);return r};i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[];var u=o.push.bind(o);o.push=r;o=o.slice();for(var s=0;s<o.length;s++)r(o[s]);var f=u;l.push([404,0]);return n()})({403:function(e,r,n){"use strict";n.r(r);var a=n(545);var t=n.n(a);var l=n(310);var i=n(106);var o={};o.module=angular.module("gmfapp",["gettext",l["a"].name,i["a"].module.name]);o.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");o.MainController=function(e,r){this.ngeoWMSTime_=r;this.wmsTimeRangeMode={widget:"slider",maxValue:"2013-12-31T00:00:00Z",minValue:"2006-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"day",mode:"range",interval:[0,1,0,0]};this.wmsTimeValueMode={widget:"slider",maxValue:"2015-12-31T00:00:00Z",minValue:"2014-01-01T00:00:00Z",maxDefValue:null,minDefValue:null,resolution:"year",mode:"value",interval:[0,0,1,0]};this.sliderValue;this.sliderRangeValue;this.onDateSelected=function(r){this.sliderValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeValueMode,r);e.$digest()};this.onDateRangeSelected=function(r){this.sliderRangeValue=this.ngeoWMSTime_.formatWMSTimeParam(this.wmsTimeRangeMode,r);e.$digest()}};o.MainController.$inject=["$scope","ngeoWMSTime"];o.module.controller("MainController",o.MainController);r["default"]=o},404:function(e,r,n){n(61);n(60);e.exports=n(403)},545:function(e,r){}});
//# sourceMappingURL=timeslider.fd2bdc.js.map