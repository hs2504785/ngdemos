import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxAngularPushComponent } from './rx-angular-push.component';

const routes: Routes = [{ path: '', component: RxAngularPushComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxAngularPushRoutingModule { }
