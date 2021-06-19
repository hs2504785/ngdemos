# Memoization

```javascript
npm i memo-decorator --save

// with angular pipe
import memo from 'memo-decorator';

@memo()
transform() {

}
```

## Handle Frequent Update

```javascript
this.update$.pipe(buffer(interval(2000))).subscribe();
```

## Preconditions

1. production mode --prod
2. no mangle - no method renaming
3. no extensions

```javascript
NG_BUILD_MANGLE = false ng build --prod

// in angular.json
"production": {
  "namedChunks": true,
}
```
