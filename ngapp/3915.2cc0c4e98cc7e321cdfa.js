(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[3915],{3915:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CounterModule:()=>C});var r=n(1116),c=n(766),o=n(1671);const i=(0,o.PH)("[Counter Component] Increment"),s=(0,o.PH)("[Counter Component] Decrement"),u=(0,o.PH)("[Counter Component] Reset"),l="counter",m=(0,o.Lq)({count:0},(0,o.on)(i,e=>({count:e.count+1})),(0,o.on)(s,e=>({count:e.count-1})),(0,o.on)(u,e=>({count:0}))),d=(0,o.ZF)(l),a=(0,o.P1)(d,e=>e.count);var p=n(5366);const f=[{path:"",component:(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.count$=this.store.pipe((0,o.Ys)(a))}increment(){this.store.dispatch(i())}decrement(){this.store.dispatch(s())}reset(){this.store.dispatch(u())}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](o.yh))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-counter"]],decls:15,vars:3,consts:[[1,"container-fluid"],[1,"text-center"],[1,"card","card-body"],[1,"mt-2"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-warning","ml-2",3,"click"],[1,"btn","btn-danger","ml-2",3,"click"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275elementStart"](1,"h1",1),p["\u0275\u0275text"](2,"Counter"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"div",2),p["\u0275\u0275elementStart"](4,"div"),p["\u0275\u0275text"](5),p["\u0275\u0275pipe"](6,"async"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](7,"hr",3),p["\u0275\u0275elementStart"](8,"div"),p["\u0275\u0275elementStart"](9,"button",4),p["\u0275\u0275listener"]("click",function(){return t.increment()}),p["\u0275\u0275text"](10,"Increment"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"button",5),p["\u0275\u0275listener"]("click",function(){return t.decrement()}),p["\u0275\u0275text"](12," Increment "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"button",6),p["\u0275\u0275listener"]("click",function(){return t.reset()}),p["\u0275\u0275text"](14,"Reset"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](5),p["\u0275\u0275textInterpolate1"]("Current Count: ",p["\u0275\u0275pipeBind1"](6,1,t.count$),""))},pipes:[r.Ov],styles:[""],changeDetection:0}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({imports:[[c.Bz.forChild(f)],c.Bz]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({imports:[[r.ez,h,o.Aw.forFeature(l,m)]]}),e})()}}]);