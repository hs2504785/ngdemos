(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[410],{9410:(t,i,e)=>{"use strict";e.r(i),e.d(i,{DirectivesModule:()=>S});var n=e(1116),c=e(8147),r=e(8619),s=e(3902);let a=(()=>{class t{onKeyDown(t){const i=t.target;let e=i.value.replace(/\s+/g,"");e.length>16&&(e=e.substr(0,16));let n=[];for(let c=0;c<e.length;c+=4)n.push(e.substr(c,4));i.value=n.join(" "),this.border="",/[^\d]+/.test(e)&&(this.border="1px solid red")}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=r.lG2({type:t,selectors:[["","credit-card",""]],hostVars:2,hostBindings:function(t,i){1&t&&r.NdJ("input",function(t){return i.onKeyDown(t)}),2&t&&r.Udp("border",i.border)},exportAs:["[credit-card]"]}),t})();function o(t,i){1&t&&r._UZ(0,"i",12)}function l(t,i){1&t&&r._UZ(0,"i",13)}function d(t,i){1&t&&r._UZ(0,"i",14)}function u(t,i){1&t&&r._UZ(0,"i",15)}function h(t,i){1&t&&r._UZ(0,"i",16)}function p(t,i){1&t&&r._UZ(0,"i",12)}function g(t,i){1&t&&r._UZ(0,"i",13)}function C(t,i){1&t&&r._UZ(0,"i",14)}function f(t,i){1&t&&r._UZ(0,"i",15)}function x(t,i){1&t&&r._UZ(0,"i",16)}let b=(()=>{class t{constructor(){this.creditCardNumber="",this.ccMasked="xxxx-xxxx-xxxx-xxxx",this.readonly=!1}get isReadonly(){return this.readonly}set isReadonly(t){this.creditCardNumber=t?this.formatReadonlyCCNum(this.creditCardNumber):this.creditCardNumber,this.readonly=t}formatReadonlyCCNum(t){const i=t.match(/[\S]{1,4}/g)||[];return i.map((t,e)=>e===i.length-1?t:"xxxx").join(" ")}updateNum(t){this.creditCardNumber=t}setMask(){console.log(this.creditCardNumber),this.ccMasked=this.formatReadonlyCCNum(this.creditCardNumber)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-credit-card"]],inputs:{creditCardNumber:"creditCardNumber",isReadonly:"isReadonly"},decls:20,vars:11,consts:[[1,"credit-card-input-container"],[1,"input-container"],[3,"ngSwitch"],["class","ti-credit-card green",4,"ngSwitchCase"],["class","ti-credit-card yellow",4,"ngSwitchCase"],["class","ti-credit-card pink",4,"ngSwitchCase"],["class","ti-credit-card purple",4,"ngSwitchCase"],["class","ti-credit-card red",4,"ngSwitchDefault"],["type","text","credit-card","",3,"input"],["card",""],[3,"click"],["type","text","credit-card","","readonly","",3,"value"],[1,"ti-credit-card","green"],[1,"ti-credit-card","yellow"],[1,"ti-credit-card","pink"],[1,"ti-credit-card","purple"],[1,"ti-credit-card","red"]],template:function(t,i){if(1&t){const t=r.EpF();r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.ynx(2,2),r.YNc(3,o,1,0,"i",3),r.YNc(4,l,1,0,"i",4),r.YNc(5,d,1,0,"i",5),r.YNc(6,u,1,0,"i",6),r.YNc(7,h,1,0,"i",7),r.BQk(),r.TgZ(8,"input",8,9),r.NdJ("input",function(){r.CHM(t);const e=r.MAs(9);return i.updateNum(e.value)}),r.qZA(),r.qZA(),r.TgZ(10,"button",10),r.NdJ("click",function(){return i.setMask()}),r._uU(11,"Set Mask"),r.qZA(),r.TgZ(12,"div",1),r.ynx(13,2),r.YNc(14,p,1,0,"i",3),r.YNc(15,g,1,0,"i",4),r.YNc(16,C,1,0,"i",5),r.YNc(17,f,1,0,"i",6),r.YNc(18,x,1,0,"i",7),r.BQk(),r._UZ(19,"input",11),r.qZA(),r.qZA()}2&t&&(r.xp6(2),r.Q6J("ngSwitch",i.creditCardNumber[0]),r.xp6(1),r.Q6J("ngSwitchCase","3"),r.xp6(1),r.Q6J("ngSwitchCase","4"),r.xp6(1),r.Q6J("ngSwitchCase","5"),r.xp6(1),r.Q6J("ngSwitchCase","6"),r.xp6(7),r.Q6J("ngSwitch",i.creditCardNumber[0]),r.xp6(1),r.Q6J("ngSwitchCase","3"),r.xp6(1),r.Q6J("ngSwitchCase","4"),r.xp6(1),r.Q6J("ngSwitchCase","5"),r.xp6(1),r.Q6J("ngSwitchCase","6"),r.xp6(2),r.Q6J("value",i.ccMasked))},directives:[n.RF,n.n9,n.ED,a],styles:[".credit-card-input-container[_ngcontent-%COMP%]{display:grid;grid-gap:10px}.credit-card-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]{position:relative}.credit-card-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:10px 10px 10px 2.5em;margin-top:0}.credit-card-input-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;top:50%;left:1em;transform:translate(-50%,-50%)}button[_ngcontent-%COMP%]{margin:10px 0 5px}.red[_ngcontent-%COMP%]{color:#d63031}.green[_ngcontent-%COMP%]{color:#55efc4}.yellow[_ngcontent-%COMP%]{color:#ffeaa7}.pink[_ngcontent-%COMP%]{color:#e84393}.purple[_ngcontent-%COMP%]{color:#6c5ce7}"],changeDetection:0}),t})();var m=e(3559),_=e(6673),k=e(8870);const w={leading:!0,trailing:!1};class y{constructor(t,i,e,n){this.duration=t,this.scheduler=i,this.leading=e,this.trailing=n}call(t,i){return i.subscribe(new Z(t,this.duration,this.scheduler,this.leading,this.trailing))}}class Z extends _.L{constructor(t,i,e,n,c){super(t),this.duration=i,this.scheduler=e,this.leading=n,this.trailing=c,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(N,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function N(t){const{subscriber:i}=t;i.clearThrottle()}let M=(()=>{class t{constructor(){this.debounceClick=new r.vpe,this.clicks=new m.xQ}ngOnInit(){this.subscription=this.clicks.pipe(function(t,i=k.P,e=w){return n=>n.lift(new y(t,i,e.leading,e.trailing))}(2500)).subscribe(t=>this.debounceClick.emit(t))}ngOnDestroy(){this.subscription.unsubscribe()}clickEvent(t){t.preventDefault(),t.stopPropagation(),this.clicks.next()}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=r.lG2({type:t,selectors:[["","appDebounceClick",""]],hostBindings:function(t,i){1&t&&r.NdJ("click",function(t){return i.clickEvent(t)})},outputs:{debounceClick:"debounceClick"}}),t})();const v=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}log(){console.log("Making users api call..."),fetch("https://jsonplaceholder.typicode.com/users").then(t=>{console.log(t)})}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-directives"]],decls:7,vars:5,consts:[[1,"dashboard"],[3,"iconClasses","title"],["body",""],[1,"mt-3",3,"iconClasses","title","subTitle"],["appDebounceClick","",3,"debounceClick"]],template:function(t,i){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"app-card",1),r._UZ(2,"app-credit-card",2),r.qZA(),r.TgZ(3,"app-card",3),r.TgZ(4,"div",2),r.TgZ(5,"button",4),r.NdJ("debounceClick",function(){return i.log()}),r._uU(6,"Log"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("iconClasses","ti-package")("title","Credit Card"),r.xp6(2),r.Q6J("iconClasses","fas fa-info-circle")("title","Debounce Click")("subTitle","Directives"))},directives:[s.A,b,M],styles:[".dashboard[_ngcontent-%COMP%]{margin:15px}app-card[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),t})();var O=e(7334);let S=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,O.m,J]]}),t})()}}]);