import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
