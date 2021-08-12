import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
