(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+UqO":function(t,n,e){"use strict";e.r(n),e.d(n,"IntersectionObserverModule",function(){return Q});var i=e("ofXK"),c=e("tyNb"),o=e("mrSG"),r=e("SIQg"),s=e("oXA7"),a=e("sj3c"),b=e("dLTe"),u=function(t){return t.Visible="Visible",t.Pending="Pending",t.NotVisible="NotVisible",t}({});const l=(t,n,e=0)=>new r.a(i=>{const c=new s.a,r=new IntersectionObserver((t,n)=>{t.forEach(t=>{(function(t){return t.isIntersecting||t.intersectionRatio>0})(t)&&c.next({entry:t,observer:n})})},n);return c.subscribe(()=>{i.next(u.Pending)}),c.pipe(Object(a.a)(e),Object(b.a)(Boolean)).subscribe(({entry:t,observer:n})=>Object(o.a)(void 0,void 0,void 0,function*(){(yield function(t){return Object(o.a)(this,void 0,void 0,function*(){return new Promise(n=>{const e=new IntersectionObserver(([t])=>{n(t.isIntersecting),e.disconnect()});e.observe(t)})})}(t.target))?(i.next(u.Visible),n.unobserve(t.target)):i.next(u.NotVisible)})),r.observe(t),{unsubscribe(){r.disconnect(),c.unsubscribe()}}});var d=e("fXoL"),f=e("iiaH"),h=e("bk9D");let g=(()=>{class t{constructor(t){this.element=t,this.intersectionDebounce=0,this.intersectionRootMargin="0px",this.visibilityChange=new d.o,this.destroy$=new s.a}ngOnInit(){l(this.element.nativeElement,{root:this.intersectionRoot,rootMargin:this.intersectionRootMargin,threshold:this.intersectionThreshold},this.intersectionDebounce).pipe(Object(h.a)(this.destroy$)).subscribe(t=>{this.visibilityChange.emit(t)})}ngOnDestroy(){this.destroy$.next()}}return t.\u0275fac=function(n){return new(n||t)(d.Ob(d.l))},t.\u0275dir=d.Jb({type:t,selectors:[["","intersectionObserver",""]],inputs:{intersectionDebounce:"intersectionDebounce",intersectionRootMargin:"intersectionRootMargin",intersectionRoot:"intersectionRoot",intersectionThreshold:"intersectionThreshold"},outputs:{visibilityChange:"visibilityChange"}}),t})();var p=e("vxfF");function m(t,n){if(1&t&&(d.Sb(0),d.Ub(1,"div",6),d.yc(2,"Section 1 - Get list of todos \u2705"),d.Tb(),d.Ub(3,"div",7),d.Ub(4,"pre"),d.yc(5),d.gc(6,"json"),d.gc(7,"async"),d.Tb(),d.Tb(),d.Rb()),2&t){const t=d.fc();d.Db(5),d.zc(d.hc(6,1,d.hc(7,3,t.todos$)))}}function v(t,n){if(1&t&&(d.Sb(0),d.Qb(1,8),d.Rb()),2&t){d.fc();const t=d.oc(28);d.Db(1),d.kc("ngTemplateOutlet",t)}}function y(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function w(t,n){if(1&t&&(d.Sb(0),d.Ub(1,"div",6),d.yc(2,"Section 2 - Posts \u2705"),d.Tb(),d.Ub(3,"div",7),d.Ub(4,"pre"),d.yc(5),d.gc(6,"json"),d.gc(7,"async"),d.Tb(),d.Tb(),d.Rb()),2&t){const t=d.fc();d.Db(5),d.zc(d.hc(6,1,d.hc(7,3,t.posts$)))}}function S(t,n){if(1&t&&(d.Sb(0),d.Qb(1,8),d.Rb()),2&t){d.fc();const t=d.oc(28);d.Db(1),d.kc("ngTemplateOutlet",t)}}function D(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function T(t,n){if(1&t&&(d.Sb(0),d.Ub(1,"div",6),d.yc(2,"Section 3 - Comments \u2705"),d.Tb(),d.Ub(3,"div",7),d.Ub(4,"pre"),d.yc(5),d.gc(6,"json"),d.gc(7,"async"),d.Tb(),d.Tb(),d.Rb()),2&t){const t=d.fc();d.Db(5),d.zc(d.hc(6,1,d.hc(7,3,t.comments$)))}}function C(t,n){if(1&t&&(d.Sb(0),d.Qb(1,8),d.Rb()),2&t){d.fc();const t=d.oc(28);d.Db(1),d.kc("ngTemplateOutlet",t)}}function k(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function U(t,n){if(1&t&&(d.Sb(0),d.Ub(1,"div",6),d.yc(2,"Section 4 - Albums \u2705"),d.Tb(),d.Ub(3,"div",7),d.Ub(4,"pre"),d.yc(5),d.gc(6,"json"),d.gc(7,"async"),d.Tb(),d.Tb(),d.Rb()),2&t){const t=d.fc();d.Db(5),d.zc(d.hc(6,1,d.hc(7,3,t.albums$)))}}function x(t,n){if(1&t&&(d.Sb(0),d.Qb(1,8),d.Rb()),2&t){d.fc();const t=d.oc(28);d.Db(1),d.kc("ngTemplateOutlet",t)}}function O(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function R(t,n){if(1&t&&(d.Ub(0,"li",13),d.Ub(1,"h2"),d.yc(2),d.Tb(),d.Ub(3,"pre"),d.yc(4),d.gc(5,"json"),d.Tb(),d.Tb()),2&t){const t=n.$implicit;d.Db(2),d.zc(t.title),d.Db(2),d.zc(d.hc(5,2,t))}}function I(t,n){if(1&t&&(d.Sb(0),d.Ub(1,"div",6),d.yc(2),d.Tb(),d.Ub(3,"div",7),d.Ub(4,"cdk-virtual-scroll-viewport",10),d.Ub(5,"ul",11),d.wc(6,R,6,4,"li",12),d.Tb(),d.Tb(),d.Tb(),d.Rb()),2&t){const t=n.ngIf;d.Db(2),d.Ac(" Section 5 - Photos (",t.length," records) \u2705 "),d.Db(4),d.kc("cdkVirtualForOf",t)}}function P(t,n){if(1&t&&(d.Sb(0),d.wc(1,I,7,2,"ng-container",9),d.gc(2,"async"),d.Rb()),2&t){const t=d.fc();d.Db(1),d.kc("ngIf",d.hc(2,1,t.photos$))}}function j(t,n){if(1&t&&(d.Sb(0),d.Qb(1,8),d.Rb()),2&t){d.fc();const t=d.oc(28);d.Db(1),d.kc("ngTemplateOutlet",t)}}function E(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function N(t,n){if(1&t&&(d.Sb(0),d.Ub(1,"div",6),d.yc(2,"Section 6 - Users \u2705"),d.Tb(),d.Ub(3,"div",7),d.Ub(4,"pre"),d.yc(5),d.gc(6,"json"),d.gc(7,"async"),d.Tb(),d.Tb(),d.Rb()),2&t){const t=d.fc();d.Db(5),d.zc(d.hc(6,1,d.hc(7,3,t.users$)))}}function V(t,n){if(1&t&&(d.Sb(0),d.Qb(1,8),d.Rb()),2&t){d.fc();const t=d.oc(28);d.Db(1),d.kc("ngTemplateOutlet",t)}}function L(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function B(t,n){1&t&&(d.ec(),d.Ub(0,"svg",14),d.Ub(1,"circle",15),d.Pb(2,"animate",16),d.Pb(3,"animate",17),d.Tb(),d.Ub(4,"circle",18),d.Pb(5,"animate",19),d.Pb(6,"animate",20),d.Tb(),d.Ub(7,"circle",21),d.Pb(8,"animate",16),d.Pb(9,"animate",17),d.Tb(),d.Tb())}let M=(()=>{class t{constructor(t){this.dataService=t,this.visibilityStatus={},this.intersectionStatus=u}ngOnInit(){this.todos$=this.dataService.getTodos(),this.posts$=this.dataService.getPosts(),this.comments$=this.dataService.getComments(),this.albums$=this.dataService.getAlbums(),this.photos$=this.dataService.getPhotos(),this.users$=this.dataService.getUsers()}onVisibilityChanged(t,n){this.visibilityStatus[t]=n}}return t.\u0275fac=function(n){return new(n||t)(d.Ob(f.a))},t.\u0275cmp=d.Ib({type:t,selectors:[["app-demo"]],decls:29,vars:24,consts:[[1,"container-fluid"],["intersectionObserver","",1,"card","border-primary","mb-3",3,"intersectionDebounce","ngSwitch","visibilityChange"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["intersectionObserver","",1,"card","border-success","mb-3",3,"intersectionDebounce","ngSwitch","visibilityChange"],["loading",""],[1,"card-header"],[1,"card-body","text-primary"],[3,"ngTemplateOutlet"],[4,"ngIf"],["itemSize","231",1,"photos-viewport"],[1,"list-group"],["class","list-group-item photo",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"list-group-item","photo"],["width","120","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#2196F3"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(t,n){1&t&&(d.Ub(0,"div",0),d.Ub(1,"h1"),d.yc(2,"Load Component on scroll"),d.Tb(),d.Ub(3,"div",1),d.bc("visibilityChange",function(t){return n.onVisibilityChanged("todos",t)}),d.wc(4,m,8,5,"ng-container",2),d.wc(5,v,2,1,"ng-container",2),d.wc(6,y,2,0,"ng-container",3),d.Tb(),d.Ub(7,"div",4),d.bc("visibilityChange",function(t){return n.onVisibilityChanged("posts",t)}),d.wc(8,w,8,5,"ng-container",2),d.wc(9,S,2,1,"ng-container",2),d.wc(10,D,2,0,"ng-container",3),d.Tb(),d.Ub(11,"div",4),d.bc("visibilityChange",function(t){return n.onVisibilityChanged("comments",t)}),d.wc(12,T,8,5,"ng-container",2),d.wc(13,C,2,1,"ng-container",2),d.wc(14,k,2,0,"ng-container",3),d.Tb(),d.Ub(15,"div",4),d.bc("visibilityChange",function(t){return n.onVisibilityChanged("albums",t)}),d.wc(16,U,8,5,"ng-container",2),d.wc(17,x,2,1,"ng-container",2),d.wc(18,O,2,0,"ng-container",3),d.Tb(),d.Ub(19,"div",4),d.bc("visibilityChange",function(t){return n.onVisibilityChanged("photos",t)}),d.wc(20,P,3,3,"ng-container",2),d.wc(21,j,2,1,"ng-container",2),d.wc(22,E,2,0,"ng-container",3),d.Tb(),d.Ub(23,"div",4),d.bc("visibilityChange",function(t){return n.onVisibilityChanged("users",t)}),d.wc(24,N,8,5,"ng-container",2),d.wc(25,V,2,1,"ng-container",2),d.wc(26,L,2,0,"ng-container",3),d.Tb(),d.Tb(),d.wc(27,B,10,0,"ng-template",null,5,d.xc)),2&t&&(d.Db(3),d.kc("intersectionDebounce",0)("ngSwitch",n.visibilityStatus.todos),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Pending),d.Db(2),d.kc("intersectionDebounce",0)("ngSwitch",n.visibilityStatus.posts),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Pending),d.Db(2),d.kc("intersectionDebounce",0)("ngSwitch",n.visibilityStatus.comments),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Pending),d.Db(2),d.kc("intersectionDebounce",0)("ngSwitch",n.visibilityStatus.albums),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Pending),d.Db(2),d.kc("intersectionDebounce",500)("ngSwitch",n.visibilityStatus.photos),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Pending),d.Db(2),d.kc("intersectionDebounce",0)("ngSwitch",n.visibilityStatus.users),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",n.intersectionStatus.Pending))},directives:[g,i.m,i.n,i.o,i.p,i.l,p.e,p.a,p.d],pipes:[i.f,i.b],styles:[".card[_ngcontent-%COMP%]{height:100vh;overflow-y:auto}.photos-viewport[_ngcontent-%COMP%]{height:300px;overflow-y:auto;outline:4px solid #ff0}"],changeDetection:0}),t})();function A(t,n){1&t&&(d.Sb(0),d.yc(1," \u2705 "),d.Rb())}function $(t,n){if(1&t&&(d.Sb(0),d.Qb(1,10),d.Rb()),2&t){d.fc(2);const t=d.oc(5);d.Db(1),d.kc("ngTemplateOutlet",t)}}function _(t,n){1&t&&(d.Sb(0),d.yc(1," \u274c "),d.Rb())}function F(t,n){if(1&t){const t=d.Vb();d.Sb(0),d.Ub(1,"div",3),d.bc("visibilityChange",function(e){d.qc(t);const i=n.$implicit;return d.fc().onVisibilityChanged(i,e)}),d.Ub(2,"div",4),d.Ub(3,"div",5),d.Ub(4,"div",6),d.yc(5),d.Tb(),d.Ub(6,"div",7),d.wc(7,A,2,0,"ng-container",8),d.wc(8,$,2,1,"ng-container",8),d.wc(9,_,2,0,"ng-container",9),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Rb()}if(2&t){const t=n.$implicit,e=d.fc();d.Db(1),d.kc("intersectionDebounce",0),d.Db(4),d.Ac(" ",t," "),d.Db(1),d.kc("ngSwitch",e.visibilityStatus[t]),d.Db(1),d.kc("ngSwitchCase",e.intersectionStatus.Visible),d.Db(1),d.kc("ngSwitchCase",e.intersectionStatus.Pending)}}function z(t,n){1&t&&(d.ec(),d.Ub(0,"svg",11),d.Ub(1,"circle",12),d.Pb(2,"animate",13),d.Pb(3,"animate",14),d.Tb(),d.Ub(4,"circle",15),d.Pb(5,"animate",16),d.Pb(6,"animate",17),d.Tb(),d.Ub(7,"circle",18),d.Pb(8,"animate",13),d.Pb(9,"animate",14),d.Tb(),d.Tb())}const K=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Ib({type:t,selectors:[["app-intersection-observer"]],decls:6,vars:0,consts:[[1,"m-2","d-flex","justify-content-center"],["routerLink","sample","routerLinkActive","active",1,"btn","btn-outline-success","mr-2"],["routerLink","demo","routerLinkActive","active",1,"btn","btn-outline-warning"]],template:function(t,n){1&t&&(d.Ub(0,"header",0),d.Ub(1,"a",1),d.yc(2,"Sample"),d.Tb(),d.Ub(3,"a",2),d.yc(4,"Demo"),d.Tb(),d.Tb(),d.Pb(5,"router-outlet"))},directives:[c.g,c.f,c.i],styles:[""]}),t})(),children:[{path:"sample",component:(()=>{class t{constructor(){this.list=[],this.visibilityStatus={},this.intersectionStatus=u}ngOnInit(){const t=[];for(let n=0;n<1e3;n++)t.push(n);this.list=t}onVisibilityChanged(t,n){this.visibilityStatus[t]=n}trackByIndex(t){return t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d.Ib({type:t,selectors:[["app-sample"]],decls:6,vars:2,consts:[[1,"p-2"],[4,"ngFor","ngForOf","ngForTrackBy"],["loading",""],["intersectionObserver","",1,"max-w-sm","rounded","overflow-hidden","shadow-lg","px-5","py-5","m-2",3,"intersectionDebounce","visibilityChange"],[1,"px-3","py-1","text-sm","font-semibold","text-gray-700","mr-2"],[1,"flex"],[1,"flex-grow","content-center","text-6xl","font-sans"],[1,"flex-grow","flex-end","content-center","self-center","text-6xl","font-sans",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"ngTemplateOutlet"],["width","120","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#2196F3"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(t,n){1&t&&(d.Ub(0,"div",0),d.Ub(1,"h1"),d.yc(2,"Sample with 1000 records"),d.Tb(),d.wc(3,F,10,5,"ng-container",1),d.Tb(),d.wc(4,z,10,0,"ng-template",null,2,d.xc)),2&t&&(d.Db(3),d.kc("ngForOf",n.list)("ngForTrackBy",n.trackByIndex))},directives:[i.k,g,i.m,i.n,i.o,i.p],styles:[""]}),t})(),pathMatch:"full"},{path:"demo",component:M,pathMatch:"full"},{path:"",redirectTo:"sample"}]}];let X=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({imports:[[c.h.forChild(K)],c.h]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({imports:[[i.c,p.g,X]]}),t})()},"8LU1":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return a}),e.d(n,"e",function(){return b}),e.d(n,"f",function(){return o});var i=e("fXoL");function c(t){return null!=t&&"false"!=`${t}`}function o(t,n=0){return r(t)?Number(t):n}function r(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function s(t){return Array.isArray(t)?t:[t]}function a(t){return null==t?"":"string"==typeof t?t:`${t}px`}function b(t){return t instanceof i.l?t.nativeElement:t}},cH1L:function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return s}),e.d(n,"c",function(){return r});var i=e("fXoL"),c=e("ofXK");const o=new i.s("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(i.X)(c.d)}});let r=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new i.o,t){const n=t.documentElement?t.documentElement.dir:null,e=(t.body?t.body.dir:null)||n;this.value="ltr"===e||"rtl"===e?e:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(n){return new(n||t)(i.Yb(o,8))},t.\u0275prov=Object(i.Kb)({factory:function(){return new t(Object(i.Yb)(o,8))},token:t,providedIn:"root"}),t})(),s=(()=>{class t{constructor(){this._dir="ltr",this._isInitialized=!1,this.change=new i.o}get dir(){return this._dir}set dir(t){const n=this._dir,e=t?t.toLowerCase():t;this._rawDir=t,this._dir="ltr"===e||"rtl"===e?e:"ltr",n!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=i.Jb({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(t,n){2&t&&i.Eb("dir",n._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[i.Cb([{provide:r,useExisting:t}])]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({}),t})()},nLfN:function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"b",function(){return l}),e.d(n,"c",function(){return g}),e.d(n,"d",function(){return h}),e.d(n,"e",function(){return d}),e.d(n,"f",function(){return f});var i=e("fXoL"),c=e("ofXK");let o;try{o="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(p){o=!1}let r,s,a,b,u=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Object(c.t)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!o)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(n){return new(n||t)(i.Yb(i.D))},t.\u0275prov=Object(i.Kb)({factory:function(){return new t(Object(i.Yb)(i.D))},token:t,providedIn:"root"}),t})(),l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({}),t})();function d(t){return function(){if(null==r&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>r=!0}))}finally{r=r||!1}return r}()?t:!!t.capture}function f(){if(null==a){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return a=!1,a;if("scrollBehavior"in document.documentElement.style)a=!0;else{const t=Element.prototype.scrollTo;a=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return a}function h(){if("object"!=typeof document||!document)return 0;if(null==s){const t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";const e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),s=0,0===t.scrollLeft&&(t.scrollLeft=1,s=0===t.scrollLeft?1:2),t.parentNode.removeChild(t)}return s}function g(t){if(function(){if(null==b){const t="undefined"!=typeof document?document.head:null;b=!(!t||!t.createShadowRoot&&!t.attachShadow)}return b}()){const n=t.getRootNode?t.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}},sj3c:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var i=e("Jlqm"),c=e("EPzc"),o=e("xt23");function r(t,n=i.b){return Object(c.b)((e,i)=>{let c=null,r=null,s=null;const a=()=>{if(c){c.unsubscribe(),c=null;const t=r;r=null,i.next(t)}};function b(){const e=s+t,i=n.now();i<e?c=this.schedule(void 0,e-i):a()}e.subscribe(new o.a(i,e=>{r=e,s=n.now(),c||(c=n.schedule(b,t))},()=>{a(),i.complete()},void 0,()=>{r=c=null}))})}}}]);