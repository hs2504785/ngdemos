## Dev

```
npm start

// rebuild what changed
ng serve --hmr
```

## Build & Deploy

```
npm install -g angular-cli-ghpages
ng build --base-href "https://hs2504785.github.io/ngdemos/ngapp/"

// Build & Deploy Fitness App
ng build --project=fitness --base-href "https://hs2504785.github.io/ngdemos/fitness/"

ngh --dir=dist --message="My First deploy"
```

All done!
https://hs2504785.github.io/ngdemos/

## Generate lazy module

```
ng generate module customers --route customers --module app.module
```

## Prettier

```
ng add @schuchard/prettier
```

## Resources

https://www.npmjs.com/package/find-and

## Analyse Bundle

```
// with source-map-explorer
npm run sme

// with webpack-bundle-analyzer
npm run wba
```

## Uncss

```
ng build
npm run purgecss

than deploy
```

## Feature

- NgRx Store CRUD
- Ngrx Entity CRUD
- Ngrx Data CRUD
- Global Loader ( for route transition )
- Global Loader ( for any http calls )
- Performance Demo
- RxDB Demo
- On scroll load api on demand
- Upgraded to Angular v12
- Caching http calls
