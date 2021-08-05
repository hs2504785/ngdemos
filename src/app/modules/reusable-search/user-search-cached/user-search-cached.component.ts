import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCachedService } from '../services/user-cached.service';

@Component({
  selector: 'app-user-search-cached',
  templateUrl: './user-search-cached.component.html',
  styleUrls: ['./user-search-cached.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSearchCachedComponent implements OnInit {
  users$: Observable<string[]>;

  constructor(private userService: UserCachedService) {}

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

  searchUser(query: string) {
    this.userService.searchUser(query);
  }
}
