"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[9776],{8325:(d,s,t)=>{t.d(s,{a:()=>c});var l=t(5879),n=t(9862);let c=(()=>{class o{constructor(a){this.http=a,this.API_URL="https://hksocket.herokuapp.com/api"}sendMessage(a){return this.http.post(`${this.API_URL}/messages`,a)}}return o.\u0275fac=function(a){return new(a||o)(l.\u0275\u0275inject(n.eN))},o.\u0275prov=l.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},9776:(d,s,t)=>{t.r(s),t.d(s,{ChatComponent:()=>o,ChatModule:()=>a,ChatService:()=>l.a});var l=t(8325),n=t(5879),c=t(4190);let o=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(h){return new(h||e)},e.\u0275cmp=n.\u0275\u0275defineComponent({type:e,selectors:[["lib-chat"]],decls:6,vars:0,consts:[[1,"m-2","d-flex","justify-content-center"],["routerLink","basic-chat","routerLinkActive","active",1,"btn","btn-outline-success","mr-2"],["routerLink","chit-chat","routerLinkActive","active",1,"btn","btn-outline-warning"]],template:function(h,u){1&h&&(n.\u0275\u0275elementStart(0,"header",0)(1,"a",1),n.\u0275\u0275text(2,"Chat"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(3,"a",2),n.\u0275\u0275text(4,"Chitchat"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275element(5,"router-outlet"))},dependencies:[c.lC,c.rH,c.Od],encapsulation:2}),e})();const i=[{path:"",component:o,children:[{path:"basic-chat",loadChildren:()=>Promise.all([t.e(6223),t.e(2130)]).then(t.bind(t,2130)).then(e=>e.BasicChatModule)},{path:"chit-chat",loadChildren:()=>t.e(1379).then(t.bind(t,1379)).then(e=>e.ChitChatModule)},{path:"",redirectTo:"basic-chat",pathMatch:"full"}]}];let a=(()=>{class e{}return e.\u0275fac=function(h){return new(h||e)},e.\u0275mod=n.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=n.\u0275\u0275defineInjector({imports:[c.Bz.forChild(i)]}),e})()}}]);