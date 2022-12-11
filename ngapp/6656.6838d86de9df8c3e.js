"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[6656],{6656:(Q,b,i)=>{i.r(b),i.d(b,{TodosEntityModule:()=>f});var a=i(6895),C=i(9116),s=i(3804),t=i(4650),r=i(9653),d=i(4006);class g{constructor(e){this.store=e}ngOnInit(){}addTodo(e){console.log("Todo",e),this.store.dispatch((0,s.ju)({todo:e}))}}g.\u0275fac=function(e){return new(e||g)(t.\u0275\u0275directiveInject(r.yh))},g.\u0275cmp=t.\u0275\u0275defineComponent({type:g,selectors:[["lib-add-todo"]],decls:15,vars:0,consts:[[1,"d-flex","justify-content-between"],[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","ngModel","","name","title",1,"form-control"],[1,"mb-3","form-check"],["type","checkbox","id","completed","ngModel","","name","completed",1,"form-check-input"],["for","completed",1,"form-check-label"],["type","submit",1,"btn","btn-primary"]],template:function(e,n){if(1&e){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"header",0)(1,"h1"),t.\u0275\u0275text(2,"Add todo"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(3,"form",1,2),t.\u0275\u0275listener("ngSubmit",function(){t.\u0275\u0275restoreView(l);const E=t.\u0275\u0275reference(4);return t.\u0275\u0275resetView(n.addTodo(E.value))}),t.\u0275\u0275elementStart(5,"div",3)(6,"label",4),t.\u0275\u0275text(7,"Title"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(8,"input",5),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"div",6),t.\u0275\u0275element(10,"input",7),t.\u0275\u0275elementStart(11,"label",8),t.\u0275\u0275text(12,"Completed"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(13,"button",9),t.\u0275\u0275text(14,"Submit"),t.\u0275\u0275elementEnd()()}},dependencies:[d._Y,d.Fj,d.Wl,d.JJ,d.JL,d.On,d.F]});var M=i(6943),V=i(4629),R=i(4151);const I="entityTodos",m=(0,V.H)({sortComparer:function $(o,e){return o.title.localeCompare(e.title)}}),A=m.getInitialState({}),P=(0,r.Lq)(A,(0,r.on)(s.DK,(o,e)=>m.addOne(e.todo,o)),(0,r.on)(s.IX,(o,e)=>m.updateOne(e.todo,o)),(0,r.on)(s.RS,(o,e)=>m.removeOne(e.todoId,o)),(0,r.on)(R.jb,(o,e)=>m.setAll(e.todos,o))),{selectEntities:L,selectAll:J}=m.getSelectors(),F=(0,r.ZF)(I),K=(0,r.P1)(F,J),W=(0,r.P1)(F,L),k=(0,r.ZF)("router"),{selectRouteParams:G}=(0,M.Ug)(k),U=(0,r.P1)(W,G,(o,{id:e})=>o&&o[e]);function X(o,e){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"form",2,3),t.\u0275\u0275listener("ngSubmit",function(){const E=t.\u0275\u0275restoreView(n).ngIf,S=t.\u0275\u0275reference(2),Z=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(Z.updateTodo(E,S.value))}),t.\u0275\u0275elementStart(3,"div",4)(4,"label",5),t.\u0275\u0275text(5,"Title"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(6,"input",6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div",7),t.\u0275\u0275element(8,"input",8),t.\u0275\u0275elementStart(9,"label",9),t.\u0275\u0275text(10,"Completed"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(11,"button",10),t.\u0275\u0275text(12,"Submit"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementContainerEnd()}if(2&o){const n=e.ngIf;t.\u0275\u0275advance(6),t.\u0275\u0275property("ngModel",n.title),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngModel",n.completed)}}class T{constructor(e){this.store=e}ngOnInit(){this.todo$=this.store.pipe((0,r.Ys)(U))}updateTodo(e,n){const l={...e,...n};this.store.dispatch((0,s.IX)({todo:{id:l.id,changes:n}})),console.log("Update ",l)}}T.\u0275fac=function(e){return new(e||T)(t.\u0275\u0275directiveInject(r.yh))},T.\u0275cmp=t.\u0275\u0275defineComponent({type:T,selectors:[["lib-edit-todo"]],decls:5,vars:3,consts:[[1,"d-flex","justify-content-between","mt-2"],[4,"ngIf"],[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","name","title",1,"form-control",3,"ngModel"],[1,"mb-3","form-check"],["type","checkbox","id","completed","name","completed",1,"form-check-input",3,"ngModel"],["for","completed",1,"form-check-label"],["type","submit",1,"btn","btn-primary"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"header",0)(1,"h1"),t.\u0275\u0275text(2,"Edit todo"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(3,X,13,2,"ng-container",1),t.\u0275\u0275pipe(4,"async")),2&e&&(t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(4,1,n.todo$)))},dependencies:[a.O5,d._Y,d.Fj,d.Wl,d.JJ,d.JL,d.On,d.F,a.Ov]});class h{constructor(){}ngOnInit(){}}h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=t.\u0275\u0275defineComponent({type:h,selectors:[["lib-view-todo"]],decls:2,vars:0,template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"p"),t.\u0275\u0275text(1,"view-todo works!"),t.\u0275\u0275elementEnd())}});const Y=function(o){return["edit",o]};function z(o,e){if(1&o){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"li",9)(1,"div",10),t.\u0275\u0275text(2),t.\u0275\u0275elementStart(3,"div"),t.\u0275\u0275text(4),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(5,"a",11),t.\u0275\u0275element(6,"i",12),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"i",13),t.\u0275\u0275listener("click",function(){const E=t.\u0275\u0275restoreView(n).$implicit,S=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(S.removeTodo(E))}),t.\u0275\u0275elementEnd()()}if(2&o){const n=e.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate2(" ",n.id," - ",n.title," "),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1("Completed: ",n.completed,""),t.\u0275\u0275advance(1),t.\u0275\u0275property("routerLink",t.\u0275\u0275pureFunction1(4,Y,n.id))}}function H(o,e){if(1&o&&(t.\u0275\u0275elementStart(0,"ul",7),t.\u0275\u0275template(1,z,8,6,"li",8),t.\u0275\u0275elementEnd()),2&o){const n=e.ngIf;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",n)}}class v{constructor(e){this.store=e}ngOnInit(){this.todos$=this.store.pipe((0,r.Ys)(K))}removeTodo(e){this.store.dispatch((0,s.iV)({todoId:e.id}))}}v.\u0275fac=function(e){return new(e||v)(t.\u0275\u0275directiveInject(r.yh))},v.\u0275cmp=t.\u0275\u0275defineComponent({type:v,selectors:[["lib-todos-entity"]],decls:12,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-sm-6"],[1,"d-flex","justify-content-between","mb-2"],["routerLink","add",1,"btn","btn-primary","add-todo"],[1,"ti-plus"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between"],[1,"todo"],[3,"routerLink"],[1,"ti-pencil","mr-2"],[1,"ti-trash",3,"click"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"header",3)(4,"h1"),t.\u0275\u0275text(5,"Todo List"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"a",4),t.\u0275\u0275element(7,"i",5),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(8,H,2,1,"ul",6),t.\u0275\u0275pipe(9,"async"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"div",2),t.\u0275\u0275element(11,"router-outlet"),t.\u0275\u0275elementEnd()()()),2&e&&(t.\u0275\u0275advance(8),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(9,1,n.todos$)))},dependencies:[a.sg,a.O5,C.lC,C.rH,a.Ov],styles:[".add-todo[_ngcontent-%COMP%]{display:flex;align-self:center}.todo[_ngcontent-%COMP%]{flex:1}.ti-trash[_ngcontent-%COMP%]{cursor:pointer;margin-top:2px;margin-left:10px}"]});const D=[{path:"",component:v,children:[{path:"add",component:g},{path:"edit/:id",component:T},{path:"view/:id",component:h}]}];class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=t.\u0275\u0275defineInjector({imports:[C.Bz.forChild(D),C.Bz]});var c=i(8776),w=i(9646),x=i(3900),j=i(4004),O=i(262),N=i(2425);class u{constructor(e,n){this.actions$=e,this.todoService=n,this.editPost$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.IX),(0,x.w)(({todo:l})=>{console.log("HERER",l);const y={id:l.id,...l.changes};return this.todoService.updateTodo(y)})),{dispatch:!1}),this.createTodo$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.ju),(0,x.w)(({todo:l})=>this.todoService.addTodo(l).pipe((0,j.U)(y=>(0,s.DK)({todo:y})),(0,O.K)(()=>(0,w.of)((0,s.$G)())))))),this.deleteEntityTodo$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(s.iV),(0,x.w)(({todoId:l})=>this.todoService.removeTodo(l).pipe((0,j.U)(()=>(0,s.RS)({todoId:l})),(0,O.K)(()=>(0,w.of)((0,s.TV)()))))))}}u.\u0275fac=function(e){return new(e||u)(t.\u0275\u0275inject(c.eX),t.\u0275\u0275inject(N.w))},u.\u0275prov=t.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac});class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275mod=t.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=t.\u0275\u0275defineInjector({imports:[a.ez,d.u5,p,r.Aw.forFeature(I,function B(o,e){return P(o,e)}),c.sQ.forFeature([u])]})}}]);