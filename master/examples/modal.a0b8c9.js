(function(s){function e(e){var o=e[0];var t=e[1];var n=e[2];var r,l,a=0,i=[];for(;a<o.length;a++){l=o[a];if(u[l]){i.push(u[l][0])}u[l]=0}for(r in t){if(Object.prototype.hasOwnProperty.call(t,r)){s[r]=t[r]}}if(f)f(e);while(i.length){i.shift()()}c.push.apply(c,n||[]);return d()}function d(){var e;for(var o=0;o<c.length;o++){var t=c[o];var n=true;for(var r=1;r<t.length;r++){var l=t[r];if(u[l]!==0)n=false}if(n){c.splice(o--,1);e=a(a.s=t[0])}}return e}var t={};var u={28:0};var c=[];function a(e){if(t[e]){return t[e].exports}var o=t[e]={i:e,l:false,exports:{}};s[e].call(o.exports,o,o.exports,a);o.l=true;return o.exports}a.m=s;a.c=t;a.d=function(e,o,t){if(!a.o(e,o)){Object.defineProperty(e,o,{enumerable:true,get:t})}};a.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};a.t=function(o,e){if(e&1)o=a(o);if(e&8)return o;if(e&4&&typeof o==="object"&&o&&o.__esModule)return o;var t=Object.create(null);a.r(t);Object.defineProperty(t,"default",{enumerable:true,value:o});if(e&2&&typeof o!="string")for(var n in o)a.d(t,n,function(e){return o[e]}.bind(null,n));return t};a.n=function(o){var e=o&&o.__esModule?function e(){return o["default"]}:function e(){return o};a.d(e,"a",e);return e};a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)};a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[];var n=o.push.bind(o);o.push=e;o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var f=n;c.push([488,0]);return d()})({488:function(e,o,t){t(51);t(52);e.exports=t(544)},489:function(e,o){},544:function(e,o,t){"use strict";t.r(o);var n=t(489);var r=t(325);var l=t(490);var a=t(1);var i=angular.module("ngeoModal",[]);i.component_={template:'<div class="modal fade" tabindex="-1" role="dialog">\n    <div class="modal-dialog">\n      <div class="modal-content">\n        <ng-transclude></ng-transclude>\n      </div>\n    </div>\n  </div>',require:{ngModel:"ngModel"},transclude:true,controller:"ngeoModalController",bindings:{resizable:"<ngeoModalResizable",closable:"<ngeoModalClosable"}};i.component("ngeoModal",i.component_);i.Controller_=function(){e.$inject=["$scope","$element"];function e(e,o){this.$element_=o;this.$scope_=e;this.modal_;this.closable;this.resizable;this.ngModel}var o=e.prototype;o.$onInit=function e(){var t=this;this.closable=this.closable!==false;this.modal_=this.$element_.children();if(!this.closable){this.modal_.attr("data-keyboard",false);this.modal_.attr("data-backdrop","static")}this.resizable=!!this.resizable;var o=this.modal_.find(".modal-dialog");o.draggable();if(this.resizable){o.resizable()}this.ngModel.$render=function(){t.modal_.modal(t.ngModel.$viewValue?"show":"hide")};this.modal_.on("shown.bs.modal hidden.bs.modal",function(e){var o=e.type;a["a"].assert(o=="shown"||o=="hidden");t.ngModel.$setViewValue(o=="shown")})};o.$onDestroy=function e(){this.modal_.modal("hide");var o=this.modal_.find(".modal-dialog");o.draggable("destroy");if(this.resizable){o.resizable("destroy")}};return e}();i.controller("ngeoModalController",i.Controller_);var s=i;var d={};d.module=angular.module("app",["gettext",s.name]);d.MainController=function(){this.modalShown=false};d.module.controller("MainController",d.MainController);var u=o["default"]=d}});
//# sourceMappingURL=modal.a0b8c9.js.map