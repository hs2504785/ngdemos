(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[901],{4546:(e,t,n)=>{"use strict";n.d(t,{Yg:()=>b,u3:()=>_});var i=n(5366),r=n(9861),a=n(5959),o=n(1305),s=n(7930),d=n(9129),c=n(611),m=n(4698),p=n(7701),l=n(9996),h=n(6238),u=n(5416),g=n(3169);const x=new Set;let w,f=(()=>{class e{constructor(e){this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):v}matchMedia(e){return this._platform.WEBKIT&&function(e){if(!x.has(e))try{w||(w=document.createElement("style"),w.setAttribute("type","text/css"),document.head.appendChild(w)),w.sheet&&(w.sheet.insertRule(`@media ${e} {.fx-query-test{ }}`,0),x.add(e))}catch(t){console.error(t)}}(e),this._matchMedia(e)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(g.t4))},e.\u0275prov=i.Yz7({factory:function(){return new e(i.LFG(g.t4))},token:e,providedIn:"root"}),e})();function v(e){return{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{}}}let b=(()=>{class e{constructor(e,t){this._mediaMatcher=e,this._zone=t,this._queries=new Map,this._destroySubject=new a.xQ}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return T((0,r.Eq)(e)).some(e=>this._registerQuery(e).mql.matches)}observe(e){const t=T((0,r.Eq)(e)).map(e=>this._registerQuery(e).observable);let n=(0,o.aj)(t);return n=(0,s.z)(n.pipe((0,c.q)(1)),n.pipe((0,m.T)(1),(0,p.b)(0))),n.pipe((0,l.U)(e=>{const t={matches:!1,breakpoints:{}};return e.forEach(({matches:e,query:n})=>{t.matches=t.matches||e,t.breakpoints[n]=e}),t}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const t=this._mediaMatcher.matchMedia(e),n={observable:new d.y(e=>{const n=t=>this._zone.run(()=>e.next(t));return t.addListener(n),()=>{t.removeListener(n)}}).pipe((0,h.O)(t),(0,l.U)(({matches:t})=>({query:e,matches:t})),(0,u.R)(this._destroySubject)),mql:t};return this._queries.set(e,n),n}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(f),i.LFG(i.R0b))},e.\u0275prov=i.Yz7({factory:function(){return new e(i.LFG(f),i.LFG(i.R0b))},token:e,providedIn:"root"}),e})();function T(e){return e.map(e=>e.split(",")).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}const _={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}},5901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DemosModule:()=>v});var i=n(1116),r=n(766),a=n(168),o=n(5366),s=n(4546),d=n(4720),c=n(7112),m=n(667),p=n(7064),l=n(4369),h=n(7307),u=n(7070);let g=(()=>{class e{constructor(){this.toggleSidenav=new o.vpe,this.toggleTheme=new o.vpe,this.toggleDir=new o.vpe}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-toolbar"]],outputs:{toggleSidenav:"toggleSidenav",toggleTheme:"toggleTheme",toggleDir:"toggleDir"},decls:16,vars:1,consts:[["color","primary"],["mat-button","",1,"sidenav-toggle",3,"click"],[1,"example-spacer"],["mat-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,t){if(1&e&&(o.TgZ(0,"mat-toolbar",0),o.TgZ(1,"button",1),o.NdJ("click",function(){return t.toggleSidenav.emit()}),o.TgZ(2,"mat-icon"),o._uU(3,"menu"),o.qZA(),o.qZA(),o.TgZ(4,"span"),o._uU(5,"Demos"),o.qZA(),o._UZ(6,"span",2),o.TgZ(7,"button",3),o.TgZ(8,"mat-icon"),o._uU(9,"more_vert"),o.qZA(),o.qZA(),o.TgZ(10,"mat-menu",null,4),o.TgZ(12,"button",5),o.NdJ("click",function(){return t.toggleTheme.emit()}),o._uU(13,"Toggle theme"),o.qZA(),o.TgZ(14,"button",5),o.NdJ("click",function(){return t.toggleDir.emit()}),o._uU(15,"Toggle dir"),o.qZA(),o.qZA(),o.qZA()),2&e){const e=o.MAs(11);o.xp6(7),o.Q6J("matMenuTriggerFor",e)}},directives:[c.Ye,l.lW,h.Hw,u.p6,u.VK,u.OP],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-toggle[_ngcontent-%COMP%]{display:none;padding:0;margin:8px;min-width:56px}@media (max-width:720px){.sidenav-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:56px;width:56px;line-height:56px;color:#fff}"]}),e})();const x=function(){return["/demos"]},w=[{path:"",component:(()=>{class e{constructor(e,t){this.breakpointObserver=e,this.router=t,this.isDarkTheme=!1,this.dir="ltr"}toggleTheme(){this.isDarkTheme=!this.isDarkTheme}toggleDir(){this.dir="ltr"==this.dir?"rtl":"ltr"}ngOnInit(){this.breakpointObserver.observe(["(max-width: 720px)"]).subscribe(e=>{this.isScreenSmall=e.matches}),this.router.events.subscribe(()=>{this.isScreenSmall&&this.sidenav.close()})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(s.Yg),o.Y36(r.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-demos"]],viewQuery:function(e,t){if(1&e&&o.Gf(a.JX,5),2&e){let e;o.iGM(e=o.CRH())&&(t.sidenav=e.first)}},decls:13,vars:7,consts:[[1,"app-sidenav-container",3,"dir"],[1,"app-sidenav","mat-elevation-z10",3,"opened","mode"],["sidenav",""],["color","primary"],["matLine","",3,"routerLink"],[1,"app-sidenav-content"],[3,"toggleTheme","toggleSidenav","toggleDir"],[1,"wrapper"]],template:function(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"mat-sidenav-container",0),o.TgZ(1,"mat-sidenav",1,2),o.TgZ(3,"mat-toolbar",3),o._uU(4," NgDemos "),o.qZA(),o.TgZ(5,"mat-nav-list"),o.TgZ(6,"mat-list-item"),o.TgZ(7,"a",4),o._uU(8," HHSHHS "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",5),o.TgZ(10,"app-toolbar",6),o.NdJ("toggleTheme",function(){return t.toggleTheme()})("toggleSidenav",function(){return o.CHM(e),o.MAs(2).toggle()})("toggleDir",function(){return t.toggleDir()}),o.qZA(),o.TgZ(11,"div",7),o._UZ(12,"router-outlet"),o.qZA(),o.qZA(),o.qZA()}2&e&&(o.ekj("dark-theme",t.isDarkTheme),o.Q6J("dir",t.dir),o.xp6(1),o.Q6J("opened",!t.isScreenSmall)("mode",t.isScreenSmall?"over":"side"),o.xp6(6),o.Q6J("routerLink",o.DdM(6,x)))},directives:[a.TM,d.Lv,a.JX,c.Ye,m.Hk,m.Tg,r.yS,p.X2,g,r.lC],styles:[".app-sidenav-container[_ngcontent-%COMP%]{flex:1;width:100%;min-width:100%;height:100%;min-height:100%}.app-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:240px}.wrapper[_ngcontent-%COMP%]{margin:50px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.Bz.forChild(w)],r.Bz]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.ez,f,a.SJ,m.ie,c.g0,h.Ps,u.Tx,l.ot]]}),e})()}}]);