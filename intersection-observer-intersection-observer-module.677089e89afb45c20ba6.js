(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+UqO":function(t,e,i){"use strict";i.r(e),i.d(e,"IntersectionObserverModule",function(){return J});var n=i("ofXK"),c=i("tyNb");function s(t,e,i,n){return new(i||(i=Promise))(function(c,s){function o(t){try{b(n.next(t))}catch(e){s(e)}}function r(t){try{b(n.throw(t))}catch(e){s(e)}}function b(t){var e;t.done?c(t.value):(e=t.value,e instanceof i?e:new i(function(t){t(e)})).then(o,r)}b((n=n.apply(t,e||[])).next())})}var o=i("HDdC"),r=i("XNiG"),b=i("Kj3r"),a=i("pLZG"),u=function(t){return t.Visible="Visible",t.Pending="Pending",t.NotVisible="NotVisible",t}({});const l=(t,e,i=0)=>new o.a(n=>{const c=new r.a,o=new IntersectionObserver((t,e)=>{t.forEach(t=>{(function(t){return t.isIntersecting||t.intersectionRatio>0})(t)&&c.next({entry:t,observer:e})})},e);return c.subscribe(()=>{n.next(u.Pending)}),c.pipe(Object(b.a)(i),Object(a.a)(Boolean)).subscribe(({entry:t,observer:e})=>s(void 0,void 0,void 0,function*(){(yield function(t){return s(this,void 0,void 0,function*(){return new Promise(e=>{const i=new IntersectionObserver(([t])=>{e(t.isIntersecting),i.disconnect()});i.observe(t)})})}(t.target))?(n.next(u.Visible),e.unobserve(t.target)):n.next(u.NotVisible)})),o.observe(t),{unsubscribe(){o.disconnect(),c.unsubscribe()}}});var h=i("fXoL"),d=i("iiaH"),g=i("1G5W");let f=(()=>{class t{constructor(t){this.element=t,this.intersectionDebounce=0,this.intersectionRootMargin="0px",this.visibilityChange=new h.o,this.destroy$=new r.a}ngOnInit(){l(this.element.nativeElement,{root:this.intersectionRoot,rootMargin:this.intersectionRootMargin,threshold:this.intersectionThreshold},this.intersectionDebounce).pipe(Object(g.a)(this.destroy$)).subscribe(t=>{this.visibilityChange.emit(t)})}ngOnDestroy(){this.destroy$.next()}}return t.\u0275fac=function(e){return new(e||t)(h.Ob(h.l))},t.\u0275dir=h.Jb({type:t,selectors:[["","intersectionObserver",""]],inputs:{intersectionDebounce:"intersectionDebounce",intersectionRootMargin:"intersectionRootMargin",intersectionRoot:"intersectionRoot",intersectionThreshold:"intersectionThreshold"},outputs:{visibilityChange:"visibilityChange"}}),t})();var p=i("vxfF");function v(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",6),h.yc(2,"Section 1 - Get list of todos \u2705"),h.Tb(),h.Ub(3,"div",7),h.Ub(4,"pre"),h.yc(5),h.gc(6,"json"),h.gc(7,"async"),h.Tb(),h.Tb(),h.Rb()),2&t){const t=h.fc();h.Db(5),h.zc(h.hc(6,1,h.hc(7,3,t.todos$)))}}function m(t,e){if(1&t&&(h.Sb(0),h.Qb(1,8),h.Rb()),2&t){h.fc();const t=h.oc(28);h.Db(1),h.kc("ngTemplateOutlet",t)}}function y(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function w(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",6),h.yc(2,"Section 2 - Posts \u2705"),h.Tb(),h.Ub(3,"div",7),h.Ub(4,"pre"),h.yc(5),h.gc(6,"json"),h.gc(7,"async"),h.Tb(),h.Tb(),h.Rb()),2&t){const t=h.fc();h.Db(5),h.zc(h.hc(6,1,h.hc(7,3,t.posts$)))}}function S(t,e){if(1&t&&(h.Sb(0),h.Qb(1,8),h.Rb()),2&t){h.fc();const t=h.oc(28);h.Db(1),h.kc("ngTemplateOutlet",t)}}function T(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function D(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",6),h.yc(2,"Section 3 - Comments \u2705"),h.Tb(),h.Ub(3,"div",7),h.Ub(4,"pre"),h.yc(5),h.gc(6,"json"),h.gc(7,"async"),h.Tb(),h.Tb(),h.Rb()),2&t){const t=h.fc();h.Db(5),h.zc(h.hc(6,1,h.hc(7,3,t.comments$)))}}function C(t,e){if(1&t&&(h.Sb(0),h.Qb(1,8),h.Rb()),2&t){h.fc();const t=h.oc(28);h.Db(1),h.kc("ngTemplateOutlet",t)}}function U(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function k(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",6),h.yc(2,"Section 4 - Albums \u2705"),h.Tb(),h.Ub(3,"div",7),h.Ub(4,"pre"),h.yc(5),h.gc(6,"json"),h.gc(7,"async"),h.Tb(),h.Tb(),h.Rb()),2&t){const t=h.fc();h.Db(5),h.zc(h.hc(6,1,h.hc(7,3,t.albums$)))}}function x(t,e){if(1&t&&(h.Sb(0),h.Qb(1,8),h.Rb()),2&t){h.fc();const t=h.oc(28);h.Db(1),h.kc("ngTemplateOutlet",t)}}function V(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function O(t,e){if(1&t&&(h.Ub(0,"li",13),h.Ub(1,"h2"),h.yc(2),h.Tb(),h.Ub(3,"pre"),h.yc(4),h.gc(5,"json"),h.Tb(),h.Tb()),2&t){const t=e.$implicit;h.Db(2),h.zc(t.title),h.Db(2),h.zc(h.hc(5,2,t))}}function P(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",6),h.yc(2),h.Tb(),h.Ub(3,"div",7),h.Ub(4,"cdk-virtual-scroll-viewport",10),h.Ub(5,"ul",11),h.wc(6,O,6,4,"li",12),h.Tb(),h.Tb(),h.Tb(),h.Rb()),2&t){const t=e.ngIf;h.Db(2),h.Ac(" Section 5 - Photos (",t.length," records) \u2705 "),h.Db(4),h.kc("cdkVirtualForOf",t)}}function R(t,e){if(1&t&&(h.Sb(0),h.wc(1,P,7,2,"ng-container",9),h.gc(2,"async"),h.Rb()),2&t){const t=h.fc();h.Db(1),h.kc("ngIf",h.hc(2,1,t.photos$))}}function M(t,e){if(1&t&&(h.Sb(0),h.Qb(1,8),h.Rb()),2&t){h.fc();const t=h.oc(28);h.Db(1),h.kc("ngTemplateOutlet",t)}}function $(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function I(t,e){if(1&t&&(h.Sb(0),h.Ub(1,"div",6),h.yc(2,"Section 6 - Users \u2705"),h.Tb(),h.Ub(3,"div",7),h.Ub(4,"pre"),h.yc(5),h.gc(6,"json"),h.gc(7,"async"),h.Tb(),h.Tb(),h.Rb()),2&t){const t=h.fc();h.Db(5),h.zc(h.hc(6,1,h.hc(7,3,t.users$)))}}function N(t,e){if(1&t&&(h.Sb(0),h.Qb(1,8),h.Rb()),2&t){h.fc();const t=h.oc(28);h.Db(1),h.kc("ngTemplateOutlet",t)}}function j(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function F(t,e){1&t&&(h.ec(),h.Ub(0,"svg",14),h.Ub(1,"circle",15),h.Pb(2,"animate",16),h.Pb(3,"animate",17),h.Tb(),h.Ub(4,"circle",18),h.Pb(5,"animate",19),h.Pb(6,"animate",20),h.Tb(),h.Ub(7,"circle",21),h.Pb(8,"animate",16),h.Pb(9,"animate",17),h.Tb(),h.Tb())}let L=(()=>{class t{constructor(t){this.dataService=t,this.visibilityStatus={},this.intersectionStatus=u}ngOnInit(){this.todos$=this.dataService.getTodos(),this.posts$=this.dataService.getPosts(),this.comments$=this.dataService.getComments(),this.albums$=this.dataService.getAlbums(),this.photos$=this.dataService.getPhotos(),this.users$=this.dataService.getUsers()}onVisibilityChanged(t,e){this.visibilityStatus[t]=e}}return t.\u0275fac=function(e){return new(e||t)(h.Ob(d.a))},t.\u0275cmp=h.Ib({type:t,selectors:[["app-demo"]],decls:29,vars:24,consts:[[1,"container-fluid"],["intersectionObserver","",1,"card","border-primary","mb-3",3,"intersectionDebounce","ngSwitch","visibilityChange"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["intersectionObserver","",1,"card","border-success","mb-3",3,"intersectionDebounce","ngSwitch","visibilityChange"],["loading",""],[1,"card-header"],[1,"card-body","text-primary"],[3,"ngTemplateOutlet"],[4,"ngIf"],["itemSize","231",1,"photos-viewport"],[1,"list-group"],["class","list-group-item photo",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"list-group-item","photo"],["width","120","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#2196F3"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(t,e){1&t&&(h.Ub(0,"div",0),h.Ub(1,"h1"),h.yc(2,"Load Component on scroll"),h.Tb(),h.Ub(3,"div",1),h.bc("visibilityChange",function(t){return e.onVisibilityChanged("todos",t)}),h.wc(4,v,8,5,"ng-container",2),h.wc(5,m,2,1,"ng-container",2),h.wc(6,y,2,0,"ng-container",3),h.Tb(),h.Ub(7,"div",4),h.bc("visibilityChange",function(t){return e.onVisibilityChanged("posts",t)}),h.wc(8,w,8,5,"ng-container",2),h.wc(9,S,2,1,"ng-container",2),h.wc(10,T,2,0,"ng-container",3),h.Tb(),h.Ub(11,"div",4),h.bc("visibilityChange",function(t){return e.onVisibilityChanged("comments",t)}),h.wc(12,D,8,5,"ng-container",2),h.wc(13,C,2,1,"ng-container",2),h.wc(14,U,2,0,"ng-container",3),h.Tb(),h.Ub(15,"div",4),h.bc("visibilityChange",function(t){return e.onVisibilityChanged("albums",t)}),h.wc(16,k,8,5,"ng-container",2),h.wc(17,x,2,1,"ng-container",2),h.wc(18,V,2,0,"ng-container",3),h.Tb(),h.Ub(19,"div",4),h.bc("visibilityChange",function(t){return e.onVisibilityChanged("photos",t)}),h.wc(20,R,3,3,"ng-container",2),h.wc(21,M,2,1,"ng-container",2),h.wc(22,$,2,0,"ng-container",3),h.Tb(),h.Ub(23,"div",4),h.bc("visibilityChange",function(t){return e.onVisibilityChanged("users",t)}),h.wc(24,I,8,5,"ng-container",2),h.wc(25,N,2,1,"ng-container",2),h.wc(26,j,2,0,"ng-container",3),h.Tb(),h.Tb(),h.wc(27,F,10,0,"ng-template",null,5,h.xc)),2&t&&(h.Db(3),h.kc("intersectionDebounce",0)("ngSwitch",e.visibilityStatus.todos),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Pending),h.Db(2),h.kc("intersectionDebounce",0)("ngSwitch",e.visibilityStatus.posts),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Pending),h.Db(2),h.kc("intersectionDebounce",0)("ngSwitch",e.visibilityStatus.comments),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Pending),h.Db(2),h.kc("intersectionDebounce",0)("ngSwitch",e.visibilityStatus.albums),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Pending),h.Db(2),h.kc("intersectionDebounce",500)("ngSwitch",e.visibilityStatus.photos),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Pending),h.Db(2),h.kc("intersectionDebounce",0)("ngSwitch",e.visibilityStatus.users),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",e.intersectionStatus.Pending))},directives:[f,n.m,n.n,n.o,n.p,n.l,p.e,p.a,p.d],pipes:[n.f,n.b],styles:[".card[_ngcontent-%COMP%]{height:100vh;overflow-y:auto}.photos-viewport[_ngcontent-%COMP%]{height:300px;overflow-y:auto;outline:4px solid #ff0}"],changeDetection:0}),t})();function z(t,e){1&t&&(h.Sb(0),h.yc(1," \u2705 "),h.Rb())}function Q(t,e){if(1&t&&(h.Sb(0),h.Qb(1,10),h.Rb()),2&t){h.fc(2);const t=h.oc(5);h.Db(1),h.kc("ngTemplateOutlet",t)}}function B(t,e){1&t&&(h.Sb(0),h.yc(1," \u274c "),h.Rb())}function A(t,e){if(1&t){const t=h.Vb();h.Sb(0),h.Ub(1,"div",3),h.bc("visibilityChange",function(i){h.qc(t);const n=e.$implicit;return h.fc().onVisibilityChanged(n,i)}),h.Ub(2,"div",4),h.Ub(3,"div",5),h.Ub(4,"div",6),h.yc(5),h.Tb(),h.Ub(6,"div",7),h.wc(7,z,2,0,"ng-container",8),h.wc(8,Q,2,1,"ng-container",8),h.wc(9,B,2,0,"ng-container",9),h.Tb(),h.Tb(),h.Tb(),h.Tb(),h.Rb()}if(2&t){const t=e.$implicit,i=h.fc();h.Db(1),h.kc("intersectionDebounce",0),h.Db(4),h.Ac(" ",t," "),h.Db(1),h.kc("ngSwitch",i.visibilityStatus[t]),h.Db(1),h.kc("ngSwitchCase",i.intersectionStatus.Visible),h.Db(1),h.kc("ngSwitchCase",i.intersectionStatus.Pending)}}function G(t,e){1&t&&(h.ec(),h.Ub(0,"svg",11),h.Ub(1,"circle",12),h.Pb(2,"animate",13),h.Pb(3,"animate",14),h.Tb(),h.Ub(4,"circle",15),h.Pb(5,"animate",16),h.Pb(6,"animate",17),h.Tb(),h.Ub(7,"circle",18),h.Pb(8,"animate",13),h.Pb(9,"animate",14),h.Tb(),h.Tb())}const X=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Ib({type:t,selectors:[["app-intersection-observer"]],decls:6,vars:0,consts:[[1,"m-2","d-flex","justify-content-center"],["routerLink","sample","routerLinkActive","active",1,"btn","btn-outline-success","mr-2"],["routerLink","demo","routerLinkActive","active",1,"btn","btn-outline-warning"]],template:function(t,e){1&t&&(h.Ub(0,"header",0),h.Ub(1,"a",1),h.yc(2,"Sample"),h.Tb(),h.Ub(3,"a",2),h.yc(4,"Demo"),h.Tb(),h.Tb(),h.Pb(5,"router-outlet"))},directives:[c.c,c.b,c.e],styles:[""]}),t})(),children:[{path:"sample",component:(()=>{class t{constructor(){this.list=[],this.visibilityStatus={},this.intersectionStatus=u}ngOnInit(){const t=[];for(let e=0;e<1e3;e++)t.push(e);this.list=t}onVisibilityChanged(t,e){this.visibilityStatus[t]=e}trackByIndex(t){return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.Ib({type:t,selectors:[["app-sample"]],decls:6,vars:2,consts:[[1,"p-2"],[4,"ngFor","ngForOf","ngForTrackBy"],["loading",""],["intersectionObserver","",1,"max-w-sm","rounded","overflow-hidden","shadow-lg","px-5","py-5","m-2",3,"intersectionDebounce","visibilityChange"],[1,"px-3","py-1","text-sm","font-semibold","text-gray-700","mr-2"],[1,"flex"],[1,"flex-grow","content-center","text-6xl","font-sans"],[1,"flex-grow","flex-end","content-center","self-center","text-6xl","font-sans",3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"ngTemplateOutlet"],["width","120","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#2196F3"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(t,e){1&t&&(h.Ub(0,"div",0),h.Ub(1,"h1"),h.yc(2,"Sample with 1000 records"),h.Tb(),h.wc(3,A,10,5,"ng-container",1),h.Tb(),h.wc(4,G,10,0,"ng-template",null,2,h.xc)),2&t&&(h.Db(3),h.kc("ngForOf",e.list)("ngForTrackBy",e.trackByIndex))},directives:[n.k,f,n.m,n.n,n.o,n.p],styles:[""]}),t})(),pathMatch:"full"},{path:"demo",component:L,pathMatch:"full"},{path:"",redirectTo:"sample"}]}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.Mb({type:t}),t.\u0275inj=h.Lb({imports:[[c.d.forChild(X)],c.d]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.Mb({type:t}),t.\u0275inj=h.Lb({imports:[[n.c,p.g,_]]}),t})()},Kj3r:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var n=i("7o/Q"),c=i("D0XW");function s(t,e=c.a){return i=>i.lift(new o(t,e))}class o{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new r(t,this.dueTime,this.scheduler))}}class r extends n.a{constructor(t,e,i){super(t),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(b,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function b(t){t.debouncedNext()}}}]);