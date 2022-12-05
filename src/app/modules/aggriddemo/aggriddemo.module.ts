import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggriddemoRoutingModule } from './aggriddemo-routing.module';
import { AggriddemoComponent } from './aggriddemo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';

@NgModule({
  declarations: [AggriddemoComponent],
  imports: [
    CommonModule,
    AggriddemoRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    ToolbarModule,
  ],
})
export class AggriddemoModule {}
