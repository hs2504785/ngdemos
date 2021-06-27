import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  OnDestroy,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterViewInit,
  ContentChild,
  ViewChildren,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from './auth-form.interface';
import { AuthMessageComponent } from './auth-message.component';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3>{{ title }}</h3>
        <label>
          Email address
          <input type="email" name="email" ngModel #email />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <button type="submit">
          {{ title }}
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      form {
        flex: 1 0;
        padding: 0 40px;
      }

      input {
        display: block;
        border: none;
        background: #ffffff;
        font-size: 13px;
        padding: 6px 30px 6px 10px;
        border-radius: 1px;
        border: 1px solid #eeeeee;
      }
      label {
        margin-bottom: 20px;
      }
      h3 {
        margin-bottom: 20px;
      }
    `,
  ],
})
export class AuthFormComponent {
  @Input() title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
