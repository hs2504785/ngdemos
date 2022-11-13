import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleCachingDemoComponent } from './simple-caching-demo.component';

const routes: Routes = [{ path: '', component: SimpleCachingDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleCachingDemoRoutingModule { }
