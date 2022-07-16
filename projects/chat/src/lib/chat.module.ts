import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
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
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  declarations: [ChatComponent],
  imports: [RouterModule.forChild(routes)],
})
export class ChatModule {}
