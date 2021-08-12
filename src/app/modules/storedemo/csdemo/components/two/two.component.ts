import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCs } from '../../../users-cs/models/user-cs-interface';
import { UserCsStore } from '../../../users-cs/services/user-cs-store.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent {
  user$: Observable<UserCs> = this.userStore.userById$;
  constructor(private userStore: UserCsStore) {}
}
