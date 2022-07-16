import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsCsComponent } from './contacts-cs.component';

const routes: Routes = [{ path: '', component: ContactsCsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsCsRoutingModule { }
