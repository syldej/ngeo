!function(i){function e(e){for(var t,o,n=e[0],r=e[1],a=e[2],l=0,u=[];l<n.length;l++)o=n[l],m[o]&&u.push(m[o][0]),m[o]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(p&&p(e);u.length;)u.shift()();return s.push.apply(s,a||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,r=1;r<o.length;r++){var a=o[r];0!==m[a]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=o[0]))}return e}var o={},m={22:0},s=[];function l(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=i,l.c=o,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(o,n,function(e){return t[e]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=n;s.push([589,0]),c()}({589:function(e,t,o){o(71),o(72),e.exports=o(590)},590:function(e,t,o){"use strict";o.r(t);o(591);var n=o(106),r=o(54),a=o(347),l=o(24),u=o(121),i=o(55),c=o(34),m=o(42),s=o(28),p=o(49),f={};f.module=angular.module("gmfapp",["gettext",n.a.name,r.a.name,a.a.name,l.a.module.name,u.a.name]),f.module.value("gmfTreeUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/themes?version=2&background=background"),f.module.value("gmfPrintUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/printproxy"),f.module.value("authenticationBaseUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/wsgi"),f.module.value("gmfLayersUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/layers/"),f.module.constant("defaultTheme","Demo"),f.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),f.MainController=function(e,t){var o=this;e.loadThemes(),this.map=new c.a({layers:[new s.a({source:new p.a})],view:new m.a({projection:i.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:3})}),this.defaulPrintFieldstValues={comments:"Default comments example",legend:!0},this.themes=void 0,this.treeSource=void 0,e.getThemesObject().then(function(e){e&&(o.themes=e,o.treeSource=e[3])}),t.init(this.map)},f.MainController.$inject=["gmfThemes","ngeoFeatureOverlayMgr"],f.module.controller("MainController",f.MainController),t.default=f},591:function(e,t){}});
//# sourceMappingURL=print.0da578.js.map