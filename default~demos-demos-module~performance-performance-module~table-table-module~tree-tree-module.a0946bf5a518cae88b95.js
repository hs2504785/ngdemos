(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{NFeN:function(t,e,n){"use strict";n.d(e,"a",function(){return N}),n.d(e,"b",function(){return j});var o=n("fXoL"),i=n("FKr1"),s=n("8LU1"),r=n("ofXK"),a=n("LRne"),c=n("z6cu"),l=n("cp0P"),u=n("quSY"),m=n("vkgz"),d=n("lJxs"),h=n("JIr8"),b=n("nYR2"),f=n("w1tV"),p=n("IzEk"),g=n("tk/3"),v=n("jhN1");const _=["*"];function I(t){return Error(`Unable to find icon with the name "${t}"`)}function S(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function x(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}class w{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}let y=(()=>{class t{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new w(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){const s=this._sanitizer.sanitize(o.K.HTML,n);if(!s)throw x(n);return this._addSvgIconConfig(t,e,new w("",s,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new w(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const i=this._sanitizer.sanitize(o.K.HTML,e);if(!i)throw x(e);return this._addSvgIconSetConfig(t,new w("",i,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(o.K.RESOURCE_URL,t);if(!e)throw S(t);const n=this._cachedIconsByUrl.get(e);return n?Object(a.a)(C(n)):this._loadSvgIconFromConfig(new w(t,null)).pipe(Object(m.a)(t=>this._cachedIconsByUrl.set(e,t)),Object(d.a)(t=>C(t)))}getNamedSvgIcon(t,e=""){const n=k(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const i=this._iconSetConfigs.get(e);return i?this._getSvgFromIconSetConfigs(t,i):Object(c.a)(I(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Object(a.a)(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Object(d.a)(t=>C(t)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return Object(a.a)(n);const i=e.filter(t=>!t.svgText).map(t=>this._loadSvgIconSetFromConfig(t).pipe(Object(h.a)(e=>{const n=this._sanitizer.sanitize(o.K.RESOURCE_URL,t.url);return this._errorHandler.handleError(new Error(`Loading icon set URL: ${n} failed: ${e.message}`)),Object(a.a)(null)})));return Object(l.a)(i).pipe(Object(d.a)(()=>{const n=this._extractIconWithNameFromAnySet(t,e);if(!n)throw I(t);return n}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.indexOf(t)>-1){const e=this._svgElementFromConfig(o),n=this._extractSvgIconFromSet(e,t,o.options);if(n)return n}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Object(m.a)(e=>t.svgText=e),Object(d.a)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Object(a.a)(null):this._fetchIcon(t).pipe(Object(m.a)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const i=o.cloneNode(!0);if(i.removeAttribute("id"),"svg"===i.nodeName.toLowerCase())return this._setSvgAttributes(i,n);if("symbol"===i.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(i),n);const s=this._svgElementFromString("<svg></svg>");return s.appendChild(i),this._setSvgAttributes(s,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString("<svg></svg>"),n=t.attributes;for(let o=0;o<n.length;o++){const{name:t,value:i}=n[o];"id"!==t&&e.setAttribute(t,i)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){var e;const{url:n,options:i}=t,s=null!==(e=null==i?void 0:i.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const r=this._sanitizer.sanitize(o.K.RESOURCE_URL,n);if(!r)throw S(n);const a=this._inProgressUrlFetches.get(r);if(a)return a;const c=this._httpClient.get(r,{responseType:"text",withCredentials:s}).pipe(Object(b.a)(()=>this._inProgressUrlFetches.delete(r)),Object(f.a)());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(k(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let o=0;o<this._resolvers.length;o++){const i=this._resolvers[o](e,t);if(i)return(n=i).url&&n.options?new w(i.url,null,i.options):new w(i,null)}var n}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(g.a,8),o.Yb(v.b),o.Yb(r.d,8),o.Yb(o.n))},t.\u0275prov=Object(o.Kb)({factory:function(){return new t(Object(o.Yb)(g.a,8),Object(o.Yb)(v.b),Object(o.Yb)(r.d,8),Object(o.Yb)(o.n))},token:t,providedIn:"root"}),t})();function C(t){return t.cloneNode(!0)}function k(t,e){return t+":"+e}class E{constructor(t){this._elementRef=t}}const F=Object(i.q)(E),R=new o.s("mat-icon-location",{providedIn:"root",factory:function(){const t=Object(o.X)(r.d),e=t?t.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}}),z=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],A=z.map(t=>`[${t}]`).join(", "),O=/^url\(['"]?#(.*?)['"]?\)$/;let N=(()=>{class t extends F{constructor(t,e,n,o,i){super(t),this._iconRegistry=e,this._location=o,this._errorHandler=i,this._inline=!1,this._currentIconFetch=u.a.EMPTY,n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=Object(s.c)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=t.querySelectorAll("style");for(let o=0;o<e.length;o++)e[o].textContent+=" ";const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||t.removeChild(n)}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((e,n)=>{e.forEach(e=>{n.setAttribute(e.name,`url('${t}#${e.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(A),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)z.forEach(t=>{const i=e[o],s=i.getAttribute(t),r=s?s.match(O):null;if(r){let e=n.get(i);e||(e=[],n.set(i,e)),e.push({name:t,value:r[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(Object(p.a)(1)).subscribe(t=>this._setSvgElement(t),t=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${t.message}`))})}}}return t.\u0275fac=function(e){return new(e||t)(o.Ob(o.l),o.Ob(y),o.Zb("aria-hidden"),o.Ob(R),o.Ob(o.n))},t.\u0275cmp=o.Ib({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(o.Eb("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),o.Gb("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[o.Ab],ngContentSelectors:_,decls:1,vars:0,template:function(t,e){1&t&&(o.jc(),o.ic(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Mb({type:t}),t.\u0275inj=o.Lb({imports:[[i.f],i.f]}),t})()},bTqV:function(t,e,n){"use strict";n.d(e,"a",function(){return d}),n.d(e,"b",function(){return h});var o=n("FKr1"),i=n("R1ws"),s=n("fXoL"),r=n("u47x");const a=["mat-button",""],c=["*"],l=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"];class u{constructor(t){this._elementRef=t}}const m=Object(o.q)(Object(o.s)(Object(o.r)(u)));let d=(()=>{class t extends m{constructor(t,e,n){super(t),this._focusMonitor=e,this._animationMode=n,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const o of l)this._hasHostAttributes(o)&&this._getHostElement().classList.add(o);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,e){t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(t=>this._getHostElement().hasAttribute(t))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(r.e),s.Ob(i.a,8))},t.\u0275cmp=s.Ib({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){if(1&t&&s.Dc(o.m,1),2&t){let t;s.oc(t=s.cc())&&(e.ripple=t.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,e){2&t&&(s.Eb("disabled",e.disabled||null),s.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[s.Ab],attrs:a,ngContentSelectors:c,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(s.jc(),s.Ub(0,"span",0),s.ic(1),s.Tb(),s.Pb(2,"span",1),s.Pb(3,"span",2)),2&t&&(s.Db(2),s.Gb("mat-button-ripple-round",e.isRoundButton||e.isIconButton),s.kc("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[o.m],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({imports:[[o.n,o.f],o.f]}),t})()}}]);