import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Output() openMenu = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
