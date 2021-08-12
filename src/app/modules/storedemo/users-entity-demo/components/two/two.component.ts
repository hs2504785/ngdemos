import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserEntityDemoInterface } from '../../models/user-entity-demo-interface';
import { UserEntityDemoStateInterface } from '../../state/user-entity-demo.reducer';
import { selectUserById } from '../../state/user-entity-demo.selectors';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent {
  user$: Observable<UserEntityDemoInterface> = this.store.pipe(
    select(selectUserById),
  );
  constructor(private store: Store<UserEntityDemoStateInterface>) {}
}
