import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdbSampleComponent } from './idb-sample.component';


const routes: Routes = [
  { path: '', component: IdbSampleComponent }
];

@NgModule({
  declarations: [
    IdbSampleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IdbSampleModule { }
