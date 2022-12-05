import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-sorting',
  templateUrl: './ag-sorting.component.html',
  styleUrls: ['./ag-sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgSortingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
