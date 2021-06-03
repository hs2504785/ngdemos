import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersStoreComponent } from './users-store.component';

const routes: Routes = [{ path: '', component: UsersStoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersStoreRoutingModule { }
