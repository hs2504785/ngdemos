import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scam',
  templateUrl: './scam.component.html',
  styleUrls: ['./scam.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
