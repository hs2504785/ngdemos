import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgSortingComponent } from './ag-sorting.component';

const routes: Routes = [{ path: '', component: AgSortingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgSortingRoutingModule { }
