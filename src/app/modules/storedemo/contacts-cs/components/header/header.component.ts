import { Component } from '@angular/core';
import { ContactsStore } from '../../state/contacts.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  search = false;

  constructor(private contactsStore: ContactsStore) {}

  showSearch() {
    this.search = true;
  }

  hideSearch() {
    this.search = false;
  }

  searchContacts(searchString: string) {
    this.contactsStore.patchState({ searchString });
  }

  addContact() {
    this.contactsStore.showAddDialog();
  }
}
