"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[4893],{4893:(F,g,o)=>{o.r(g),o.d(g,{AggriddemoModule:()=>L});var p=o(9808),a=o(5357),s=o(2638),e=o(5e3),h=o(5113);let v=(()=>{class t{constructor(n){this.document=n}loadStyle(n){const i=this.document.getElementsByTagName("head")[0];let l=this.document.getElementById("lazy-styles");if(l)l.href=n;else{const d=this.document.createElement("link");d.id="lazy-styles",d.rel="stylesheet",d.href=`${n}`,i.appendChild(d)}}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275inject(p.K0))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=o(226),m=o(4623),f=o(508),c=o(4594),y=o(7368);const S=function(){return["ag-sorting"]},A=[{path:"",component:(()=>{class t{constructor(n,i,l){this.breakpointObserver=n,this.router=i,this.helperService=l,this.isDarkTheme=!1,this.dir="ltr",this.helperService.loadStyle("aggrid.min.css")}toggleTheme(){this.isDarkTheme=!this.isDarkTheme}toggleDir(){this.dir="ltr"==this.dir?"rtl":"ltr"}ngOnInit(){this.breakpointObserver.observe(["(max-width: 720px)"]).subscribe(n=>{this.isScreenSmall=n.matches}),this.router.events.subscribe(()=>{this.isScreenSmall&&this.sidenav.close()})}setTitle(n){this.pageTitle=n}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(h.Yg),e.\u0275\u0275directiveInject(a.F0),e.\u0275\u0275directiveInject(v))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-aggriddemo"]],viewQuery:function(n,i){if(1&n&&e.\u0275\u0275viewQuery(s.JX,5),2&n){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.sidenav=l.first)}},decls:16,vars:8,consts:[[1,"app-sidenav-container",3,"dir"],[1,"app-sidenav","mat-elevation-z10",3,"opened","mode"],["sidenav",""],["color","primary"],["matLine","","routerLink","ag-simple"],["matLine","",3,"routerLink"],[1,"app-sidenav-content"],[3,"pageTitle","toggleTheme","toggleSidenav","toggleDir"],[1,"wrapper"]],template:function(n,i){if(1&n){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar",3),e.\u0275\u0275text(4," AG Grid Demo "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"mat-nav-list")(6,"mat-list-item")(7,"a",4),e.\u0275\u0275text(8," Simple "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"mat-list-item")(10,"a",5),e.\u0275\u0275text(11," AG Sort "),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(12,"div",6)(13,"app-toolbar",7),e.\u0275\u0275listener("toggleTheme",function(){return i.toggleTheme()})("toggleSidenav",function(){e.\u0275\u0275restoreView(l);const z=e.\u0275\u0275reference(2);return e.\u0275\u0275resetView(z.toggle())})("toggleDir",function(){return i.toggleDir()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"div",8),e.\u0275\u0275element(15,"router-outlet"),e.\u0275\u0275elementEnd()()()}2&n&&(e.\u0275\u0275classProp("dark-theme",i.isDarkTheme),e.\u0275\u0275property("dir",i.dir),e.\u0275\u0275advance(1),e.\u0275\u0275property("opened",!i.isScreenSmall)("mode",i.isScreenSmall?"over":"side"),e.\u0275\u0275advance(9),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(7,S)),e.\u0275\u0275advance(3),e.\u0275\u0275property("pageTitle",i.pageTitle))},dependencies:[a.lC,a.yS,u.Lv,s.JX,s.TM,m.Hk,m.Tg,f.X2,c.Ye,y.n],styles:[".app-sidenav-container{flex:1;width:100%;min-width:100%;height:100%;min-height:100%}.app-sidenav-content{display:flex;height:100%;flex-direction:column}.app-sidenav{width:240px}.wrapper{margin:50px}\n"],encapsulation:2,changeDetection:0}),t})(),children:[{path:"ag-simple",loadChildren:()=>o.e(6947).then(o.bind(o,6947)).then(t=>t.AgSimpleModule)},{path:"ag-sorting",loadChildren:()=>o.e(7250).then(o.bind(o,7250)).then(t=>t.AgSortingModule)}]}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.Bz.forChild(A),a.Bz]}),t})();var M=o(5245),D=o(2181),I=o(7423),j=o(2075),E=o(6658);let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.ez,C,s.SJ,m.ie,c.g0,M.Ps,D.Tx,I.ot,j.p0,E.V]}),t})()}}]);