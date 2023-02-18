import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { MiscellaneousExampleComponent } from './miscellaneous-example/miscellaneous-example.component';

const routes: Routes = [
  { path: '', component: FeedbackComponent, pathMatch: 'full' },
  { path: 'miscellaneous-example', component: MiscellaneousExampleComponent },
  { path: '**', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
