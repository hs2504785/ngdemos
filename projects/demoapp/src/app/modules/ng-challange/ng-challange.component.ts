import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ng-challange',
  templateUrl: './ng-challange.component.html',
  styleUrls: ['./ng-challange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgChallangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
