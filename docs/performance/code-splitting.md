# Code Splitting

- Lazy loading routes
- Lazy loading components

## Lazy loading routes

- Create seperate bundle for each lazy loaded modules
- Not loaded on time of app load
- Faster page load

## Problem with lazy loaded modules

They are lazy so bundle will be loaded so slight delay

### Soln ( Preloading )

- PreloadAllModules for instant navigation
- CustomPreloadStrategy to optimize this

```javascript
RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
});
```

## Lazy loading on component level

- IntersectionObserver can be used to load component when it's visible
- third party libbrary
  - ngx-loadable
  - lazy-af
