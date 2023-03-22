"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=1177,exports.ids=[1177],exports.modules={11177:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TimersModule:()=>TimersModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305);const _c0=["canvas"];class CanvasComponent{constructor(ngZone){this.ngZone=ngZone,this.color={r:255,g:0,b:0},this.stagePhase=0}ngAfterViewInit(){this.interval=window.setInterval(()=>{this.setNextColor(),this.paint()},10)}setNextColor(){switch(this.stagePhase){case 0:this.color.g++,255===this.color.g&&this.stagePhase++;break;case 1:this.color.r--,0===this.color.r&&this.stagePhase++;break;case 2:this.color.b++,255===this.color.b&&this.stagePhase++;break;case 3:this.color.g--,0===this.color.g&&this.stagePhase++;break;case 4:this.color.r++,255===this.color.r&&this.stagePhase++;break;case 5:this.color.b--,0===this.color.b&&(this.stagePhase=0)}}paint(){const el=this.canvas.nativeElement;var ctx=el.getContext("2d");ctx.fillStyle=`rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,ctx.fillRect(0,0,el.width,el.height)}ngOnDestroy(){clearInterval(this.interval)}}__name(CanvasComponent,"CanvasComponent"),CanvasComponent.\u0275fac=__name(function(t){return new(t||CanvasComponent)(core.\u0275\u0275directiveInject(core.NgZone))},"CanvasComponent_Factory"),CanvasComponent.\u0275cmp=core.\u0275\u0275defineComponent({type:CanvasComponent,selectors:[["app-canvas"]],viewQuery:__name(function(rf,ctx){if(1&rf&&core.\u0275\u0275viewQuery(_c0,5),2&rf){let _t;core.\u0275\u0275queryRefresh(_t=core.\u0275\u0275loadQuery())&&(ctx.canvas=_t.first)}},"CanvasComponent_Query"),decls:2,vars:0,consts:[["width","100","height","100"],["canvas",""]],template:__name(function(rf,ctx){1&rf&&core.\u0275\u0275element(0,"canvas",0,1)},"CanvasComponent_Template")});const canvas_optimized_component_c0=["canvas"];class CanvasOptimizedComponent{constructor(ngZone){this.ngZone=ngZone,this.color={r:255,g:0,b:0},this.stagePhase=0}ngAfterViewInit(){this.ngZone.runOutsideAngular(()=>{this.interval=window.setInterval(()=>{this.setNextColor(),this.paint()},10)})}setNextColor(){switch(this.stagePhase){case 0:this.color.g++,255===this.color.g&&this.stagePhase++;break;case 1:this.color.r--,0===this.color.r&&this.stagePhase++;break;case 2:this.color.b++,255===this.color.b&&this.stagePhase++;break;case 3:this.color.g--,0===this.color.g&&this.stagePhase++;break;case 4:this.color.r++,255===this.color.r&&this.stagePhase++;break;case 5:this.color.b--,0===this.color.b&&(this.stagePhase=0)}}paint(){const el=this.canvas.nativeElement;var ctx=el.getContext("2d");ctx.fillStyle=`rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`,ctx.fillRect(0,0,el.width,el.height)}ngOnDestroy(){clearInterval(this.interval)}}function TimersComponent_ng_container_9_Template(rf,ctx){1&rf&&(core.\u0275\u0275elementContainerStart(0),core.\u0275\u0275element(1,"app-canvas"),core.\u0275\u0275elementContainerEnd())}function TimersComponent_ng_container_10_Template(rf,ctx){1&rf&&(core.\u0275\u0275elementContainerStart(0),core.\u0275\u0275element(1,"app-canvas-optimized"),core.\u0275\u0275elementContainerEnd())}__name(CanvasOptimizedComponent,"CanvasOptimizedComponent"),CanvasOptimizedComponent.\u0275fac=__name(function(t){return new(t||CanvasOptimizedComponent)(core.\u0275\u0275directiveInject(core.NgZone))},"CanvasOptimizedComponent_Factory"),CanvasOptimizedComponent.\u0275cmp=core.\u0275\u0275defineComponent({type:CanvasOptimizedComponent,selectors:[["app-canvas-optimized"]],viewQuery:__name(function(rf,ctx){if(1&rf&&core.\u0275\u0275viewQuery(canvas_optimized_component_c0,5),2&rf){let _t;core.\u0275\u0275queryRefresh(_t=core.\u0275\u0275loadQuery())&&(ctx.canvas=_t.first)}},"CanvasOptimizedComponent_Query"),decls:2,vars:0,consts:[["width","100","height","100"],["canvas",""]],template:__name(function(rf,ctx){1&rf&&core.\u0275\u0275element(0,"canvas",0,1)},"CanvasOptimizedComponent_Template")}),__name(TimersComponent_ng_container_9_Template,"TimersComponent_ng_container_9_Template"),__name(TimersComponent_ng_container_10_Template,"TimersComponent_ng_container_10_Template");class TimersComponent{constructor(){this.inZone=!0}ngOnInit(){}ngAfterViewChecked(){console.log("Change detection triggered!............................")}setZone(inZone){this.inZone=inZone}hello(){console.log("Hello")}}__name(TimersComponent,"TimersComponent"),TimersComponent.\u0275fac=__name(function(t){return new(t||TimersComponent)},"TimersComponent_Factory"),TimersComponent.\u0275cmp=core.\u0275\u0275defineComponent({type:TimersComponent,selectors:[["app-timers"]],decls:11,vars:6,consts:[[1,"container"],[1,"text-center","mb-4"],[1,"btn","btn-warning","mr-2",3,"click"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"btn","btn-info",3,"click"],[1,"text-center"],[4,"ngIf"]],template:__name(function(rf,ctx){1&rf&&(core.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"button",2),core.\u0275\u0275listener("click",__name(function(){return ctx.setZone(!0)},"TimersComponent_Template_button_click_2_listener")),core.\u0275\u0275text(3," Show regular "),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(4,"button",3),core.\u0275\u0275listener("click",__name(function(){return ctx.setZone(!1)},"TimersComponent_Template_button_click_4_listener")),core.\u0275\u0275text(5," Show optimized "),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(6,"button",4),core.\u0275\u0275listener("click",__name(function(){return ctx.hello()},"TimersComponent_Template_button_click_6_listener")),core.\u0275\u0275text(7,"Say Hello"),core.\u0275\u0275elementEnd()(),core.\u0275\u0275elementStart(8,"div",5),core.\u0275\u0275template(9,TimersComponent_ng_container_9_Template,2,0,"ng-container",6),core.\u0275\u0275template(10,TimersComponent_ng_container_10_Template,2,0,"ng-container",6),core.\u0275\u0275elementEnd()()),2&rf&&(core.\u0275\u0275advance(2),core.\u0275\u0275classProp("active",ctx.inZone),core.\u0275\u0275advance(2),core.\u0275\u0275classProp("active",!ctx.inZone),core.\u0275\u0275advance(5),core.\u0275\u0275property("ngIf",ctx.inZone),core.\u0275\u0275advance(1),core.\u0275\u0275property("ngIf",!ctx.inZone))},"TimersComponent_Template"),dependencies:[common.O5,CanvasComponent,CanvasOptimizedComponent],changeDetection:0});const routes=[{path:"",component:TimersComponent}];class TimersRoutingModule{}__name(TimersRoutingModule,"TimersRoutingModule"),TimersRoutingModule.\u0275fac=__name(function(t){return new(t||TimersRoutingModule)},"TimersRoutingModule_Factory"),TimersRoutingModule.\u0275mod=core.\u0275\u0275defineNgModule({type:TimersRoutingModule}),TimersRoutingModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[router.Bz.forChild(routes),router.Bz]});class TimersModule{}__name(TimersModule,"TimersModule"),TimersModule.\u0275fac=__name(function(t){return new(t||TimersModule)},"TimersModule_Factory"),TimersModule.\u0275mod=core.\u0275\u0275defineNgModule({type:TimersModule}),TimersModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[common.ez,TimersRoutingModule]})}};