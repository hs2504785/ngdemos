import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
