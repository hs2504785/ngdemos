(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[681],{3681:(e,t,n)=>{"use strict";n.r(t),n.d(t,{StoredemoModule:()=>R});var r=n(1116),s=n(766),i=n(5366);let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-storedemo"]],decls:12,vars:0,consts:[[1,"m-2","d-flex","justify-content-center"],["routerLink","users-store","routerLinkActive","active",1,"btn","btn-outline-info","mr-2"],["routerLink","users-entity","routerLinkActive","active",1,"btn","btn-outline-warning","mr-2"],["routerLink","users-data","routerLinkActive","active",1,"btn","btn-outline-success","mr-2"],["routerLink","users-ws","routerLinkActive","active",1,"btn","btn-outline-danger","mr-2"],["routerLink","users-service","routerLinkActive","active",1,"btn","btn-outline-primary"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"header",0),i["\u0275\u0275elementStart"](1,"a",1),i["\u0275\u0275text"](2,"Users Store"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"a",2),i["\u0275\u0275text"](4,"Users Entity"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"a",3),i["\u0275\u0275text"](6,"Users Data"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"a",4),i["\u0275\u0275text"](8,"Users WS"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"a",5),i["\u0275\u0275text"](10,"Users Service"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](11,"router-outlet"))},directives:[s.yS,s.Od,s.lC],styles:[""],changeDetection:0}),e})();var a=n(4019),c=n(3530),l=n(2313);let d=(()=>{class e{constructor(e){this.userService=e}resolve(e,t){return this.userService.loaded$.pipe((0,a.b)(e=>{e||this.userService.getAll()}),(0,c.P)())}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](l.$))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=n(1671),m=n(3835),E=n(6625),p=n(9505);let S=(()=>{class e{constructor(e){this.store=e}resolve(e,t){return this.store.pipe((0,u.Ys)(p.pU),(0,a.b)(e=>{e||this.store.dispatch((0,E.Ec)())}),(0,m.h)(e=>e),(0,c.P)())}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](u.yh))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n(6932);let f=(()=>{class e{constructor(e){this.userService=e}resolve(e,t){return this.userService.getUsers()}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](h.M))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var U=n(5243),v=n(9563);let g=(()=>{class e{constructor(e){this.store=e}resolve(e,t){return this.store.pipe((0,u.Ys)(v.gA),(0,a.b)(e=>{e||this.store.dispatch((0,U.zc)())}),(0,m.h)(e=>e),(0,c.P)())}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](u.yh))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var _=n(4919);const I=[{path:"",component:o,children:[{path:"users-store",loadChildren:()=>n.e(327).then(n.bind(n,7327)).then(e=>e.UsersStoreModule),resolve:[g]},{path:"users-entity",loadChildren:()=>n.e(994).then(n.bind(n,994)).then(e=>e.UsersEntityModule),resolve:[S]},{path:"users-data",loadChildren:()=>Promise.resolve().then(n.bind(n,7096)).then(e=>e.UsersDataModule),resolve:[d]},{path:"users-ws",loadChildren:()=>Promise.resolve().then(n.bind(n,8273)).then(e=>e.UsersWsModule),resolve:[(()=>{class e{constructor(e){this.userService=e}resolve(e,t){return this.userService.loaded$.pipe((0,a.b)(e=>{e||this.userService.getAll()}),(0,c.P)())}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](_.q))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]},{path:"users-service",loadChildren:()=>n.e(136).then(n.bind(n,7136)).then(e=>e.UsersDataModule),resolve:{users:f}},{path:"",redirectTo:"users-data"}]}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[s.Bz.forChild(I)],s.Bz]}),e})(),R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[r.ez,b]]}),e})()},2313:(e,t,n)=>{"use strict";n.d(t,{$:()=>o});var r=n(1898),s=n(7096),i=n(5366);let o=(()=>{class e extends r.c8{constructor(e){super(s.usersFeatureKey,e)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](r.yV))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},7096:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UsersDataModule:()=>I,entityMetadata:()=>_,usersFeatureKey:()=>g});var r=n(1116),s=n(766),i=n(842),o=n(2935),a=n(5366),c=n(1041),l=n(2313),d=n(3070),u=n(9550),m=n(4369);let E=(()=>{class e{constructor(e,t,n,r){this.fb=e,this.dialogRef=t,this.userService=r,this.dialogTitle=n.dialogTitle,this.user=n.user,this.mode=n.mode;const s={email:[""],first_name:[""],last_name:[""]};"update"==this.mode?(this.form=this.fb.group(s),this.form.patchValue(Object.assign({},this.user))):"create"==this.mode&&(this.form=this.fb.group(Object.assign({},s)))}onClose(){this.dialogRef.close()}onSave(){const e=Object.assign(Object.assign({},this.user),this.form.value);"update"==this.mode?(console.log("Update User",e),this.userService.update(e),this.dialogRef.close()):"create"==this.mode&&(console.log("Add User",e),e.avatar="https://robohash.org/test?size=128x128",this.userService.add(e,{isOptimistic:!1}),this.dialogRef.close())}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.qu),a["\u0275\u0275directiveInject"](o.so),a["\u0275\u0275directiveInject"](o.WI),a["\u0275\u0275directiveInject"](l.$))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-data-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","First Name","formControlName","first_name"],["matInput","","placeholder","Last Name","formControlName","last_name"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"h2",0),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](2,"mat-dialog-content"),a["\u0275\u0275elementContainerStart"](3),a["\u0275\u0275elementContainerStart"](4,1),a["\u0275\u0275elementStart"](5,"mat-form-field"),a["\u0275\u0275element"](6,"input",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"mat-form-field"),a["\u0275\u0275element"](8,"input",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"mat-form-field"),a["\u0275\u0275element"](10,"input",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"mat-dialog-actions"),a["\u0275\u0275elementStart"](12,"button",5),a["\u0275\u0275listener"]("click",function(){return t.onClose()}),a["\u0275\u0275text"](13,"Close"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"button",6),a["\u0275\u0275listener"]("click",function(){return t.onSave()}),a["\u0275\u0275text"](15,"Save"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](t.dialogTitle),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formGroup",t.form))},directives:[o.uh,o.xY,c.JL,c.sg,d.KE,u.Nt,c.Fj,c.JJ,c.u,o.H8,m.lW],styles:[""],changeDetection:0}),e})();function p(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",5),a["\u0275\u0275elementStart"](1,"div",6),a["\u0275\u0275element"](2,"img",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"div",8),a["\u0275\u0275elementStart"](4,"div"),a["\u0275\u0275elementStart"](5,"strong"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"br"),a["\u0275\u0275elementStart"](8,"small"),a["\u0275\u0275text"](9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div"),a["\u0275\u0275elementStart"](11,"button",9),a["\u0275\u0275listener"]("click",function(){const t=a["\u0275\u0275restoreView"](e).$implicit;return a["\u0275\u0275nextContext"]().editUser(t)}),a["\u0275\u0275element"](12,"i",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"button",11),a["\u0275\u0275listener"]("click",function(){const t=a["\u0275\u0275restoreView"](e).$implicit;return a["\u0275\u0275nextContext"]().removeUser(t)}),a["\u0275\u0275element"](14,"i",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("src",e.avatar,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](e.first_name),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.email)}}const S=[{path:"",component:(()=>{class e{constructor(e,t){this.userDataService=e,this.dialog=t}ngOnInit(){this.users$=this.userDataService.entities$}removeUser(e){console.log("Remove user"),this.userDataService.delete(e)}addUser(){const e=(0,i.m)();e.data={dialogTitle:"Add User",mode:"create"},this.dialog.open(E,e)}editUser(e){const t=(0,i.m)();t.data={dialogTitle:"Edit User",user:e,mode:"update"},this.dialog.open(E,t).afterClosed().subscribe(e=>{console.log("Closed",e)})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](l.$),a["\u0275\u0275directiveInject"](o.uw))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-users-data"]],decls:8,vars:3,consts:[[1,"container"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","align-self-center",3,"click"],[1,"ti-plus"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"ti-pencil"],[1,"btn","btn-danger",3,"click"],[1,"ti-trash"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"header",1),a["\u0275\u0275elementStart"](2,"h1"),a["\u0275\u0275text"](3,"Users List (Data)"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"button",2),a["\u0275\u0275listener"]("click",function(){return t.addUser()}),a["\u0275\u0275element"](5,"i",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,p,15,3,"div",4),a["\u0275\u0275pipe"](7,"async"),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("ngForOf",a["\u0275\u0275pipeBind1"](7,1,t.users$)))},directives:[r.sg],pipes:[r.Ov],styles:["img[_ngcontent-%COMP%]{width:128px;height:128px}"],changeDetection:0}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[s.Bz.forChild(S)],s.Bz]}),e})();var f=n(1898),U=n(2693);let v=(()=>{class e extends f.EJ{constructor(e,t){super(g,e,t),this.API_URL="https://hksocket.herokuapp.com/users"}getAll(){return this.http.get(`${this.API_URL}`)}add(e){return this.http.post(`${this.API_URL}`,e)}update(e){return this.http.put(`${this.API_URL}/${e.id}`,e.changes)}delete(e){return this.http.delete(`${this.API_URL}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](U.eN),a["\u0275\u0275inject"](f.hR))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const g="users",_={[g]:{entityDispatcherOptions:{optimisticUpdate:!0},selectId:e=>e._id}};let I=(()=>{class e{constructor(e,t,n){this.eds=e,this.entityDataService=t,this.usersDataService=n,this.eds.registerMetadataMap(_),this.entityDataService.registerService(g,this.usersDataService)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](f.f0),a["\u0275\u0275inject"](f.sP),a["\u0275\u0275inject"](v))},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[r.ez,h,o.Is,u.c,d.lN,m.ot,c.UX]]}),e})()},6625:(e,t,n)=>{"use strict";n.d(t,{S2:()=>c,XI:()=>d,SI:()=>l,Mb:()=>m,f_:()=>u,Ec:()=>i,V6:()=>a,vn:()=>o});var r=n(1671),s=function(e){return e.GET_ENTITY_USERS="[User Entity Resolver] Get Users",e.GET_ENTITY_USERS_SUCCESS="[User Entity Effect] Get Users success",e.GET_ENTITY_USERS_FAILURE="[User Entity Effect] Get Users failure",e.ADD_ENTITY_USER="[User Entity Component] Add User",e.ADD_ENTITY_USER_SUCCESS="[User Entity Component] Add User success",e.ADD_ENTITY_USER_FAILURE="[User Entity Component] Add User failure",e.EDIT_ENTITY_USER="[Edit Entity User Component] Edit User",e.EDIT_ENTITY_USER_SUCCESS="[Edit Entity User Component] Edit User success",e.EDIT_ENTITY_USER_FAILURE="[Edit Entity User Component] Edit User failure",e.DELETE_ENTITY_USER="[User Entity Component] Delete User",e.DELETE_ENTITY_USER_SUCCESS="[User Entity Component] Delete User success",e.DELETE_ENTITY_USER_FAILURE="[User Entity Component] Delete User failure",e}({});const i=(0,r.PH)(s.GET_ENTITY_USERS),o=(0,r.PH)(s.GET_ENTITY_USERS_SUCCESS,(0,r.Ky)()),a=(0,r.PH)(s.GET_ENTITY_USERS_FAILURE,(0,r.Ky)()),c=(0,r.PH)(s.ADD_ENTITY_USER,(0,r.Ky)()),l=(0,r.PH)(s.ADD_ENTITY_USER_SUCCESS,(0,r.Ky)()),d=(0,r.PH)(s.ADD_ENTITY_USER_FAILURE),u=(0,r.PH)(s.EDIT_ENTITY_USER,(0,r.Ky)()),m=(0,r.PH)(s.DELETE_ENTITY_USER,(0,r.Ky)())},8958:(e,t,n)=>{"use strict";n.d(t,{YI:()=>o,Jy:()=>l,OR:()=>d,td:()=>u});var r=n(322),s=n(1671),i=n(6625);const o="userEntity",a=(0,r.H)({}),c=a.getInitialState({loaded:!1}),l=(0,s.Lq)(c,(0,s.on)(i.vn,(e,t)=>a.setAll(t.users,Object.assign(Object.assign({},e),{loaded:!0}))),(0,s.on)(i.SI,(e,t)=>a.addOne(t.user,e)),(0,s.on)(i.f_,(e,t)=>a.updateOne(t.user,e)),(0,s.on)(i.Mb,(e,t)=>a.removeOne(t.id,e))),{selectEntities:d,selectAll:u}=a.getSelectors()},9505:(e,t,n)=>{"use strict";n.d(t,{vH:()=>o,pU:()=>a});var r=n(1671),s=n(8958);const i=(0,r.ZF)(s.YI),o=(0,r.P1)(i,s.td),a=((0,r.P1)(i,s.OR),(0,r.P1)(i,e=>e.loaded))},6932:(e,t,n)=>{"use strict";n.d(t,{M:()=>o});var r=n(9996),s=n(5366),i=n(2693);let o=(()=>{class e{constructor(e){this.http=e,this.API_URL="https://reqres.in/api/users"}getUsers(){return this.http.get(`${this.API_URL}`).pipe((0,r.U)(e=>e.data))}addUser(e){return this.http.post(`${this.API_URL}`,e)}updateUser(e){return this.http.put(`${this.API_URL}/${e.id}`,e)}removeUser(e){return this.http.delete(`${this.API_URL}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](i.eN))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},5243:(e,t,n)=>{"use strict";n.d(t,{Dx:()=>c,Ls:()=>d,Kz:()=>l,Fp:()=>p,ru:()=>h,yc:()=>S,d0:()=>u,ox:()=>E,U7:()=>m,zc:()=>i,aA:()=>a,IU:()=>o});var r=n(1671),s=function(e){return e.GET_STORE_USERS="[User Store Resolver] Get Users",e.GET_STORE_USERS_SUCCESS="[User Store Effect] Get Users success",e.GET_STORE_USERS_FAILURE="[User Store Effect] Get Users failure",e.ADD_STORE_USER="[User Store Component] Add User",e.ADD_STORE_USER_SUCCESS="[User Store Component] Add User success",e.ADD_STORE_USER_FAILURE="[User Store Component] Add User failure",e.EDIT_STORE_USER="[Edit Store User Component] Edit User",e.EDIT_STORE_USER_SUCCESS="[Edit Store User Component] Edit User success",e.EDIT_STORE_USER_FAILURE="[Edit Store User Component] Edit User failure",e.DELETE_STORE_USER="[User Store Component] Delete User",e.DELETE_STORE_USER_SUCCESS="[User Store Component] Delete User success",e.DELETE_STORE_USER_FAILURE="[User Store Component] Delete User failure",e}({});const i=(0,r.PH)(s.GET_STORE_USERS),o=(0,r.PH)(s.GET_STORE_USERS_SUCCESS,(0,r.Ky)()),a=(0,r.PH)(s.GET_STORE_USERS_FAILURE,(0,r.Ky)()),c=(0,r.PH)(s.ADD_STORE_USER,(0,r.Ky)()),l=(0,r.PH)(s.ADD_STORE_USER_SUCCESS,(0,r.Ky)()),d=(0,r.PH)(s.ADD_STORE_USER_FAILURE),u=(0,r.PH)(s.EDIT_STORE_USER,(0,r.Ky)()),m=(0,r.PH)(s.EDIT_STORE_USER_SUCCESS,(0,r.Ky)()),E=(0,r.PH)(s.EDIT_STORE_USER_FAILURE),p=(0,r.PH)(s.DELETE_STORE_USER,(0,r.Ky)()),S=(0,r.PH)(s.DELETE_STORE_USER_SUCCESS),h=(0,r.PH)(s.DELETE_STORE_USER_SUCCESS)},9873:(e,t,n)=>{"use strict";n.d(t,{GH:()=>i,wq:()=>o});var r=n(1671),s=n(5243);const i="userStore",o=(0,r.Lq)({data:null,isLoading:!1,error:null,loaded:!1},(0,r.on)(s.zc,e=>Object.assign(Object.assign({},e),{isLoading:!0})),(0,r.on)(s.IU,(e,t)=>Object.assign(Object.assign({},e),{isLoading:!1,data:t.users,loaded:!0})),(0,r.on)(s.aA,(e,t)=>Object.assign(Object.assign({},e),{isLoading:!1})),(0,r.on)(s.Dx,e=>Object.assign(Object.assign({},e),{isLoading:!0})),(0,r.on)(s.Kz,(e,t)=>Object.assign(Object.assign({},e),{isLoading:!1,data:[t.user,...e.data]})),(0,r.on)(s.Ls,e=>Object.assign(Object.assign({},e),{isLoading:!1})),(0,r.on)(s.d0,e=>Object.assign(Object.assign({},e),{isLoading:!0})),(0,r.on)(s.U7,(e,t)=>{const n=e.data.map(e=>e.id===t.user.id?t.user:e);return Object.assign(Object.assign({},e),{isLoading:!1,data:n})}),(0,r.on)(s.ox,e=>Object.assign(Object.assign({},e),{isLoading:!1})),(0,r.on)(s.Fp,(e,t)=>{const n=e.data.filter(e=>e.id!==t.id);return Object.assign(Object.assign({},e),{data:n})}),(0,r.on)(s.yc,e=>Object.assign(Object.assign({},e),{isLoading:!1})),(0,r.on)(s.ru,e=>Object.assign(Object.assign({},e),{isLoading:!1})))},9563:(e,t,n)=>{"use strict";n.d(t,{zE:()=>o,gA:()=>a});var r=n(1671),s=n(9873);const i=(0,r.ZF)(s.GH),o=(0,r.P1)(i,e=>e.data),a=(0,r.P1)(i,e=>e.loaded)},4919:(e,t,n)=>{"use strict";n.d(t,{q:()=>o});var r=n(1898),s=n(8273),i=n(5366);let o=(()=>{class e extends r.c8{constructor(e){super(s.usersWsFeatureKey,e)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](r.yV))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},8273:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UsersWsModule:()=>I,entityMetadata:()=>_,usersWsFeatureKey:()=>g});var r=n(1116),s=n(766),i=n(842),o=n(2935),a=n(5366),c=n(1041),l=n(4919),d=n(3070),u=n(9550),m=n(4369);let E=(()=>{class e{constructor(e,t,n,r){this.fb=e,this.dialogRef=t,this.userService=r,this.dialogTitle=n.dialogTitle,this.user=n.user,this.mode=n.mode;const s={email:[""],first_name:[""],last_name:[""]};"update"==this.mode?(this.form=this.fb.group(s),this.form.patchValue(Object.assign({},this.user))):"create"==this.mode&&(this.form=this.fb.group(Object.assign({},s)))}onClose(){this.dialogRef.close()}onSave(){const e=Object.assign(Object.assign({},this.user),this.form.value);"update"==this.mode?(console.log("Update User",e),this.userService.update(e),this.dialogRef.close()):"create"==this.mode&&(console.log("Add User",e),e.avatar="https://robohash.org/test?size=128x128",this.userService.add(e,{isOptimistic:!1}),this.dialogRef.close())}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.qu),a["\u0275\u0275directiveInject"](o.so),a["\u0275\u0275directiveInject"](o.WI),a["\u0275\u0275directiveInject"](l.q))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-data-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","First Name","formControlName","first_name"],["matInput","","placeholder","Last Name","formControlName","last_name"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"h2",0),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](2,"mat-dialog-content"),a["\u0275\u0275elementContainerStart"](3),a["\u0275\u0275elementContainerStart"](4,1),a["\u0275\u0275elementStart"](5,"mat-form-field"),a["\u0275\u0275element"](6,"input",2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](7,"mat-form-field"),a["\u0275\u0275element"](8,"input",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"mat-form-field"),a["\u0275\u0275element"](10,"input",4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementContainerEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](11,"mat-dialog-actions"),a["\u0275\u0275elementStart"](12,"button",5),a["\u0275\u0275listener"]("click",function(){return t.onClose()}),a["\u0275\u0275text"](13,"Close"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](14,"button",6),a["\u0275\u0275listener"]("click",function(){return t.onSave()}),a["\u0275\u0275text"](15,"Save"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate"](t.dialogTitle),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("formGroup",t.form))},directives:[o.uh,o.xY,c.JL,c.sg,d.KE,u.Nt,c.Fj,c.JJ,c.u,o.H8,m.lW],styles:[""],changeDetection:0}),e})();function p(e,t){if(1&e){const e=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",5),a["\u0275\u0275elementStart"](1,"div",6),a["\u0275\u0275element"](2,"img",7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"div",8),a["\u0275\u0275elementStart"](4,"div"),a["\u0275\u0275elementStart"](5,"strong"),a["\u0275\u0275text"](6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](7,"br"),a["\u0275\u0275elementStart"](8,"small"),a["\u0275\u0275text"](9),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](10,"div"),a["\u0275\u0275elementStart"](11,"button",9),a["\u0275\u0275listener"]("click",function(){const t=a["\u0275\u0275restoreView"](e).$implicit;return a["\u0275\u0275nextContext"]().editUser(t)}),a["\u0275\u0275element"](12,"i",10),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"button",11),a["\u0275\u0275listener"]("click",function(){const t=a["\u0275\u0275restoreView"](e).$implicit;return a["\u0275\u0275nextContext"]().removeUser(t)}),a["\u0275\u0275element"](14,"i",12),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("src",e.avatar,a["\u0275\u0275sanitizeUrl"]),a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](e.first_name),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate"](e.email)}}const S=[{path:"",component:(()=>{class e{constructor(e,t){this.userDataService=e,this.dialog=t}ngOnInit(){this.users$=this.userDataService.entities$}removeUser(e){console.log("Remove user"),this.userDataService.delete(e)}addUser(){const e=(0,i.m)();e.data={dialogTitle:"Add User",mode:"create"},this.dialog.open(E,e)}editUser(e){const t=(0,i.m)();t.data={dialogTitle:"Edit User",user:e,mode:"update"},this.dialog.open(E,t).afterClosed().subscribe(e=>{console.log("Closed",e)})}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](l.q),a["\u0275\u0275directiveInject"](o.uw))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-users-ws"]],decls:8,vars:3,consts:[[1,"container"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","align-self-center",3,"click"],[1,"ti-plus"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"ti-pencil"],[1,"btn","btn-danger",3,"click"],[1,"ti-trash"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"header",1),a["\u0275\u0275elementStart"](2,"h1"),a["\u0275\u0275text"](3,"Users List (Data)"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"button",2),a["\u0275\u0275listener"]("click",function(){return t.addUser()}),a["\u0275\u0275element"](5,"i",3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](6,p,15,3,"div",4),a["\u0275\u0275pipe"](7,"async"),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](6),a["\u0275\u0275property"]("ngForOf",a["\u0275\u0275pipeBind1"](7,1,t.users$)))},directives:[r.sg],pipes:[r.Ov],styles:["img[_ngcontent-%COMP%]{width:128px;height:128px}"],changeDetection:0}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[s.Bz.forChild(S)],s.Bz]}),e})();var f=n(1898),U=n(2693);let v=(()=>{class e extends f.EJ{constructor(e,t){super(g,e,t),this.API_URL="https://hksocket.herokuapp.com/users"}getAll(){return this.http.get(`${this.API_URL}`)}add(e){return this.http.post(`${this.API_URL}`,e)}update(e){return this.http.put(`${this.API_URL}/${e.id}`,e.changes)}delete(e){return this.http.delete(`${this.API_URL}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](U.eN),a["\u0275\u0275inject"](f.hR))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const g="users",_={[g]:{entityDispatcherOptions:{optimisticUpdate:!0},selectId:e=>e._id}};let I=(()=>{class e{constructor(e,t,n){this.eds=e,this.entityDataService=t,this.usersDataService=n,this.eds.registerMetadataMap(_),this.entityDataService.registerService(g,this.usersDataService)}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](f.f0),a["\u0275\u0275inject"](f.sP),a["\u0275\u0275inject"](v))},e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[r.ez,h,o.Is,u.c,d.lN,m.ot,c.UX]]}),e})()}}]);