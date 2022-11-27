import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZippyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
