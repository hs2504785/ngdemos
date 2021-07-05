# Providers useValue

- Good for api versioning
- In case api change you need to just update at one place

```javascript
// app.module.ts
@NgModule({
  providers: [
    { provide: 'api', useValue: '/api/pizzas' }
  ]
})

// food.service.ts
export class FoodService {
  constructor(
    private http: Http,
    @Inject('api') private api: string
  ) {}
  getFood(): Observable<any[]> {
    return this.http.get(this.api)
  }
}
```

## Service

```javascript

@NgModule({
  providers: [
    ApiService,

    // same as
    // { provide: 'ApiService', useClass: 'ApiService' }
  ]
})
```
