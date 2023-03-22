import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { extModules } from 'src/build-specifics';
import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { appReducers } from './store/reducers';
import { metaReducers } from './store/meta-reducers';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeModule } from './home/home.module';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './modules/apmdemo/products/product-data';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    extModules,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    // for apm demo- remove it
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // change detection profiling
  // constructor(applicationRef: ApplicationRef) {
  //   const originalTick = applicationRef.tick;
  //   applicationRef.tick = function () {
  //     const windowPerfomance = window.performance;
  //     const before = windowPerfomance.now();
  //     const retValue = originalTick.apply(this, arguments);
  //     const after = windowPerfomance.now();
  //     const runTime = after - before;
  //     window.console.log('CHANGE DETECTION TIME', runTime);
  //     return retValue;
  //   };
  // }
}
