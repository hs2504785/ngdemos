import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  OnDestroy,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel />
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel />
        </label>
        <ng-content select="auth-remember"></ng-content>
        <div *ngIf="showMessage">You will be logged in for 30 days</div>
        <ng-content select="button"></ng-content>
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
export class AuthFormComponent implements AfterContentInit, OnDestroy {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;
  showMessage = false;
  sub: Subscription;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    console.log(this.remember);

    if (this.remember.length) {
      this.remember.forEach(item => {
        this.sub = item.checked.subscribe(val => {
          this.showMessage = val;
        });
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
