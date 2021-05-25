import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosEntityComponent } from './todos-entity.component';

const routes: Routes = [{ path: '', component: TodosEntityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosEntityRoutingModule { }
