import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scamdemo',
  templateUrl: './scamdemo.component.html',
  styleUrls: ['./scamdemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScamdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
