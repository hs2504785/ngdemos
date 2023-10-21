"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[8266],{8266:(L,s,n)=>{n.r(s),n.d(s,{LazyComponentsModule:()=>C});var r=n(6814),a=n(4190),y=n(5861),t=n(5879);const i=["entry"];function c(e,l){}const u=[{path:"",component:(()=>{class e{constructor(o){this.cfr=o}getLazy1(){var o=this;return(0,y.Z)(function*(){o.entry.clear();const{Lazy1Component:m}=yield n.e(6150).then(n.bind(n,6150));o.entry.createComponent(o.cfr.resolveComponentFactory(m))})()}getLazy2(){var o=this;return(0,y.Z)(function*(){o.entry.clear();const{Lazy2Component:m}=yield n.e(7208).then(n.bind(n,7208));o.entry.createComponent(o.cfr.resolveComponentFactory(m))})()}}return e.\u0275fac=function(o){return new(o||e)(t.\u0275\u0275directiveInject(t.ComponentFactoryResolver))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-lazy-components"]],viewQuery:function(o,m){if(1&o&&t.\u0275\u0275viewQuery(i,5,t.ViewContainerRef),2&o){let d;t.\u0275\u0275queryRefresh(d=t.\u0275\u0275loadQuery())&&(m.entry=d.first)}},decls:25,vars:0,consts:[[1,"m-2","d-flex","justify-content-center"],["routerLink","lazydemo","routerLinkActive","active",1,"btn","btn-outline-primary","me-2"],[1,"btn","btn-outline-success","me-2",3,"click"],[1,"btn","btn-outline-warning",3,"click"],[1,"container"],[1,"card","card-body"],["entry",""],[1,"m-2","mt-5","d-flex","justify-content-center"],["routerLink","lazy1","routerLinkActive","active",1,"btn","btn-outline-success","me-2"],["routerLink","lazy2","routerLinkActive","active",1,"btn","btn-outline-warning"]],template:function(o,m){1&o&&(t.\u0275\u0275elementStart(0,"header",0)(1,"a",1),t.\u0275\u0275text(2,"Lazy Demos"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275element(3,"hr"),t.\u0275\u0275elementStart(4,"header",0)(5,"button",2),t.\u0275\u0275listener("click",function(){return m.getLazy1()}),t.\u0275\u0275text(6," Lazy1 Component "),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"button",3),t.\u0275\u0275listener("click",function(){return m.getLazy2()}),t.\u0275\u0275text(8," Lazy2 Component "),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(9,"div",4)(10,"h1"),t.\u0275\u0275text(11,"Lazy Loaded component goes here"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(12,"div",5),t.\u0275\u0275template(13,c,0,0,"ng-template",null,6,t.\u0275\u0275templateRefExtractor),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(15,"header",7)(16,"a",8),t.\u0275\u0275text(17,"Lazy1 Module"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(18,"a",9),t.\u0275\u0275text(19,"Lazy2 Module"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(20,"div",4)(21,"h1"),t.\u0275\u0275text(22,"Lazy Loaded modules goes here"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(23,"div",5),t.\u0275\u0275element(24,"router-outlet"),t.\u0275\u0275elementEnd()())},dependencies:[a.lC,a.rH,a.Od],changeDetection:0}),e})(),children:[{path:"lazy1",loadChildren:()=>n.e(4339).then(n.bind(n,4339)).then(e=>e.Lazy1Module)},{path:"lazy2",loadChildren:()=>n.e(7806).then(n.bind(n,7806)).then(e=>e.Lazy2Module)},{path:"",redirectTo:"lazy1",pathMatch:"full"}]},{path:"lazydemo",loadChildren:()=>Promise.all([n.e(6223),n.e(2741),n.e(3651),n.e(2296),n.e(4170),n.e(9038),n.e(2032),n.e(9347),n.e(617),n.e(6770),n.e(8525),n.e(5099),n.e(7283)]).then(n.bind(n,7283)).then(e=>e.LazydemoModule)}];let z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[a.Bz.forChild(u),a.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[r.ez,z]}),e})()}}]);