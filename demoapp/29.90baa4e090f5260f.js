"use strict";(self.webpackChunkdemoapp=self.webpackChunkdemoapp||[]).push([[29],{8029:(P,u,i)=>{i.r(u),i.d(u,{PipesModule:()=>r});var m=i(6895),d=i(5808),t=i(8256),f=i(2588),h=i(6742);class p{transform(e="",a=100){let s=e.slice(0,a);return e.length>a&&(s+="..."),s}}p.\u0275fac=function(e){return new(e||p)},p.\u0275pipe=t.Yjl({name:"appTruncate",type:p,pure:!0});class l{transform(e){return this.flattenArray(e)}flattenArray(e){const a=[];return e.forEach(s=>{Array.isArray(s)?a.push(...this.flattenArray(s)):a.push(s)}),a}}l.\u0275fac=function(e){return new(e||l)},l.\u0275pipe=t.Yjl({name:"appFlatten",type:l,pure:!0});const y=function(){return["Hello","World","Hello World"]};class c{constructor(){this.flattenData=[1,2,[3],[4,[5,6,[7]]]]}modifyFlatten(){this.flattenData.push(3,5)}reassignFlatten(){this.flattenData=[...this.flattenData]}}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-pipes"]],decls:18,vars:21,consts:[[1,"dashboard"],[3,"iconClasses","title","subTitle"],["body",""],[1,"mt-3",3,"iconClasses","title","subTitle"],["footer","",1,"footer"],[1,"mr-1",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"app-card",1)(2,"p",2),t._uU(3),t.ALo(4,"appTruncate"),t.qZA()(),t.TgZ(5,"app-card",3)(6,"div",2),t._uU(7),t.ALo(8,"appFlatten"),t.qZA(),t.TgZ(9,"div",4)(10,"button",5),t.NdJ("click",function(){return a.modifyFlatten()}),t._uU(11,"Modify"),t.qZA(),t.TgZ(12,"button",5),t.NdJ("click",function(){return a.reassignFlatten()}),t._uU(13,"Reassign"),t.qZA()()(),t.TgZ(14,"app-card",1)(15,"div",2),t._uU(16),t.ALo(17,"appFilterTerm"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("iconClasses","ti-package")("title","Truncate")("subTitle","Pipes"),t.xp6(2),t.hij(" ",t.xi3(4,12,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ea, fugit magnam voluptatum odit fugiat cumque cum temporibus repellendus corrupti reprehenderit deserunt consequuntur laudantium libero beatae adipisci suscipit atque commodi.",75)," "),t.xp6(2),t.Q6J("iconClasses","ti-star")("title","Flatten")("subTitle","Pipes"),t.xp6(2),t.hij(" ",t.lcZ(8,15,a.flattenData)," "),t.xp6(7),t.Q6J("iconClasses","ti-eye")("title","Filter Term")("subTitle","Pipes"),t.xp6(2),t.hij(" ",t.xi3(17,17,t.DdM(20,y),"hello")," "))},dependencies:[f.A,h.j,p,l],styles:[".dashboard[_ngcontent-%COMP%]{margin:15px}app-card[_ngcontent-%COMP%]{display:block}"],changeDetection:0});const T=[{path:"",component:c}];class o{}o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(T),d.Bz]});var g=i(6571);class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[m.ez,o,g.m]})}}]);