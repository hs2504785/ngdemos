import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { PerformanceComponent } from './performance.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { AvoidFunctionCallComponent } from './components/avoid-function-call/avoid-function-call.component';
import { ReturnSymbolPipe } from './pipes/return-symbol.pipe';
import { NgforTrackByComponent } from './components/ngfor-track-by/ngfor-track-by.component';
import { JustMatTableComponent } from './components/just-mat-table/just-mat-table.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { ToolbarModule } from '../shared/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    PerformanceComponent,
    AvoidFunctionCallComponent,
    ReturnSymbolPipe,
    NgforTrackByComponent,
    JustMatTableComponent,
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
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
export class PerformanceModule {}
