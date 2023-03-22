"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=7782,exports.ids=[7782],exports.modules={37782:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WorkersampleModule:()=>WorkersampleModule});var NUMBER,NUMBER2,common=__webpack_require__(89318),router=__webpack_require__(14195);(NUMBER2=NUMBER||(NUMBER={}))[NUMBER2.FIVE_MILLIONS=5e6]="FIVE_MILLIONS",NUMBER2[NUMBER2.TEN_MILLIONS=1e7]="TEN_MILLIONS";var core=__webpack_require__(40305);class CalculationService{constructor(){}createElement(num){return[...Array(num).keys()]}loop(n){let i=0;const arr=[];for(;i<n;i++)arr.push(i);return arr}}__name(CalculationService,"CalculationService"),CalculationService.\u0275fac=__name(function(t){return new(t||CalculationService)},"CalculationService_Factory"),CalculationService.\u0275prov=core.\u0275\u0275defineInjectable({token:CalculationService,factory:CalculationService.\u0275fac,providedIn:"root"});class WorkersampleComponent{constructor(cd,service){this.cd=cd,this.service=service,this.workerTime=null,this.jsTime=null,this.worker=new Worker(new URL("./workersample.worker","file:///Users/hemant/Documents/GITHUB/ngdemos/src/app/modules/worker/modules/workersample/workersample.component.ts")),this.worker.onmessage=({data})=>{console.log("From Web Worker:",data)}}runWorker(){console.log("Worker in action");const t0=performance.now();this.worker.postMessage(NUMBER.TEN_MILLIONS);const t1=performance.now();this.workerTime=t1-t0,this.cd.detectChanges()}runThread(){console.log("JS Thread in action");const t0=performance.now(),result=this.service.loop(NUMBER.TEN_MILLIONS),t1=performance.now();this.jsTime=t1-t0,console.log("From Javascript Thread",result)}}__name(WorkersampleComponent,"WorkersampleComponent"),WorkersampleComponent.\u0275fac=__name(function(t){return new(t||WorkersampleComponent)(core.\u0275\u0275directiveInject(core.ChangeDetectorRef),core.\u0275\u0275directiveInject(CalculationService))},"WorkersampleComponent_Factory"),WorkersampleComponent.\u0275cmp=core.\u0275\u0275defineComponent({type:WorkersampleComponent,selectors:[["lib-workersample"]],decls:20,vars:2,consts:[[1,"container"],[1,"btn","btn-info","mr-2",3,"click"],[1,"btn","btn-warning",3,"click"]],template:__name(function(rf,ctx){1&rf&&(core.\u0275\u0275elementStart(0,"div",0)(1,"h1"),core.\u0275\u0275text(2,"Test Web Worker Performance"),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(3,"button",1),core.\u0275\u0275listener("click",__name(function(){return ctx.runWorker()},"WorkersampleComponent_Template_button_click_3_listener")),core.\u0275\u0275text(4,"Web Worker"),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(5,"button",2),core.\u0275\u0275listener("click",__name(function(){return ctx.runThread()},"WorkersampleComponent_Template_button_click_5_listener")),core.\u0275\u0275text(6," JavaScript Thread "),core.\u0275\u0275elementEnd(),core.\u0275\u0275element(7,"hr"),core.\u0275\u0275elementStart(8,"h3"),core.\u0275\u0275text(9,"Result"),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(10,"div")(11,"h2"),core.\u0275\u0275text(12,"Web Worker"),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(13,"div"),core.\u0275\u0275text(14),core.\u0275\u0275elementEnd()(),core.\u0275\u0275elementStart(15,"div")(16,"h2"),core.\u0275\u0275text(17,"JavaScript Thread"),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(18,"div"),core.\u0275\u0275text(19),core.\u0275\u0275elementEnd()()()),2&rf&&(core.\u0275\u0275advance(14),core.\u0275\u0275textInterpolate1("Web Worker took: ",ctx.workerTime," ms"),core.\u0275\u0275advance(5),core.\u0275\u0275textInterpolate1("JavaScript Thread took: ",ctx.jsTime," ms"))},"WorkersampleComponent_Template"),changeDetection:0});const routes=[{path:"",component:WorkersampleComponent}];class WorkersampleRoutingModule{}__name(WorkersampleRoutingModule,"WorkersampleRoutingModule"),WorkersampleRoutingModule.\u0275fac=__name(function(t){return new(t||WorkersampleRoutingModule)},"WorkersampleRoutingModule_Factory"),WorkersampleRoutingModule.\u0275mod=core.\u0275\u0275defineNgModule({type:WorkersampleRoutingModule}),WorkersampleRoutingModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[router.Bz.forChild(routes),router.Bz]});class WorkersampleModule{}__name(WorkersampleModule,"WorkersampleModule"),WorkersampleModule.\u0275fac=__name(function(t){return new(t||WorkersampleModule)},"WorkersampleModule_Factory"),WorkersampleModule.\u0275mod=core.\u0275\u0275defineNgModule({type:WorkersampleModule}),WorkersampleModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[common.ez,WorkersampleRoutingModule]})}};