"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[3480],{3480:(F,m,s)=>{s.r(m),s.d(m,{CsdemoModule:()=>_});var i=s(9808),p=s(5357),d=s(7695),e=s(5e3),u=s(7956),f=s(6822),v=s(2349);function g(n,o){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",5)(1,"div",6),e.\u0275\u0275element(2,"img",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",8)(4,"div")(5,"strong"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"br"),e.\u0275\u0275elementStart(8,"small"),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"div")(11,"button",9),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.editUser(l))}),e.\u0275\u0275element(12,"i",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"button",11),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.removeUser(l))}),e.\u0275\u0275element(14,"i",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"button",13),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.selectUser(l))}),e.\u0275\u0275element(16,"i",14),e.\u0275\u0275elementEnd()()()()}if(2&n){const t=o.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.avatar,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.first_name),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.email)}}let C=(()=>{class n{constructor(t,r){this.dialog=t,this.userService=r,this.users$=this.userService.users$}ngOnInit(){this.userService.getUsers()}removeUser(t){console.log("Remove user"),this.userService.removeUser(t.id)}addUser(){const t=(0,u.m)();t.data={dialogTitle:"Add User",mode:"create"},this.sub=this.dialog.open(f.K,t).afterClosed().subscribe(r=>{r&&this.userService.addUser(r)})}editUser(t){const r=(0,u.m)();r.data={dialogTitle:"Edit User",user:t,mode:"update"};const a=this.dialog.open(f.K,r).afterClosed().subscribe(l=>{l&&this.userService.updateUser(l)});this.sub&&this.sub.add(a)}selectUser(t){this.userService.patchState({selectdUserId:t.id})}ngOnDestroy(){var t;null===(t=this.sub)||void 0===t||t.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(v.uw),e.\u0275\u0275directiveInject(d.O))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-one"]],decls:8,vars:3,consts:[[1,"container"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","align-self-center",3,"click"],[1,"ti-plus"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"ti-pencil"],[1,"btn","btn-danger","mr-2",3,"click"],[1,"ti-trash"],[1,"btn","btn-info",3,"click"],[1,"ti-eye"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"header",1)(2,"h1"),e.\u0275\u0275text(3,"Users List (Service)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",2),e.\u0275\u0275listener("click",function(){return r.addUser()}),e.\u0275\u0275element(5,"i",3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(6,g,17,3,"div",4),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(7,1,r.users$)))},dependencies:[i.sg,i.Ov],styles:["img[_ngcontent-%COMP%]{width:128px;height:128px}"],changeDetection:0}),n})();function h(n,o){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"pre"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"json"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",2)(5,"div",3),e.\u0275\u0275element(6,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",5)(8,"div")(9,"strong"),e.\u0275\u0275text(10),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(11,"br"),e.\u0275\u0275elementStart(12,"small"),e.\u0275\u0275text(13),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementContainerEnd()),2&n){const t=o.ngIf;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",e.\u0275\u0275pipeBind1(3,4,t),"\n  "),e.\u0275\u0275advance(4),e.\u0275\u0275property("src",t.avatar,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.first_name),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.email)}}let x=(()=>{class n{constructor(t){this.userStore=t,this.user$=this.userStore.userById$}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.O))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-two"]],decls:5,vars:3,consts:[[1,"container"],[4,"ngIf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h2"),e.\u0275\u0275text(2,"View Detail"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,h,14,6,"ng-container",1),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(4,1,r.user$)))},dependencies:[i.O5,i.Ov,i.Ts],styles:["img[_ngcontent-%COMP%]{width:128px;height:128px;border-radius:50%}"],changeDetection:0}),n})(),y=(()=>{class n{constructor(t){this.userStore=t,this.usersCount$=this.userStore.usersCount$}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.O))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-three"]],decls:8,vars:3,consts:[[1,"container"],[1,"small"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h3"),e.\u0275\u0275text(2,"Summary"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p",1)(4,"strong"),e.\u0275\u0275text(5,"Total number of users: "),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",e.\u0275\u0275pipeBind1(7,1,r.usersCount$)," "))},dependencies:[i.Ov],changeDetection:0}),n})();function S(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",2)(1,"div",3),e.\u0275\u0275element(2,"img",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",5)(4,"div")(5,"strong"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"br"),e.\u0275\u0275elementStart(8,"small"),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd()()()()),2&n){const t=o.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275property("src",t.avatar,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(t.first_name),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.email)}}let b=(()=>{class n{constructor(t){this.userStore=t,this.users$=this.userStore.top3users$}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.O))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-four"]],decls:5,vars:3,consts:[[1,"container"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h3"),e.\u0275\u0275text(2,"Top 3 Users"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,S,10,3,"div",1),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(4,1,r.users$)))},dependencies:[i.sg,i.Ov],styles:["img[_ngcontent-%COMP%]{width:64px;height:64px;border-radius:50%}"],changeDetection:0}),n})();const w=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-csdemo"]],features:[e.\u0275\u0275ProvidersFeature([d.O])],decls:9,vars:0,consts:[[1,"wrapper"],[1,"one"],[1,"two"],[1,"three"],[1,"four"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275element(2,"app-one"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",2),e.\u0275\u0275element(4,"app-two"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",3),e.\u0275\u0275element(6,"app-three"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",4),e.\u0275\u0275element(8,"app-four"),e.\u0275\u0275elementEnd()())},dependencies:[C,x,y,b],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);grid-gap:10px;width:100vw;height:calc(100vh - 52px)}.one[_ngcontent-%COMP%]{border-style:solid;border-color:#6a6af099;grid-column:1/3;grid-row:1/3;overflow-y:auto}.two[_ngcontent-%COMP%]{border-style:solid;border-color:#ff0;grid-column:3/4;grid-row:1/3;overflow-y:auto}.three[_ngcontent-%COMP%]{border-style:solid;border-color:violet;grid-row:3/5;grid-column:1/3}.four[_ngcontent-%COMP%]{border-style:solid;border-color:#0ff;grid-column:3/4;grid-row:3/5;overflow-y:auto}"],changeDetection:0}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.Bz.forChild(w),p.Bz]}),n})();var E=s(7531),T=s(7322),I=s(3075),U=s(7423);let _=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[i.ez,O,v.Is,E.c,T.lN,U.ot,I.UX]}),n})()}}]);