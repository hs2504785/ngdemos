import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy2b',
  templateUrl: './lazy2b.component.html',
  styleUrls: ['./lazy2b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lazy2bComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
