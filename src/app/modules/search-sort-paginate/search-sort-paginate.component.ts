import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-sort-paginate',
  templateUrl: './search-sort-paginate.component.html',
  styleUrls: ['./search-sort-paginate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSortPaginateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
