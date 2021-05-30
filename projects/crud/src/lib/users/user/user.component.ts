import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'lib-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$: Observable<UserInterface>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    const currentUserId = this.route.snapshot.paramMap.get('id');
    this.user$ = this.userService.getUserByIdFromCache(currentUserId);
  }
}
