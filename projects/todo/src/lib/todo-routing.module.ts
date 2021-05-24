import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    // resolve: [TodoResolver],
    children: [
      {
        path: 'add',
        component: AddTodoComponent,
      },
      {
        path: 'edit/:id',
        component: EditTodoComponent,
      },
      {
        path: 'view/:id',
        component: ViewTodoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
