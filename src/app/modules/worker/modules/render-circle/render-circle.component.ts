import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-render-circle',
  templateUrl: './render-circle.component.html',
  styleUrls: ['./render-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
