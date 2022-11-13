import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleCachingComponent } from './simple-caching.component';

const routes: Routes = [{ path: '', component: SimpleCachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleCachingRoutingModule { }
