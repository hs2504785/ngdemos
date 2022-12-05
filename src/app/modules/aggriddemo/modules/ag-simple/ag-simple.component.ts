import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-simple',
  templateUrl: './ag-simple.component.html',
  styleUrls: ['./ag-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
