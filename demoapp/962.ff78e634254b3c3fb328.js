(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[962],{962:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ContentProjectionModule:()=>d});var o=e(116),s=e(699),i=e(619),r=e(462);let c=(()=>{class t{constructor(){this.title="Login",this.submitted=new i.vpe}onSubmit(t){this.submitted.emit(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["auth-form"]],inputs:{title:"title"},outputs:{submitted:"submitted"},decls:14,vars:2,consts:[[3,"ngSubmit"],["form","ngForm"],["type","email","name","email","ngModel",""],["email",""],["type","password","name","password","ngModel",""],["type","submit"]],template:function(t,n){if(1&t){const t=i.EpF();i.TgZ(0,"div"),i.TgZ(1,"form",0,1),i.NdJ("ngSubmit",function(){i.CHM(t);const e=i.MAs(2);return n.onSubmit(e.value)}),i.TgZ(3,"h3"),i._uU(4),i.qZA(),i.TgZ(5,"label"),i._uU(6," Email address "),i._UZ(7,"input",2,3),i.qZA(),i.TgZ(9,"label"),i._uU(10," Password "),i._UZ(11,"input",4),i.qZA(),i.TgZ(12,"button",5),i._uU(13),i.qZA(),i.qZA(),i.qZA()}2&t&&(i.xp6(4),i.Oqu(n.title),i.xp6(9),i.hij(" ",n.title," "))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On],styles:["form[_ngcontent-%COMP%]{flex:1 0;padding:0 40px}input[_ngcontent-%COMP%]{display:block;background:#fff;font-size:13px;padding:6px 30px 6px 10px;border-radius:1px;border:1px solid #eee}h3[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})();const u=["entry"];function p(t,n){}const m=[{path:"",component:(()=>{class t{constructor(t){this.resolver=t}createComponent(t){this.entry.clear();const n=this.resolver.resolveComponentFactory(c);this.component=this.entry.createComponent(n),this.component.instance.title="Create Account",this.sub=this.component.instance.submitted.subscribe(t=>{console.log(t)}),console.log(this.component);const e=this.entry.createComponent(n);console.log(e)}moveComponent(){this.entry.move(this.component.hostView,1)}destroyComponent(){this.component.destroy()}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(i._Vd))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-content-projection"]],viewQuery:function(t,n){if(1&t&&i.Gf(u,5,i.s_b),2&t){let t;i.iGM(t=i.CRH())&&(n.entry=t.first)}},decls:9,vars:0,consts:[[1,"app-card"],["entry",""],[3,"click"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.YNc(1,p,0,0,"ng-template",null,1,i.W1O),i.qZA(),i.TgZ(3,"button",2),i.NdJ("click",function(){return n.createComponent()}),i._uU(4,"Create Component Dynamically"),i.qZA(),i.TgZ(5,"button",2),i.NdJ("click",function(){return n.destroyComponent()}),i._uU(6,"Destroy Component"),i.qZA(),i.TgZ(7,"button",2),i.NdJ("click",function(){return n.moveComponent()}),i._uU(8,"Move Component (login on top )"),i.qZA())},styles:["auth-form[_ngcontent-%COMP%]:first-child   form[_ngcontent-%COMP%]{border-right:1px solid rgba(0,0,0,.1)}button[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.Bz.forChild(m)],s.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,r.u5]]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,l,a]]}),t})()}}]);