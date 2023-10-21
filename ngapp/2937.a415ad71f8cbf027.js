"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[2937],{2520:($,y,t)=>{t.d(y,{K:()=>P});var I=t(9347),s=t(5879),m=t(6223),g=t(2032),S=t(4170),E=t(2296);let P=(()=>{class C{constructor(p,d,v){this.fb=p,this.dialogRef=d,this.dialogTitle=v.dialogTitle,this.user=v.user,this.mode=v.mode;const r={email:[""],first_name:[""],last_name:[""]};"update"==this.mode?(this.form=this.fb.group(r),this.form.patchValue({...this.user})):"create"==this.mode&&(this.form=this.fb.group({...r}))}onClose(){this.dialogRef.close()}onSave(){const p={...this.user,...this.form.value};"update"==this.mode?(console.log("Update User",p),this.dialogRef.close(p)):"create"==this.mode&&(console.log("Add User",p),p.avatar="https://reqres.in/img/faces/10-image.jpg",this.dialogRef.close(p))}}return C.\u0275fac=function(p){return new(p||C)(s.\u0275\u0275directiveInject(m.qu),s.\u0275\u0275directiveInject(I.so),s.\u0275\u0275directiveInject(I.WI))},C.\u0275cmp=s.\u0275\u0275defineComponent({type:C,selectors:[["app-user-cs-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","First Name","formControlName","first_name"],["matInput","","placeholder","Last Name","formControlName","last_name"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(p,d){1&p&&(s.\u0275\u0275elementStart(0,"h2",0),s.\u0275\u0275text(1),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(2,"mat-dialog-content"),s.\u0275\u0275elementContainerStart(3)(4,1),s.\u0275\u0275elementStart(5,"mat-form-field"),s.\u0275\u0275element(6,"input",2),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(7,"mat-form-field"),s.\u0275\u0275element(8,"input",3),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(9,"mat-form-field"),s.\u0275\u0275element(10,"input",4),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementContainerEnd()(),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(11,"mat-dialog-actions")(12,"button",5),s.\u0275\u0275listener("click",function(){return d.onClose()}),s.\u0275\u0275text(13,"Close"),s.\u0275\u0275elementEnd(),s.\u0275\u0275elementStart(14,"button",6),s.\u0275\u0275listener("click",function(){return d.onSave()}),s.\u0275\u0275text(15,"Save"),s.\u0275\u0275elementEnd()()),2&p&&(s.\u0275\u0275advance(1),s.\u0275\u0275textInterpolate(d.dialogTitle),s.\u0275\u0275advance(3),s.\u0275\u0275property("formGroup",d.form))},dependencies:[I.uh,I.xY,I.H8,g.Nt,S.KE,E.lW,m.Fj,m.JJ,m.JL,m.sg,m.u],changeDetection:0}),C})()},1410:($,y,t)=>{t.d(y,{O:()=>v});var I=t(9673),s=t(6232),m=t(4664),g=t(9397),S=t(6306),E=t(5879),P=t(7398),C=t(9862),O=t(2546);let p=(()=>{class r{constructor(c,_){this.http=c,this.cacheService=_,this.API_URL="https://reqres.in/api/users"}getUsers(){return this.cacheService.getData(`${this.API_URL}`).pipe((0,P.U)(c=>c.data))}addUser(c){return this.http.post(`${this.API_URL}`,c)}updateUser(c){return this.http.put(`${this.API_URL}/${c.id}`,c)}removeUser(c){return this.http.delete(`${this.API_URL}/${c}`)}}return r.\u0275fac=function(c){return new(c||r)(E.\u0275\u0275inject(C.eN),E.\u0275\u0275inject(O.Q))},r.\u0275prov=E.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var d=t(4190);let v=(()=>{class r extends I.m1{constructor(c,_){super({users:[],selectdUserId:1}),this.userCsService=c,this.route=_,this.users$=this.select(o=>o.users),this.selectedUserId$=this.select(o=>o.selectdUserId),this.usersCount$=this.select(this.users$,o=>o.length),this.top3users$=this.select(this.users$,o=>o.slice(0,3)),this.userById$=this.select(this.users$,this.selectedUserId$,(o,u)=>o.find(f=>f.id===u)),this.getUsers=this.effect(o=>o.pipe((0,m.w)(()=>this.userCsService.getUsers().pipe((0,g.b)({next:u=>this.setUsers(u),error:u=>this.logError(u)}),(0,S.K)(()=>s.E))))),this.addUser=this.effect(o=>o.pipe((0,m.w)(u=>this.userCsService.addUser(u).pipe((0,g.b)({next:f=>this.addUserInStore(f),error:f=>this.logError(f)}),(0,S.K)(()=>s.E))))),this.updateUser=this.effect(o=>o.pipe((0,m.w)(u=>this.userCsService.updateUser(u).pipe((0,g.b)({next:f=>this.updateUserInStore(f),error:f=>this.logError(f)}),(0,S.K)(()=>s.E))))),this.removeUser=this.effect(o=>o.pipe((0,m.w)(u=>this.userCsService.removeUser(+u).pipe((0,g.b)({next:f=>this.removeUserFromStore(u),error:f=>this.logError(f)}),(0,S.K)(()=>s.E))))),this.setUsers=this.updater((o,u)=>({...o,users:[...o.users,...u]})),this.addUserInStore=this.updater((o,u)=>({...o,users:[u,...o.users]})),this.removeUserFromStore=this.updater((o,u)=>({...o,users:o.users.filter(f=>f.id!==+u)})),this.updateUserInStore=this.updater((o,u)=>({...o,users:o.users.map(f=>f.id===u.id?u:f)}))}logError(c){console.log("Errr",c)}}return r.\u0275fac=function(c){return new(c||r)(E.\u0275\u0275inject(p),E.\u0275\u0275inject(d.gz))},r.\u0275prov=E.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),r})()},2546:($,y,t)=>{t.d(y,{Q:()=>p});var I=t(2096),s=t(7328),m=t(8833),g=t(4674),E=t(6196),P=t(9397),C=t(5879),O=t(9862);let p=(()=>{class d{constructor(r){this.http=r,this.responseCache=new Map}getData(r){const D=this.responseCache.get(r);return D?(0,I.of)(D):this.http.get(r).pipe(function S(d,v,r,D){r&&!(0,g.m)(r)&&(D=r);const c=(0,g.m)(r)?r:void 0;return _=>(0,m.O)(new s.t(d,v,D),c)(_)}(1),(0,E.x)(),(0,P.b)(c=>{this.responseCache.set(r,c)}))}clearCache(){this.responseCache.clear()}}return d.\u0275fac=function(r){return new(r||d)(C.\u0275\u0275inject(O.eN))},d.\u0275prov=C.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},9673:($,y,t)=>{t.d(y,{m1:()=>N});var I=t(5592),s=t(7394),m=t(6410),g=t(7328),S=t(7258),E=t(2096),P=t(2381),C=t(6232),O=t(8504),p=t(5154),d=t(2572),v=t(8645),r=t(9773),D=t(3093),c=t(9397),_=t(2460),o=t(7398),u=t(6306),f=t(8180),W=t(3997),b=t(7081),x=t(5879),B=t(1993);function A(i){return"function"==typeof i.ngrxOnStoreInit}function T(i){return"function"==typeof i.ngrxOnStateInit}const F=new x.InjectionToken("@ngrx/component-store Initial State");let N=(()=>{class i{constructor(e){this.destroySubject$=new g.t(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new g.t(1),this.isInitialized=!1,this.state$=this.select(n=>n),this.state=(0,B.O4)(this.stateSubject$.pipe((0,r.R)(this.destroy$)),{requireSync:!1,manualCleanup:!0}),this.\u0275hasProvider=!1,e&&this.initState(e),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(e){return n=>{let h,a=!0;const U=((0,S.b)(n)?n:(0,E.of)(n)).pipe((0,D.Q)(P.N),(0,c.b)(()=>this.assertStateIsInitialized()),(0,_.M)(this.stateSubject$),(0,o.U)(([j,R])=>e(R,j)),(0,c.b)(j=>this.stateSubject$.next(j)),(0,u.K)(j=>a?(h=j,C.E):(0,O._)(j)),(0,r.R)(this.destroy$)).subscribe();if(h)throw h;return a=!1,U}}initState(e){(0,p.x)([e],P.N).subscribe(n=>{this.isInitialized=!0,this.stateSubject$.next(n)})}setState(e){"function"!=typeof e?this.initState(e):this.updater(e)()}patchState(e){const n="function"==typeof e?e(this.get()):e;this.updater((a,h)=>({...a,...h}))(n)}get(e){let n;return this.assertStateIsInitialized(),this.stateSubject$.pipe((0,f.q)(1)).subscribe(a=>{n=e?e(a):a}),n}select(...e){const{observablesOrSelectorsObject:n,projector:a,config:h}=function H(i){const l=Array.from(i);let n={debounce:!1,equal:(M,U)=>M===U};if(function J(i){return typeof i.debounce<"u"||typeof i.equal<"u"}(l[l.length-1])&&(n={...n,...l.pop()}),1===l.length&&"function"!=typeof l[0])return{observablesOrSelectorsObject:l[0],projector:void 0,config:n};const a=l.pop();return{observablesOrSelectorsObject:l,projector:a,config:n}}(e);return(function Q(i,l){return Array.isArray(i)&&0===i.length&&l}(n,a)?this.stateSubject$:(0,d.a)(n)).pipe(h.debounce?function z(){return i=>new I.y(l=>{let e,n;const a=new s.w0;return a.add(i.subscribe({complete:()=>{e&&l.next(n),l.complete()},error:h=>{l.error(h)},next:h=>{n=h,e||(e=m.E.schedule(()=>{l.next(n),e=void 0}),a.add(e))}})),a})}():i=>i,a?(0,o.U)(U=>n.length>0&&Array.isArray(U)?a(...U):a(U)):i=>i,(0,W.x)(h.equal),(0,b.d)({refCount:!0,bufferSize:1}),(0,r.R)(this.destroy$))}selectSignal(...e){const n=[...e],a=(R,K)=>R===K,h="object"==typeof n[e.length-1]?{equal:n.pop().equal||a}:{equal:a},M=n.pop(),U=n;return(0,x.computed)(0===U.length?()=>M(this.state()):()=>{const R=U.map(K=>K());return M(...R)},h)}effect(e){const n=new v.x;return e(n).pipe((0,r.R)(this.destroy$)).subscribe(),a=>((0,S.b)(a)?a:(0,E.of)(a)).pipe((0,r.R)(this.destroy$)).subscribe(M=>{n.next(M)})}checkProviderForHooks(){m.E.schedule(()=>{if((0,x.isDevMode)()&&(A(this)||T(this))&&!this.\u0275hasProvider){const e=[A(this)?"OnStoreInit":"",T(this)?"OnStateInit":""].filter(n=>n);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${e.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}}return i.\u0275fac=function(e){return new(e||i)(x.\u0275\u0275inject(F,8))},i.\u0275prov=x.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})()}}]);