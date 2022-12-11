# Standalone

```
ng g c test --standalone
```

Set it as default

```javascript
"projects": {
    "ngdemos": {
        "projectType": "application",
        "schematics": {
        "@schematics/angular:component": {
            "style": "scss",
            "changeDetection": "OnPush",
            "standalone": true
        },
```

## Bootstrap Component

Prev

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  window.console.log = () => {};
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

Now

```javascript
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  window.console.log = () => {};
}

bootstrapApplication(AppComponent).catch(err => console.error(err));
```

## Register root routes

```javascript
bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch(err => console.error(err));
```
