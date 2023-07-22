import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalCounterComponent {

}
