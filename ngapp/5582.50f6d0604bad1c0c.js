"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[5582],{5582:(H,D,x)=>{x.r(D),x.d(D,{IdbSampleModule:()=>V});var j=x(9808),E=x(5357),q=x(4128),O=x(3900),c=x(5e3),B=x(655),b=x(9751),I=x(188),G=x(9841),P=x(7579),w=x(5698);function p(s,u,e,r){return new Promise((t,n)=>{s||n("IndexedDB not available");const o=s.open(u,e);let i;o.onsuccess=a=>{i=o.result,t(i)},o.onerror=a=>{n(`IndexedDB error: ${o.error}`)},"function"==typeof r&&(o.onupgradeneeded=a=>{r(a,i)})})}function k(s,u,e,r,t){if(!s)return;const n=s.open(u,e);n.onupgradeneeded=o=>{const i=o.target.result;r.forEach(d=>{if(!i.objectStoreNames.contains(d.store)){const h=i.createObjectStore(d.store,d.storeConfig);d.storeSchema.forEach(l=>{h.createIndex(l.name,l.keypath,l.options)})}});const a=t&&t();a&&Object.keys(a).map(d=>parseInt(d,10)).filter(d=>d>o.oldVersion).sort((d,h)=>d-h).forEach(d=>{a[d](i,n.transaction)}),i.close()},n.onsuccess=o=>{o.target.result.close()}}function y(s,u,e){s||e("You need to use the openDatabase function to create a database before you query it!"),function K(s,u){return s.objectStoreNames.contains(u)}(s,u)||e(`objectStore does not exists: ${u}`)}function g(s,u){const e=s.transaction(u.storeName,u.dbMode);return e.onerror=u.error,e.onabort=u.abort,e}function S(s,u,e,r){return{storeName:u,dbMode:s,error:t=>{e(t)},abort:t=>{e(t)}}}var m=(()=>{return(s=m||(m={})).readonly="readonly",s.readwrite="readwrite",m;var s})();const M=new c.InjectionToken(null);let A=(()=>{class s{constructor(e,r){if(this.dbConfig=e,this.platformId=r,!e.name)throw new Error("NgxIndexedDB: Please, provide the dbName in the configuration");if(!e.version)throw new Error("NgxIndexedDB: Please, provide the db version in the configuration");this.isBrowser=(0,j.NF)(this.platformId),this.isBrowser&&(this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,k(this.indexedDB,e.name,e.version,e.objectStoresMeta,e.migrationFactory),p(this.indexedDB,e.name).then(t=>{t.version!==e.version&&(this.dbConfig.version=t.version)}))}createObjectStore(e,r){const t=[e];k(this.indexedDB,this.dbConfig.name,++this.dbConfig.version,t,r)}add(e,r,t){return new b.y(n=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{const a=g(o,S(m.readwrite,e,h=>n.error(h))).objectStore(e);(Boolean(t)?a.add(r,t):a.add(r)).onsuccess=h=>(0,B.mG)(this,void 0,void 0,function*(){a.get(h.target.result).onsuccess=v=>{n.next(v.target.result),n.complete()}})}).catch(o=>n.error(o))})}bulkAdd(e,r){const t=new Promise((n,o)=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{const d=g(i,S(m.readwrite,e,n)).objectStore(e),h=r.map(l=>new Promise((f,v)=>{const T=l.key;delete l.key,(Boolean(T)?d.add(l,T):d.add(l)).onsuccess=U=>{f(U.target.result)}}));n(Promise.all(h))}).catch(i=>o(i))});return(0,I.D)(t)}bulkDelete(e,r){const t=r.map(n=>new Promise((o,i)=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(a=>{const d=g(a,S(m.readwrite,e,i));d.objectStore(e).delete(n),d.oncomplete=()=>{this.getAll(e).pipe((0,w.q)(1)).subscribe(l=>{o(l)})}}).catch(a=>i(a))}));return(0,I.D)(Promise.all(t))}getByKey(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{const a=g(n,S(m.readonly,e,t.error)).objectStore(e).get(r);a.onsuccess=d=>{t.next(d.target.result),t.complete()},a.onerror=d=>{t.error(d)}}).catch(n=>t.error(n))})}bulkGet(e,r){const t=r.map(n=>this.getByKey(e,n));return new b.y(n=>{(0,G.a)(t).subscribe(o=>{n.next(o),n.complete()})})}getByID(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{y(n,e,d=>t.error(d)),g(n,S(m.readonly,e,t.error)).objectStore(e).get(r).onsuccess=d=>{t.next(d.target.result)}}).catch(n=>t.error(n))})}getByIndex(e,r,t){return new b.y(n=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{y(o,e,l=>n.error(l)),g(o,S(m.readonly,e,n.error)).objectStore(e).index(r).get(t).onsuccess=l=>{n.next(l.target.result),n.complete()}}).catch(o=>n.error(o))})}getAll(e){return new b.y(r=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(t=>{y(t,e,a=>r.error(a));const i=g(t,S(m.readonly,e,r.error)).objectStore(e).getAll();i.onerror=a=>{r.error(a)},i.onsuccess=({target:{result:a}})=>{r.next(a),r.complete()}}).catch(t=>r.error(t))})}update(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{y(n,e,d=>t.error(d));const i=g(n,S(m.readwrite,e,d=>t.error(d))).objectStore(e);i.put(r).onsuccess=d=>(0,B.mG)(this,void 0,void 0,function*(){i.get(d.target.result).onsuccess=f=>{t.next(f.target.result),t.complete()}})}).catch(n=>t.error(n))})}delete(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{y(n,e,a=>t.error(a));const o=g(n,S(m.readwrite,e,a=>t.error(a)));o.objectStore(e).delete(r),o.oncomplete=()=>{this.getAll(e).pipe((0,w.q)(1)).subscribe(a=>{t.next(a),t.complete()})}}).catch(n=>t.error(n))})}deleteByKey(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{y(n,e,a=>t.error(a));const o=g(n,S(m.readwrite,e,a=>t.error(a))),i=o.objectStore(e);o.oncomplete=()=>{t.next(!0),t.complete()},i.delete(r)}).catch(n=>t.error(n))})}clear(e){return new b.y(r=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(t=>{y(t,e,i=>r.error(i));const n=g(t,S(m.readwrite,e,i=>r.error(i)));n.objectStore(e).clear(),n.oncomplete=()=>{r.next(!0),r.complete()}}).catch(t=>r.error(t))})}deleteDatabase(){return new b.y(e=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>(0,B.mG)(this,void 0,void 0,function*(){yield r.close();const t=this.indexedDB.deleteDatabase(this.dbConfig.name);t.onsuccess=()=>{e.next(!0),e.complete()},t.onerror=n=>e.error(n),t.onblocked=()=>{throw new Error("Unable to delete database because it's blocked")}})).catch(r=>e.error(r))})}openCursor(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{y(n,e,d=>t.error(d));const i=g(n,S(m.readonly,e,t.error)).objectStore(e);(void 0===r?i.openCursor():i.openCursor(r)).onsuccess=d=>{t.next(d),t.complete()}}).catch(n=>t.error(n))})}openCursorByIndex(e,r,t,n=m.readonly){const o=new P.x;return p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{y(i,e,f=>{o.error(f)}),g(i,S(n,e,f=>{o.error(f)})).objectStore(e).index(r).openCursor(t).onsuccess=f=>{o.next(f)}}).catch(i=>o.error(i)),o}getAllByIndex(e,r,t){const n=[];return new b.y(o=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{y(i,e,f=>o.error(f)),g(i,S(m.readonly,e,o.error)).objectStore(e).index(r).openCursor(t).onsuccess=f=>{const v=f.target.result;v?(n.push(v.value),v.continue()):(o.next(n),o.complete())}}).catch(i=>o.error(i))})}getAllKeysByIndex(e,r,t){const n=[];return new b.y(o=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{y(i,e,f=>o.error(f)),g(i,S(m.readonly,e,o.error)).objectStore(e).index(r).openKeyCursor(t).onsuccess=f=>{const v=f.target.result;v?(n.push({primaryKey:v.primaryKey,key:v.key}),v.continue()):(o.next(n),o.complete())}}).catch(i=>o.error(i))})}count(e,r){return new b.y(t=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{y(n,e,d=>t.error(d));const a=g(n,S(m.readonly,e,t.error)).objectStore(e).count(r);a.onerror=d=>t.error(d),a.onsuccess=d=>{t.next(d.target.result),t.complete()}}).catch(n=>t.error(n))})}countByIndex(e,r,t){return new b.y(n=>{p(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{y(o,e,l=>n.error(l));const h=g(o,S(m.readonly,e,n.error)).objectStore(e).index(r).count(t);h.onerror=l=>n.error(l),h.onsuccess=l=>{n.next(l.target.result),n.complete()}}).catch(o=>n.error(o))})}deleteObjectStore(e){return function $(s,u,e){if(!s||!u||!e)throw Error('Params: "dbName", "version", "storeName" are mandatory.');return new b.y(r=>{try{const n=indexedDB.open(s,u+1);n.onupgradeneeded=o=>{const i=o.target.result;i.deleteObjectStore(e),i.close(),console.log("onupgradeneeded"),r.next(!0),r.complete()},n.onerror=o=>r.error(o)}catch(t){r.error(t)}})}(this.dbConfig.name,++this.dbConfig.version,e)}}return s.\u0275fac=function(e){return new(e||s)(c.\u0275\u0275inject(M),c.\u0275\u0275inject(c.PLATFORM_ID))},s.\u0275prov=c.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac}),s})(),F=(()=>{class s{static forRoot(e){return{ngModule:s,providers:[A,{provide:M,useValue:e}]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=c.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=c.\u0275\u0275defineInjector({imports:[[j.ez]]}),s})();var C=x(3075);const z={name:"MyDb",version:1,objectStoresMeta:[{store:"people",storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"name",keypath:"name",options:{unique:!1}},{name:"email",keypath:"email",options:{unique:!1}}]}]},J=[{path:"",component:(()=>{class s{constructor(e){this.dbService=e,this.title="playground"}add(){this.dbService.add("people",{name:"charles number "+10*Math.random(),email:"email number "+10*Math.random()}).subscribe(e=>{console.log("result: ",e)})}bulkAdd(){this.dbService.bulkAdd("people",[{name:"charles number "+10*Math.random(),email:"email number "+10*Math.random()},{name:"charles number "+10*Math.random(),email:"email number "+10*Math.random()}]).subscribe(e=>{console.log("result: ",e)})}bulkGet(){for(let e=0;e<3;e++)this.bulkAdd();this.dbService.bulkGet("people",[30,34,5]).subscribe(e=>{console.log("results: ",e)})}update(){this.dbService.update("people",{id:1,email:"asd",name:"charles"}).subscribe(e=>{console.log("result: ",e)})}delete(){this.dbService.delete("people",3).subscribe(e=>{console.log("result: ",e)})}clean(){this.dbService.clear("people").subscribe(e=>{console.log("result: ",e)})}count(){this.dbService.count("people").subscribe(e=>{console.log("result: ",e)})}createStote(e){console.log("storeName",e),this.dbService.createObjectStore({store:e,storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"name",keypath:"name",options:{unique:!1}},{name:"email",keypath:"email",options:{unique:!1}}]})}addTwoAndGetAllByIndex(){(0,q.D)([this.dbService.add("people",{name:"desmond",email:"email number "+10*Math.random()}),this.dbService.add("people",{name:"desmond",email:"email number "+10*Math.random()})]).pipe((0,O.w)(()=>this.dbService.getAllByIndex("people","name",IDBKeyRange.only("desmond")))).subscribe(e=>console.log(e))}}return s.\u0275fac=function(e){return new(e||s)(c.\u0275\u0275directiveInject(A))},s.\u0275cmp=c.\u0275\u0275defineComponent({type:s,selectors:[["lib-idb-sample"]],decls:22,vars:1,consts:[[1,"container-fluid"],[3,"click"],["type","text","name","store",3,"ngModel","ngModelChange"],["store",""]],template:function(e,r){1&e&&(c.\u0275\u0275elementStart(0,"div",0)(1,"button",1),c.\u0275\u0275listener("click",function(){return r.add()}),c.\u0275\u0275text(2,"Add new entry"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(3,"button",1),c.\u0275\u0275listener("click",function(){return r.update()}),c.\u0275\u0275text(4,"Update entry"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"button",1),c.\u0275\u0275listener("click",function(){return r.delete()}),c.\u0275\u0275text(6,"Delete entry"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(7,"button",1),c.\u0275\u0275listener("click",function(){return r.clean()}),c.\u0275\u0275text(8,"Clean"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(9,"button",1),c.\u0275\u0275listener("click",function(){return r.count()}),c.\u0275\u0275text(10,"Count"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(11,"button",1),c.\u0275\u0275listener("click",function(){return r.addTwoAndGetAllByIndex()}),c.\u0275\u0275text(12,"Test #209 getAllByIndex"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(13,"button",1),c.\u0275\u0275listener("click",function(){return r.bulkAdd()}),c.\u0275\u0275text(14,"bulkAdd"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(15,"button",1),c.\u0275\u0275listener("click",function(){return r.bulkGet()}),c.\u0275\u0275text(16,"bulkGet"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(17,"div")(18,"input",2,3),c.\u0275\u0275listener("ngModelChange",function(n){return r.storeName=n}),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(20,"button",1),c.\u0275\u0275listener("click",function(){return r.createStote(r.storeName)}),c.\u0275\u0275text(21,"Create Store"),c.\u0275\u0275elementEnd()()()),2&e&&(c.\u0275\u0275advance(18),c.\u0275\u0275property("ngModel",r.storeName))},dependencies:[C.Fj,C.JJ,C.On]}),s})()}];let V=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=c.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=c.\u0275\u0275defineInjector({imports:[j.ez,C.u5,E.Bz.forChild(J),F.forRoot(z)]}),s})()}}]);