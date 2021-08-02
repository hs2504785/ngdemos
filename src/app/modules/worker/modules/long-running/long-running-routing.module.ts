import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LongRunningComponent } from './long-running.component';

const routes: Routes = [{ path: '', component: LongRunningComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LongRunningRoutingModule { }
