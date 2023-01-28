# NgRx Today

```javascript
// bootstrap
// main.ts ( asuming module not used)
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideStore(),
    provideEffects(),
    provideStoreDevtools(),
    provideRouterStore(),
  ],
});
```
