import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersCsComponent } from './users-cs.component';

const routes: Routes = [{ path: '', component: UsersCsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersCsRoutingModule { }
