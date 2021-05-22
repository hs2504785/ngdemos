import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { RxdbComponent } from './rxdb.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: RxdbComponent,
  },
];

@NgModule({
  declarations: [RxdbComponent, TodoListComponent],
  imports: [CommonModule, MatButtonModule, RouterModule.forChild(routes)],
  exports: [RxdbComponent],
})
export class RxdbModule {}
