import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEntityComponent } from './users-entity.component';

const routes: Routes = [{ path: '', component: UsersEntityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersEntityRoutingModule { }
