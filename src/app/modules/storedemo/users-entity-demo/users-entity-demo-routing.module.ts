import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEntityDemoComponent } from './users-entity-demo.component';

const routes: Routes = [{ path: '', component: UsersEntityDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersEntityDemoRoutingModule { }
