import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { TodoResolver } from './services/todo.resolver';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {
        path: 'no-entity',
        component: TodoListComponent,
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
      {
        path: 'todos-entity',
        loadChildren: () =>
          import('./todos-entity/todos-entity.module').then(
            m => m.TodosEntityModule,
          ),
        resolve: [TodoResolver],
      },
      {
        path: '',
        redirectTo: 'no-entity',
      },
    ],
  },

  // {
  //   path: '',
  //   component: TodoComponent,
  //   children: [
  //     {
  //       path: 'add',
  //       component: AddTodoComponent,
  //     },
  //     {
  //       path: 'edit/:id',
  //       component: EditTodoComponent,
  //     },
  //     {
  //       path: 'view/:id',
  //       component: ViewTodoComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
