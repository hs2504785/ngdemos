import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazydemoComponent } from './lazydemo.component';

const routes: Routes = [{ path: '', component: LazydemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazydemoRoutingModule { }
