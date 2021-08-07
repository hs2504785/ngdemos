(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[7399],{7399:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IdbSampleModule:()=>S});var o=n(1116),r=n(766),i=n(3148),s=n(4689),d=n(5366),c=n(4762),a=n(9764),l=n(5959),u=n(611);function m(e,t,n,o){return new Promise((r,i)=>{e||i("IndexedDB not available");const s=e.open(t,n);let d;s.onsuccess=e=>{d=s.result,r(d)},s.onerror=e=>{i(`IndexedDB error: ${s.error}`)},"function"==typeof o&&(s.onupgradeneeded=e=>{o(e,d)})})}function h(e,t,n,o,r){if(!e)return;const i=e.open(t,n);i.onupgradeneeded=e=>{const t=e.target.result;o.forEach(e=>{if(!t.objectStoreNames.contains(e.store)){const n=t.createObjectStore(e.store,e.storeConfig);e.storeSchema.forEach(e=>{n.createIndex(e.name,e.keypath,e.options)})}});const n=r&&r();n&&Object.keys(n).map(e=>parseInt(e,10)).filter(t=>t>e.oldVersion).sort((e,t)=>e-t).forEach(e=>{n[e](t,i.transaction)}),t.close()},i.onsuccess=e=>{e.target.result.close()}}function b(e,t,n){e||n("You need to use the openDatabase function to create a database before you query it!"),function(e,t){return e.objectStoreNames.contains(t)}(e,t)||n(`objectStore does not exists: ${t}`)}function p(e,t){const n=e.transaction(t.storeName,t.dbMode);return n.onerror=t.error,n.oncomplete=t.complete,n.onabort=t.abort,n}function f(e,t,n,o){return{storeName:t,dbMode:e,error:e=>{n(e)},complete:e=>{o(e)},abort:e=>{n(e)}}}var g=function(e){return e.readonly="readonly",e.readwrite="readwrite",e}({});const y=new d.InjectionToken(null);let v=(()=>{class e{constructor(e,t){if(this.dbConfig=e,this.platformId=t,!e.name)throw new Error("NgxIndexedDB: Please, provide the dbName in the configuration");if(!e.version)throw new Error("NgxIndexedDB: Please, provide the db version in the configuration");this.isBrowser=(0,o.NF)(this.platformId),this.isBrowser&&(this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,h(this.indexedDB,e.name,e.version,e.objectStoresMeta,e.migrationFactory),m(this.indexedDB,e.name).then(t=>{t.version!==e.version&&(this.dbConfig.version=t.version)}))}createObjectStore(e,t){const n=[e];h(this.indexedDB,this.dbConfig.name,++this.dbConfig.version,n,t)}add(e,t,n){return(0,a.D)(new Promise((o,r)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{const s=p(i,f(g.readwrite,e,r,o)).objectStore(e);(Boolean(n)?s.add(t,n):s.add(t)).onsuccess=e=>{o(e.target.result)}}).catch(e=>r(e))}))}bulkAdd(e,t){const n=t.map(t=>new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{const i=p(r,f(g.readwrite,e,o,n)).objectStore(e),s=t.key;delete t.key,(Boolean(s)?i.add(t,s):i.add(t)).onsuccess=e=>{n(e.target.result)}}).catch(e=>o(e))}));return(0,a.D)(Promise.resolve(Promise.all(n)))}addItem(e,t,n){return(0,a.D)(new Promise((o,r)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{const s=p(i,f(g.readwrite,e,r,o)).objectStore(e),d=Boolean(n);(d?s.add(t,n):s.add(t)).onsuccess=t=>{this.getByKey(e,d?n:t.target.result).subscribe(e=>{o(e)})}}).catch(e=>r(e))}))}getByKey(e,t){return(0,a.D)(new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{const i=p(r,f(g.readonly,e,o,n)).objectStore(e).get(t);i.onsuccess=e=>{n(e.target.result)},i.onerror=e=>{o(e)}}).catch(e=>o(e))}))}bulkGet(e,t){const n=t.map(t=>this.getByKey(e,t).toPromise());return(0,a.D)(Promise.resolve(Promise.all(n)))}getByID(e,t){return(0,a.D)(new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{b(r,e,o),p(r,f(g.readonly,e,o,n)).objectStore(e).get(t).onsuccess=e=>{n(e.target.result)}}).catch(e=>o(e))}))}getByIndex(e,t,n){return(0,a.D)(new Promise((o,r)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{b(i,e,r),p(i,f(g.readonly,e,r,o)).objectStore(e).index(t).get(n).onsuccess=e=>{o(e.target.result)}}).catch(e=>r(e))}))}getAll(e){return(0,a.D)(new Promise((t,n)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{b(o,e,n);const r=p(o,f(g.readonly,e,n,t)).objectStore(e).getAll();r.onerror=e=>{n(e)},r.onsuccess=({target:{result:e}})=>{t(e)}}).catch(e=>n(e))}))}update(e,t,n){return(0,a.D)(new Promise((o,r)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{b(i,e,r);const s=p(i,f(g.readwrite,e,r,o)),d=s.objectStore(e);s.oncomplete=()=>{this.getAll(e).pipe((0,u.q)(1)).subscribe(e=>{o(e)})},n?d.put(t,n):d.put(t)}).catch(e=>r(e))}))}updateByKey(e,t,n){return(0,a.D)(new Promise((o,r)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{b(i,e,r);const s=p(i,f(g.readwrite,e,r,o)),d=s.objectStore(e);s.oncomplete=()=>{this.getByKey(e,n).subscribe(e=>{o(e)})},d.put(t,n)}).catch(e=>r(e))}))}delete(e,t){return(0,a.D)(new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{b(r,e,o);const i=p(r,f(g.readwrite,e,o,n));i.objectStore(e).delete(t),i.oncomplete=()=>{this.getAll(e).pipe((0,u.q)(1)).subscribe(e=>{n(e)})}}).catch(e=>o(e))}))}deleteByKey(e,t){return(0,a.D)(new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{b(r,e,o);const i=p(r,f(g.readwrite,e,o,n)),s=i.objectStore(e);i.oncomplete=()=>{n(!0)},s.delete(t)}).catch(e=>o(e))}))}clear(e){return(0,a.D)(new Promise((t,n)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{b(o,e,n);const r=p(o,f(g.readwrite,e,n,t));r.objectStore(e).clear(),r.oncomplete=()=>{t(!0)}}).catch(e=>n(e))}))}deleteDatabase(){return(0,a.D)(new Promise((e,t)=>(0,c.mG)(this,void 0,void 0,function*(){try{const n=yield m(this.indexedDB,this.dbConfig.name,this.dbConfig.version);yield n.close();const o=this.indexedDB.deleteDatabase(this.dbConfig.name);o.onsuccess=()=>{e(!0)},o.onerror=t,o.onblocked=()=>{throw new Error("Unable to delete database because it's blocked")}}catch(n){t(n)}})))}openCursor(e,t){return(0,a.D)(new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{b(r,e,o);const i=p(r,f(g.readonly,e,o,n)).objectStore(e);(void 0===t?i.openCursor():i.openCursor(t)).onsuccess=e=>{n(e)}}).catch(e=>o(e))}))}openCursorByIndex(e,t,n,o=g.readonly){const r=new l.xQ;return m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{b(i,e,e=>{r.error(e)}),p(i,f(o,e,e=>{r.error(e)},()=>{r.next()})).objectStore(e).index(t).openCursor(n).onsuccess=e=>{r.next(e)}}).catch(e=>r.error(e)),r}getAllByIndex(e,t,n){const o=[];return(0,a.D)(new Promise((r,i)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(s=>{b(s,e,i),p(s,f(g.readonly,e,i,r)).objectStore(e).index(t).openCursor(n).onsuccess=e=>{const t=e.target.result;t?(o.push(t.value),t.continue()):r(o)}}).catch(e=>i(e))}))}getAllKeysByIndex(e,t,n){const o=[];return(0,a.D)(new Promise((r,i)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(s=>{b(s,e,i),p(s,f(g.readonly,e,i,r)).objectStore(e).index(t).openKeyCursor(n).onsuccess=e=>{const t=e.target.result;t?(o.push({primaryKey:t.primaryKey,key:t.key}),t.continue()):r(o)}}).catch(e=>i(e))}))}count(e,t){return(0,a.D)(new Promise((n,o)=>{m(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{b(r,e,o);const i=p(r,f(g.readonly,e,o,n)).objectStore(e).count(t);i.onerror=e=>o(e),i.onsuccess=e=>n(e.target.result)}).catch(e=>o(e))}))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275inject"](y),d["\u0275\u0275inject"](d.PLATFORM_ID))},e.\u0275prov=d["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[v,{provide:y,useValue:t}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[o.ez]]}),e})();var C=n(1041);const D={name:"MyDb",version:1,objectStoresMeta:[{store:"people",storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"name",keypath:"name",options:{unique:!1}},{name:"email",keypath:"email",options:{unique:!1}}]}]},w=[{path:"",component:(()=>{class e{constructor(e){this.dbService=e,this.title="playground"}add(){this.dbService.add("people",{name:"charles number "+10*Math.random(),email:"email number "+10*Math.random()}).subscribe(e=>{console.log("result: ",e)})}bulkAdd(){this.dbService.bulkAdd("people",[{name:"charles number "+10*Math.random(),email:"email number "+10*Math.random()},{name:"charles number "+10*Math.random(),email:"email number "+10*Math.random()}]).subscribe(e=>{console.log("result: ",e)})}bulkGet(){for(let e=0;e<3;e++)this.bulkAdd();this.dbService.bulkGet("people",[30,34,5]).subscribe(e=>{console.log("results: ",e)})}update(){this.dbService.update("people",{id:1,email:"asd",name:"charles"}).subscribe(e=>{console.log("result: ",e)})}delete(){this.dbService.delete("people",3).subscribe(e=>{console.log("result: ",e)})}clean(){this.dbService.clear("people").subscribe(e=>{console.log("result: ",e)})}count(){this.dbService.count("people").subscribe(e=>{console.log("result: ",e)})}createStote(e){console.log("storeName",e),this.dbService.createObjectStore({store:e,storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"name",keypath:"name",options:{unique:!1}},{name:"email",keypath:"email",options:{unique:!1}}]})}addTwoAndGetAllByIndex(){(0,i.D)([this.dbService.add("people",{name:"desmond",email:"email number "+10*Math.random()}),this.dbService.add("people",{name:"desmond",email:"email number "+10*Math.random()})]).pipe((0,s.w)(()=>this.dbService.getAllByIndex("people","name",IDBKeyRange.only("desmond")))).subscribe(e=>console.log(e))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](v))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["lib-idb-sample"]],decls:22,vars:1,consts:[[1,"container-fluid"],[3,"click"],["type","text","name","store",3,"ngModel","ngModelChange"],["store",""]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275listener"]("click",function(){return t.add()}),d["\u0275\u0275text"](2,"Add new entry"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",1),d["\u0275\u0275listener"]("click",function(){return t.update()}),d["\u0275\u0275text"](4,"Update entry"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"button",1),d["\u0275\u0275listener"]("click",function(){return t.delete()}),d["\u0275\u0275text"](6,"Delete entry"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"button",1),d["\u0275\u0275listener"]("click",function(){return t.clean()}),d["\u0275\u0275text"](8,"Clean"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"button",1),d["\u0275\u0275listener"]("click",function(){return t.count()}),d["\u0275\u0275text"](10,"Count"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"button",1),d["\u0275\u0275listener"]("click",function(){return t.addTwoAndGetAllByIndex()}),d["\u0275\u0275text"](12,"Test #209 getAllByIndex"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"button",1),d["\u0275\u0275listener"]("click",function(){return t.bulkAdd()}),d["\u0275\u0275text"](14,"bulkAdd"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"button",1),d["\u0275\u0275listener"]("click",function(){return t.bulkGet()}),d["\u0275\u0275text"](16,"bulkGet"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"div"),d["\u0275\u0275elementStart"](18,"input",2,3),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.storeName=e}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](20,"button",1),d["\u0275\u0275listener"]("click",function(){return t.createStote(t.storeName)}),d["\u0275\u0275text"](21,"Create Store"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](18),d["\u0275\u0275property"]("ngModel",t.storeName))},directives:[C.Fj,C.JJ,C.On],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[o.ez,C.u5,r.Bz.forChild(w),x.forRoot(D)]]}),e})()}}]);