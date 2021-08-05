import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService],
})
export class UserSearchComponent implements OnInit {
  users$: Observable<string[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

  searchUser(query: string) {
    this.userService.searchUser(query);
  }
}
