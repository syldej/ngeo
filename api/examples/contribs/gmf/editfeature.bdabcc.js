!function(s){function e(e){for(var t,n,r=e[0],a=e[1],o=e[2],i=0,l=[];i<r.length;i++)n=r[i],h[n]&&l.push(h[n][0]),h[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t]);for(c&&c(e);l.length;)l.shift()();return p.push.apply(p,o||[]),u()}function u(){for(var e,t=0;t<p.length;t++){for(var n=p[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==h[o]&&(r=!1)}r&&(p.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},h={8:0},p=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=s,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var c=r;p.push([546,0]),u()}({546:function(e,t,n){n(71),n(72),e.exports=n(547)},547:function(e,c,g){"use strict";g.r(c),function(r){g(548),g(280);var a=g(55),e=g(187),t=g(182),n=g(54),d=g(13),o=g(34),i=g(42),f=g(3),m=g(93),l=g(28),s=g(101),u=g(49),h=g(114),p={};p.module=angular.module("gmfapp",["gettext",e.a.name,t.a.module.name,n.a.name]),p.module.value("authenticationBaseUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/wsgi"),p.module.value("gmfLayersUrl","https://geomapfish-demo-dc.camptocamp.com/2.4/layers/"),p.module.constant("defaultTheme","Demo"),p.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js"),p.MainController=function(e,t,n){this.scope_=e,this.editFeature_=t,this.gmfUser=n,this.wmsSource_=new h.a({url:"https://geomapfish-demo-dc.camptocamp.com/2.4/mapserv_proxy",params:{LAYERS:"point"}}),this.wmsLayer_=new s.a({source:this.wmsSource_}),this.pixelBuffer_=10,this.layerId_=113,this.feature=null,this.pending=!1,this.map=new o.a({layers:[new l.a({source:new u.a}),this.wmsLayer_],view:new i.a({projection:a.a,resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:[537635,152640],zoom:2})}),this.map.on("singleclick",this.handleMapSingleClick_.bind(this)),r('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})},p.MainController.$inject=["$scope","gmfEditFeature","gmfUser"],p.MainController.prototype.handleMapSingleClick_=function(e){var t=e.coordinate,n=this.map.getView().getResolution()*this.pixelBuffer_,r=f.c([t[0],t[1],t[0],t[1]],n);this.editFeature_.getFeaturesInExtent([this.layerId_],r).then(this.handleGetFeatures_.bind(this)),this.feature=null,this.pending=!0,this.scope_.$apply()},p.MainController.prototype.handleGetFeatures_=function(e){this.pending=!1,e.length&&(this.feature=e[0])},p.MainController.prototype.insertFeature=function(){this.pending=!0;var e=this.map,t=e.getView(),n=-50*t.getResolution(),r=e.getSize(),a=f.c(t.calculateExtent(r),n),o=f.v(a),i=f.D(a),l=o[0],s=o[1],u=i[0]-l,h=i[1]-s,p=[l+Math.random()*u,s+Math.random()*h],c=new d.a({geometry:new m.a([p]),name:"New point"});this.feature=null,this.editFeature_.insertFeatures(this.layerId_,[c]).then(this.handleEditFeature_.bind(this))},p.MainController.prototype.updateFeature=function(){console.assert(this.feature),this.pending=!0,this.feature.set("name","Updated name"),this.editFeature_.updateFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this))},p.MainController.prototype.deleteFeature=function(){console.assert(this.feature),this.editFeature_.deleteFeature(this.layerId_,this.feature).then(this.handleEditFeature_.bind(this)),this.feature=null},p.MainController.prototype.handleEditFeature_=function(e){this.pending=!1,this.refreshWMSLayer_()},p.MainController.prototype.refreshWMSLayer_=function(){this.wmsSource_.updateParams({random:Math.random()})},p.module.controller("MainController",p.MainController),c.default=p}.call(this,g(29))},548:function(e,t){}});
//# sourceMappingURL=editfeature.bdabcc.js.map