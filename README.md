## Build & Deploy

```
npm install -g angular-cli-ghpages
ng build --base-href "https://hs2504785.github.io/ngdemos/"
ngh --dir=dist/ngdemos --message="My First deploy"

// generate lazy module
ng generate module customers --route customers --module app.module
```

All done!
https://hs2504785.github.io/ngdemos/

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
