"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[4679],{4679:(F,d,a)=>{a.r(d),a.d(d,{VsModule:()=>I});var c=a(9808),m=a(5357),h=a(1135),p=a(8505),u=a(9468),g=a(1884),f=a(5577),v=a(5026),t=a(5e3),x=a(8104),s=a(2729);function C(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",6)(1,"div",7),t.\u0275\u0275element(2,"img",8),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",9)(4,"h4"),t.\u0275\u0275text(5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"p")(7,"a",10),t.\u0275\u0275text(8),t.\u0275\u0275elementEnd()()()()),2&n){const e=i.$implicit,o=i.index;t.\u0275\u0275advance(2),t.\u0275\u0275property("src",e.thumbnailUrl,t.\u0275\u0275sanitizeUrl),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate2("",o,". ",e.title,""),t.\u0275\u0275advance(2),t.\u0275\u0275propertyInterpolate("href",e.url,t.\u0275\u0275sanitizeUrl),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.url)}}function y(n,i){1&n&&t.\u0275\u0275element(0,"img",11)}function V(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"cdk-virtual-scroll-viewport",3),t.\u0275\u0275listener("scrolledIndexChange",function(r){t.\u0275\u0275restoreView(e);const l=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(l.nextBatch(r,l.photos.length))}),t.\u0275\u0275template(2,C,9,5,"div",4),t.\u0275\u0275template(3,y,1,0,"img",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()}if(2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275property("cdkVirtualForOf",e.photos)("cdkVirtualForTrackBy",e.trackByIdx),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.theEnd)}}function b(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",12),t.\u0275\u0275elementContainer(1,13),t.\u0275\u0275elementEnd()),2&n){t.\u0275\u0275nextContext();const e=t.\u0275\u0275reference(3);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngTemplateOutlet",e)}}function w(n,i){1&n&&(t.\u0275\u0275namespaceSVG(),t.\u0275\u0275elementStart(0,"svg",14)(1,"circle",15),t.\u0275\u0275element(2,"animate",16)(3,"animate",17),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"circle",18),t.\u0275\u0275element(5,"animate",19)(6,"animate",20),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"circle",21),t.\u0275\u0275element(8,"animate",16)(9,"animate",17),t.\u0275\u0275elementEnd()())}let E=(()=>{class n{constructor(){this.isLoading=!1,this.theEnd=!1,this.nextBatchFn=new t.EventEmitter}nextBatch(e,o){if(this.theEnd)return;const r=this.viewport.getRenderedRange().end,l=this.viewport.getDataLength();console.log(`At ${e} End is ${r}, '>=Total', ${l} offset ${o}`),l===r&&this.nextBatchFn.emit(o)}trackByIdx(e){return e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-vsdumb"]],viewQuery:function(e,o){if(1&e&&t.\u0275\u0275viewQuery(s.N7,5),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(o.viewport=r.first)}},inputs:{photos:"photos",isLoading:"isLoading",theEnd:"theEnd"},outputs:{nextBatchFn:"nextBatchFn"},decls:4,vars:2,consts:[[4,"ngIf"],["class","loader",4,"ngIf"],["loading",""],["itemSize","100",3,"scrolledIndexChange"],["class","d-flex photo animate__animated animate__lightSpeedInRight",4,"cdkVirtualFor","cdkVirtualForOf","cdkVirtualForTrackBy"],["class","d-flex mx-auto","src","assets/the-end.jpeg","width","480","height","352","alt","The End",4,"ngIf"],[1,"d-flex","photo","animate__animated","animate__lightSpeedInRight"],[1,"flex-shrink-0"],["alt","photo.title",1,"img-fluid",3,"src"],[1,"flex-grow-1","ms-3"],[3,"href"],["src","assets/the-end.jpeg","width","480","height","352","alt","The End",1,"d-flex","mx-auto"],[1,"loader"],[3,"ngTemplateOutlet"],["width","120","height","30","viewBox","0 0 120 30","xmlns","http://www.w3.org/2000/svg","fill","#2196F3",1,"mx-auto"],["cx","15","cy","15","r","15"],["attributeName","r","from","15","to","15","begin","0s","dur","0.8s","values","15;9;15","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","1","to","1","begin","0s","dur","0.8s","values","1;.5;1","calcMode","linear","repeatCount","indefinite"],["cx","60","cy","15","r","9","fill-opacity","0.3"],["attributeName","r","from","9","to","9","begin","0s","dur","0.8s","values","9;15;9","calcMode","linear","repeatCount","indefinite"],["attributeName","fill-opacity","from","0.5","to","0.5","begin","0s","dur","0.8s","values",".5;1;.5","calcMode","linear","repeatCount","indefinite"],["cx","105","cy","15","r","15"]],template:function(e,o){1&e&&(t.\u0275\u0275template(0,V,4,3,"ng-container",0),t.\u0275\u0275template(1,b,2,1,"div",1),t.\u0275\u0275template(2,w,10,0,"ng-template",null,2,t.\u0275\u0275templateRefExtractor)),2&e&&(t.\u0275\u0275property("ngIf",o.photos),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",o.isLoading))},dependencies:[c.O5,c.tP,s.xd,s.x0,s.N7],styles:["cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:calc(100vh - 52px);width:80vw;margin:0 auto;display:flex;align-items:center;justify-content:center}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar{width:1em}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#eea94f}.photo[_ngcontent-%COMP%]{height:100px;margin:10px;padding:10px;background-color:#f5f5f5;box-shadow:2px 2px 3px #8883}.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;margin-right:20px}.loader[_ngcontent-%COMP%]{text-align:center;padding:20px;position:relative;bottom:40px}"],changeDetection:0}),n})();const B=[{path:"",component:(()=>{class n{constructor(e){this.dataService=e,this.batch=20,this.theEnd=!1,this.isLoading=!1,this.offset=new h.X(null)}ngOnInit(){this.photos$=this.offset.pipe((0,p.b)(()=>this.isLoading=!0),(0,u.p)(500),(0,g.x)(),(0,f.z)(e=>this.getBatch(e)),(0,v.R)((e,o)=>[...e,...o],[]))}getBatch(e){return this.dataService.getPhotosNextBatch(e).pipe((0,p.b)(o=>{this.isLoading=!1,o.length<20&&(this.theEnd=!0)}))}nextBatch(e){this.offset.next(e)}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(x.D))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-vs"]],decls:2,vars:5,consts:[[3,"photos","isLoading","theEnd","nextBatchFn"]],template:function(e,o){1&e&&(t.\u0275\u0275elementStart(0,"app-vsdumb",0),t.\u0275\u0275listener("nextBatchFn",function(l){return o.nextBatch(l)}),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275elementEnd()),2&e&&t.\u0275\u0275property("photos",t.\u0275\u0275pipeBind1(1,3,o.photos$))("isLoading",o.isLoading)("theEnd",o.theEnd)},dependencies:[E,c.Ov],changeDetection:0}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[m.Bz.forChild(B),m.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({imports:[c.ez,s.Cl,M]}),n})()}}]);