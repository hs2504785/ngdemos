import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reusable-search',
  templateUrl: './reusable-search.component.html',
  styleUrls: ['./reusable-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReusableSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
