"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[695],{695:(Z,c,o)=>{o.r(c),o.d(c,{ZippyModule:()=>h});var a=o(9808),l=o(5357),t=o(5e3),r=o(3909);let s=(()=>{class e{constructor(){this.appClick=new t.EventEmitter}onClick(){console.log("Click"),this.appClick.emit()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=t.\u0275\u0275defineDirective({type:e,selectors:[["","appButton",""]],hostBindings:function(n,i){1&n&&t.\u0275\u0275listener("click",function(){return i.onClick()})},outputs:{appClick:"appClick"}}),e})();const u=["*"];let d=(()=>{class e{constructor(){this.label="Toggle",this.isExpanded=!1}onToggle(){this.isExpanded=!this.isExpanded}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-zippycomp"]],inputs:{label:"label"},ngContentSelectors:u,decls:4,vars:2,consts:[["appButton","",3,"appClick"],[3,"hidden"]],template:function(n,i){1&n&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"button",0),t.\u0275\u0275listener("appClick",function(){return i.onToggle()}),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275projection(3),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",i.label,"\n"),t.\u0275\u0275advance(1),t.\u0275\u0275property("hidden",!i.isExpanded))},dependencies:[s],changeDetection:0}),e})(),m=(()=>{class e{transform(n){return n.split(/\s+/g).map(i=>i[0].toUpperCase()+i.substring(1)).join(" ")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.\u0275\u0275definePipe({name:"capitalize",type:e,pure:!0}),e})();const y=[{path:"",component:(()=>{class e{constructor(){this.title="my zippy test"}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-zippy"]],decls:5,vars:3,consts:[["label","Click me"]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"app-zippycomp",0),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"capitalize"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(3,"hr")(4,"app-c1")),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,i.title),"\n"))},dependencies:[r.K,d,m],changeDetection:0}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[l.Bz.forChild(y),l.Bz]}),e})();var C=o(575),g=o(4247);let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[a.ez,f,g.W,C.w]}),e})()}}]);