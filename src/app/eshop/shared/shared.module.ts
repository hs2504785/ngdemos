import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { CourseListComponent } from './course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { PaginationButtonsWidgetComponent } from './pagination-buttons-widget/pagination-buttons-widget.component';

@NgModule({
  declarations: [PaginationButtonsWidgetComponent],
  imports: [
    CommonModule,
    // NgxSpinnerModule,
    // AccordionModule.forRoot(),
    RouterModule,
  ],
  exports: [PaginationButtonsWidgetComponent],
})
export class SharedModule {}
