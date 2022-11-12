import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutCachingComponent } from './without-caching.component';

const routes: Routes = [{ path: '', component: WithoutCachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutCachingRoutingModule { }
