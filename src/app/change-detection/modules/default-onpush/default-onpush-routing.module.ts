import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultOnpushComponent } from './default-onpush.component';

const routes: Routes = [{ path: '', component: DefaultOnpushComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultOnpushRoutingModule { }
