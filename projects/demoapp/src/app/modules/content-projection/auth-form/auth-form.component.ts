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
          <input type="email" name="email" ngModel #email />
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
      .email {
        border-color: #9f72e6;
      }
    `,
  ],
})
export class AuthFormComponent
  implements AfterContentInit, OnDestroy, AfterViewInit
{
  @ViewChild('email') email: ElementRef;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;
  showMessage = false;
  sub: Subscription;

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

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
    console.log(this.email);
    this.renderer.setAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter your email address',
    );
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.renderer.selectRootElement(this.email.nativeElement).focus();
    // this.email.nativeElement.setAttribute(
    //   'placeholder',
    //   'Enter your email address',
    // );
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    this.message.forEach(item => {
      item.days = 50;
    });
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
