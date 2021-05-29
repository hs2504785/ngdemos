import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService extends EntityCollectionServiceBase<any> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Post', serviceElementsFactory);
  }

  // getAll(): Observable<any> {
  //   return this.dsHelperService.getDataSources();
  // }

  // add(book): Observable<Book> {
  //   return this.http
  //     .post(`${this.BASE_URL}`, book)
  //     .pipe(map((res: any) => res));
  // }

  // update(book): Observable<Book> {
  //   return this.http
  //     .put(`${this.BASE_URL}/${book.id}`, book.changes)
  //     .pipe(map((res: any) => res));
  // }

  // delete(bookId) {
  //   return this.http
  //     .delete(this.BASE_URL + bookId)
  //     .pipe(map((res: any) => res));
  // }

  posts = this.entities$;
  // currentPostId = this.store.pipe(select(selectCurrentPostId));
  // currentPost = combineLatest([
  //   this.posts,
  //   this.currentPostId.pipe(filter(postId => !isNaN(postId))),
  // ]).pipe(map(([posts, postId]) => posts.find(post => post.id === postId)));

  // constructor(
  //   private store: Store<State>,
  //   private postEntityService: postEntityService
  // ) {}

  getPostsByUser(userId: number | string) {
    return this.posts.pipe(
      map(posts => posts.filter(post => post.userId === +userId)),
    );
  }

  // createPost(post: Omit<Post, 'id'>) {
  //   // it's ok to exclude the id with a pessimistic save
  //   this.postEntityService.add(post as Post, { isOptimistic: false });
  // }

  // deletePost(post: Post) {
  //   this.postEntityService.delete(post);
  // }

  // updatePost(post: Post) {
  //   this.postEntityService.update(post, { isOptimistic: false });
  // }
}
