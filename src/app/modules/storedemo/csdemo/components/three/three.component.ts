import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCsStore } from '../../../users-cs/services/user-cs-store.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeComponent {
  usersCount$: Observable<number> = this.userStore.usersCount$;
  constructor(private userStore: UserCsStore) {}
}
