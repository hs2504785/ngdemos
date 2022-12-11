import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsCsRoutingModule } from './contacts-cs-routing.module';
import { ContactsCsComponent } from './contacts-cs.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { HotToastModule } from '@ngneat/hot-toast';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ContactsCsComponent,
    HeaderComponent,
    ContactsComponent,
    AddContactComponent,
  ],
  imports: [
    CommonModule,
    ContactsCsRoutingModule,
    FormsModule,
    MatDialogModule,
    HotToastModule.forRoot(),
  ],
  providers: [DialogService],
})
export class ContactsCsModule {}
