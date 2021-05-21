import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { RxdbComponent } from './rxdb.component';

const routes: Routes = [
  {
    path: '',
    component: RxdbComponent,
  },
];

@NgModule({
  declarations: [RxdbComponent],
  imports: [MatButtonModule, RouterModule.forChild(routes)],
  exports: [RxdbComponent],
})
export class RxdbModule {}
