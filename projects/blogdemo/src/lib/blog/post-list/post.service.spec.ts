import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { take } from 'rxjs/operators';

import { mockPosts } from '../post/mock.posts';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            post: {
              ids: [1, 2, 3],
              entities: {
                1: mockPosts[0],
                2: mockPosts[1],
                3: mockPosts[2]
              }
            }
          }
        })
      ]
    });

    service = TestBed.inject(PostService);
  });

  describe('getPostsByUser', () => {
    it('should handle a number id', async () => {
      const result = await service
        .getPostsByUser(1)
        .pipe(take(1))
        .toPromise();

      expect(result).toEqual([mockPosts[0], mockPosts[1]]);
    });

    it('should handle a string id (using marbles)', () => {
      const expected = cold('(a)', {
        a: [mockPosts[0], mockPosts[1]]
      });

      expect(service.getPostsByUser('1')).toBeObservable(expected);
    });
  });
});
