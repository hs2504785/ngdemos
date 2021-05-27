import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { users } from '../../mocks/data';
import { User } from '../../models/types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  readonly users$: Observable<User[]>;
  readonly selectedUser = new FormControl();

  constructor(
    // userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.users$ = of(users);
    // this.users$ = combineLatest(
    //   userService.users,
    //   userService.currentUserId
    // ).pipe(
    //   tap(([users, userId]) => {
    //     if (users.length) {
    //       const id = +(userId ?? users[0].id);
    //       this.selectedUser.setValue(id);
    //       this.selectUser(id, 'preserve');
    //     }
    //   }),
    //   map(([users]) => users)
    // );
  }

  selectUser(id: number, queryParamsHandling: QueryParamsHandling = 'merge') {
    setTimeout(() => {
      // update the url after a delay to allow the initial
      // navigation to complete
      void this.router.navigate([+id], {
        relativeTo: this.route,
        queryParamsHandling,
      });
    });
  }
}
