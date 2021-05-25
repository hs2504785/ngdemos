import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosEntityRoutingModule } from './todos-entity-routing.module';
import { TodosEntityComponent } from './todos-entity.component';


@NgModule({
  declarations: [
    TodosEntityComponent
  ],
  imports: [
    CommonModule,
    TodosEntityRoutingModule
  ]
})
export class TodosEntityModule { }
