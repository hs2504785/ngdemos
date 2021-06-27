import { Component, OnInit } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
})
export class ContentProjectionComponent {
  remember = false;
  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.remember);
  }

  rememberUser(val) {
    this.remember = true;
  }
}
