(function(l){function t(t){var e=t[0];var a=t[1];var r=t[2];var i,n,s=0,o=[];for(;s<e.length;s++){n=e[s];if(h[n]){o.push(h[n][0])}h[n]=0}for(i in a){if(Object.prototype.hasOwnProperty.call(a,i)){l[i]=a[i]}}if(f)f(t);while(o.length){o.shift()()}u.push.apply(u,r||[]);return c()}function c(){var t;for(var e=0;e<u.length;e++){var a=u[e];var r=true;for(var i=1;i<a.length;i++){var n=a[i];if(h[n]!==0)r=false}if(r){u.splice(e--,1);t=s(s.s=a[0])}}return t}var a={};var h={17:0};var u=[];function s(t){if(a[t]){return a[t].exports}var e=a[t]={i:t,l:false,exports:{}};l[t].call(e.exports,e,e.exports,s);e.l=true;return e.exports}s.m=l;s.c=a;s.d=function(t,e,a){if(!s.o(t,e)){Object.defineProperty(t,e,{enumerable:true,get:a})}};s.r=function(t){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(t,"__esModule",{value:true})};s.t=function(e,t){if(t&1)e=s(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var a=Object.create(null);s.r(a);Object.defineProperty(a,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a};s.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};s.d(t,"a",t);return t};s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};s.p="";var e=window["webpackJsonp"]=window["webpackJsonp"]||[];var r=e.push.bind(e);e.push=t;e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var f=r;u.push([575,0]);return c()})({575:function(t,e,a){a(72);a(73);t.exports=a(618)},576:function(t,e){},577:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj){__p+='<a class="btn btn-default"\n   ng-if="ctrl.drawing && (!ctrl.valid)"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-check"></span>\n     {{\'Set as starting point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.dirty"\n   ng-click="ctrl.addPoint()">\n     <span class="fa fa-plus"></span>\n     {{\'Add new point\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.drawing && ctrl.valid && !ctrl.dirty"\n   ng-click="ctrl.finish()">\n     <span class="fa fa-check"></span>\n     {{\'Terminate\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.valid"\n   ng-click="ctrl.clear()">\n     <span class="fa fa-repeat"></span>\n     {{\'Clear\' | translate}}\n</a>\n<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n'}return __p}},578:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj){__p+='<a class="btn btn-default"\n   ng-if="ctrl.active"\n   ng-click="ctrl.deactivate()">\n     <span class="fa fa-times"></span>\n     {{\'Close\' | translate}}\n</a>\n'}return __p}},618:function(t,e,a){"use strict";a.r(e);var r=a(32);var i=a(576);var n=a(55);var s=a(214);var o=a(118);var l=a(225);var h=a(1);var c=a(181);var u=a(78);var f=a(5);var p=a(2);var g=a(14);var d=a(41);var v=a(35);var m=a(21);var _=a(82);var y=a(47);var w=a(64);var b=a(65);var C=function t(e){y["a"].call(this,{handleEvent:d["b"]});this.changeEventKey_=null;this.type_=e.type;this.minPoints_=e.minPoints?e.minPoints:this.type_==="Polygon"?3:2;this.sketchFeature_=null;this.sketchPoints_=[];this.sketchPoint_=null;this.overlay_=new w["a"]({source:new b["a"]({useSpatialIndex:false,wrapX:e.wrapX?e.wrapX:false}),style:e.style||c["a"].getDefaultDrawStyleFunction(),updateWhileAnimating:true,updateWhileInteracting:true});p["a"](this,"change:active",this.updateState_,this);this.set("dirty",false);this.set("drawing",false);this.set("valid",false)};f["d"](C,y["a"]);C.prototype.setMap=function(t){var e=this.getMap();if(e){if(this.changeEventKey_){p["e"](this.changeEventKey_)}}y["a"].prototype.setMap.call(this,t);if(t){this.changeEventKey_=p["a"](t.getView(),"change:center",this.handleViewCenterChange_,this)}this.updateState_()};C.prototype.getDirty=function(){return this.get("dirty")};C.prototype.getDrawing=function(){return this.get("drawing")};C.prototype.getValid=function(){return this.get("valid")};C.prototype.getFeature=function(){return this.sketchFeature_};C.prototype.addToDrawing=function(){var t=this.getActive();var e=this.getDrawing();if(!t||!e){return}var a;var r=this.getSketchPointGeometry_();var i=r.getCoordinates();var n;if(this.type_==="Point"){if(!this.sketchFeature_){this.sketchFeature_=new g["a"](new m["a"](i));var s=new u["a"]("drawstart",{feature:this.sketchFeature_});this.dispatchEvent(s)}a=this.sketchFeature_.getGeometry();h["a"].assertInstanceof(a,_["a"]);a.setCoordinates(i);return}if(this.type_==="LineString"){this.sketchPoints_.push(this.sketchPoint_);if(!this.sketchFeature_){n=[i.slice(),i.slice()];this.sketchFeature_=new g["a"](new v["a"](n));var o=new u["a"]("drawstart",{feature:this.sketchFeature_});this.dispatchEvent(o)}else{a=this.sketchFeature_.getGeometry();h["a"].assertInstanceof(a,_["a"]);n=a.getCoordinates();n.push(i.slice());a.setCoordinates(n)}}var l=this.getDirty();if(l){this.set("dirty",false)}var c=this.getValid();if(this.type_==="LineString"){if(n.length>=this.minPoints_){if(!c){this.set("valid",true)}}else{if(c){this.set("valid",false)}}}this.sketchPoint_=null;this.updateSketchFeatures_()};C.prototype.clearDrawing=function(){this.setActive(false);this.setActive(true)};C.prototype.finishDrawing=function(){var t=this.getActive();var e=this.getDrawing();if(!t||!e){return}if(this.sketchPoint_){this.addToDrawing()}this.set("drawing",false);var a=new u["a"]("drawend",{feature:this.sketchFeature_});this.dispatchEvent(a)};C.prototype.startDrawing_=function(){this.set("drawing",true);this.createOrUpdateSketchPoint_();this.updateSketchFeatures_();if(this.type_==="Point"){this.addToDrawing()}};C.prototype.modifyDrawing_=function(){if(!this.sketchFeature_){return}var t=this.getCenter_();if(this.type_==="LineString"){var e=this.sketchFeature_.getGeometry();h["a"].assertInstanceof(e,_["a"]);var a=e.getCoordinates();a.pop();a.push(t);e.setCoordinates(a)}var r=this.getDirty();if(!r){this.set("dirty",true)}};C.prototype.abortDrawing_=function(){var t=this.sketchFeature_;if(t||this.sketchPoints_.length>0){this.sketchFeature_=null;this.sketchPoint_=null;this.overlay_.getSource().clear(true)}this.sketchPoints_=[];this.set("dirty",false);this.set("drawing",false);this.set("valid",false);return t};C.prototype.updateState_=function(){var t=this.getMap();var e=this.getActive();if(!t||!e){this.abortDrawing_()}else{this.startDrawing_()}this.overlay_.setMap(e?t:null)};C.prototype.handleViewCenterChange_=function(t){var e=this.getActive();var a=this.getDrawing();if(!e||!a){return}this.createOrUpdateSketchPoint_();if(this.type_==="Point"){this.addToDrawing()}else{this.modifyDrawing_();this.updateSketchFeatures_()}};C.prototype.createOrUpdateSketchPoint_=function(){var t=this.getCenter_();if(this.sketchPoint_){var e=this.getSketchPointGeometry_();e.setCoordinates(t)}else{this.sketchPoint_=new g["a"](new m["a"](t))}};C.prototype.updateSketchFeatures_=function(){var t=[];if(this.sketchFeature_){t.push(this.sketchFeature_)}if(this.sketchPoint_){t.push(this.sketchPoint_)}var e=this.overlay_.getSource();e.clear(true);e.addFeatures(t);e.addFeatures(this.sketchPoints_)};C.prototype.getSketchPointGeometry_=function(){h["a"].assert(this.sketchPoint_,"sketch point should be thruty");var t=this.sketchPoint_.getGeometry();h["a"].assertInstanceof(t,m["a"]);return t};C.prototype.getCenter_=function(){var t=this.getMap().getView().getCenter();h["a"].assertArray(t);return t};var k=C;var M=a(9);var P=function t(e,a,r){var i=r!==undefined?r:{};M["a"](i,{displayHelpTooltip:false});l["a"].call(this,e,a,i)};f["d"](P,l["a"]);P.prototype.createDrawInteraction=function(t,e){return new k({type:"LineString",style:t,source:e})};var S=P;var D=a(100);var F=a(30);var A=a(107);var j=a(29);var I=a(11);var T=angular.module("gmfMobileMeasureLength",[o["a"].name]);T.value("gmfMobileMeasureLengthTemplateUrl",function(t,e){var a=e["gmfMobileMeasureLengthTemplateurl"];return a!==undefined?a:"gmf/measure/lengthComponent"});T.run(["$templateCache",function(t){t.put("gmf/measure/lengthComponent",a(577))}]);T.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurelengthActive",precision:"<?gmfMobileMeasurelengthPrecision",map:"=gmfMobileMeasurelengthMap",sketchStyle:"=?gmfMobileMeasurelengthSketchstyle"},controller:"GmfMobileMeasureLengthController as ctrl",bindToController:true,templateUrl:t,link:function t(e,a,r,i){i.init()}}};T.component_.$inject=["gmfMobileMeasureLengthTemplateUrl"];T.directive("gmfMobileMeasurelength",T.component_);T.Controller_=function(t,e,a){var r=this;this.scope_=t;this.filter_=e;this.gettextCatalog_=a;this.map;this.active;this.scope_.$watch(function(){return r.active},function(t){r.measure.setActive(t)});this.precision;this.sketchStyle=new I["c"]({fill:new F["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new j["a"]({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new A["a"]({stroke:new j["a"]({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})});this.measure;this.drawInteraction;this.dirty=false;this.drawing=false;this.valid=false};T.Controller_.$inject=["$scope","$filter","gettextCatalog"];T.Controller_.prototype.init=function(){this.measure=new S(this.filter_("ngeoUnitPrefix"),this.gettextCatalog_,{precision:this.precision,sketchStyle:this.sketchStyle});this.measure.setActive(this.active);D["a"].interaction(this.measure);this.drawInteraction=this.measure.getDrawInteraction();var t=this.drawInteraction;D["a"].interaction(t);Object.defineProperty(this,"hasPoints",{get:function t(){return this.drawInteraction.getFeature()!==null}});p["a"](t,"change:dirty",function(){this.dirty=t.getDirty();if(this.dirty){this.scope_.$apply()}},this);p["a"](t,"change:drawing",function(){this.drawing=t.getDrawing()},this);p["a"](t,"change:valid",function(){this.valid=t.getValid()},this);this.map.addInteraction(this.measure)};T.Controller_.prototype.addPoint=function(){this.drawInteraction.addToDrawing()};T.Controller_.prototype.clear=function(){this.drawInteraction.clearDrawing()};T.Controller_.prototype.finish=function(){this.drawInteraction.finishDrawing()};T.Controller_.prototype.deactivate=function(){this.active=false};T.controller("GmfMobileMeasureLengthController",T.Controller_);var x=T;var L=a(207);var E=a(103);var $=function t(e,a,r){if(r===void 0){r={}}M["a"](r,{displayHelpTooltip:false});E["a"].call(this,r);this.format_=e;this.coordFormat_=a};f["d"]($,E["a"]);$.prototype.createDrawInteraction=function(t,e){return new k({type:"Point",style:t,source:e})};$.prototype.handleMeasure=function(t){var e=h["a"].assertInstanceof(this.sketchFeature.getGeometry(),m["a"]);var a=this.decimals;var r=E["a"].getFormattedPoint(e,a,this.format_,this.coordFormat_);var i=e.getLastCoordinate();t(r,i)};var V=$;var O=a(160);var G=angular.module("gmfMobileMeasurePoint",[L["a"].module.name,O["a"].name]);G.value("gmfMobileMeasurePointTemplateUrl",function(t,e){var a=e["gmfMobileMeasurePointTemplateurl"];return a!==undefined?a:"gmf/measure/pointComponent"});G.run(["$templateCache",function(t){t.put("gmf/measure/pointComponent",a(578))}]);G.component_=function(t){return{restrict:"A",scope:{active:"=gmfMobileMeasurepointActive",getCoordinateDecimalsFn:"&?gmfMobileMeasurepointCoordinatedecimals",getLayersConfigFn:"&gmfMobileMeasurepointLayersconfig",map:"=gmfMobileMeasurepointMap",sketchStyle:"=?gmfMobileMeasurepointSketchstyle",format:"<gmfMobileMeasurepointFormat"},controller:"GmfMobileMeasurePointController as ctrl",bindToController:true,templateUrl:t,link:function t(e,a,r,i){i.init()}}};G.component_.$inject=["gmfMobileMeasurePointTemplateUrl"];G.directive("gmfMobileMeasurepoint",G.component_);G.Controller_=function(t,e,a,r,i){var n=this;this.gmfRaster_=r;this.ngeoDebounce_=i;this.gettextCatalog_=t;this.$filter_=a;this.map;this.active;e.$watch(function(){return n.active},function(t){n.measure.setActive(t);n.handleMeasureActiveChange_()});var s=this["getCoordinateDecimalsFn"];this.coordinateDecimals=s?s():0;this.layersConfig;this.sketchStyle;if(this.sketchStyle===undefined){this.sketchStyle=new I["c"]({fill:new F["a"]({color:"rgba(255, 255, 255, 0.2)"}),stroke:new j["a"]({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new A["a"]({stroke:new j["a"]({color:"rgba(0, 0, 0, 0.7)",width:2}),points:4,radius:8,radius2:0,angle:0})})}this.format;this.measure;this.drawInteraction;this.mapViewPropertyChangeEventKey_=null};G.Controller_.$inject=["gettextCatalog","$scope","$filter","gmfRaster","ngeoDebounce"];G.Controller_.prototype.init=function(){this.measure=new V(this.$filter_("ngeoNumberCoordinates"),this.format||"{x}, {y}",{decimals:this.coordinateDecimals,sketchStyle:this.sketchStyle});this.measure.setActive(this.active);D["a"].interaction(this.measure);this.drawInteraction=this.measure.getDrawInteraction();D["a"].interaction(this.drawInteraction);var t=this["getLayersConfigFn"]();h["a"].assert(Array.isArray(t));this.layersConfig=t;this.map.addInteraction(this.measure)};G.Controller_.prototype.deactivate=function(){this.active=false};G.Controller_.prototype.translate=function(t){return this.gettextCatalog_.getString(t)};G.Controller_.prototype.handleMeasureActiveChange_=function(){if(this.measure.getActive()){var t=this.map.getView();this.mapViewPropertyChangeEventKey_=p["a"](t,"propertychange",this.ngeoDebounce_(this.getMeasure_.bind(this),300,true),this);this.getMeasure_()}else if(this.mapViewPropertyChangeEventKey_){p["e"](this.mapViewPropertyChangeEventKey_);this.mapViewPropertyChangeEventKey_=null}};G.Controller_.prototype.getMeasure_=function(){var d=this;var t=this.map.getView().getCenter();h["a"].assertArray(t);var e={layers:this.layersConfig.map(function(t){return t.name}).join(",")};this.gmfRaster_.getRaster(t,e).then(function(t){var e=d.measure.getTooltipElement();var a=document.createElement("div");var r="gmf-mobile-measure-point";a.className=r;for(var i=d.layersConfig,n=Array.isArray(i),s=0,i=n?i:i[Symbol.iterator]();;){var o;if(n){if(s>=i.length)break;o=i[s++]}else{s=i.next();if(s.done)break;o=s.value}var l=o;var c=l.name;if(c in t){var h=t[c];var u=document.createElement("div");u.className="gmf-mobile-measure-point-"+c;var f=l.unit||"";var p=l.decimals&&l.decimals>0||0;h=d.$filter_("number")(h,p);u.innerHTML=[d.translate(c),": ",h," ",f].join("");a.appendChild(u)}}var g=e.getElementsByClassName(r);if(g[0]){g[0].remove()}e.appendChild(a)})};G.controller("GmfMobileMeasurePointController",G.Controller_);G.LayerConfig;var U=G;var K=a(120);var R=a(56);var N=a(34);var H=a(43);var X=a(408);var J=a(28);var W=a(49);var z={};z.module=angular.module("gmfapp",["gettext",n["a"].name,s["a"].module.name,x.name,U.name,K["a"].name]);z.module.value("gmfRasterUrl",r["a"].RASTER);z.module.constant("defaultTheme","Demo");z.module.constant("angularLocaleScript","../build/angular-locale_{{locale}}.js");z.MainController=function(t){var e=t.getMapCenter()||[537635,152640];var a=t.getMapZoom()||3;this.map=new N["a"]({layers:[new J["a"]({source:new W["a"]})],view:new H["a"]({projection:R["a"],resolutions:[200,100,50,20,10,5,2.5,2,1,.5],center:e,zoom:a})});this.map.addControl(new X["a"]);this.measureLengthActive=false;this.measurePointLayersConfig=[{name:"aster",unit:"m",decimals:2},{name:"srtm",unit:"m"}];this.measurePointActive=false};z.MainController.$inject=["gmfPermalink"];z.module.controller("MainController",z.MainController);var B=e["default"]=z}});
//# sourceMappingURL=mobilemeasure.4ff2c7.js.map