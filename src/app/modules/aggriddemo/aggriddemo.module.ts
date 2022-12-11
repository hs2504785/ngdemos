import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggriddemoRoutingModule } from './aggriddemo-routing.module';
import { AggriddemoComponent } from './aggriddemo.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
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
