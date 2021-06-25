import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-outside-clicks',
  templateUrl: './outside-clicks.component.html',
  styleUrls: ['./outside-clicks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutsideClicksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
