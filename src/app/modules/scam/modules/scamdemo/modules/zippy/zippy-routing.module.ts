import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZippyComponent } from './zippy.component';

const routes: Routes = [{ path: '', component: ZippyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZippyRoutingModule { }
