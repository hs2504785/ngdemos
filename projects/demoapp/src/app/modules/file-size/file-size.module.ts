import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileSizeRoutingModule } from './file-size-routing.module';
import { FileSizeComponent } from './file-size.component';
import { FileSizePipe } from 'projects/libs/shared/src/lib/pipes/file-size.pipe';

@NgModule({
  declarations: [FileSizeComponent, FileSizePipe],
  imports: [CommonModule, FileSizeRoutingModule],
})
export class FileSizeModule {}
