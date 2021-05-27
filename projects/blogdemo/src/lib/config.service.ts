import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { selectTitle, State, updateTitle } from 'src/app/reducers';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  title = this.store.pipe(select(selectTitle));

  constructor(private store: Store<State>) {}

  setTitle(title: string) {
    this.store.dispatch(updateTitle({ title }));
  }
}
