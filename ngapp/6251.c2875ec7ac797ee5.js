"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[6251],{6251:(I,f,n)=>{n.r(f),n.d(f,{UsersCsModule:()=>o});var a=n(6895),v=n(9116),p=n(7956),g=n(6822),C=n(7695),e=n(4650),h=n(5938);function U(r,t){if(1&r){const s=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",5)(1,"div",6),e.\u0275\u0275element(2,"img",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",8)(4,"div")(5,"strong"),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"br"),e.\u0275\u0275elementStart(8,"small"),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"div")(11,"button",9),e.\u0275\u0275listener("click",function(){const m=e.\u0275\u0275restoreView(s).$implicit,u=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(u.editUser(m))}),e.\u0275\u0275element(12,"i",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"button",11),e.\u0275\u0275listener("click",function(){const m=e.\u0275\u0275restoreView(s).$implicit,u=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(u.removeUser(m))}),e.\u0275\u0275element(14,"i",12),e.\u0275\u0275elementEnd()()()()}if(2&r){const s=t.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275property("src",s.avatar,e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(s.first_name),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(s.email)}}class l{constructor(t,s){this.dialog=t,this.userService=s,this.users$=this.userService.users$}ngOnInit(){this.userService.getUsers()}removeUser(t){console.log("Remove user"),this.userService.removeUser(t.id)}addUser(){const t=(0,p.m)();t.data={dialogTitle:"Add User",mode:"create"},this.sub=this.dialog.open(g.K,t).afterClosed().subscribe(s=>{s&&this.userService.addUser(s)})}editUser(t){const s=(0,p.m)();s.data={dialogTitle:"Edit User",user:t,mode:"update"};const d=this.dialog.open(g.K,s).afterClosed().subscribe(c=>{c&&this.userService.updateUser(c)});this.sub&&this.sub.add(d)}ngOnDestroy(){this.sub?.unsubscribe()}}l.\u0275fac=function(t){return new(t||l)(e.\u0275\u0275directiveInject(h.uw),e.\u0275\u0275directiveInject(C.O))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["app-users-cs"]],features:[e.\u0275\u0275ProvidersFeature([C.O])],decls:8,vars:3,consts:[[1,"container"],[1,"d-flex","justify-content-between"],["type","button",1,"btn","btn-primary","align-self-center",3,"click"],[1,"ti-plus"],["class","d-flex mb-2",4,"ngFor","ngForOf"],[1,"d-flex","mb-2"],[1,"flex-shrink-0","mr-2"],["alt","...",3,"src"],[1,"flex-grow-1","ml-2"],[1,"btn","btn-primary","mr-2",3,"click"],[1,"ti-pencil"],[1,"btn","btn-danger",3,"click"],[1,"ti-trash"]],template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"header",1)(2,"h1"),e.\u0275\u0275text(3,"Users List (Service)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",2),e.\u0275\u0275listener("click",function(){return s.addUser()}),e.\u0275\u0275element(5,"i",3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(6,U,15,3,"div",4),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(7,1,s.users$)))},dependencies:[a.sg,a.Ov],styles:["img[_ngcontent-%COMP%]{width:128px;height:128px}"],changeDetection:0});const x=[{path:"",component:l}];class i{}i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=e.\u0275\u0275defineInjector({imports:[v.Bz.forChild(x),v.Bz]});var b=n(4006),y=n(4859),S=n(9549),E=n(4144);class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[a.ez,i,h.Is,E.c,S.lN,y.ot,b.UX]})}}]);