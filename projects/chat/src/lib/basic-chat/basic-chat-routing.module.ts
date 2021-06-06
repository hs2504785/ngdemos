import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicChatComponent } from './basic-chat.component';

const routes: Routes = [
  {
    path: '',
    component: BasicChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicChatRoutingModule {}
