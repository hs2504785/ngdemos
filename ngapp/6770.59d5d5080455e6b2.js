"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[6770],{7988:(H,j,a)=>{a.d(j,{OP:()=>A,Tx:()=>ce,VK:()=>ie,p6:()=>re});var t=a(5879),f=a(4300),R=a(2495),_=a(6028),b=a(8645),y=a(3019),E=a(7394),w=a(2096),x=a(6410),O=a(7921),k=a(4664),c=a(8180),h=a(9773),l=a(2181),d=a(932),p=a(3680),g=a(6814),W=a(8484),m=a(6825),V=a(9388),B=a(3651),Y=a(2831),Q=a(2741);const z=["mat-menu-item",""];function X(s,r){1&s&&(t.\u0275\u0275namespaceSVG(),t.\u0275\u0275elementStart(0,"svg",3),t.\u0275\u0275element(1,"polygon",4),t.\u0275\u0275elementEnd())}const Z=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],G=["mat-icon, [matMenuItemIcon]","*"];function $(s,r){if(1&s){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275listener("keydown",function(i){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(o._handleKeydown(i))})("click",function(){t.\u0275\u0275restoreView(e);const i=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(i.closed.emit("click"))})("@transformMenu.start",function(i){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(o._onAnimationStart(i))})("@transformMenu.done",function(i){t.\u0275\u0275restoreView(e);const o=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(o._onAnimationDone(i))}),t.\u0275\u0275elementStart(1,"div",1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd()()}if(2&s){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("id",e.panelId)("ngClass",e._classList)("@transformMenu",e._panelAnimationState),t.\u0275\u0275attribute("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null)}}const J=["*"],L=new t.InjectionToken("MAT_MENU_PANEL"),q=(0,p.Kr)((0,p.Id)(class{}));let A=(()=>{class s extends q{constructor(e,n,i,o,u){super(),this._elementRef=e,this._document=n,this._focusMonitor=i,this._parentMenu=o,this._changeDetectorRef=u,this.role="menuitem",this._hovered=new b.x,this._focused=new b.x,this._highlighted=!1,this._triggersSubmenu=!1,o?.addItem?.(this)}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,n):this._getHostElement().focus(n),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){const e=this._elementRef.nativeElement.cloneNode(!0),n=e.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<n.length;i++)n[i].remove();return e.textContent?.trim()||""}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef?.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef?.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}}return s.\u0275fac=function(e){return new(e||s)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(g.K0),t.\u0275\u0275directiveInject(f.tE),t.\u0275\u0275directiveInject(L,8),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},s.\u0275cmp=t.\u0275\u0275defineComponent({type:s,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-mdc-focus-indicator","mdc-list-item"],hostVars:8,hostBindings:function(e,n){1&e&&t.\u0275\u0275listener("click",function(o){return n._checkDisabled(o)})("mouseenter",function(){return n._handleMouseEnter()}),2&e&&(t.\u0275\u0275attribute("role",n.role)("tabindex",n._getTabIndex())("aria-disabled",n.disabled)("disabled",n.disabled||null),t.\u0275\u0275classProp("mat-mdc-menu-item-highlighted",n._highlighted)("mat-mdc-menu-item-submenu-trigger",n._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[t.\u0275\u0275InheritDefinitionFeature],attrs:z,ngContentSelectors:G,decls:5,vars:3,consts:[[1,"mdc-list-item__primary-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-mdc-menu-submenu-icon","viewBox","0 0 5 10","focusable","false","aria-hidden","true",4,"ngIf"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(Z),t.\u0275\u0275projection(0),t.\u0275\u0275elementStart(1,"span",0),t.\u0275\u0275projection(2,1),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(3,"div",1),t.\u0275\u0275template(4,X,2,0,"svg",2)),2&e&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("matRippleDisabled",n.disableRipple||n.disabled)("matRippleTrigger",n._getHostElement()),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n._triggersSubmenu))},dependencies:[g.O5,p.wG],encapsulation:2,changeDetection:0}),s})();const ee=new t.InjectionToken("MatMenuContent"),S={transformMenu:(0,m.X$)("transformMenu",[(0,m.SB)("void",(0,m.oB)({opacity:0,transform:"scale(0.8)"})),(0,m.eR)("void => enter",(0,m.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,m.oB)({opacity:1,transform:"scale(1)"}))),(0,m.eR)("* => void",(0,m.jt)("100ms 25ms linear",(0,m.oB)({opacity:0})))]),fadeInItems:(0,m.X$)("fadeInItems",[(0,m.SB)("showing",(0,m.oB)({opacity:1})),(0,m.eR)("void => *",[(0,m.oB)({opacity:0}),(0,m.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])};let te=0;const F=new t.InjectionToken("mat-menu-default-options",{providedIn:"root",factory:function ne(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}});let I=(()=>{class s{get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}get overlapTrigger(){return this._overlapTrigger}set overlapTrigger(e){this._overlapTrigger=(0,R.Ig)(e)}get hasBackdrop(){return this._hasBackdrop}set hasBackdrop(e){this._hasBackdrop=(0,R.Ig)(e)}set panelClass(e){const n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach(i=>{this._classList[i]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(i=>{this._classList[i]=!0}),this._elementRef.nativeElement.className="")}get classList(){return this.panelClass}set classList(e){this.panelClass=e}constructor(e,n,i,o){this._elementRef=e,this._ngZone=n,this._changeDetectorRef=o,this._directDescendantItems=new t.QueryList,this._classList={},this._panelAnimationState="void",this._animationDone=new b.x,this.closed=new t.EventEmitter,this.close=this.closed,this.panelId="mat-menu-panel-"+te++,this.overlayPanelClass=i.overlayPanelClass||"",this._xPosition=i.xPosition,this._yPosition=i.yPosition,this.backdropClass=i.backdropClass,this._overlapTrigger=i.overlapTrigger,this._hasBackdrop=i.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new f.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe((0,O.O)(this._directDescendantItems),(0,k.w)(e=>(0,y.T)(...e.map(n=>n._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{const n=this._keyManager;if("enter"===this._panelAnimationState&&n.activeItem?._hasFocus()){const i=e.toArray(),o=Math.max(0,Math.min(i.length-1,n.activeItemIndex||0));i[o]&&!i[o].disabled?n.setActiveItem(o):n.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusSubscription?.unsubscribe()}_hovered(){return this._directDescendantItems.changes.pipe((0,O.O)(this._directDescendantItems),(0,k.w)(n=>(0,y.T)(...n.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){const n=e.keyCode,i=this._keyManager;switch(n){case _.hY:(0,_.Vb)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case _.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case _.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:return(n===_.LH||n===_.JH)&&i.setFocusOrigin("keyboard"),void i.onKeydown(e)}e.stopPropagation()}focusFirstItem(e="program"){this._firstItemFocusSubscription?.unsubscribe(),this._firstItemFocusSubscription=this._ngZone.onStable.pipe((0,c.q)(1)).subscribe(()=>{let n=null;if(this._directDescendantItems.length&&(n=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),!n||!n.contains(document.activeElement)){const i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&n&&n.focus()}})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){const n=Math.min(this._baseElevation+e,24),i=`${this._elevationPrefix}${n}`,o=Object.keys(this._classList).find(u=>u.startsWith(this._elevationPrefix));(!o||o===this._previousElevation)&&(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}setPositionClasses(e=this.xPosition,n=this.yPosition){const i=this._classList;i["mat-menu-before"]="before"===e,i["mat-menu-after"]="after"===e,i["mat-menu-above"]="above"===n,i["mat-menu-below"]="below"===n,this._changeDetectorRef?.markForCheck()}_startAnimation(){this._panelAnimationState="enter"}_resetAnimation(){this._panelAnimationState="void"}_onAnimationDone(e){this._animationDone.next(e),this._isAnimating=!1}_onAnimationStart(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}_updateDirectDescendants(){this._allItems.changes.pipe((0,O.O)(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(n=>n._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}}return s.\u0275fac=function(e){return new(e||s)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(F),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},s.\u0275dir=t.\u0275\u0275defineDirective({type:s,contentQueries:function(e,n,i){if(1&e&&(t.\u0275\u0275contentQuery(i,ee,5),t.\u0275\u0275contentQuery(i,A,5),t.\u0275\u0275contentQuery(i,A,4)),2&e){let o;t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n.lazyContent=o.first),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n._allItems=o),t.\u0275\u0275queryRefresh(o=t.\u0275\u0275loadQuery())&&(n.items=o)}},viewQuery:function(e,n){if(1&e&&t.\u0275\u0275viewQuery(t.TemplateRef,5),2&e){let i;t.\u0275\u0275queryRefresh(i=t.\u0275\u0275loadQuery())&&(n.templateRef=i.first)}},inputs:{backdropClass:"backdropClass",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"}}),s})(),ie=(()=>{class s extends I{constructor(e,n,i,o){super(e,n,i,o),this._elevationPrefix="mat-elevation-z",this._baseElevation=8}}return s.\u0275fac=function(e){return new(e||s)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(F),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},s.\u0275cmp=t.\u0275\u0275defineComponent({type:s,selectors:[["mat-menu"]],hostAttrs:["ngSkipHydration",""],hostVars:3,hostBindings:function(e,n){2&e&&t.\u0275\u0275attribute("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[t.\u0275\u0275ProvidersFeature([{provide:L,useExisting:s}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:J,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel","mdc-menu-surface","mdc-menu-surface--open","mat-mdc-elevation-specific",3,"id","ngClass","keydown","click"],[1,"mat-mdc-menu-content","mdc-list"]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275template(0,$,3,6,"ng-template"))},dependencies:[g.mk],styles:['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mdc-list-item__primary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{--mat-menu-container-shape:4px;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;position:relative}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item.mdc-list-item{align-items:center}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item .mdc-list-item__primary-text{white-space:normal}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],encapsulation:2,data:{animation:[S.transformMenu,S.fadeInItems]},changeDetection:0}),s})();const U=new t.InjectionToken("mat-menu-scroll-strategy"),se={provide:U,deps:[B.aV],useFactory:function oe(s){return()=>s.scrollStrategies.reposition()}},K=(0,Y.i$)({passive:!0});let ae=(()=>{class s{get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(n=>{this._destroyMenu(n),("click"===n||"tab"===n)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(n)})),this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))}constructor(e,n,i,o,u,M,v,C,D){this._overlay=e,this._element=n,this._viewContainerRef=i,this._menuItemInstance=M,this._dir=v,this._focusMonitor=C,this._ngZone=D,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=E.w0.EMPTY,this._hoverSubscription=E.w0.EMPTY,this._menuCloseSubscription=E.w0.EMPTY,this._changeDetectorRef=(0,t.inject)(t.ChangeDetectorRef),this._handleTouchStart=T=>{(0,f.yG)(T)||(this._openedBy="touch")},this._openedBy=void 0,this.restoreFocus=!0,this.menuOpened=new t.EventEmitter,this.onMenuOpen=this.menuOpened,this.menuClosed=new t.EventEmitter,this.onMenuClose=this.menuClosed,this._scrollStrategy=o,this._parentMaterialMenu=u instanceof I?u:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,K)}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,K),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this.menu)}toggleMenu(){return this._menuOpen?this.closeMenu():this.openMenu()}openMenu(){const e=this.menu;if(this._menuOpen||!e)return;const n=this._createOverlay(e),i=n.getConfig(),o=i.positionStrategy;this._setPosition(e,o),i.hasBackdrop=null==e.hasBackdrop?!this.triggersSubmenu():e.hasBackdrop,n.attach(this._getPortal(e)),e.lazyContent&&e.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this.closeMenu()),this._initMenu(e),e instanceof I&&(e._startAnimation(),e._directDescendantItems.changes.pipe((0,h.R)(e.close)).subscribe(()=>{o.withLockedPosition(!1).reapplyLastPosition(),o.withLockedPosition(!0)}))}closeMenu(){this.menu?.close.emit()}focus(e,n){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}updatePosition(){this._overlayRef?.updatePosition()}_destroyMenu(e){if(!this._overlayRef||!this.menuOpen)return;const n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this.restoreFocus&&("keydown"===e||!this._openedBy||!this.triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,n instanceof I?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,l.h)(i=>"void"===i.toState),(0,c.q)(1),(0,h.R)(n.lazyContent._attached)).subscribe({next:()=>n.lazyContent.detach(),complete:()=>this._setIsMenuOpen(!1)}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n?.lazyContent?.detach())}_initMenu(e){e.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,this._setMenuElevation(e),e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}_setMenuElevation(e){if(e.setElevation){let n=0,i=e.parentMenu;for(;i;)n++,i=i.parentMenu;e.setElevation(n)}}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){const n=this._getOverlayConfig(e);this._subscribeToPositions(e,n.positionStrategy),this._overlayRef=this._overlay.create(n),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}_getOverlayConfig(e){return new B.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}_subscribeToPositions(e,n){e.setPositionClasses&&n.positionChanges.subscribe(i=>{const o="start"===i.connectionPair.overlayX?"after":"before",u="top"===i.connectionPair.overlayY?"below":"above";this._ngZone?this._ngZone.run(()=>e.setPositionClasses(o,u)):e.setPositionClasses(o,u)})}_setPosition(e,n){let[i,o]="before"===e.xPosition?["end","start"]:["start","end"],[u,M]="above"===e.yPosition?["bottom","top"]:["top","bottom"],[v,C]=[u,M],[D,T]=[i,o],P=0;if(this.triggersSubmenu()){if(T=i="before"===e.xPosition?"start":"end",o=D="end"===i?"start":"end",this._parentMaterialMenu){if(null==this._parentInnerPadding){const N=this._parentMaterialMenu.items.first;this._parentInnerPadding=N?N._getHostElement().offsetTop:0}P="bottom"===u?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(v="top"===u?"bottom":"top",C="top"===M?"bottom":"top");n.withPositions([{originX:i,originY:v,overlayX:D,overlayY:u,offsetY:P},{originX:o,originY:v,overlayX:T,overlayY:u,offsetY:P},{originX:i,originY:C,overlayX:D,overlayY:M,offsetY:-P},{originX:o,originY:C,overlayX:T,overlayY:M,offsetY:-P}])}_menuClosingActions(){const e=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,w.of)(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,l.h)(u=>u!==this._menuItemInstance),(0,l.h)(()=>this._menuOpen)):(0,w.of)();return(0,y.T)(e,i,o,n)}_handleMousedown(e){(0,f.X6)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){const n=e.keyCode;(n===_.K5||n===_.L_)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(n===_.SV&&"ltr"===this.dir||n===_.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){!this.triggersSubmenu()||!this._parentMaterialMenu||(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,l.h)(e=>e===this._menuItemInstance&&!e.disabled),(0,d.g)(0,x.E)).subscribe(()=>{this._openedBy="mouse",this.menu instanceof I&&this.menu._isAnimating?this.menu._animationDone.pipe((0,c.q)(1),(0,d.g)(0,x.E),(0,h.R)(this._parentMaterialMenu._hovered())).subscribe(()=>this.openMenu()):this.openMenu()}))}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new W.UE(e.templateRef,this._viewContainerRef)),this._portal}}return s.\u0275fac=function(e){return new(e||s)(t.\u0275\u0275directiveInject(B.aV),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(U),t.\u0275\u0275directiveInject(L,8),t.\u0275\u0275directiveInject(A,10),t.\u0275\u0275directiveInject(V.Is,8),t.\u0275\u0275directiveInject(f.tE),t.\u0275\u0275directiveInject(t.NgZone))},s.\u0275dir=t.\u0275\u0275defineDirective({type:s,hostVars:3,hostBindings:function(e,n){1&e&&t.\u0275\u0275listener("click",function(o){return n._handleClick(o)})("mousedown",function(o){return n._handleMousedown(o)})("keydown",function(o){return n._handleKeydown(o)}),2&e&&t.\u0275\u0275attribute("aria-haspopup",n.menu?"menu":null)("aria-expanded",n.menuOpen)("aria-controls",n.menuOpen?n.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"],restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),s})(),re=(()=>{class s extends ae{}return s.\u0275fac=function(){let r;return function(n){return(r||(r=t.\u0275\u0275getInheritedFactory(s)))(n||s)}}(),s.\u0275dir=t.\u0275\u0275defineDirective({type:s,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],exportAs:["matMenuTrigger"],features:[t.\u0275\u0275InheritDefinitionFeature]}),s})(),ce=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=t.\u0275\u0275defineInjector({providers:[se],imports:[g.ez,p.si,p.BQ,B.U8,Q.ZD,p.BQ]}),s})()},1274:(H,j,a)=>{a.d(j,{Ye:()=>x,g0:()=>k});var t=a(5879),f=a(3680),R=a(2831),_=a(6814);const b=["*",[["mat-toolbar-row"]]],y=["*","mat-toolbar-row"],E=(0,f.pj)(class{constructor(c){this._elementRef=c}});let w=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275dir=t.\u0275\u0275defineDirective({type:c,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),c})(),x=(()=>{class c extends E{constructor(l,d,p){super(l),this._platform=d,this._document=p}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return c.\u0275fac=function(l){return new(l||c)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(R.t4),t.\u0275\u0275directiveInject(_.K0))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["mat-toolbar"]],contentQueries:function(l,d,p){if(1&l&&t.\u0275\u0275contentQuery(p,w,5),2&l){let g;t.\u0275\u0275queryRefresh(g=t.\u0275\u0275loadQuery())&&(d._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(l,d){2&l&&t.\u0275\u0275classProp("mat-toolbar-multiple-rows",d._toolbarRows.length>0)("mat-toolbar-single-row",0===d._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:y,decls:2,vars:0,template:function(l,d){1&l&&(t.\u0275\u0275projectionDef(b),t.\u0275\u0275projection(0),t.\u0275\u0275projection(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"],encapsulation:2,changeDetection:0}),c})(),k=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=t.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=t.\u0275\u0275defineInjector({imports:[f.BQ,f.BQ]}),c})()}}]);