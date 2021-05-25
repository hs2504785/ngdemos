import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosEntityRoutingModule } from './todos-entity-routing.module';
import { TodosEntityComponent } from './todos-entity.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { StoreModule } from '@ngrx/store';
import {
  entityTodoesFeatureKey,
  entityTodoReducer,
} from './state/todo.reducer';

@NgModule({
  declarations: [
    TodosEntityComponent,
    AddTodoComponent,
    EditTodoComponent,
    ViewTodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodosEntityRoutingModule,
    StoreModule.forFeature(entityTodoesFeatureKey, entityTodoReducer),
  ],
})
export class TodosEntityModule {}
