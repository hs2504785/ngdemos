import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view" *ngIf="message | async as message">
      <h2>{{ message.from }}</h2>
      <p>{{ message.full }}</p>
    </div>
  `
})
export class MailViewComponent {
  message: Observable<Mail> = this.route.data.pipe(
    pluck('message')
  );
  constructor(private route: ActivatedRoute) {}
}
