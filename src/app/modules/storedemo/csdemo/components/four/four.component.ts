import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
