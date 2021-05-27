import { mockPosts } from './mock.posts';
import * as PostActions from './post.actions';
import { initialState, reducer } from './post.reducer';

describe('Post Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  it('should load posts', () => {
    const result = reducer(
      initialState,
      PostActions.loadPostsSuccess({ posts: mockPosts })
    );

    expect(result.ids).toEqual([1, 2, 3]);
    expect(result.entities).toEqual({
      1: mockPosts[0],
      2: mockPosts[1],
      3: mockPosts[2]
    });
  });

  it('should create a post', () => {
    const newPost = {
      userId: 3,
      id: 4,
      title: 'titleNew',
      body: 'bodyNew'
    };

    const result = [
      PostActions.loadPostsSuccess({ posts: mockPosts }),
      PostActions.createPostSuccess({
        post: newPost
      })
    ].reduce(reducer, initialState);

    expect(result.ids).toEqual([1, 2, 3, 4]);
    expect(result.entities).toEqual({
      1: mockPosts[0],
      2: mockPosts[1],
      3: mockPosts[2],
      4: newPost
    });
  });

  it('should delete a post', () => {
    const result = [
      PostActions.loadPostsSuccess({ posts: mockPosts }),
      PostActions.deletePostSuccess({
        postId: 2
      })
    ].reduce(reducer, initialState);

    expect(result.ids).toEqual([1, 3]);
    expect(result.entities).toEqual({
      1: mockPosts[0],
      3: mockPosts[2]
    });
  });

  it('should update a post', () => {
    const result = [
      PostActions.loadPostsSuccess({ posts: mockPosts }),
      PostActions.updatePostSuccess({
        post: { ...mockPosts[2], title: 'changedTitle' }
      })
    ].reduce(reducer, initialState);

    expect(result.ids).toEqual([1, 2, 3]);
    expect(result.entities).toEqual({
      1: mockPosts[0],
      2: mockPosts[1],
      3: {
        userId: 2,
        id: 3,
        title: 'changedTitle',
        body: 'body3'
      }
    });
  });
});
