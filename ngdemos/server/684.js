"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=684,exports.ids=[684],exports.modules={684:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GithubRepoComponent:()=>GithubRepoComponent,GithubRepoModule:()=>GithubRepoModule,RepoService:()=>RepoService});var operators=__webpack_require__(51138),core=__webpack_require__(40305),cache_service=__webpack_require__(91234);class RepoService{constructor(cacheService){this.cacheService=cacheService}getRepos(){return this.cacheService.getData("https://api.github.com/search/repositories?q=angular").pipe((0,operators.UI)(data=>data.items))}}__name(RepoService,"RepoService"),RepoService.\u0275fac=__name(function(t){return new(t||RepoService)(core.\u0275\u0275inject(cache_service.Q))},"RepoService_Factory"),RepoService.\u0275prov=core.\u0275\u0275defineInjectable({token:RepoService,factory:RepoService.\u0275fac,providedIn:"root"});var common=__webpack_require__(89318);function GithubRepoComponent_li_4_Template(rf,ctx){if(1&rf&&(core.\u0275\u0275elementStart(0,"li",3)(1,"h2"),core.\u0275\u0275text(2),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(3,"p"),core.\u0275\u0275text(4),core.\u0275\u0275elementEnd()()),2&rf){const repo_r1=ctx.$implicit;core.\u0275\u0275advance(2),core.\u0275\u0275textInterpolate(repo_r1.full_name),core.\u0275\u0275advance(2),core.\u0275\u0275textInterpolate(repo_r1.description)}}__name(GithubRepoComponent_li_4_Template,"GithubRepoComponent_li_4_Template");class GithubRepoComponent{constructor(repoService){this.repoService=repoService}ngOnInit(){this.repos$=this.repoService.getRepos()}}__name(GithubRepoComponent,"GithubRepoComponent"),GithubRepoComponent.\u0275fac=__name(function(t){return new(t||GithubRepoComponent)(core.\u0275\u0275directiveInject(RepoService))},"GithubRepoComponent_Factory"),GithubRepoComponent.\u0275cmp=core.\u0275\u0275defineComponent({type:GithubRepoComponent,selectors:[["lib-github-repo"]],decls:6,vars:3,consts:[[1,"container"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:__name(function(rf,ctx){1&rf&&(core.\u0275\u0275elementStart(0,"div",0)(1,"h1"),core.\u0275\u0275text(2,"Repos ( Caching Http Response Demo )"),core.\u0275\u0275elementEnd(),core.\u0275\u0275elementStart(3,"ul",1),core.\u0275\u0275template(4,GithubRepoComponent_li_4_Template,5,2,"li",2),core.\u0275\u0275pipe(5,"async"),core.\u0275\u0275elementEnd()()),2&rf&&(core.\u0275\u0275advance(4),core.\u0275\u0275property("ngForOf",core.\u0275\u0275pipeBind1(5,1,ctx.repos$)))},"GithubRepoComponent_Template"),dependencies:[common.sg,common.Ov],encapsulation:2});var router=__webpack_require__(14195);const routes=[{path:"",component:GithubRepoComponent}];class GithubRepoModule{}__name(GithubRepoModule,"GithubRepoModule"),GithubRepoModule.\u0275fac=__name(function(t){return new(t||GithubRepoModule)},"GithubRepoModule_Factory"),GithubRepoModule.\u0275mod=core.\u0275\u0275defineNgModule({type:GithubRepoModule}),GithubRepoModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[common.ez,router.Bz.forChild(routes)]})},91234:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>CacheService});var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(25095),rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(51138),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40305),_angular_common_http__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(48664);class CacheService{constructor(http){this.http=http,this.responseCache=new Map}getData(url){const cachedResponse=this.responseCache.get(url);return cachedResponse?(0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(cachedResponse):this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__._g)(1),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.Gz)(),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.bw)(resp=>{this.responseCache.set(url,resp)}))}clearCache(){this.responseCache.clear()}}__name(CacheService,"CacheService"),CacheService.\u0275fac=__name(function(t){return new(t||CacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.\u0275\u0275inject(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.eN))},"CacheService_Factory"),CacheService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_2__.\u0275\u0275defineInjectable({token:CacheService,factory:CacheService.\u0275fac,providedIn:"root"})}};