"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[5501],{5501:(v,r,n)=>{n.r(r),n.d(r,{GithubRepoComponent:()=>a,GithubRepoModule:()=>o,RepoService:()=>c});var m=n(4004),e=n(4650),u=n(915);class c{constructor(t){this.cacheService=t}getRepos(){return this.cacheService.getData("https://api.github.com/search/repositories?q=angular").pipe((0,m.U)(t=>t.items))}}c.\u0275fac=function(t){return new(t||c)(e.\u0275\u0275inject(u.Q))},c.\u0275prov=e.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"});var p=n(6895);function d(i,t){if(1&i&&(e.\u0275\u0275elementStart(0,"li",3)(1,"h2"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd()()),2&i){const s=t.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.full_name),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(s.description)}}class a{constructor(t){this.repoService=t}ngOnInit(){this.repos$=this.repoService.getRepos()}}a.\u0275fac=function(t){return new(t||a)(e.\u0275\u0275directiveInject(c))},a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["lib-github-repo"]],decls:6,vars:3,consts:[[1,"container"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(t,s){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"h1"),e.\u0275\u0275text(2,"Repos ( Caching Http Response Demo )"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ul",1),e.\u0275\u0275template(4,d,5,2,"li",2),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(5,1,s.repos$)))},dependencies:[p.sg,p.Ov],encapsulation:2});var l=n(9116);const f=[{path:"",component:a}];class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.ez,l.Bz.forChild(f)]})},915:(v,r,n)=>{n.d(r,{Q:()=>o});var m=n(9646),e=n(4707),u=n(249),c=n(576),d=n(8343),a=n(8505),l=n(4650),f=n(529);class o{constructor(t){this.http=t,this.responseCache=new Map}getData(t){const s=this.responseCache.get(t);return s?(0,m.of)(s):this.http.get(t).pipe(function p(i,t,s,h){s&&!(0,c.m)(s)&&(h=s);const g=(0,c.m)(s)?s:void 0;return C=>(0,u.O)(new e.t(i,t,h),g)(C)}(1),(0,d.x)(),(0,a.b)(h=>{this.responseCache.set(t,h)}))}clearCache(){this.responseCache.clear()}}o.\u0275fac=function(t){return new(t||o)(l.\u0275\u0275inject(f.eN))},o.\u0275prov=l.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"})}}]);