import { Component } from '@angular/core';
import { Contact } from '../../models/contact.interface';
import { ContactsStore } from '../../state/contacts.store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts$ = this.contactsStore.filteredContacts$;

  constructor(private contactsStore: ContactsStore) {}

  deleteContact(contact: Contact) {
    this.contactsStore.deleteContact(contact);
  }
}
