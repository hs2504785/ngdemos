import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18nhomeComponent } from './i18nhome.component';

const routes: Routes = [{ path: '', component: I18nhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I18nhomeRoutingModule { }
