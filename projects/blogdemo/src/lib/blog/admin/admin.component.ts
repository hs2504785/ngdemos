import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/types';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  readonly users$: Observable<User[]>;
  readonly selectedUser = new FormControl();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.users$ = this.userService.entities$;

    this.users$.subscribe((users: User[]) => {
      if (users && users.length) {
        const id = +users[0].id;
        this.selectedUser.setValue(id);
        this.selectUser(id, 'preserve');
      }
    });
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
