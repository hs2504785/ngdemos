"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[1206],{1206:(ht,k,c)=>{c.r(k),c.d(k,{ContactsCsModule:()=>O});var v=c(6895),K=c(9116),U=c(4280),w=c(515),R=c(3900),y=c(8505),b=c(262),W=c(9300),z=c(4351),t=c(4650),A=c(7148),g=c(4006);class E{constructor(i){this.ref=i,this.name="",this.phone=""}add(){!this.phone||!this.name||this.ref.close({name:this.name,phone:this.phone})}}E.\u0275fac=function(i){return new(i||E)(t.\u0275\u0275directiveInject(A.zj))},E.\u0275cmp=t.\u0275\u0275defineComponent({type:E,selectors:[["app-add-contact"]],decls:8,vars:2,consts:[[1,"p-4"],[1,"text-2xl","mb-6"],["type","text","placeholder","Name",1,"form-control","rounded-md","mb-3",3,"ngModel","ngModelChange"],["type","number","placeholder","Phone",1,"form-control","rounded-md","mb-6",3,"ngModel","ngModelChange"],[1,"btn","btn-primary","mt-4","rounded-lg",3,"click"],[1,"ti-plus"]],template:function(i,e){1&i&&(t.\u0275\u0275elementStart(0,"div",0)(1,"h3",1),t.\u0275\u0275text(2,"Add New Contact"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"input",2),t.\u0275\u0275listener("ngModelChange",function(s){return e.name=s}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"input",3),t.\u0275\u0275listener("ngModelChange",function(s){return e.phone=s}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"button",4),t.\u0275\u0275listener("click",function(){return e.add()}),t.\u0275\u0275element(6,"i",5),t.\u0275\u0275text(7," Add Contact "),t.\u0275\u0275elementEnd()()),2&i&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("ngModel",e.name),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngModel",e.phone))},dependencies:[g.Fj,g.wV,g.JJ,g.On]});var D=c(9646),P=c(4086);class _{constructor(){this.contacts=[{name:"Bibbye Gutcher",phone:"885-131-9176"},{name:"Gabbie Haslegrave",phone:"541-172-6277"},{name:"Catie Nettleship",phone:"201-539-6873"},{name:"Mahalia Sones",phone:"535-669-7499"},{name:"Lia Yurmanovev",phone:"381-531-3649"},{name:"Daisy Simonel",phone:"890-576-1438"},{name:"Bobby Coller",phone:"129-638-2410"},{name:"Peri Hockey",phone:"290-234-4247"},{name:"Cordie Crosscombe",phone:"907-576-1311"},{name:"Rodrigo Alexsandrovich",phone:"799-587-4536"},{name:"Hortensia Fishleigh",phone:"434-950-3630"},{name:"Atlante Rait",phone:"445-521-0518"},{name:"Marysa Bartolomeoni",phone:"256-694-5017"},{name:"Gussi Albasiny",phone:"444-436-5627"},{name:"Betsey Kears",phone:"280-992-9432"},{name:"Conni Marzellano",phone:"425-276-4741"},{name:"Natalina Burnsides",phone:"826-545-7370"},{name:"Scarface Samet",phone:"606-139-9514"},{name:"Shelley Riglar",phone:"822-991-7728"},{name:"Judon Keen",phone:"539-279-0970"}]}fetchContacts(){return(0,D.of)(this.contacts).pipe((0,P.g)(1e3))}addContact(i){return this.contacts.unshift(i),(0,D.of)(i).pipe((0,P.g)(1e3))}deleteContact(i){const e=this.contacts.findIndex(o=>o.name===i.name);return this.contacts.splice(e,1),(0,D.of)({success:!0}).pipe((0,P.g)(1e3))}}_.\u0275fac=function(i){return new(i||_)},_.\u0275prov=t.\u0275\u0275defineInjectable({token:_,factory:_.\u0275fac,providedIn:"root"});class Q{constructor(i){this.options=i,i.vcr?this.ref=i.vcr.createComponent(i.component,{index:i.vcr.length,injector:i.injector||i.vcr.injector}):(this.ref=(0,t.createComponent)(i.component,{elementInjector:i.injector,environmentInjector:i.environmentInjector}),i.appRef.attachView(this.ref.hostView))}setInput(i,e){return this.ref.instance[i]=e,this}setInputs(i){return Object.keys(i).forEach(e=>{this.ref.instance[e]=i[e]}),this}detectChanges(){return this.ref.hostView.detectChanges(),this}appendTo(i){return i.appendChild(this.getElement()),this}removeFrom(i){return i.removeChild(this.getElement()),this}getRawContent(){return this.getElement().outerHTML}getElement(){return this.ref.location.nativeElement}destroy(){this.ref.destroy(),!this.options.vcr&&this.options.appRef.detachView(this.ref.hostView),this.ref=null}}function T(n){return n instanceof t.TemplateRef}function $(n){return"function"==typeof n}function M(n){return"string"==typeof n}let st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["dynamic-view"]],inputs:{content:"content"},decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(e,o){1&e&&t.\u0275\u0275element(0,"div",0),2&e&&t.\u0275\u0275property("innerHTML",o.content,t.\u0275\u0275sanitizeHtml)},encapsulation:2}),n})();class X{constructor(i){this.args=i,this.args.vcr?(this.ref=this.args.vcr.createEmbeddedView(this.args.tpl,this.args.context||{},{injector:i.injector}),this.ref.detectChanges()):(this.ref=this.args.tpl.createEmbeddedView(this.args.context||{},i.injector),this.ref.detectChanges(),this.args.appRef.attachView(this.ref))}detectChanges(){this.ref.detectChanges()}getElement(){const i=this.ref.rootNodes;return 1===i.length&&i[0]===Node.ELEMENT_NODE?this.element=i[0]:(this.element=document.createElement("div"),this.element.append(...i)),this.element}destroy(){1!==this.ref.rootNodes[0]&&(this.element?.parentNode.removeChild(this.element),this.element=null),this.args.vcr||this.args.appRef.detachView(this.ref),this.ref.destroy(),this.ref=null}}class q{constructor(i){this.value=i}getElement(){return this.value}detectChanges(){}destroy(){}}const G=new t.InjectionToken("Component context");let J=(()=>{class n{constructor(){this.injector=(0,t.inject)(t.Injector),this.appRef=(0,t.inject)(t.ApplicationRef),this.environmentInjector=(0,t.inject)(t.EnvironmentInjector)}createComponent(e,o={}){let s=o.injector||this.injector;return o.context&&(s=t.Injector.create({providers:[{provide:G,useValue:o.context}],parent:s})),new Q({component:e,vcr:o.vcr,injector:s,appRef:this.appRef,environmentInjector:o.environmentInjector||this.environmentInjector})}createTemplate(e,o={}){return new X({vcr:o.vcr,appRef:this.appRef,tpl:e,context:o.context,injector:o.injector})}createView(e,o={}){if(T(e))return this.createTemplate(e,o);if($(e))return this.createComponent(e,o);if(M(e))return new q(e);throw"Type of content is not supported"}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Y=(()=>{class n{constructor(e,o,s){this.defaultTpl=e,this.vcr=o,this.viewService=s}ngOnInit(){this.resolveContentType()}ngOnChanges(e){e.view&&!e.view.isFirstChange()&&this.resolveContentType()}resolveContentType(){this.viewRef?.destroy(),M(this.view)?(this.viewRef=this.viewService.createComponent(st,{vcr:this.vcr,injector:this.injector}),this.viewRef.setInput("content",this.view).detectChanges()):this.viewRef=this.viewService.createView(this.view||this.defaultTpl,{vcr:this.vcr,injector:this.injector??this.vcr.injector,context:this.context})}ngOnDestroy(){this.viewRef?.destroy()}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(J))},n.\u0275dir=t.\u0275\u0275defineDirective({type:n,selectors:[["","dynamicView",""]],inputs:{view:["dynamicView","view"],injector:["dynamicViewInjector","injector"],context:["dynamicViewContext","context"]},features:[t.\u0275\u0275NgOnChangesFeature]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({}),n})();var d=c(7579),f=c(4355),a=c(9770);const l=["*"],p=function(n,i){return{"border-color":n,"border-right-color":i}};function C(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"\n        "),t.\u0275\u0275element(2,"hot-toast-error",2),t.\u0275\u0275text(3,"\n      "),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(2),t.\u0275\u0275property("theme",e.theme)}}function B(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"\n        "),t.\u0275\u0275element(2,"hot-toast-checkmark",2),t.\u0275\u0275text(3,"\n      "),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(2),t.\u0275\u0275property("theme",e.theme)}}function I(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"\n        "),t.\u0275\u0275element(2,"hot-toast-warning",2),t.\u0275\u0275text(3,"\n      "),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(2),t.\u0275\u0275property("theme",e.theme)}}function x(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275text(1,"\n        "),t.\u0275\u0275element(2,"hot-toast-info",2),t.\u0275\u0275text(3,"\n      "),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(2),t.\u0275\u0275property("theme",e.theme)}}function tt(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",4),t.\u0275\u0275text(1,"\n    "),t.\u0275\u0275elementStart(2,"div",5),t.\u0275\u0275text(3,"\n      "),t.\u0275\u0275template(4,C,4,1,"div",6),t.\u0275\u0275text(5,"\n      "),t.\u0275\u0275template(6,B,4,1,"div",6),t.\u0275\u0275text(7,"\n      "),t.\u0275\u0275template(8,I,4,1,"div",6),t.\u0275\u0275text(9,"\n      "),t.\u0275\u0275template(10,x,4,1,"div",6),t.\u0275\u0275text(11,"\n    "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(12,"\n  "),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(2),t.\u0275\u0275property("ngSwitch",e.type),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngSwitchCase","error"),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngSwitchCase","success"),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngSwitchCase","warning"),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngSwitchCase","info")}}function ft(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",1),t.\u0275\u0275text(1,"\n  "),t.\u0275\u0275element(2,"hot-toast-loader",2),t.\u0275\u0275text(3,"\n  "),t.\u0275\u0275template(4,tt,13,5,"div",3),t.\u0275\u0275text(5,"\n"),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275property("theme",e.theme),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf","loading"!==e.type)}}const ut=["hotToastBarBase"];function mt(n,i){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1,"\n          "),t.\u0275\u0275elementStart(2,"hot-toast-animated-icon",10),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(4,"\n        "),t.\u0275\u0275elementContainerEnd()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(2),t.\u0275\u0275property("iconTheme",e.toast.iconTheme),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.toast.icon)}}function vt(n,i){if(1&n&&(t.\u0275\u0275text(0,"\n          "),t.\u0275\u0275elementStart(1,"div"),t.\u0275\u0275text(2,"\n            "),t.\u0275\u0275elementContainer(3,11),t.\u0275\u0275text(4,"\n          "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(5,"\n        ")),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(3),t.\u0275\u0275property("dynamicView",e.toast.icon)}}function Ct(n,i){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275text(1,"\n        "),t.\u0275\u0275template(2,mt,5,2,"ng-container",4),t.\u0275\u0275text(3,"\n        "),t.\u0275\u0275template(4,vt,6,1,"ng-template",null,9,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275text(6,"\n      "),t.\u0275\u0275elementContainerEnd()),2&n){const e=t.\u0275\u0275reference(5),o=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",o.isIconString)("ngIfElse",e)}}function gt(n,i){if(1&n&&(t.\u0275\u0275text(0,"\n        "),t.\u0275\u0275element(1,"hot-toast-indicator",12),t.\u0275\u0275text(2,"\n      ")),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("theme",e.toast.iconTheme)("type",e.toast.type)}}function _t(n,i){1&n&&t.\u0275\u0275elementContainer(0)}function yt(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",13),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.close())}),t.\u0275\u0275elementEnd()}if(2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("ngStyle",e.toast.closeStyle)}}function Tt(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"hot-toast",3),t.\u0275\u0275listener("height",function(s){const h=t.\u0275\u0275restoreView(e).$implicit,u=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(u.updateHeight(s,h))})("beforeClosed",function(){const r=t.\u0275\u0275restoreView(e).$implicit,h=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(h.beforeClosed(r))})("afterClosed",function(s){t.\u0275\u0275restoreView(e);const r=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(r.afterClosed(s))}),t.\u0275\u0275elementEnd()}if(2&n){const e=i.$implicit,o=i.index,s=t.\u0275\u0275nextContext();t.\u0275\u0275property("toast",e)("offset",s.calculateOffset(e.id,e.position))("toastRef",s.toastRefs[o])}}const ct={blank:4e3,error:4e3,success:4e3,loading:3e4,warning:4e3,info:4e3};class dt{constructor(i){this.toast=i,this._onClosed=new d.x}get data(){return this.toast.data}set dispose(i){this._dispose=i}getToast(){return this.toast}appendTo(i){const{dispose:e,updateMessage:o,updateToast:s,afterClosed:r}=i.addToast(this);return this.dispose=e,this.updateMessage=o,this.updateToast=s,this.afterClosed=(0,f.S)(this._onClosed.asObservable(),r),this}close(i={dismissedByAction:!1}){this._dispose(),this._onClosed.next({dismissedByAction:i.dismissedByAction,id:this.toast.id}),this._onClosed.complete()}}let It=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-animated-icon"]],inputs:{iconTheme:"iconTheme"},ngContentSelectors:l,decls:5,vars:2,consts:[[1,"hot-toast-animated-icon"]],template:function(e,o){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275text(1,"\n  "),t.\u0275\u0275projection(2),t.\u0275\u0275text(3,"\n"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(4,"\n")),2&e&&t.\u0275\u0275styleProp("color",null==o.iconTheme?null:o.iconTheme.primary)},encapsulation:2,changeDetection:0}),n})(),wt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-checkmark"]],inputs:{theme:"theme"},decls:2,vars:4,consts:[[1,"hot-toast-checkmark-icon"]],template:function(e,o){1&e&&(t.\u0275\u0275element(0,"div",0),t.\u0275\u0275text(1,"\n")),2&e&&t.\u0275\u0275styleProp("--check-primary",null==o.theme?null:o.theme.primary)("--check-secondary",null==o.theme?null:o.theme.secondary)},encapsulation:2,changeDetection:0}),n})(),bt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-error"]],inputs:{theme:"theme"},decls:2,vars:4,consts:[[1,"hot-toast-error-icon"]],template:function(e,o){1&e&&(t.\u0275\u0275element(0,"div",0),t.\u0275\u0275text(1,"\n")),2&e&&t.\u0275\u0275styleProp("--error-primary",null==o.theme?null:o.theme.primary)("--error-secondary",null==o.theme?null:o.theme.secondary)},encapsulation:2,changeDetection:0}),n})(),Dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-loader"]],inputs:{theme:"theme"},decls:2,vars:4,consts:[[1,"hot-toast-loader-icon",3,"ngStyle"]],template:function(e,o){1&e&&(t.\u0275\u0275element(0,"div",0),t.\u0275\u0275text(1,"\n")),2&e&&t.\u0275\u0275property("ngStyle",t.\u0275\u0275pureFunction2(1,p,null==o.theme?null:o.theme.primary,null==o.theme?null:o.theme.secondary))},dependencies:[v.PC],encapsulation:2,changeDetection:0}),n})(),Mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-warning"]],inputs:{theme:"theme"},decls:2,vars:4,consts:[[1,"hot-toast-warning-icon"]],template:function(e,o){1&e&&(t.\u0275\u0275element(0,"div",0),t.\u0275\u0275text(1,"\n")),2&e&&t.\u0275\u0275styleProp("--warn-primary",null==o.theme?null:o.theme.primary)("--warn-secondary",null==o.theme?null:o.theme.secondary)},encapsulation:2,changeDetection:0}),n})(),jt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-info"]],inputs:{theme:"theme"},decls:2,vars:4,consts:[[1,"hot-toast-info-icon"]],template:function(e,o){1&e&&(t.\u0275\u0275element(0,"div",0),t.\u0275\u0275text(1,"\n")),2&e&&t.\u0275\u0275styleProp("--warn-primary",null==o.theme?null:o.theme.primary)("--warn-secondary",null==o.theme?null:o.theme.secondary)},encapsulation:2,changeDetection:0}),n})(),Ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-indicator"]],inputs:{theme:"theme",type:"type"},decls:2,vars:1,consts:[["class","hot-toast-indicator-wrapper",4,"ngIf"],[1,"hot-toast-indicator-wrapper"],[3,"theme"],["class","hot-toast-status-wrapper",4,"ngIf"],[1,"hot-toast-status-wrapper"],[3,"ngSwitch"],[4,"ngSwitchCase"]],template:function(e,o){1&e&&(t.\u0275\u0275template(0,ft,6,2,"div",0),t.\u0275\u0275text(1,"\n")),2&e&&t.\u0275\u0275property("ngIf","blank"!==o.type)},dependencies:[v.O5,v.RF,v.n9,wt,bt,Dt,Mt,jt],encapsulation:2,changeDetection:0}),n})(),pt=(()=>{class n{constructor(e,o,s){this.injector=e,this.renderer=o,this.ngZone=s,this.offset=0,this.height=new t.EventEmitter,this.beforeClosed=new t.EventEmitter,this.afterClosed=new t.EventEmitter,this.isManualClose=!1,this.unlisteners=[]}get containerPositionStyle(){const e=this.toast.position.includes("top"),o=e?{top:0}:{bottom:0},s=this.toast.position.includes("left")?{left:0}:this.toast.position.includes("right")?{right:0}:{left:0,right:0,justifyContent:"center"};return{transform:`translateY(${this.offset*(e?1:-1)}px)`,...o,...s}}get toastBarBaseStyles(){const e=this.toast.position.includes("top"),o=`hotToastEnterAnimation${e?"Negative":"Positive"} 350ms cubic-bezier(0.21, 1.02, 0.73, 1) forwards`;return{...this.toast.style,animation:this.toast.autoClose?`${o}, hotToastExitAnimation${e?"Negative":"Positive"} 800ms forwards cubic-bezier(0.06, 0.71, 0.55, 1) ${this.toast.duration}ms`:o}}get isIconString(){return"string"==typeof this.toast.icon}ngOnInit(){T(this.toast.message)&&(this.context={$implicit:this.toastRef}),$(this.toast.message)&&(this.toastComponentInjector=t.Injector.create({providers:[{provide:dt,useValue:this.toastRef}],parent:this.toast.injector||this.injector}))}ngAfterViewInit(){const e=this.toastBarBase.nativeElement;requestAnimationFrame(()=>{this.height.emit(e.offsetHeight)}),this.ngZone.runOutsideAngular(()=>{this.unlisteners.push(this.renderer.listen(e,"animationstart",o=>{this.isExitAnimation(o)&&this.ngZone.run(()=>this.beforeClosed.emit())}),this.renderer.listen(e,"animationend",o=>{this.isExitAnimation(o)&&this.ngZone.run(()=>this.afterClosed.emit({dismissedByAction:this.isManualClose,id:this.toast.id}))}))}),this.setToastAttributes()}close(){this.isManualClose=!0;((n,i)=>{this.toastBarBase.nativeElement.style.animation=i})(0,`hotToastExitAnimation${this.toast.position.includes("top")?"Negative":"Positive"} 800ms forwards cubic-bezier(0.06, 0.71, 0.55, 1)`)}ngOnDestroy(){for(this.close();this.unlisteners.length;)this.unlisteners.pop()()}isExitAnimation(e){return e.animationName.includes("hotToastExitAnimation")}setToastAttributes(){const e=this.toast.attributes;for(const[o,s]of Object.entries(e))this.renderer.setAttribute(this.toastBarBase.nativeElement,o,s)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.Injector),t.\u0275\u0275directiveInject(t.Renderer2),t.\u0275\u0275directiveInject(t.NgZone))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast"]],viewQuery:function(e,o){if(1&e&&t.\u0275\u0275viewQuery(ut,5),2&e){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o.toastBarBase=s.first)}},inputs:{toast:"toast",offset:"offset",defaultConfig:"defaultConfig",toastRef:"toastRef"},outputs:{height:"height",beforeClosed:"beforeClosed",afterClosed:"afterClosed"},decls:25,vars:14,consts:[[1,"hot-toast-bar-base-container",3,"ngStyle","ngClass"],[1,"hot-toast-bar-base",3,"ngStyle","ngClass"],["hotToastBarBase",""],["aria-hidden","true",1,"hot-toast-icon"],[4,"ngIf","ngIfElse"],["indicator",""],[1,"hot-toast-message"],[4,"dynamicView","dynamicViewContext","dynamicViewInjector"],["type","button","class","hot-toast-close-btn","aria-label","Close",3,"ngStyle","click",4,"ngIf"],["iconTemplateOrComponent",""],[3,"iconTheme"],[3,"dynamicView"],[3,"theme","type"],["type","button","aria-label","Close",1,"hot-toast-close-btn",3,"ngStyle","click"]],template:function(e,o){if(1&e&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275text(1,"\n  "),t.\u0275\u0275elementStart(2,"div",1,2),t.\u0275\u0275text(4,"\n    "),t.\u0275\u0275elementStart(5,"div",3),t.\u0275\u0275text(6,"\n      "),t.\u0275\u0275template(7,Ct,7,2,"ng-container",4),t.\u0275\u0275text(8,"\n\n      "),t.\u0275\u0275template(9,gt,3,2,"ng-template",null,5,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275text(11,"\n    "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(12,"\n\n    "),t.\u0275\u0275elementStart(13,"div",6),t.\u0275\u0275text(14,"\n      "),t.\u0275\u0275elementStart(15,"div"),t.\u0275\u0275text(16,"\n        "),t.\u0275\u0275template(17,_t,1,0,"ng-container",7),t.\u0275\u0275text(18,"\n      "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(19,"\n    "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(20,"\n\n    "),t.\u0275\u0275template(21,yt,1,1,"button",8),t.\u0275\u0275text(22,"\n  "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(23,"\n"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(24,"\n")),2&e){const s=t.\u0275\u0275reference(10);t.\u0275\u0275property("ngStyle",o.containerPositionStyle)("ngClass","hot-toast-theme-"+o.toast.theme),t.\u0275\u0275advance(2),t.\u0275\u0275styleProp("--hot-toast-animation-state",o.isManualClose?"running":"paused"),t.\u0275\u0275property("ngStyle",o.toastBarBaseStyles)("ngClass",o.toast.className),t.\u0275\u0275attribute("aria-live",o.toast.ariaLive)("role",o.toast.role),t.\u0275\u0275advance(5),t.\u0275\u0275property("ngIf",void 0!==o.toast.icon)("ngIfElse",s),t.\u0275\u0275advance(10),t.\u0275\u0275property("dynamicView",o.toast.message)("dynamicViewContext",o.context)("dynamicViewInjector",o.toastComponentInjector),t.\u0275\u0275advance(4),t.\u0275\u0275property("ngIf",o.toast.dismissible)}},dependencies:[v.mk,v.O5,v.PC,Y,It,Ot],encapsulation:2,changeDetection:0}),n})(),Rt=(()=>{class n{constructor(e){this.cdr=e,this.toasts=[],this.toastRefs=[],this._onClosed=new d.x,this.onClosed$=this._onClosed.asObservable()}trackById(e,o){return o.id}calculateOffset(e,o){const s=this.toasts.filter(u=>u.visible&&u.position===o),r=s.findIndex(u=>u.id===e);return-1!==r?s.slice(...this.defaultConfig.reverseOrder?[r+1]:[0,r]).reduce((u,m)=>u+(m.height||0)+8,0):0}updateHeight(e,o){o.height=e,this.cdr.detectChanges()}addToast(e){this.toastRefs.push(e);const o=e.getToast();return this.toasts.push(e.getToast()),this.cdr.detectChanges(),{dispose:()=>{this.closeToast(o.id)},updateMessage:s=>{o.message=s,this.cdr.detectChanges()},updateToast:s=>{this.updateToasts(o,s),this.cdr.detectChanges()},afterClosed:this.getAfterClosed(o)}}closeToast(e){if(e){const o=this.hotToastComponentList.find(s=>s.toast.id===e);o&&o.close()}else this.hotToastComponentList.forEach(o=>o.close())}beforeClosed(e){e.visible=!1}afterClosed(e){this.toasts.findIndex(s=>s.id===e.id)>-1&&(this._onClosed.next(e),this.toasts=this.toasts.filter(s=>s.id!==e.id),this.toastRefs=this.toastRefs.filter(s=>s.getToast().id!==e.id),this.cdr.detectChanges())}hasToast(e){return this.toasts.findIndex(o=>o.id===e)>-1}getAfterClosed(e){return this.onClosed$.pipe((0,W.h)(o=>o.id===e.id))}updateToasts(e,o){this.toasts=this.toasts.map(s=>({...s,...s.id===e.id&&{...e,...o}}))}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["hot-toast-container"]],viewQuery:function(e,o){if(1&e&&t.\u0275\u0275viewQuery(pt,5),2&e){let s;t.\u0275\u0275queryRefresh(s=t.\u0275\u0275loadQuery())&&(o.hotToastComponentList=s)}},inputs:{defaultConfig:"defaultConfig"},decls:8,vars:2,consts:[[2,"position","fixed","z-index","9999","top","0","right","0","bottom","0","left","0","pointer-events","none"],[2,"position","relative","height","100%"],[3,"toast","offset","toastRef","height","beforeClosed","afterClosed",4,"ngFor","ngForOf","ngForTrackBy"],[3,"toast","offset","toastRef","height","beforeClosed","afterClosed"]],template:function(e,o){1&e&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275text(1,"\n  "),t.\u0275\u0275elementStart(2,"div",1),t.\u0275\u0275text(3,"\n    "),t.\u0275\u0275template(4,Tt,1,3,"hot-toast",2),t.\u0275\u0275text(5,"\n  "),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(6,"\n"),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(7,"\n")),2&e&&(t.\u0275\u0275advance(4),t.\u0275\u0275property("ngForOf",o.toasts)("ngForTrackBy",o.trackById))},dependencies:[v.sg,pt],encapsulation:2,changeDetection:0}),n})();class et{constructor(){this.reverseOrder=!1,this.ariaLive="polite",this.role="status",this.position="top-center",this.autoClose=!0,this.theme="toast",this.attributes={},this.info={content:""},this.success={content:""},this.error={content:""},this.loading={content:""},this.blank={content:""},this.warning={content:""}}}class Vt{constructor(){this.storage="local",this.key="ngneat/hototast-${id}",this.count=1,this.enabled=!1}}let $t=(()=>{class n{constructor(e,o,s){this._viewService=e,this.platformId=o,this._isInitialized=!1,this._defaultConfig=new et,this._defaultPersistConfig=new Vt,s&&(this._defaultConfig={...this._defaultConfig,...s})}get defaultConfig(){return this._defaultConfig}set defaultConfig(e){this._defaultConfig={...this._defaultConfig,...e},this._componentRef&&this._componentRef.setInput("defaultConfig",this._defaultConfig)}show(e,o){return this.createToast(e||this._defaultConfig.blank.content,"blank",{...this._defaultConfig,...o})}error(e,o){return this.createToast(e||this._defaultConfig.error.content,"error",{...this._defaultConfig,...this._defaultConfig?.error,...o})}success(e,o){return this.createToast(e||this._defaultConfig.success.content,"success",{...this._defaultConfig,...this._defaultConfig?.success,...o})}loading(e,o){return this.createToast(e||this._defaultConfig.loading.content,"loading",{...this._defaultConfig,...this._defaultConfig?.loading,...o})}warning(e,o){return this.createToast(e||this._defaultConfig.warning.content,"warning",{...this._defaultConfig,...this._defaultConfig?.warning,...o})}info(e,o){return this.createToast(e||this._defaultConfig.info.content,"info",{...this._defaultConfig,...this._defaultConfig?.info,...o})}observe(e){return o=>{let s,r=0;const h=e.loading??this._defaultConfig.loading?.content,u=e.success??this._defaultConfig.success?.content,m=e.error??this._defaultConfig.error?.content;return(0,a.P)(()=>(h&&(s=this.createLoadingToast(h),r=Date.now()),o.pipe((0,y.b)({...u&&{next:N=>{s=this.createOrUpdateToast(e,N,s,"success",0===r?r:Date.now()-r)}},...m&&{error:N=>{s=this.createOrUpdateToast(e,N,s,"error",0===r?r:Date.now()-r)}}}))))}}close(e){this._componentRef&&this._componentRef.ref.instance.closeToast(e)}init(){(0,v.PM)(this.platformId)||(this._componentRef=this._viewService.createComponent(Rt).setInput("defaultConfig",this._defaultConfig).appendTo(document.body))}createOrUpdateToast(e,o,s,r,h){let u=null,m={};if(({content:u,options:m}=this.getContentAndOptions(r,e[r]||(this._defaultConfig[r]?this._defaultConfig[r].content:""))),u=((n,i)=>(n=>"function"==typeof n)(n)?n(i):n)(u,o),s){s.updateMessage(u);const N={type:r,duration:h+ct[r],...m,...m.duration&&{duration:h+m.duration}};s.updateToast(N)}else this.createToast(u,r,m);return s}createToast(e,o,s,r){this._isInitialized||(this._isInitialized=!0,this.init());const h=Date.now(),u=s?.id??h.toString();if(!this.isDuplicate(u)&&(!s.persist?.enabled||s.persist?.enabled&&this.handleStorageValue(u,s))){const m={ariaLive:s?.ariaLive??"polite",createdAt:h,duration:s?.duration??ct[o],id:u,message:e,role:s?.role??"status",type:o,visible:!0,observableMessages:r??void 0,...s};return new dt(m).appendTo(this._componentRef.ref.instance)}}isDuplicate(e){return this._componentRef.ref.instance.hasToast(e)}handleStorageValue(e,o){let s=1;const r={...this._defaultPersistConfig,...o.persist},h="local"===r.storage?localStorage:sessionStorage,u=r.key.replace(/\${id}/g,e);let m=h.getItem(u);return m?(m=parseInt(m,10),s=m>0?m-1:m):s=r.count,h.setItem(u,s.toString()),s}getContentAndOptions(e,o){let s,r={...this._defaultConfig,...this._defaultConfig[e]};if("string"==typeof o||T(o)||$(o))s=o;else{let h;({content:s,...h}=o),r={...r,...h}}return{content:s,options:r}}createLoadingToast(e){let o=null,s={};return({content:o,options:s}=this.getContentAndOptions("loading",e)),this.loading(o,s)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275inject(J),t.\u0275\u0275inject(t.PLATFORM_ID),t.\u0275\u0275inject(et,8))},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Bt=(()=>{class n{static forRoot(e){return{ngModule:n,providers:[{provide:et,useValue:e}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[v.ez,at]}),n})();class S extends U.m1{constructor(i,e,o){super({contacts:[],searchString:""}),this.contactsService=i,this.toast=e,this.dialog=o,this.filteredContacts$=this.select(({contacts:s,searchString:r})=>s.filter(h=>h.name.toLowerCase().includes(r.toLowerCase()))),this.setContacts=this.updater((s,r)=>({...s,contacts:r})),this.removeContactFromStore=this.updater((s,r)=>({...s,contacts:s.contacts.filter(h=>h.name!==r)})),this.fetchContacts=this.effect(s=>s.pipe((0,R.w)(()=>this.contactsService.fetchContacts().pipe(this.toast.observe({loading:"Fetching...",success:"Contacts fetched!",error:"Could not fetch."}),(0,y.b)(r=>{this.setContacts(r)}),(0,b.K)(()=>w.E))))),this.showAddDialog=this.effect(s=>s.pipe((0,R.w)(()=>this.dialog.open(E).afterClosed$),(0,W.h)(r=>!!r),(0,y.b)(r=>{this.addContact(r)}))),this.addContact=this.effect(s=>s.pipe((0,z.b)(r=>this.contactsService.addContact(r).pipe((0,y.b)(()=>this.fetchContacts()),this.toast.observe({loading:"Adding contact...",success:"Contact added!",error:"Could not add."}),(0,b.K)(()=>w.E))))),this.deleteContact=this.effect(s=>s.pipe((0,z.b)(r=>this.contactsService.deleteContact(r).pipe(this.toast.observe({loading:"Deleting contact...",success:"Contact deleted!",error:"Could not delete."}),(0,y.b)(()=>this.removeContactFromStore(r.name)),(0,b.K)(()=>w.E))))),this.fetchContacts()}}function Ft(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",12),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.showSearch())}),t.\u0275\u0275element(1,"span",13),t.\u0275\u0275elementEnd()}}function Ht(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"form",14)(1,"input",15),t.\u0275\u0275listener("keydown",function(s){t.\u0275\u0275restoreView(e);const r=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(r.searchContacts(s.target.value))}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"button",16),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.hideSearch())}),t.\u0275\u0275element(3,"i",13),t.\u0275\u0275elementEnd()()}}S.\u0275fac=function(i){return new(i||S)(t.\u0275\u0275inject(_),t.\u0275\u0275inject($t),t.\u0275\u0275inject(A.xA))},S.\u0275prov=t.\u0275\u0275defineInjectable({token:S,factory:S.\u0275fac});class F{constructor(i){this.contactsStore=i,this.search=!1}showSearch(){this.search=!0}hideSearch(){this.search=!1}searchContacts(i){this.contactsStore.patchState({searchString:i})}addContact(){this.contactsStore.showAddDialog()}}function Lt(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"li",2)(1,"div",3)(2,"a",4),t.\u0275\u0275element(3,"i",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"div",6),t.\u0275\u0275text(6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"button",7),t.\u0275\u0275listener("click",function(){const r=t.\u0275\u0275restoreView(e).$implicit,h=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(h.deleteContact(r))}),t.\u0275\u0275element(8,"i",8),t.\u0275\u0275elementEnd()()}if(2&n){const e=i.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275property("href","tel:"+e.phone,t.\u0275\u0275sanitizeUrl),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1("",e.name," "),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.phone)}}F.\u0275fac=function(i){return new(i||F)(t.\u0275\u0275directiveInject(S))},F.\u0275cmp=t.\u0275\u0275defineComponent({type:F,selectors:[["app-header"]],decls:13,vars:2,consts:[[1,"navbar","navbar-expand-sm","bg-primary"],[1,"text-white"],[1,"ti-headphone"],[1,"text-2xl"],["type","button","data-toggle","collapse","data-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"ml-auto","d-flex"],[1,"flex","items-center","mr-2","p-2",3,"click"],[1,"ti-plus"],["class","btn btn-primary",3,"click",4,"ngIf"],["class","form-inline",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"ti-search"],[1,"form-inline"],["autoFocus","true",1,"form-control",3,"keydown"],["type","submit",1,"btn","btn-outline-success",3,"click"]],template:function(i,e){1&i&&(t.\u0275\u0275elementStart(0,"nav",0)(1,"div",1),t.\u0275\u0275element(2,"span",2),t.\u0275\u0275elementStart(3,"span",3),t.\u0275\u0275text(4," Contacts App "),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(5,"button",4),t.\u0275\u0275element(6,"span",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div",6)(8,"div",7)(9,"button",8),t.\u0275\u0275listener("click",function(){return e.addContact()}),t.\u0275\u0275element(10,"span",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(11,Ft,2,0,"button",10),t.\u0275\u0275template(12,Ht,4,0,"form",11),t.\u0275\u0275elementEnd()()()),2&i&&(t.\u0275\u0275advance(11),t.\u0275\u0275property("ngIf",!e.search),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.search))},dependencies:[v.O5,g._Y,g.JL,g.F]});class H{constructor(i){this.contactsStore=i,this.contacts$=this.contactsStore.filteredContacts$}deleteContact(i){this.contactsStore.deleteContact(i)}}H.\u0275fac=function(i){return new(i||H)(t.\u0275\u0275directiveInject(S))},H.\u0275cmp=t.\u0275\u0275defineComponent({type:H,selectors:[["app-contacts"]],decls:3,vars:3,consts:[[1,"list-group"],["class","list-group-item d-flex justify-content-between align-items-center",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"text-xl"],[1,"mr-2",3,"href"],[1,"ti-microphone"],[1,"text-gray-500","text-lg"],[1,"btn","btn-danger",3,"click"],[1,"ti-trash"]],template:function(i,e){1&i&&(t.\u0275\u0275elementStart(0,"ul",0),t.\u0275\u0275template(1,Lt,9,3,"li",1),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementEnd()),2&i&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",t.\u0275\u0275pipeBind1(2,1,e.contacts$)))},dependencies:[v.sg,v.Ov]});class L{constructor(){}}L.\u0275fac=function(i){return new(i||L)},L.\u0275cmp=t.\u0275\u0275defineComponent({type:L,selectors:[["app-contacts-cs"]],features:[t.\u0275\u0275ProvidersFeature([S])],decls:2,vars:0,template:function(i,e){1&i&&t.\u0275\u0275element(0,"app-header")(1,"app-contacts")},dependencies:[F,H],changeDetection:0});const Nt=[{path:"",component:L}];class j{}j.\u0275fac=function(i){return new(i||j)},j.\u0275mod=t.\u0275\u0275defineNgModule({type:j}),j.\u0275inj=t.\u0275\u0275defineInjector({imports:[K.Bz.forChild(Nt),K.Bz]});var kt=c(5938);class O{}O.\u0275fac=function(i){return new(i||O)},O.\u0275mod=t.\u0275\u0275defineNgModule({type:O}),O.\u0275inj=t.\u0275\u0275defineInjector({providers:[A.xA],imports:[v.ez,j,g.u5,kt.Is,Bt.forRoot()]})},4280:(ht,k,c)=>{c.d(k,{m1:()=>q});var v=c(9751),K=c(727),U=c(3101),w=c(4707),R=c(5191),y=c(9646),b=c(233),W=c(515),z=c(2843),t=c(7159),A=c(9841),g=c(7579),E=c(5363),D=c(8505),P=c(1365),_=c(4004),nt=c(262),V=c(2722),ot=c(5698),it=c(1884),Q=c(4782),T=c(4650);function M(d){return"function"==typeof d.ngrxOnStoreInit}function Z(d){return"function"==typeof d.ngrxOnStateInit}const X=new T.InjectionToken("@ngrx/component-store Initial State");let q=(()=>{class d{constructor(a){this.destroySubject$=new w.t(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new w.t(1),this.isInitialized=!1,this.state$=this.select(l=>l),this.\u0275hasProvider=!1,a&&this.initState(a),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(a){return l=>{let C,p=!0;const I=((0,R.b)(l)?l:(0,y.of)(l)).pipe((0,E.Q)(b.N),(0,D.b)(()=>this.assertStateIsInitialized()),(0,P.M)(this.stateSubject$),(0,_.U)(([x,tt])=>a(tt,x)),(0,D.b)(x=>this.stateSubject$.next(x)),(0,nt.K)(x=>p?(C=x,W.E):(0,z._)(x)),(0,V.R)(this.destroy$)).subscribe();if(C)throw C;return p=!1,I}}initState(a){(0,t.x)([a],b.N).subscribe(l=>{this.isInitialized=!0,this.stateSubject$.next(l)})}setState(a){"function"!=typeof a?this.initState(a):this.updater(a)()}patchState(a){const l="function"==typeof a?a(this.get()):a;this.updater((p,C)=>({...p,...C}))(l)}get(a){let l;return this.assertStateIsInitialized(),this.stateSubject$.pipe((0,ot.q)(1)).subscribe(p=>{l=a?a(p):p}),l}select(...a){const{observablesOrSelectorsObject:l,projector:p,config:C}=function G(d){const f=Array.from(d);let a={debounce:!1};if(function J(d){return typeof d.debounce<"u"}(f[f.length-1])&&(a={...a,...f.pop()}),1===f.length&&"function"!=typeof f[0])return{observablesOrSelectorsObject:f[0],projector:void 0,config:a};const l=f.pop();return{observablesOrSelectorsObject:f,projector:l,config:a}}(a);return(function rt(d,f){return Array.isArray(d)&&0===d.length&&f}(l,p)?this.stateSubject$:(0,A.a)(l)).pipe(C.debounce?function $(){return d=>new v.y(f=>{let a,l;const p=new K.w0;return p.add(d.subscribe({complete:()=>{a&&f.next(l),f.complete()},error:C=>{f.error(C)},next:C=>{l=C,a||(a=U.E.schedule(()=>{f.next(l),a=void 0}),p.add(a))}})),p})}():d=>d,p?(0,_.U)(I=>l.length>0&&Array.isArray(I)?p(...I):p(I)):d=>d,(0,it.x)(),(0,Q.d)({refCount:!0,bufferSize:1}),(0,V.R)(this.destroy$))}effect(a){const l=new g.x;return a(l).pipe((0,V.R)(this.destroy$)).subscribe(),p=>((0,R.b)(p)?p:(0,y.of)(p)).pipe((0,V.R)(this.destroy$)).subscribe(B=>{l.next(B)})}checkProviderForHooks(){U.E.schedule(()=>{if((0,T.isDevMode)()&&(M(this)||Z(this))&&!this.\u0275hasProvider){const a=[M(this)?"OnStoreInit":"",Z(this)?"OnStateInit":""].filter(l=>l);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${a.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}}return d.\u0275fac=function(a){return new(a||d)(T.\u0275\u0275inject(X,8))},d.\u0275prov=T.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac}),d})()}}]);