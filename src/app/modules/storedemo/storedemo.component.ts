import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-storedemo',
  templateUrl: './storedemo.component.html',
  styleUrls: ['./storedemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoredemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
