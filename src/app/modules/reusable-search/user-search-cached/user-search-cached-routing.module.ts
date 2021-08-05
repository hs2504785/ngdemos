import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchCachedComponent } from './user-search-cached.component';

const routes: Routes = [{ path: '', component: UserSearchCachedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSearchCachedRoutingModule { }
