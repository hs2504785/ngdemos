import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-workersample',
  templateUrl: './workersample.component.html',
  styleUrls: ['./workersample.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkersampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
