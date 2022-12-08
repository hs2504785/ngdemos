"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[1820],{1820:(Y,u,a)=>{a.r(u),a.d(u,{PerformanceModule:()=>U});var p=a(9808),s=a(5357),e=a(5e3);let y=(()=>{class t{transform(n){switch(console.log("Pipe Called"),n){case"H":return"Hydrogen";case"He":return"Hellium";case"Li":return"Lithium";case"Be":return"Beryllium";case"B":return"Boron";case"C":return"Carbon";default:return"No Match"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.\u0275\u0275definePipe({name:"returnSymbol",type:t,pure:!0}),t})();function b(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"li",3),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"returnSymbol"),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,n.symbol)," ")}}let C=(()=>{class t{constructor(){this.EXAMPLE_DATA=[{weight:1.0079,symbol:"H"},{weight:4.0026,symbol:"He"},{weight:6.941,symbol:"Li"},{weight:9.0122,symbol:"Be"},{weight:10.811,symbol:"B"},{weight:12.0107,symbol:"C"}]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-avoid-function-call"]],decls:3,vars:1,consts:[[1,"container"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"ul",1),e.\u0275\u0275template(2,b,3,3,"li",2),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",i.EXAMPLE_DATA))},dependencies:[p.sg,y]}),t})();var r=a(2075);function v(t,o){1&t&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"No."),e.\u0275\u0275elementEnd())}function T(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.position)}}function w(t,o){1&t&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"Name"),e.\u0275\u0275elementEnd())}function S(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.name)}}function k(t,o){1&t&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"Weight"),e.\u0275\u0275elementEnd())}function _(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.weight)}}function P(t,o){1&t&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"Symbol"),e.\u0275\u0275elementEnd())}function E(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.symbol)}}function M(t,o){1&t&&e.\u0275\u0275element(0,"tr",11)}function B(t,o){1&t&&e.\u0275\u0275element(0,"tr",12)}const F=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}];let D=(()=>{class t{constructor(){this.displayedColumns=["position","name","weight","symbol"],this.dataSource=F}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-just-mat-table"]],decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"table",0),e.\u0275\u0275elementContainerStart(1,1),e.\u0275\u0275template(2,v,2,0,"th",2),e.\u0275\u0275template(3,T,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(4,4),e.\u0275\u0275template(5,w,2,0,"th",2),e.\u0275\u0275template(6,S,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(7,5),e.\u0275\u0275template(8,k,2,0,"th",2),e.\u0275\u0275template(9,_,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(10,6),e.\u0275\u0275template(11,P,2,0,"th",2),e.\u0275\u0275template(12,E,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275template(13,M,1,0,"tr",7),e.\u0275\u0275template(14,B,1,0,"tr",8),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275property("dataSource",i.dataSource),e.\u0275\u0275advance(13),e.\u0275\u0275property("matHeaderRowDef",i.displayedColumns),e.\u0275\u0275advance(1),e.\u0275\u0275property("matRowDefColumns",i.displayedColumns))},dependencies:[r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),t})();function L(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"li",6),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=o.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n.symbol," ")}}const f=[{weight:1.0079,symbol:"H"},{weight:4.0026,symbol:"He"},{weight:6.941,symbol:"Li"},{weight:9.0122,symbol:"Be"},{weight:10.811,symbol:"B"},{weight:12.0107,symbol:"C"}];let x=(()=>{class t{constructor(){this.records=[]}ngOnInit(){this.initializeData()}initializeData(){this.records=f}updateList(){this.records=[{weight:1.0079,symbol:"Heloo"},{weight:1.0079,symbol:"Hemant"},{weight:1.0079,symbol:"H"},{weight:4.0026,symbol:"He"},{weight:6.941,symbol:"Li"},{weight:9.0122,symbol:"Be"},{weight:10.811,symbol:"B"},{weight:12.0107,symbol:"C"}]}resetList(){this.records=f}symbolTrackBy(n,i){return console.log(i),i.symbol}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-ngfor-track-by"]],decls:8,vars:2,consts:[[1,"container"],[1,"card-body"],[1,"btn","btn-primary","mx-2",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"button",2),e.\u0275\u0275listener("click",function(){return i.updateList()}),e.\u0275\u0275text(3," Update List "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",3),e.\u0275\u0275listener("click",function(){return i.resetList()}),e.\u0275\u0275text(5,"Reset List"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"ul",4),e.\u0275\u0275template(7,L,2,1,"li",5),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",i.records)("ngForTrackBy",i.symbolTrackBy))},dependencies:[p.sg],changeDetection:0}),t})();var c=a(2638),A=a(5113),H=a(226),d=a(4623),N=a(508),g=a(4594),O=a(7368);const h=function(){return["avoid-function-call"]},J=function(){return["ngfor-trackby"]},I=function(){return["just-table"]},j=[{path:"",component:(()=>{class t{constructor(n,i){this.breakpointObserver=n,this.router=i,this.isDarkTheme=!1,this.dir="ltr"}toggleTheme(){this.isDarkTheme=!this.isDarkTheme}toggleDir(){this.dir="ltr"==this.dir?"rtl":"ltr"}ngOnInit(){this.breakpointObserver.observe(["(max-width: 720px)"]).subscribe(n=>{this.isScreenSmall=n.matches}),this.router.events.subscribe(()=>{this.isScreenSmall&&this.sidenav.close()})}setTitle(n){this.pageTitle=n}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(A.Yg),e.\u0275\u0275directiveInject(s.F0))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-performance"]],viewQuery:function(n,i){if(1&n&&e.\u0275\u0275viewQuery(c.JX,5),2&n){let l;e.\u0275\u0275queryRefresh(l=e.\u0275\u0275loadQuery())&&(i.sidenav=l.first)}},decls:28,vars:14,consts:[[1,"app-sidenav-container",3,"dir"],[1,"app-sidenav","mat-elevation-z10",3,"opened","mode"],["sidenav",""],["color","primary"],["matLine","","href","https://hs2504785.github.io/angular-performance-checklist/default/checklist/architecture","target","_blank","title","Follow Angular Performance Checklist"],["matLine","",3,"routerLink","click"],["matLine","","routerLink","/virtual-scroll/basic","title","Avoid non tree shakable modules"],[1,"app-sidenav-content"],[3,"pageTitle","toggleTheme","toggleSidenav","toggleDir"],[1,"wrapper"]],template:function(n,i){if(1&n){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar",3),e.\u0275\u0275text(4," Performance "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"mat-nav-list")(6,"mat-list-item")(7,"a",4),e.\u0275\u0275text(8," Follow Angular Performance Checklist "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"mat-list-item")(10,"a",5),e.\u0275\u0275listener("click",function(){return i.setTitle("Avoid Template Function Call, Use Pipe")}),e.\u0275\u0275text(11," Avoid Template Function "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"mat-list-item")(13,"a",5),e.\u0275\u0275listener("click",function(){return i.setTitle("No console in prod environment")}),e.\u0275\u0275text(14," No Console "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"mat-list-item")(16,"a",5),e.\u0275\u0275listener("click",function(){return i.setTitle("Use trackBy with ngFor")}),e.\u0275\u0275text(17," NgFor TrackBy "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"mat-list-item")(19,"a",5),e.\u0275\u0275listener("click",function(){return i.setTitle("Only include required module fromMaterial")}),e.\u0275\u0275text(20," Only Table Module in Build "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"mat-list-item")(22,"a",6),e.\u0275\u0275text(23," Avoid non tree shakable modules (import * as faker from 'faker';) "),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(24,"div",7)(25,"app-toolbar",8),e.\u0275\u0275listener("toggleTheme",function(){return i.toggleTheme()})("toggleSidenav",function(){e.\u0275\u0275restoreView(l);const W=e.\u0275\u0275reference(2);return e.\u0275\u0275resetView(W.toggle())})("toggleDir",function(){return i.toggleDir()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"div",9),e.\u0275\u0275element(27,"router-outlet"),e.\u0275\u0275elementEnd()()()}2&n&&(e.\u0275\u0275classProp("dark-theme",i.isDarkTheme),e.\u0275\u0275property("dir",i.dir),e.\u0275\u0275advance(1),e.\u0275\u0275property("opened",!i.isScreenSmall)("mode",i.isScreenSmall?"over":"side"),e.\u0275\u0275advance(9),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(10,h)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(11,h)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(12,J)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(13,I)),e.\u0275\u0275advance(6),e.\u0275\u0275property("pageTitle",i.pageTitle))},dependencies:[s.lC,s.yS,H.Lv,c.JX,c.TM,d.Hk,d.Tg,N.X2,g.Ye,O.n],styles:[".app-sidenav-container[_ngcontent-%COMP%]{flex:1;width:100%;min-width:100%;height:100%;min-height:100%}.app-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:240px}.wrapper[_ngcontent-%COMP%]{margin:50px}"]}),t})(),children:[{path:"avoid-function-call",component:C},{path:"ngfor-trackby",component:x},{path:"just-table",component:D}]}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.Bz.forChild(j),s.Bz]}),t})();var X=a(5245),$=a(2181),Q=a(7423),V=a(6658);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.ez,z,c.SJ,d.ie,g.g0,X.Ps,$.Tx,Q.ot,r.p0,V.V]}),t})()}}]);