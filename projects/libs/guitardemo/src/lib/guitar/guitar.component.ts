import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GuitarInterface } from '../models/guitar.model';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.scss'],
})
export class GuitarComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>) {}
  inCart: boolean = false;

  addToCart(item: GuitarInterface) {
    // this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: GuitarInterface) {
    // this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }

  @Input() guitar: GuitarInterface;

  ngOnInit(): void {}
}
