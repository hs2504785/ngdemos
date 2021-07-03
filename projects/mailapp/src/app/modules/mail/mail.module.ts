import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailFolderResolver } from './services/mail-folder.resolver';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { MessageResolver } from './services/message.resolver';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolver,
        },
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        resolve: {
          message: MessageResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent,
  ],
  exports: [MailAppComponent],
})
export class MailModule {}
