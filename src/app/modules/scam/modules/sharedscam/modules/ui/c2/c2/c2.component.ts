import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
