"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[3431],{3431:(B,l,o)=>{o.r(l),o.d(l,{GuitardemoComponent:()=>v,GuitardemoModule:()=>R,GuitardemoService:()=>_});var t=o(5e3);let _=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=o(5620),s=(()=>{return(e=s||(s={})).Add="[Guitars] Add to cart",e.Remove="[Guitars] Remove from cart",e.LoadItems="[Guitars] Load items from server",e.LoadSuccess="[Guitars] Load success",s;var e})();const g=(0,r.PH)(s.Add,(0,r.Ky)()),m=(0,r.PH)(s.Remove,(0,r.Ky)()),u=(0,r.PH)(s.LoadItems),f=(0,r.PH)(s.LoadSuccess,(0,r.Ky)()),C="guitar",O=(0,r.Lq)({items:[],cart:[]},(0,r.on)(f,(e,a)=>Object.assign(Object.assign({},e),{items:[...a.payload]})),(0,r.on)(g,(e,a)=>Object.assign(Object.assign({},e),{cart:[...e.cart,a.payload]})),(0,r.on)(m,(e,a)=>Object.assign(Object.assign({},e),{cart:[...e.cart.filter(n=>n.name!==a.payload.name)]}))),h=(0,r.ZF)(C),y=(0,r.P1)(h,e=>e.items),M=(0,r.P1)(h,e=>e.cart);var c=o(9808);function P(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"span",4),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&e){const n=a.ngIf;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",n.length,"")}}let b=(()=>{class e{constructor(n){this.store=n,this.cart$=this.store.pipe((0,r.Ys)(M))}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(r.yh))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-header"]],decls:11,vars:3,consts:[[1,"logo"],["src","../../../../../../assets/images/electric.png","alt","logo"],["src","../../../../../../assets/images/case.png","alt","cart"],["class","badge",4,"ngIf"],[1,"badge"]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"header")(1,"div",0),t.\u0275\u0275element(2,"img",1),t.\u0275\u0275elementStart(3,"h5"),t.\u0275\u0275text(4,"Guitarfy"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(5,"div")(6,"ul")(7,"li"),t.\u0275\u0275element(8,"img",2),t.\u0275\u0275template(9,P,2,1,"span",3),t.\u0275\u0275pipe(10,"async"),t.\u0275\u0275elementEnd()()()()),2&n&&(t.\u0275\u0275advance(9),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(10,1,i.cart$)))},dependencies:[c.O5,c.Ov],styles:["header[_ngcontent-%COMP%]{display:flex;background-color:#e0d7ce;margin:0;padding:5px 5%;color:#f5f5f5;box-shadow:0 2px 4px #e0d7ce}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50px;border-radius:50%;margin-right:17px}header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-family:Lobster,cursive;font-size:23px;margin:0;letter-spacing:1px;background:linear-gradient(90deg,#04131a 44%,#7c7c7e 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0;display:flex}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{height:20px;width:20px;font-size:11px;color:#fff;background-color:#cf3d56;display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:-10px;border-radius:50%}"]}),e})();function G(e,a){if(1&e){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",9),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(n);const d=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(d.addToCart(d.guitar))}),t.\u0275\u0275element(1,"img",10),t.\u0275\u0275elementEnd()}}function I(e,a){if(1&e){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",11),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(n);const d=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(d.removeFromCart(d.guitar))}),t.\u0275\u0275element(1,"img",12),t.\u0275\u0275elementEnd()}}let S=(()=>{class e{constructor(n){this.store=n,this.inCart=!1}addToCart(n){this.store.dispatch(g({payload:n})),this.inCart=!0}removeFromCart(n){this.store.dispatch(m({payload:n})),this.inCart=!1}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(r.yh))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-guitar"]],inputs:{guitar:"guitar"},decls:14,vars:7,consts:[[1,"guitar"],[1,"guitar-image",3,"src","alt"],[1,"guitar-details"],[1,"guitar-details__name"],[1,"guitar-details__price"],[1,"guitar-description"],[1,"guitar-actions"],["class","guitar-actions__add",3,"click",4,"ngIf"],["class","guitar-actions__remove",3,"click",4,"ngIf"],[1,"guitar-actions__add",3,"click"],["src","assets/images/add-to-cart.png","alt","AddToCart"],[1,"guitar-actions__remove",3,"click"],["src","assets/images/remove-from-cart.png","alt","RemoveFromCart"]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div"),t.\u0275\u0275element(2,"img",1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",2)(4,"p",3),t.\u0275\u0275text(5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"p",4),t.\u0275\u0275text(7),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(8,"div",5)(9,"p"),t.\u0275\u0275text(10),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(11,"div",6),t.\u0275\u0275template(12,G,2,0,"button",7),t.\u0275\u0275template(13,I,2,0,"button",8),t.\u0275\u0275elementEnd()()),2&n&&(t.\u0275\u0275advance(2),t.\u0275\u0275property("src",i.guitar.image,t.\u0275\u0275sanitizeUrl)("alt",i.guitar.name),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(i.guitar.name),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1("$",i.guitar.price,""),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(i.guitar.description),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!i.inCart),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",i.inCart))},dependencies:[c.O5],styles:[".guitar-actions__remove[_ngcontent-%COMP%], .guitar-actions__add[_ngcontent-%COMP%]{border-radius:50%;display:flex;justify-content:center;align-items:center;height:32px;width:32px;cursor:pointer}.guitar-actions__remove[_ngcontent-%COMP%]:hover, .guitar-actions__add[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.guitar-actions__remove[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .guitar-actions__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:16px;height:16px}.guitar[_ngcontent-%COMP%]{box-shadow:0 1px 1px #f6e1ce;border-radius:5px;margin:0 15px 30px 0;width:286px;max-height:400px;height:320px;transition:all .3s ease-in-out}.guitar[_ngcontent-%COMP%]:hover{transform:scale(1.05);border:1px solid #f6e1ce}.guitar[_ngcontent-%COMP%]:hover   .guitar-actions[_ngcontent-%COMP%]{display:flex}.guitar-image[_ngcontent-%COMP%]{max-width:100%;border-top-right-radius:5px;border-top-left-radius:5px;width:300px;height:180px;object-fit:cover}.guitar-details[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:8px 15px}.guitar-details__price[_ngcontent-%COMP%]{font-weight:500;font-size:.8rem;letter-spacing:1px;margin:0}.guitar-details__name[_ngcontent-%COMP%]{font-weight:800;margin:0}.guitar-description[_ngcontent-%COMP%]{padding:10px 15px}.guitar-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.guitar-actions[_ngcontent-%COMP%]{display:none;justify-content:flex-end;padding:0 15px}.guitar-actions__add[_ngcontent-%COMP%]{border:2px solid #f6e1ce}.guitar-actions__remove[_ngcontent-%COMP%]{border:2px solid #f92323}"]}),e})();function w(e,a){1&e&&t.\u0275\u0275element(0,"app-guitar",2),2&e&&t.\u0275\u0275property("guitar",a.$implicit)}let j=(()=>{class e{constructor(){this.guitars=[]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-guitars-list"]],inputs:{guitars:"guitars"},decls:2,vars:1,consts:[[1,"guitar-list"],[3,"guitar",4,"ngFor","ngForOf"],[3,"guitar"]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275template(1,w,1,1,"app-guitar",1),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",i.guitars))},dependencies:[c.sg,S],styles:[".guitar-list[_ngcontent-%COMP%]{padding:10px 0;margin-top:30px;display:flex;flex-wrap:wrap;justify-content:center}"]}),e})();function F(e,a){if(1&e&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275element(1,"img",3),t.\u0275\u0275elementEnd()),2&e){const n=a.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("src","assets/images/banner"+n+".jpg",t.\u0275\u0275sanitizeUrl)}}let E=(()=>{class e{constructor(n){this.store=n,this.bannersIndex=[1,2,3,4],this.items$=this.store.pipe((0,r.Ys)(y))}ngOnInit(){this.store.dispatch(u())}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275directiveInject(r.yh))},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["app-home"]],decls:6,vars:4,consts:[[1,"banners"],[4,"ngFor","ngForOf"],[3,"guitars"],["alt","banner",3,"src"]],template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"main")(1,"section",0),t.\u0275\u0275template(2,F,2,1,"div",1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"section"),t.\u0275\u0275element(4,"app-guitars-list",2),t.\u0275\u0275pipe(5,"async"),t.\u0275\u0275elementEnd()()),2&n&&(t.\u0275\u0275advance(2),t.\u0275\u0275property("ngForOf",i.bannersIndex),t.\u0275\u0275advance(2),t.\u0275\u0275property("guitars",t.\u0275\u0275pipeBind1(5,2,i.items$)))},dependencies:[c.sg,j,c.Ov],styles:["main[_ngcontent-%COMP%]{width:90%;margin:auto;padding:20px 15px}main[_ngcontent-%COMP%]   .banners[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}main[_ngcontent-%COMP%]   .banners[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:26%;margin-right:10px}main[_ngcontent-%COMP%]   .banners[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;width:100%;max-width:100%;border-radius:10px;object-fit:cover}"]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.\u0275\u0275defineComponent({type:e,selectors:[["lib-guitardemo"]],decls:3,vars:0,template:function(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275element(1,"app-header")(2,"app-home"),t.\u0275\u0275elementEnd())},dependencies:[b,E],encapsulation:2}),e})();var H=o(5357),p=o(6991),T=o(5577),L=o(4004),k=o(262),$=o(515),z=o(520);let V=(()=>{class e{constructor(n){this.http=n}getAll(){return this.http.get("http://localhost:3000/guitars")}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275inject(z.eN))},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),A=(()=>{class e{constructor(n,i){this.actions$=n,this.guitarsService=i,this.loadGuitars$=(0,p.GW)(()=>this.actions$.pipe((0,p.l4)(u),(0,T.z)(()=>this.guitarsService.getAll().pipe((0,L.U)(d=>f({payload:d})),(0,k.K)(()=>$.E)))))}}return e.\u0275fac=function(n){return new(n||e)(t.\u0275\u0275inject(p.eX),t.\u0275\u0275inject(V))},e.\u0275prov=t.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();const K=[{path:"",component:v,children:[]}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=t.\u0275\u0275defineInjector({imports:[c.ez,H.Bz.forChild(K),r.Aw.forFeature(C,O),p.sQ.forFeature([A])]}),e})()}}]);