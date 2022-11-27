import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy1',
  templateUrl: './zippy1.component.html',
  styleUrls: ['./zippy1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Zippy1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
