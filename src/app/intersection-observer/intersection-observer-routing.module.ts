import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntersectionObserverComponent } from './intersection-observer.component';

const routes: Routes = [{ path: '', component: IntersectionObserverComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntersectionObserverRoutingModule { }
