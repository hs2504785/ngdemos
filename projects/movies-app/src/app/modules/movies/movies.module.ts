import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { PaginatorModule } from 'primeng/paginator';
import { ItemModule } from '../item/item.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PaginatorModule,
    ItemModule,
  ],
})
export class MoviesModule {}
