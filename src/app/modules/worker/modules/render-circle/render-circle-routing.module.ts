import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderCircleComponent } from './render-circle.component';

const routes: Routes = [{ path: '', component: RenderCircleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenderCircleRoutingModule { }
