# Ngrx Entity

- Write less code - more efficient for you
- Faster searches - more efficient for your users

```
npm i @ngrx/entity

// Generate Entity
ng generate entity modules/products/state/product --module=../products.module.ts --reducers=../../../store/index.ts

// Generate effect
 ng generate effect modules/products/state/product --module=modules/products/products.module.ts --skipTests=true --api=true

// Generate Selector
ng generate se modules/products/state/product --skipTests=true
```

## How it works?

- Create entity adaptor for diffrent kind of entity (POST)
- Use adaptot to quickly write reducer function and selectors

## Create Entity

```javascript
export interface Post {
  id?: string;
  title: string;
  description: string;
}
```

## Create State Interface

```javascript
import { EntityState } from '@ngrx/entity';
export interface PostStateInterface extends EntityState<Post> {}
```

`EntityState` interface looks like this...

```javascript
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
```

## Create Entity Adaptor

```
import { createEntityAdaptor } from '@ngrx/entity';
export const postsAdaptor = createEntityAdaptor<Post>();
```

## Why Entity

its very easy to get one record

```javascript
[
  {
    id: 1,
    title: 'one',
  },
  {
    id: 2,
    title: 'two',
  },
];
```

With entities

```javascript
const res = {
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      title: 'one',
    },
    2: {
      id: 2,
      title: 'two',
    },
  },
};
```

Get Single Record

```javascript
res.entities[2];
```

## Resources

NgRx Entity -
https://bitbucket.org/od-training/ngrx-alpha/

https://docs.google.com/presentation/d/14h7aFTva1btjrb_ZfOpMhHf76TsDe3v7WiBFMQrKGNw/edit#slide=id.g3cca63f5c6_1_33
