(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[5693],{8378:(e,t,i)=>{"use strict";i.d(t,{P3:()=>h,o2:()=>l,Ov:()=>u,yy:()=>c,eX:()=>d,k:()=>_,Z9:()=>a});var n=i(4710),r=i(878),s=i(5959),o=i(5366);class l{}function a(e){return e&&"function"==typeof e.connect}class h extends l{constructor(e){super(),this._data=e}connect(){return(0,n.b)(this._data)?this._data:(0,r.of)(this._data)}disconnect(){}}class c{applyChanges(e,t,i,n,r){e.forEachOperation((e,n,s)=>{let o,l;if(null==e.previousIndex){const r=i(e,n,s);o=t.createEmbeddedView(r.templateRef,r.context,r.index),l=1}else null==s?(t.remove(n),l=3):(o=t.get(n),t.move(o,s),l=2);r&&r({context:null==o?void 0:o.context,operation:l,record:e})})}detach(){}}class d{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,t,i,n,r){e.forEachOperation((e,s,o)=>{let l,a;null==e.previousIndex?(l=this._insertView(()=>i(e,s,o),o,t,n(e)),a=l?1:0):null==o?(this._detachAndCacheView(s,t),a=3):(l=this._moveView(s,o,t,n(e)),a=2),r&&r({context:null==l?void 0:l.context,operation:a,record:e})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,i,n){const r=this._insertViewFromCache(t,i);if(r)return void(r.context.$implicit=n);const s=e();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(e,t){const i=t.detach(e);this._maybeCacheView(i,t)}_moveView(e,t,i,n){const r=i.get(e);return i.move(r,t),r.context.$implicit=n,r}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const i=t.indexOf(e);-1===i?e.destroy():t.remove(i)}}_insertViewFromCache(e,t){const i=this._viewCache.pop();return i&&t.insert(i,e),i||null}}class u{constructor(e=!1,t,i=!0){this._multiple=e,this._emitChanges=i,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new s.xQ,t&&t.length&&(e?t.forEach(e=>this._markSelected(e)):this._markSelected(t[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...e){this._verifyValueAssignment(e),e.forEach(e=>this._markSelected(e)),this._emitChangeEvent()}deselect(...e){this._verifyValueAssignment(e),e.forEach(e=>this._unmarkSelected(e)),this._emitChangeEvent()}toggle(e){this.isSelected(e)?this.deselect(e):this.select(e)}clear(){this._unmarkAll(),this._emitChangeEvent()}isSelected(e){return this._selection.has(e)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){this.isSelected(e)||(this._multiple||this._unmarkAll(),this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}}const _=new o.InjectionToken("_ViewRepeater")},5693:(e,t,i)=>{"use strict";i.d(t,{xd:()=>j,PQ:()=>A,ZD:()=>Q,x0:()=>Z,N7:()=>W,mF:()=>F,Cl:()=>H,rL:()=>L});var n=i(9861),r=i(5366),s=i(8277);class o extends s.o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,i=0){return null!==i&&i>0?super.requestAsyncId(e,t,i):(e.actions.push(this),e.scheduled||(e.scheduled=requestAnimationFrame(()=>e.flush(null))))}recycleAsyncId(e,t,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(e,t,i);0===e.actions.length&&(cancelAnimationFrame(t),e.scheduled=void 0)}}var l=i(1098);class a extends l.v{flush(e){this.active=!0,this.scheduled=void 0;const{actions:t}=this;let i,n=-1,r=t.length;e=e||t.shift();do{if(i=e.execute(e.state,e.delay))break}while(++n<r&&(e=t.shift()));if(this.active=!1,i){for(;++n<r&&(e=t.shift());)e.unsubscribe();throw i}}}const h=new a(o);var c=i(5959),d=i(878),u=i(8318),_=i(7254),f=i(2709),p=i(7570),g=i(4710),m=i(6673);class v{call(e,t){return t.subscribe(new w(e))}}class w extends m.L{constructor(e){super(e),this.hasPrev=!1}_next(e){let t;this.hasPrev?t=[this.prev,e]:this.hasPrev=!0,this.prev=e,t&&this.destination.next(t)}}var C=i(8720),S=i(4574),x=i(3835),b=i(5416),k=i(6238),R=i(4689),y=i(8303),z=i(3169),V=i(1116),I=i(4720),T=i(8378);const O=["contentWrapper"],E=["*"],P=new r.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class D{constructor(e,t,i){this._scrolledIndexChange=new c.xQ,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,C.x)()),this._viewport=null,this._itemSize=e,this._minBufferPx=t,this._maxBufferPx=i}attach(e){this._viewport=e,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(e,t,i){this._itemSize=e,this._minBufferPx=t,this._maxBufferPx=i,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(e,t){this._viewport&&this._viewport.scrollToOffset(e*this._itemSize,t)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const e=this._viewport.getRenderedRange(),t={start:e.start,end:e.end},i=this._viewport.getViewportSize(),n=this._viewport.getDataLength();let r=this._viewport.measureScrollOffset(),s=this._itemSize>0?r/this._itemSize:0;if(t.end>n){const e=Math.ceil(i/this._itemSize),o=Math.max(0,Math.min(s,n-e));s!=o&&(s=o,r=o*this._itemSize,t.start=Math.floor(s)),t.end=Math.max(0,Math.min(n,t.start+e))}const o=r-t.start*this._itemSize;if(o<this._minBufferPx&&0!=t.start){const e=Math.ceil((this._maxBufferPx-o)/this._itemSize);t.start=Math.max(0,t.start-e),t.end=Math.min(n,Math.ceil(s+(i+this._minBufferPx)/this._itemSize))}else{const e=t.end*this._itemSize-(r+i);if(e<this._minBufferPx&&t.end!=n){const i=Math.ceil((this._maxBufferPx-e)/this._itemSize);i>0&&(t.end=Math.min(n,t.end+i),t.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(t),this._viewport.setRenderedContentOffset(this._itemSize*t.start),this._scrolledIndexChange.next(Math.floor(s))}}function B(e){return e._scrollStrategy}let j=(()=>{class e{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new D(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,n.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,n.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,n.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[r["\u0275\u0275ProvidersFeature"]([{provide:P,useFactory:B,deps:[(0,r.forwardRef)(()=>e)]}]),r["\u0275\u0275NgOnChangesFeature"]]}),e})(),F=(()=>{class e{constructor(e,t,i){this._ngZone=e,this._platform=t,this._scrolled=new c.xQ,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new u.y(t=>{this._globalSubscription||this._addGlobalListener();const i=e>0?this._scrolled.pipe((0,S.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,d.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,x.h)(e=>!e||i.indexOf(e)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((i,n)=>{this._scrollableContainsElement(n,e)&&t.push(n)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let i=(0,n.fI)(t),r=e.getElementRef().nativeElement;do{if(i==r)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,_.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.NgZone),r["\u0275\u0275inject"](z.t4),r["\u0275\u0275inject"](V.K0,8))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](r.NgZone),r["\u0275\u0275inject"](z.t4),r["\u0275\u0275inject"](V.K0,8))},token:e,providedIn:"root"}),e})(),A=(()=>{class e{constructor(e,t,i,n){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=i,this.dir=n,this._destroyed=new c.xQ,this._elementScrolled=new u.y(e=>this.ngZone.runOutsideAngular(()=>(0,_.R)(this.elementRef.nativeElement,"scroll").pipe((0,b.R)(this._destroyed)).subscribe(e)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=i?e.end:e.start),null==e.right&&(e.right=i?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&0!=(0,z._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,z._i)()?e.left=e.right:1==(0,z._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,z.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",i="right",n=this.elementRef.nativeElement;if("top"==e)return n.scrollTop;if("bottom"==e)return n.scrollHeight-n.clientHeight-n.scrollTop;const r=this.dir&&"rtl"==this.dir.value;return"start"==e?e=r?i:t:"end"==e&&(e=r?t:i),r&&2==(0,z._i)()?e==t?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:r&&1==(0,z._i)()?e==t?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:e==t?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](F),r["\u0275\u0275directiveInject"](r.NgZone),r["\u0275\u0275directiveInject"](I.Is,8))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),e})(),L=(()=>{class e{constructor(e,t,i){this._platform=e,this._change=new c.xQ,this._changeListener=e=>{this._change.next(e)},this._document=i,t.runOutsideAngular(()=>{if(e.isBrowser){const e=this._getWindow();e.addEventListener("resize",this._changeListener),e.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._updateViewportSize())})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),i=e.documentElement,n=i.getBoundingClientRect();return{top:-n.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,left:-n.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,S.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](z.t4),r["\u0275\u0275inject"](r.NgZone),r["\u0275\u0275inject"](V.K0,8))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](z.t4),r["\u0275\u0275inject"](r.NgZone),r["\u0275\u0275inject"](V.K0,8))},token:e,providedIn:"root"}),e})();const N="undefined"!=typeof requestAnimationFrame?h:f.E;let W=(()=>{class e extends A{constructor(e,t,i,n,r,s,o){super(e,s,i,r),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=n,this._detachedSubject=new c.xQ,this._renderedRangeSubject=new c.xQ,this._orientation="vertical",this.scrolledIndexChange=new u.y(e=>this._scrollStrategy.scrolledIndexChange.subscribe(t=>Promise.resolve().then(()=>this.ngZone.run(()=>e.next(t))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=p.w.EMPTY,this._viewportChanges=o.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe((0,k.O)(null),(0,S.e)(0,N)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,b.R)(this._detachedSubject)).subscribe(e=>{const t=e.length;t!==this._dataLength&&(this._dataLength=t,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){var t,i;((t=this._renderedRange).start!=(i=e).start||t.end!=i.end)&&(this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){const i="horizontal"==this.orientation,n=i?"X":"Y";let r=`translate${n}(${Number((i&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(r+=` translate${n}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=r&&(this._renderedContentTransform=r,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const i={behavior:t};"horizontal"===this.orientation?i.start=e:i.top=e,this.scrollTo(i)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){return super.measureScrollOffset(e||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const e=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?e.clientWidth:e.clientHeight}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](r.NgZone),r["\u0275\u0275directiveInject"](P,8),r["\u0275\u0275directiveInject"](I.Is,8),r["\u0275\u0275directiveInject"](F),r["\u0275\u0275directiveInject"](L))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,t){if(1&e&&r["\u0275\u0275viewQuery"](O,7),2&e){let e;r["\u0275\u0275queryRefresh"](e=r["\u0275\u0275loadQuery"]())&&(t._contentWrapper=e.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,t){2&e&&r["\u0275\u0275classProp"]("cdk-virtual-scroll-orientation-horizontal","horizontal"===t.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==t.orientation)},inputs:{orientation:"orientation"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[r["\u0275\u0275ProvidersFeature"]([{provide:A,useExisting:e}]),r["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:E,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,t){1&e&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275elementStart"](0,"div",0,1),r["\u0275\u0275projection"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](3,"div",2)),2&e&&(r["\u0275\u0275advance"](3),r["\u0275\u0275styleProp"]("width",t._totalContentWidth)("height",t._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),e})();function M(e,t,i){if(!i.getBoundingClientRect)return 0;const n=i.getBoundingClientRect();return"horizontal"===e?"start"===t?n.left:n.right:"start"===t?n.top:n.bottom}let Z=(()=>{class e{constructor(e,t,i,n,r,s){this._viewContainerRef=e,this._template=t,this._differs=i,this._viewRepeater=n,this._viewport=r,this.viewChange=new c.xQ,this._dataSourceChanges=new c.xQ,this.dataStream=this._dataSourceChanges.pipe((0,k.O)(null),e=>e.lift(new v),(0,R.w)(([e,t])=>this._changeDataSource(e,t)),(0,y.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new c.xQ,this.dataStream.subscribe(e=>{this._data=e,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,b.R)(this._destroyed)).subscribe(e=>{this._renderedRange=e,s.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,T.Z9)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new T.P3((0,g.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,i)=>e(t+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,n.su)(e)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const i=e.start-this._renderedRange.start,n=e.end-e.start;let r,s;for(let o=0;o<n;o++){const e=this._viewContainerRef.get(o+i);if(e&&e.rootNodes.length){r=s=e.rootNodes[0];break}}for(let o=n-1;o>-1;o--){const e=this._viewContainerRef.get(o+i);if(e&&e.rootNodes.length){s=e.rootNodes[e.rootNodes.length-1];break}}return r&&s?M(t,"end",s)-M(t,"start",r):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,d.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const i=this._viewContainerRef.get(t);i.context.index=this._renderedRange.start+t,i.context.count=e,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(e,t,i)=>this._getEmbeddedViewArgs(e,i),e=>e.item),e.forEachIdentityChange(e=>{this._viewContainerRef.get(e.currentIndex).context.$implicit=e.item});const t=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const e=this._viewContainerRef.get(i);e.context.index=this._renderedRange.start+i,e.context.count=t,this._updateComputedContextProperties(e.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](r.IterableDiffers),r["\u0275\u0275directiveInject"](T.k),r["\u0275\u0275directiveInject"](W,4),r["\u0275\u0275directiveInject"](r.NgZone))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[r["\u0275\u0275ProvidersFeature"]([{provide:T.k,useClass:T.eX}])]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[I.vT,z.ud,Q],I.vT,Q]}),e})()},4574:(e,t,i)=>{"use strict";i.d(t,{e:()=>u});var n=i(8569),r=i(6882);class s{constructor(e){this.durationSelector=e}call(e,t){return t.subscribe(new o(e,this.durationSelector))}}class o extends r.Ds{constructor(e,t){super(e),this.durationSelector=t,this.hasValue=!1}_next(e){if(this.value=e,this.hasValue=!0,!this.throttled){let i;try{const{durationSelector:t}=this;i=t(e)}catch(t){return this.destination.error(t)}const n=(0,r.ft)(i,new r.IY(this));!n||n.closed?this.clearThrottle():this.add(this.throttled=n)}}clearThrottle(){const{value:e,hasValue:t,throttled:i}=this;i&&(this.remove(i),this.throttled=void 0,i.unsubscribe()),t&&(this.value=void 0,this.hasValue=!1,this.destination.next(e))}notifyNext(){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}var l=i(8318),a=i(8470);function h(e){return!(0,a.k)(e)&&e-parseFloat(e)+1>=0}var c=i(6163);function d(e){const{index:t,period:i,subscriber:n}=e;if(n.next(t),!n.closed){if(-1===i)return n.complete();e.index=t+1,this.schedule(e,i)}}function u(e,t=n.P){return i=()=>function(e=0,t,i){let r=-1;return h(t)?r=Number(t)<1?1:Number(t):(0,c.K)(t)&&(i=t),(0,c.K)(i)||(i=n.P),new l.y(t=>{const n=h(e)?e:+e-i.now();return i.schedule(d,n,{index:0,period:r,subscriber:t})})}(e,t),function(e){return e.lift(new s(i))};var i}},2709:(e,t,i)=>{"use strict";i.d(t,{E:()=>u});let n=1;const r=(()=>Promise.resolve())(),s={};function o(e){return e in s&&(delete s[e],!0)}const l={setImmediate(e){const t=n++;return s[t]=!0,r.then(()=>o(t)&&e()),t},clearImmediate(e){o(e)}};var a=i(8277);class h extends a.o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,i=0){return null!==i&&i>0?super.requestAsyncId(e,t,i):(e.actions.push(this),e.scheduled||(e.scheduled=l.setImmediate(e.flush.bind(e,null))))}recycleAsyncId(e,t,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(e,t,i);0===e.actions.length&&(l.clearImmediate(t),e.scheduled=void 0)}}var c=i(1098);class d extends c.v{flush(e){this.active=!0,this.scheduled=void 0;const{actions:t}=this;let i,n=-1,r=t.length;e=e||t.shift();do{if(i=e.execute(e.state,e.delay))break}while(++n<r&&(e=t.shift()));if(this.active=!1,i){for(;++n<r&&(e=t.shift());)e.unsubscribe();throw i}}}const u=new d(h)},4710:(e,t,i)=>{"use strict";i.d(t,{b:()=>r});var n=i(8318);function r(e){return!!e&&(e instanceof n.y||"function"==typeof e.lift&&"function"==typeof e.subscribe)}}}]);