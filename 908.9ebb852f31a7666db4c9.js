(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[908],{4908:(t,e,o)=>{"use strict";o.r(e),o.d(e,{CreditCardModule:()=>a});var n=o(1116),r=o(8147),s=o(8619);let i=(()=>{class t{onKeyDown(t){const e=t.target;let o=e.value.replace(/\s+/g,"");o.length>16&&(o=o.substr(0,16));let n=[];for(let r=0;r<o.length;r+=4)n.push(o.substr(r,4));e.value=n.join(" "),this.border="",/[^\d]+/.test(o)&&(this.border="1px solid red")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=s.lG2({type:t,selectors:[["","credit-card",""]],hostVars:2,hostBindings:function(t,e){1&t&&s.NdJ("input",function(t){return e.onKeyDown(t)}),2&t&&s.Udp("border",e.border)}}),t})(),l=(()=>{class t{constructor(t){this.element=t,this.tooltipElement=document.createElement("div"),this.visible=!1}set tooltip(t){this.tooltipElement.textContent=t}hide(){this.tooltipElement.classList.remove("tooltip--active")}show(){this.tooltipElement.classList.add("tooltip--active")}ngOnInit(){this.tooltipElement.className="tooltip",this.element.nativeElement.appendChild(this.tooltipElement),this.element.nativeElement.classList.add("tooltip-container")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq))},t.\u0275dir=s.lG2({type:t,selectors:[["","tooltip",""]],inputs:{tooltip:"tooltip"},exportAs:["tl"]}),t})();const c=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-credit-card"]],decls:10,vars:0,consts:[[1,"app-card"],["name","credit-card","type","text","placeholder","Enter your 16-digit card number","credit-card",""],["tooltip","3 digits, back of your card"],["myTooltip","tl"],[3,"mouseover","mouseout"],["type","text"]],template:function(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",0),s.TgZ(1,"label"),s._uU(2," Credit Card Number "),s._UZ(3,"input",1),s.qZA(),s.TgZ(4,"label",2,3),s._uU(6," Enter your security code "),s.TgZ(7,"span",4),s.NdJ("mouseover",function(){return s.CHM(t),s.MAs(5).show()})("mouseout",function(){return s.CHM(t),s.MAs(5).hide()}),s._uU(8," (?) "),s.qZA(),s._UZ(9,"input",5),s.qZA(),s.qZA()}},directives:[i,l],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.Bz.forChild(c)],r.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,u]]}),t})()}}]);