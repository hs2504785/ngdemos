import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCs } from '../../../users-cs/models/user-cs-interface';
import { UserCsStore } from '../../../users-cs/services/user-cs-store.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourComponent {
  users$: Observable<UserCs[]> = this.userStore.top3users$;
  constructor(private userStore: UserCsStore) {}
}
