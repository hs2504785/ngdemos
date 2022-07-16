import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ContactsStore } from './state/contacts.store';

@Component({
  selector: 'app-contacts-cs',
  templateUrl: './contacts-cs.component.html',
  styleUrls: ['./contacts-cs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContactsStore],
})
export class ContactsCsComponent {
  constructor() {}
}
