import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserEntityDemoStateInterface } from '../../state/user-entity-demo.reducer';
import { selectEntityDemoUsersCount } from '../../state/user-entity-demo.selectors';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeComponent {
  usersCount$: Observable<number> = this.store.pipe(
    select(selectEntityDemoUsersCount),
  );
  constructor(private store: Store<UserEntityDemoStateInterface>) {}
}
