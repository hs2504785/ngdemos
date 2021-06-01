import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/auth/resources/auth';
import { AuthService } from '../../modules/auth/resources/auth.service';

@Component({
  selector: 'eshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userobserver = {
      next: user => {
        this.user = user;
      },
      error: err => console.error(err),
    };

    this.authService.user.subscribe(userobserver);
  }
}
