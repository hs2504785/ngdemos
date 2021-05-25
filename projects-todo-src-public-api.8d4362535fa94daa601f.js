(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{wjTN:function(t,e,o){"use strict";o.r(e),o.d(e,"TodoService",function(){return i}),o.d(e,"TodoComponent",function(){return U}),o.d(e,"TodoModule",function(){return C});var c=o("fXoL"),n=o("tk/3");let i=(()=>{class t{constructor(t){this.http=t,this.API_URL="https://jsonplaceholder.typicode.com/todos"}getTodos(){return this.http.get(`${this.API_URL}`)}addTodo(t){return this.http.post(`${this.API_URL}`,t)}updateTodo(t){return this.http.put(`${this.API_URL}/${t.id}`,t)}removeTodo(t){return this.http.delete(`${this.API_URL}/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(n.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=o("l7P3"),b=o("2myh"),d=o("99NH");const r="todo",a=Object(s.l)({data:null,isLoading:!1,error:null,loaded:!1},Object(s.o)(b.j,t=>Object.assign(Object.assign({},t),{isLoading:!0})),Object(s.o)(b.l,(t,e)=>Object.assign(Object.assign({},t),{isLoading:!1,data:e.todos,loaded:!0})),Object(s.o)(b.k,(t,e)=>Object.assign(Object.assign({},t),{isLoading:!1})),Object(s.o)(b.a,t=>Object.assign(Object.assign({},t),{isLoading:!0})),Object(s.o)(b.c,(t,e)=>Object.assign(Object.assign({},t),{isLoading:!1,data:[e.todo,...t.data]})),Object(s.o)(b.b,t=>Object.assign(Object.assign({},t),{isLoading:!1})),Object(s.o)(b.g,t=>Object.assign(Object.assign({},t),{isLoading:!0})),Object(s.o)(b.i,(t,e)=>{const o=t.data.map(t=>t.id===e.todo.id?e.todo:t);return Object.assign(Object.assign({},t),{isLoading:!1,data:o})}),Object(s.o)(b.h,t=>Object.assign(Object.assign({},t),{isLoading:!1})),Object(s.o)(b.d,(t,e)=>{const o=t.data.filter(t=>t.id!==e.todoId);return Object.assign(Object.assign({},t),{data:o})}),Object(s.o)(b.f,t=>Object.assign(Object.assign({},t),{isLoading:!1})),Object(s.o)(b.e,t=>Object.assign(Object.assign({},t),{isLoading:!1})));function l(t,e){return a(t,e)}const p=Object(s.k)(r),u=Object(s.m)(p,t=>t.data),f=Object(s.k)("router"),{selectRouteParams:j}=Object(d.b)(f),O=Object(s.m)(u,j,(t,{id:e})=>t&&t.find(t=>t.id===+e));var g=o("tyNb"),m=o("ofXK");const h=function(t){return["edit",t]};function T(t,e){if(1&t){const t=c.Vb();c.Ub(0,"li",9),c.Ub(1,"div",10),c.zc(2),c.Ub(3,"div"),c.zc(4),c.Tb(),c.Tb(),c.Ub(5,"a",11),c.Pb(6,"i",12),c.Tb(),c.Ub(7,"i",13),c.bc("click",function(){c.rc(t);const o=e.$implicit;return c.fc(2).removeTodo(o)}),c.Tb(),c.Tb()}if(2&t){const t=e.$implicit;c.Db(2),c.Cc(" ",t.id," - ",t.title," "),c.Db(2),c.Bc("Completed: ",t.completed,""),c.Db(1),c.kc("routerLink",c.nc(4,h,t.id))}}function v(t,e){if(1&t&&(c.Ub(0,"ul",7),c.xc(1,T,8,6,"li",8),c.Tb()),2&t){const t=e.ngIf;c.Db(1),c.kc("ngForOf",t)}}let U=(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.todos$=this.store.pipe(Object(s.q)(u))}removeTodo(t){this.store.dispatch(Object(b.d)({todoId:t.id}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(s.d))},t.\u0275cmp=c.Ib({type:t,selectors:[["lib-todo"]],decls:12,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-sm-6"],[1,"d-flex","justify-content-between","mb-2"],["routerLink","add",1,"btn","btn-primary","add-todo"],[1,"ti-plus"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item d-flex justify-content-between",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between"],[1,"todo"],[3,"routerLink"],[1,"ti-pencil","mr-2"],[1,"ti-trash",3,"click"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"header",3),c.Ub(4,"h1"),c.zc(5,"Todo List"),c.Tb(),c.Ub(6,"a",4),c.Pb(7,"i",5),c.Tb(),c.Tb(),c.xc(8,v,2,1,"ul",6),c.gc(9,"async"),c.Tb(),c.Ub(10,"div",2),c.Pb(11,"router-outlet"),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Db(8),c.kc("ngIf",c.hc(9,1,e.todos$)))},directives:[g.g,m.l,g.i,m.k],pipes:[m.b],styles:[".add-todo[_ngcontent-%COMP%] {\n        display: flex;\n        align-self: center;\n      }\n\n      .todo[_ngcontent-%COMP%] {\n        flex: 1;\n      }\n\n      .ti-trash[_ngcontent-%COMP%] {\n        cursor: pointer;\n      }"]}),t})();var k=o("3Pt+");function y(t,e){if(1&t){const t=c.Vb();c.Sb(0),c.Ub(1,"form",2,3),c.bc("ngSubmit",function(){c.rc(t);const o=e.ngIf,n=c.pc(2);return c.fc().updateTodo(o,n.value)}),c.Ub(3,"div",4),c.Ub(4,"label",5),c.zc(5,"Title"),c.Tb(),c.Pb(6,"input",6),c.Tb(),c.Ub(7,"div",7),c.Pb(8,"input",8),c.Ub(9,"label",9),c.zc(10,"Completed"),c.Tb(),c.Tb(),c.Ub(11,"button",10),c.zc(12,"Submit"),c.Tb(),c.Tb(),c.Rb()}if(2&t){const t=e.ngIf;c.Db(6),c.kc("ngModel",t.title),c.Db(2),c.kc("ngModel",t.completed)}}const I=[{path:"",component:U,children:[{path:"add",component:(()=>{class t{constructor(t){this.store=t}ngOnInit(){}addTodo(t){console.log("Todo",t),this.store.dispatch(Object(b.a)({todo:t}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(s.d))},t.\u0275cmp=c.Ib({type:t,selectors:[["lib-add-todo"]],decls:15,vars:0,consts:[[1,"d-flex","justify-content-between"],[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","ngModel","","name","title",1,"form-control"],[1,"mb-3","form-check"],["type","checkbox","id","completed","ngModel","","name","completed",1,"form-check-input"],["for","completed",1,"form-check-label"],["type","submit",1,"btn","btn-primary"]],template:function(t,e){if(1&t){const t=c.Vb();c.Ub(0,"header",0),c.Ub(1,"h1"),c.zc(2,"Add todo"),c.Tb(),c.Tb(),c.Ub(3,"form",1,2),c.bc("ngSubmit",function(){c.rc(t);const o=c.pc(4);return e.addTodo(o.value)}),c.Ub(5,"div",3),c.Ub(6,"label",4),c.zc(7,"Title"),c.Tb(),c.Pb(8,"input",5),c.Tb(),c.Ub(9,"div",6),c.Pb(10,"input",7),c.Ub(11,"label",8),c.zc(12,"Completed"),c.Tb(),c.Tb(),c.Ub(13,"button",9),c.zc(14,"Submit"),c.Tb(),c.Tb()}},directives:[k.k,k.h,k.i,k.b,k.g,k.j,k.a],styles:[""]}),t})()},{path:"edit/:id",component:(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.todo$=this.store.pipe(Object(s.q)(O))}updateTodo(t,e){this.store.dispatch(Object(b.g)({todo:Object.assign(Object.assign({},t),e)}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(s.d))},t.\u0275cmp=c.Ib({type:t,selectors:[["lib-edit-todo"]],decls:5,vars:3,consts:[[1,"d-flex","justify-content-between","mt-2"],[4,"ngIf"],[3,"ngSubmit"],["form","ngForm"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","id","title","name","title",1,"form-control",3,"ngModel"],[1,"mb-3","form-check"],["type","checkbox","id","completed","name","completed",1,"form-check-input",3,"ngModel"],["for","completed",1,"form-check-label"],["type","submit",1,"btn","btn-primary"]],template:function(t,e){1&t&&(c.Ub(0,"header",0),c.Ub(1,"h1"),c.zc(2,"Edit todo"),c.Tb(),c.Tb(),c.xc(3,y,13,2,"ng-container",1),c.gc(4,"async")),2&t&&(c.Db(3),c.kc("ngIf",c.hc(4,1,e.todo$)))},directives:[m.l,k.k,k.h,k.i,k.b,k.g,k.j,k.a],pipes:[m.b],styles:[""]}),t})()},{path:"view/:id",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["lib-view-todo"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Ub(0,"p"),c.zc(1,"view-todo works!"),c.Tb())},styles:[""]}),t})()}]}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[g.h.forChild(I)],g.h]}),t})();var L=o("9jGm"),$=o("bOdf"),P=o("lJxs"),x=o("JIr8"),S=o("eIep"),z=o("LRne");let M=(()=>{class t{constructor(t,e){this.actions$=t,this.todoService=e,this.loadTodos$=Object(L.d)(()=>this.actions$.pipe(Object(L.e)(b.j),Object($.a)(()=>this.todoService.getTodos()),Object(P.a)(t=>Object(b.l)({todos:t})),Object(x.a)(t=>Object(z.a)(Object(b.k)({error:t}))))),this.createTodo$=Object(L.d)(()=>this.actions$.pipe(Object(L.e)(b.a),Object(S.a)(({todo:t})=>this.todoService.addTodo(t).pipe(Object(P.a)(t=>Object(b.c)({todo:t})),Object(x.a)(()=>Object(z.a)(Object(b.b)())))))),this.editPost$=Object(L.d)(()=>this.actions$.pipe(Object(L.e)(b.g),Object(S.a)(({todo:t})=>this.todoService.updateTodo(t).pipe(Object(P.a)(t=>Object(b.i)({todo:t})),Object(x.a)(()=>Object(z.a)(Object(b.h)())))))),this.deletePost$=Object(L.d)(()=>this.actions$.pipe(Object(L.e)(b.d),Object(S.a)(({todoId:t})=>this.todoService.removeTodo(t).pipe(Object(P.a)(()=>Object(b.f)()),Object(x.a)(()=>Object(z.a)(Object(b.e)()))))))}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(L.a),c.Yb(i))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[s.f.forFeature(r,l),k.d,m.c,w,L.c.forFeature([M])]]}),t})()}}]);