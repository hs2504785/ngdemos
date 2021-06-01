import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EshopComponent implements OnInit {
  user = {};
  constructor() {}

  ngOnInit(): void {}
}
