"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[6682],{6682:(y,i,s)=>{s.r(i),s.d(i,{UserSearchModule:()=>U});var c=s(6019),l=s(9843),p=s(3405),m=s(8053),d=s(1264),e=s(3668),h=s(4522);let u=(()=>{class t{constructor(r){this.http=r,this.API_URL="https://jsonplaceholder.typicode.com/users",this.userQuerySubject=new p.xQ,this.users$=this.userQuerySubject.pipe((0,d.y)(o=>this.loadUsers(o)))}searchUser(r){this.userQuerySubject.next(r)}loadUsers(r){return this.http.get(`${this.API_URL}?q=${r}`).pipe((0,m.U)(o=>o.filter(a=>null==a?void 0:a.name.toLowerCase().startsWith(r.toLowerCase()))))}}return t.\u0275fac=function(r){return new(r||t)(e.\u0275\u0275inject(h.eN))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();function S(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"li",5),e.\u0275\u0275text(1),e.\u0275\u0275elementStart(2,"small"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&t){const r=n.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",r.name," - "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(r.email)}}const f=[{path:"",component:(()=>{class t{constructor(r){this.userService=r}ngOnInit(){this.users$=this.userService.users$}searchUser(r){this.userService.searchUser(r)}}return t.\u0275fac=function(r){return new(r||t)(e.\u0275\u0275directiveInject(u))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-user-search"]],features:[e.\u0275\u0275ProvidersFeature([u])],decls:8,vars:3,consts:[[1,"p-2"],[1,"container-fluid"],["placeholder","Type car name",1,"form-control",3,"input"],[1,"list-group","mt-2","w-50"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(r,o){1&r&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275elementStart(1,"h1"),e.\u0275\u0275text(2,"Search User"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",1),e.\u0275\u0275elementStart(4,"input",2),e.\u0275\u0275listener("input",function(g){return o.searchUser(g.target.value)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"ul",3),e.\u0275\u0275template(6,S,4,2,"li",4),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementEnd()),2&r&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(7,1,o.users$)))},directives:[c.sg],pipes:[c.Ov],styles:[""],changeDetection:0}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(f)],l.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.ez,v]]}),t})()}}]);