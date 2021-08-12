import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CsdemoComponent } from './csdemo.component';

const routes: Routes = [{ path: '', component: CsdemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsdemoRoutingModule { }
