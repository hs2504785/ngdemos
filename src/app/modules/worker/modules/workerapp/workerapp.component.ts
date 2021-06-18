import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lib-workerapp',
  templateUrl: './workerapp.component.html',
  styleUrls: ['./workerapp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkerappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
