(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[743],{7743:(t,e,o)=>{"use strict";o.r(e),o.d(e,{BooksModule:()=>Yt});var n=o(1116),r=o(766),s=o(1671);const i=(0,s.PH)("[Book Exists Guard] Load Book",(0,s.Ky)()),a=(0,s.PH)("[Collection Page] Enter"),c=(0,s.PH)("[Collection/API] Load Books Success",(0,s.Ky)()),d=((0,s.PH)("[Collection/API] Load Books Failure",(0,s.Ky)()),(0,s.PH)("[Find Book Page] Search Books",(0,s.Ky)())),l=(0,s.PH)("[Books/API] Search Success",(0,s.Ky)()),m=(0,s.PH)("[Books/API] Search Failure",(0,s.Ky)()),p=(0,s.PH)("[View Book Page] Select Book",(0,s.Ky)()),g=((0,s.PH)("[Collection/API] Add Book Success",(0,s.Ky)()),(0,s.PH)("[Collection/API] Add Book Failure",(0,s.Ky)())),f=((0,s.PH)("[Collection/API] Remove Book Success",(0,s.Ky)()),(0,s.PH)("[Collection/API] Remove Book Failure",(0,s.Ky)())),u=(0,s.PH)("[Selected Book Page] Add Book",(0,s.Ky)()),h=(0,s.PH)("[Selected Book Page] Remove Book",(0,s.Ky)()),k=(0,o(322).H)({selectId:t=>t.id,sortComparer:!1}),b=k.getInitialState({selectedBookId:null}),_=(0,s.Lq)(b,(0,s.on)(l,c,(t,{books:e})=>k.addMany(e,t)),(0,s.on)(i,(t,{book:e})=>k.addOne(e,t)),(0,s.on)(p,(t,{id:e})=>Object.assign(Object.assign({},t),{selectedBookId:e}))),x=(0,s.Lq)({loaded:!1,loading:!1,ids:[]},(0,s.on)(a,t=>Object.assign(Object.assign({},t),{loading:!0})),(0,s.on)(c,(t,{books:e})=>({loaded:!0,loading:!1,ids:e.map(t=>t.id)})),(0,s.on)(u,f,(t,{book:e})=>t.ids.indexOf(e.id)>-1?t:Object.assign(Object.assign({},t),{ids:[...t.ids,e.id]})),(0,s.on)(h,g,(t,{book:e})=>Object.assign(Object.assign({},t),{ids:t.ids.filter(t=>t!==e.id)}))),y=(0,s.Lq)({ids:[],loading:!1,error:"",query:""},(0,s.on)(d,(t,{query:e})=>""===e?{ids:[],loading:!1,error:"",query:e}:Object.assign(Object.assign({},t),{loading:!0,error:"",query:e})),(0,s.on)(l,(t,{books:e})=>({ids:e.map(t=>t.id),loading:!1,error:"",query:t.query})),(0,s.on)(m,(t,{errorMsg:e})=>Object.assign(Object.assign({},t),{loading:!1,error:e}))),A="books-store",v={search:y,books:_,collection:x},w=(0,s.ZF)(A),C=(0,s.P1)(w,t=>t.books),Z=(0,s.P1)(C,t=>t.selectedBookId),{selectEntities:P}=k.getSelectors(C),O=(0,s.P1)(P,Z,(t,e)=>e&&t[e]),S=(0,s.P1)(w,t=>t.search),T=(0,s.P1)(S,t=>t.ids),q=(0,s.P1)(S,t=>t.query),I=(0,s.P1)(S,t=>t.loading),L=(0,s.P1)(S,t=>t.error),U=(0,s.P1)(P,T,(t,e)=>e.map(e=>t[e]).filter(t=>null!=t)),B=(0,s.P1)(w,t=>t.collection),M=((0,s.P1)(B,t=>t.loaded),(0,s.P1)(B,t=>t.loading),(0,s.P1)(B,t=>t.ids)),E=(0,s.P1)(P,M,(t,e)=>e.map(e=>t[e]).filter(t=>null!=t)),J=(0,s.P1)(M,Z,(t,e)=>!!e&&t.indexOf(e)>-1);var $=o(5366),Q=o(2797);let N=(()=>{class t{transform(t){if(!t)return"Author Unknown";switch(t.length){case 0:return"Author Unknown";case 1:return t[0];case 2:return t.join(" and ");default:const e=t[t.length-1];return`${t.slice(0,-1).join(", ")}, and ${e}`}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=$.Yjl({name:"addCommas",type:t,pure:!0}),t})(),Y=(()=>{class t{get authors(){return this.book.volumeInfo.authors}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-book-authors"]],inputs:{book:"book"},decls:5,vars:3,consts:[["mat-subheader","",1,"mt-5"]],template:function(t,e){1&t&&($.TgZ(0,"h5",0),$._uU(1,"Written By:"),$.qZA(),$.TgZ(2,"span"),$._uU(3),$.ALo(4,"addCommas"),$.qZA()),2&t&&($.xp6(3),$.hij(" ",$.lcZ(4,1,e.authors),"\n"))},pipes:[N],styles:[""]}),t})(),R=(()=>{class t{transform(t,e=250){const o=t.replace(/(<([^>]+)>)/gi,"");return t.length>=e?`${o.slice(0,e)}...`:o}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=$.Yjl({name:"ellipsis",type:t,pure:!0}),t})();function j(t,e){if(1&t&&$._UZ(0,"img",4),2&t){const t=$.oxw();$.Q6J("src",t.thumbnail,$.LSH)}}function X(t,e){if(1&t&&($.TgZ(0,"mat-card-subtitle"),$._uU(1),$.ALo(2,"ellipsis"),$.qZA()),2&t){const t=$.oxw();$.xp6(1),$.Oqu($.xi3(2,1,t.subtitle,40))}}function V(t,e){if(1&t&&($.TgZ(0,"p"),$._uU(1),$.ALo(2,"ellipsis"),$.qZA()),2&t){const t=$.oxw();$.xp6(1),$.Oqu($.lcZ(2,1,t.description))}}const H=function(t){return["/ebook/books",t]};let D=(()=>{class t{get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-book-preview"]],inputs:{book:"book"},decls:12,vars:11,consts:[[3,"routerLink"],["mat-card-sm-image","",3,"src",4,"ngIf"],[4,"ngIf"],[3,"book"],["mat-card-sm-image","",3,"src"]],template:function(t,e){1&t&&($.TgZ(0,"a",0),$.TgZ(1,"mat-card"),$.TgZ(2,"mat-card-title-group"),$.YNc(3,j,1,1,"img",1),$.TgZ(4,"mat-card-title"),$._uU(5),$.ALo(6,"ellipsis"),$.qZA(),$.YNc(7,X,3,4,"mat-card-subtitle",2),$.qZA(),$.TgZ(8,"mat-card-content"),$.YNc(9,V,3,3,"p",2),$.qZA(),$.TgZ(10,"mat-card-footer"),$._UZ(11,"lib-book-authors",3),$.qZA(),$.qZA(),$.qZA()),2&t&&($.Q6J("routerLink",$.VKq(9,H,e.id)),$.xp6(3),$.Q6J("ngIf",e.thumbnail),$.xp6(2),$.Oqu($.xi3(6,6,e.title,35)),$.xp6(2),$.Q6J("ngIf",e.subtitle),$.xp6(2),$.Q6J("ngIf",e.description),$.xp6(2),$.Q6J("book",e.book))},directives:[r.yS,Q.a8,Q.C1,n.O5,Q.n5,Q.dn,Q.rt,Y,Q.vP,Q.$j],pipes:[R],styles:["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:flex}mat-card[_ngcontent-%COMP%]{width:400px;margin:15px;display:flex;flex-flow:column;justify-content:space-between}@media only screen and (max-width:768px){mat-card[_ngcontent-%COMP%]{margin:15px 0!important}}mat-card[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 16px -2px rgba(0,0,0,.5)}mat-card-title[_ngcontent-%COMP%]{margin-right:10px}mat-card-title-group[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 0}span[_ngcontent-%COMP%]{display:inline-block;font-size:13px}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px}"]}),t})();function W(t,e){1&t&&$._UZ(0,"lib-book-preview",1),2&t&&$.Q6J("book",e.$implicit)}let F=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-book-preview-list"]],inputs:{books:"books"},decls:1,vars:1,consts:[[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(t,e){1&t&&$.YNc(0,W,1,1,"lib-book-preview",0),2&t&&$.Q6J("ngForOf",e.books)},directives:[n.sg,D],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}"]}),t})(),K=(()=>{class t{constructor(t){this.store=t,this.books$=t.select(E)}ngOnInit(){this.store.dispatch(a())}}return t.\u0275fac=function(e){return new(e||t)($.Y36(s.yh))},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-books"]],decls:5,vars:3,consts:[[3,"books"]],template:function(t,e){1&t&&($.TgZ(0,"mat-card"),$.TgZ(1,"mat-card-title"),$._uU(2,"My Collection"),$.qZA(),$.qZA(),$._UZ(3,"lib-book-preview-list",0),$.ALo(4,"async")),2&t&&($.xp6(3),$.Q6J("books",$.lcZ(4,1,e.books$)))},directives:[Q.a8,Q.n5,F],pipes:[n.Ov],styles:["mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),t})();var z=o(611),G=o(3070),tt=o(9550),et=o(7064),ot=o(9861),nt=o(3169),rt=o(6136);function st(t,e){if(1&t&&($.O4$(),$._UZ(0,"circle",3)),2&t){const t=$.oxw();$.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),$.uIk("r",t._getCircleRadius())}}function it(t,e){if(1&t&&($.O4$(),$._UZ(0,"circle",3)),2&t){const t=$.oxw();$.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),$.uIk("r",t._getCircleRadius())}}function at(t,e){if(1&t&&($.O4$(),$._UZ(0,"circle",3)),2&t){const t=$.oxw();$.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),$.uIk("r",t._getCircleRadius())}}function ct(t,e){if(1&t&&($.O4$(),$._UZ(0,"circle",3)),2&t){const t=$.oxw();$.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),$.uIk("r",t._getCircleRadius())}}const dt=".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class lt{constructor(t){this._elementRef=t}}const mt=(0,et.pj)(lt,"primary"),pt=new $.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let gt=(()=>{class t extends mt{constructor(e,o,n,r,s){super(e),this._elementRef=e,this._document=n,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const i=t._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),i.has(n.head)||i.set(n.head,new Set([100])),this._fallbackAnimation=o.EDGE||o.TRIDENT,this._noopAnimations="NoopAnimations"===r&&!!s&&!s._forceAnimations,s&&(s.diameter&&(this.diameter=s.diameter),s.strokeWidth&&(this.strokeWidth=s.strokeWidth))}get diameter(){return this._diameter}set diameter(t){this._diameter=(0,ot.su)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(t){this._strokeWidth=(0,ot.su)(t)}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,(0,ot.su)(t)))}ngOnInit(){const t=this._elementRef.nativeElement;this._styleRoot=(0,nt.kV)(t)||this._document.head,this._attachStyleNode(),t.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const t=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${t} ${t}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,o=this._diameter,n=t._diameters;let r=n.get(e);if(!r||!r.has(o)){const t=this._document.createElement("style");t.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),t.textContent=this._getAnimationText(),e.appendChild(t),r||(r=new Set,n.set(e,r)),r.add(o)}}_getAnimationText(){const t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return t.\u0275fac=function(e){return new(e||t)($.Y36($.SBq),$.Y36(nt.t4),$.Y36(n.K0,8),$.Y36(rt.Qb,8),$.Y36(pt))},t.\u0275cmp=$.Xpm({type:t,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&($.uIk("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),$.Udp("width",e.diameter,"px")("height",e.diameter,"px"),$.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[$.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&($.O4$(),$.TgZ(0,"svg",0),$.YNc(1,st,1,9,"circle",1),$.YNc(2,it,1,7,"circle",2),$.qZA()),2&t&&($.Udp("width",e.diameter,"px")("height",e.diameter,"px"),$.Q6J("ngSwitch","indeterminate"===e.mode),$.uIk("viewBox",e._getViewBox()),$.xp6(1),$.Q6J("ngSwitchCase",!0),$.xp6(1),$.Q6J("ngSwitchCase",!1))},directives:[n.RF,n.n9],styles:[dt],encapsulation:2,changeDetection:0}),t._diameters=new WeakMap,t})(),ft=(()=>{class t extends gt{constructor(t,e,o,n,r){super(t,e,o,n,r),this.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)($.Y36($.SBq),$.Y36(nt.t4),$.Y36(n.K0,8),$.Y36(rt.Qb,8),$.Y36(pt))},t.\u0275cmp=$.Xpm({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&($.Udp("width",e.diameter,"px")("height",e.diameter,"px"),$.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[$.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&($.O4$(),$.TgZ(0,"svg",0),$.YNc(1,at,1,9,"circle",1),$.YNc(2,ct,1,7,"circle",2),$.qZA()),2&t&&($.Udp("width",e.diameter,"px")("height",e.diameter,"px"),$.Q6J("ngSwitch","indeterminate"===e.mode),$.uIk("viewBox",e._getViewBox()),$.xp6(1),$.Q6J("ngSwitchCase",!0),$.xp6(1),$.Q6J("ngSwitchCase",!1))},directives:[n.RF,n.n9],styles:[dt],encapsulation:2,changeDetection:0}),t})(),ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=$.oAB({type:t}),t.\u0275inj=$.cJS({imports:[[et.BQ,n.ez],et.BQ]}),t})();function ht(t,e){if(1&t&&($.TgZ(0,"span"),$._uU(1),$.qZA()),2&t){const t=$.oxw();$.xp6(1),$.Oqu(t.error)}}let kt=(()=>{class t{constructor(){this.query="",this.searching=!1,this.error="",this.search=new $.vpe}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-book-search"]],inputs:{query:"query",searching:"searching",error:"error"},outputs:{search:"search"},decls:9,vars:6,consts:[["matInput","","placeholder","Search for a book",3,"value","keyup"],[3,"diameter","strokeWidth"],[4,"ngIf"]],template:function(t,e){1&t&&($.TgZ(0,"mat-card"),$.TgZ(1,"mat-card-title"),$._uU(2,"Find a Book"),$.qZA(),$.TgZ(3,"mat-card-content"),$.TgZ(4,"mat-form-field"),$.TgZ(5,"input",0),$.NdJ("keyup",function(t){return e.search.emit(t.target.value)}),$.qZA(),$.qZA(),$._UZ(6,"mat-spinner",1),$.qZA(),$.TgZ(7,"mat-card-footer"),$.YNc(8,ht,2,1,"span",2),$.qZA(),$.qZA()),2&t&&($.xp6(5),$.Q6J("value",e.query),$.xp6(1),$.ekj("show",e.searching),$.Q6J("diameter",30)("strokeWidth",3),$.xp6(2),$.Q6J("ngIf",e.error))},directives:[Q.a8,Q.n5,Q.dn,G.KE,tt.Nt,ft,Q.rt,n.O5],styles:["mat-card-content[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}mat-card-footer[_ngcontent-%COMP%]{color:red;padding:5px 0}.mat-form-field[_ngcontent-%COMP%]{min-width:300px;margin-right:10px}.mat-spinner[_ngcontent-%COMP%]{position:relative;top:10px;left:10px;visibility:hidden}.mat-spinner.show[_ngcontent-%COMP%]{visibility:visible}"]}),t})(),bt=(()=>{class t{constructor(t){this.store=t,this.searchQuery$=t.select(q).pipe((0,z.q)(1)),this.books$=t.select(U),this.loading$=t.select(I),this.error$=t.select(L)}search(t){this.store.dispatch(d({query:t}))}}return t.\u0275fac=function(e){return new(e||t)($.Y36(s.yh))},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-find-book"]],decls:6,vars:12,consts:[[3,"query","searching","error","search"],[3,"books"]],template:function(t,e){1&t&&($.TgZ(0,"lib-book-search",0),$.NdJ("search",function(t){return e.search(t)}),$.ALo(1,"async"),$.ALo(2,"async"),$.ALo(3,"async"),$.qZA(),$._UZ(4,"lib-book-preview-list",1),$.ALo(5,"async")),2&t&&($.Q6J("query",$.lcZ(1,4,e.searchQuery$))("searching",$.lcZ(2,6,e.loading$))("error",$.lcZ(3,8,e.error$)),$.xp6(4),$.Q6J("books",$.lcZ(5,10,e.books$)))},directives:[kt,F],pipes:[n.Ov],styles:[""]}),t})();var _t=o(9996),xt=o(4369);function yt(t,e){if(1&t&&($.TgZ(0,"mat-card-subtitle"),$._uU(1),$.qZA()),2&t){const t=$.oxw(2);$.xp6(1),$.Oqu(t.subtitle)}}function At(t,e){if(1&t&&$._UZ(0,"img",8),2&t){const t=$.oxw(2);$.Q6J("src",t.thumbnail,$.LSH)}}function vt(t,e){if(1&t){const t=$.EpF();$.TgZ(0,"button",9),$.NdJ("click",function(){$.CHM(t);const e=$.oxw(2);return e.remove.emit(e.book)}),$._uU(1," Remove Book from Collection "),$.qZA()}}function wt(t,e){if(1&t){const t=$.EpF();$.TgZ(0,"button",10),$.NdJ("click",function(){$.CHM(t);const e=$.oxw(2);return e.add.emit(e.book)}),$._uU(1," Add Book to Collection "),$.qZA()}}function Ct(t,e){if(1&t&&($.TgZ(0,"mat-card"),$.TgZ(1,"mat-card-title-group"),$.TgZ(2,"mat-card-title"),$._uU(3),$.qZA(),$.YNc(4,yt,2,1,"mat-card-subtitle",0),$.YNc(5,At,1,1,"img",1),$.qZA(),$.TgZ(6,"mat-card-content"),$._UZ(7,"p",2),$.qZA(),$.TgZ(8,"mat-card-footer",3),$._UZ(9,"bc-book-authors",4),$.qZA(),$.TgZ(10,"mat-card-actions",5),$.YNc(11,vt,2,0,"button",6),$.YNc(12,wt,2,0,"button",7),$.qZA(),$.qZA()),2&t){const t=$.oxw();$.xp6(3),$.Oqu(t.title),$.xp6(1),$.Q6J("ngIf",t.subtitle),$.xp6(1),$.Q6J("ngIf",t.thumbnail),$.xp6(2),$.Q6J("innerHtml",t.description,$.oJD),$.xp6(2),$.Q6J("book",t.book),$.xp6(2),$.Q6J("ngIf",t.inCollection),$.xp6(1),$.Q6J("ngIf",!t.inCollection)}}let Zt=(()=>{class t{constructor(){this.add=new $.vpe,this.remove=new $.vpe}get id(){return this.book.id}get title(){return this.book.volumeInfo.title}get subtitle(){return this.book.volumeInfo.subtitle}get description(){return this.book.volumeInfo.description}get thumbnail(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-book-detail"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],["mat-card-sm-image","",3,"src",4,"ngIf"],[3,"innerHtml"],[1,"footer"],[3,"book"],["align","start"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-card-sm-image","",3,"src"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&$.YNc(0,Ct,13,7,"mat-card",0),2&t&&$.Q6J("ngIf",e.book)},directives:[n.O5,Q.a8,Q.C1,Q.n5,Q.dn,Q.rt,Q.hq,Q.$j,Q.vP,xt.lW],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:75px 0}mat-card[_ngcontent-%COMP%]{max-width:600px}mat-card-title-group[_ngcontent-%COMP%]{margin-left:0}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 50px}mat-card-actions[_ngcontent-%COMP%]{margin:25px 0 0!important}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px;position:relative}"]}),t})(),Pt=(()=>{class t{constructor(t){this.store=t,this.book$=t.select(O),this.isSelectedBookInCollection$=t.select(J)}addToCollection(t){this.store.dispatch(u({book:t}))}removeFromCollection(t){this.store.dispatch(h({book:t}))}}return t.\u0275fac=function(e){return new(e||t)($.Y36(s.yh))},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-selected-book"]],decls:3,vars:6,consts:[[3,"book","inCollection","add","remove"]],template:function(t,e){1&t&&($.TgZ(0,"lib-book-detail",0),$.NdJ("add",function(t){return e.addToCollection(t)})("remove",function(t){return e.removeFromCollection(t)}),$.ALo(1,"async"),$.ALo(2,"async"),$.qZA()),2&t&&$.Q6J("book",$.lcZ(1,2,e.book$))("inCollection",$.lcZ(2,4,e.isSelectedBookInCollection$))},directives:[Zt],pipes:[n.Ov],styles:[""]}),t})();const Ot=[{path:"find",component:bt,data:{title:"Find book"}},{path:":id",component:(()=>{class t{constructor(t,e){this.actionsSubscription=e.params.pipe((0,_t.U)(t=>p({id:t.id}))).subscribe(e=>t.dispatch(e))}ngOnDestroy(){this.actionsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)($.Y36(s.yh),$.Y36(r.gz))},t.\u0275cmp=$.Xpm({type:t,selectors:[["lib-view-book"]],decls:1,vars:0,template:function(t,e){1&t&&$._UZ(0,"lib-selected-book")},directives:[Pt],styles:[""],changeDetection:0}),t})(),data:{title:"Book details"}},{path:"",component:K,data:{title:"Book Collection"}}];let St=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=$.oAB({type:t}),t.\u0275inj=$.cJS({imports:[[r.Bz.forChild(Ot)],r.Bz]}),t})();var Tt=o(4809),qt=o(8569),It=o(653),Lt=o(878),Ut=o(7701),Bt=o(4689),Mt=o(4698),Et=o(5416),Jt=o(7727),$t=o(2693);let Qt=(()=>{class t{constructor(t){this.http=t,this.API_PATH="https://www.googleapis.com/books/v1/volumes"}searchBooks(t){return this.http.get(`${this.API_PATH}?orderBy=newest&q=${t}`).pipe((0,_t.U)(t=>t.items||[]))}retrieveBook(t){return this.http.get(`${this.API_PATH}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)($.LFG($t.eN))},t.\u0275prov=$.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Nt=(()=>{class t{constructor(t,e){this.actions$=t,this.googleBooks=e,this.search$=(0,Tt.GW)(()=>({debounce:t=300,scheduler:e=qt.z}={})=>this.actions$.pipe((0,Tt.l4)(d),(0,Ut.b)(t,e),(0,Bt.w)(({query:t})=>{if(""===t)return It.c;const e=this.actions$.pipe((0,Tt.l4)(d),(0,Mt.T)(1));return this.googleBooks.searchBooks(t).pipe((0,Et.R)(e),(0,_t.U)(t=>(console.log("PP",t),l({books:t}))),(0,Jt.K)(t=>(0,Lt.of)(m({errorMsg:t.message}))))})))}}return t.\u0275fac=function(e){return new(e||t)($.LFG(Tt.eX),$.LFG(Qt))},t.\u0275prov=$.Yz7({token:t,factory:t.\u0275fac}),t})(),Yt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=$.oAB({type:t}),t.\u0275inj=$.cJS({imports:[[n.ez,St,Q.QW,ut,G.lN,tt.c,xt.ot,s.Aw.forFeature(A,v),Tt.sQ.forFeature([Nt])]]}),t})()}}]);