!function(e){function t(t){for(var r,i,l=t[0],c=t[1],u=t[2],f=0,p=[];f<l.length;f++)i=l[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={7:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;a.push([347,0]),n()}({346:function(e,t,n){"use strict";n.r(t);n(478);var r=n(244),o=n(42),a=n(24),i=n(43),l=n(53),c=n(36),u=n(64),s=n(57),f=n(52),p=n(148),w=n(46),h=n(19),v=n(47),d=n(108),g=n(45),m=n(17),y={};y.module=angular.module("app",["gettext",m.a.name]);var x=angular.module("app",["ngeo"]);y.MainController=function(){var e=this;this.map=new i.a({layers:[new c.a({source:new s.b})],view:new l.a({center:[-10997148,4569099],zoom:4})});var t=this.map,n=new g.b([[[-9e6,4e6],[-11e6,4e6],[-11e6,6e6],[-9e6,6e6]]]);this.features=new o.a,this.features.push(new a.a({geometry:n}));var m=new f.a({features:this.features}),y=new u.a({source:m});y.setMap(t);var x,b=((x={}).Polygon=[new h.c({fill:new v.a({color:[255,255,255,.5]})}),new h.c({stroke:new w.a({color:[255,255,255,1],width:5})}),new h.c({stroke:new w.a({color:[0,153,255,1],width:3})})],x.Point=new h.c({image:new d.a,text:new p.a({text:"",font:"normal 18px FontAwesome",fill:new v.a({color:"#ffffff"})})}),x.GeometryCollection=x.Polygon.concat(x.Point),function(e,t){return x[e.getGeometry().getType()]});this.interaction=new r.a({features:this.features,layers:[y],style:b});var P=this.interaction;P.setActive(!1),t.addInteraction(P),t.on("singleclick",function(t){e.map.forEachFeatureAtPixel(t.pixel,function(e){return e})&&e.interaction.setActive(!0)})},x.controller("MainController",y.MainController),t.default=y},347:function(e,t,n){n(40),n(39),e.exports=n(346)},478:function(e,t){}});
//# sourceMappingURL=rotate.3be7cc.js.map