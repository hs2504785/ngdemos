import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactListComponent,
    HeaderComponent,
    AddContactComponent,
  ],
  imports: [CommonModule, ContactsRoutingModule, FormsModule, DialogModule],
  providers: [DialogService],
})
export class ContactsModule {}
