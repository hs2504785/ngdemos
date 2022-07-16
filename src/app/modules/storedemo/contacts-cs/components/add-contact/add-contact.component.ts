import { Component } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent {
  name = '';
  phone = '';

  constructor(public ref: DialogRef) {}

  add() {
    if (!this.phone || !this.name) return;
    this.ref.close({ name: this.name, phone: this.phone });
  }
}
