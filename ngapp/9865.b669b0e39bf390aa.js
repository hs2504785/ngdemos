"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[9865],{9865:(rt,E,s)=>{s.r(E),s.d(E,{BooksModule:()=>nt});var d=s(9808),g=s(5357),r=s(5620);const K=(0,r.PH)("[Book Exists Guard] Load Book",(0,r.Ky)()),A=(0,r.PH)("[Collection Page] Enter"),T=(0,r.PH)("[Collection/API] Load Books Success",(0,r.Ky)()),h=((0,r.PH)("[Collection/API] Load Books Failure",(0,r.Ky)()),(0,r.PH)("[Find Book Page] Search Books",(0,r.Ky)())),C=(0,r.PH)("[Books/API] Search Success",(0,r.Ky)()),w=(0,r.PH)("[Books/API] Search Failure",(0,r.Ky)()),M=(0,r.PH)("[View Book Page] Select Book",(0,r.Ky)()),X=((0,r.PH)("[Collection/API] Add Book Success",(0,r.Ky)()),(0,r.PH)("[Collection/API] Add Book Failure",(0,r.Ky)())),z=((0,r.PH)("[Collection/API] Remove Book Success",(0,r.Ky)()),(0,r.PH)("[Collection/API] Remove Book Failure",(0,r.Ky)())),O=(0,r.PH)("[Selected Book Page] Add Book",(0,r.Ky)()),F=(0,r.PH)("[Selected Book Page] Remove Book",(0,r.Ky)()),k=(0,s(5685).H)({selectId:t=>t.id,sortComparer:!1}),Y=k.getInitialState({selectedBookId:null}),Z=(0,r.Lq)(Y,(0,r.on)(C,T,(t,{books:n})=>k.addMany(n,t)),(0,r.on)(K,(t,{book:n})=>k.addOne(n,t)),(0,r.on)(M,(t,{id:n})=>Object.assign(Object.assign({},t),{selectedBookId:n}))),ee=(0,r.Lq)({loaded:!1,loading:!1,ids:[]},(0,r.on)(A,t=>Object.assign(Object.assign({},t),{loading:!0})),(0,r.on)(T,(t,{books:n})=>({loaded:!0,loading:!1,ids:n.map(o=>o.id)})),(0,r.on)(O,z,(t,{book:n})=>t.ids.indexOf(n.id)>-1?t:Object.assign(Object.assign({},t),{ids:[...t.ids,n.id]})),(0,r.on)(F,X,(t,{book:n})=>Object.assign(Object.assign({},t),{ids:t.ids.filter(o=>o!==n.id)}))),ne=(0,r.Lq)({ids:[],loading:!1,error:"",query:""},(0,r.on)(h,(t,{query:n})=>""===n?{ids:[],loading:!1,error:"",query:n}:Object.assign(Object.assign({},t),{loading:!0,error:"",query:n})),(0,r.on)(C,(t,{books:n})=>({ids:n.map(o=>o.id),loading:!1,error:"",query:t.query})),(0,r.on)(w,(t,{errorMsg:n})=>Object.assign(Object.assign({},t),{loading:!1,error:n}))),L="books-store",re={search:ne,books:Z,collection:ee},y=(0,r.ZF)(L),R=(0,r.P1)(y,t=>t.books),j=(0,r.P1)(R,t=>t.selectedBookId),{selectEntities:_}=k.getSelectors(R),ie=(0,r.P1)(_,j,(t,n)=>n&&t[n]),v=(0,r.P1)(y,t=>t.search),se=(0,r.P1)(v,t=>t.ids),ae=(0,r.P1)(v,t=>t.query),ce=(0,r.P1)(v,t=>t.loading),le=(0,r.P1)(v,t=>t.error),de=(0,r.P1)(_,se,(t,n)=>n.map(o=>t[o]).filter(o=>null!=o)),B=(0,r.P1)(y,t=>t.collection),D=((0,r.P1)(B,t=>t.loaded),(0,r.P1)(B,t=>t.loading),(0,r.P1)(B,t=>t.ids)),me=(0,r.P1)(_,D,(t,n)=>n.map(o=>t[o]).filter(o=>null!=o)),pe=(0,r.P1)(D,j,(t,n)=>!!n&&t.indexOf(n)>-1);var e=s(5e3),l=s(9224);let fe=(()=>{class t{transform(o){if(!o)return"Author Unknown";switch(o.length){case 0:return"Author Unknown";case 1:return o[0];case 2:return o.join(" and ");default:const i=o[o.length-1];return`${o.slice(0,-1).join(", ")}, and ${i}`}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=e.\u0275\u0275definePipe({name:"addCommas",type:t,pure:!0}),t})(),ue=(()=>{class t{get authors(){return this.book.volumeInfo.authors}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-book-authors"]],inputs:{book:"book"},decls:5,vars:3,consts:[["mat-subheader","",1,"mt-5"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"h5",0),e.\u0275\u0275text(1,"Written By:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"span"),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"addCommas"),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(4,1,i.authors),"\n"))},dependencies:[fe],changeDetection:0}),t})(),ge=(()=>{class t{transform(o,i=250){const a=o.replace(/(<([^>]+)>)/gi,"");return o.length>=i?`${a.slice(0,i)}...`:a}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=e.\u0275\u0275definePipe({name:"ellipsis",type:t,pure:!0}),t})();function he(t,n){if(1&t&&e.\u0275\u0275element(0,"img",4),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275property("src",o.thumbnail,e.\u0275\u0275sanitizeUrl)}}function ke(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"mat-card-subtitle"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"ellipsis"),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2,1,o.subtitle,40))}}function ve(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"ellipsis"),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2,1,o.description))}}const be=function(t){return["/ebook/books",t]};let Ce=(()=>{class t{get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-book-preview"]],inputs:{book:"book"},decls:12,vars:11,consts:[[3,"routerLink"],["mat-card-sm-image","",3,"src",4,"ngIf"],[4,"ngIf"],[3,"book"],["mat-card-sm-image","",3,"src"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"a",0)(1,"mat-card")(2,"mat-card-title-group"),e.\u0275\u0275template(3,he,1,1,"img",1),e.\u0275\u0275elementStart(4,"mat-card-title"),e.\u0275\u0275text(5),e.\u0275\u0275pipe(6,"ellipsis"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(7,ke,3,4,"mat-card-subtitle",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"mat-card-content"),e.\u0275\u0275template(9,ve,3,3,"p",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"mat-card-footer"),e.\u0275\u0275element(11,"lib-book-authors",3),e.\u0275\u0275elementEnd()()()),2&o&&(e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(9,be,i.id)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.thumbnail),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(6,6,i.title,35)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",i.subtitle),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",i.description),e.\u0275\u0275advance(2),e.\u0275\u0275property("book",i.book))},dependencies:[d.O5,g.yS,l.a8,l.C1,l.dn,l.n5,l.$j,l.rt,l.vP,ue,ge],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:flex}mat-card[_ngcontent-%COMP%]{width:400px;margin:15px;display:flex;flex-flow:column;justify-content:space-between}@media only screen and (max-width: 768px){mat-card[_ngcontent-%COMP%]{margin:15px 0!important}}mat-card[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 16px -2px #00000080}mat-card-title[_ngcontent-%COMP%]{margin-right:10px}mat-card-title-group[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 0}span[_ngcontent-%COMP%]{display:inline-block;font-size:13px}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px}"],changeDetection:0}),t})();function ye(t,n){1&t&&e.\u0275\u0275element(0,"lib-book-preview",1),2&t&&e.\u0275\u0275property("book",n.$implicit)}let V=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-book-preview-list"]],inputs:{books:"books"},decls:1,vars:1,consts:[[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(o,i){1&o&&e.\u0275\u0275template(0,ye,1,1,"lib-book-preview",0),2&o&&e.\u0275\u0275property("ngForOf",i.books)},dependencies:[d.sg,Ce],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}"],changeDetection:0}),t})(),_e=(()=>{class t{constructor(o){this.store=o,this.books$=o.select(me)}ngOnInit(){this.store.dispatch(A())}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(r.yh))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-books"]],decls:5,vars:3,consts:[[3,"books"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"mat-card")(1,"mat-card-title"),e.\u0275\u0275text(2,"My Collection"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(3,"lib-book-preview-list",0),e.\u0275\u0275pipe(4,"async")),2&o&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("books",e.\u0275\u0275pipeBind1(4,1,i.books$)))},dependencies:[l.a8,l.n5,V,d.Ov],styles:["mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),t})();var Be=s(5698),S=s(3191),$=s(925),x=s(508),Se=s(727),xe=s(2729);function Pe(t,n){if(1&t&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275element(0,"circle",4)),2&t){const o=e.\u0275\u0275nextContext(),i=e.\u0275\u0275reference(1);e.\u0275\u0275styleProp("animation-name","mat-progress-spinner-stroke-rotate-"+o._spinnerAnimationLabel)("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(i)),e.\u0275\u0275attribute("r",o._getCircleRadius())}}function Ie(t,n){if(1&t&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275element(0,"circle",4)),2&t){const o=e.\u0275\u0275nextContext(),i=e.\u0275\u0275reference(1);e.\u0275\u0275styleProp("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(i)),e.\u0275\u0275attribute("r",o._getCircleRadius())}}const Ae=(0,x.pj)(class{constructor(t){this._elementRef=t}},"primary"),Te=new e.InjectionToken("mat-progress-spinner-default-options",{providedIn:"root",factory:function we(){return{diameter:100}}});class m extends Ae{constructor(n,o,i,a,c,u,b,p){super(n),this._document=i,this._diameter=100,this._value=0,this._resizeSubscription=Se.w0.EMPTY,this.mode="determinate";const W=m._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),W.has(i.head)||W.set(i.head,new Set([100])),this._noopAnimations="NoopAnimations"===a&&!!c&&!c._forceAnimations,"mat-spinner"===n.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),c&&(c.color&&(this.color=this.defaultColor=c.color),c.diameter&&(this.diameter=c.diameter),c.strokeWidth&&(this.strokeWidth=c.strokeWidth)),o.isBrowser&&o.SAFARI&&b&&u&&p&&(this._resizeSubscription=b.change(150).subscribe(()=>{"indeterminate"===this.mode&&p.run(()=>u.markForCheck())}))}get diameter(){return this._diameter}set diameter(n){this._diameter=(0,S.su)(n),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(n){this._strokeWidth=(0,S.su)(n)}get value(){return"determinate"===this.mode?this._value:0}set value(n){this._value=Math.max(0,Math.min(100,(0,S.su)(n)))}ngOnInit(){const n=this._elementRef.nativeElement;this._styleRoot=(0,$.kV)(n)||this._document.head,this._attachStyleNode(),n.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const n=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${n} ${n}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(n){var o;const i=50*(null!==(o=n.currentScale)&&void 0!==o?o:1);return`${i}% ${i}%`}_attachStyleNode(){const n=this._styleRoot,o=this._diameter,i=m._diameters;let a=i.get(n);if(!a||!a.has(o)){const c=this._document.createElement("style");c.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),c.textContent=this._getAnimationText(),n.appendChild(c),a||(a=new Set,i.set(n,a)),a.add(o)}}_getAnimationText(){const n=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*n).replace(/END_VALUE/g,""+.2*n).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}m._diameters=new WeakMap,m.\u0275fac=function(n){return new(n||m)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject($.t4),e.\u0275\u0275directiveInject(d.K0,8),e.\u0275\u0275directiveInject(e.ANIMATION_MODULE_TYPE,8),e.\u0275\u0275directiveInject(Te),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(xe.rL),e.\u0275\u0275directiveInject(e.NgZone))},m.\u0275cmp=e.\u0275\u0275defineComponent({type:m,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(n,o){2&n&&(e.\u0275\u0275attribute("aria-valuemin","determinate"===o.mode?0:null)("aria-valuemax","determinate"===o.mode?100:null)("aria-valuenow","determinate"===o.mode?o.value:null)("mode",o.mode),e.\u0275\u0275styleProp("width",o.diameter,"px")("height",o.diameter,"px"),e.\u0275\u0275classProp("_mat-animation-noopable",o._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(n,o){1&n&&(e.\u0275\u0275namespaceSVG(),e.\u0275\u0275elementStart(0,"svg",0,1),e.\u0275\u0275template(2,Pe,1,11,"circle",2),e.\u0275\u0275template(3,Ie,1,9,"circle",3),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275styleProp("width",o.diameter,"px")("height",o.diameter,"px"),e.\u0275\u0275property("ngSwitch","indeterminate"===o.mode),e.\u0275\u0275attribute("viewBox",o._getViewBox()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngSwitchCase",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngSwitchCase",!1))},dependencies:[d.RF,d.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let Oe=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[x.BQ,d.ez,x.BQ]}),t})();var N=s(7322),U=s(7531);function Fe(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.error)}}let Le=(()=>{class t{constructor(){this.query="",this.searching=!1,this.error="",this.search=new e.EventEmitter}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-book-search"]],inputs:{query:"query",searching:"searching",error:"error"},outputs:{search:"search"},decls:9,vars:6,consts:[["matInput","","placeholder","Search for a book",3,"value","keyup"],[3,"diameter","strokeWidth"],[4,"ngIf"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"mat-card")(1,"mat-card-title"),e.\u0275\u0275text(2,"Find a Book"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"mat-card-content")(4,"mat-form-field")(5,"input",0),e.\u0275\u0275listener("keyup",function(c){return i.search.emit(c.target.value)}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(6,"mat-spinner",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"mat-card-footer"),e.\u0275\u0275template(8,Fe,2,1,"span",2),e.\u0275\u0275elementEnd()()),2&o&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("value",i.query),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("show",i.searching),e.\u0275\u0275property("diameter",30)("strokeWidth",3),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",i.error))},dependencies:[d.O5,l.a8,l.dn,l.n5,l.rt,m,N.KE,U.Nt],styles:["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-footer[_ngcontent-%COMP%]{color:red;padding:5px 0}.mat-form-field[_ngcontent-%COMP%]{min-width:300px;margin-right:10px}.mat-spinner[_ngcontent-%COMP%]{position:relative;top:10px;left:10px;visibility:hidden}.mat-spinner.show[_ngcontent-%COMP%]{visibility:visible}"],changeDetection:0}),t})(),Re=(()=>{class t{constructor(o){this.store=o,this.searchQuery$=o.select(ae).pipe((0,Be.q)(1)),this.books$=o.select(de),this.loading$=o.select(ce),this.error$=o.select(le)}search(o){this.store.dispatch(h({query:o}))}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(r.yh))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-find-book"]],decls:6,vars:12,consts:[[3,"query","searching","error","search"],[3,"books"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"lib-book-search",0),e.\u0275\u0275listener("search",function(c){return i.search(c)}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(4,"lib-book-preview-list",1),e.\u0275\u0275pipe(5,"async")),2&o&&(e.\u0275\u0275property("query",e.\u0275\u0275pipeBind1(1,4,i.searchQuery$))("searching",e.\u0275\u0275pipeBind1(2,6,i.loading$))("error",e.\u0275\u0275pipeBind1(3,8,i.error$)),e.\u0275\u0275advance(4),e.\u0275\u0275property("books",e.\u0275\u0275pipeBind1(5,10,i.books$)))},dependencies:[V,Le,d.Ov]}),t})();var I=s(4004),H=s(7423);function je(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"mat-card-subtitle"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.subtitle)}}function De(t,n){if(1&t&&e.\u0275\u0275element(0,"img",8),2&t){const o=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("src",o.thumbnail,e.\u0275\u0275sanitizeUrl)}}function Ve(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",9),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(o);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.remove.emit(a.book))}),e.\u0275\u0275text(1," Remove Book from Collection "),e.\u0275\u0275elementEnd()}}function $e(t,n){if(1&t){const o=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",10),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(o);const a=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(a.add.emit(a.book))}),e.\u0275\u0275text(1," Add Book to Collection "),e.\u0275\u0275elementEnd()}}function Ne(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"mat-card")(1,"mat-card-title-group")(2,"mat-card-title"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,je,2,1,"mat-card-subtitle",0),e.\u0275\u0275template(5,De,1,1,"img",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"mat-card-content"),e.\u0275\u0275element(7,"p",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"mat-card-footer",3),e.\u0275\u0275element(9,"bc-book-authors",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"mat-card-actions",5),e.\u0275\u0275template(11,Ve,2,0,"button",6),e.\u0275\u0275template(12,$e,2,0,"button",7),e.\u0275\u0275elementEnd()()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(o.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.subtitle),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.thumbnail),e.\u0275\u0275advance(2),e.\u0275\u0275property("innerHtml",o.description,e.\u0275\u0275sanitizeHtml),e.\u0275\u0275advance(2),e.\u0275\u0275property("book",o.book),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",o.inCollection),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.inCollection)}}let Ue=(()=>{class t{constructor(){this.add=new e.EventEmitter,this.remove=new e.EventEmitter}get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-book-detail"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],["mat-card-sm-image","",3,"src",4,"ngIf"],[3,"innerHtml"],[1,"footer"],[3,"book"],["align","start"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-card-sm-image","",3,"src"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(o,i){1&o&&e.\u0275\u0275template(0,Ne,13,7,"mat-card",0),2&o&&e.\u0275\u0275property("ngIf",i.book)},dependencies:[d.O5,l.a8,l.C1,l.dn,l.n5,l.$j,l.hq,l.rt,l.vP,H.lW],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:75px 0}mat-card[_ngcontent-%COMP%]{max-width:600px}mat-card-title-group[_ngcontent-%COMP%]{margin-left:0}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 50px}mat-card-actions[_ngcontent-%COMP%]{margin:25px 0 0!important}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px;position:relative}"],changeDetection:0}),t})(),He=(()=>{class t{constructor(o){this.store=o,this.book$=o.select(ie),this.isSelectedBookInCollection$=o.select(pe)}addToCollection(o){this.store.dispatch(O({book:o}))}removeFromCollection(o){this.store.dispatch(F({book:o}))}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(r.yh))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-selected-book"]],decls:3,vars:6,consts:[[3,"book","inCollection","add","remove"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"lib-book-detail",0),e.\u0275\u0275listener("add",function(c){return i.addToCollection(c)})("remove",function(c){return i.removeFromCollection(c)}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementEnd()),2&o&&e.\u0275\u0275property("book",e.\u0275\u0275pipeBind1(1,2,i.book$))("inCollection",e.\u0275\u0275pipeBind1(2,4,i.isSelectedBookInCollection$))},dependencies:[Ue,d.Ov]}),t})();const We=[{path:"find",component:Re,data:{title:"Find book"}},{path:":id",component:(()=>{class t{constructor(o,i){this.actionsSubscription=i.params.pipe((0,I.U)(a=>M({id:a.id}))).subscribe(a=>o.dispatch(a))}ngOnDestroy(){this.actionsSubscription.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(r.yh),e.\u0275\u0275directiveInject(g.gz))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-view-book"]],decls:1,vars:0,template:function(o,i){1&o&&e.\u0275\u0275element(0,"lib-selected-book")},dependencies:[He],changeDetection:0}),t})(),data:{title:"Book details"}},{path:"",component:_e,data:{title:"Book Collection"}}];let Ke=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[g.Bz.forChild(We),g.Bz]}),t})();var f=s(6991),Xe=s(4986),ze=s(515),Ge=s(9646),Qe=s(8372),Ye=s(3900),Ze=s(5684),Je=s(2722),qe=s(262),et=s(520);let tt=(()=>{class t{constructor(o){this.http=o,this.API_PATH="https://www.googleapis.com/books/v1/volumes"}searchBooks(o){return this.http.get(`${this.API_PATH}?orderBy=newest&q=${o}`).pipe((0,I.U)(i=>i.items||[]))}retrieveBook(o){return this.http.get(`${this.API_PATH}/${o}`)}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275inject(et.eN))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),ot=(()=>{class t{constructor(o,i){this.actions$=o,this.googleBooks=i,this.search$=(0,f.GW)(()=>({debounce:a=300,scheduler:c=Xe.z}={})=>this.actions$.pipe((0,f.l4)(h),(0,Qe.b)(a,c),(0,Ye.w)(({query:u})=>{if(""===u)return ze.c;const b=this.actions$.pipe((0,f.l4)(h),(0,Ze.T)(1));return this.googleBooks.searchBooks(u).pipe((0,Je.R)(b),(0,I.U)(p=>(console.log("PP",p),C({books:p}))),(0,qe.K)(p=>(0,Ge.of)(w({errorMsg:p.message}))))})))}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275inject(f.eX),e.\u0275\u0275inject(tt))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[d.ez,Ke,l.QW,Oe,N.lN,U.c,H.ot,r.Aw.forFeature(L,re),f.sQ.forFeature([ot])]}),t})()}}]);