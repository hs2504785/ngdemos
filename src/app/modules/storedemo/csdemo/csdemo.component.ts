import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-csdemo',
  templateUrl: './csdemo.component.html',
  styleUrls: ['./csdemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CsdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
