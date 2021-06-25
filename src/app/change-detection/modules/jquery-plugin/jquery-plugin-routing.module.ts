import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JqueryPluginComponent } from './jquery-plugin.component';

const routes: Routes = [{ path: '', component: JqueryPluginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JqueryPluginRoutingModule { }
