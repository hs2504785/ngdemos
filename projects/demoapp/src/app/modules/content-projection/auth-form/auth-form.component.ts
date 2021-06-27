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
        <auth-message
          [style.display]="showMessage ? 'inline' : 'none'"
        ></auth-message>
        <auth-message
          [style.display]="showMessage ? 'inline' : 'none'"
        ></auth-message>
        <auth-message
          [style.display]="showMessage ? 'inline' : 'none'"
        ></auth-message>
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
export class AuthFormComponent
  implements AfterContentInit, OnDestroy, AfterViewInit
{
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;
  showMessage = false;
  sub: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.sub = this.remember.checked.subscribe(val => {
        this.showMessage = val;
      });
    }
  }

  ngAfterViewInit() {
    console.log(this.message);
    this.message.forEach(item => {
      item.days = 50;
    });
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
