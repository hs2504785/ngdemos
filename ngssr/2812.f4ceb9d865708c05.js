"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[2812],{2812:(he,I,s)=>{s.r(I),s.d(I,{ProductModule:()=>P});var A=s(9116),B=s(7482),d=s(9653);const g=(0,d.ZF)("products"),D=(0,d.P1)(g,o=>o.showProductCode),G=(0,d.P1)(g,o=>o.currentProductId),J=(0,d.P1)(g,G,(o,t)=>0===t?{id:0,productName:"",productCode:"New",description:"",starRating:0}:t?o.products.find(r=>r.id===t):null),Q=(0,d.P1)(g,o=>o.products),X=(0,d.P1)(g,o=>o.error),b=(0,d.PH)("[Product Page] Toggle Product Code"),M=(0,d.PH)("[Product Page] Set Current Product",(0,d.Ky)()),w=(0,d.PH)("[Product Page] Clear Current Product"),F=(0,d.PH)("[Product Page] Initialize Current Product"),T=(0,d.PH)("[Product Page] Load"),N=(0,d.PH)("[Product Page] Update Product",(0,d.Ky)()),$=(0,d.PH)("[Product Page] Create Product",(0,d.Ky)()),k=(0,d.PH)("[Product Page] Delete Product",(0,d.Ky)()),V=(0,d.PH)("[Product API] Load Success",(0,d.Ky)()),K=(0,d.PH)("[Product API] Load Fail",(0,d.Ky)()),L=(0,d.PH)("[Product API] Update Product Success",(0,d.Ky)()),R=(0,d.PH)("[Product API] Update Product Fail",(0,d.Ky)()),H=(0,d.PH)("[Product API] Create Product Success",(0,d.Ky)()),j=(0,d.PH)("[Product API] Create Product Fail",(0,d.Ky)()),O=(0,d.PH)("[Product API] Delete Product Success",(0,d.Ky)()),W=(0,d.PH)("[Product API] Delete Product Fail",(0,d.Ky)());var e=s(4650),l=s(6895);function Y(o,t){if(1&o&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275text(1),e.\u0275\u0275elementContainerEnd()),2&o){const r=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" (",r.productCode,") ")}}const Z=function(o){return{active:o}};function q(o,t){if(1&o){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",13),e.\u0275\u0275listener("click",function(){const h=e.\u0275\u0275restoreView(r).$implicit,Pe=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(Pe.productSelected(h))}),e.\u0275\u0275text(1),e.\u0275\u0275template(2,Y,2,1,"ng-container",14),e.\u0275\u0275elementEnd()}if(2&o){const r=t.$implicit,n=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(3,Z,(null==r?null:r.id)===(null==n.selectedProduct?null:n.selectedProduct.id))),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",r.productName," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.displayCode)}}function ee(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",10)(1,"div",11),e.\u0275\u0275template(2,q,3,5,"button",12),e.\u0275\u0275elementEnd()()),2&o){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",r.products)}}function te(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",15),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" Error: ",r.errorMessage,"\n")}}class f{constructor(){this.pageTitle="Products",this.displayCodeChanged=new e.EventEmitter,this.initializeNewProduct=new e.EventEmitter,this.productWasSelected=new e.EventEmitter}checkChanged(){this.displayCodeChanged.emit()}newProduct(){this.initializeNewProduct.emit()}productSelected(t){this.productWasSelected.emit(t)}}f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=e.\u0275\u0275defineComponent({type:f,selectors:[["pm-product-list"]],inputs:{errorMessage:"errorMessage",products:"products",displayCode:"displayCode",selectedProduct:"selectedProduct"},outputs:{displayCodeChanged:"displayCodeChanged",initializeNewProduct:"initializeNewProduct",productWasSelected:"productWasSelected"},decls:14,vars:4,consts:[[1,"card"],[1,"card-header"],["class","card-body",4,"ngIf"],[1,"card-footer"],[1,"row"],[1,"form-check","col-md-7"],["type","checkbox",1,"form-check-input",3,"checked","change"],[1,"col-md-4","text-right"],[1,"btn","btn-primary",3,"click"],["class","alert alert-danger",4,"ngIf"],[1,"card-body"],[1,"list-group"],["class","list-group-item list-group-item-action rounded-0",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action","rounded-0",3,"ngClass","click"],[4,"ngIf"],[1,"alert","alert-danger"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,ee,3,1,"div",2),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"div",5)(7,"label")(8,"input",6),e.\u0275\u0275listener("change",function(){return r.checkChanged()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(9," Display Product Code "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"div",7)(11,"button",8),e.\u0275\u0275listener("click",function(){return r.newProduct()}),e.\u0275\u0275text(12," Add "),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275template(13,te,2,1,"div",9)),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",r.pageTitle," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.products),e.\u0275\u0275advance(5),e.\u0275\u0275property("checked",r.displayCode),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",r.errorMessage))},dependencies:[l.mk,l.sg,l.O5],styles:[".card-body[_ngcontent-%COMP%]{padding:0}"],changeDetection:0});var i=s(4006);class re{constructor(t){this.validationMessages=t}processMessages(t){const r={};for(const n in t.controls)if(t.controls.hasOwnProperty(n)){const c=t.controls[n];if(c instanceof i.cw){const h=this.processMessages(c);Object.assign(r,h)}else this.validationMessages[n]&&(r[n]="",(c.dirty||c.touched)&&c.errors&&Object.keys(c.errors).map(h=>{this.validationMessages[n][h]&&(r[n]+=this.validationMessages[n][h]+" ")}))}return r}}class oe{static range(t,r){return n=>n.value&&(isNaN(n.value)||n.value<t||n.value>r)?{range:!0}:null}}function ne(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"span",22),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",r.displayMessage.productName," ")}}function de(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"span",22),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",r.displayMessage.productCode," ")}}function ce(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"span",22),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",r.displayMessage.starRating," ")}}function se(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"span",22),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",r.displayMessage.description," ")}}const _=function(o){return{"is-invalid":o}};function ie(o,t){if(1&o){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",2)(1,"div",3),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",4)(4,"form",5),e.\u0275\u0275listener("ngSubmit",function(){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.saveProduct())}),e.\u0275\u0275elementStart(5,"fieldset")(6,"div",6)(7,"label",7),e.\u0275\u0275text(8,"Product Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",8)(10,"input",9),e.\u0275\u0275listener("blur",function(){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.blur())}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(11,ne,2,1,"span",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",6)(13,"label",11),e.\u0275\u0275text(14,"Product Code"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"div",8)(16,"input",12),e.\u0275\u0275listener("blur",function(){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.blur())}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(17,de,2,1,"span",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",6)(19,"label",13),e.\u0275\u0275text(20,"Star Rating (1-5)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",8),e.\u0275\u0275element(22,"input",14),e.\u0275\u0275template(23,ce,2,1,"span",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(24,"div",6)(25,"label",15),e.\u0275\u0275text(26,"Description"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",8)(28,"textarea",16),e.\u0275\u0275text(29,"            "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(30,se,2,1,"span",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(31,"div",17)(32,"div",18)(33,"span")(34,"button",19),e.\u0275\u0275text(35," Save "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(36,"span")(37,"button",20),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.cancelEdit())}),e.\u0275\u0275text(38," Cancel "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(39,"span")(40,"button",21),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.deleteProduct())}),e.\u0275\u0275text(41," Delete "),e.\u0275\u0275elementEnd()()()()()()()()}if(2&o){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",r.pageTitle," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("formGroup",r.productForm),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(11,_,r.displayMessage.productName)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.displayMessage.productName),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(13,_,r.displayMessage.productCode)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.displayMessage.productCode),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(15,_,r.displayMessage.starRating)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.displayMessage.starRating),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(17,_,r.displayMessage.description)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.displayMessage.description),e.\u0275\u0275advance(4),e.\u0275\u0275property("disabled",!r.productForm.valid||!r.productForm.dirty)}}function ae(o,t){if(1&o&&(e.\u0275\u0275elementStart(0,"div",23),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&o){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" Error: ",r.errorMessage,"\n")}}class C{constructor(t){this.fb=t,this.pageTitle="Product Edit",this.create=new e.EventEmitter,this.update=new e.EventEmitter,this.delete=new e.EventEmitter,this.clearCurrent=new e.EventEmitter,this.displayMessage={},this.validationMessages={productName:{required:"Product name is required.",minlength:"Product name must be at least three characters.",maxlength:"Product name cannot exceed 50 characters."},productCode:{required:"Product code is required."},starRating:{range:"Rate the product between 1 (lowest) and 5 (highest)."}},this.genericValidator=new re(this.validationMessages)}ngOnInit(){this.productForm=this.fb.group({productName:["",[i.kI.required,i.kI.minLength(3),i.kI.maxLength(50)]],productCode:["",i.kI.required],starRating:["",oe.range(1,5)],description:""}),this.productForm.valueChanges.subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.productForm))}ngOnChanges(t){t.selectedProduct&&this.displayProduct(t.selectedProduct.currentValue)}blur(){this.displayMessage=this.genericValidator.processMessages(this.productForm)}displayProduct(t){t&&this.productForm&&(this.productForm.reset(),this.pageTitle=0===t.id?"Add Product":`Edit Product: ${t.productName}`,this.productForm.patchValue({productName:t.productName,productCode:t.productCode,starRating:t.starRating,description:t.description}))}cancelEdit(){this.displayProduct(this.selectedProduct)}deleteProduct(){this.selectedProduct&&this.selectedProduct.id?confirm(`Really delete the product: ${this.selectedProduct.productName}?`)&&this.delete.emit(this.selectedProduct):this.clearCurrent.emit()}saveProduct(){if(this.productForm.valid&&this.productForm.dirty){const t={...this.selectedProduct,...this.productForm.value};0===t.id?this.create.emit(t):this.update.emit(t)}}}C.\u0275fac=function(t){return new(t||C)(e.\u0275\u0275directiveInject(i.qu))},C.\u0275cmp=e.\u0275\u0275defineComponent({type:C,selectors:[["pm-product-edit"]],inputs:{errorMessage:"errorMessage",selectedProduct:"selectedProduct"},outputs:{create:"create",update:"update",delete:"delete",clearCurrent:"clearCurrent"},features:[e.\u0275\u0275NgOnChangesFeature],decls:2,vars:2,consts:[["class","card",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"card-body"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","productNameId",1,"col-md-3","col-form-label"],[1,"col-md-9"],["id","productNameId","type","text","placeholder","Name (required)","formControlName","productName",1,"form-control",3,"ngClass","blur"],["class","invalid-feedback",4,"ngIf"],["for","productCodeId",1,"col-md-3","col-form-label"],["id","productCodeId","type","text","placeholder","Code (required)","formControlName","productCode",1,"form-control",3,"ngClass","blur"],["for","starRatingId",1,"col-md-3","col-form-label"],["id","starRatingId","type","text","placeholder","Rating","formControlName","starRating",1,"form-control",3,"ngClass"],["for","descriptionId",1,"col-md-3","col-form-label"],["id","descriptionId","placeholder","Description","rows","3","formControlName","description",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"col-md-10","col-md-offset-2"],["type","submit",1,"btn","btn-primary",2,"width","80px","margin-right","10px",3,"disabled"],["type","button",1,"btn","btn-light",2,"width","80px","margin-right","10px",3,"click"],["type","button",1,"btn","btn-light",2,"width","80px",3,"click"],[1,"invalid-feedback"],[1,"alert","alert-danger"]],template:function(t,r){1&t&&(e.\u0275\u0275template(0,ie,42,19,"div",0),e.\u0275\u0275template(1,ae,2,1,"div",1)),2&t&&(e.\u0275\u0275property("ngIf",r.selectedProduct),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.errorMessage))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],encapsulation:2});class v{constructor(t){this.store=t}ngOnInit(){this.products$=this.store.select(Q),this.errorMessage$=this.store.select(X),this.store.dispatch(T()),this.selectedProduct$=this.store.select(J),this.displayCode$=this.store.select(D)}checkChanged(){this.store.dispatch(b())}newProduct(){this.store.dispatch(F())}productSelected(t){this.store.dispatch(M({currentProductId:t.id}))}deleteProduct(t){this.store.dispatch(k({productId:t.id}))}clearProduct(){this.store.dispatch(w())}saveProduct(t){this.store.dispatch($({product:t}))}updateProduct(t){this.store.dispatch(N({product:t}))}}v.\u0275fac=function(t){return new(t||v)(e.\u0275\u0275directiveInject(d.yh))},v.\u0275cmp=e.\u0275\u0275defineComponent({type:v,selectors:[["ng-component"]],decls:11,vars:18,consts:[[1,"row"],[1,"col-md-4"],[3,"displayCode","products","selectedProduct","errorMessage","displayCodeChanged","initializeNewProduct","productWasSelected"],[1,"col-md-8"],[3,"selectedProduct","errorMessage","clearCurrent","update","delete","create"]],template:function(t,r){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"pm-product-list",2),e.\u0275\u0275listener("displayCodeChanged",function(){return r.checkChanged()})("initializeNewProduct",function(){return r.newProduct()})("productWasSelected",function(c){return r.productSelected(c)}),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"div",3)(8,"pm-product-edit",4),e.\u0275\u0275listener("clearCurrent",function(){return r.clearProduct()})("update",function(c){return r.updateProduct(c)})("delete",function(c){return r.deleteProduct(c)})("create",function(c){return r.saveProduct(c)}),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275pipe(10,"async"),e.\u0275\u0275elementEnd()()()),2&t&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("displayCode",e.\u0275\u0275pipeBind1(3,6,r.displayCode$))("products",e.\u0275\u0275pipeBind1(4,8,r.products$))("selectedProduct",e.\u0275\u0275pipeBind1(5,10,r.selectedProduct$))("errorMessage",e.\u0275\u0275pipeBind1(6,12,r.errorMessage$)),e.\u0275\u0275advance(6),e.\u0275\u0275property("selectedProduct",e.\u0275\u0275pipeBind1(9,14,r.selectedProduct$))("errorMessage",e.\u0275\u0275pipeBind1(10,16,r.errorMessage$)))},dependencies:[f,C,l.Ov],encapsulation:2});const le=(0,d.Lq)({showProductCode:!0,currentProductId:null,products:[],error:""},(0,d.on)(b,o=>({...o,showProductCode:!o.showProductCode})),(0,d.on)(M,(o,t)=>({...o,currentProductId:t.currentProductId})),(0,d.on)(w,o=>({...o,currentProductId:null})),(0,d.on)(F,o=>({...o,currentProductId:0})),(0,d.on)(V,(o,t)=>({...o,products:t.products,error:""})),(0,d.on)(K,(o,t)=>({...o,products:[],error:t.error})),(0,d.on)(L,(o,t)=>{const r=o.products.map(n=>t.product.id===n.id?t.product:n);return{...o,products:r,currentProductId:t.product.id,error:""}}),(0,d.on)(R,(o,t)=>({...o,error:t.error})),(0,d.on)(H,(o,t)=>({...o,products:[...o.products,t.product],currentProductId:t.product.id,error:""})),(0,d.on)(j,(o,t)=>({...o,error:t.error})),(0,d.on)(O,(o,t)=>({...o,products:o.products.filter(r=>r.id!==t.productId),currentProductId:null,error:""})),(0,d.on)(W,(o,t)=>({...o,error:t.error})));var a=s(5350),U=s(5577),y=s(4004),u=s(262),z=s(4351),x=s(9646),E=s(529),pe=s(2843),S=s(8505);class p{constructor(t){this.http=t,this.productsUrl="api/products"}getProducts(){return this.http.get(this.productsUrl).pipe((0,S.b)(t=>console.log(JSON.stringify(t))),(0,u.K)(this.handleError))}createProduct(t){const r=new E.WM({"Content-Type":"application/json"}),n={...t,id:null};return this.http.post(this.productsUrl,n,{headers:r}).pipe((0,S.b)(c=>console.log("createProduct: "+JSON.stringify(c))),(0,u.K)(this.handleError))}deleteProduct(t){const r=new E.WM({"Content-Type":"application/json"});return this.http.delete(`${this.productsUrl}/${t}`,{headers:r}).pipe((0,S.b)(c=>console.log("deleteProduct: "+t)),(0,u.K)(this.handleError))}updateProduct(t){const r=new E.WM({"Content-Type":"application/json"});return this.http.put(`${this.productsUrl}/${t.id}`,t,{headers:r}).pipe((0,S.b)(()=>console.log("updateProduct: "+t.id)),(0,y.U)(()=>t),(0,u.K)(this.handleError))}handleError(t){let r;return r=t.error instanceof ErrorEvent?`An error occurred: ${t.error.message}`:`Backend returned code ${t.status}: ${t.body.error}`,console.error(t),(0,pe._)(r)}}p.\u0275fac=function(t){return new(t||p)(e.\u0275\u0275inject(E.eN))},p.\u0275prov=e.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"});class m{constructor(t,r){this.actions$=t,this.productService=r,this.loadProducts$=(0,a.GW)(()=>this.actions$.pipe((0,a.l4)(T),(0,U.z)(()=>this.productService.getProducts().pipe((0,y.U)(n=>V({products:n})),(0,u.K)(n=>(0,x.of)(K({error:n}))))))),this.updateProduct$=(0,a.GW)(()=>this.actions$.pipe((0,a.l4)(N),(0,z.b)(n=>this.productService.updateProduct(n.product).pipe((0,y.U)(c=>L({product:c})),(0,u.K)(c=>(0,x.of)(R({error:c}))))))),this.createProduct$=(0,a.GW)(()=>this.actions$.pipe((0,a.l4)($),(0,z.b)(n=>this.productService.createProduct(n.product).pipe((0,y.U)(c=>H({product:c})),(0,u.K)(c=>(0,x.of)(j({error:c}))))))),this.deleteProduct$=(0,a.GW)(()=>this.actions$.pipe((0,a.l4)(k),(0,U.z)(n=>this.productService.deleteProduct(n.productId).pipe((0,y.U)(()=>O({productId:n.productId})),(0,u.K)(c=>(0,x.of)(W({error:c})))))))}}m.\u0275fac=function(t){return new(t||m)(e.\u0275\u0275inject(a.eX),e.\u0275\u0275inject(p))},m.\u0275prov=e.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac});const me=[{path:"",component:v}];class P{}P.\u0275fac=function(t){return new(t||P)},P.\u0275mod=e.\u0275\u0275defineNgModule({type:P}),P.\u0275inj=e.\u0275\u0275defineInjector({imports:[B.m,A.Bz.forChild(me),d.Aw.forFeature("products",le),a.sQ.forFeature([m])]})}}]);