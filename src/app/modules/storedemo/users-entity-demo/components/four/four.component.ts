import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserEntityDemoInterface } from '../../models/user-entity-demo-interface';
import { UserEntityDemoStateInterface } from '../../state/user-entity-demo.reducer';
import { selectTop3Users } from '../../state/user-entity-demo.selectors';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FourComponent {
  users$: Observable<UserEntityDemoInterface[]> = this.store.pipe(
    select(selectTop3Users),
  );
  constructor(private store: Store<UserEntityDemoStateInterface>) {}
}
