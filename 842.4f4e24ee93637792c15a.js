(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[842],{2935:(t,e,i)=>{"use strict";i.d(e,{WI:()=>R,uw:()=>E,H8:()=>I,vA:()=>b,xY:()=>P,Is:()=>L,so:()=>A,uh:()=>B});var a=i(5333),o=i(2151),n=i(5366),s=i(7064),l=i(4720),r=i(1116),c=i(5959),h=i(1450),d=i(878),u=i(3835),_=i(611),g=i(6238),p=i(9713),f=i(9235),m=i(7388);function v(t,e){}class b{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus=!0,this.restoreFocus=!0,this.closeOnNavigation=!0}}const C={dialogContainer:(0,p.X$)("dialogContainer",[(0,p.SB)("void, exit",(0,p.oB)({opacity:0,transform:"scale(0.7)"})),(0,p.SB)("enter",(0,p.oB)({transform:"none"})),(0,p.eR)("* => enter",(0,p.jt)("150ms cubic-bezier(0, 0, 0.2, 1)",(0,p.oB)({transform:"none",opacity:1}))),(0,p.eR)("* => void, * => exit",(0,p.jt)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,p.oB)({opacity:0})))])};let y=(()=>{class t extends o.en{constructor(t,e,i,a,o,s){super(),this._elementRef=t,this._focusTrapFactory=e,this._changeDetectorRef=i,this._config=o,this._focusMonitor=s,this._animationStateChanged=new n.vpe,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=t=>(this._portalOutlet.hasAttached(),this._portalOutlet.attachDomPortal(t)),this._ariaLabelledBy=o.ariaLabelledBy||null,this._document=a}_initializeWithAttachedContent(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement(),this._focusDialogContainer()}attachComponentPortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||(!this._config.autoFocus||!this._focusTrap.focusInitialElement())&&this._elementRef.nativeElement.focus()}_trapFocus(){this._config.autoFocus?this._focusTrap.focusInitialElementWhenReady():this._containsFocus()||this._elementRef.nativeElement.focus()}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const e=this._getActiveElement(),i=this._elementRef.nativeElement;e&&e!==this._document.body&&e!==i&&!i.contains(e)||(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}_capturePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=this._getActiveElement())}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=this._getActiveElement();return t===e||t.contains(e)}_getActiveElement(){var t;const e=this._document.activeElement;return(null===(t=null==e?void 0:e.shadowRoot)||void 0===t?void 0:t.activeElement)||e}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(m.qV),n.Y36(n.sBO),n.Y36(r.K0,8),n.Y36(b),n.Y36(m.tE))},t.\u0275dir=n.lG2({type:t,viewQuery:function(t,e){if(1&t&&n.Gf(o.Pl,7),2&t){let t;n.iGM(t=n.CRH())&&(e._portalOutlet=t.first)}},features:[n.qOj]}),t})(),D=(()=>{class t extends y{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:t,totalTime:e}){"enter"===t?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:e}))}_onAnimationStart({toState:t,totalTime:e}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:e}):"exit"!==t&&"void"!==t||this._animationStateChanged.next({state:"closing",totalTime:e})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return t.\u0275fac=function(){let e;return function(i){return(e||(e=n.n5z(t)))(i||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,e){1&t&&n.WFA("@dialogContainer.start",function(t){return e._onAnimationStart(t)})("@dialogContainer.done",function(t){return e._onAnimationDone(t)}),2&t&&(n.Ikx("id",e._id),n.uIk("role",e._config.role)("aria-labelledby",e._config.ariaLabel?null:e._ariaLabelledBy)("aria-label",e._config.ariaLabel)("aria-describedby",e._config.ariaDescribedBy||null),n.d8E("@dialogContainer",e._state))},features:[n.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&n.YNc(0,v,0,0,"ng-template",0)},directives:[o.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[C.dialogContainer]}}),t})(),x=0;class A{constructor(t,e,i="mat-dialog-"+x++){this._overlayRef=t,this._containerInstance=e,this.id=i,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new c.xQ,this._afterClosed=new c.xQ,this._beforeClosed=new c.xQ,this._state=0,e._id=i,e._animationStateChanged.pipe((0,u.h)(t=>"opened"===t.state),(0,_.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe((0,u.h)(t=>"closed"===t.state),(0,_.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),t.keydownEvents().pipe((0,u.h)(t=>t.keyCode===f.hY&&!this.disableClose&&!(0,f.Vb)(t))).subscribe(t=>{t.preventDefault(),w(this,"keyboard")}),t.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():w(this,"mouse")})}close(t){this._result=t,this._containerInstance._animationStateChanged.pipe((0,u.h)(t=>"closing"===t.state),(0,_.q)(1)).subscribe(e=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._afterClosed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(t){let e=this._getPositionStrategy();return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(t="",e=""){return this._overlayRef.updateSize({width:t,height:e}),this._overlayRef.updatePosition(),this}addPanelClass(t){return this._overlayRef.addPanelClass(t),this}removePanelClass(t){return this._overlayRef.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}function w(t,e,i){return void 0!==t._containerInstance&&(t._containerInstance._closeInteractionType=e),t.close(i)}const R=new n.OlP("MatDialogData"),T=new n.OlP("mat-dialog-default-options"),O=new n.OlP("mat-dialog-scroll-strategy"),k={provide:O,deps:[a.aV],useFactory:function(t){return()=>t.scrollStrategies.block()}};let F=(()=>{class t{constructor(t,e,i,a,o,n,s,l,r){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=a,this._overlayContainer=o,this._dialogRefConstructor=s,this._dialogContainerType=l,this._dialogDataToken=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new c.xQ,this._afterOpenedAtThisLevel=new c.xQ,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,h.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,g.O)(void 0))),this._scrollStrategy=n}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,e){(e=function(t,e){return Object.assign(Object.assign({},e),t)}(e,this._defaultOptions||new b)).id&&this.getDialogById(e.id);const i=this._createOverlay(e),a=this._attachDialogContainer(i,e),o=this._attachDialogContent(t,a,i,e);return this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(o),o.afterClosed().subscribe(()=>this._removeOpenDialog(o)),this.afterOpened.next(o),a._initializeWithAttachedContent(),o}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_createOverlay(t){const e=this._getOverlayConfig(t);return this._overlay.create(e)}_getOverlayConfig(t){const e=new a.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachDialogContainer(t,e){const i=n.zs3.create({parent:e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,providers:[{provide:b,useValue:e}]}),a=new o.C5(this._dialogContainerType,e.viewContainerRef,i,e.componentFactoryResolver);return t.attach(a).instance}_attachDialogContent(t,e,i,a){const s=new this._dialogRefConstructor(i,e,a.id);if(t instanceof n.Rgc)e.attachTemplatePortal(new o.UE(t,null,{$implicit:a.data,dialogRef:s}));else{const i=this._createInjector(a,s,e),n=e.attachComponentPortal(new o.C5(t,a.viewContainerRef,i));s.componentInstance=n.instance}return s.updateSize(a.width,a.height).updatePosition(a.position),s}_createInjector(t,e,i){const a=t&&t.viewContainerRef&&t.viewContainerRef.injector,o=[{provide:this._dialogContainerType,useValue:i},{provide:this._dialogDataToken,useValue:t.data},{provide:this._dialogRefConstructor,useValue:e}];return!t.direction||a&&a.get(l.Is,null)||o.push({provide:l.Is,useValue:{value:t.direction,change:(0,d.of)()}}),n.zs3.create({parent:a||this._injector,providers:o})}_removeOpenDialog(t){const e=this.openDialogs.indexOf(t);e>-1&&(this.openDialogs.splice(e,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((t,e)=>{t?e.setAttribute("aria-hidden",t):e.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let a=e[i];a===t||"SCRIPT"===a.nodeName||"STYLE"===a.nodeName||a.hasAttribute("aria-live")||(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(a.aV),n.Y36(n.zs3),n.Y36(void 0),n.Y36(void 0),n.Y36(a.Xj),n.Y36(void 0),n.Y36(n.DyG),n.Y36(n.DyG),n.Y36(n.OlP))},t.\u0275dir=n.lG2({type:t}),t})(),E=(()=>{class t extends F{constructor(t,e,i,a,o,n,s){super(t,e,a,n,s,o,A,D,R)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(a.aV),n.LFG(n.zs3),n.LFG(r.Ye,8),n.LFG(T,8),n.LFG(O),n.LFG(t,12),n.LFG(a.Xj))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})(),S=0,B=(()=>{class t{constructor(t,e,i){this._dialogRef=t,this._elementRef=e,this._dialog=i,this.id="mat-dialog-title-"+S++}ngOnInit(){this._dialogRef||(this._dialogRef=function(t,e){let i=t.nativeElement.parentElement;for(;i&&!i.classList.contains("mat-dialog-container");)i=i.parentElement;return i?e.find(t=>t.id===i.id):null}(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const t=this._dialogRef._containerInstance;t&&!t._ariaLabelledBy&&(t._ariaLabelledBy=this.id)})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(A,8),n.Y36(n.SBq),n.Y36(E))},t.\u0275dir=n.lG2({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-dialog-title"],hostVars:1,hostBindings:function(t,e){2&t&&n.Ikx("id",e.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-dialog-content"]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=n.lG2({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-dialog-actions"]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[E,k],imports:[[a.U8,o.eL,s.BQ],s.BQ]}),t})()},842:(t,e,i)=>{"use strict";i.d(e,{m:()=>o});var a=i(2935);function o(){const t=new a.vA;return t.disableClose=!0,t.autoFocus=!0,t.width="400px",t}}}]);