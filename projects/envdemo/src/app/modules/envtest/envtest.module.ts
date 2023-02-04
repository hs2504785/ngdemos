import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EnvtestComponent } from './envtest.component';


const routes: Routes = [
  { path: '', component: EnvtestComponent }
];

@NgModule({
  declarations: [
    EnvtestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EnvtestModule { }
