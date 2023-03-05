import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnpushAsyncComponent } from './onpush-async.component';

const routes: Routes = [{ path: '', component: OnpushAsyncComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnpushAsyncRoutingModule { }
