import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UcardComponent } from './ucard.component';

const routes: Routes = [{ path: '', component: UcardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UcardRoutingModule { }
