import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersWsComponent } from './users-ws.component';

const routes: Routes = [{ path: '', component: UsersWsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersWsRoutingModule { }
