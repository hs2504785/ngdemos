import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { DialogModule, DialogService } from '@ngneat/dialog';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactListComponent,
    HeaderComponent,
    AddContactComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    DialogModule.forRoot(),
  ],
  providers: [DialogService],
})
export class ContactsModule {}
