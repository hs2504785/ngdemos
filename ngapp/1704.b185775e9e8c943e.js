"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[1704],{1704:(b,m,a)=>{a.r(m),a.d(m,{ImageDemoModule:()=>y});var r=a(6019),l=a(9843),c=a(1781),e=a(3668),s=a(189),d=a(8738);function g(t,i){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",6),e.\u0275\u0275element(2,"img",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",8),e.\u0275\u0275elementStart(4,"div"),e.\u0275\u0275elementStart(5,"strong"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"br"),e.\u0275\u0275elementStart(8,"small"),e.\u0275\u0275elementStart(9,"a",9),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div"),e.\u0275\u0275elementStart(12,"button",10),e.\u0275\u0275element(13,"i",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"button",12),e.\u0275\u0275element(15,"i",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275property("src",n.thumbnailUrl,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(n.title),e.\u0275\u0275advance(3),e.\u0275\u0275property("href",n.url,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.url)}}function p(t,i){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementContainer(1,14),e.\u0275\u0275elementContainerEnd()),2&t){e.\u0275\u0275nextContext(2);const n=e.\u0275\u0275reference(7);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",n)}}function u(t,i){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",4),e.\u0275\u0275listener("visibilityChange",function(S){const x=e.\u0275\u0275restoreView(n).$implicit;return e.\u0275\u0275nextContext().onVisibilityChanged(x.id,S)}),e.\u0275\u0275template(2,g,16,4,"ng-container",5),e.\u0275\u0275template(3,p,2,1,"ng-container",5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&t){const n=i.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("intersectionDebounce",0)("ngSwitch",o.visibilityStatus[n.id]),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",o.intersectionStatus.Visible),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",o.intersectionStatus.Pending)}}function f(t,i){1&t&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",15),e.\u0275\u0275elementStart(1,"circle",16),e.\u0275\u0275element(2,"animate",17),e.\u0275\u0275element(3,"animate",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"circle",19),e.\u0275\u0275element(5,"animate",20),e.\u0275\u0275element(6,"animate",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"circle",22),e.\u0275\u0275element(8,"animate",17),e.\u0275\u0275element(9,"animate",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd())}const v=[{path:"",component:(()=>{class t{constructor(n){this.dataService=n,this.visibilityStatus={},this.intersectionStatus=c.R}ngOnInit(){this.photos$=this.dataService.getPhotos()}onVisibilityChanged(n,o){console.log("HER",n),this.visibilityStatus[n]=o}trackByIndex(n,o){return o.id}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(s.D))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-image-demo"]],decls:8,vars:4,consts:[[1,"container-fluid"],[1,"d-flex","justify-content-between"],[4,"ngFor","ngForOf","ngForTrackBy"],["loading",""],["appIntersectionObserver","",1,"d-flex","p-4","mb-2","overflow-hidden","shadow-sm","image-item",3,"intersectionDebounce","ngSwitch","visibilityChange"],[4,"ngSwitchCase"],[1,"flex-shrink-0","mr-2"],["alt","photo.title",3,"src"],[1,"flex-grow-1","ml-2"],["target","_blank",3,"href"],[1,"btn","btn-primary","mr-2"],[1,"ti-pencil"],[1,"btn","btn-danger"],[1,"ti-trash"],[3,"ngTemplateOutlet"],["width","120","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#2196F3"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"header",1),e.\u0275\u0275elementStart(2,"h1"),e.\u0275\u0275text(3,"Scroll down to render more images"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,u,4,4,"ng-container",2),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,f,10,0,"ng-template",null,3,e.\u0275\u0275templateRefExtractor)),2&n&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(5,2,o.photos$))("ngForTrackBy",o.trackByIndex))},directives:[r.sg,d.Z,r.RF,r.n9,r.tP],pipes:[r.Ov],styles:[".image-item[_ngcontent-%COMP%]{height:198px}img[_ngcontent-%COMP%]{width:150px;height:150px}"],changeDetection:0}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(v)],l.Bz]}),t})();var C=a(840);let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[r.ez,h,C.y]]}),t})()}}]);