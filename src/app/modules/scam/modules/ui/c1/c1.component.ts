import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
