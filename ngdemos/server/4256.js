"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=4256,exports.ids=[4256],exports.modules={14256:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SimpleCachingDemoModule:()=>SimpleCachingDemoModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305),cjs=__webpack_require__(25095),environment=__webpack_require__(97354),http=__webpack_require__(48664);class SimpleCachingService{constructor(http2){this.http=http2,this.countries$=this.getData(environment.N.baseUrl+"/countries")}getData(apiUrl){return this.http.get(apiUrl).pipe((0,cjs.shareReplay)())}getCountries(){return this.countries$}}function SimpleCachingDemoComponent_div_4_div_1_Template(rf,ctx){if(1&rf&&(core.\u0275\u0275elementStart(0,"div",5)(1,"div",6)(2,"div",7)(3,"h5",8)(4,"i"),core.\u0275\u0275text(5),core.\u0275\u0275elementEnd(),core.\u0275\u0275text(6),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(7,"p",9),core.\u0275\u0275text(8),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(9,"p",9),core.\u0275\u0275text(10),core.\u0275\u0275elementEnd()()()()),2&rf){const country_r3=ctx.$implicit;core.\u0275\u0275advance(5),core.\u0275\u0275textInterpolate(country_r3.flag),core.\u0275\u0275advance(1),core.\u0275\u0275textInterpolate1(" ",country_r3.name," "),core.\u0275\u0275advance(2),core.\u0275\u0275textInterpolate1("Phone Code: ",country_r3.phonecode,""),core.\u0275\u0275advance(2),core.\u0275\u0275textInterpolate1("Phone Currency: ",country_r3.currency,"")}}function SimpleCachingDemoComponent_div_4_Template(rf,ctx){if(1&rf&&(core.\u0275\u0275elementStart(0,"div",3),core.\u0275\u0275template(1,SimpleCachingDemoComponent_div_4_div_1_Template,11,4,"div",4),core.\u0275\u0275elementEnd()),2&rf){const countries_r1=ctx.ngIf;core.\u0275\u0275advance(1),core.\u0275\u0275property("ngForOf",countries_r1)}}__name(SimpleCachingService,"SimpleCachingService"),SimpleCachingService.\u0275fac=__name(function(t){return new(t||SimpleCachingService)(core.\u0275\u0275inject(http.eN))},"SimpleCachingService_Factory"),SimpleCachingService.\u0275prov=core.\u0275\u0275defineInjectable({token:SimpleCachingService,factory:SimpleCachingService.\u0275fac}),__name(SimpleCachingDemoComponent_div_4_div_1_Template,"SimpleCachingDemoComponent_div_4_div_1_Template"),__name(SimpleCachingDemoComponent_div_4_Template,"SimpleCachingDemoComponent_div_4_Template");class SimpleCachingDemoComponent{constructor(httpCachingService){this.httpCachingService=httpCachingService,this.countries$=this.httpCachingService.getCountries()}}__name(SimpleCachingDemoComponent,"SimpleCachingDemoComponent"),SimpleCachingDemoComponent.\u0275fac=__name(function(t){return new(t||SimpleCachingDemoComponent)(core.\u0275\u0275directiveInject(SimpleCachingService))},"SimpleCachingDemoComponent_Factory"),SimpleCachingDemoComponent.\u0275cmp=core.\u0275\u0275defineComponent({type:SimpleCachingDemoComponent,selectors:[["app-simple-caching-demo"]],decls:6,vars:3,consts:[[1,"m-2","d-flex","justify-content-center"],[1,"container-fluid"],["class","row",4,"ngIf"],[1,"row"],["class","col-sm-3 mb-4",4,"ngFor","ngForOf"],[1,"col-sm-3","mb-4"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:__name(function(rf,ctx){1&rf&&(core.\u0275\u0275elementStart(0,"header",0)(1,"h2"),core.\u0275\u0275text(2,"Simple Caching Demo"),core.\u0275\u0275elementEnd()(),core.\u0275\u0275elementStart(3,"div",1),core.\u0275\u0275template(4,SimpleCachingDemoComponent_div_4_Template,2,1,"div",2),core.\u0275\u0275pipe(5,"async"),core.\u0275\u0275elementEnd()),2&rf&&(core.\u0275\u0275advance(4),core.\u0275\u0275property("ngIf",core.\u0275\u0275pipeBind1(5,1,ctx.countries$)))},"SimpleCachingDemoComponent_Template"),dependencies:[common.sg,common.O5,common.Ov],changeDetection:0});const routes=[{path:"",component:SimpleCachingDemoComponent}];class SimpleCachingDemoRoutingModule{}__name(SimpleCachingDemoRoutingModule,"SimpleCachingDemoRoutingModule"),SimpleCachingDemoRoutingModule.\u0275fac=__name(function(t){return new(t||SimpleCachingDemoRoutingModule)},"SimpleCachingDemoRoutingModule_Factory"),SimpleCachingDemoRoutingModule.\u0275mod=core.\u0275\u0275defineNgModule({type:SimpleCachingDemoRoutingModule}),SimpleCachingDemoRoutingModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[router.Bz.forChild(routes),router.Bz]});class SimpleCachingDemoModule{}__name(SimpleCachingDemoModule,"SimpleCachingDemoModule"),SimpleCachingDemoModule.\u0275fac=__name(function(t){return new(t||SimpleCachingDemoModule)},"SimpleCachingDemoModule_Factory"),SimpleCachingDemoModule.\u0275mod=core.\u0275\u0275defineNgModule({type:SimpleCachingDemoModule}),SimpleCachingDemoModule.\u0275inj=core.\u0275\u0275defineInjector({providers:[SimpleCachingService],imports:[common.ez,SimpleCachingDemoRoutingModule]})}};