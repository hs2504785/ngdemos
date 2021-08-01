import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart = [];
  constructor(private store: Store<any>) {
    this.store
      .pipe(select('guitar'))
      .subscribe(state => (this.cart = state.cart));
  }

  ngOnInit(): void {}
}
