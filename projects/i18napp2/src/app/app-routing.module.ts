import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { MiscellaneousExampleComponent } from './miscellaneous-example/miscellaneous-example.component';

const routes: Routes = [
  { path: '', component: FeedbackComponent, pathMatch: 'full' },
  { path: 'miscellaneous-example', component: MiscellaneousExampleComponent },
  { path: 'lazy1', loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module) },
  { path: 'lazy2', loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module) },
  { path: 'eager1', loadChildren: () => import('./eager1/eager1.module').then(m => m.Eager1Module) },
  { path: 'eager2', loadChildren: () => import('./eager2/eager2.module').then(m => m.Eager2Module) },
  { path: '**', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
