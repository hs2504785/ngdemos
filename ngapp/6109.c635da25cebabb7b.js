"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[6109],{6109:(C,l,n)=>{n.r(l),n.d(l,{EshopModule:()=>x});var u=n(9808),i=n(5357),e=n(5e3),m=n(3717);const h=function(){return["/shopping/product-list"]},c=function(){return["/category/list"]};function v(t,r){1&t&&(e.\u0275\u0275elementStart(0,"ul",14)(1,"li",15)(2,"a",16),e.\u0275\u0275text(3,"Products"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"li",15)(5,"a",16),e.\u0275\u0275text(6,"Categories"),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(2,h)),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(3,c)))}function f(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",10)(1,"button",11),e.\u0275\u0275text(2," Admin "),e.\u0275\u0275element(3,"span",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,v,7,4,"ul",13),e.\u0275\u0275elementEnd())}function s(t,r){1&t&&(e.\u0275\u0275elementStart(0,"ul",17)(1,"li",6),e.\u0275\u0275element(2,"app-cart-link-widget"),e.\u0275\u0275elementEnd()())}const g=function(){return["home"]},a=function(){return["shopping/products"]};let y=(()=>{class t{constructor(o){this.authService=o}ngOnInit(){this.authService.user.subscribe({next:d=>{this.user=d},error:d=>console.error(d)})}}return t.\u0275fac=function(o){return new(o||t)(e.\u0275\u0275directiveInject(m.e))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["eshop-header"]],decls:12,vars:6,consts:[[1,"header"],[1,"navbar","navbar-expand-lg","navbar-dark","bg-info"],[1,"container"],[1,"navbar-brand",3,"routerLink"],["id","navbarColor01",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],["class","btn-group","dropdown","",4,"ngIf"],["class","navbar-nav",4,"ngIf"],["dropdown","",1,"btn-group"],["id","button-basic","dropdownToggle","","type","button","aria-controls","dropdown-basic",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],["id","dropdown-basic","class","dropdown-menu","role","menu","aria-labelledby","button-basic",4,"dropdownMenu"],["id","dropdown-basic","role","menu","aria-labelledby","button-basic",1,"dropdown-menu"],["role","menuitem"],[1,"dropdown-item",3,"routerLink"],[1,"navbar-nav"]],template:function(o,d){1&o&&(e.\u0275\u0275elementStart(0,"header",0)(1,"nav",1)(2,"div",2)(3,"a",3),e.\u0275\u0275text(4,"eShop"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",4)(6,"ul",5)(7,"li",6)(8,"a",7),e.\u0275\u0275text(9,"Go Shopping"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(10,f,5,0,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,s,3,0,"ul",9),e.\u0275\u0275elementEnd()()()()),2&o&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(4,g)),e.\u0275\u0275advance(5),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(5,a)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",d.user.isadmin),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",d.user.id))},dependencies:[u.O5,i.yS]}),t})();const b=function(){return["support"]},E=[{path:"",component:(()=>{class t{constructor(){this.user={}}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-eshop"]],decls:6,vars:2,consts:[[1,"container"],[1,"customer-support-button-container"],[1,"support-out-icon",3,"routerLink"],[1,"ti-support"]],template:function(o,d){1&o&&(e.\u0275\u0275element(0,"eshop-header"),e.\u0275\u0275elementStart(1,"div",0),e.\u0275\u0275element(2,"router-outlet"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",1)(4,"a",2),e.\u0275\u0275element(5,"i",3),e.\u0275\u0275elementEnd()()),2&o&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction0(1,b)))},dependencies:[i.lC,i.yS,y],styles:[".customer-support-button-container[_ngcontent-%COMP%]{position:fixed;right:50px;bottom:50px}.support-out-icon[_ngcontent-%COMP%]{font-size:30px;border:solid #ced4da 2px;border-radius:100%;width:60px;height:60px;padding:10px;text-align:center;background-color:#3fb618;color:#f8f9fa}"],changeDetection:0}),t})(),children:[{path:"",loadChildren:()=>Promise.all([n.e(3075),n.e(1530)]).then(n.bind(n,1530)).then(t=>t.PagesModule)},{path:"shopping",loadChildren:()=>Promise.all([n.e(3075),n.e(2167)]).then(n.bind(n,2167)).then(t=>t.ProductsModule)}]},{path:"**",redirectTo:"not-found"}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[i.Bz.forChild(E),i.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[u.ez,S]}),t})()},3717:(C,l,n)=>{n.d(l,{e:()=>f});var u={id:null,username:null,email:null,isadmin:!1},i=n(1135),e=n(9646),m=n(2843),h=n(3900),c=n(5e3),v=n(520);let f=(()=>{class s{constructor(a){this.http=a,this.baseUrl="http://localhost:3000/users/",this.userSource=new i.X(u),this.user=this.userSource.asObservable()}login(a,y){return this.http.get(this.baseUrl+"?username="+a).pipe((0,h.w)(b=>{let p=b[0];return p?(localStorage.setItem("user",JSON.stringify(p)),(0,e.of)(p)):(0,m._)("Unable to login")}))}updatedUserSelection(a){this.userSource.next(a)}}return s.\u0275fac=function(a){return new(a||s)(c.\u0275\u0275inject(v.eN))},s.\u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);