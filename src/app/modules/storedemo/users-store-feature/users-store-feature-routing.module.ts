import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersStoreFeatureComponent } from './users-store-feature.component';

const routes: Routes = [{ path: '', component: UsersStoreFeatureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersStoreFeatureRoutingModule { }
