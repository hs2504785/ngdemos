"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[1820],{1820:(W,C,i)=>{i.r(C),i.d(C,{PerformanceModule:()=>r});var y=i(6895),c=i(9116),e=i(4650);class p{transform(t){switch(console.log("Pipe Called"),t){case"H":return"Hydrogen";case"He":return"Hellium";case"Li":return"Lithium";case"Be":return"Beryllium";case"B":return"Boron";case"C":return"Carbon";default:return"No Match"}}}function S(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"li",3),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"returnSymbol"),e.\u0275\u0275elementEnd()),2&n){const o=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,1,o.symbol)," ")}}p.\u0275fac=function(t){return new(t||p)},p.\u0275pipe=e.\u0275\u0275definePipe({name:"returnSymbol",type:p,pure:!0});class d{constructor(){this.EXAMPLE_DATA=[{weight:1.0079,symbol:"H"},{weight:4.0026,symbol:"He"},{weight:6.941,symbol:"Li"},{weight:9.0122,symbol:"Be"},{weight:10.811,symbol:"B"},{weight:12.0107,symbol:"C"}]}ngOnInit(){}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.\u0275\u0275defineComponent({type:d,selectors:[["app-avoid-function-call"]],decls:3,vars:1,consts:[[1,"container"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"ul",1),e.\u0275\u0275template(2,S,3,3,"li",2),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",o.EXAMPLE_DATA))},dependencies:[y.sg,p]});var a=i(671);function _(n,t){1&n&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"No."),e.\u0275\u0275elementEnd())}function k(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const o=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.position)}}function E(n,t){1&n&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"Name"),e.\u0275\u0275elementEnd())}function P(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const o=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.name)}}function M(n,t){1&n&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"Weight"),e.\u0275\u0275elementEnd())}function B(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const o=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.weight)}}function F(n,t){1&n&&(e.\u0275\u0275elementStart(0,"th",9),e.\u0275\u0275text(1,"Symbol"),e.\u0275\u0275elementEnd())}function D(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"td",10),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const o=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.symbol)}}function L(n,t){1&n&&e.\u0275\u0275element(0,"tr",11)}function x(n,t){1&n&&e.\u0275\u0275element(0,"tr",12)}const A=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}];class u{constructor(){this.displayedColumns=["position","name","weight","symbol"],this.dataSource=A}}function H(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"li",6),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const o=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.symbol," ")}}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.\u0275\u0275defineComponent({type:u,selectors:[["app-just-mat-table"]],decls:15,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"table",0),e.\u0275\u0275elementContainerStart(1,1),e.\u0275\u0275template(2,_,2,0,"th",2),e.\u0275\u0275template(3,k,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(4,4),e.\u0275\u0275template(5,E,2,0,"th",2),e.\u0275\u0275template(6,P,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(7,5),e.\u0275\u0275template(8,M,2,0,"th",2),e.\u0275\u0275template(9,B,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275elementContainerStart(10,6),e.\u0275\u0275template(11,F,2,0,"th",2),e.\u0275\u0275template(12,D,2,1,"td",3),e.\u0275\u0275elementContainerEnd(),e.\u0275\u0275template(13,L,1,0,"tr",7),e.\u0275\u0275template(14,x,1,0,"tr",8),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("dataSource",o.dataSource),e.\u0275\u0275advance(13),e.\u0275\u0275property("matHeaderRowDef",o.displayedColumns),e.\u0275\u0275advance(1),e.\u0275\u0275property("matRowDefColumns",o.displayedColumns))},dependencies:[a.BZ,a.fO,a.as,a.w1,a.Dz,a.nj,a.ge,a.ev,a.XQ,a.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}"]});const v=[{weight:1.0079,symbol:"H"},{weight:4.0026,symbol:"He"},{weight:6.941,symbol:"Li"},{weight:9.0122,symbol:"Be"},{weight:10.811,symbol:"B"},{weight:12.0107,symbol:"C"}];class f{constructor(){this.records=[]}ngOnInit(){this.initializeData()}initializeData(){this.records=v}updateList(){this.records=[{weight:1.0079,symbol:"Heloo"},{weight:1.0079,symbol:"Hemant"},{weight:1.0079,symbol:"H"},{weight:4.0026,symbol:"He"},{weight:6.941,symbol:"Li"},{weight:9.0122,symbol:"Be"},{weight:10.811,symbol:"B"},{weight:12.0107,symbol:"C"}]}resetList(){this.records=v}symbolTrackBy(t,o){return console.log(o),o.symbol}}f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=e.\u0275\u0275defineComponent({type:f,selectors:[["app-ngfor-track-by"]],decls:8,vars:2,consts:[[1,"container"],[1,"card-body"],[1,"btn","btn-primary","mx-2",3,"click"],[1,"btn","btn-warning",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"list-group-item"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"button",2),e.\u0275\u0275listener("click",function(){return o.updateList()}),e.\u0275\u0275text(3," Update List "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",3),e.\u0275\u0275listener("click",function(){return o.resetList()}),e.\u0275\u0275text(5,"Reset List"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"ul",4),e.\u0275\u0275template(7,H,2,1,"li",5),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",o.records)("ngForTrackBy",o.symbolTrackBy))},dependencies:[y.sg],changeDetection:0});var h=i(3267),N=i(2289),O=i(445),b=i(6338),T=i(3683),J=i(7368);const w=function(){return["avoid-function-call"]},I=function(){return["ngfor-trackby"]},R=function(){return["just-table"]};class g{constructor(t,o){this.breakpointObserver=t,this.router=o,this.isDarkTheme=!1,this.dir="ltr"}toggleTheme(){this.isDarkTheme=!this.isDarkTheme}toggleDir(){this.dir="ltr"==this.dir?"rtl":"ltr"}ngOnInit(){this.breakpointObserver.observe(["(max-width: 720px)"]).subscribe(t=>{this.isScreenSmall=t.matches}),this.router.events.subscribe(()=>{this.isScreenSmall&&this.sidenav.close()})}setTitle(t){this.pageTitle=t}}g.\u0275fac=function(t){return new(t||g)(e.\u0275\u0275directiveInject(N.Yg),e.\u0275\u0275directiveInject(c.F0))},g.\u0275cmp=e.\u0275\u0275defineComponent({type:g,selectors:[["app-performance"]],viewQuery:function(t,o){if(1&t&&e.\u0275\u0275viewQuery(h.JX,5),2&t){let m;e.\u0275\u0275queryRefresh(m=e.\u0275\u0275loadQuery())&&(o.sidenav=m.first)}},decls:28,vars:14,consts:[[1,"app-sidenav-container",3,"dir"],[1,"app-sidenav","mat-elevation-z10",3,"opened","mode"],["sidenav",""],["color","primary"],["matLine","","href","https://hs2504785.github.io/angular-performance-checklist/default/checklist/architecture","target","_blank","title","Follow Angular Performance Checklist"],["matLine","",3,"routerLink","click"],["matLine","","routerLink","/virtual-scroll/basic","title","Avoid non tree shakable modules"],[1,"app-sidenav-content"],[3,"pageTitle","toggleTheme","toggleSidenav","toggleDir"],[1,"wrapper"]],template:function(t,o){if(1&t){const m=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar",3),e.\u0275\u0275text(4," Performance "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"mat-nav-list")(6,"mat-list-item")(7,"a",4),e.\u0275\u0275text(8," Follow Angular Performance Checklist "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"mat-list-item")(10,"a",5),e.\u0275\u0275listener("click",function(){return o.setTitle("Avoid Template Function Call, Use Pipe")}),e.\u0275\u0275text(11," Avoid Template Function "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"mat-list-item")(13,"a",5),e.\u0275\u0275listener("click",function(){return o.setTitle("No console in prod environment")}),e.\u0275\u0275text(14," No Console "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(15,"mat-list-item")(16,"a",5),e.\u0275\u0275listener("click",function(){return o.setTitle("Use trackBy with ngFor")}),e.\u0275\u0275text(17," NgFor TrackBy "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"mat-list-item")(19,"a",5),e.\u0275\u0275listener("click",function(){return o.setTitle("Only include required module fromMaterial")}),e.\u0275\u0275text(20," Only Table Module in Build "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(21,"mat-list-item")(22,"a",6),e.\u0275\u0275text(23," Avoid non tree shakable modules (import * as faker from 'faker';) "),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(24,"div",7)(25,"app-toolbar",8),e.\u0275\u0275listener("toggleTheme",function(){return o.toggleTheme()})("toggleSidenav",function(){e.\u0275\u0275restoreView(m);const U=e.\u0275\u0275reference(2);return e.\u0275\u0275resetView(U.toggle())})("toggleDir",function(){return o.toggleDir()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"div",9),e.\u0275\u0275element(27,"router-outlet"),e.\u0275\u0275elementEnd()()()}2&t&&(e.\u0275\u0275classProp("dark-theme",o.isDarkTheme),e.\u0275\u0275property("dir",o.dir),e.\u0275\u0275advance(1),e.\u0275\u0275property("opened",!o.isScreenSmall)("mode",o.isScreenSmall?"over":"side"),e.\u0275\u0275advance(9),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(10,w)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(11,w)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(12,I)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(13,R)),e.\u0275\u0275advance(6),e.\u0275\u0275property("pageTitle",o.pageTitle))},dependencies:[c.lC,c.rH,O.Lv,h.JX,h.TM,b.Hk,b.Tg,T.Ye,J.n],styles:[".app-sidenav-container[_ngcontent-%COMP%]{flex:1;width:100%;min-width:100%;height:100%;min-height:100%}.app-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}.app-sidenav[_ngcontent-%COMP%]{width:240px}.wrapper[_ngcontent-%COMP%]{margin:50px}"]});const z=[{path:"",component:g,children:[{path:"avoid-function-call",component:d},{path:"ngfor-trackby",component:f},{path:"just-table",component:u}]}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.Bz.forChild(z),c.Bz]});var $=i(7392),X=i(8255),Q=i(4859),V=i(6658);class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[y.ez,l,h.SJ,b.ie,T.g0,$.Ps,X.Tx,Q.ot,a.p0,V.V]})}}]);