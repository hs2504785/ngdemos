(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[921],{921:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GuitardemoComponent:()=>w,GuitardemoModule:()=>A,GuitardemoService:()=>i});var r=n(5366);let i=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=n(1671),o=function(t){return t.Add="[Guitars] Add to cart",t.Remove="[Guitars] Remove from cart",t.LoadItems="[Guitars] Load items from server",t.LoadSuccess="[Guitars] Load success",t}({});const c=(0,a.PH)(o.Add,(0,a.Ky)()),s=(0,a.PH)(o.Remove,(0,a.Ky)()),l=(0,a.PH)(o.LoadItems),g=(0,a.PH)(o.LoadSuccess,(0,a.Ky)()),d="guitar",p=(0,a.Lq)({items:[],cart:[]},(0,a.on)(g,(t,e)=>Object.assign(Object.assign({},t),{items:[...e.payload]})),(0,a.on)(c,(t,e)=>Object.assign(Object.assign({},t),{cart:[...t.cart,e.payload]})),(0,a.on)(s,(t,e)=>Object.assign(Object.assign({},t),{cart:[...t.cart.filter(t=>t.name!==e.payload.name)]}))),m=(0,a.ZF)(d),u=(0,a.P1)(m,t=>t.items),f=(0,a.P1)(m,t=>t.cart);var h=n(1116);function _(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"span",4),r["\u0275\u0275text"](1),r["\u0275\u0275elementEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"](" ",t.length,"")}}let x=(()=>{class t{constructor(t){this.store=t,this.cart$=this.store.pipe((0,a.Ys)(f))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.yh))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-header"]],decls:11,vars:3,consts:[[1,"logo"],["src","../../../../../../assets/images/electric.png","alt","logo"],["src","../../../../../../assets/images/case.png","alt","cart"],["class","badge",4,"ngIf"],[1,"badge"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"header"),r["\u0275\u0275elementStart"](1,"div",0),r["\u0275\u0275element"](2,"img",1),r["\u0275\u0275elementStart"](3,"h5"),r["\u0275\u0275text"](4,"Guitarfy"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](5,"div"),r["\u0275\u0275elementStart"](6,"ul"),r["\u0275\u0275elementStart"](7,"li"),r["\u0275\u0275element"](8,"img",2),r["\u0275\u0275template"](9,_,2,1,"span",3),r["\u0275\u0275pipe"](10,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](9),r["\u0275\u0275property"]("ngIf",r["\u0275\u0275pipeBind1"](10,1,e.cart$)))},directives:[h.O5],pipes:[h.Ov],styles:["header[_ngcontent-%COMP%]{display:flex;background-color:#e0d7ce;margin:0;padding:5px 5%;color:#f5f5f5;box-shadow:0 2px 4px 0 #e0d7ce}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;border-radius:50%;margin-right:17px}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lobster,cursive;font-size:23px;margin:0;letter-spacing:1px;background:linear-gradient(90deg,#04131a 44%,#7c7c7e);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0;display:flex}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{height:20px;width:20px;font-size:11px;color:#fff;background-color:#cf3d56;display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:-10px;border-radius:50%}"]}),t})();function C(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",9),r["\u0275\u0275listener"]("click",function(){r["\u0275\u0275restoreView"](t);const e=r["\u0275\u0275nextContext"]();return e.addToCart(e.guitar)}),r["\u0275\u0275element"](1,"img",10),r["\u0275\u0275elementEnd"]()}}function v(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"button",11),r["\u0275\u0275listener"]("click",function(){r["\u0275\u0275restoreView"](t);const e=r["\u0275\u0275nextContext"]();return e.removeFromCart(e.guitar)}),r["\u0275\u0275element"](1,"img",12),r["\u0275\u0275elementEnd"]()}}let O=(()=>{class t{constructor(t){this.store=t,this.inCart=!1}addToCart(t){this.store.dispatch(c({payload:t})),this.inCart=!0}removeFromCart(t){this.store.dispatch(s({payload:t})),this.inCart=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.yh))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-guitar"]],inputs:{guitar:"guitar"},decls:14,vars:7,consts:[[1,"guitar"],[1,"guitar-image",3,"src","alt"],[1,"guitar-details"],[1,"guitar-details__name"],[1,"guitar-details__price"],[1,"guitar-description"],[1,"guitar-actions"],["class","guitar-actions__add",3,"click",4,"ngIf"],["class","guitar-actions__remove",3,"click",4,"ngIf"],[1,"guitar-actions__add",3,"click"],["src","assets/images/add-to-cart.png","alt","AddToCart"],[1,"guitar-actions__remove",3,"click"],["src","assets/images/remove-from-cart.png","alt","RemoveFromCart"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div"),r["\u0275\u0275element"](2,"img",1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"div",2),r["\u0275\u0275elementStart"](4,"p",3),r["\u0275\u0275text"](5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"p",4),r["\u0275\u0275text"](7),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"div",5),r["\u0275\u0275elementStart"](9,"p"),r["\u0275\u0275text"](10),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"div",6),r["\u0275\u0275template"](12,C,2,0,"button",7),r["\u0275\u0275template"](13,v,2,0,"button",8),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("src",e.guitar.image,r["\u0275\u0275sanitizeUrl"])("alt",e.guitar.name),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.guitar.name),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"]("$",e.guitar.price,""),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](e.guitar.description),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!e.inCart),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf",e.inCart))},directives:[h.O5],styles:[".guitar-actions__add[_ngcontent-%COMP%], .guitar-actions__remove[_ngcontent-%COMP%]{border-radius:50%;display:flex;justify-content:center;align-items:center;height:32px;width:32px;cursor:pointer}.guitar-actions__add[_ngcontent-%COMP%]:hover, .guitar-actions__remove[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.guitar-actions__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .guitar-actions__remove[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px}.guitar[_ngcontent-%COMP%]{box-shadow:0 1px 1px 0 #f6e1ce;border-radius:5px;margin:0 15px 30px 0;width:286px;max-height:400px;height:320px;transition:all .3s ease-in-out}.guitar[_ngcontent-%COMP%]:hover{transform:scale(1.05);border:1px solid #f6e1ce}.guitar[_ngcontent-%COMP%]:hover   .guitar-actions[_ngcontent-%COMP%]{display:flex}.guitar-image[_ngcontent-%COMP%]{max-width:100%;border-top-right-radius:5px;border-top-left-radius:5px;width:300px;height:180px;object-fit:cover}.guitar-details[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:8px 15px}.guitar-details__price[_ngcontent-%COMP%]{font-weight:500;font-size:.8rem;letter-spacing:1px;margin:0}.guitar-details__name[_ngcontent-%COMP%]{font-weight:800;margin:0}.guitar-description[_ngcontent-%COMP%]{padding:10px 15px}.guitar-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.guitar-actions[_ngcontent-%COMP%]{display:none;justify-content:flex-end;padding:0 15px}.guitar-actions__add[_ngcontent-%COMP%]{border:2px solid #f6e1ce}.guitar-actions__remove[_ngcontent-%COMP%]{border:2px solid #f92323}"]}),t})();function P(t,e){1&t&&r["\u0275\u0275element"](0,"app-guitar",2),2&t&&r["\u0275\u0275property"]("guitar",e.$implicit)}let M=(()=>{class t{constructor(){this.guitars=[]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-guitars-list"]],inputs:{guitars:"guitars"},decls:2,vars:1,consts:[[1,"guitar-list"],[3,"guitar",4,"ngFor","ngForOf"],[3,"guitar"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275template"](1,P,1,1,"app-guitar",1),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngForOf",e.guitars))},directives:[h.sg,O],styles:[".guitar-list[_ngcontent-%COMP%]{padding:10px 0;margin-top:30px;display:flex;flex-wrap:wrap;justify-content:center}"]}),t})();function y(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"img",3),r["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("src","assets/images/banner"+t+".jpg",r["\u0275\u0275sanitizeUrl"])}}let b=(()=>{class t{constructor(t){this.store=t,this.bannersIndex=[1,2,3,4],this.items$=this.store.pipe((0,a.Ys)(u))}ngOnInit(){this.store.dispatch(l())}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](a.yh))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-home"]],decls:6,vars:4,consts:[[1,"banners"],[4,"ngFor","ngForOf"],[3,"guitars"],["alt","banner",3,"src"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"main"),r["\u0275\u0275elementStart"](1,"section",0),r["\u0275\u0275template"](2,y,2,1,"div",1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"section"),r["\u0275\u0275element"](4,"app-guitars-list",2),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",e.bannersIndex),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("guitars",r["\u0275\u0275pipeBind1"](5,2,e.items$)))},directives:[h.sg,M],pipes:[h.Ov],styles:["main[_ngcontent-%COMP%]{width:90%;margin:auto;padding:20px 15px}main[_ngcontent-%COMP%]   .banners[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .banners[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:26%;margin-right:10px}main[_ngcontent-%COMP%]   .banners[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;width:100%;max-width:100%;border-radius:10px;object-fit:cover}"]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["lib-guitardemo"]],decls:3,vars:0,template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275element"](1,"app-header"),r["\u0275\u0275element"](2,"app-home"),r["\u0275\u0275elementEnd"]())},directives:[x,b],encapsulation:2}),t})();var I=n(766),S=n(1368),j=n(3982),E=n(9996),k=n(7727),F=n(653),G=n(2693);let $=(()=>{class t{constructor(t){this.http=t}getAll(){return this.http.get("http://localhost:3000/guitars")}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](G.eN))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),z=(()=>{class t{constructor(t,e){this.actions$=t,this.guitarsService=e,this.loadGuitars$=(0,S.GW)(()=>this.actions$.pipe((0,S.l4)(l),(0,j.zg)(()=>this.guitarsService.getAll().pipe((0,E.U)(t=>g({payload:t})),(0,k.K)(()=>F.E)))))}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](S.eX),r["\u0275\u0275inject"]($))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();const L=[{path:"",component:w,children:[]}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[h.ez,I.Bz.forChild(L),a.Aw.forFeature(d,p),S.sQ.forFeature([z])]]}),t})()}}]);