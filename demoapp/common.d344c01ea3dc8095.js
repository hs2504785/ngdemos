"use strict";(self.webpackChunkdemoapp=self.webpackChunkdemoapp||[]).push([[592],{2588:(v,h,r)=>{r.d(h,{A:()=>l});var n=r(1223),p=r(9808);function c(i,_){if(1&i&&n._UZ(0,"i"),2&i){const o=n.oxw();n.Tol(o.iconClasses)}}const f=[[["","body",""]],[["","footer",""]]],a=["[body]","[footer]"];let l=(()=>{class i{constructor(){this.title="",this.subTitle="",this.iconClasses=""}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-card"]],inputs:{title:"title",subTitle:"subTitle",iconClasses:"iconClasses"},ngContentSelectors:a,decls:12,vars:3,consts:[[1,"card-container"],[1,"header"],[3,"class",4,"ngIf"],[1,"title"],[1,"body"],[1,"footer"]],template:function(o,u){1&o&&(n.F$t(f),n.TgZ(0,"div",0)(1,"div",1),n.YNc(2,c,1,2,"i",2),n.TgZ(3,"div",3)(4,"h5"),n._uU(5),n.qZA(),n.TgZ(6,"h6"),n._uU(7),n.qZA()()(),n.TgZ(8,"div",4),n.Hsn(9),n.qZA(),n.TgZ(10,"div",5),n.Hsn(11,1),n.qZA()()),2&o&&(n.xp6(2),n.Q6J("ngIf",u.iconClasses),n.xp6(3),n.Oqu(u.title),n.xp6(2),n.Oqu(u.subTitle))},dependencies:[p.O5],styles:[".card-container[_ngcontent-%COMP%]{display:grid;grid-gap:10px;border-radius:3px;margin-top:10px;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;transition:all .3s cubic-bezier(.25,.8,.25,1)}.card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;grid-gap:10px;align-items:center;padding:10px;background-color:#e84393;color:#fff}.card-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:grid;grid-gap:10px;grid-template-columns:auto 1fr;align-items:center}.card-container[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:10px}"],changeDetection:0}),i})()},6742:(v,h,r)=>{r.d(h,{j:()=>p});var n=r(1223);let p=(()=>{class c{transform(a,l=""){return a.filter(i=>l&&i.toLowerCase().includes(l.toLowerCase()))}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275pipe=n.Yjl({name:"appFilterTerm",type:c,pure:!0}),c})()},1884:(v,h,r)=>{r.d(h,{x:()=>f});var n=r(4671),p=r(4482),c=r(5403);function f(l,i=n.y){return l=null!=l?l:a,(0,p.e)((_,o)=>{let u,d=!0;_.subscribe((0,c.x)(o,e=>{const t=i(e);(d||!l(u,t))&&(d=!1,u=t,o.next(e))}))})}function a(l,i){return l===i}},1566:(v,h,r)=>{r.d(h,{P:()=>u,z:()=>o});var n=r(727);class p extends n.w0{constructor(e,t){super()}schedule(e,t=0){return this}}const c={setInterval(d,e,...t){const{delegate:s}=c;return null!=s&&s.setInterval?s.setInterval(d,e,...t):setInterval(d,e,...t)},clearInterval(d){const{delegate:e}=c;return((null==e?void 0:e.clearInterval)||clearInterval)(d)},delegate:void 0};var f=r(8737);const l={now:()=>(l.delegate||Date).now(),delegate:void 0};class i{constructor(e,t=i.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,s){return new this.schedulerActionCtor(this,e).schedule(s,t)}}i.now=l.now;const o=new class _ extends i{constructor(e,t=i.now){super(e,t),this.actions=[],this._active=!1}flush(e){const{actions:t}=this;if(this._active)return void t.push(e);let s;this._active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}(class a extends p{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var s;if(this.closed)return this;this.state=e;const g=this.id,C=this.scheduler;return null!=g&&(this.id=this.recycleAsyncId(C,g,t)),this.pending=!0,this.delay=t,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(C,this.id,t),this}requestAsyncId(e,t,s=0){return c.setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return t;null!=t&&c.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let g,s=!1;try{this.work(e)}catch(C){s=!0,g=C||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),g}unsubscribe(){if(!this.closed){const{id:e,scheduler:t}=this,{actions:s}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,f.P)(s,this),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}}),u=o}}]);