!function(t){function e(e){for(var i,s,a=e[0],r=e[1],c=e[2],d=0,p=[];d<a.length;d++)s=a[d],l[s]&&p.push(l[s][0]),l[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(h&&h(e);p.length;)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var r=n[a];0!==l[r]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},l={29:0},o=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},s.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var h=r;o.push([396,0]),n()}({327:function(t,e,n){"use strict";n.r(e);n(500);var i=n(1),l=(n(520),n(395),n(288),n(276),function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}());var o=angular.module("ngeoMessageDisplaywindowComponent",["ngSanitize"]);function s(t,e){return e(t)}o.run(["$templateCache",function(t){t.put("ngeo/message/displaywindowComponent",n(391))}]),o.value("ngeoMessageDisplaywindowTemplateUrl",function(t){var e=t.ngeoMessageDisplaywindowTemplateUrl;return void 0!==e?e:"ngeo/message/displaywindowComponent"}),s.$inject=["$attrs","ngeoMessageDisplaywindowTemplateUrl"],o.Controller_=function(){function t(e,n,i,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clearOnClose,this.content=null,this.contentTemplate=null,this.contentScope=null,this.draggable,this.draggableContainment,this.desktop,this.height=null,this.open,this.resizable,this.title=null,this.url=null,this.width=null,this.element_=e,this.sce_=n,this.scope_=i,this.compile_=l}return t.$inject=["$element","$sce","$scope","$compile"],t.prototype.$onInit=function(){if(this.clearOnClose=!1!==this.clearOnClose,this.content=this.content||null,this.contentTemplate=this.contentTemplate||null,this.contentScope=this.contentScope||null,this.desktop=!1!==this.desktop,this.draggableContainment=this.draggableContainment||"document",this.open=!0===this.open,this.height=this.height||"240px",this.width=this.width||"240px",this.draggable=void 0!==this.draggable?this.draggable:this.desktop,this.resizable=void 0!==this.resizable?this.resizable:this.desktop,this.draggable&&this.element_.find(".ngeo-displaywindow .windowcontainer").draggable({containment:this.draggableContainment,handle:"div.header"}),this.resizable&&this.element_.find(".ngeo-displaywindow .windowcontainer").resizable({minHeight:240,minWidth:240}),this.contentTemplate){var t=i.a.assert(this.contentScope||this.scope_),e=this.compile_(this.contentTemplate)(t);this.element_.find(".ngeo-displaywindow .windowcontainer .animation-container").append(e)}},t.prototype.close=function(){this.open=!1,this.clearOnClose&&this.clear_()},t.prototype.clear_=function(){this.content=null,this.title=null,this.url=null},l(t,[{key:"style",get:function(){return{height:this.height,width:this.width}}},{key:"urlTrusted",get:function(){if(this.url)return this.sce_.trustAsResourceUrl(this.url)}}]),t}(),o.component("ngeoDisplaywindow",{bindings:{clearOnClose:"<?",content:"=?",contentTemplate:"<?",contentScope:"<?",desktop:"<?",draggable:"<?",draggableContainment:"<?",height:"=?",open:"=?",resizable:"<?",title:"=?",url:"=?",width:"=?"},controller:o.Controller_,templateUrl:s});var a=o,r={};r.module=angular.module("app",[a.name]),r.MainController=function(t){this.window1Content="https://www.camptocamp.com",this.window2Content="<p>A window: <ul>\n      <li>That have custom dimensions.</li>\n      <li>That is draggable</li>\n      <li>That is rezisable</li>\n      <li>That can be open and close</li>\n      </ul></p>",this.window2IsOpen=!1,this.window3IsOpen=!1,this.window3Template='\n    <div class="details">\n      <p>\n          <h3>Using AngularJS directives:</h3>\n          <span ng-if="!ctrl.window3FalseValue">This should appear</span>\n          <span ng-show="ctrl.window3FalseValue">This should not be visible</span>\n      </p>\n    </div>\n  ',this.window3FalseValue=!1,this.window4IsOpen=!1,this.window4Template=angular.element(document.getElementById("window4Template")).html(),this.window4TextBinding="This is an AngularJS binding.",this.windowScope=t},r.MainController.$inject=["$scope"],r.module.controller("MainController",r.MainController);e.default=r},391:function(t,e){t.exports='<div class=ngeo-displaywindow ng-show=$ctrl.open ng-style=$ctrl.style> <div class=windowcontainer> <button type=button class="btn fa-close close" ng-click=$ctrl.close()> </button> <div class=animation-container> <div class=slide-animation> <div class="header ui-draggable-handle" ng-if="$ctrl.title !== null"> <p class=title>{{$ctrl.title | translate}}</p> </div> <div class="details content" ng-if=$ctrl.content ng-bind-html=$ctrl.content> </div> <div class="details iframe" ng-if="$ctrl.url !== null"> <iframe frameborder=0 type=text/html height=100% width=100% ng-src="{{ $ctrl.urlTrusted }}"></iframe> </div> </div> </div> </div> </div> '},396:function(t,e,n){n(40),n(39),t.exports=n(327)},500:function(t,e){}});
//# sourceMappingURL=displaywindow.0ff876.js.map