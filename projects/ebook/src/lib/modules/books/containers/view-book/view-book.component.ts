import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectBook } from '../../state/books.actions';

@Component({
  selector: 'lib-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewBookComponent {
  actionsSubscription: Subscription;

  constructor(store: Store, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map(params => selectBook({ id: params.id })))
      .subscribe(action => store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
