import { Component, Input, OnInit } from '@angular/core';
import { GuitarInterface } from '../models/guitar.model';

@Component({
  selector: 'app-guitars-list',
  templateUrl: './guitars-list.component.html',
  styleUrls: ['./guitars-list.component.scss'],
})
export class GuitarsListComponent implements OnInit {
  @Input() guitars: GuitarInterface[] = [];
  constructor() {}

  ngOnInit(): void {}
}
