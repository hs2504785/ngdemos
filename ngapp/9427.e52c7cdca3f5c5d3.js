"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[9427],{3101:(N,I,d)=>{d.d(I,{E:()=>j});var R=d(4408);let S,s=1;const C={};function E(a){return a in C&&(delete C[a],!0)}const z={setImmediate(a){const l=s++;return C[l]=!0,S||(S=Promise.resolve()),S.then(()=>E(l)&&a()),l},clearImmediate(a){E(a)}},{setImmediate:F,clearImmediate:V}=z,O={setImmediate(...a){const{delegate:l}=O;return(l?.setImmediate||F)(...a)},clearImmediate(a){const{delegate:l}=O;return(l?.clearImmediate||V)(a)},delegate:void 0};var P=d(7565);const j=new class T extends P.v{flush(l){this._active=!0;const c=this._scheduled;this._scheduled=void 0;const{actions:u}=this;let f;l=l||u.shift();do{if(f=l.execute(l.state,l.delay))break}while((l=u[0])&&l.id===c&&u.shift());if(this._active=!1,f){for(;(l=u[0])&&l.id===c&&u.shift();)l.unsubscribe();throw f}}}(class A extends R.o{constructor(l,c){super(l,c),this.scheduler=l,this.work=c}requestAsyncId(l,c,u=0){return null!==u&&u>0?super.requestAsyncId(l,c,u):(l.actions.push(this),l._scheduled||(l._scheduled=O.setImmediate(l.flush.bind(l,void 0))))}recycleAsyncId(l,c,u=0){var f;if(null!=u?u>0:this.delay>0)return super.recycleAsyncId(l,c,u);const{actions:_}=l;null!=c&&(null===(f=_[_.length-1])||void 0===f?void 0:f.id)!==c&&(O.clearImmediate(c),l._scheduled=void 0)}})},5191:(N,I,d)=>{d.d(I,{b:()=>S});var R=d(9751),s=d(576);function S(C){return!!C&&(C instanceof R.y||(0,s.m)(C.lift)&&(0,s.m)(C.subscribe))}},5017:(N,I,d)=>{d.d(I,{A8:()=>T,Ov:()=>A,P3:()=>F,Z9:()=>B,eX:()=>O,k:()=>j,o2:()=>z,yy:()=>V});var R=d(4033),s=d(5191),S=d(9646),C=d(7579),E=d(4650);class z{}function B(v){return v&&"function"==typeof v.connect&&!(v instanceof R.c)}class F extends z{constructor(a){super(),this._data=a}connect(){return(0,s.b)(this._data)?this._data:(0,S.of)(this._data)}disconnect(){}}class V{applyChanges(a,l,c,u,f){a.forEachOperation((_,b,x)=>{let w,y;if(null==_.previousIndex){const k=c(_,b,x);w=l.createEmbeddedView(k.templateRef,k.context,k.index),y=1}else null==x?(l.remove(b),y=3):(w=l.get(b),l.move(w,x),y=2);f&&f({context:w?.context,operation:y,record:_})})}detach(){}}class O{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(a,l,c,u,f){a.forEachOperation((_,b,x)=>{let w,y;null==_.previousIndex?(w=this._insertView(()=>c(_,b,x),x,l,u(_)),y=w?1:0):null==x?(this._detachAndCacheView(b,l),y=3):(w=this._moveView(b,x,l,u(_)),y=2),f&&f({context:w?.context,operation:y,record:_})})}detach(){for(const a of this._viewCache)a.destroy();this._viewCache=[]}_insertView(a,l,c,u){const f=this._insertViewFromCache(l,c);if(f)return void(f.context.$implicit=u);const _=a();return c.createEmbeddedView(_.templateRef,_.context,_.index)}_detachAndCacheView(a,l){const c=l.detach(a);this._maybeCacheView(c,l)}_moveView(a,l,c,u){const f=c.get(a);return c.move(f,l),f.context.$implicit=u,f}_maybeCacheView(a,l){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(a);else{const c=l.indexOf(a);-1===c?a.destroy():l.remove(c)}}_insertViewFromCache(a,l){const c=this._viewCache.pop();return c&&l.insert(c,a),c||null}}class A{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(a=!1,l,c=!0,u){this._multiple=a,this._emitChanges=c,this.compareWith=u,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new C.x,l&&l.length&&(a?l.forEach(f=>this._markSelected(f)):this._markSelected(l[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(c=>this._markSelected(c));const l=this._hasQueuedChanges();return this._emitChangeEvent(),l}deselect(...a){this._verifyValueAssignment(a),a.forEach(c=>this._unmarkSelected(c));const l=this._hasQueuedChanges();return this._emitChangeEvent(),l}setSelection(...a){this._verifyValueAssignment(a);const l=this.selected,c=new Set(a);a.forEach(f=>this._markSelected(f)),l.filter(f=>!c.has(f)).forEach(f=>this._unmarkSelected(f));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();const l=this._hasQueuedChanges();return a&&this._emitChangeEvent(),l}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(a){if(this.compareWith){for(let l of this._selection)if(this.compareWith(a,l))return l;return a}return a}}let T=(()=>{class v{constructor(){this._listeners=[]}notify(l,c){for(let u of this._listeners)u(l,c)}listen(l){return this._listeners.push(l),()=>{this._listeners=this._listeners.filter(c=>l!==c)}}ngOnDestroy(){this._listeners=[]}}return v.\u0275fac=function(l){return new(l||v)},v.\u0275prov=E.\u0275\u0275defineInjectable({token:v,factory:v.\u0275fac,providedIn:"root"}),v})();const j=new E.InjectionToken("_ViewRepeater")},9427:(N,I,d)=>{d.d(I,{xd:()=>se,PQ:()=>U,ZD:()=>H,x0:()=>he,N7:()=>Z,mF:()=>W,Cl:()=>ue,rL:()=>$});var R=d(1281),s=d(4650),S=d(7579),C=d(9646),E=d(9751),z=d(4968),B=d(4408),F=d(727);const V={schedule(o){let n=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:t}=V;t&&(n=t.requestAnimationFrame,e=t.cancelAnimationFrame);const i=n(r=>{e=void 0,o(r)});return new F.w0(()=>e?.(i))},requestAnimationFrame(...o){const{delegate:n}=V;return(n?.requestAnimationFrame||requestAnimationFrame)(...o)},cancelAnimationFrame(...o){const{delegate:n}=V;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...o)},delegate:void 0};var A=d(7565);const T=new class P extends A.v{flush(n){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let i;n=n||t.shift();do{if(i=n.execute(n.state,n.delay))break}while((n=t[0])&&n.id===e&&t.shift());if(this._active=!1,i){for(;(n=t[0])&&n.id===e&&t.shift();)n.unsubscribe();throw i}}}(class O extends B.o{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,t=0){return null!==t&&t>0?super.requestAsyncId(n,e,t):(n.actions.push(this),n._scheduled||(n._scheduled=V.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,t=0){var i;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(n,e,t);const{actions:r}=n;null!=e&&(null===(i=r[r.length-1])||void 0===i?void 0:i.id)!==e&&(V.cancelAnimationFrame(e),n._scheduled=void 0)}});var v=d(3101),a=d(5191),l=d(1884),c=d(4986),u=d(4482),f=d(8421),_=d(5403),x=d(2805);function w(o,n=c.z){return function b(o){return(0,u.e)((n,e)=>{let t=!1,i=null,r=null,h=!1;const p=()=>{if(r?.unsubscribe(),r=null,t){t=!1;const m=i;i=null,e.next(m)}h&&e.complete()},g=()=>{r=null,h&&e.complete()};n.subscribe((0,_.x)(e,m=>{t=!0,i=m,r||(0,f.Xf)(o(m)).subscribe(r=(0,_.x)(e,p,g))},()=>{h=!0,(!t||!r||r.closed)&&e.complete()}))})}(()=>(0,x.H)(o,n))}var y=d(9300),k=d(2722),G=d(8675),q=d(3900),ee=d(4782),D=d(3353),K=d(6895),M=d(445),L=d(5017);const te=["contentWrapper"],ie=["*"],Q=new s.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class ne{constructor(n,e,t){this._scrolledIndexChange=new S.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,l.x)()),this._viewport=null,this._itemSize=n,this._minBufferPx=e,this._maxBufferPx=t}attach(n){this._viewport=n,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(n,e,t){this._itemSize=n,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(n,e){this._viewport&&this._viewport.scrollToOffset(n*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const n=this._viewport.getRenderedRange(),e={start:n.start,end:n.end},t=this._viewport.getViewportSize(),i=this._viewport.getDataLength();let r=this._viewport.measureScrollOffset(),h=this._itemSize>0?r/this._itemSize:0;if(e.end>i){const g=Math.ceil(t/this._itemSize),m=Math.max(0,Math.min(h,i-g));h!=m&&(h=m,r=m*this._itemSize,e.start=Math.floor(h)),e.end=Math.max(0,Math.min(i,e.start+g))}const p=r-e.start*this._itemSize;if(p<this._minBufferPx&&0!=e.start){const g=Math.ceil((this._maxBufferPx-p)/this._itemSize);e.start=Math.max(0,e.start-g),e.end=Math.min(i,Math.ceil(h+(t+this._minBufferPx)/this._itemSize))}else{const g=e.end*this._itemSize-(r+t);if(g<this._minBufferPx&&e.end!=i){const m=Math.ceil((this._maxBufferPx-g)/this._itemSize);m>0&&(e.end=Math.min(i,e.end+m),e.start=Math.max(0,Math.floor(h-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(h))}}function re(o){return o._scrollStrategy}let se=(()=>{class o{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ne(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,R.su)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,R.su)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,R.su)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275dir=s.\u0275\u0275defineDirective({type:o,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[s.\u0275\u0275ProvidersFeature([{provide:Q,useFactory:re,deps:[(0,s.forwardRef)(()=>o)]}]),s.\u0275\u0275NgOnChangesFeature]}),o})(),W=(()=>{class o{constructor(e,t,i){this._ngZone=e,this._platform=t,this._scrolled=new S.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new E.y(t=>{this._globalSubscription||this._addGlobalListener();const i=e>0?this._scrolled.pipe(w(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,C.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,y.h)(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let i=(0,R.fI)(t),r=e.getElementRef().nativeElement;do{if(i==r)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,z.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(D.t4),s.\u0275\u0275inject(K.K0,8))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),U=(()=>{class o{constructor(e,t,i,r){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=i,this.dir=r,this._destroyed=new S.x,this._elementScrolled=new E.y(h=>this.ngZone.runOutsideAngular(()=>(0,z.R)(this.elementRef.nativeElement,"scroll").pipe((0,k.R)(this._destroyed)).subscribe(h)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=i?e.end:e.start),null==e.right&&(e.right=i?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&0!=(0,D._i)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,D._i)()?e.left=e.right:1==(0,D._i)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,D.Mq)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",i="right",r=this.elementRef.nativeElement;if("top"==e)return r.scrollTop;if("bottom"==e)return r.scrollHeight-r.clientHeight-r.scrollTop;const h=this.dir&&"rtl"==this.dir.value;return"start"==e?e=h?i:t:"end"==e&&(e=h?t:i),h&&2==(0,D._i)()?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:h&&1==(0,D._i)()?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(W),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(M.Is,8))},o.\u0275dir=s.\u0275\u0275defineDirective({type:o,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),o})(),$=(()=>{class o{constructor(e,t,i){this._platform=e,this._change=new S.x,this._changeListener=r=>{this._change.next(r)},this._document=i,t.runOutsideAngular(()=>{if(e.isBrowser){const r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect();return{top:-r.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,left:-r.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(w(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(D.t4),s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(K.K0,8))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const Y=new s.InjectionToken("VIRTUAL_SCROLLABLE");let ae=(()=>{class o extends U{constructor(e,t,i,r){super(e,t,i,r)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(W),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(M.Is,8))},o.\u0275dir=s.\u0275\u0275defineDirective({type:o,features:[s.\u0275\u0275InheritDefinitionFeature]}),o})();const de=typeof requestAnimationFrame<"u"?T:v.E;let Z=(()=>{class o extends ae{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,R.Ig)(e)}constructor(e,t,i,r,h,p,g,m){super(e,p,i,h),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=r,this.scrollable=m,this._platform=(0,s.inject)(D.t4),this._detachedSubject=new S.x,this._renderedRangeSubject=new S.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new E.y(fe=>this._scrollStrategy.scrolledIndexChange.subscribe(ge=>Promise.resolve().then(()=>this.ngZone.run(()=>fe.next(ge))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=F.w0.EMPTY,this._viewportChanges=g.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,G.O)(null),w(0,de)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,k.R)(this._detachedSubject)).subscribe(t=>{const i=t.length;i!==this._dataLength&&(this._dataLength=i,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function ce(o,n){return o.start==n.start&&o.end==n.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const r="horizontal"==this.orientation,h=r?"X":"Y";let g=`translate${h}(${Number((r&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(g+=` translate${h}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=g&&(this._renderedContentTransform=g,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const i={behavior:t};"horizontal"===this.orientation?i.start=e:i.top=e,this.scrollable.scrollTo(i)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?i=>super.measureScrollOffset(i):i=>this.scrollable.measureScrollOffset(i),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const i="left",r="right",h="rtl"==this.dir?.value;t="start"==e?h?r:i:"end"==e?h?i:r:e||("horizontal"===this.orientation?"left":"top");const p=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-p}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275directiveInject(s.ElementRef),s.\u0275\u0275directiveInject(s.ChangeDetectorRef),s.\u0275\u0275directiveInject(s.NgZone),s.\u0275\u0275directiveInject(Q,8),s.\u0275\u0275directiveInject(M.Is,8),s.\u0275\u0275directiveInject(W),s.\u0275\u0275directiveInject($),s.\u0275\u0275directiveInject(Y,8))},o.\u0275cmp=s.\u0275\u0275defineComponent({type:o,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,t){if(1&e&&s.\u0275\u0275viewQuery(te,7),2&e){let i;s.\u0275\u0275queryRefresh(i=s.\u0275\u0275loadQuery())&&(t._contentWrapper=i.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,t){2&e&&s.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===t.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==t.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[s.\u0275\u0275ProvidersFeature([{provide:U,useFactory:(n,e)=>n||e,deps:[[new s.Optional,new s.Inject(Y)],o]}]),s.\u0275\u0275InheritDefinitionFeature,s.\u0275\u0275StandaloneFeature],ngContentSelectors:ie,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,t){1&e&&(s.\u0275\u0275projectionDef(),s.\u0275\u0275elementStart(0,"div",0,1),s.\u0275\u0275projection(2),s.\u0275\u0275elementEnd(),s.\u0275\u0275element(3,"div",2)),2&e&&(s.\u0275\u0275advance(3),s.\u0275\u0275styleProp("width",t._totalContentWidth)("height",t._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),o})();function X(o,n,e){if(!e.getBoundingClientRect)return 0;const i=e.getBoundingClientRect();return"horizontal"===o?"start"===n?i.left:i.right:"start"===n?i.top:i.bottom}let he=(()=>{class o{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,L.Z9)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new L.P3((0,a.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,i)=>e(t+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,R.su)(e)}constructor(e,t,i,r,h,p){this._viewContainerRef=e,this._template=t,this._differs=i,this._viewRepeater=r,this._viewport=h,this.viewChange=new S.x,this._dataSourceChanges=new S.x,this.dataStream=this._dataSourceChanges.pipe((0,G.O)(null),function J(){return(0,u.e)((o,n)=>{let e,t=!1;o.subscribe((0,_.x)(n,i=>{const r=e;e=i,t&&n.next([r,i]),t=!0}))})}(),(0,q.w)(([g,m])=>this._changeDataSource(g,m)),(0,ee.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new S.x,this.dataStream.subscribe(g=>{this._data=g,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,k.R)(this._destroyed)).subscribe(g=>{this._renderedRange=g,this.viewChange.observers.length&&p.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const i=e.start-this._renderedRange.start,r=e.end-e.start;let h,p;for(let g=0;g<r;g++){const m=this._viewContainerRef.get(g+i);if(m&&m.rootNodes.length){h=p=m.rootNodes[0];break}}for(let g=r-1;g>-1;g--){const m=this._viewContainerRef.get(g+i);if(m&&m.rootNodes.length){p=m.rootNodes[m.rootNodes.length-1];break}}return h&&p?X(t,"end",p)-X(t,"start",h):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,C.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const i=this._viewContainerRef.get(t);i.context.index=this._renderedRange.start+t,i.context.count=e,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(r,h,p)=>this._getEmbeddedViewArgs(r,p),r=>r.item),e.forEachIdentityChange(r=>{this._viewContainerRef.get(r.currentIndex).context.$implicit=r.item});const t=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const r=this._viewContainerRef.get(i);r.context.index=this._renderedRange.start+i,r.context.count=t,this._updateComputedContextProperties(r.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275directiveInject(s.ViewContainerRef),s.\u0275\u0275directiveInject(s.TemplateRef),s.\u0275\u0275directiveInject(s.IterableDiffers),s.\u0275\u0275directiveInject(L.k),s.\u0275\u0275directiveInject(Z,4),s.\u0275\u0275directiveInject(s.NgZone))},o.\u0275dir=s.\u0275\u0275defineDirective({type:o,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[s.\u0275\u0275ProvidersFeature([{provide:L.k,useClass:L.eX}])]}),o})(),H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({}),o})(),ue=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({imports:[M.vT,H,Z,M.vT,H]}),o})()}}]);