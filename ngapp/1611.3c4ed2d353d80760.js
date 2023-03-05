"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[1611],{1611:(S,f,l)=>{l.r(f),l.d(f,{OnpushAsyncModule:()=>u});var c=l(6895),g=l(9116),e=l(4650);function h(t,n){1&t&&e.\u0275\u0275elementContainer(0)}class a{logChangeDetection(){return console.log("ComponentOne rendered"),!0}}function y(t,n){1&t&&e.\u0275\u0275elementContainer(0)}a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["app-component-one"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:5,vars:1,consts:[[4,"ngIf"],[3,"click"]],template:function(n,o){1&n&&(e.\u0275\u0275template(0,h,1,0,"ng-container",0),e.\u0275\u0275elementStart(1,"button",1),e.\u0275\u0275listener("click",function(){return{}}),e.\u0275\u0275text(2,"ComponentOne"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4,"Component one"),e.\u0275\u0275elementEnd()),2&n&&e.\u0275\u0275property("ngIf",o.logChangeDetection())},dependencies:[c.O5],encapsulation:2,changeDetection:0});class p{logChangeDetection(){return console.log("CoolButtonComponent rendered"),!0}}p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=e.\u0275\u0275defineComponent({type:p,selectors:[["app-cool-button"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:3,vars:1,consts:[[4,"ngIf"],[3,"click"]],template:function(n,o){1&n&&(e.\u0275\u0275template(0,y,1,0,"ng-container",0),e.\u0275\u0275elementStart(1,"button",1),e.\u0275\u0275listener("click",function(){return{}}),e.\u0275\u0275text(2,"CoolButtonComponent"),e.\u0275\u0275elementEnd()),2&n&&e.\u0275\u0275property("ngIf",o.logChangeDetection())},dependencies:[c.O5],encapsulation:2,changeDetection:0});var _=l(7445);class r{constructor(){this.dummyObs$=(0,_.F)(2e3)}}function O(t,n){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275text(1),e.\u0275\u0275elementContainerEnd()),2&t){const o=n.ngIf;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o," ")}}function T(t,n){1&t&&e.\u0275\u0275elementContainer(0)}r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=e.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"});class i{constructor(n){this.dummyService=n}logChangeDetection(){return console.log("ComponentTwo rendered"),!0}}function v(t,n){1&t&&e.\u0275\u0275elementContainer(0)}i.\u0275fac=function(n){return new(n||i)(e.\u0275\u0275directiveInject(r))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["app-component-two"]],standalone:!0,features:[e.\u0275\u0275StandaloneFeature],decls:8,vars:4,consts:[[4,"ngIf"],[3,"click"]],template:function(n,o){1&n&&(e.\u0275\u0275template(0,O,2,1,"ng-container",0),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,T,1,0,"ng-container",0),e.\u0275\u0275elementStart(3,"button",1),e.\u0275\u0275listener("click",function(){return{}}),e.\u0275\u0275text(4,"ComponentTwo"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p"),e.\u0275\u0275text(6,"Component two"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"app-cool-button")),2&n&&(e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,2,o.dummyService.dummyObs$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",o.logChangeDetection()))},dependencies:[p,c.O5,c.Ov],encapsulation:2,changeDetection:0});class s{logChangeDetection(){return console.log("HomeComponent rendered"),!0}}function I(t,n){1&t&&e.\u0275\u0275elementContainer(0)}s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=e.\u0275\u0275defineComponent({type:s,selectors:[["app-home"]],decls:7,vars:1,consts:[[4,"ngIf"],[3,"click"]],template:function(n,o){1&n&&(e.\u0275\u0275template(0,v,1,0,"ng-container",0),e.\u0275\u0275elementStart(1,"button",1),e.\u0275\u0275listener("click",function(){return{}}),e.\u0275\u0275text(2,"HomeComponent"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"h2"),e.\u0275\u0275text(4,"Home page"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"app-component-one")(6,"app-component-two")),2&n&&e.\u0275\u0275property("ngIf",o.logChangeDetection())},dependencies:[c.O5,a,i],encapsulation:2,changeDetection:0});class d{constructor(){this.count=0}logChangeDetection(){return console.log("AppComponent rendered, count now "+this.count),!0}changeCount(){this.count++}}d.\u0275fac=function(n){return new(n||d)},d.\u0275cmp=e.\u0275\u0275defineComponent({type:d,selectors:[["app-onpush-async"]],decls:9,vars:2,consts:[[4,"ngIf"],[3,"click"],[1,"card","m-3","p-2"],[1,"btn","btn-primary",3,"click"]],template:function(n,o){1&n&&(e.\u0275\u0275template(0,I,1,0,"ng-container",0),e.\u0275\u0275elementStart(1,"button",1),e.\u0275\u0275listener("click",function(){return{}}),e.\u0275\u0275text(2,"AppComponent"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"app-home"),e.\u0275\u0275elementStart(4,"div",2)(5,"p"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",3),e.\u0275\u0275listener("click",function(){return o.changeCount()}),e.\u0275\u0275text(8," Change Counter "),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275property("ngIf",o.logChangeDetection()),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("Count: ",o.count,""))},dependencies:[c.O5,s],changeDetection:0});const k=[{path:"",component:d}];class m{}m.\u0275fac=function(n){return new(n||m)},m.\u0275mod=e.\u0275\u0275defineNgModule({type:m}),m.\u0275inj=e.\u0275\u0275defineInjector({imports:[g.Bz.forChild(k),g.Bz]});class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=e.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.ez,m,a,i,p]})}}]);