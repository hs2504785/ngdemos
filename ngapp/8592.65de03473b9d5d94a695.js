(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[8592],{842:(t,e,s)=>{"use strict";s.d(e,{m:()=>i});var n=s(2935);function i(){const t=new n.vA;return t.disableClose=!0,t.autoFocus=!0,t.width="400px",t}},3556:(t,e,s)=>{"use strict";s.d(e,{D:()=>o});var n=s(509),i=s(5366),h=s(2693);let o=(()=>{class t{constructor(t){this.http=t,this.API_URL="https://jsonplaceholder.typicode.com",this.TODOS_URL=`${this.API_URL}/todos`,this.POSTS_URL=`${this.API_URL}/posts`,this.COMMENTS_URL=`${this.API_URL}/comments`,this.ALBUMS_URL=`${this.API_URL}/albums`,this.PHOTOS_URL=`${this.API_URL}/photos`,this.USERS_URL=`${this.API_URL}/users`}get(t){return this.http.get(t).pipe((0,n.g)(3e3))}getTodos(){return this.get(this.TODOS_URL)}getPosts(){return this.get(this.POSTS_URL)}getComments(){return this.get(this.COMMENTS_URL)}getAlbums(){return this.get(this.ALBUMS_URL)}getPhotos(){return this.get(this.PHOTOS_URL)}getPhotosNextBatch(t,e=20){return this.get(`${this.PHOTOS_URL}?_page=${t/e}&_limit=${e}`)}getUsers(){return this.get(this.USERS_URL)}}return t.\u0275fac=function(e){return new(e||t)(i["\u0275\u0275inject"](h.eN))},t.\u0275prov=i["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},4762:(t,e,s)=>{"use strict";function n(t,e,s,n){return new(s||(s=Promise))(function(i,h){function o(t){try{u(n.next(t))}catch(e){h(e)}}function r(t){try{u(n.throw(t))}catch(e){h(e)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s(function(t){t(e)})).then(o,r)}u((n=n.apply(t,e||[])).next())})}s.d(e,{mG:()=>n})}}]);