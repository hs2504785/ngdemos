import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy2a',
  templateUrl: './lazy2a.component.html',
  styleUrls: ['./lazy2a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lazy2aComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
