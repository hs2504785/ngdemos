(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[927],{7927:(e,t,r)=>{"use strict";r.r(t),r.d(t,{LoginModule:()=>l,ROUTES:()=>d});var n=r(1116),o=r(8665),i=r(5135),s=r(4762),u=r(5366),c=r(5790),a=r(4106);function g(e,t){if(1&e&&(u.TgZ(0,"div",4),u._uU(1),u.qZA()),2&e){const e=u.oxw();u.xp6(1),u.hij(" ",e.error," ")}}const d=[{path:"",component:(()=>{class e{constructor(e,t){this.authService=e,this.router=t}loginUser(e){return(0,s.mG)(this,void 0,void 0,function*(){const{email:t,password:r}=e.value;try{yield this.authService.loginUser(t,r),this.router.navigate(["/"])}catch(n){this.error=n.message}})}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(c.e),u.Y36(o.F0))},e.\u0275cmp=u.Xpm({type:e,selectors:[["login"]],decls:9,vars:1,consts:[[3,"submitted"],["routerLink","/auth/register"],["type","submit"],["class","error",4,"ngIf"],[1,"error"]],template:function(e,t){1&e&&(u.TgZ(0,"div"),u.TgZ(1,"auth-form",0),u.NdJ("submitted",function(e){return t.loginUser(e)}),u.TgZ(2,"h1"),u._uU(3,"Login"),u.qZA(),u.TgZ(4,"a",1),u._uU(5,"Not registered?"),u.qZA(),u.TgZ(6,"button",2),u._uU(7,"Login"),u.qZA(),u.YNc(8,g,2,1,"div",3),u.qZA(),u.qZA()),2&e&&(u.xp6(8),u.Q6J("ngIf",t.error))},directives:[a.c,o.yS,n.O5],encapsulation:2}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[n.ez,o.Bz.forChild(d),i.m]]}),e})()}}]);