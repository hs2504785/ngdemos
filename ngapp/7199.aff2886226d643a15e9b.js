(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[7199],{1705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BlogModule:()=>ee,entityMetadata:()=>G,postFeatureKey:()=>Z,userFeatureKey:()=>X});var r=n(1116),i=n(766),s=n(1041),o=n(5366),a=n(1126),l=n(7112),c=n(3070),d=n(3841),p=n(7064);function m(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"mat-option",5),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;o["\u0275\u0275property"]("value",e.id),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.name)}}function u(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"mat-toolbar",1),o["\u0275\u0275elementStart"](1,"div",2),o["\u0275\u0275elementStart"](2,"mat-form-field"),o["\u0275\u0275elementStart"](3,"mat-label"),o["\u0275\u0275text"](4,"User"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"mat-select",3),o["\u0275\u0275listener"]("selectionChange",function(t){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().selectUser(t.value)}),o["\u0275\u0275template"](6,m,2,2,"mat-option",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.ngIf,n=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("formControl",n.selectedUser),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngForOf",e)}}let h=(()=>{class e{constructor(e,t,n){this.userService=e,this.route=t,this.router=n,this.selectedUser=new s.NI,this.users$=this.userService.entities$,this.users$.subscribe(e=>{if(e&&e.length){const t=+e[0].id;this.selectedUser.setValue(t),this.selectUser(t,"preserve")}})}selectUser(e,t="merge"){setTimeout(()=>{this.router.navigate([+e],{relativeTo:this.route,queryParamsHandling:t})})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.K),o["\u0275\u0275directiveInject"](i.gz),o["\u0275\u0275directiveInject"](i.F0))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-admin"]],decls:3,vars:3,consts:[["color","primary",4,"ngIf"],["color","primary"],[1,"d-flex","justify-content-end","w-100","mt-4"],["id","user",3,"formControl","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,u,7,2,"mat-toolbar",0),o["\u0275\u0275pipe"](1,"async"),o["\u0275\u0275element"](2,"router-outlet")),2&e&&o["\u0275\u0275property"]("ngIf",o["\u0275\u0275pipeBind1"](1,1,t.users$))},directives:[r.O5,i.lC,l.Ye,c.KE,c.hX,d.gD,s.JJ,s.oH,r.sg,p.ey],pipes:[r.Ov],styles:['[_nghost-%COMP%]{display:grid;height:100vh;grid-template:" mat-toolbar     " auto " router-outlet     " 0 " routed-component  " minmax(0,1fr)}router-outlet[_ngcontent-%COMP%]{grid-area:router-outlet}router-outlet[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{grid-area:routed-component}']}),e})();var f=n(1671),g=n(1305),v=n(9996),y=n(3884);const I=(0,f.ZF)("router"),{selectRouteParam:S,selectQueryParam:C}=y.Ug(I),b=S("userId"),x=(0,f.P1)(b,e=>e?+e:void 0),P=C("postId"),E=(0,f.P1)(P,e=>+e);var j=n(8302),w=n(2797),O=n(9550),U=n(5959),$=n(4019),M=n(4689),k=n(5416),_=n(4369),V=n(667);function B(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"mat-list-item",4),o["\u0275\u0275listener"]("click",function(){const t=o["\u0275\u0275restoreView"](e).$implicit;return o["\u0275\u0275nextContext"]().selectPost(t.id)}),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=o["\u0275\u0275nextContext"]();o["\u0275\u0275classProp"]("mat-list-item-active",e.id===n.selectedPostId),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate"](e.title)}}let A=(()=>{class e{constructor(e,t,n,r){this.userService=e,this.postService=t,this.router=n,this.store=r,this.unsubscribe=new U.xQ}ngOnInit(){this.currentUserId$=this.store.pipe((0,f.Ys)(x)),this.initializevalues()}initializevalues(){this.posts=this.currentUserId$.pipe((0,$.b)(e=>this.userId=e),(0,M.w)(e=>this.postService.getPostsByUser(e))),this.store.pipe((0,f.Ys)(E)).pipe((0,k.R)(this.unsubscribe)).subscribe(e=>this.selectedPostId=e?+e:void 0)}selectPost(e){this.router.navigate([],{queryParams:{postId:e},queryParamsHandling:"merge"}),this.selectedPostId=e}createPost(){this.postService.add({body:"placeholder body",title:"placeholder title",userId:this.userId||0},{isOptimistic:!1})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.K),o["\u0275\u0275directiveInject"](j.L),o["\u0275\u0275directiveInject"](i.F0),o["\u0275\u0275directiveInject"](f.yh))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-post-list"]],decls:10,vars:3,consts:[["mat-icon-button","",3,"click"],[1,"ti-plus"],["role","list"],["role","listitem",3,"mat-list-item-active","click",4,"ngFor","ngForOf"],["role","listitem",3,"click"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"mat-card"),o["\u0275\u0275elementStart"](1,"mat-card-header"),o["\u0275\u0275elementStart"](2,"mat-card-title"),o["\u0275\u0275text"](3,"Posts on your blog"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"button",0),o["\u0275\u0275listener"]("click",function(){return t.createPost()}),o["\u0275\u0275element"](5,"i",1),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"mat-card-content"),o["\u0275\u0275elementStart"](7,"mat-action-list",2),o["\u0275\u0275template"](8,B,2,3,"mat-list-item",3),o["\u0275\u0275pipe"](9,"async"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind1"](9,1,t.posts)))},directives:[w.a8,w.dk,w.n5,_.lW,w.dn,V.i$,r.sg,V.Tg],pipes:[r.Ov],styles:["mat-list-item[_ngcontent-%COMP%]{height:auto!important}mat-list-item[_ngcontent-%COMP%]     .mat-list-item-content{padding:10px!important}.mat-list-item-active[_ngcontent-%COMP%]{background-color:#d3d3d3}.mat-card-header[_ngcontent-%COMP%]{align-items:baseline}"]}),e})();var F=n(3835);function N(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"mat-form-field"),o["\u0275\u0275elementStart"](1,"input",2),o["\u0275\u0275listener"]("blur",function(){o["\u0275\u0275restoreView"](e);const t=o["\u0275\u0275nextContext"]().ngIf;return o["\u0275\u0275nextContext"]().setTitle(t)}),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formControl",e.title)}}function K(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"mat-card-title"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"button",3),o["\u0275\u0275listener"]("click",function(){o["\u0275\u0275restoreView"](e);const t=o["\u0275\u0275nextContext"]().ngIf;return o["\u0275\u0275nextContext"]().delete(t)}),o["\u0275\u0275element"](4,"i",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"button",3),o["\u0275\u0275listener"]("click",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"](2).editingTitle=!0}),o["\u0275\u0275element"](6,"i",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]().ngIf;o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](e.title)}}function L(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"mat-form-field"),o["\u0275\u0275elementStart"](1,"input",2),o["\u0275\u0275listener"]("blur",function(){o["\u0275\u0275restoreView"](e);const t=o["\u0275\u0275nextContext"]().ngIf;return o["\u0275\u0275nextContext"]().setBody(t)}),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"](2);o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formControl",e.body)}}function T(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"button",3),o["\u0275\u0275listener"]("click",function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"](2).editingBody=!0}),o["\u0275\u0275element"](2,"i",6),o["\u0275\u0275text"](3," Edit Body "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"mat-card-title"),o["\u0275\u0275text"](5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementContainerEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]().ngIf;o["\u0275\u0275advance"](5),o["\u0275\u0275textInterpolate"](e.body)}}function D(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"mat-card"),o["\u0275\u0275elementStart"](1,"mat-card-header",1),o["\u0275\u0275template"](2,N,2,1,"mat-form-field",0),o["\u0275\u0275template"](3,K,7,1,"ng-container",0),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](4,"mat-card-content"),o["\u0275\u0275template"](5,L,2,1,"mat-form-field",0),o["\u0275\u0275template"](6,T,6,1,"ng-container",0),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",e.editingTitle),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!e.editingTitle),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",e.editingBody),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!e.editingBody)}}let R=(()=>{class e{constructor(e,t,n,r){this.router=e,this.postService=t,this.userService=n,this.store=r,this.editingTitle=!1,this.editingBody=!1,this.title=new s.NI,this.body=new s.NI}ngOnInit(){this.currentUserId$=this.store.pipe((0,f.Ys)(x)),this.initializeValues()}initializeValues(){const e=this.postService.entities$,t=this.store.pipe((0,f.Ys)(E)),n=(0,g.aj)([e,t.pipe((0,F.h)(e=>!isNaN(e)))]).pipe((0,v.U)(([e,t])=>e.find(e=>e.id===t)));this.post$=(0,g.aj)([n,this.currentUserId$]).pipe((0,v.U)(([e,t])=>t===(null==e?void 0:e.userId)?e:void 0),(0,$.b)(e=>{e?(this.title.setValue(e.title),this.body.setValue(e.body)):setTimeout(()=>{this.router.navigate([],{queryParams:{postId:void 0},queryParamsHandling:"merge"})})}))}delete(e){window.confirm("Are you sure you want to delete this post?")&&this.postService.delete(e)}setTitle(e){this.editingTitle=!1,this.postService.update(Object.assign(Object.assign({},e),{title:this.title.value}))}setBody(e){this.editingBody=!1,this.postService.update(Object.assign(Object.assign({},e),{body:this.body.value}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.F0),o["\u0275\u0275directiveInject"](j.L),o["\u0275\u0275directiveInject"](a.K),o["\u0275\u0275directiveInject"](f.yh))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-post"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"bg-light"],["matInput","",3,"formControl","blur"],["mat-icon-button","",3,"click"],[1,"ti-trash"],["title","Edit Title",1,"ti-pencil"],[1,"ti-pencil"]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,D,7,4,"mat-card",0),o["\u0275\u0275pipe"](1,"async")),2&e&&o["\u0275\u0275property"]("ngIf",o["\u0275\u0275pipeBind1"](1,1,t.post$))},directives:[r.O5,w.a8,w.dk,w.dn,c.KE,O.Nt,s.Fj,s.JJ,s.oH,w.n5,_.lW],pipes:[r.Ov],styles:[".mat-card-header[_ngcontent-%COMP%]{align-items:baseline}"]}),e})();function z(e,t){1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275element"](1,"app-post-list"),o["\u0275\u0275element"](2,"app-post"),o["\u0275\u0275elementContainerEnd"]())}function J(e,t){if(1&e&&(o["\u0275\u0275elementContainerStart"](0),o["\u0275\u0275elementStart"](1,"mat-card"),o["\u0275\u0275elementStart"](2,"mat-card-header"),o["\u0275\u0275elementStart"](3,"mat-card-title"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"mat-card-content",1),o["\u0275\u0275elementStart"](6,"div"),o["\u0275\u0275elementStart"](7,"mat-form-field"),o["\u0275\u0275element"](8,"input",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"div"),o["\u0275\u0275elementStart"](10,"mat-form-field"),o["\u0275\u0275element"](11,"input",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"div"),o["\u0275\u0275elementStart"](13,"mat-form-field"),o["\u0275\u0275element"](14,"input",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"div"),o["\u0275\u0275elementStart"](16,"mat-form-field"),o["\u0275\u0275element"](17,"input",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](18,z,3,0,"ng-container",0),o["\u0275\u0275pipe"](19,"async"),o["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.ngIf,n=o["\u0275\u0275nextContext"]();let r;o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate"](e.name),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("value",e.username),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("value",e.name),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("value",e.email),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("value",e.phone),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==(r=o["\u0275\u0275pipeBind1"](19,6,n.posts$))?null:r.length)}}let Y=(()=>{class e{constructor(e,t,n){this.userService=e,this.postService=t,this.store=n}ngOnInit(){const e=this.userService.entities$,t=this.store.pipe((0,f.Ys)(x));this.user$=(0,g.aj)([e,t]).pipe((0,v.U)(([e,t])=>e.find(e=>e.id===t))),this.posts$=this.postService.entities$}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.K),o["\u0275\u0275directiveInject"](j.L),o["\u0275\u0275directiveInject"](f.yh))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-user"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"user"],["matInput","","placeholder","Username","readonly","",3,"value"],["matInput","","placeholder","Name","readonly","",3,"value"],["matInput","","placeholder","Email","readonly","",3,"value"],["matInput","","placeholder","Phone Number","readonly","",3,"value"]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,J,20,8,"ng-container",0),o["\u0275\u0275pipe"](1,"async")),2&e&&o["\u0275\u0275property"]("ngIf",o["\u0275\u0275pipeBind1"](1,1,t.user$))},directives:[r.O5,w.a8,w.dk,w.n5,w.dn,c.KE,O.Nt,A,R],pipes:[r.Ov],styles:['[_nghost-%COMP%]{display:grid;grid-template-areas:"user user" "list post";grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;grid-gap:10px;margin:10px}mat-card[_ngcontent-%COMP%]{grid-area:user}mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}app-post-list[_ngcontent-%COMP%]{grid-area:list;overflow:auto}app-post[_ngcontent-%COMP%]{grid-area:post}.user[_ngcontent-%COMP%]     .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:none!important;height:auto}']}),e})();var q=n(1898),H=n(5564),Q=n(4053);const W=[{path:"",component:h,children:[{path:":userId",component:Y}]}],X="User",Z="Post",G={[X]:{entityDispatcherOptions:{optimisticUpdate:!0,optimisticAdd:!0}},[Z]:{entityDispatcherOptions:{optimisticUpdate:!0,optimisticAdd:!0}}};let ee=(()=>{class e{constructor(e,t,n,r){this.eds=e,this.entityDataService=t,this.userDataService=n,this.postDataService=r,this.eds.registerMetadataMap(G),this.entityDataService.registerService(X,this.userDataService),this.entityDataService.registerService(Z,this.postDataService)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](q.f0),o["\u0275\u0275inject"](q.sP),o["\u0275\u0275inject"](H.M),o["\u0275\u0275inject"](Q.V))},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[r.ez,s.UX,O.c,c.lN,l.g0,d.LD,w.QW,_.ot,V.ie,i.Bz.forChild(W)]]}),e})()},4053:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var r=n(1898),i=n(1705),s=n(5366),o=n(2693);let a=(()=>{class e extends r.EJ{constructor(e,t){super(i.postFeatureKey,e,t),this.API_URL="https://jsonplaceholder.typicode.com/posts"}getAll(){return this.http.get(`${this.API_URL}`)}add(e){return this.http.post(`${this.API_URL}`,e)}update(e){return this.http.put(`${this.API_URL}/${e.id}`,e.changes)}delete(e){return this.http.delete(`${this.API_URL}/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](o.eN),s["\u0275\u0275inject"](r.hR))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},8302:(e,t,n)=>{"use strict";n.d(t,{L:()=>o});var r=n(1898),i=n(9996),s=n(5366);let o=(()=>{class e extends r.c8{constructor(e){super("Post",e),this.posts=this.entities$}getPostsByUser(e){return this.posts.pipe((0,i.U)(t=>t.filter(t=>t.userId===+e)))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.yV))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},5564:(e,t,n)=>{"use strict";n.d(t,{M:()=>a});var r=n(1898),i=n(1705),s=n(5366),o=n(2693);let a=(()=>{class e extends r.EJ{constructor(e,t){super(i.userFeatureKey,e,t),this.API_URL="https://jsonplaceholder.typicode.com/users",this.getAll()}getAll(){return this.http.get(`${this.API_URL}`)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](o.eN),s["\u0275\u0275inject"](r.hR))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},1126:(e,t,n)=>{"use strict";n.d(t,{K:()=>s});var r=n(1898),i=n(5366);let s=(()=>{class e extends r.c8{constructor(e){super("User",e)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275inject"](r.yV))},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},7199:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BlogdemoComponent:()=>o,BlogdemoModule:()=>y,BlogdemoService:()=>i});var r=n(5366);let i=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var s=n(766);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-blogdemo"]],decls:1,vars:0,template:function(e,t){1&e&&r["\u0275\u0275element"](0,"router-outlet")},directives:[s.lC],styles:["[_nghost-%COMP%]{height:100vh}"]}),e})();var a=n(1116),l=n(4369),c=n(7112),d=n(4019),p=n(3530),m=n(1126),u=n(8302);let h=(()=>{class e{constructor(e,t){this.userService=e,this.postService=t}resolve(e,t){return this.postService.loaded$.pipe((0,d.b)(e=>{e||(this.userService.getAll(),this.postService.getAll())}),(0,p.P)())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](m.K),r["\u0275\u0275inject"](u.L))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();var f=n(4053),g=n(5564);const v=[{path:"",component:o,children:[{path:"blog",loadChildren:()=>Promise.resolve().then(n.bind(n,1705)).then(e=>e.BlogModule),resolve:[h]},{path:"",redirectTo:"blog"}]}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[g.M,f.V,h],imports:[[a.ez,c.g0,l.ot,s.Bz.forChild(v)]]}),e})()}}]);