## Action

- Event in UI
- User Action

```javascript
// Action without payload
export const loadAlbums = createAction(
  '[Album] Load Albums'
);

export const loadAlbumsSuccess = createAction(
  '[Album] Load Albums Success',
  props<{ data: AlbumInterface[] }>()
);
export const loadAlbumsFailure = createAction(
  '[Album] Load Albums Failure',
  props<{ error: any }>()
);

// Action with payload
export const createAlbum = createAction(
  '[Album] Create Album',
  props<{ data: AlbumInterface }>()
);
```
