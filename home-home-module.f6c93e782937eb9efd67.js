(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0MNC":function(t,e,r){"use strict";r.d(e,"a",function(){return T}),r.d(e,"b",function(){return j});var a=r("fXoL"),n=r("8LU1"),i=r("XNiG"),o=r("itXk"),c=r("GyhO"),d=r("HDdC"),s=r("IzEk"),m=r("7o/Q");class l{constructor(t){this.total=t}call(t,e){return e.subscribe(new u(t,this.total))}}class u extends m.a{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}var h=r("Kj3r"),b=r("lJxs"),p=r("JX91"),f=r("1G5W"),g=r("nLfN");const x=new Set;let w,y=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):v}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!x.has(t))try{w||(w=document.createElement("style"),w.setAttribute("type","text/css"),document.head.appendChild(w)),w.sheet&&(w.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),x.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275fac=function(e){return new(e||t)(a.Yb(g.a))},t.\u0275prov=Object(a.Kb)({factory:function(){return new t(Object(a.Yb)(g.a))},token:t,providedIn:"root"}),t})();function v(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let T=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new i.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return _(Object(n.b)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=_(Object(n.b)(t)).map(t=>this._registerQuery(t).observable);let r=Object(o.a)(e);return r=Object(c.a)(r.pipe(Object(s.a)(1)),r.pipe(t=>t.lift(new l(1)),Object(h.a)(0))),r.pipe(Object(b.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(({matches:t,query:r})=>{e.matches=e.matches||t,e.breakpoints[r]=t}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),r={observable:new d.a(t=>{const r=e=>this._zone.run(()=>t.next(e));return e.addListener(r),()=>{e.removeListener(r)}}).pipe(Object(p.a)(e),Object(b.a)(({matches:e})=>({query:t,matches:e})),Object(f.a)(this._destroySubject)),mql:e};return this._queries.set(t,r),r}}return t.\u0275fac=function(e){return new(e||t)(a.Yb(y),a.Yb(a.B))},t.\u0275prov=Object(a.Kb)({factory:function(){return new t(Object(a.Yb)(y),Object(a.Yb)(a.B))},token:t,providedIn:"root"}),t})();function _(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}const j={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},"1G5W":function(t,e,r){"use strict";r.d(e,"a",function(){return n});var a=r("zx2A");function n(t){return e=>e.lift(new i(t))}class i{constructor(t){this.notifier=t}call(t,e){const r=new o(t),n=Object(a.c)(this.notifier,new a.a(r));return n&&!r.seenValue?(r.add(n),e.subscribe(r)):r}}class o extends a.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}},"8LU1":function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return n}),r.d(e,"d",function(){return d}),r.d(e,"e",function(){return s}),r.d(e,"f",function(){return i});var a=r("fXoL");function n(t){return null!=t&&"false"!=`${t}`}function i(t,e=0){return o(t)?Number(t):e}function o(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function c(t){return Array.isArray(t)?t:[t]}function d(t){return null==t?"":"string"==typeof t?t:`${t}px`}function s(t){return t instanceof a.l?t.nativeElement:t}},cH1L:function(t,e,r){"use strict";r.d(e,"a",function(){return d}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return o});var a=r("fXoL"),n=r("ofXK");const i=new a.s("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(a.X)(n.d)}});let o=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new a.o,t){const e=t.documentElement?t.documentElement.dir:null,r=(t.body?t.body.dir:null)||e;this.value="ltr"===r||"rtl"===r?r:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(a.Yb(i,8))},t.\u0275prov=Object(a.Kb)({factory:function(){return new t(Object(a.Yb)(i,8))},token:t,providedIn:"root"}),t})(),c=(()=>{class t{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new a.o}get dir(){return this._dir}set dir(t){const e=this._dir,r=t?t.toLowerCase():t;this._rawDir=t,this._dir="ltr"===r||"rtl"===r?r:"ltr",e!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=a.Jb({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(t,e){2&t&&a.Eb("dir",e._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[a.Cb([{provide:o,useExisting:t}])]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({}),t})()},"ct+p":function(t,e,r){"use strict";r.r(e),r.d(e,"HomeModule",function(){return y});var a=r("ofXK"),n=r("tyNb"),i=r("lJxs"),o=r("0MNC"),c=r("fXoL"),d=r("R1ws"),s=r("FKr1");const m=["*",[["mat-card-footer"]]],l=["*","mat-card-footer"],u=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],h=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=c.Jb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),p=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(d.a,8))},t.\u0275cmp=c.Ib({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&c.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:l,decls:2,vars:0,template:function(t,e){1&t&&(c.jc(m),c.ic(0),c.ic(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:h,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(c.jc(u),c.ic(0),c.Ub(1,"div",0),c.ic(2,1),c.Tb(),c.ic(3,2))},encapsulation:2,changeDetection:0}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[s.f],s.f]}),t})();const x=[{path:"",component:(()=>{class t{constructor(t){this.breakpointObserver=t,this.cards=this.breakpointObserver.observe(o.b.Handset).pipe(Object(i.a)(({matches:t})=>t?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(o.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-home"]],decls:49,vars:0,consts:[[1,"container"],[1,"dashboard-cards"],["href","https://hs2504785.github.io/rxdb-demo/home","target","_blank"],["routerLink","/todos"],["routerLink","/tree"],["routerLink","/virtual-scroll"],["routerLink","/intersection-observer"],["routerLink","/performance"],["routerLink","/treegrid"],["routerLink","/demos"],["routerLink","/table"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"h1"),c.zc(2,"Dashboard"),c.Tb(),c.Ub(3,"div",1),c.Ub(4,"mat-card"),c.Ub(5,"mat-card-header"),c.Ub(6,"mat-card-title"),c.Ub(7,"a",2),c.zc(8,"Rxdb Demo"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(9,"mat-card"),c.Ub(10,"mat-card-header"),c.Ub(11,"mat-card-title"),c.Ub(12,"a",3),c.zc(13,"Todos (NgRx)"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(14,"mat-card"),c.Ub(15,"mat-card-header"),c.Ub(16,"mat-card-title"),c.Ub(17,"a",4),c.zc(18,"Tree"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(19,"mat-card"),c.Ub(20,"mat-card-header"),c.Ub(21,"mat-card-title"),c.Ub(22,"a",5),c.zc(23,"Virtual Scroll"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(24,"mat-card"),c.Ub(25,"mat-card-header"),c.Ub(26,"mat-card-title"),c.Ub(27,"a",6),c.zc(28,"Intersection Observer"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(29,"mat-card"),c.Ub(30,"mat-card-header"),c.Ub(31,"mat-card-title"),c.Ub(32,"a",7),c.zc(33,"Performance"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(34,"mat-card"),c.Ub(35,"mat-card-header"),c.Ub(36,"mat-card-title"),c.Ub(37,"a",8),c.zc(38,"Expandable Table"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(39,"mat-card"),c.Ub(40,"mat-card-header"),c.Ub(41,"mat-card-title"),c.Ub(42,"a",9),c.zc(43,"Demos"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(44,"mat-card"),c.Ub(45,"mat-card-header"),c.Ub(46,"mat-card-title"),c.Ub(47,"a",10),c.zc(48,"Table"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb())},directives:[p,f,b,n.g],styles:[".dashboard-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;align-content:center}.mat-card-header[_ngcontent-%COMP%]{align-items:center;justify-content:center}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{margin-bottom:0}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[n.h.forChild(x)],n.h]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[a.c,w,g]]}),t})()},nLfN:function(t,e,r){"use strict";r.d(e,"a",function(){return m}),r.d(e,"b",function(){return l}),r.d(e,"c",function(){return p}),r.d(e,"d",function(){return b}),r.d(e,"e",function(){return u}),r.d(e,"f",function(){return h});var a=r("fXoL"),n=r("ofXK");let i;try{i="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(f){i=!1}let o,c,d,s,m=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(n.t)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!i)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(a.Yb(a.D))},t.\u0275prov=Object(a.Kb)({factory:function(){return new t(Object(a.Yb)(a.D))},token:t,providedIn:"root"}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Mb({type:t}),t.\u0275inj=a.Lb({}),t})();function u(t){return function(){if(null==o&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>o=!0}))}finally{o=o||!1}return o}()?t:!!t.capture}function h(){if(null==d){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return d=!1,d;if("scrollBehavior"in document.documentElement.style)d=!0;else{const t=Element.prototype.scrollTo;d=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return d}function b(){if("object"!=typeof document||!document)return 0;if(null==c){const t=document.createElement("div"),e=t.style;t.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";const r=document.createElement("div"),a=r.style;a.width="2px",a.height="1px",t.appendChild(r),document.body.appendChild(t),c=0,0===t.scrollLeft&&(t.scrollLeft=1,c=0===t.scrollLeft?1:2),t.parentNode.removeChild(t)}return c}function p(t){if(function(){if(null==s){const t="undefined"!=typeof document?document.head:null;s=!(!t||!t.createShadowRoot&&!t.attachShadow)}return s}()){const e=t.getRootNode?t.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}}}]);