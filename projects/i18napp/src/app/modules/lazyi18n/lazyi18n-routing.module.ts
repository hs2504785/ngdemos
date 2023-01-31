import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazyi18nComponent } from './lazyi18n.component';

const routes: Routes = [{ path: '', component: Lazyi18nComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazyi18nRoutingModule { }
