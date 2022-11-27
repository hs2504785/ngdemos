import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noscamdemo',
  templateUrl: './noscamdemo.component.html',
  styleUrls: ['./noscamdemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoscamdemoComponent {
  title = 'view engine';
}
