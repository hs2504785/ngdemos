import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSearchComponent } from './car-search.component';

const routes: Routes = [{ path: '', component: CarSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarSearchRoutingModule { }
