import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { ViewTodoComponent } from './components/view-todo/view-todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
// import { EffectsModule } from '@ngrx/effects';
// import { TodoEffects } from './state/todo.effects';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey, todoReducer } from './state/todo.reducer';

@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
    ViewTodoComponent,
  ],
  imports: [
    StoreModule.forFeature(todoFeatureKey, todoReducer),
    FormsModule,
    CommonModule,
    TodoRoutingModule,
    // EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
