"use strict";(self.webpackChunkdemoapp=self.webpackChunkdemoapp||[]).push([[41],{8041:(it,m,c)=>{c.r(m),c.d(m,{ComponentsModule:()=>ot});var l=c(9808),d=c(4426),p=(()=>{return(n=p||(p={})).Circular="Circular",n.Loading="Loading",p;var n})(),t=c(1223),b=c(2588);function f(n,a){if(1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.loadingText)}}function T(n,a){1&n&&t._UZ(0,"div",6)}let P=(()=>{class n{constructor(e){this.cd=e,this.isLoading=!1,this.loaderType=p.Circular,this.LoaderType=p,this.timer=null,this.loading="Loading",this.loadingPeriods=".\0\0"}get loadingText(){return`${this.loading}${this.loadingPeriods}`}ngOnInit(){this.loaderType===p.Loading&&this.updateLoaderPeriods()}updateLoaderPeriods(){let e=0;this.timer=setInterval(()=>{switch(e%3){case 0:this.loadingPeriods="..\0",e++;break;case 1:this.loadingPeriods="...",e++;break;case 2:this.loadingPeriods=".\0\0",e=0}this.cd.detectChanges()},500)}ngOnDestroy(){clearInterval(this.timer)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loader"]],inputs:{isLoading:"isLoading",loaderType:"loaderType"},decls:6,vars:5,consts:[[1,"loader-overlay"],[1,"loader-container"],[1,"loader"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","circular",4,"ngSwitchCase"],[1,"circular"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.ynx(3,3),t.YNc(4,f,2,1,"h1",4),t.YNc(5,T,1,0,"div",5),t.BQk(),t.qZA()()()),2&e&&(t.Udp("display",o.isLoading?"block":"none"),t.xp6(3),t.Q6J("ngSwitch",o.loaderType),t.xp6(1),t.Q6J("ngSwitchCase",o.LoaderType.Loading),t.xp6(1),t.Q6J("ngSwitchCase",o.LoaderType.Circular))},dependencies:[l.RF,l.n9],styles:[".loader-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#fff9;z-index:2;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.loader-overlay[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.loader-overlay[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{position:absolute;top:35%}.loader-overlay[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:150px}.loader-overlay[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]   .circular[_ngcontent-%COMP%]{border:10px solid #eee;border-radius:50%;border-top:10px solid #3498db;width:100px;height:100px;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),n})();var x=c(2313);let O=(()=>{class n{constructor(e){this.titleService=e,this.baseHref="https://hs2504785.github.io/ngdemos/ngapp",this.hashTags=["Hemant","JavaScript","TypeScript","Angular","Angular Challenge","UI Engineer"]}get twitterUrl(){return`${this.getBaseWithHashTagsAndRoute()}${encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`)}`}getBaseWithHashTagsAndRoute(){const e=encodeURI(this.baseHref),o=this.hashTags.join(",");return`https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(o)}&related=hemantajax&url=${e}&text=`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.Dx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-twitter-post"]],inputs:{baseHref:"baseHref",hashTags:"hashTags"},decls:2,vars:1,consts:[["target","blank",3,"href"],[1,"ti-twitter"]],template:function(e,o){1&e&&(t.TgZ(0,"a",0),t._UZ(1,"i",1),t.qZA()),2&e&&t.Q6J("href",o.twitterUrl,t.LSH)},styles:["i[_ngcontent-%COMP%]{font-size:40px;color:#00acee}"]}),n})(),M=(()=>{class n{constructor(e){this.router=e}get linkedinMessage(){return`https://www.linkedin.com/shareArticle?mini=true&url=https://hs2504785.github.io/ngdemos/ngapp&title=${this.router.url}`}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-linkedin-post"]],decls:2,vars:1,consts:[["target","blank",3,"href"],[1,"ti-linkedin"]],template:function(e,o){1&e&&(t.TgZ(0,"a",0),t._UZ(1,"i",1),t.qZA()),2&e&&t.Q6J("href",o.linkedinMessage,t.LSH)},styles:["i[_ngcontent-%COMP%]{font-size:40px;color:#0e76a8}"]}),n})();const Z=["*"];let v=(()=>{class n{constructor(){this.title="",this.isHidden=!0}close(){this.isHidden=!0}open(){this.isHidden=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-modal"]],inputs:{title:"title"},ngContentSelectors:Z,decls:8,vars:5,consts:[[1,"modal-container"],[1,"modal-header"],[1,"ti-close","close",3,"click"],[1,"modal-body"],[1,"modal-overlay",3,"click"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3),t.qZA(),t.TgZ(4,"i",2),t.NdJ("click",function(){return o.close()}),t.qZA()(),t.TgZ(5,"div",3),t.Hsn(6),t.qZA()(),t.TgZ(7,"div",4),t.NdJ("click",function(){return o.close()}),t.qZA()),2&e&&(t.ekj("is-hidden",o.isHidden),t.xp6(3),t.Oqu(o.title),t.xp6(4),t.ekj("is-hidden",o.isHidden))},styles:[".modal-container[_ngcontent-%COMP%]{z-index:3;display:grid;position:fixed;min-width:250px;max-height:100vh;background-color:#fff;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;top:5%;left:50%;transform:translate(-50%,5%);padding:20px;grid-gap:10px;transition:display .3s}.modal-container[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;align-items:center}.modal-container.is-hidden[_ngcontent-%COMP%]{display:none}.modal-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background-color:#0009;opacity:1;z-index:2;transition:opacity .3s}.modal-overlay.is-hidden[_ngcontent-%COMP%]{z-index:-1;opacity:0}.close[_ngcontent-%COMP%]{cursor:pointer}"]}),n})(),y=(()=>{class n{constructor(){this.quote="",this.author="",this.occupation=""}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-quote"]],inputs:{quote:"quote",author:"author",occupation:"occupation"},decls:9,vars:3,consts:[[1,"fas","fa-quote-left"],[1,"quote"],[1,"author"],[1,"occupation"]],template:function(e,o){1&e&&(t.TgZ(0,"blockquote"),t._UZ(1,"i",0),t.TgZ(2,"p",1),t._uU(3),t.qZA(),t.TgZ(4,"footer")(5,"p",2),t._uU(6),t.qZA(),t.TgZ(7,"p",3),t._uU(8),t.qZA()()()),2&e&&(t.xp6(3),t.Oqu(o.quote),t.xp6(3),t.Oqu(o.author),t.xp6(2),t.Oqu(o.occupation))},styles:["blockquote[_ngcontent-%COMP%]{padding:20px;display:grid;color:#fff;background-color:#2d3436;grid-gap:15px;grid-template-columns:auto 1fr;border-left:10px solid #0099ff}blockquote[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}blockquote[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]{margin-right:25%}blockquote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{grid-column:1/3;justify-self:end;text-align:right}blockquote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase}blockquote[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .occupation[_ngcontent-%COMP%]{font-style:italic}"]}),n})(),k=(()=>{class n{constructor(){this.isOn=!1,this.toggleChange=new t.vpe}toggle(){this.isOn=!this.isOn,this.toggleChange.emit(this.isOn)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-toggle"]],inputs:{isOn:"isOn"},outputs:{toggleChange:"toggleChange"},decls:2,vars:2,consts:[[1,"toggle-container",3,"click"],[1,"toggle-value"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.toggle()}),t._UZ(1,"div",1),t.qZA()),2&e&&(t.xp6(1),t.ekj("is-off",!o.isOn))},styles:[".toggle-container[_ngcontent-%COMP%]{position:relative;width:50px;border:1px solid black;padding:3px;border-radius:15px;height:20px;cursor:pointer}.toggle-container[_ngcontent-%COMP%]   .toggle-value[_ngcontent-%COMP%]{position:absolute;width:15px;height:15px;background-color:green;border-radius:50%;top:50%;bottom:50%;transform:translateY(-50%);right:5%;transition:all .3s}.toggle-container[_ngcontent-%COMP%]   .toggle-value.is-off[_ngcontent-%COMP%]{right:65%;background-color:red}"]}),n})();var S=c(7579),w=c(1566),J=c(4482),U=c(5403),q=c(1884);let h=(()=>{class n{constructor(){this.searchTerm="",this.placeholder="Search",this.searchUpdate=new t.vpe,this.searchUpdate$=new S.x,this.searchUpdate$.pipe(function A(n,a=w.z){return(0,J.e)((e,o)=>{let i=null,s=null,r=null;const g=()=>{if(i){i.unsubscribe(),i=null;const u=s;s=null,o.next(u)}};function at(){const u=r+n,C=a.now();if(C<u)return i=this.schedule(void 0,u-C),void o.add(i);g()}e.subscribe((0,U.x)(o,u=>{s=u,r=a.now(),i||(i=a.schedule(at,n),o.add(i))},()=>{g(),o.complete()},void 0,()=>{s=i=null}))})}(250),(0,q.x)()).subscribe(e=>{this.searchUpdate.emit(e)})}updateSearchTerm(e){this.searchUpdate$.next(e.target.value)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-debounce-search"]],inputs:{searchTerm:"searchTerm",placeholder:"placeholder"},outputs:{searchUpdate:"searchUpdate"},decls:1,vars:2,consts:[["type","search",3,"placeholder","value","input"]],template:function(e,o){1&e&&(t.TgZ(0,"input",0),t.NdJ("input",function(s){return o.updateSearchTerm(s)}),t.qZA()),2&e&&t.Q6J("placeholder",o.placeholder)("value",o.searchTerm)}}),n})();var D=c(6742);function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.selectSearchTerm(s))}),t._uU(1),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e)}}function Q(n,a){if(1&n&&(t.TgZ(0,"ul")(1,"div",2),t.YNc(2,N,2,1,"li",3),t.ALo(3,"appFilterTerm"),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.xi3(3,1,e.items,e.searchTerm))}}let F=(()=>{class n{constructor(){this.searchTerm="",this.items=[],this.hasBeenSelected=!1}updateSearchTerm(e){this.searchTerm=e,this.hasBeenSelected=!1}selectSearchTerm(e){this.searchTerm=e,this.hasBeenSelected=!0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-list"]],inputs:{items:"items"},decls:2,vars:2,consts:[[3,"searchTerm","searchUpdate"],[4,"ngIf"],[1,"item-container"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"app-debounce-search",0),t.NdJ("searchUpdate",function(s){return o.updateSearchTerm(s)}),t.qZA(),t.YNc(1,Q,4,4,"ul",1)),2&e&&(t.Q6J("searchTerm",o.searchTerm),t.xp6(1),t.Q6J("ngIf",o.searchTerm&&!o.hasBeenSelected))},dependencies:[l.sg,l.O5,h,D.j],styles:["ul[_ngcontent-%COMP%]{position:relative}ul[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;position:absolute;width:100%;background-color:#fff}ul[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;transition:all .3s;cursor:pointer;padding:3px}ul[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#74b9ff;color:#fff}"]}),n})(),L=(()=>{class n{constructor(){this.counter=0,this.min=0,this.max=Number.MAX_SAFE_INTEGER}minusOne(){this.min<this.counter&&this.counter--}addOne(){this.max>this.counter&&this.counter++}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-counter"]],inputs:{counter:"counter",min:"min",max:"max"},decls:6,vars:3,consts:[[1,"counter-container"],[1,"decrement",3,"click"],[1,"ti-minus"],["type","number",3,"value","min","max","input"],[1,"increment",3,"click"],[1,"ti-plus"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.minusOne()}),t._UZ(2,"i",2),t.qZA(),t.TgZ(3,"input",3),t.NdJ("input",function(s){return o.counter=s.target.value}),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){return o.addOne()}),t._UZ(5,"i",5),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("value",o.counter)("min",o.min)("max",o.max))},styles:[".counter-container[_ngcontent-%COMP%]{display:flex}.counter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .counter-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.counter-container[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{padding:5px;-moz-appearance:textfield}.counter-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 8px;color:#fff}.counter-container[_ngcontent-%COMP%]   button.increment[_ngcontent-%COMP%]{background-color:#55efc4;border:1px solid #55efc4}.counter-container[_ngcontent-%COMP%]   button.decrement[_ngcontent-%COMP%]{background-color:#d63031;border:1px solid #d63031}"]}),n})();function I(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"th",3),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.headerSelection(s.key,s.value))}),t._uU(1),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(1),t.hij(" ",e.key,"")}}function $(n,a){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Oqu(e.value)}}function H(n,a){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,$,2,1,"td",2),t.ALo(2,"keyvalue"),t.qZA()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,e))}}function B(n,a){if(1&n&&(t.TgZ(0,"table")(1,"thead")(2,"tr"),t.YNc(3,I,2,1,"th",1),t.ALo(4,"keyvalue"),t.qZA()(),t.TgZ(5,"tbody"),t.YNc(6,H,3,3,"tr",2),t.qZA()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,2,e.tableData[0])),t.xp6(3),t.Q6J("ngForOf",e.tableData)}}let _=(()=>{class n{constructor(){this.tableData=[{first:"Dylan 1",last:"Israel",dob:"10/25/87"},{first:"Dylan 2",last:"Israel",dob:"10/25/87"},{first:"Dylan 3",last:"Israel",dob:"10/25/87"},{first:"Dylan 4",last:"Israel",dob:"10/25/87"}],this.headerSelected=new t.vpe}headerSelection(e,o){this.headerSelected.emit({value:o,key:e})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-simple-table"]],inputs:{tableData:"tableData"},outputs:{headerSelected:"headerSelected"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(e,o){1&e&&t.YNc(0,B,7,4,"table",0),2&e&&t.Q6J("ngIf",o.tableData&&o.tableData.length)},dependencies:[l.sg,l.O5,l.Nd],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-transform:uppercase;padding:5px 10px;text-align:left;border-bottom:1px solid rgba(0,0,0,.12)}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#eee}table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid rgba(0,0,0,.12);padding-left:10px}"]}),n})();function z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"li")(1,"button",4),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.setPage(s))}),t._uU(2),t.qZA()()}if(2&n){const e=a.$implicit,o=t.oxw();t.xp6(1),t.ekj("current-page",o.currentPage===e),t.xp6(1),t.hij(" ",e," ")}}let j=(()=>{class n{constructor(){this.totalItems=1,this.pageSize=25,this.currentPage=1,this.step=2,this.pageChange=new t.vpe}get totalPages(){return Math.ceil((this.totalItems||1)/(this.pageSize||1))}get isFirstPage(){return 1===this.currentPage}isLastPage(){return this.currentPage===this.totalPages}get isPreviousDisabled(){return this.currentPage-this.step<1}get isNextDisabled(){return this.currentPage+this.step>this.totalPages}get pages(){const e=[];return this.currentPage>1&&e.push(this.currentPage-1),e.push(this.currentPage),this.currentPage<this.totalPages&&e.push(this.currentPage+1),this.currentPage+1<this.totalPages&&e.push(this.currentPage+2),this.currentPage+1<this.totalPages&&1===this.currentPage&&e.push(this.currentPage+3),e}setPage(e){this.currentPage=e,this.pageChange.emit(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-paging"]],inputs:{totalItems:"totalItems",pageSize:"pageSize",currentPage:"currentPage",step:"step"},outputs:{pageChange:"pageChange"},decls:8,vars:3,consts:[[3,"disabled","click"],[1,"ti-arrow-left"],[4,"ngFor","ngForOf"],[1,"ti-arrow-right"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"ul")(1,"li")(2,"button",0),t.NdJ("click",function(){return o.setPage(o.currentPage-o.step)}),t._UZ(3,"i",1),t.qZA()(),t.YNc(4,z,3,3,"li",2),t.TgZ(5,"li")(6,"button",0),t.NdJ("click",function(){return o.setPage(o.currentPage+o.step)}),t._UZ(7,"i",3),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("disabled",o.isPreviousDisabled),t.xp6(2),t.Q6J("ngForOf",o.pages),t.xp6(2),t.Q6J("disabled",o.isNextDisabled))},dependencies:[l.sg],styles:["ul[_ngcontent-%COMP%]{display:flex;padding:5px;justify-content:center}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;list-style:none;margin:3px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:all .3s cubic-bezier(.25,.8,.25,1)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.current-page[_ngcontent-%COMP%]{background-color:#74b9ff;color:#fff;transition:all .3s}"]}),n})(),E=(()=>{class n{constructor(){this.value=0,this.max=100}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-progress-bar"]],inputs:{value:"value",max:"max"},decls:4,vars:3,consts:[[1,"progress-container"],[3,"value","max"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"small"),t._uU(2),t.qZA(),t._UZ(3,"progress",1),t.qZA()),2&e&&(t.xp6(2),t.Oqu(o.value),t.xp6(1),t.Q6J("value",o.value)("max",o.max))},styles:[".progress-container[_ngcontent-%COMP%]{display:grid;align-items:center;position:relative}.progress-container[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{position:absolute;left:50%;right:50%;color:#fff}.progress-container[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%]{width:100%;height:15px;background-color:#eee;transition:all 1s}.progress-container[_ngcontent-%COMP%]   progress[value][_ngcontent-%COMP%]::-webkit-progress-value{background-color:#74b9ff;-webkit-transition:all 2s;transition:all 2s}.progress-container[_ngcontent-%COMP%]   progress[value][_ngcontent-%COMP%]::-webkit-progress-bar, .progress-container[_ngcontent-%COMP%]   progress[value][_ngcontent-%COMP%]::-webkit-progress-value{border-radius:20px}"]}),n})();function X(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){const i=t.CHM(e),s=i.$implicit,r=i.index,g=t.oxw();return t.KtG(g.selectTab(s,r))}),t.TgZ(1,"h6"),t._uU(2),t.qZA()()}if(2&n){const e=a.$implicit;t.ekj("active",e.active),t.xp6(2),t.Oqu(e.title)}}const Y=["*"];let G=(()=>{class n{constructor(){this.tabs=[],this.selectedTabIndex=new t.vpe}selectTab(e,o){this.tabs.forEach(i=>{i.active=e===i}),this.selectedTabIndex.emit(o)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tabs"]],inputs:{tabs:"tabs"},outputs:{selectedTabIndex:"selectedTabIndex"},ngContentSelectors:Y,decls:3,vars:1,consts:[[1,"tabs"],["class","tab",3,"active","click",4,"ngFor","ngForOf"],[1,"tab",3,"click"]],template:function(e,o){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,X,3,3,"div",1),t.qZA(),t.Hsn(2)),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.tabs))},dependencies:[l.sg],styles:[".tabs[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{cursor:pointer;margin-right:10px;padding:2px;text-align:center;border-bottom:2px solid transparent}.tabs[_ngcontent-%COMP%]   .tab.active[_ngcontent-%COMP%]{transition:all .3s;border-bottom:2px solid #74b9ff}"]}),n})(),R=(()=>{class n{constructor(){this.tableData=[{first:"Dylan 1",dob:"10/25/88",age:32,living:!0},{first:"Dylan 2",dob:"10/25/90",age:31,living:!0},{first:"Dylan 3",dob:"10/25/95",age:20,living:!1},{first:"Dylan 4",dob:"10/25/87",age:35,living:!0}],this.sortDirection=!0}sort(e){const{key:o,value:i}=e;switch(this.sortDirection=!this.sortDirection,!0){case"boolean"==typeof i:this.sortBoolean(o);break;case"number"==typeof i:this.sortNumber(o);break;case this.isDate(i):this.sortDate(o);break;case"string"==typeof i:this.sortString(o)}}isDate(e){const o=Date.parse(e);return isNaN(e)&&!isNaN(o)}sortDate(e){this.tableData.sort((o,i)=>this.sortDirection?new Date(o[e]).getTime()-new Date(i[e]).getTime():new Date(i[e]).getTime()-new Date(o[e]).getTime())}sortBoolean(e){this.tableData.sort((o,i)=>this.sortDirection?Number(o[e])-Number(i[e]):Number(i[e])-Number(o[e]))}sortNumber(e){this.tableData.sort((o,i)=>this.sortDirection?Number(o[e])-Number(i[e]):Number(i[e])-Number(o[e]))}sortString(e){this.tableData.sort((o,i)=>{const s=o[e].toUpperCase(),r=i[e].toUpperCase();return this.sortDirection?s>r?-1:r>s?1:0:r>s?-1:s>r?1:0})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sort-table"]],inputs:{tableData:"tableData"},decls:1,vars:1,consts:[[3,"tableData","headerSelected"]],template:function(e,o){1&e&&(t.TgZ(0,"app-simple-table",0),t.NdJ("headerSelected",function(s){return o.sort(s)}),t.qZA()),2&e&&t.Q6J("tableData",o.tableData)},dependencies:[_]}),n})();function V(n,a){1&n&&t._UZ(0,"app-paging",18),2&n&&t.Q6J("totalItems",200)}function K(n,a){1&n&&t._UZ(0,"app-counter")}const W=function(){return["United States","Mexico","United Arab Emirates"]},tt=[{path:"",component:(()=>{class n{constructor(){this.loaderType=p.Loading,this.toggleValue=!1,this.progressValue=25,this.tabs=[{title:"Tab 1",active:!0},{title:"Tab 2",active:!1}],this.selectedTab=0}ngOnInit(){}onToggle(e){console.log("Emmitted value ",e)}debounceExampleMethod(e){console.log("Component Documentation",e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-components"]],decls:40,vars:56,consts:[[1,"dashboard"],[3,"iconClasses","title","subTitle"],["body",""],["body","",3,"tabs","selectedTabIndex"],[3,"totalItems",4,"ngIf"],[4,"ngIf"],["body","",3,"value"],["footer","",3,"click"],["body","",3,"totalItems"],["body","",3,"items"],["body","",3,"searchUpdate"],["body","",3,"isLoading","loaderType"],[3,"title"],["modal",""],["footer",""],[3,"click"],["body","",3,"quote","author","occupation"],["body","",3,"isOn","toggleChange"],[3,"totalItems"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"app-card",1),t._UZ(2,"app-sort-table",2),t.qZA(),t.TgZ(3,"app-card",1)(4,"app-tabs",3),t.NdJ("selectedTabIndex",function(r){return o.selectedTab=r}),t.YNc(5,V,1,1,"app-paging",4),t.YNc(6,K,1,0,"app-counter",5),t.qZA()(),t.TgZ(7,"app-card",1),t._UZ(8,"app-progress-bar",6),t.TgZ(9,"button",7),t.NdJ("click",function(){return o.progressValue=75}),t._uU(10,"Update"),t.qZA()(),t.TgZ(11,"app-card",1),t._UZ(12,"app-paging",8),t.qZA(),t.TgZ(13,"app-card",1),t._UZ(14,"app-simple-table",2),t.qZA(),t.TgZ(15,"app-card",1),t._UZ(16,"app-counter",2),t.qZA(),t.TgZ(17,"app-card",1),t._UZ(18,"app-search-list",9),t.qZA(),t.TgZ(19,"app-card",1)(20,"app-debounce-search",10),t.NdJ("searchUpdate",function(r){return o.debounceExampleMethod(r)}),t.qZA()(),t.TgZ(21,"app-card",1),t._UZ(22,"app-loader",11),t.qZA(),t.TgZ(23,"app-card",1),t._UZ(24,"app-twitter-post",2),t.qZA(),t.TgZ(25,"app-card",1),t._UZ(26,"app-linkedin-post",2),t.qZA(),t.TgZ(27,"app-card",1)(28,"div",2)(29,"app-modal",12,13)(31,"p"),t._uU(32,"Some Content"),t.qZA()()(),t.TgZ(33,"div",14)(34,"button",15),t.NdJ("click",function(){t.CHM(i);const r=t.MAs(30);return t.KtG(r.open())}),t._uU(35,"Call Modal"),t.qZA()()(),t.TgZ(36,"app-card",1),t._UZ(37,"app-quote",16),t.qZA(),t.TgZ(38,"app-card",1)(39,"app-toggle",17),t.NdJ("toggleChange",function(r){return o.onToggle(r)}),t.qZA()()()}2&e&&(t.xp6(1),t.Q6J("iconClasses","ti-star")("title","Sort Table")("subTitle","Components"),t.xp6(2),t.Q6J("iconClasses","ti-star")("title","Tabs")("subTitle","Components"),t.xp6(1),t.Q6J("tabs",o.tabs),t.xp6(1),t.Q6J("ngIf",0===o.selectedTab),t.xp6(1),t.Q6J("ngIf",1===o.selectedTab),t.xp6(1),t.Q6J("iconClasses","ti-star")("title","Progress Bar")("subTitle","Components"),t.xp6(1),t.Q6J("value",o.progressValue),t.xp6(3),t.Q6J("iconClasses","ti-bag")("title","Paging")("subTitle","Components"),t.xp6(1),t.Q6J("totalItems",200),t.xp6(1),t.Q6J("iconClasses","ti-list")("title","Simple Table")("subTitle","Components"),t.xp6(2),t.Q6J("iconClasses","ti-dashboard")("title","Counter")("subTitle","Components"),t.xp6(2),t.Q6J("iconClasses","ti-bag")("title","Search List")("subTitle","Components"),t.xp6(1),t.Q6J("items",t.DdM(55,W)),t.xp6(1),t.Q6J("iconClasses","ti-bag")("title","Debounce Search")("subTitle","Components"),t.xp6(2),t.Q6J("iconClasses","ti-bag")("title","Loader")("subTitle","Components"),t.xp6(1),t.Q6J("isLoading",!1)("loaderType",o.loaderType),t.xp6(1),t.Q6J("iconClasses","ti-palette")("title","Twitter Post")("subTitle","Components"),t.xp6(2),t.Q6J("iconClasses","ti-linkedin")("title","LinkedIn Post")("subTitle","Components"),t.xp6(2),t.Q6J("iconClasses","ti-bag")("title","Modal")("subTitle","Components"),t.xp6(2),t.Q6J("title","Modal Example"),t.xp6(7),t.Q6J("iconClasses","ti-list")("title","Quote")("subTitle","Components"),t.xp6(1),t.Q6J("quote","Get Good. Get Great. Get Better.")("author","Hemant")("occupation","Software Engineer, UI Star"),t.xp6(1),t.Q6J("iconClasses","ti-bag")("title","Toggle")("subTitle","Components"),t.xp6(1),t.Q6J("isOn",o.toggleValue))},dependencies:[l.O5,b.A,P,O,M,v,y,k,h,F,L,_,j,E,G,R],styles:[".dashboard[_ngcontent-%COMP%]{margin:15px}app-card[_ngcontent-%COMP%]{display:block;margin-top:1.5rem}"],changeDetection:0}),n})()}];let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(tt),d.Bz]}),n})();var nt=c(6571);let ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,nt.m,et]}),n})()}}]);