import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';

@NgModule({
  declarations: [CrudComponent],
  imports: [CommonModule, CrudRoutingModule],
  exports: [CrudComponent],
})
export class CrudModule {}
