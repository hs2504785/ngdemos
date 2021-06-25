import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutsideClicksComponent } from './outside-clicks.component';

const routes: Routes = [{ path: '', component: OutsideClicksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutsideClicksRoutingModule { }
