import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitChatComponent } from './chit-chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChitChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChitChatRoutingModule {}
