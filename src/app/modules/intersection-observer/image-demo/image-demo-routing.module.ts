import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDemoComponent } from './image-demo.component';

const routes: Routes = [{ path: '', component: ImageDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageDemoRoutingModule { }
