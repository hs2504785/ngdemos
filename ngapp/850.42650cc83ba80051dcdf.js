(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[850],{4546:(e,t,n)=>{"use strict";n.d(t,{Yg:()=>f,u3:()=>k});var a=n(5366),r=n(9861),d=n(5959),m=n(1305),l=n(7930),i=n(8318),o=n(611),c=n(4698),s=n(7701),h=n(9996),u=n(6238),p=n(5416),S=n(3169);const E=new Set;let x,w=(()=>{class e{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):b}matchMedia(e){return this._platform.WEBKIT&&function(e){if(!E.has(e))try{x||(x=document.createElement("style"),x.setAttribute("type","text/css"),document.head.appendChild(x)),x.sheet&&(x.sheet.insertRule(`@media ${e} {.fx-query-test{ }}`,0),E.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](S.t4))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](S.t4))},token:e,providedIn:"root"}),e})();function b(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}let f=(()=>{class e{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new d.xQ}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return g((0,r.Eq)(e)).some(e=>this._registerQuery(e).mql.matches)}observe(e){const t=g((0,r.Eq)(e)).map(e=>this._registerQuery(e).observable);let n=(0,m.aj)(t);return n=(0,l.z)(n.pipe((0,o.q)(1)),n.pipe((0,c.T)(1),(0,s.b)(0))),n.pipe((0,h.U)(e=>{const t={matches:!1,breakpoints:{}};return e.forEach(({matches:e,query:n})=>{t.matches=t.matches||e,t.breakpoints[n]=e}),t}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const t=this._mediaMatcher.matchMedia(e),n={observable:new i.y(e=>{const n=t=>this._zone.run(()=>e.next(t));return t.addListener(n),()=>{t.removeListener(n)}}).pipe((0,u.O)(t),(0,h.U)(({matches:t})=>({query:e,matches:t})),(0,p.R)(this._destroySubject)),mql:t};return this._queries.set(e,n),n}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](w),a["\u0275\u0275inject"](a.NgZone))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](w),a["\u0275\u0275inject"](a.NgZone))},token:e,providedIn:"root"}),e})();function g(e){return e.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}const k={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},4698:(e,t,n)=>{"use strict";n.d(t,{T:()=>r});var a=n(6673);function r(e){return t=>t.lift(new d(e))}class d{constructor(e){this.total=e}call(e,t){return t.subscribe(new m(e,this.total))}}class m extends a.L{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){++this.count>this.total&&this.destination.next(e)}}},850:(e,t,n)=>{"use strict";n.r(t),n.d(t,{HomeModule:()=>s});var a=n(1116),r=n(766),d=n(9996),m=n(4546),l=n(5366),i=n(2797);const o=[{path:"",component:(()=>{class e{constructor(e){this.breakpointObserver=e,this.cards=this.breakpointObserver.observe(m.u3.Handset).pipe((0,d.U)(({matches:e})=>e?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}}return e.\u0275fac=function(t){return new(t||e)(l["\u0275\u0275directiveInject"](m.Yg))},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["app-home"]],decls:89,vars:0,consts:[[1,"container"],[1,"dashboard-cards"],["routerLink","/change-detection"],["routerLink","/worker"],["routerLink","/ebook"],["routerLink","/storedemo"],["routerLink","/github-repo"],["routerLink","/eshop"],["routerLink","/blogdemo"],["routerLink","/crud"],["href","https://hs2504785.github.io/rxdb-demo/home","target","_blank"],["routerLink","/todos"],["routerLink","/tree"],["routerLink","/virtual-scroll"],["routerLink","/intersection-observer"],["routerLink","/performance"],["routerLink","/treegrid"],["routerLink","/demos"],["routerLink","/table"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"h1"),l["\u0275\u0275text"](2,"Dashboard"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"div",1),l["\u0275\u0275elementStart"](4,"mat-card"),l["\u0275\u0275elementStart"](5,"mat-card-header"),l["\u0275\u0275elementStart"](6,"mat-card-title"),l["\u0275\u0275elementStart"](7,"a",2),l["\u0275\u0275text"](8,"Change Detection"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"mat-card"),l["\u0275\u0275elementStart"](10,"mat-card-header"),l["\u0275\u0275elementStart"](11,"mat-card-title"),l["\u0275\u0275elementStart"](12,"a",3),l["\u0275\u0275text"](13,"Worker"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](14,"mat-card"),l["\u0275\u0275elementStart"](15,"mat-card-header"),l["\u0275\u0275elementStart"](16,"mat-card-title"),l["\u0275\u0275elementStart"](17,"a",4),l["\u0275\u0275text"](18,"EBook"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"mat-card"),l["\u0275\u0275elementStart"](20,"mat-card-header"),l["\u0275\u0275elementStart"](21,"mat-card-title"),l["\u0275\u0275elementStart"](22,"a",5),l["\u0275\u0275text"](23,"Store Demo"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"mat-card"),l["\u0275\u0275elementStart"](25,"mat-card-header"),l["\u0275\u0275elementStart"](26,"mat-card-title"),l["\u0275\u0275elementStart"](27,"a",6),l["\u0275\u0275text"](28,"Github Repo Demo"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"mat-card"),l["\u0275\u0275elementStart"](30,"mat-card-header"),l["\u0275\u0275elementStart"](31,"mat-card-title"),l["\u0275\u0275elementStart"](32,"a",7),l["\u0275\u0275text"](33,"eShop"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](34,"mat-card"),l["\u0275\u0275elementStart"](35,"mat-card-header"),l["\u0275\u0275elementStart"](36,"mat-card-title"),l["\u0275\u0275elementStart"](37,"a",8),l["\u0275\u0275text"](38,"Blog Demo"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](39,"mat-card"),l["\u0275\u0275elementStart"](40,"mat-card-header"),l["\u0275\u0275elementStart"](41,"mat-card-title"),l["\u0275\u0275elementStart"](42,"a",9),l["\u0275\u0275text"](43,"CRUD"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](44,"mat-card"),l["\u0275\u0275elementStart"](45,"mat-card-header"),l["\u0275\u0275elementStart"](46,"mat-card-title"),l["\u0275\u0275elementStart"](47,"a",10),l["\u0275\u0275text"](48,"Rxdb Demo"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](49,"mat-card"),l["\u0275\u0275elementStart"](50,"mat-card-header"),l["\u0275\u0275elementStart"](51,"mat-card-title"),l["\u0275\u0275elementStart"](52,"a",11),l["\u0275\u0275text"](53,"Todos (NgRx)"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](54,"mat-card"),l["\u0275\u0275elementStart"](55,"mat-card-header"),l["\u0275\u0275elementStart"](56,"mat-card-title"),l["\u0275\u0275elementStart"](57,"a",12),l["\u0275\u0275text"](58,"Tree"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](59,"mat-card"),l["\u0275\u0275elementStart"](60,"mat-card-header"),l["\u0275\u0275elementStart"](61,"mat-card-title"),l["\u0275\u0275elementStart"](62,"a",13),l["\u0275\u0275text"](63,"Virtual Scroll"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](64,"mat-card"),l["\u0275\u0275elementStart"](65,"mat-card-header"),l["\u0275\u0275elementStart"](66,"mat-card-title"),l["\u0275\u0275elementStart"](67,"a",14),l["\u0275\u0275text"](68,"Intersection Observer"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](69,"mat-card"),l["\u0275\u0275elementStart"](70,"mat-card-header"),l["\u0275\u0275elementStart"](71,"mat-card-title"),l["\u0275\u0275elementStart"](72,"a",15),l["\u0275\u0275text"](73,"Performance"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](74,"mat-card"),l["\u0275\u0275elementStart"](75,"mat-card-header"),l["\u0275\u0275elementStart"](76,"mat-card-title"),l["\u0275\u0275elementStart"](77,"a",16),l["\u0275\u0275text"](78,"Expandable Table"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](79,"mat-card"),l["\u0275\u0275elementStart"](80,"mat-card-header"),l["\u0275\u0275elementStart"](81,"mat-card-title"),l["\u0275\u0275elementStart"](82,"a",17),l["\u0275\u0275text"](83,"Demos"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](84,"mat-card"),l["\u0275\u0275elementStart"](85,"mat-card-header"),l["\u0275\u0275elementStart"](86,"mat-card-title"),l["\u0275\u0275elementStart"](87,"a",18),l["\u0275\u0275text"](88,"Table"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())},directives:[i.a8,i.dk,i.n5,r.yS],styles:[".dashboard-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;align-content:center}.mat-card-header[_ngcontent-%COMP%]{align-items:center;justify-content:center}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{margin-bottom:0}"]}),e})()}];let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(o)],r.Bz]}),e})(),s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({imports:[[a.ez,c,i.QW]]}),e})()}}]);