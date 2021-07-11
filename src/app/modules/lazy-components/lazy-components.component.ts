import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy-components',
  templateUrl: './lazy-components.component.html',
  styleUrls: ['./lazy-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
