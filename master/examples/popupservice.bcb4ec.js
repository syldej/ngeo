(function(l){function e(e){var t=e[0];var r=e[1];var o=e[2];var i,n,u=0,a=[];for(;u<t.length;u++){n=t[u];if(p[n]){a.push(p[n][0])}p[n]=0}for(i in r){if(Object.prototype.hasOwnProperty.call(r,i)){l[i]=r[i]}}if(f)f(e);while(a.length){a.shift()()}c.push.apply(c,o||[]);return s()}function s(){var e;for(var t=0;t<c.length;t++){var r=c[t];var o=true;for(var i=1;i<r.length;i++){var n=r[i];if(p[n]!==0)o=false}if(o){c.splice(t--,1);e=u(u.s=r[0])}}return e}var r={};var p={34:0};var c=[];function u(e){if(r[e]){return r[e].exports}var t=r[e]={i:e,l:false,exports:{}};l[e].call(t.exports,t,t.exports,u);t.l=true;return t.exports}u.m=l;u.c=r;u.d=function(e,t,r){if(!u.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};u.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};u.t=function(t,e){if(e&1)t=u(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);u.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var o in t)u.d(r,o,function(e){return t[e]}.bind(null,o));return r};u.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};u.d(e,"a",e);return e};u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};u.p="";var t=window["webpackJsonp"]=window["webpackJsonp"]||[];var o=t.push.bind(t);t.push=e;t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var f=o;c.push([506,0]);return s()})({506:function(e,t,r){r(51);r(52);e.exports=r(507)},507:function(e,a,l){"use strict";l.r(a);(function(r){var e=l(508);var t=l.n(e);var o=l(302);var i=l.n(o);var n=l(204);var u={};u.module=angular.module("app",["gettext",n["a"].module.name]);u.MainController=function(e,t){this.sce_=e;this.createPopup_=t;r('[data-toggle="tooltip"]').tooltip({container:"body",trigger:"hover"})};u.MainController.$inject=["$sce","ngeoCreatePopup"];u.MainController.prototype.simplePopup=function(){var e=this.createPopup_();e.setAutoDestroy(true);e.setTitle("Simple popup");var t=this.sce_.trustAsHtml("This is a simple 400x300 px popup.");e.setContent(t);e.setWidth("400px");e.setHeight("300px");e.setOpen(true)};u.MainController.prototype.iframePopup=function(){var e=this.createPopup_();e.setAutoDestroy(true);e.addClass("popup-with-iframe");e.setTitle("Iframe popup");e.setUrl("http://geomapfish.org/");e.setSize("400px","300px");e.setOpen(true)};u.MainController.prototype.heavyPopup=function(){var e=this.createPopup_();e.setAutoDestroy(true);e.setTitle("This is a popup with lots and lots of content and a very long title");var t=this.sce_.trustAsHtml("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget"+"quam at ex euismod bibendum et eget enim. Nulla sodales tortor ac"+"sagittis aliquet. Ut malesuada quam vitae pulvinar porta. Nunc id"+"magna id risus malesuada elementum eget id purus. Curabitur vel augue"+"blandit, faucibus nulla quis, consequat tellus. Phasellus commodo,"+"tellus et vulputate ultricies, nulla libero ornare arcu, quis"+"fermentum sem diam quis tellus. Aliquam ut sapien tristique, lacinia"+"ante et, lacinia arcu. Quisque sagittis eros at quam blandit"+"gravida. Nulla sit amet enim semper, efficitur eros sit amet,"+"porttitor libero. Fusce quis tellus est. Quisque ornare, ex eget"+"luctus pharetra, nisl leo lobortis purus, sed tristique neque leo eget"+"odio. Maecenas lobortis nisl ac magna mollis, ac pulvinar risus"+"convallis. Donec ullamcorper sollicitudin maximus. Quisque bibendum"+"elit sit amet ultrices ornare. Donec aliquam felis id urna ultrices"+"scelerisque.");e.setContent(t);e.setOpen(true)};u.MainController.prototype.openPopupWithContent=function(){var e=this.createPopup_();var t=this.sce_.trustAsHtml("This popup was opened using the <code>open</code> method.");e.open({autoDestroy:true,content:t,height:"200px",title:'Opened with "open"',width:"300px"})};u.MainController.prototype.openPopupWithUrl=function(){var e=this.createPopup_();e.open({autoDestroy:true,cls:"popup-with-iframe",height:"300px",title:'Opened with "open" and "iframe"',url:"http://geomapfish.org/",width:"400px"})};u.module.controller("MainController",u.MainController);a["default"]=u}).call(this,l(35))},508:function(e,t){}});
//# sourceMappingURL=popupservice.bcb4ec.js.map