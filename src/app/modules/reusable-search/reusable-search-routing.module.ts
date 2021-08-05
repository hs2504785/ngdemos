import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReusableSearchComponent } from './reusable-search.component';

const routes: Routes = [{ path: '', component: ReusableSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReusableSearchRoutingModule { }
