import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyModalsComponent } from './lazy-modals.component';

const routes: Routes = [{ path: '', component: LazyModalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModalsRoutingModule { }
