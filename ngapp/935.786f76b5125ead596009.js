(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[935],{2935:(t,e,i)=>{"use strict";i.d(e,{WI:()=>j,uw:()=>E,H8:()=>L,ZT:()=>B,vA:()=>C,xY:()=>S,Is:()=>H,so:()=>x,uh:()=>P});var n=i(5333),a=i(2151),o=i(5366),s=i(7064),r=i(4720),l=i(1116),c=i(5959),h=i(1450),d=i(878),u=i(3835),g=i(611),p=i(6238),_=i(3169),f=i(9713),m=i(9235),v=i(7388);function b(t,e){}class C{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0}}const y={dialogContainer:(0,f.X$)("dialogContainer",[(0,f.SB)("void, exit",(0,f.oB)({opacity:0,transform:"scale(0.7)"})),(0,f.SB)("enter",(0,f.oB)({transform:"none"})),(0,f.eR)("* => enter",(0,f.jt)("150ms cubic-bezier(0, 0, 0.2, 1)",(0,f.oB)({transform:"none",opacity:1}))),(0,f.eR)("* => void, * => exit",(0,f.jt)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,f.oB)({opacity:0})))])};let D=(()=>{class t extends a.en{constructor(t,e,i,n,a,s){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=i,this._config=a,this._focusMonitor=s,this._animationStateChanged=new o.EventEmitter,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=t=>(this._portalOutlet.hasAttached(),this._portalOutlet.attachDomPortal(t)),this._ariaLabelledBy=a.ariaLabelledBy||null,this._document=n}_initializeWithAttachedContent(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement(),this._focusDialogContainer()}attachComponentPortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||(!this._config.autoFocus||!this._focusTrap.focusInitialElement())&&this._elementRef.nativeElement.focus()}_trapFocus(){this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady():this._containsFocus()||this._elementRef.nativeElement.focus()}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=(0,_.ht)(),i=this._elementRef.nativeElement;e&&e!==this._document.body&&e!==i&&!i.contains(e)||(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}_capturePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,_.ht)())}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,_.ht)();return t===e||t.contains(e)}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](v.qV),o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),o["\u0275\u0275directiveInject"](l.K0,8),o["\u0275\u0275directiveInject"](C),o["\u0275\u0275directiveInject"](v.tE))},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,viewQuery:function(t,e){if(1&t&&o["\u0275\u0275viewQuery"](a.Pl,7),2&t){let t;o["\u0275\u0275queryRefresh"](t=o["\u0275\u0275loadQuery"]())&&(e._portalOutlet=t.first)}},features:[o["\u0275\u0275InheritDefinitionFeature"]]}),t})(),I=(()=>{class t extends D{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:e}))}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):"exit"!==t&&"void"!==t||this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(){let e;return function(i){return(e||(e=o["\u0275\u0275getInheritedFactory"](t)))(i||t)}}(),t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,e){1&t&&o["\u0275\u0275syntheticHostListener"]("@dialogContainer.start",function(t){return e._onAnimationStart(t)})("@dialogContainer.done",function(t){return e._onAnimationDone(t)}),2&t&&(o["\u0275\u0275hostProperty"]("id",e._id),o["\u0275\u0275attribute"]("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),o["\u0275\u0275syntheticHostProperty"]("@dialogContainer",e._state))},features:[o["\u0275\u0275InheritDefinitionFeature"]],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&o["\u0275\u0275template"](0,b,0,0,"ng-template",0)},directives:[a.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[y.dialogContainer]}}),t})(),R=0;class x{constructor(t,e,i="mat-dialog-"+R++){this._overlayRef=t,this._containerInstance=e,this.id=i,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new c.xQ,this._afterClosed=new c.xQ,this._beforeClosed=new c.xQ,this._state=0,e._id=i,e._animationStateChanged.pipe((0,u.h)(t=>"opened"===t.state),(0,g.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,u.h)(t=>"closed"===t.state),(0,g.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),t.keydownEvents().pipe((0,u.h)(t=>t.keyCode===m.hY&&!this.disableClose&&!(0,m.Vb)(t))).subscribe(t=>{t.preventDefault(),T(this,"keyboard")}),t.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():T(this,"mouse")})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe((0,u.h)(t=>"closing"===t.state),(0,g.q)(1)).subscribe(e=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._afterClosed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(t){let e=this._getPositionStrategy();return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(t="",e=""){return this._overlayRef.updateSize({width:t,height:e}),this._overlayRef.updatePosition(),this}addPanelClass(t){return this._overlayRef.addPanelClass(t),this}removePanelClass(t){return this._overlayRef.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}function T(t,e,i){return void 0!==t._containerInstance&&(t._containerInstance._closeInteractionType=e),t.close(i)}const j=new o.InjectionToken("MatDialogData"),A=new o.InjectionToken("mat-dialog-default-options"),w=new o.InjectionToken("mat-dialog-scroll-strategy"),k={provide:w,deps:[n.aV],useFactory:function(t){return()=>t.scrollStrategies.block()}};let O=(()=>{class t{constructor(t,e,i,n,a,o,s,r,l){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=n,this._overlayContainer=a,this._dialogRefConstructor=s,this._dialogContainerType=r,this._dialogDataToken=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new c.xQ,this._afterOpenedAtThisLevel=new c.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,h.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,p.O)(void 0))),this._scrollStrategy=o}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){(e=function(t,e){return Object.assign(Object.assign({},e),t)}(e,this._defaultOptions||new C)).id&&this.getDialogById(e.id);const i=this._createOverlay(e),n=this._attachDialogContainer(i,e),a=this._attachDialogContent(t,n,i,e);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(a),a.afterClosed().subscribe(()=>this._removeOpenDialog(a)),this.afterOpened.next(a),n._initializeWithAttachedContent(),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new n.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachDialogContainer(t,e){const i=o.Injector.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:C,useValue:e}]}),n=new a.C5(this._dialogContainerType,e.viewContainerRef,i,e.componentFactoryResolver);return t.attach(n).instance}_attachDialogContent(t,e,i,n){const s=new this._dialogRefConstructor(i,e,n.id);if(t instanceof o.TemplateRef)e.attachTemplatePortal(new a.UE(t,null,{$implicit:n.data,dialogRef:s}));else{const i=this._createInjector(n,s,e),o=e.attachComponentPortal(new a.C5(t,n.viewContainerRef,i));s.componentInstance=o.instance}return s.updateSize(n.width,n.height).updatePosition(n.position),s}_createInjector(t,e,i){const n=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=[{provide:this._dialogContainerType,useValue:i},{provide:this._dialogDataToken,useValue:t.data},{provide:this._dialogRefConstructor,useValue:e}];return!t.direction||n&&n.get(r.Is,null)||a.push({provide:r.Is,useValue:{value:t.direction,change:(0,d.of)()}}),o.Injector.create({parent:n||this._injector,providers:a})}_removeOpenDialog(t){const e=this.openDialogs.indexOf(t);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((t,e)=>{t?e.setAttribute("aria-hidden",t):e.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let n=e[i];n===t||"SCRIPT"===n.nodeName||"STYLE"===n.nodeName||n.hasAttribute("aria-live")||(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](n.aV),o["\u0275\u0275directiveInject"](o.Injector),o["\u0275\u0275directiveInject"](void 0),o["\u0275\u0275directiveInject"](void 0),o["\u0275\u0275directiveInject"](n.Xj),o["\u0275\u0275directiveInject"](void 0),o["\u0275\u0275directiveInject"](o.Type),o["\u0275\u0275directiveInject"](o.Type),o["\u0275\u0275directiveInject"](o.InjectionToken))},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t}),t})(),E=(()=>{class t extends O{constructor(t,e,i,n,a,o,s){super(t,e,n,o,s,a,x,I,j)}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](n.aV),o["\u0275\u0275inject"](o.Injector),o["\u0275\u0275inject"](l.Ye,8),o["\u0275\u0275inject"](A,8),o["\u0275\u0275inject"](w),o["\u0275\u0275inject"](t,12),o["\u0275\u0275inject"](n.Xj))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})(),F=0,B=(()=>{class t{constructor(t,e,i){this.dialogRef=t,this._elementRef=e,this._dialog=i,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=V(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){const e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){T(this.dialogRef,0===t.screenX&&0===t.screenY?"keyboard":"mouse",this.dialogResult)}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](x,8),o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](E))},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,e){1&t&&o["\u0275\u0275listener"]("click",function(t){return e._onButtonClick(t)}),2&t&&o["\u0275\u0275attribute"]("aria-label",e.ariaLabel||null)("type",e.type)},inputs:{type:"type",dialogResult:["mat-dialog-close","dialogResult"],ariaLabel:["aria-label","ariaLabel"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[o["\u0275\u0275NgOnChangesFeature"]]}),t})(),P=(()=>{class t{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i,this.id="mat-dialog-title-"+F++}ngOnInit(){this._dialogRef||(this._dialogRef=V(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](x,8),o["\u0275\u0275directiveInject"](o.ElementRef),o["\u0275\u0275directiveInject"](E))},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&o["\u0275\u0275hostProperty"]("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o["\u0275\u0275defineDirective"]({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"]}),t})();function V(t,e){let i=t.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-dialog-container");)i=i.parentElement;return i?e.find(t=>t.id===i.id):null}let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({providers:[E,k],imports:[[n.U8,a.eL,s.BQ],s.BQ]}),t})()}}]);