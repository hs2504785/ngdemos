(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[994],{994:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UsersEntityModule:()=>k});var i=n(1116),r=n(766),s=n(1671),o=n(842),a=n(6625),l=n(9505),c=n(2935),d=n(5366),m=n(1041),u=n(3070),p=n(9550),h=n(4369);let f=(()=>{class e{constructor(e,t,n,i){this.fb=e,this.dialogRef=t,this.store=i,this.dialogTitle=n.dialogTitle,this.user=n.user,this.mode=n.mode;const r={email:[""],first_name:[""],last_name:[""]};"update"==this.mode?(this.form=this.fb.group(r),this.form.patchValue(Object.assign({},this.user))):"create"==this.mode&&(this.form=this.fb.group(Object.assign({},r)))}onClose(){this.dialogRef.close()}onSave(){const e=Object.assign(Object.assign({},this.user),this.form.value);"update"==this.mode?(console.log("Update User",e),this.store.dispatch((0,a.f_)({user:{id:this.user.id,changes:this.form.value}})),this.dialogRef.close()):"create"==this.mode&&(console.log("Add User",e),e.avatar="https://robohash.org/test?size=128x128",this.store.dispatch((0,a.S2)({user:e})),this.dialogRef.close())}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](m.qu),d["\u0275\u0275directiveInject"](c.so),d["\u0275\u0275directiveInject"](c.WI),d["\u0275\u0275directiveInject"](s.yh))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user-entity-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","First Name","formControlName","first_name"],["matInput","","placeholder","Last Name","formControlName","last_name"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"h2",0),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"mat-dialog-content"),d["\u0275\u0275elementContainerStart"](3),d["\u0275\u0275elementContainerStart"](4,1),d["\u0275\u0275elementStart"](5,"mat-form-field"),d["\u0275\u0275element"](6,"input",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"mat-form-field"),d["\u0275\u0275element"](8,"input",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"mat-form-field"),d["\u0275\u0275element"](10,"input",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"mat-dialog-actions"),d["\u0275\u0275elementStart"](12,"button",5),d["\u0275\u0275listener"]("click",function(){return t.onClose()}),d["\u0275\u0275text"](13,"Close"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"button",6),d["\u0275\u0275listener"]("click",function(){return t.onSave()}),d["\u0275\u0275text"](15,"Save"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](t.dialogTitle),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("formGroup",t.form))},directives:[c.uh,c.xY,m.JL,m.sg,u.KE,p.Nt,m.Fj,m.JJ,m.u,c.H8,h.lW],styles:[""],changeDetection:0}),e})();function g(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"div",5),d["\u0275\u0275elementStart"](1,"div",6),d["\u0275\u0275element"](2,"img",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div",8),d["\u0275\u0275elementStart"](4,"div"),d["\u0275\u0275elementStart"](5,"strong"),d["\u0275\u0275text"](6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](7,"br"),d["\u0275\u0275elementStart"](8,"small"),d["\u0275\u0275text"](9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"div"),d["\u0275\u0275elementStart"](11,"button",9),d["\u0275\u0275listener"]("click",function(){const t=d["\u0275\u0275restoreView"](e).$implicit;return d["\u0275\u0275nextContext"]().editUser(t)}),d["\u0275\u0275element"](12,"i",10),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"button",11),d["\u0275\u0275listener"]("click",function(){const t=d["\u0275\u0275restoreView"](e).$implicit;return d["\u0275\u0275nextContext"]().removeUser(t)}),d["\u0275\u0275element"](14,"i",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("src",e.avatar,d["\u0275\u0275sanitizeUrl"]),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate"](e.first_name),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](e.email)}}const v=[{path:"",component:(()=>{class e{constructor(e,t){this.store=e,this.dialog=t}ngOnInit(){this.users$=this.store.pipe((0,s.Ys)(l.vH))}removeUser(e){console.log("Remove user"),this.store.dispatch((0,a.Mb)({id:e.id}))}addUser(){const e=(0,o.m)();e.data={dialogTitle:"Add User",mode:"create"},this.dialog.open(f,e)}editUser(e){const t=(0,o.m)();t.data={dialogTitle:"Edit User",user:e,mode:"update"},this.dialog.open(f,t).afterClosed().subscribe(e=>{console.log("Closed",e)})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](s.yh),d["\u0275\u0275directiveInject"](c.uw))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-users-entity"]],decls:8,vars:3,consts:[[1,"container"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","align-self-center",3,"click"],[1,"ti-plus"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"ti-pencil"],[1,"btn","btn-danger",3,"click"],[1,"ti-trash"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"header",1),d["\u0275\u0275elementStart"](2,"h1"),d["\u0275\u0275text"](3,"Users List (Entity)"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"button",2),d["\u0275\u0275listener"]("click",function(){return t.addUser()}),d["\u0275\u0275element"](5,"i",3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](6,g,15,3,"div",4),d["\u0275\u0275pipe"](7,"async"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("ngForOf",d["\u0275\u0275pipeBind1"](7,1,t.users$)))},directives:[i.sg],pipes:[i.Ov],styles:["img[_ngcontent-%COMP%]{width:128px;height:128px}"],changeDetection:0}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[r.Bz.forChild(v)],r.Bz]}),e})();var S=n(1368),U=n(8958),y=n(4689),E=n(9996),I=n(7727),j=n(3982),x=n(878),C=n(2693);let $=(()=>{class e{constructor(e){this.http=e,this.API_URL="https://reqres.in/api/users"}getUsers(){return this.http.get(`${this.API_URL}`).pipe((0,E.U)(e=>e.data))}addUser(e){return this.http.post(`${this.API_URL}`,e)}updateUser(e){return this.http.put(`${this.API_URL}/${e.id}`,e)}removeUser(e){return this.http.delete(`${this.API_URL}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](C.eN))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),w=(()=>{class e{constructor(e,t){this.actions$=e,this.userentitySetvice=t,this.loadEntityUsers$=(0,S.GW)(()=>this.actions$.pipe((0,S.l4)(a.Ec),(0,y.w)(()=>this.userentitySetvice.getUsers().pipe((0,E.U)(e=>(0,a.vn)({users:e})),(0,I.K)(e=>(0,x.of)((0,a.V6)({error:e}))))))),this.deleteEntityUsers$=(0,S.GW)(()=>this.actions$.pipe((0,S.l4)(a.Mb),(0,j.zg)(({id:e})=>this.userentitySetvice.removeUser(e))),{dispatch:!1}),this.createStoreUser$=(0,S.GW)(()=>this.actions$.pipe((0,S.l4)(a.S2),(0,y.w)(({user:e})=>this.userentitySetvice.addUser(e).pipe((0,E.U)(e=>(0,a.SI)({user:e})),(0,I.K)(()=>(0,x.of)((0,a.XI)())))))),this.editEntityUser$=(0,S.GW)(()=>this.actions$.pipe((0,S.l4)(a.f_),(0,y.w)(({user:e})=>{const t=Object.assign({id:e.id},e.changes);return this.userentitySetvice.updateUser(t)})),{dispatch:!1})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](S.eX),d["\u0275\u0275inject"]($))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.ez,b,c.Is,p.c,u.lN,h.ot,m.UX,s.Aw.forFeature(U.YI,U.Jy),S.sQ.forFeature([w])]]}),e})()}}]);