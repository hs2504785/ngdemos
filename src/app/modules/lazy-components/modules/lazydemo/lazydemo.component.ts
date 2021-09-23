import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazydemo',
  templateUrl: './lazydemo.component.html',
  styleUrls: ['./lazydemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazydemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
