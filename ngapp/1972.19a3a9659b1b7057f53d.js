(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[1972],{1972:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CarSearchModule:()=>g});var n=r(1116),a=r(766),c=r(5366),s=r(5959),i=r(878),o=r(9996),l=r(7701),p=r(8720),u=r(6238),d=r(4689);const f=["Ferrari","Ford","Porsche","Mazda","Maserati"];let h=(()=>{class e{constructor(){this.carsQuerySubject=new s.xQ,this.cars$=this.carsQuerySubject.pipe(function(e,t=250){return r=>r.pipe((0,l.b)(t),(0,p.x)(),(0,u.O)(""),(0,d.w)(e))}(e=>this.loadCars(e)))}searchCars(e){this.carsQuerySubject.next(e)}loadCars(e){return(0,i.of)(f).pipe((0,o.U)(t=>t.filter(t=>t.toLowerCase().startsWith(e.toLowerCase()))))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function m(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"li",5),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",e," ")}}const S=[{path:"",component:(()=>{class e{constructor(e){this.carSearchService=e}ngOnInit(){this.cars$=this.carSearchService.cars$}searchCars(e){this.carSearchService.searchCars(e)}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](h))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-car-search"]],decls:8,vars:3,consts:[[1,"p-2"],[1,"container-fluid"],["placeholder","Type car name",1,"form-control",3,"input"],[1,"list-group","mt-2","w-50"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"h1"),c["\u0275\u0275text"](2,"Search Car"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"div",1),c["\u0275\u0275elementStart"](4,"input",2),c["\u0275\u0275listener"]("input",function(e){return t.searchCars(e.target.value)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"ul",3),c["\u0275\u0275template"](6,m,2,1,"li",4),c["\u0275\u0275pipe"](7,"async"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("ngForOf",c["\u0275\u0275pipeBind1"](7,1,t.cars$)))},directives:[n.sg],pipes:[n.Ov],styles:[""],changeDetection:0}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[a.Bz.forChild(S)],a.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[n.ez,v]]}),e})()}}]);