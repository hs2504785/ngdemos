(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[858],{1858:(t,e,n)=>{"use strict";n.r(e),n.d(e,{PipesModule:()=>d});var a=n(1116),r=n(8147),i=n(8619),s=n(3902);let c=(()=>{class t{transform(t="",e=100){let n=t.slice(0,e);return t.length>e&&(n+="..."),n}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"appTruncate",type:t,pure:!0}),t})(),u=(()=>{class t{transform(t){return this.flattenArray(t)}flattenArray(t){const e=[];return t.forEach(t=>{Array.isArray(t)?e.push(...this.flattenArray(t)):e.push(t)}),e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=i.Yjl({name:"appFlatten",type:t,pure:!0}),t})();const p=[{path:"",component:(()=>{class t{constructor(){this.flattenData=[1,2,[3],[4,[5,6,[7]]]]}modifyFlatten(){this.flattenData.push(3,5)}reassignFlatten(){this.flattenData=[...this.flattenData]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-pipes"]],decls:14,vars:13,consts:[[1,"dashboard"],[3,"iconClasses","title","subTitle"],["body",""],[1,"mt-3",3,"iconClasses","title","subTitle"],["footer","",1,"footer"],[1,"mr-1",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"app-card",1),i.TgZ(2,"p",2),i._uU(3),i.ALo(4,"appTruncate"),i.qZA(),i.qZA(),i.TgZ(5,"app-card",3),i.TgZ(6,"div",2),i._uU(7),i.ALo(8,"appFlatten"),i.qZA(),i.TgZ(9,"div",4),i.TgZ(10,"button",5),i.NdJ("click",function(){return e.modifyFlatten()}),i._uU(11,"Modify"),i.qZA(),i.TgZ(12,"button",5),i.NdJ("click",function(){return e.reassignFlatten()}),i._uU(13,"Reassign"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Q6J("iconClasses","ti-package")("title","Truncate")("subTitle","Pipes"),i.xp6(2),i.hij(" ",i.xi3(4,8,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ea, fugit magnam voluptatum odit fugiat cumque cum temporibus repellendus corrupti reprehenderit deserunt consequuntur laudantium libero beatae adipisci suscipit atque commodi.",75)," "),i.xp6(2),i.Q6J("iconClasses","ti-star")("title","Flatten")("subTitle","Pipes"),i.xp6(2),i.hij(" ",i.lcZ(8,11,e.flattenData)," "))},directives:[s.A],pipes:[c,u],styles:[".dashboard[_ngcontent-%COMP%]{margin:15px}app-card[_ngcontent-%COMP%]{display:block}"],changeDetection:0}),t})()}];let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),t})();var l=n(7334);let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[a.ez,o,l.m]]}),t})()}}]);