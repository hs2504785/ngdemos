"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[8592],{575:(u,s,e)=>{e.d(s,{w:()=>t});var n=e(4247),a=e(4650);class t{}t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=a.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=a.\u0275\u0275defineInjector({imports:[n.W]})},3909:(u,s,e)=>{e.d(s,{K:()=>a});var n=e(4650);class a{constructor(){}ngOnInit(){}}a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=n.\u0275\u0275defineComponent({type:a,selectors:[["app-c1"]],decls:2,vars:0,template:function(o,l){1&o&&(n.\u0275\u0275elementStart(0,"p"),n.\u0275\u0275text(1,"c1 works!"),n.\u0275\u0275elementEnd())},changeDetection:0})},4247:(u,s,e)=>{e.d(s,{W:()=>t});var n=e(6895),a=e(4650);class t{}t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=a.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=a.\u0275\u0275defineInjector({imports:[n.ez]})},2689:(u,s,e)=>{e.d(s,{M:()=>t});var n=e(6895),a=e(4650);class t{}t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=a.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=a.\u0275\u0275defineInjector({imports:[n.ez]})},3154:(u,s,e)=>{e.d(s,{K:()=>a});var n=e(4650);class a{constructor(){}ngOnInit(){}}a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=n.\u0275\u0275defineComponent({type:a,selectors:[["app-c1"]],decls:2,vars:0,template:function(o,l){1&o&&(n.\u0275\u0275elementStart(0,"p"),n.\u0275\u0275text(1,"c1 works!"),n.\u0275\u0275elementEnd())},changeDetection:0})},3762:(u,s,e)=>{e.d(s,{L:()=>c});var n=e(5938),a=e(5962),t=e(4650),o=e(4006),l=e(9653),r=e(4144),_=e(9549),m=e(4859);class c{constructor(i,g,E,h){this.fb=i,this.dialogRef=g,this.store=h,this.dialogTitle=E.dialogTitle,this.user=E.user,this.mode=E.mode;const p={email:[""],first_name:[""],last_name:[""]};"update"==this.mode?(this.form=this.fb.group(p),this.form.patchValue({...this.user})):"create"==this.mode&&(this.form=this.fb.group({...p}))}onClose(){this.dialogRef.close()}onSave(){const i={...this.user,...this.form.value};"update"==this.mode?(console.log("Update User",i),this.store.dispatch((0,a.f_)({user:{id:this.user.id,changes:this.form.value}})),this.dialogRef.close()):"create"==this.mode&&(console.log("Add User",i),i.avatar="https://robohash.org/test?size=128x128",this.store.dispatch((0,a.S2)({user:i})),this.dialogRef.close())}}c.\u0275fac=function(i){return new(i||c)(t.\u0275\u0275directiveInject(o.qu),t.\u0275\u0275directiveInject(n.so),t.\u0275\u0275directiveInject(n.WI),t.\u0275\u0275directiveInject(l.yh))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["app-user-entity-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","First Name","formControlName","first_name"],["matInput","","placeholder","Last Name","formControlName","last_name"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,g){1&i&&(t.\u0275\u0275elementStart(0,"h2",0),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"mat-dialog-content"),t.\u0275\u0275elementContainerStart(3)(4,1),t.\u0275\u0275elementStart(5,"mat-form-field"),t.\u0275\u0275element(6,"input",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"mat-form-field"),t.\u0275\u0275element(8,"input",3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"mat-form-field"),t.\u0275\u0275element(10,"input",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"mat-dialog-actions")(12,"button",5),t.\u0275\u0275listener("click",function(){return g.onClose()}),t.\u0275\u0275text(13,"Close"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(14,"button",6),t.\u0275\u0275listener("click",function(){return g.onSave()}),t.\u0275\u0275text(15,"Save"),t.\u0275\u0275elementEnd()()),2&i&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(g.dialogTitle),t.\u0275\u0275advance(3),t.\u0275\u0275property("formGroup",g.form))},dependencies:[n.uh,n.xY,n.H8,r.Nt,_.KE,m.lW,o.Fj,o.JJ,o.JL,o.sg,o.u],changeDetection:0})},2562:(u,s,e)=>{e.d(s,{p:()=>o});var n=e(4004),a=e(4650),t=e(529);class o{constructor(r){this.http=r,this.API_URL="https://reqres.in/api/users"}getUsers(){return this.http.get(`${this.API_URL}`).pipe((0,n.U)(r=>r.data))}addUser(r){return this.http.post(`${this.API_URL}`,r)}updateUser(r){return this.http.put(`${this.API_URL}/${r.id}`,r)}removeUser(r){return this.http.delete(`${this.API_URL}/${r}`)}}o.\u0275fac=function(r){return new(r||o)(a.\u0275\u0275inject(t.eN))},o.\u0275prov=a.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})},3601:(u,s,e)=>{e.d(s,{W:()=>c});var n=e(5938),a=e(4257),t=e(4650),o=e(4006),l=e(9653),r=e(4144),_=e(9549),m=e(4859);class c{constructor(i,g,E,h){this.fb=i,this.dialogRef=g,this.store=h,this.dialogTitle=E.dialogTitle,this.user=E.user,this.mode=E.mode;const p={email:[""],first_name:[""],last_name:[""]};"update"==this.mode?(this.form=this.fb.group(p),this.form.patchValue({...this.user})):"create"==this.mode&&(this.form=this.fb.group({...p}))}onClose(){this.dialogRef.close()}onSave(){const i={...this.user,...this.form.value};"update"==this.mode?(console.log("Update User",i),this.store.dispatch((0,a.d0)({user:i})),this.dialogRef.close()):"create"==this.mode&&(console.log("Add User",i),i.avatar="https://robohash.org/test?size=128x128",this.store.dispatch((0,a.Dx)({user:i})),this.dialogRef.close())}}c.\u0275fac=function(i){return new(i||c)(t.\u0275\u0275directiveInject(o.qu),t.\u0275\u0275directiveInject(n.so),t.\u0275\u0275directiveInject(n.WI),t.\u0275\u0275directiveInject(l.yh))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["app-user-store-dialog"]],decls:16,vars:2,consts:[["mat-dialog-title",""],[3,"formGroup"],["matInput","","placeholder","Email","formControlName","email"],["matInput","","placeholder","First Name","formControlName","first_name"],["matInput","","placeholder","Last Name","formControlName","last_name"],["mat-raised-button","",3,"click"],["mat-raised-button","","color","primary",3,"click"]],template:function(i,g){1&i&&(t.\u0275\u0275elementStart(0,"h2",0),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(2,"mat-dialog-content"),t.\u0275\u0275elementContainerStart(3)(4,1),t.\u0275\u0275elementStart(5,"mat-form-field"),t.\u0275\u0275element(6,"input",2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"mat-form-field"),t.\u0275\u0275element(8,"input",3),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"mat-form-field"),t.\u0275\u0275element(10,"input",4),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementContainerEnd()(),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(11,"mat-dialog-actions")(12,"button",5),t.\u0275\u0275listener("click",function(){return g.onClose()}),t.\u0275\u0275text(13,"Close"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(14,"button",6),t.\u0275\u0275listener("click",function(){return g.onSave()}),t.\u0275\u0275text(15,"Save"),t.\u0275\u0275elementEnd()()),2&i&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(g.dialogTitle),t.\u0275\u0275advance(3),t.\u0275\u0275property("formGroup",g.form))},dependencies:[n.uh,n.xY,n.H8,r.Nt,_.KE,m.lW,o.Fj,o.JJ,o.JL,o.sg,o.u],changeDetection:0})},2629:(u,s,e)=>{function n(t){let o;for(var l=0;l<=t;l+=.1)o=performance.now();return o}function a(t,o=1e9){for(var l=1;l<=o;l++)l%2e7==0&&t(l)}e.d(s,{P:()=>n,W:()=>a})},7368:(u,s,e)=>{e.d(s,{n:()=>o});var n=e(4650),a=e(3683),t=e(8255);class o{constructor(){this.toggleSidenav=new n.EventEmitter,this.toggleTheme=new n.EventEmitter,this.toggleDir=new n.EventEmitter}}o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=n.\u0275\u0275defineComponent({type:o,selectors:[["app-toolbar"]],inputs:{pageTitle:"pageTitle"},outputs:{toggleSidenav:"toggleSidenav",toggleTheme:"toggleTheme",toggleDir:"toggleDir"},decls:14,vars:2,consts:[["color","primary"],["mat-button","",1,"sidenav-toggle",3,"click"],[1,"ti-menu"],[1,"example-spacer"],["mat-button","",3,"matMenuTriggerFor"],[1,"ti-more-alt"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(r,_){if(1&r&&(n.\u0275\u0275elementStart(0,"mat-toolbar",0)(1,"button",1),n.\u0275\u0275listener("click",function(){return _.toggleSidenav.emit()}),n.\u0275\u0275element(2,"i",2),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(3,"span"),n.\u0275\u0275text(4),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(5,"span",3),n.\u0275\u0275elementStart(6,"button",4),n.\u0275\u0275element(7,"i",5),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(8,"mat-menu",null,6)(10,"button",7),n.\u0275\u0275listener("click",function(){return _.toggleTheme.emit()}),n.\u0275\u0275text(11,"Toggle theme"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(12,"button",7),n.\u0275\u0275listener("click",function(){return _.toggleDir.emit()}),n.\u0275\u0275text(13,"Toggle dir"),n.\u0275\u0275elementEnd()()()),2&r){const m=n.\u0275\u0275reference(9);n.\u0275\u0275advance(4),n.\u0275\u0275textInterpolate(_.pageTitle),n.\u0275\u0275advance(2),n.\u0275\u0275property("matMenuTriggerFor",m)}},dependencies:[a.Ye,t.VK,t.OP,t.p6],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.sidenav-toggle[_ngcontent-%COMP%]{display:none;padding:0;margin:8px;min-width:56px}@media (max-width: 720px){.sidenav-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}}.sidenav-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:30px;height:56px;width:56px;line-height:56px;color:#fff}.ti-more-alt[_ngcontent-%COMP%]{display:inline-block;transform:rotate(90deg)}"]})},6658:(u,s,e)=>{e.d(s,{V:()=>r});var n=e(6895),a=e(3683),t=e(7392),o=e(8255),l=e(4650);class r{}r.\u0275fac=function(m){return new(m||r)},r.\u0275mod=l.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=l.\u0275\u0275defineInjector({imports:[n.ez,a.g0,t.Ps,o.Tx]})},7956:(u,s,e)=>{e.d(s,{m:()=>a});var n=e(5938);function a(){const t=new n.vA;return t.disableClose=!0,t.autoFocus=!0,t.width="400px",t}},8104:(u,s,e)=>{e.d(s,{D:()=>o});var n=e(4086),a=e(4650),t=e(529);class o{constructor(r){this.http=r,this.API_URL="https://jsonplaceholder.typicode.com",this.TODOS_URL=`${this.API_URL}/todos`,this.POSTS_URL=`${this.API_URL}/posts`,this.COMMENTS_URL=`${this.API_URL}/comments`,this.ALBUMS_URL=`${this.API_URL}/albums`,this.PHOTOS_URL=`${this.API_URL}/photos`,this.USERS_URL=`${this.API_URL}/users`}get(r){return this.http.get(r).pipe((0,n.g)(3e3))}getTodos(){return this.get(this.TODOS_URL)}getPosts(){return this.get(this.POSTS_URL)}getComments(){return this.get(this.COMMENTS_URL)}getAlbums(){return this.get(this.ALBUMS_URL)}getPhotos(){return this.get(this.PHOTOS_URL)}getPhotosNextBatch(r,_=20){return this.get(`${this.PHOTOS_URL}?_page=${r/_}&_limit=${_}`)}getUsers(){return this.get(this.USERS_URL)}}o.\u0275fac=function(r){return new(r||o)(a.\u0275\u0275inject(t.eN))},o.\u0275prov=a.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})},6393:(u,s,e)=>{e.d(s,{y:()=>r});var n=e(9300),a=e(8505),t=e(8372),o=e(1884),l=e(3900);function r(_,m=250){return c=>c.pipe((0,n.h)(d=>!d||d?.length>2),(0,a.b)(d=>console.log("ppp",d)),(0,t.b)(m),(0,o.x)(),(0,l.w)(_))}},7445:(u,s,e)=>{e.d(s,{F:()=>t});var n=e(4986),a=e(2805);function t(o=0,l=n.z){return o<0&&(o=0),(0,a.H)(o,o,l)}},5861:(u,s,e)=>{function n(t,o,l,r,_,m,c){try{var d=t[m](c),i=d.value}catch(g){return void l(g)}d.done?o(i):Promise.resolve(i).then(r,_)}function a(t){return function(){var o=this,l=arguments;return new Promise(function(r,_){var m=t.apply(o,l);function c(i){n(m,r,_,c,d,"next",i)}function d(i){n(m,r,_,c,d,"throw",i)}c(void 0)})}}e.d(s,{Z:()=>a})}}]);