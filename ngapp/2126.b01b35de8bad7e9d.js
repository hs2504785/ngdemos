"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[2126],{2126:(E,c,i)=>{i.r(c),i.d(c,{DemosModule:()=>M});var v=i(6814),a=i(4190),m=i(2651),e=i(5879),h=i(1088),f=i(9388),g=i(9038),d=i(1274),s=i(7988),p=i(2296);let T=(()=>{class t{constructor(){this.toggleSidenav=new e.EventEmitter,this.toggleTheme=new e.EventEmitter,this.toggleDir=new e.EventEmitter}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-toolbar"]],outputs:{toggleSidenav:"toggleSidenav",toggleTheme:"toggleTheme",toggleDir:"toggleDir"},decls:14,vars:1,consts:[["color","primary"],["mat-button","",1,"sidenav-toggle",3,"click"],[1,"ti-menu"],[1,"example-spacer"],["mat-button","",3,"matMenuTriggerFor"],[1,"ti-more-alt"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"mat-toolbar",0)(1,"button",1),e.\u0275\u0275listener("click",function(){return o.toggleSidenav.emit()}),e.\u0275\u0275element(2,"i",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"span"),e.\u0275\u0275text(4,"Demos"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(5,"span",3),e.\u0275\u0275elementStart(6,"button",4),e.\u0275\u0275element(7,"i",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"mat-menu",null,6)(10,"button",7),e.\u0275\u0275listener("click",function(){return o.toggleTheme.emit()}),e.\u0275\u0275text(11,"Toggle theme"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"button",7),e.\u0275\u0275listener("click",function(){return o.toggleDir.emit()}),e.\u0275\u0275text(13,"Toggle dir"),e.\u0275\u0275elementEnd()()()),2&n){const l=e.\u0275\u0275reference(9);e.\u0275\u0275advance(6),e.\u0275\u0275property("matMenuTriggerFor",l)}},dependencies:[d.Ye,s.VK,s.OP,s.p6,p.lW],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-toggle[_ngcontent-%COMP%]{display:none;padding:0;margin:8px;min-width:56px}@media (max-width: 720px){.sidenav-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:56px;width:56px;line-height:56px;color:#fff}.ti-more-alt[_ngcontent-%COMP%]{display:inline-block;transform:rotate(90deg)}"]}),t})();const C=function(){return["/demos"]},S=[{path:"",component:(()=>{class t{constructor(n,o){this.breakpointObserver=n,this.router=o,this.isDarkTheme=!1,this.dir="ltr"}toggleTheme(){this.isDarkTheme=!this.isDarkTheme}toggleDir(){this.dir="ltr"==this.dir?"rtl":"ltr"}ngOnInit(){this.breakpointObserver.observe(["(max-width: 720px)"]).subscribe(n=>{this.isScreenSmall=n.matches}),this.router.events.subscribe(()=>{this.isScreenSmall&&this.sidenav.close()})}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(h.Yg),e.\u0275\u0275directiveInject(a.F0))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-demos"]],viewQuery:function(n,o){if(1&n&&e.\u0275\u0275viewQuery(m.JX,5),2&n){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(o.sidenav=l.first)}},decls:13,vars:7,consts:[[1,"app-sidenav-container",3,"dir"],[1,"app-sidenav","mat-elevation-z10",3,"opened","mode"],["sidenav",""],["color","primary"],["matLine","",3,"routerLink"],[1,"app-sidenav-content"],[3,"toggleTheme","toggleSidenav","toggleDir"],[1,"wrapper"]],template:function(n,o){if(1&n){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar",3),e.\u0275\u0275text(4," NgDemos "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"mat-nav-list")(6,"mat-list-item")(7,"a",4),e.\u0275\u0275text(8," HHSHHS "),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(9,"div",5)(10,"app-toolbar",6),e.\u0275\u0275listener("toggleTheme",function(){return o.toggleTheme()})("toggleSidenav",function(){e.\u0275\u0275restoreView(l);const x=e.\u0275\u0275reference(2);return e.\u0275\u0275resetView(x.toggle())})("toggleDir",function(){return o.toggleDir()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",7),e.\u0275\u0275element(12,"router-outlet"),e.\u0275\u0275elementEnd()()()}2&n&&(e.\u0275\u0275classProp("dark-theme",o.isDarkTheme),e.\u0275\u0275property("dir",o.dir),e.\u0275\u0275advance(1),e.\u0275\u0275property("opened",!o.isScreenSmall)("mode",o.isScreenSmall?"over":"side"),e.\u0275\u0275advance(6),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(6,C)))},dependencies:[a.lC,a.rH,f.Lv,m.JX,m.TM,g.Hk,g.Tg,d.Ye,T],styles:[".app-sidenav-container[_ngcontent-%COMP%]{flex:1;width:100%;min-width:100%;height:100%;min-height:100%}.app-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:240px}.wrapper[_ngcontent-%COMP%]{margin:50px}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.Bz.forChild(S),a.Bz]}),t})();var b=i(617);let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[v.ez,y,m.SJ,g.ie,d.g0,b.Ps,s.Tx,p.ot]}),t})()}}]);