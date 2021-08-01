import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GuitarInterface } from '../models/guitar.model';
import { selectCart } from '../state/guitar.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart$: Observable<GuitarInterface[]> = this.store.pipe(select(selectCart));
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}
}
