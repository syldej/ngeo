(function(u){function e(e){var t=e[0];var n=e[1];var r=e[2];var o,i,a=0,s=[];for(;a<t.length;a++){i=t[a];if(c[i]){s.push(c[i][0])}c[i]=0}for(o in n){if(Object.prototype.hasOwnProperty.call(n,o)){u[o]=n[o]}}if(h)h(e);while(s.length){s.shift()()}g.push.apply(g,r||[]);return l()}function l(){var e;for(var t=0;t<g.length;t++){var n=g[t];var r=true;for(var o=1;o<n.length;o++){var i=n[o];if(c[i]!==0)r=false}if(r){g.splice(t--,1);e=a(a.s=n[0])}}return e}var n={};var c={37:0};var g=[];function a(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};u[e].call(t.exports,t,t.exports,a);t.l=true;return t.exports}a.m=u;a.c=n;a.d=function(e,t,n){if(!a.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:n})}};a.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};a.t=function(t,e){if(e&1)t=a(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var n=Object.create(null);a.r(n);Object.defineProperty(n,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n};a.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};a.d(e,"a",e);return e};a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};a.p="";var t=window["webpackJsonp"]=window["webpackJsonp"]||[];var r=t.push.bind(t);t.push=e;t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var h=r;g.push([515,0]);return l()})({515:function(e,t,n){n(51);n(52);e.exports=n(537)},516:function(e,t){},518:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj){__p+='<div class="ngeo-nominatim-input">\n  <input type="text"\n         class="form-control"\n         placeholder="{{$ctrl.placeholder}}"\n         ng-model="$ctrl.inputValue"\n         ngeo-search="$ctrl.options"\n         ngeo-search-datasets="$ctrl.datasets"\n         ngeo-search-listeners="$ctrl.listeners">\n</div>\n'}return __p}},519:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj){__p+='<div class="ngeo-routing-feature">\n    <div class="input-group">\n      <ngeo-nominatim-input\n        ngeo-nominatim-input-value="$ctrl.featureLabel"\n        ngeo-nominatim-input-placeholder="{{\'Search...\' | translate}}"\n        ngeo-nominatim-input-on-select="$ctrl.onSelect">\n      </ngeo-nominatim-input>\n      <div class="input-group-addon btn" ng-click="$ctrl.set()">\n        <span class="fa fa-map-marker"></span>\n      </div>\n    </div>\n</div>\n'}return __p}},520:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj){__p+='<div class="ngeo-routing">\n  <div class="ngeo-routing-start form-group">\n    <ngeo-routing-feature\n      ngeo-routing-feature-map="$ctrl.map"\n      ngeo-routing-feature-feature="$ctrl.startFeature_"\n      ngeo-routing-feature-fill-color="$ctrl.colors[\'start.fill\']"\n      ngeo-routing-feature-stroke-color="$ctrl.colors[\'start.stroke\']"\n      ngeo-routing-feature-on-change="$ctrl.handleChange">\n    </ngeo-routing-feature>\n  </div>\n\n    <div class="ngeo-routing-vias form-group" ng-repeat="(index, via) in $ctrl.viaArray">\n      <div class="form-inline">\n        <div class="form-group">\n          <ngeo-routing-feature\n            ngeo-routing-feature-map="$ctrl.map"\n            ngeo-routing-feature-feature="via.feature"\n            ngeo-routing-feature-fill-color="$ctrl.colors[\'via.fill\']"\n            ngeo-routing-feature-stroke-color="$ctrl.colors[\'via.stroke\']"\n            ngeo-routing-feature-on-change="$ctrl.handleChange">\n          </ngeo-routing-feature>\n        </div>\n        <button type="button" class="btn btn-default delete-via" ng-click="$ctrl.deleteVia(index)">\n          <span class="fa fa-trash"></span>\n        </button>\n      </div>\n    </div>\n\n  <div class="ngeo-routing-destination form-group">\n    <ngeo-routing-feature\n      ngeo-routing-feature-map="$ctrl.map"\n      ngeo-routing-feature-feature="$ctrl.targetFeature_"\n      ngeo-routing-feature-fill-color="$ctrl.colors[\'destination.fill\']"\n      ngeo-routing-feature-stroke-color="$ctrl.colors[\'destination.stroke\']"\n      ngeo-routing-feature-on-change="$ctrl.handleChange">\n    </ngeo-routing-feature>\n  </div>\n\n  <div class="form-group fill">\n    <button type="button" class="btn btn-default" ng-click="$ctrl.clearRoute()">\n      <span class="fa fa-trash"></span> <span translate>Clear</span>\n    </button>\n    <button type="button" class="btn btn-default" ng-click="$ctrl.reverseRoute()">\n      <span class="fa fa-exchange-alt"></span> <span translate>Reverse</span>\n    </button>\n    <button type="button" class="btn btn-default" ng-click="$ctrl.addVia()">\n      <span class="fa fa-plus"></span> <span translate>Add via</span>\n    </button>\n  </div>\n\n  <div class="clearfix"></div>\n\n  <div ng-if="$ctrl.routingProfiles.length > 1">\n    <div class="form-group">\n      <label class="col-form-label col-md-4" translate>Profile</label>\n      <div class="col-md-8">\n        <select class="form-control" ng-model="$ctrl.selectedRoutingProfile">\n          <option ng-repeat="profile in $ctrl.routingProfiles" ng-value="profile">{{profile.label}}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class="ngeo-routing-error form-group clearfix"\n       ng-hide="$ctrl.errorMessage === \'\'">\n    {{$ctrl.errorMessage}}\n  </div>\n\n  <div class="clearfix"></div>\n\n  <div ng-hide="$ctrl.routeDuration === null && $ctrl.routeDistance <= 0">\n    <div class="row">\n      <div class="col-md-12">\n        <strong translate>Route statistics</strong>\n      </div>\n    </div>\n    <div class="row" ng-hide="$ctrl.routeDuration === null">\n      <div class="col-md-4 text-right" translate>\n        Duration\n      </div>\n      <div class="col-md-8">\n        {{$ctrl.routeDuration | ngeoDuration}}\n      </div>\n    </div>\n\n    <div class="row" ng-hide="$ctrl.routeDistance <= 0">\n      <div class="col-md-4 text-right" translate>\n        Distance\n      </div>\n      <div class="col-md-8">\n        {{$ctrl.routeDistance | ngeoUnitPrefix:\'m\'}}\n      </div>\n    </div>\n  </div>\n</div>\n'}return __p}},521:function(e,t){},537:function(e,t,n){"use strict";n.r(t);var r=n(516);var o=n(309);var i=n(310);var a=n(517);var s=n(23);var u=n(141);var l=n(104);var c=function e(t,n,r){this.$http_=t;this.ngeoDebounce_=r;this.nominatimUrl_="https://nominatim.openstreetmap.org/";if(n.has("ngeoNominatimUrl")){this.nominatimUrl_=n.get("ngeoNominatimUrl");if(this.nominatimUrl_.substr(-1)!=="/"){this.nominatimUrl_+="/"}}this.searchDefaultParams_={};if(n.has("ngeoNominatimSearchDefaultParams")){this.searchDefaultParams_=n.get("ngeoNominatimSearchDefaultParams")}this.typeaheadDebounceDelay_=500;this.typeaheadSourceDebounced=this.ngeoDebounce_(this.typeaheadSource_.bind(this),this.typeaheadDebounceDelay_,true)};c.$inject=["$http","$injector","ngeoDebounce"];c.$inject=["$http","$injector","ngeoDebounce"];c.prototype.search=function(e,t){var n=this.nominatimUrl_+"search?q="+e;t=t||{};t=Object.assign({},this.searchDefaultParams_,t);t["format"]="json";if(t){n+="&";var r=[];var o=Object.keys(t);for(var i=0;i<o.length;i++){var a=o[i];r.push(a+"="+t[a])}n+=r.join("&")}return this.$http_.get(n)};c.prototype.reverse=function(e,t){var n=this.nominatimUrl_+"reverse";t=Object.assign({},t);t["lon"]=e[0];t["lat"]=e[1];t["format"]="json";if(t){n+="?";var r=[];var o=Object.keys(t);for(var i=0;i<o.length;i++){var a=o[i];r.push(a+"="+t[a])}n+=r.join("&")}return this.$http_.get(n)};c.prototype.typeaheadSource_=function(e,t,r){var n=function e(t){var n=function e(t){return{coordinate:[t.lon,t.lat],name:t.display_name}};r(t.data.map(n))};var o=function e(t){r([])};this.search(e,{}).then(n,o)};c.module=angular.module("ngeoNominatimService",[u["a"].name]);c.module.service("ngeoNominatimService",c);var g=c;var h=function e(t,n){this.$http_=t;this.routingOptions_=n.has("ngeoRoutingOptions")?n.get("ngeoRoutingOptions"):{};this.ngeoOsrmBackendUrl_=this.routingOptions_.backendUrl||"https://router.project-osrm.org/";if(this.ngeoOsrmBackendUrl_.substr(-1)!=="/"){this.ngeoOsrmBackendUrl_+="/"}this.protocolVersion_="v1"};h.$inject=["$http","$injector"];h.$inject=["$http","$injector"];h.prototype.getRoute=function(e,t){t=t||{};if(!t["service"]){t["service"]="route"}if(!t["profile"]){t["profile"]="car"}var n=this.ngeoOsrmBackendUrl_;if(t["instance"]){n+=t["instance"]+"/"}n+=t["service"]+"/"+this.protocolVersion_+"/"+t["profile"]+"/";var r=e.map(function(e){return e.join(",")}).join(";");n+=r;if(t.options){n+="?";var o=[];var i=Object.keys(t.options);for(var a=0;a<i.length;a++){var s=i[a];o.push(s+"="+t.options[s])}n+=o.join("&")}return this.$http_.get(n)};h.prototype.getNearest=function(e,t){t=t||{};t["service"]="nearest";if(!t["profile"]){t["profile"]="car"}var n=this.ngeoOsrmBackendUrl_;if(t["instance"]){n+=t["instance"]+"/"}n+=t["service"]+"/"+this.protocolVersion_+"/"+t["profile"]+"/";var r=e.join(",");n+=r;if(t.options){n+="?";var o=[];var i=Object.keys(t.options);for(var a=0;a<i.length;a++){var s=i[a];o.push(s+"="+t.options[s])}n+=o.join("&")}return this.$http_.get(n)};h.module=angular.module("ngeoRoutingService",[]);h.module.service("ngeoRoutingService",h);var p=h;var f=n(285);var m={};m.module=angular.module("ngeoRoutingNominatimInputComponent",[f["a"].module.name,g.module.name]);m.module.run(["$templateCache",function(e){e.put("ngeo/routing/nominatiminput",n(518))}]);m.module.value("ngeoRoutingNominatimInputComponentTemplateUrl",function(e){var t=e["ngeoRoutingNominatimInputComponentTemplateUrl"];return t!==undefined?t:"ngeo/routing/nominatiminput"});v.$inject=["$attrs","ngeoRoutingNominatimInputComponentTemplateUrl"];function v(e,t){return t(e)}m.Controller=function(e,t,n,r){this.element_=e;this.$scope_=n;this.ngeoNominatimService=r;this.onSelect;this.inputValue;this.options={};this.datasets=[{name:"nominatim",display:"name",source:this.ngeoNominatimService.typeaheadSourceDebounced}];this.listeners={select:this.select_.bind(this)};this.placeholder=""};m.Controller.$inject=["$element","$injector","$scope","ngeoNominatimService"];m.Controller.prototype.select_=function(e,t,n){if(this.onSelect){this.onSelect(t)}};var d={controller:m.Controller,bindings:{onSelect:"=?ngeoNominatimInputOnSelect",inputValue:"=?ngeoNominatimInputValue",placeholder:"@?ngeoNominatimInputPlaceholder"},templateUrl:v};m.module.component("ngeoNominatimInput",d);var _=m;var y=n(8);var b=n(15);var $=n(39);var w=n(36);var C=n(41);var F=n(16);var j=n(120);var S=n(33);var R=n(34);var P=n(27);var k=n(210);var D=n(70);var O=n(193);var x={};x.module=angular.module("ngeoRoutingFeatureComponent",[g.module.name,_.module.name]);x.module.run(["$templateCache",function(e){e.put("ngeo/routing/routingfeature",n(519))}]);x.module.value("ngeoRoutingFeatureTemplateUrl",function(e){var t=e["ngeoRoutingFeatureTemplateUrl"];return t!==undefined?t:"ngeo/routing/routingfeature"});U.$inject=["$attrs","ngeoRoutingFeatureTemplateUrl"];function U(e,t){return t(e)}x.Controller=function(e,t,n,r){this.scope_=e;this.timeout_=t;this.$q_=n;this.ngeoNominatimService_=r;this.map;this.feature;this.featureLabel="";this.fillColor;this.strokeColor;this.onChange;this.vectorFeatures_=new $["a"];this.vectorSource_=new w["a"]({features:this.vectorFeatures_});this.vectorLayer_=new C["a"]({source:this.vectorSource_,style:function(e,t){return[new F["c"]({text:new j["a"]({fill:new S["a"]({color:this.fillColor||"#000000"}),font:"normal 30px FontAwesome",offsetY:-15,stroke:new R["a"]({width:3,color:this.strokeColor||"#000000"}),text:""})})]}.bind(this)});this.modifyFeature_=new k["a"]({features:this.vectorFeatures_});this.draw_=null;this.onSelect=this.onSelect_.bind(this);this.errorMessage=""};x.Controller.$inject=["$scope","$timeout","$q","ngeoNominatimService"];x.Controller.prototype.$onInit=function(){var n=this;this.map.addLayer(this.vectorLayer_);this.modifyFeature_.setActive(true);this.map.addInteraction(this.modifyFeature_);this.modifyFeature_.on("modifyend",function(e){var t=e.features.getArray()[0];n.vectorSource_.clear();n.snapFeature_(t)});this.scope_.$watch(function(){return n.feature},function(e,t){if(e){n.onFeatureChange_()}if(e===null){n.vectorSource_.clear();n.featureLabel=""}})};x.Controller.prototype.$onDestroy=function(){this.map.removeLayer(this.vectorLayer_);this.modifyFeature_.setActive(false);this.map.removeInteraction(this.modifyFeature_)};x.Controller.prototype.set=function(){var t=this;if(this.draw_){this.map.removeInteraction(this.draw_)}this.draw_=new D["a"]({features:this.vectorFeatures_,type:"Point"});this.draw_.on("drawstart",function(){if(t.feature){t.vectorSource_.removeFeature(t.feature)}});this.draw_.on("drawend",function(e){if(t.draw_){t.map.removeInteraction(t.draw_)}t.snapFeature_(e.feature);t.modifyFeature_.setActive(true)});this.modifyFeature_.setActive(false);this.map.addInteraction(this.draw_)};x.Controller.prototype.setFeature_=function(e,t){var n=y["f"](e,this.map.getView().getProjection());if(t===""){t=n.join("/")}this.feature=new b["a"]({geometry:new P["a"](n),name:t})};x.Controller.prototype.onFeatureChange_=function(){var e=this;this.featureLabel=this.feature.get("name")||"";this.vectorSource_.clear();this.vectorSource_.addFeature(this.feature);if(this.onChange){this.timeout_(function(){e.onChange(e.feature)})}};x.Controller.prototype.onSelect_=function(e){var t=e.coordinate.map(parseFloat);var n=e.label;this.setFeature_(t,n);var r=this.feature.getGeometry().getCoordinates();this.map.getView().setCenter(r)};x.Controller.prototype.snapFeature_=function(e){var t=this.getLonLatFromPoint_(e);var n={};var r=function(e){var t=parseFloat(e["data"]["lon"]);var n=parseFloat(e["data"]["lat"]);var r=[t,n];var o=e["data"]["display_name"];this.setFeature_(r,o)}.bind(this);var o=function(e){this.errorMessage="Error: nominatim server not responding.";console.log(e)}.bind(this);this.$q_.when(this.ngeoNominatimService_.reverse(t,n)).then(r.bind(this),o.bind(this))};x.Controller.prototype.getLonLatFromPoint_=function(e){var t=e.getGeometry();var n=t.getCoordinates();var r=this.map.getView().getProjection();return y["l"](n,r)};x.component_={controller:x.Controller,bindings:{map:"<ngeoRoutingFeatureMap",feature:"=ngeoRoutingFeatureFeature",fillColor:"<?ngeoRoutingFeatureFillColor",strokeColor:"<?ngeoRoutingFeatureStrokeColor",onChange:"=?ngeoRoutingFeatureOnChange"},templateUrl:U};x.module.component("ngeoRoutingFeature",x.component_);var L=x;var N=n(159);var A=n(38);var I={};I.module=angular.module("ngeoRoutingComponent",[u["a"].name,l["a"].name,g.module.name,p.module.name,L.module.name]);I.module.run(["$templateCache",function(e){e.put("ngeo/routing/routing",n(520))}]);I.module.value("ngeoRoutingTemplateUrl",function(e){var t=e["ngeoRoutingTemplateUrl"];return t!==undefined?t:"ngeo/routing/routing"});M.$inject=["$attrs","ngeoRoutingTemplateUrl"];function M(e,t){return t(e)}I.Controller=function(e,t,n,r,o,i){var a=this;this.$scope_=t;this.ngeoRoutingService_=n;this.ngeoNominatimService_=r;this.routingOptions_=e.has("ngeoRoutingOptions")?e.get("ngeoRoutingOptions"):{};this.routingProfiles=this.routingOptions_.profiles||[];this.selectedRoutingProfile=this.routingProfiles.length>0?this.routingProfiles[0]:null;t.$watch(function(){return a.selectedRoutingProfile},this.calculateRoute.bind(this));this.$q_=o;this.map;this.errorMessage="";this.startFeature_=null;this.targetFeature_=null;this.viaArray=[];this.colors={"start.fill":"#6BE62E","start.stroke":"#4CB01E","destination.fill":"#FF3E13","destination.stroke":"#CD3412","via.fill":"#767676","via.stroke":"#000000"};this.routeSource_=new w["a"]({features:[]});this.routeLayer_=new C["a"]({source:this.routeSource_,style:new F["c"]({fill:new S["a"]({color:"rgba(16, 112, 29, 0.6)"}),stroke:new R["a"]({color:"rgba(16, 112, 29, 0.6)",width:5})})});this.routeDistance=0;this.routeDuration=null;this.regexIsFormattedCoord=/\d+\.\d+\/\d+\.\d+/;this.draw_=null;var s=200;this.handleChange=i(this.calculateRoute.bind(this),s,true)};I.Controller.$inject=["$injector","$scope","ngeoRoutingService","ngeoNominatimService","$q","ngeoDebounce"];I.Controller.prototype.$onInit=function(){this.map.addLayer(this.routeLayer_)};I.Controller.prototype.clearRoute=function(){this.startFeature_=null;this.targetFeature_=null;this.viaArray=[];this.routeDistance=0;this.routeDuration=null;this.routeSource_.clear();this.errorMessage=""};I.Controller.prototype.getLonLatFromPoint_=function(e){var t=e.getGeometry();var n=t.getCoordinates();var r=this.map.getView().getProjection();return y["l"](n,r)};I.Controller.prototype.reverseRoute=function(){var e=this.startFeature_;this.startFeature_=this.targetFeature_;this.targetFeature_=e;this.viaArray=this.viaArray.reverse()};I.Controller.prototype.parseRoute_=function(e){var t=[];var n=new N["a"];var r={dataProjection:"EPSG:4326",featureProjection:this.map.getView().getProjection()};if(e.legs){var o;t=e.legs.map(function(e){return e.steps.map(function(e){return new b["a"]({geometry:n.readGeometry(e.geometry,r)})})});t=(o=[]).concat.apply(o,t)}else if(e.geometry){t.push(new b["a"]({geometry:n.readGeometry(e.geometry,r)}))}return t};I.Controller.prototype.calculateRoute=function(){var t=this;if(this.startFeature_&&this.targetFeature_){this.routeSource_.clear();var e=this.getLonLatFromPoint_(this.startFeature_);var n=this.getLonLatFromPoint_(this.targetFeature_);var r=this.viaArray.filter(function(e){return e.feature!==null}).map(function(e){return t.getLonLatFromPoint_(e.feature)});var o=[e].concat(r,[n]);var i=function(e){var t=this.parseRoute_(e.data.routes[0]);if(t.length===0){console.log("No route or not supported format.");return}this.routeSource_.addFeatures(t);this.map.getView().fit(this.routeSource_.getExtent());this.routeDistance=parseInt(e.data.routes[0].distance,10);this.routeDuration=e.data.routes[0].duration;var n=t[0].getGeometry().getCoordinateAt(0);var r=t[t.length-1].getGeometry().getCoordinateAt(1);var o=[this.startFeature_.getGeometry().getCoordinates(),n];var i=[r,this.targetFeature_.getGeometry().getCoordinates()];var a=[new b["a"](new A["a"](o)),new b["a"](new A["a"](i))];this.routeSource_.addFeatures(a)}.bind(this);var a=function(e){this.errorMessage="Error: routing server not responding.";console.log(e)}.bind(this);var s={};s["steps"]=true;s["overview"]=false;s["geometries"]="geojson";var u={};u["options"]=s;if(this.selectedRoutingProfile){u["instance"]=this.selectedRoutingProfile["profile"]}this.$q_.when(this.ngeoRoutingService_.getRoute(o,u)).then(i.bind(this),a.bind(this))}};I.Controller.prototype.addVia=function(){this.viaArray.push({feature:null,onSelect:null})};I.Controller.prototype.deleteVia=function(e){if(this.viaArray.length>e){this.viaArray.splice(e,1);this.calculateRoute()}};I.module.component("ngeoRouting",{controller:I.Controller,bindings:{map:"<ngeoRoutingMap"},templateUrl:M});var V=I;var T=n(521);var G=angular.module("ngeoRoutingModule",[V.module.name]);var E=G;var q=n(19);var B=n(25);var J=n(18);var z=n(30);var Y={};Y.module=angular.module("app",["gettext",s["a"].name,E.name]);Y.MainController=function(){this.map=new q["a"]({layers:[new J["a"]({source:new z["b"]})],view:new B["a"]({center:[931010.1535989442,5961705.842297254],zoom:9})});this.routingfeatureActive=true};Y.module.controller("MainController",Y.MainController);var H=t["default"]=Y}});
//# sourceMappingURL=routing.bd1c4a.js.map