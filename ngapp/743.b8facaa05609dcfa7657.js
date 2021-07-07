(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[743],{7743:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BooksModule:()=>qe});var o=n(1116),r=n(766),i=n(1671);const a=(0,i.PH)("[Book Exists Guard] Load Book",(0,i.Ky)()),s=(0,i.PH)("[Collection Page] Enter"),c=(0,i.PH)("[Collection/API] Load Books Success",(0,i.Ky)()),d=((0,i.PH)("[Collection/API] Load Books Failure",(0,i.Ky)()),(0,i.PH)("[Find Book Page] Search Books",(0,i.Ky)())),l=(0,i.PH)("[Books/API] Search Success",(0,i.Ky)()),m=(0,i.PH)("[Books/API] Search Failure",(0,i.Ky)()),p=(0,i.PH)("[View Book Page] Select Book",(0,i.Ky)()),f=((0,i.PH)("[Collection/API] Add Book Success",(0,i.Ky)()),(0,i.PH)("[Collection/API] Add Book Failure",(0,i.Ky)())),u=((0,i.PH)("[Collection/API] Remove Book Success",(0,i.Ky)()),(0,i.PH)("[Collection/API] Remove Book Failure",(0,i.Ky)())),h=(0,i.PH)("[Selected Book Page] Add Book",(0,i.Ky)()),g=(0,i.PH)("[Selected Book Page] Remove Book",(0,i.Ky)()),k=(0,n(322).H)({selectId:e=>e.id,sortComparer:!1}),b=k.getInitialState({selectedBookId:null}),y=(0,i.Lq)(b,(0,i.on)(l,c,(e,{books:t})=>k.addMany(t,e)),(0,i.on)(a,(e,{book:t})=>k.addOne(t,e)),(0,i.on)(p,(e,{id:t})=>Object.assign(Object.assign({},e),{selectedBookId:t}))),v=(0,i.Lq)({loaded:!1,loading:!1,ids:[]},(0,i.on)(s,e=>Object.assign(Object.assign({},e),{loading:!0})),(0,i.on)(c,(e,{books:t})=>({loaded:!0,loading:!1,ids:t.map(e=>e.id)})),(0,i.on)(h,u,(e,{book:t})=>e.ids.indexOf(t.id)>-1?e:Object.assign(Object.assign({},e),{ids:[...e.ids,t.id]})),(0,i.on)(g,f,(e,{book:t})=>Object.assign(Object.assign({},e),{ids:e.ids.filter(e=>e!==t.id)}))),x=(0,i.Lq)({ids:[],loading:!1,error:"",query:""},(0,i.on)(d,(e,{query:t})=>""===t?{ids:[],loading:!1,error:"",query:t}:Object.assign(Object.assign({},e),{loading:!0,error:"",query:t})),(0,i.on)(l,(e,{books:t})=>({ids:t.map(e=>e.id),loading:!1,error:"",query:e.query})),(0,i.on)(m,(e,{errorMsg:t})=>Object.assign(Object.assign({},e),{loading:!1,error:t}))),_="books-store",C={search:x,books:y,collection:v},S=(0,i.ZF)(_),w=(0,i.P1)(S,e=>e.books),P=(0,i.P1)(w,e=>e.selectedBookId),{selectEntities:I}=k.getSelectors(w),E=(0,i.P1)(I,P,(e,t)=>t&&e[t]),A=(0,i.P1)(S,e=>e.search),O=(0,i.P1)(A,e=>e.ids),B=(0,i.P1)(A,e=>e.query),j=(0,i.P1)(A,e=>e.loading),M=(0,i.P1)(A,e=>e.error),L=(0,i.P1)(I,O,(e,t)=>t.map(t=>e[t]).filter(e=>null!=e)),R=(0,i.P1)(S,e=>e.collection),T=((0,i.P1)(R,e=>e.loaded),(0,i.P1)(R,e=>e.loading),(0,i.P1)(R,e=>e.ids)),V=(0,i.P1)(I,T,(e,t)=>t.map(t=>e[t]).filter(e=>null!=e)),$=(0,i.P1)(T,P,(e,t)=>!!t&&e.indexOf(t)>-1);var D=n(5366),U=n(2797);let W=(()=>{class e{transform(e){if(!e)return"Author Unknown";switch(e.length){case 0:return"Author Unknown";case 1:return e[0];case 2:return e.join(" and ");default:const t=e[e.length-1];return`${e.slice(0,-1).join(", ")}, and ${t}`}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=D["\u0275\u0275definePipe"]({name:"addCommas",type:e,pure:!0}),e})(),q=(()=>{class e{get authors(){return this.book.volumeInfo.authors}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-book-authors"]],inputs:{book:"book"},decls:5,vars:3,consts:[["mat-subheader","",1,"mt-5"]],template:function(e,t){1&e&&(D["\u0275\u0275elementStart"](0,"h5",0),D["\u0275\u0275text"](1,"Written By:"),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](2,"span"),D["\u0275\u0275text"](3),D["\u0275\u0275pipe"](4,"addCommas"),D["\u0275\u0275elementEnd"]()),2&e&&(D["\u0275\u0275advance"](3),D["\u0275\u0275textInterpolate1"](" ",D["\u0275\u0275pipeBind1"](4,1,t.authors),"\n"))},pipes:[W],styles:[""],changeDetection:0}),e})(),H=(()=>{class e{transform(e,t=250){const n=e.replace(/(<([^>]+)>)/gi,"");return e.length>=t?`${n.slice(0,t)}...`:n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=D["\u0275\u0275definePipe"]({name:"ellipsis",type:e,pure:!0}),e})();function F(e,t){if(1&e&&D["\u0275\u0275element"](0,"img",4),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275property"]("src",e.thumbnail,D["\u0275\u0275sanitizeUrl"])}}function N(e,t){if(1&e&&(D["\u0275\u0275elementStart"](0,"mat-card-subtitle"),D["\u0275\u0275text"](1),D["\u0275\u0275pipe"](2,"ellipsis"),D["\u0275\u0275elementEnd"]()),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275advance"](1),D["\u0275\u0275textInterpolate"](D["\u0275\u0275pipeBind2"](2,1,e.subtitle,40))}}function K(e,t){if(1&e&&(D["\u0275\u0275elementStart"](0,"p"),D["\u0275\u0275text"](1),D["\u0275\u0275pipe"](2,"ellipsis"),D["\u0275\u0275elementEnd"]()),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275advance"](1),D["\u0275\u0275textInterpolate"](D["\u0275\u0275pipeBind1"](2,1,e.description))}}const X=function(e){return["/ebook/books",e]};let z=(()=>{class e{get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-book-preview"]],inputs:{book:"book"},decls:12,vars:11,consts:[[3,"routerLink"],["mat-card-sm-image","",3,"src",4,"ngIf"],[4,"ngIf"],[3,"book"],["mat-card-sm-image","",3,"src"]],template:function(e,t){1&e&&(D["\u0275\u0275elementStart"](0,"a",0),D["\u0275\u0275elementStart"](1,"mat-card"),D["\u0275\u0275elementStart"](2,"mat-card-title-group"),D["\u0275\u0275template"](3,F,1,1,"img",1),D["\u0275\u0275elementStart"](4,"mat-card-title"),D["\u0275\u0275text"](5),D["\u0275\u0275pipe"](6,"ellipsis"),D["\u0275\u0275elementEnd"](),D["\u0275\u0275template"](7,N,3,4,"mat-card-subtitle",2),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](8,"mat-card-content"),D["\u0275\u0275template"](9,K,3,3,"p",2),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](10,"mat-card-footer"),D["\u0275\u0275element"](11,"lib-book-authors",3),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementEnd"]()),2&e&&(D["\u0275\u0275property"]("routerLink",D["\u0275\u0275pureFunction1"](9,X,t.id)),D["\u0275\u0275advance"](3),D["\u0275\u0275property"]("ngIf",t.thumbnail),D["\u0275\u0275advance"](2),D["\u0275\u0275textInterpolate"](D["\u0275\u0275pipeBind2"](6,6,t.title,35)),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("ngIf",t.subtitle),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("ngIf",t.description),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("book",t.book))},directives:[r.yS,U.a8,U.C1,o.O5,U.n5,U.dn,U.rt,q,U.vP,U.$j],pipes:[H],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:flex}mat-card[_ngcontent-%COMP%]{width:400px;margin:15px;display:flex;flex-flow:column;justify-content:space-between}@media only screen and (max-width:768px){mat-card[_ngcontent-%COMP%]{margin:15px 0!important}}mat-card[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 16px -2px rgba(0,0,0,.5)}mat-card-title[_ngcontent-%COMP%]{margin-right:10px}mat-card-title-group[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 0}span[_ngcontent-%COMP%]{display:inline-block;font-size:13px}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px}"],changeDetection:0}),e})();function G(e,t){1&e&&D["\u0275\u0275element"](0,"lib-book-preview",1),2&e&&D["\u0275\u0275property"]("book",t.$implicit)}let Q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-book-preview-list"]],inputs:{books:"books"},decls:1,vars:1,consts:[[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(e,t){1&e&&D["\u0275\u0275template"](0,G,1,1,"lib-book-preview",0),2&e&&D["\u0275\u0275property"]("ngForOf",t.books)},directives:[o.sg,z],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}"],changeDetection:0}),e})(),Y=(()=>{class e{constructor(e){this.store=e,this.books$=e.select(V)}ngOnInit(){this.store.dispatch(s())}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275directiveInject"](i.yh))},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-books"]],decls:5,vars:3,consts:[[3,"books"]],template:function(e,t){1&e&&(D["\u0275\u0275elementStart"](0,"mat-card"),D["\u0275\u0275elementStart"](1,"mat-card-title"),D["\u0275\u0275text"](2,"My Collection"),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementEnd"](),D["\u0275\u0275element"](3,"lib-book-preview-list",0),D["\u0275\u0275pipe"](4,"async")),2&e&&(D["\u0275\u0275advance"](3),D["\u0275\u0275property"]("books",D["\u0275\u0275pipeBind1"](4,1,t.books$)))},directives:[U.a8,U.n5,Q],pipes:[o.Ov],styles:["mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),e})();var Z=n(611),J=n(3070),ee=n(9550),te=n(7064),ne=n(9861),oe=n(3169),re=n(6136);function ie(e,t){if(1&e&&(D["\u0275\u0275namespaceSVG"](),D["\u0275\u0275element"](0,"circle",3)),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275styleProp"]("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),D["\u0275\u0275attribute"]("r",e._getCircleRadius())}}function ae(e,t){if(1&e&&(D["\u0275\u0275namespaceSVG"](),D["\u0275\u0275element"](0,"circle",3)),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275styleProp"]("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),D["\u0275\u0275attribute"]("r",e._getCircleRadius())}}function se(e,t){if(1&e&&(D["\u0275\u0275namespaceSVG"](),D["\u0275\u0275element"](0,"circle",3)),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275styleProp"]("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),D["\u0275\u0275attribute"]("r",e._getCircleRadius())}}function ce(e,t){if(1&e&&(D["\u0275\u0275namespaceSVG"](),D["\u0275\u0275element"](0,"circle",3)),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275styleProp"]("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),D["\u0275\u0275attribute"]("r",e._getCircleRadius())}}const de=".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class le{constructor(e){this._elementRef=e}}const me=(0,te.pj)(le,"primary"),pe=new D.InjectionToken("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let fe=(()=>{class e extends me{constructor(t,n,o,r,i){super(t),this._elementRef=t,this._document=o,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const a=e._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),a.has(o.head)||a.set(o.head,new Set([100])),this._fallbackAnimation=n.EDGE||n.TRIDENT,this._noopAnimations="NoopAnimations"===r&&!!i&&!i._forceAnimations,i&&(i.diameter&&(this.diameter=i.diameter),i.strokeWidth&&(this.strokeWidth=i.strokeWidth))}get diameter(){return this._diameter}set diameter(e){this._diameter=(0,ne.su)(e),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(e){this._strokeWidth=(0,ne.su)(e)}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,(0,ne.su)(e)))}ngOnInit(){const e=this._elementRef.nativeElement;this._styleRoot=(0,oe.kV)(e)||this._document.head,this._attachStyleNode(),e.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const e=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${e} ${e}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const t=this._styleRoot,n=this._diameter,o=e._diameters;let r=o.get(t);if(!r||!r.has(n)){const e=this._document.createElement("style");e.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),e.textContent=this._getAnimationText(),t.appendChild(e),r||(r=new Set,o.set(t,r)),r.add(n)}}_getAnimationText(){const e=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*e).replace(/END_VALUE/g,""+.2*e).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275directiveInject"](D.ElementRef),D["\u0275\u0275directiveInject"](oe.t4),D["\u0275\u0275directiveInject"](o.K0,8),D["\u0275\u0275directiveInject"](re.Qb,8),D["\u0275\u0275directiveInject"](pe))},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(D["\u0275\u0275attribute"]("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),D["\u0275\u0275styleProp"]("width",t.diameter,"px")("height",t.diameter,"px"),D["\u0275\u0275classProp"]("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[D["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(D["\u0275\u0275namespaceSVG"](),D["\u0275\u0275elementStart"](0,"svg",0),D["\u0275\u0275template"](1,ie,1,9,"circle",1),D["\u0275\u0275template"](2,ae,1,7,"circle",2),D["\u0275\u0275elementEnd"]()),2&e&&(D["\u0275\u0275styleProp"]("width",t.diameter,"px")("height",t.diameter,"px"),D["\u0275\u0275property"]("ngSwitch","indeterminate"===t.mode),D["\u0275\u0275attribute"]("viewBox",t._getViewBox()),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngSwitchCase",!0),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngSwitchCase",!1))},directives:[o.RF,o.n9],styles:[de],encapsulation:2,changeDetection:0}),e._diameters=new WeakMap,e})(),ue=(()=>{class e extends fe{constructor(e,t,n,o,r){super(e,t,n,o,r),this.mode="indeterminate"}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275directiveInject"](D.ElementRef),D["\u0275\u0275directiveInject"](oe.t4),D["\u0275\u0275directiveInject"](o.K0,8),D["\u0275\u0275directiveInject"](re.Qb,8),D["\u0275\u0275directiveInject"](pe))},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(e,t){2&e&&(D["\u0275\u0275styleProp"]("width",t.diameter,"px")("height",t.diameter,"px"),D["\u0275\u0275classProp"]("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color"},features:[D["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(D["\u0275\u0275namespaceSVG"](),D["\u0275\u0275elementStart"](0,"svg",0),D["\u0275\u0275template"](1,se,1,9,"circle",1),D["\u0275\u0275template"](2,ce,1,7,"circle",2),D["\u0275\u0275elementEnd"]()),2&e&&(D["\u0275\u0275styleProp"]("width",t.diameter,"px")("height",t.diameter,"px"),D["\u0275\u0275property"]("ngSwitch","indeterminate"===t.mode),D["\u0275\u0275attribute"]("viewBox",t._getViewBox()),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngSwitchCase",!0),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngSwitchCase",!1))},directives:[o.RF,o.n9],styles:[de],encapsulation:2,changeDetection:0}),e})(),he=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=D["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=D["\u0275\u0275defineInjector"]({imports:[[te.BQ,o.ez],te.BQ]}),e})();function ge(e,t){if(1&e&&(D["\u0275\u0275elementStart"](0,"span"),D["\u0275\u0275text"](1),D["\u0275\u0275elementEnd"]()),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275advance"](1),D["\u0275\u0275textInterpolate"](e.error)}}let ke=(()=>{class e{constructor(){this.query="",this.searching=!1,this.error="",this.search=new D.EventEmitter}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-book-search"]],inputs:{query:"query",searching:"searching",error:"error"},outputs:{search:"search"},decls:9,vars:6,consts:[["matInput","","placeholder","Search for a book",3,"value","keyup"],[3,"diameter","strokeWidth"],[4,"ngIf"]],template:function(e,t){1&e&&(D["\u0275\u0275elementStart"](0,"mat-card"),D["\u0275\u0275elementStart"](1,"mat-card-title"),D["\u0275\u0275text"](2,"Find a Book"),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](3,"mat-card-content"),D["\u0275\u0275elementStart"](4,"mat-form-field"),D["\u0275\u0275elementStart"](5,"input",0),D["\u0275\u0275listener"]("keyup",function(e){return t.search.emit(e.target.value)}),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementEnd"](),D["\u0275\u0275element"](6,"mat-spinner",1),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](7,"mat-card-footer"),D["\u0275\u0275template"](8,ge,2,1,"span",2),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementEnd"]()),2&e&&(D["\u0275\u0275advance"](5),D["\u0275\u0275property"]("value",t.query),D["\u0275\u0275advance"](1),D["\u0275\u0275classProp"]("show",t.searching),D["\u0275\u0275property"]("diameter",30)("strokeWidth",3),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("ngIf",t.error))},directives:[U.a8,U.n5,U.dn,J.KE,ee.Nt,ue,U.rt,o.O5],styles:["mat-card-content[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-footer[_ngcontent-%COMP%]{color:red;padding:5px 0}.mat-form-field[_ngcontent-%COMP%]{min-width:300px;margin-right:10px}.mat-spinner[_ngcontent-%COMP%]{position:relative;top:10px;left:10px;visibility:hidden}.mat-spinner.show[_ngcontent-%COMP%]{visibility:visible}"],changeDetection:0}),e})(),be=(()=>{class e{constructor(e){this.store=e,this.searchQuery$=e.select(B).pipe((0,Z.q)(1)),this.books$=e.select(L),this.loading$=e.select(j),this.error$=e.select(M)}search(e){this.store.dispatch(d({query:e}))}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275directiveInject"](i.yh))},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-find-book"]],decls:6,vars:12,consts:[[3,"query","searching","error","search"],[3,"books"]],template:function(e,t){1&e&&(D["\u0275\u0275elementStart"](0,"lib-book-search",0),D["\u0275\u0275listener"]("search",function(e){return t.search(e)}),D["\u0275\u0275pipe"](1,"async"),D["\u0275\u0275pipe"](2,"async"),D["\u0275\u0275pipe"](3,"async"),D["\u0275\u0275elementEnd"](),D["\u0275\u0275element"](4,"lib-book-preview-list",1),D["\u0275\u0275pipe"](5,"async")),2&e&&(D["\u0275\u0275property"]("query",D["\u0275\u0275pipeBind1"](1,4,t.searchQuery$))("searching",D["\u0275\u0275pipeBind1"](2,6,t.loading$))("error",D["\u0275\u0275pipeBind1"](3,8,t.error$)),D["\u0275\u0275advance"](4),D["\u0275\u0275property"]("books",D["\u0275\u0275pipeBind1"](5,10,t.books$)))},directives:[ke,Q],pipes:[o.Ov],styles:[""]}),e})();var ye=n(9996),ve=n(4369);function xe(e,t){if(1&e&&(D["\u0275\u0275elementStart"](0,"mat-card-subtitle"),D["\u0275\u0275text"](1),D["\u0275\u0275elementEnd"]()),2&e){const e=D["\u0275\u0275nextContext"](2);D["\u0275\u0275advance"](1),D["\u0275\u0275textInterpolate"](e.subtitle)}}function _e(e,t){if(1&e&&D["\u0275\u0275element"](0,"img",8),2&e){const e=D["\u0275\u0275nextContext"](2);D["\u0275\u0275property"]("src",e.thumbnail,D["\u0275\u0275sanitizeUrl"])}}function Ce(e,t){if(1&e){const e=D["\u0275\u0275getCurrentView"]();D["\u0275\u0275elementStart"](0,"button",9),D["\u0275\u0275listener"]("click",function(){D["\u0275\u0275restoreView"](e);const t=D["\u0275\u0275nextContext"](2);return t.remove.emit(t.book)}),D["\u0275\u0275text"](1," Remove Book from Collection "),D["\u0275\u0275elementEnd"]()}}function Se(e,t){if(1&e){const e=D["\u0275\u0275getCurrentView"]();D["\u0275\u0275elementStart"](0,"button",10),D["\u0275\u0275listener"]("click",function(){D["\u0275\u0275restoreView"](e);const t=D["\u0275\u0275nextContext"](2);return t.add.emit(t.book)}),D["\u0275\u0275text"](1," Add Book to Collection "),D["\u0275\u0275elementEnd"]()}}function we(e,t){if(1&e&&(D["\u0275\u0275elementStart"](0,"mat-card"),D["\u0275\u0275elementStart"](1,"mat-card-title-group"),D["\u0275\u0275elementStart"](2,"mat-card-title"),D["\u0275\u0275text"](3),D["\u0275\u0275elementEnd"](),D["\u0275\u0275template"](4,xe,2,1,"mat-card-subtitle",0),D["\u0275\u0275template"](5,_e,1,1,"img",1),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](6,"mat-card-content"),D["\u0275\u0275element"](7,"p",2),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](8,"mat-card-footer",3),D["\u0275\u0275element"](9,"bc-book-authors",4),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementStart"](10,"mat-card-actions",5),D["\u0275\u0275template"](11,Ce,2,0,"button",6),D["\u0275\u0275template"](12,Se,2,0,"button",7),D["\u0275\u0275elementEnd"](),D["\u0275\u0275elementEnd"]()),2&e){const e=D["\u0275\u0275nextContext"]();D["\u0275\u0275advance"](3),D["\u0275\u0275textInterpolate"](e.title),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngIf",e.subtitle),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngIf",e.thumbnail),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("innerHtml",e.description,D["\u0275\u0275sanitizeHtml"]),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("book",e.book),D["\u0275\u0275advance"](2),D["\u0275\u0275property"]("ngIf",e.inCollection),D["\u0275\u0275advance"](1),D["\u0275\u0275property"]("ngIf",!e.inCollection)}}let Pe=(()=>{class e{constructor(){this.add=new D.EventEmitter,this.remove=new D.EventEmitter}get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-book-detail"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],["mat-card-sm-image","",3,"src",4,"ngIf"],[3,"innerHtml"],[1,"footer"],[3,"book"],["align","start"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-card-sm-image","",3,"src"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&D["\u0275\u0275template"](0,we,13,7,"mat-card",0),2&e&&D["\u0275\u0275property"]("ngIf",t.book)},directives:[o.O5,U.a8,U.C1,U.n5,U.dn,U.rt,U.hq,U.$j,U.vP,ve.lW],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:75px 0}mat-card[_ngcontent-%COMP%]{max-width:600px}mat-card-title-group[_ngcontent-%COMP%]{margin-left:0}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 50px}mat-card-actions[_ngcontent-%COMP%]{margin:25px 0 0!important}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px;position:relative}"],changeDetection:0}),e})(),Ie=(()=>{class e{constructor(e){this.store=e,this.book$=e.select(E),this.isSelectedBookInCollection$=e.select($)}addToCollection(e){this.store.dispatch(h({book:e}))}removeFromCollection(e){this.store.dispatch(g({book:e}))}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275directiveInject"](i.yh))},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-selected-book"]],decls:3,vars:6,consts:[[3,"book","inCollection","add","remove"]],template:function(e,t){1&e&&(D["\u0275\u0275elementStart"](0,"lib-book-detail",0),D["\u0275\u0275listener"]("add",function(e){return t.addToCollection(e)})("remove",function(e){return t.removeFromCollection(e)}),D["\u0275\u0275pipe"](1,"async"),D["\u0275\u0275pipe"](2,"async"),D["\u0275\u0275elementEnd"]()),2&e&&D["\u0275\u0275property"]("book",D["\u0275\u0275pipeBind1"](1,2,t.book$))("inCollection",D["\u0275\u0275pipeBind1"](2,4,t.isSelectedBookInCollection$))},directives:[Pe],pipes:[o.Ov],styles:[""]}),e})();const Ee=[{path:"find",component:be,data:{title:"Find book"}},{path:":id",component:(()=>{class e{constructor(e,t){this.actionsSubscription=t.params.pipe((0,ye.U)(e=>p({id:e.id}))).subscribe(t=>e.dispatch(t))}ngOnDestroy(){this.actionsSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275directiveInject"](i.yh),D["\u0275\u0275directiveInject"](r.gz))},e.\u0275cmp=D["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-view-book"]],decls:1,vars:0,template:function(e,t){1&e&&D["\u0275\u0275element"](0,"lib-selected-book")},directives:[Ie],styles:[""],changeDetection:0}),e})(),data:{title:"Book details"}},{path:"",component:Y,data:{title:"Book Collection"}}];let Ae=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=D["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=D["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(Ee)],r.Bz]}),e})();var Oe=n(1368),Be=n(8569),je=n(653),Me=n(878),Le=n(7701),Re=n(4689),Te=n(4698),Ve=n(5416),$e=n(7727),De=n(2693);let Ue=(()=>{class e{constructor(e){this.http=e,this.API_PATH="https://www.googleapis.com/books/v1/volumes"}searchBooks(e){return this.http.get(`${this.API_PATH}?orderBy=newest&q=${e}`).pipe((0,ye.U)(e=>e.items||[]))}retrieveBook(e){return this.http.get(`${this.API_PATH}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275inject"](De.eN))},e.\u0275prov=D["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),We=(()=>{class e{constructor(e,t){this.actions$=e,this.googleBooks=t,this.search$=(0,Oe.GW)(()=>({debounce:e=300,scheduler:t=Be.z}={})=>this.actions$.pipe((0,Oe.l4)(d),(0,Le.b)(e,t),(0,Re.w)(({query:e})=>{if(""===e)return je.c;const t=this.actions$.pipe((0,Oe.l4)(d),(0,Te.T)(1));return this.googleBooks.searchBooks(e).pipe((0,Ve.R)(t),(0,ye.U)(e=>(console.log("PP",e),l({books:e}))),(0,$e.K)(e=>(0,Me.of)(m({errorMsg:e.message}))))})))}}return e.\u0275fac=function(t){return new(t||e)(D["\u0275\u0275inject"](Oe.eX),D["\u0275\u0275inject"](Ue))},e.\u0275prov=D["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),qe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=D["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=D["\u0275\u0275defineInjector"]({imports:[[o.ez,Ae,U.QW,he,J.lN,ee.c,ve.ot,i.Aw.forFeature(_,C),Oe.sQ.forFeature([We])]]}),e})()}}]);