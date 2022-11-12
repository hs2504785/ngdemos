import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithCachingComponent } from './with-caching.component';

const routes: Routes = [{ path: '', component: WithCachingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithCachingRoutingModule { }
