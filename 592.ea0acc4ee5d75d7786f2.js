(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[592],{3556:(t,s,e)=>{"use strict";e.d(s,{D:()=>o});var h=e(509),i=e(5366),r=e(2693);let o=(()=>{class t{constructor(t){this.http=t,this.API_URL="https://jsonplaceholder.typicode.com",this.TODOS_URL=`${this.API_URL}/todos`,this.POSTS_URL=`${this.API_URL}/posts`,this.COMMENTS_URL=`${this.API_URL}/comments`,this.ALBUMS_URL=`${this.API_URL}/albums`,this.PHOTOS_URL=`${this.API_URL}/photos`,this.USERS_URL=`${this.API_URL}/users`}get(t){return this.http.get(t).pipe((0,h.g)(3e3))}getTodos(){return this.get(this.TODOS_URL)}getPosts(){return this.get(this.POSTS_URL)}getComments(){return this.get(this.COMMENTS_URL)}getAlbums(){return this.get(this.ALBUMS_URL)}getPhotos(){return this.get(this.PHOTOS_URL)}getPhotosNextBatch(t,s=20){return this.get(`${this.PHOTOS_URL}?_page=${t/s}&_limit=${s}`)}getUsers(){return this.get(this.USERS_URL)}}return t.\u0275fac=function(s){return new(s||t)(i.LFG(r.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);