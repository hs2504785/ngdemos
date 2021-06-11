import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Credentials } from '../../models/auth.interface';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // pending$ = this.store.select(fromAuth.selectLoginPagePending);
  // error$ = this.store.select(fromAuth.selectLoginPageError);
  pending$ = of(false);
  error$ = of(false);
  constructor(private store: Store, private router: Router) {}

  onSubmit(credentials: Credentials) {
    this.router.navigate(['/ebook']);
    // this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
