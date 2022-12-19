"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[5959],{5959:(lt,N,r)=>{r.r(N),r.d(N,{EbookComponent:()=>_,EbookModule:()=>k,EbookService:()=>u});var t=r(4650);class u{constructor(){}}u.\u0275fac=function(e){return new(e||u)},u.\u0275prov=t.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"});var i=r(9653);const y=(0,i.PH)("[Auth] Logout"),j=(0,i.PH)("[Auth] Logout Confirmation"),G=(0,i.PH)("[Auth] Logout Confirmation Dismiss"),P=(0,i.PH)("[Login Component] Login",(0,i.Ky)()),C=(0,i.PH)("[Auth/API] Login Success",(0,i.Ky)()),W=(0,i.PH)("[Auth/API] Login Failure",(0,i.Ky)()),z=(0,i.PH)("[Auth/API] Login Redirect"),p=(0,i.Lq)({error:null,pending:!1},(0,i.on)(P,o=>({...o,error:null,pending:!0})),(0,i.on)(C,o=>({...o,error:null,pending:!1})),(0,i.on)(W,(o,{error:e})=>({...o,error:e,pending:!1}))),m={user:null},O="auth",ct={status:(0,i.Lq)(m,(0,i.on)(C,(o,{user:e})=>({...o,user:e})),(0,i.on)(y,()=>m)),login:p},Y=(0,i.ZF)(O),dt=(0,i.P1)(Y,o=>o.status),mt=(0,i.P1)(dt,o=>o.user),Z=(0,i.P1)(mt,o=>!!o),q=(0,i.P1)(Y,o=>o.login),tt=((0,i.P1)(q,o=>o.error),(0,i.P1)(q,o=>o.pending),(0,i.PH)("[Layout] Open Sidenav")),et=(0,i.PH)("[Layout] Close Sidenav"),pt=(0,i.Lq)({showSidenav:!1},(0,i.on)(et,o=>({showSidenav:!1})),(0,i.on)(tt,o=>({showSidenav:!0})),(0,i.on)(j,o=>({showSidenav:!1}))),ft=(0,i.ZF)("layout"),gt=(0,i.P1)(ft,o=>o.showSidenav);var M=r(6895),f=r(9116),J=r(3267),X=r(6338);class D{constructor(){this.open=!1,this.closeMenu=new t.EventEmitter}ngOnInit(){}}D.\u0275fac=function(e){return new(e||D)},D.\u0275cmp=t.\u0275\u0275defineComponent({type:D,selectors:[["lib-sidenav"]],inputs:{open:"open"},outputs:{closeMenu:"closeMenu"},ngContentSelectors:["*"],decls:4,vars:1,consts:[["disableClose","",3,"opened","keydown.escape","closedStart"],["sidenav",""]],template:function(e,n){if(1&e){const d=t.\u0275\u0275getCurrentView();t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"mat-sidenav",0,1),t.\u0275\u0275listener("keydown.escape",function(){t.\u0275\u0275restoreView(d);const h=t.\u0275\u0275reference(1);return t.\u0275\u0275resetView(h.close())})("closedStart",function(){return n.closeMenu.emit()}),t.\u0275\u0275elementStart(2,"mat-nav-list"),t.\u0275\u0275projection(3),t.\u0275\u0275elementEnd()()}2&e&&t.\u0275\u0275property("opened",n.open)},dependencies:[J.JX,X.Hk],styles:["mat-sidenav[_ngcontent-%COMP%]{width:300px}"]});var R=r(4859),nt=r(3683);class B{constructor(){this.openMenu=new t.EventEmitter}ngOnInit(){}}B.\u0275fac=function(e){return new(e||B)},B.\u0275cmp=t.\u0275\u0275defineComponent({type:B,selectors:[["lib-toolbar"]],outputs:{openMenu:"openMenu"},ngContentSelectors:["*"],decls:4,vars:0,consts:[["color","primary"],["mat-icon-button","","aria-label","menu",3,"click"],[1,"ti-menu"]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"mat-toolbar",0)(1,"button",1),t.\u0275\u0275listener("click",function(){return n.openMenu.emit()}),t.\u0275\u0275element(2,"i",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275projection(3),t.\u0275\u0275elementEnd())},dependencies:[R.RK,nt.Ye]});class ${constructor(){this.icon="",this.hint="",this.routerLink="/ebook",this.navigate=new t.EventEmitter}}function yt(o,e){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"lib-nav-item",6),t.\u0275\u0275listener("navigate",function(){t.\u0275\u0275restoreView(n);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.closeSidenav())}),t.\u0275\u0275text(1," My Collection "),t.\u0275\u0275elementEnd()}}function Ct(o,e){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"lib-nav-item",7),t.\u0275\u0275listener("navigate",function(){t.\u0275\u0275restoreView(n);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.closeSidenav())}),t.\u0275\u0275text(1," Browse Books "),t.\u0275\u0275elementEnd()}}function Mt(o,e){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"lib-nav-item",8),t.\u0275\u0275listener("navigate",function(){t.\u0275\u0275restoreView(n);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.closeSidenav())}),t.\u0275\u0275text(1," Sign In "),t.\u0275\u0275elementEnd()}}function _t(o,e){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"lib-nav-item",8),t.\u0275\u0275listener("navigate",function(){t.\u0275\u0275restoreView(n);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.logout())}),t.\u0275\u0275text(1," Sign Out "),t.\u0275\u0275elementEnd()}}$.\u0275fac=function(e){return new(e||$)},$.\u0275cmp=t.\u0275\u0275defineComponent({type:$,selectors:[["lib-nav-item"]],inputs:{icon:"icon",hint:"hint",routerLink:"routerLink"},outputs:{navigate:"navigate"},ngContentSelectors:["*"],decls:6,vars:5,consts:[["mat-list-item","",3,"routerLink","click"],["mat-list-icon",""],["mat-line",""],["mat-line","",1,"secondary"]],template:function(e,n){1&e&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"a",0),t.\u0275\u0275listener("click",function(){return n.navigate.emit()}),t.\u0275\u0275element(1,"i",1),t.\u0275\u0275elementStart(2,"span",2),t.\u0275\u0275projection(3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"span",3),t.\u0275\u0275text(5),t.\u0275\u0275elementEnd()()),2&e&&(t.\u0275\u0275property("routerLink",n.routerLink),t.\u0275\u0275advance(1),t.\u0275\u0275classMapInterpolate1("ti-",n.icon,""),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(n.hint))},dependencies:[f.rH,X.Tg],styles:[".secondary[_ngcontent-%COMP%]{color:#0000008a}"]});class _{constructor(e){this.store=e,this.showSidenav$=this.store.select(gt),this.loggedIn$=this.store.select(Z)}closeSidenav(){this.store.dispatch(et())}openSidenav(){this.store.dispatch(tt())}logout(){this.store.dispatch(j())}}_.\u0275fac=function(e){return new(e||_)(t.\u0275\u0275directiveInject(i.yh))},_.\u0275cmp=t.\u0275\u0275defineComponent({type:_,selectors:[["lib-ebook"]],decls:14,vars:15,consts:[["fullscreen",""],[3,"open"],["routerLink","books","icon","book","hint","View your book collection",3,"navigate",4,"ngIf"],["routerLink","books/find","icon","search","hint","Find your next book!",3,"navigate",4,"ngIf"],[3,"navigate",4,"ngIf"],[3,"openMenu"],["routerLink","books","icon","book","hint","View your book collection",3,"navigate"],["routerLink","books/find","icon","search","hint","Find your next book!",3,"navigate"],[3,"navigate"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"mat-sidenav-container",0)(1,"lib-sidenav",1),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275template(3,yt,2,0,"lib-nav-item",2),t.\u0275\u0275pipe(4,"async"),t.\u0275\u0275template(5,Ct,2,0,"lib-nav-item",3),t.\u0275\u0275pipe(6,"async"),t.\u0275\u0275template(7,Mt,2,0,"lib-nav-item",4),t.\u0275\u0275pipe(8,"async"),t.\u0275\u0275template(9,_t,2,0,"lib-nav-item",4),t.\u0275\u0275pipe(10,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"lib-toolbar",5),t.\u0275\u0275listener("openMenu",function(){return n.openSidenav()}),t.\u0275\u0275text(12," Book Collection "),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(13,"router-outlet"),t.\u0275\u0275elementEnd()),2&e&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("open",t.\u0275\u0275pipeBind1(2,5,n.showSidenav$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(4,7,n.loggedIn$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(6,9,n.loggedIn$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",!1===t.\u0275\u0275pipeBind1(8,11,n.loggedIn$)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(10,13,n.loggedIn$)))},dependencies:[M.O5,f.lC,f.rH,J.TM,D,B,$,M.Ov],styles:["mat-sidenav-container[_ngcontent-%COMP%]{background:rgba(0,0,0,.03)}"]});var it=r(4144),V=r(3546),v=r(6325),E=r(9646),g=r(4006);function Et(o,e){if(1&o&&(t.\u0275\u0275elementStart(0,"p",11),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",n.errorMessage," ")}}class H{constructor(e){this.fb=e,this.submitted=new t.EventEmitter}ngOnInit(){this.form=this.fb.group({username:"ngrx",password:""})}submit(){this.form.valid&&this.submitted.emit(this.form.value)}}H.\u0275fac=function(e){return new(e||H)(t.\u0275\u0275directiveInject(g.qu))},H.\u0275cmp=t.\u0275\u0275defineComponent({type:H,selectors:[["lib-login-form"]],inputs:{errorMessage:"errorMessage"},outputs:{submitted:"submitted"},decls:17,vars:2,consts:[["appearance","outlined"],[1,"mx-5"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","email","id","name","formControlName","username",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","formControlName","password",1,"form-control"],["class","loginError",4,"ngIf"],[1,"loginButtons"],["type","submit","mat-button",""],[1,"loginError"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"mat-card",0)(1,"mat-card-title"),t.\u0275\u0275text(2,"Login"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"mat-card-content",1)(4,"form",2),t.\u0275\u0275listener("ngSubmit",function(){return n.submit()}),t.\u0275\u0275elementStart(5,"div",3)(6,"label",4),t.\u0275\u0275text(7,"Name"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(8,"input",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"div",3)(10,"label",6),t.\u0275\u0275text(11,"Password"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(12,"input",7),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(13,Et,2,1,"p",8),t.\u0275\u0275elementStart(14,"p",9)(15,"button",10),t.\u0275\u0275text(16,"Login"),t.\u0275\u0275elementEnd()()()()()),2&e&&(t.\u0275\u0275advance(4),t.\u0275\u0275property("formGroup",n.form),t.\u0275\u0275advance(9),t.\u0275\u0275property("ngIf",n.errorMessage))},dependencies:[M.O5,R.lW,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,V.a8,V.dn,V.n5],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;margin:72px 0}.mat-mdc-form-field[_ngcontent-%COMP%]{width:100%;min-width:300px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.loginError[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.loginButtons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}"]});class K{constructor(e,n){this.store=e,this.router=n,this.pending$=(0,E.of)(!1),this.error$=(0,E.of)(!1)}onSubmit(e){this.store.dispatch(P({credentials:e}))}}K.\u0275fac=function(e){return new(e||K)(t.\u0275\u0275directiveInject(i.yh),t.\u0275\u0275directiveInject(f.F0))},K.\u0275cmp=t.\u0275\u0275defineComponent({type:K,selectors:[["lib-login"]],decls:2,vars:3,consts:[[3,"errorMessage","submitted"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"lib-login-form",0),t.\u0275\u0275listener("submitted",function(s){return n.onSubmit(s)}),t.\u0275\u0275pipe(1,"async"),t.\u0275\u0275elementEnd()),2&e&&t.\u0275\u0275property("errorMessage",t.\u0275\u0275pipeBind1(1,1,n.error$))},dependencies:[H,M.Ov]});const St=[{path:"login",component:K,data:{title:"Login"}}];class S{}S.\u0275fac=function(e){return new(e||S)},S.\u0275mod=t.\u0275\u0275defineNgModule({type:S}),S.\u0275inj=t.\u0275\u0275defineInjector({imports:[f.Bz.forChild(St),f.Bz]});var wt=r(9549),c=r(8776),xt=r(4351),w=r(4004),rt=r(262),It=r(515);const Tt=(0,i.PH)("[Auth] Load Auths"),Lt=(0,i.PH)("[Auth] Load Auths Success",(0,i.Ky)()),At=(0,i.PH)("[Auth] Load Auths Failure",(0,i.Ky)());class x{constructor(e){this.actions$=e,this.loadAuths$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(Tt),(0,xt.b)(()=>It.E.pipe((0,w.U)(n=>Lt({data:n})),(0,rt.K)(n=>(0,E.of)(At({error:n})))))))}}x.\u0275fac=function(e){return new(e||x)(t.\u0275\u0275inject(c.eX))},x.\u0275prov=t.\u0275\u0275defineInjectable({token:x,factory:x.\u0275fac});var at=r(6129),st=r(8505),kt=r(2843);class b{constructor(){}login({username:e}){return"test"!==e&&"ngrx"!==e?(0,kt._)("Invalid username or password"):(0,E.of)({name:"User"})}logout(){return(0,E.of)(!0)}}b.\u0275fac=function(e){return new(e||b)},b.\u0275prov=t.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac,providedIn:"root"});class I{constructor(e,n,d){this.actions$=e,this.authService=n,this.router=d,this.login$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(P),(0,w.U)(s=>s.credentials),(0,at.z)(s=>this.authService.login(s).pipe((0,w.U)(h=>C({user:h})),(0,rt.K)(h=>(0,E.of)(W({error:h}))))))),this.loginSuccess$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(C),(0,st.b)(()=>{this.router.navigate(["/ebook"])})),{dispatch:!1}),this.loginRedirect$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(z,y),(0,st.b)(s=>{this.router.navigate(["/ebook/login"])})),{dispatch:!1})}}I.\u0275fac=function(e){return new(e||I)(t.\u0275\u0275inject(c.eX),t.\u0275\u0275inject(b),t.\u0275\u0275inject(f.F0))},I.\u0275prov=t.\u0275\u0275defineInjectable({token:I,factory:I.\u0275fac});class U{constructor(){}ngOnInit(){}}U.\u0275fac=function(e){return new(e||U)},U.\u0275cmp=t.\u0275\u0275defineComponent({type:U,selectors:[["lib-logout-confirmation-dialog"]],decls:9,vars:2,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"h2",0),t.\u0275\u0275text(1,"Logout"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"mat-dialog-content"),t.\u0275\u0275text(3,"Are you sure you want to logout?"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"mat-dialog-actions")(5,"button",1),t.\u0275\u0275text(6,"Cancel"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"button",1),t.\u0275\u0275text(8,"OK"),t.\u0275\u0275elementEnd()()),2&e&&(t.\u0275\u0275advance(5),t.\u0275\u0275property("mat-dialog-close",!1),t.\u0275\u0275advance(2),t.\u0275\u0275property("mat-dialog-close",!0))},dependencies:[R.lW,v.ZT,v.uh,v.xY,v.H8],styles:["[_nghost-%COMP%]{display:block;width:100%;max-width:300px}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}[mat-button][_ngcontent-%COMP%]{padding:0}"]});const jt=(0,i.PH)("[User] Idle Timeout");class T{constructor(e,n,d,s){this.actions$=e,this.authService=n,this.router=d,this.dialog=s,this.logoutConfirmation$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(j),(0,at.z)(()=>this.dialog.open(U).afterClosed()),(0,w.U)(h=>h?y():G()))),this.logoutIdleUser$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(jt),(0,w.U)(()=>y())))}}T.\u0275fac=function(e){return new(e||T)(t.\u0275\u0275inject(c.eX),t.\u0275\u0275inject(b),t.\u0275\u0275inject(f.F0),t.\u0275\u0275inject(v.uw))},T.\u0275prov=t.\u0275\u0275defineInjectable({token:T,factory:T.\u0275fac});class L{}L.\u0275fac=function(e){return new(e||L)},L.\u0275mod=t.\u0275\u0275defineNgModule({type:L}),L.\u0275inj=t.\u0275\u0275defineInjector({imports:[M.ez,S,R.ot,g.UX,V.QW,wt.lN,it.c,v.Is,i.Aw.forFeature(O,ct),c.sQ.forFeature([x,I,T])]});var Pt=r(5698);class A{constructor(e,n){this.store=e,this.router=n}canActivate(){return this.store.select(Z).pipe((0,w.U)(e=>!!e||(this.store.dispatch(z()),!1)),(0,Pt.q)(1))}}A.\u0275fac=function(e){return new(e||A)(t.\u0275\u0275inject(i.yh),t.\u0275\u0275inject(f.F0))},A.\u0275prov=t.\u0275\u0275defineInjectable({token:A,factory:A.\u0275fac,providedIn:"root"});const Ft=[{path:"",component:_,children:[{path:"books",loadChildren:()=>r.e(8325).then(r.bind(r,8325)).then(o=>o.BooksModule),canActivate:[A]},{path:"",redirectTo:"books",pathMatch:"full"}]}];class k{}k.\u0275fac=function(e){return new(e||k)},k.\u0275mod=t.\u0275\u0275defineNgModule({type:k}),k.\u0275inj=t.\u0275\u0275defineInjector({imports:[M.ez,L,f.Bz.forChild(Ft),it.c,V.QW,R.ot,J.SJ,X.ie,nt.g0,v.Is,i.Aw.forFeature("layout",pt)]})},3683:(lt,N,r)=>{r.d(N,{Ye:()=>W,g0:()=>Q});var t=r(4650),u=r(3238),i=r(3353),y=r(6895);const j=["*",[["mat-toolbar-row"]]],G=["*","mat-toolbar-row"],P=(0,u.pj)(class{constructor(a){this._elementRef=a}});let C=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275dir=t.\u0275\u0275defineDirective({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),a})(),W=(()=>{class a extends P{constructor(l,m,F){super(l),this._platform=m,this._document=F}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return a.\u0275fac=function(l){return new(l||a)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(i.t4),t.\u0275\u0275directiveInject(y.K0))},a.\u0275cmp=t.\u0275\u0275defineComponent({type:a,selectors:[["mat-toolbar"]],contentQueries:function(l,m,F){if(1&l&&t.\u0275\u0275contentQuery(F,C,5),2&l){let O;t.\u0275\u0275queryRefresh(O=t.\u0275\u0275loadQuery())&&(m._toolbarRows=O)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(l,m){2&l&&t.\u0275\u0275classProp("mat-toolbar-multiple-rows",m._toolbarRows.length>0)("mat-toolbar-single-row",0===m._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:G,decls:2,vars:0,template:function(l,m){1&l&&(t.\u0275\u0275projectionDef(j),t.\u0275\u0275projection(0),t.\u0275\u0275projection(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"],encapsulation:2,changeDetection:0}),a})(),Q=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=t.\u0275\u0275defineInjector({imports:[u.BQ,u.BQ]}),a})()}}]);