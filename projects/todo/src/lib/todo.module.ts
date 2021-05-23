import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    ViewTodoComponent,
  ],
  imports: [FormsModule, CommonModule, TodoRoutingModule],
  exports: [TodoComponent],
})
export class TodoModule {}
