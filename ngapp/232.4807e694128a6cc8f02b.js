(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[232],{9232:(e,t,n)=>{"use strict";n.r(t),n.d(t,{EbookComponent:()=>q,EbookModule:()=>Ce,EbookService:()=>i});var o=n(5366);let i=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var r=n(1671);const s=(0,r.PH)("[Auth] Logout"),a=(0,r.PH)("[Auth] Logout Confirmation"),c=(0,r.PH)("[Auth] Logout Confirmation Dismiss"),l=(0,r.PH)("[Login Component] Login",(0,r.Ky)()),u=(0,r.PH)("[Auth/API] Login Success",(0,r.Ky)()),d=(0,r.PH)("[Auth/API] Login Failure",(0,r.Ky)()),p=(0,r.PH)("[Auth/API] Login Redirect"),m=(0,r.Lq)({error:null,pending:!1},(0,r.on)(l,e=>Object.assign(Object.assign({},e),{error:null,pending:!0})),(0,r.on)(u,e=>Object.assign(Object.assign({},e),{error:null,pending:!1})),(0,r.on)(d,(e,{error:t})=>Object.assign(Object.assign({},e),{error:t,pending:!1}))),f={user:null},g=(0,r.Lq)(f,(0,r.on)(u,(e,{user:t})=>Object.assign(Object.assign({},e),{user:t})),(0,r.on)(s,()=>f)),h="auth",v={status:g,login:m},b=(0,r.ZF)(h),y=(0,r.P1)(b,e=>e.status),S=(0,r.P1)(y,e=>e.user),w=(0,r.P1)(S,e=>!!e),k=(0,r.P1)(b,e=>e.login),C=((0,r.P1)(k,e=>e.error),(0,r.P1)(k,e=>e.pending),(0,r.PH)("[Layout] Open Sidenav")),x=(0,r.PH)("[Layout] Close Sidenav"),E="layout",I=(0,r.Lq)({showSidenav:!1},(0,r.on)(x,e=>({showSidenav:!1})),(0,r.on)(C,e=>({showSidenav:!0})),(0,r.on)(a,e=>({showSidenav:!1}))),j=(0,r.ZF)(E),M=(0,r.P1)(j,e=>e.showSidenav);var P=n(168),L=n(667);const O=["*"];let $=(()=>{class e{constructor(){this.open=!1,this.closeMenu=new o.EventEmitter}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-sidenav"]],inputs:{open:"open"},outputs:{closeMenu:"closeMenu"},ngContentSelectors:O,decls:4,vars:1,consts:[["disableClose","",3,"opened","keydown.escape","closedStart"],["sidenav",""]],template:function(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275projectionDef"](),o["\u0275\u0275elementStart"](0,"mat-sidenav",0,1),o["\u0275\u0275listener"]("keydown.escape",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275reference"](1).close()})("closedStart",function(){return t.closeMenu.emit()}),o["\u0275\u0275elementStart"](2,"mat-nav-list"),o["\u0275\u0275projection"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}2&e&&o["\u0275\u0275property"]("opened",t.open)},directives:[P.JX,L.Hk],styles:["mat-sidenav[_ngcontent-%COMP%]{width:300px}"]}),e})();var A=n(1116),H=n(7112),B=n(4369);const F=["*"];let _=(()=>{class e{constructor(){this.openMenu=new o.EventEmitter}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-toolbar"]],outputs:{openMenu:"openMenu"},ngContentSelectors:F,decls:4,vars:0,consts:[["color","primary"],["mat-icon-button","","aria-label","menu",3,"click"],[1,"ti-menu"]],template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275elementStart"](0,"mat-toolbar",0),o["\u0275\u0275elementStart"](1,"button",1),o["\u0275\u0275listener"]("click",function(){return t.openMenu.emit()}),o["\u0275\u0275element"](2,"i",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275projection"](3),o["\u0275\u0275elementEnd"]())},directives:[H.Ye,B.lW],styles:[""]}),e})();var V=n(766),W=n(7064);const U=["*"];let G=(()=>{class e{constructor(){this.icon="",this.hint="",this.routerLink="/ebook",this.navigate=new o.EventEmitter}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-nav-item"]],inputs:{icon:"icon",hint:"hint",routerLink:"routerLink"},outputs:{navigate:"navigate"},ngContentSelectors:U,decls:6,vars:5,consts:[["mat-list-item","",3,"routerLink","click"],["mat-list-icon",""],["mat-line",""],["mat-line","",1,"secondary"]],template:function(e,t){1&e&&(o["\u0275\u0275projectionDef"](),o["\u0275\u0275elementStart"](0,"a",0),o["\u0275\u0275listener"]("click",function(){return t.navigate.emit()}),o["\u0275\u0275element"](1,"i",1),o["\u0275\u0275elementStart"](2,"span",2),o["\u0275\u0275projection"](3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"span",3),o["\u0275\u0275text"](5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("routerLink",t.routerLink),o["\u0275\u0275advance"](1),o["\u0275\u0275classMapInterpolate1"]("ti-",t.icon,""),o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](t.hint))},directives:[L.Tg,V.yS,L.Nh,W.X2],styles:[".secondary[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}"]}),e})();function K(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"lib-nav-item",6),o["\u0275\u0275listener"]("navigate",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().closeSidenav()}),o["\u0275\u0275text"](1," My Collection "),o["\u0275\u0275elementEnd"]()}}function N(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"lib-nav-item",7),o["\u0275\u0275listener"]("navigate",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().closeSidenav()}),o["\u0275\u0275text"](1," Browse Books "),o["\u0275\u0275elementEnd"]()}}function z(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"lib-nav-item",8),o["\u0275\u0275listener"]("navigate",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().closeSidenav()}),o["\u0275\u0275text"](1," Sign In "),o["\u0275\u0275elementEnd"]()}}function X(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"lib-nav-item",8),o["\u0275\u0275listener"]("navigate",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().logout()}),o["\u0275\u0275text"](1," Sign Out "),o["\u0275\u0275elementEnd"]()}}let q=(()=>{class e{constructor(e){this.store=e,this.showSidenav$=this.store.select(M),this.loggedIn$=this.store.select(w)}closeSidenav(){this.store.dispatch(x())}openSidenav(){this.store.dispatch(C())}logout(){this.store.dispatch(a())}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.yh))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-ebook"]],decls:14,vars:15,consts:[["fullscreen",""],[3,"open"],["routerLink","books","icon","book","hint","View your book collection",3,"navigate",4,"ngIf"],["routerLink","books/find","icon","search","hint","Find your next book!",3,"navigate",4,"ngIf"],[3,"navigate",4,"ngIf"],[3,"openMenu"],["routerLink","books","icon","book","hint","View your book collection",3,"navigate"],["routerLink","books/find","icon","search","hint","Find your next book!",3,"navigate"],[3,"navigate"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mat-sidenav-container",0),o["\u0275\u0275elementStart"](1,"lib-sidenav",1),o["\u0275\u0275pipe"](2,"async"),o["\u0275\u0275template"](3,K,2,0,"lib-nav-item",2),o["\u0275\u0275pipe"](4,"async"),o["\u0275\u0275template"](5,N,2,0,"lib-nav-item",3),o["\u0275\u0275pipe"](6,"async"),o["\u0275\u0275template"](7,z,2,0,"lib-nav-item",4),o["\u0275\u0275pipe"](8,"async"),o["\u0275\u0275template"](9,X,2,0,"lib-nav-item",4),o["\u0275\u0275pipe"](10,"async"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](11,"lib-toolbar",5),o["\u0275\u0275listener"]("openMenu",function(){return t.openSidenav()}),o["\u0275\u0275text"](12," Book Collection "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](13,"router-outlet"),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("open",o["\u0275\u0275pipeBind1"](2,5,t.showSidenav$)),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",o["\u0275\u0275pipeBind1"](4,7,t.loggedIn$)),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",o["\u0275\u0275pipeBind1"](6,9,t.loggedIn$)),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",!1===o["\u0275\u0275pipeBind1"](8,11,t.loggedIn$)),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",o["\u0275\u0275pipeBind1"](10,13,t.loggedIn$)))},directives:[P.TM,$,A.O5,_,V.lC,G,V.rH],pipes:[A.Ov],styles:["mat-sidenav-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.03)}"]}),e})();var J=n(9550),T=n(2797),D=n(2935),Q=n(878),Y=n(1041);function Z(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"p",10),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",e.errorMessage," ")}}let R=(()=>{class e{constructor(e){this.fb=e,this.submitted=new o.EventEmitter}ngOnInit(){this.form=this.fb.group({username:"ngrx",password:""})}submit(){this.form.valid&&this.submitted.emit(this.form.value)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](Y.qu))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-login-form"]],inputs:{errorMessage:"errorMessage"},outputs:{submitted:"submitted"},decls:17,vars:2,consts:[[1,"mx-5"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","email","id","name","formControlName","username",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password",1,"form-control"],["class","loginError",4,"ngIf"],[1,"loginButtons"],["type","submit","mat-button",""],[1,"loginError"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mat-card"),o["\u0275\u0275elementStart"](1,"mat-card-title"),o["\u0275\u0275text"](2,"Login"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"mat-card-content",0),o["\u0275\u0275elementStart"](4,"form",1),o["\u0275\u0275listener"]("ngSubmit",function(){return t.submit()}),o["\u0275\u0275elementStart"](5,"div",2),o["\u0275\u0275elementStart"](6,"label",3),o["\u0275\u0275text"](7,"Name"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](8,"input",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"div",2),o["\u0275\u0275elementStart"](10,"label",5),o["\u0275\u0275text"](11,"Password"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](12,"input",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](13,Z,2,1,"p",7),o["\u0275\u0275elementStart"](14,"p",8),o["\u0275\u0275elementStart"](15,"button",9),o["\u0275\u0275text"](16,"Login"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("formGroup",t.form),o["\u0275\u0275advance"](9),o["\u0275\u0275property"]("ngIf",t.errorMessage))},directives:[T.a8,T.n5,T.dn,Y._Y,Y.JL,Y.sg,Y.Fj,Y.JJ,Y.u,A.O5,B.lW],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:72px 0}.mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-content[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{display:flex;justify-content:center}.loginError[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.loginButtons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}"]}),e})();const ee=[{path:"login",component:(()=>{class e{constructor(e,t){this.store=e,this.router=t,this.pending$=(0,Q.of)(!1),this.error$=(0,Q.of)(!1)}onSubmit(e){this.store.dispatch(l({credentials:e}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](r.yh),o["\u0275\u0275directiveInject"](V.F0))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-login"]],decls:2,vars:3,consts:[[3,"errorMessage","submitted"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"lib-login-form",0),o["\u0275\u0275listener"]("submitted",function(e){return t.onSubmit(e)}),o["\u0275\u0275pipe"](1,"async"),o["\u0275\u0275elementEnd"]()),2&e&&o["\u0275\u0275property"]("errorMessage",o["\u0275\u0275pipeBind1"](1,1,t.error$))},directives:[R],pipes:[A.Ov],styles:[""]}),e})(),data:{title:"Login"}}];let te=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[V.Bz.forChild(ee)],V.Bz]}),e})();var ne=n(3070),oe=n(1368),ie=n(436),re=n(9996),se=n(7727),ae=n(653);const ce=(0,r.PH)("[Auth] Load Auths"),le=(0,r.PH)("[Auth] Load Auths Success",(0,r.Ky)()),ue=(0,r.PH)("[Auth] Load Auths Failure",(0,r.Ky)());let de=(()=>{class e{constructor(e){this.actions$=e,this.loadAuths$=(0,oe.GW)(()=>this.actions$.pipe((0,oe.l4)(ce),(0,ie.b)(()=>ae.E.pipe((0,re.U)(e=>le({data:e})),(0,se.K)(e=>(0,Q.of)(ue({error:e})))))))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](oe.eX))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();var pe=n(4981),me=n(6599),fe=n(1225);let ge=(()=>{class e{constructor(){}login({username:e}){return"test"!==e&&"ngrx"!==e?(0,fe._)("Invalid username or password"):(0,Q.of)({name:"User"})}logout(){return(0,Q.of)(!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),he=(()=>{class e{constructor(e,t,n){this.actions$=e,this.authService=t,this.router=n,this.login$=(0,oe.GW)(()=>this.actions$.pipe((0,oe.l4)(l),(0,re.U)(e=>e.credentials),(0,pe.z)(e=>this.authService.login(e).pipe((0,re.U)(e=>u({user:e})),(0,se.K)(e=>(0,Q.of)(d({error:e}))))))),this.loginSuccess$=(0,oe.GW)(()=>this.actions$.pipe((0,oe.l4)(u),(0,me.b)(()=>{this.router.navigate(["/ebook"])})),{dispatch:!1}),this.loginRedirect$=(0,oe.GW)(()=>this.actions$.pipe((0,oe.l4)(p,s),(0,me.b)(e=>{this.router.navigate(["/ebook/login"])})),{dispatch:!1})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](oe.eX),o["\u0275\u0275inject"](ge),o["\u0275\u0275inject"](V.F0))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),ve=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-logout-confirmation-dialog"]],decls:9,vars:2,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"h2",0),o["\u0275\u0275text"](1,"Logout"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](2,"mat-dialog-content"),o["\u0275\u0275text"](3,"Are you sure you want to logout?"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"mat-dialog-actions"),o["\u0275\u0275elementStart"](5,"button",1),o["\u0275\u0275text"](6,"Cancel"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"button",1),o["\u0275\u0275text"](8,"OK"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("mat-dialog-close",!1),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("mat-dialog-close",!0))},directives:[D.uh,D.xY,D.H8,B.lW,D.ZT],styles:["[_nghost-%COMP%]{display:block;width:100%;max-width:300px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}[mat-button][_ngcontent-%COMP%]{padding:0}"]}),e})();const be=(0,r.PH)("[User] Idle Timeout");let ye=(()=>{class e{constructor(e,t,n,o){this.actions$=e,this.authService=t,this.router=n,this.dialog=o,this.logoutConfirmation$=(0,oe.GW)(()=>this.actions$.pipe((0,oe.l4)(a),(0,pe.z)(()=>this.dialog.open(ve).afterClosed()),(0,re.U)(e=>e?s():c()))),this.logoutIdleUser$=(0,oe.GW)(()=>this.actions$.pipe((0,oe.l4)(be),(0,re.U)(()=>s())))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](oe.eX),o["\u0275\u0275inject"](ge),o["\u0275\u0275inject"](V.F0),o["\u0275\u0275inject"](D.uw))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),Se=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[A.ez,te,B.ot,Y.UX,T.QW,ne.lN,J.c,D.Is,r.Aw.forFeature(h,v),oe.sQ.forFeature([de,he,ye])]]}),e})();var we=n(611);const ke=[{path:"",component:q,children:[{path:"books",loadChildren:()=>n.e(743).then(n.bind(n,7743)).then(e=>e.BooksModule),canActivate:[(()=>{class e{constructor(e,t){this.store=e,this.router=t}canActivate(){return this.store.select(w).pipe((0,re.U)(e=>!!e||(this.store.dispatch(p()),!1)),(0,we.q)(1))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.yh),o["\u0275\u0275inject"](V.F0))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]},{path:"",redirectTo:"books"}]}];let Ce=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[A.ez,Se,V.Bz.forChild(ke),J.c,T.QW,B.ot,P.SJ,L.ie,H.g0,D.Is,r.Aw.forFeature(E,I)]]}),e})()}}]);