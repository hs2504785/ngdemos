import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GuitarInterface } from '../models/guitar.model';
import { getItems } from '../state/guitar.actions';
import { GuitarStateInterface } from '../state/guitar.reducer';
import { selectGuitars } from '../state/guitar.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bannersIndex: number[] = [1, 2, 3, 4];
  items$: Observable<GuitarInterface[]> = this.store.pipe(
    select(selectGuitars),
  );
  constructor(private store: Store<GuitarStateInterface>) {}

  ngOnInit(): void {
    this.store.dispatch(getItems());
  }
}
