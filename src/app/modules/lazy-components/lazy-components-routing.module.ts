import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponentsComponent } from './lazy-components.component';

const routes: Routes = [{ path: '', component: LazyComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyComponentsRoutingModule { }
