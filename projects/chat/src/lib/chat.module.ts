import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { BasicChatComponent } from './basic-chat/basic-chat.component';
import { ChitChatComponent } from './chit-chat/chit-chat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      {
        path: 'basic-chat',
        loadChildren: () =>
          import('./basic-chat/basic-chat.module').then(m => m.BasicChatModule),
      },
      {
        path: 'chit-chat',
        loadChildren: () =>
          import('./chit-chat/chit-chat.module').then(m => m.ChitChatModule),
      },
      {
        path: '',
        redirectTo: 'basic-chat',
      },
    ],
  },
];

@NgModule({
  declarations: [ChatComponent, BasicChatComponent, ChitChatComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [ChatComponent],
})
export class ChatModule {}
