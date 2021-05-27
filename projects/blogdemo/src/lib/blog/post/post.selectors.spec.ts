import { Dictionary } from '@ngrx/entity';
import { Post } from '../types';
import { mockPosts } from './mock.posts';
import { selectPost, selectPostsByUser } from './post.selectors';

describe('Post Selectors', () => {
  describe('selectPost', () => {
    let entities: Dictionary<Post>;

    beforeEach(() => {
      entities = { 1: mockPosts[0], 2: mockPosts[1] };
    });

    it('should handle having entities and id', () => {
      expect(selectPost.projector(entities, 2)).toBe(mockPosts[1]);
    });

    it('should handle id being unready', () => {
      expect(
        selectPost.projector(entities, undefined)
      ).toBeUndefined();
    });
  });

  describe('selectPostsByUser', () => {
    it('should handle a string id', () => {
      expect(selectPostsByUser('1').projector(mockPosts)).toEqual([
        mockPosts[0],
        mockPosts[1]
      ]);
    });

    it('should handle a number id', () => {
      expect(selectPostsByUser(1).projector(mockPosts)).toEqual([
        mockPosts[0],
        mockPosts[1]
      ]);
    });
  });
});
