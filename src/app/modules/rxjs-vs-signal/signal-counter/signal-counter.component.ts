import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalCounterService } from '../services/signal-counter.service';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalCounterComponent {
  private signalCounterService = inject(SignalCounterService);
  count = this.signalCounterService.count;
  double = this.signalCounterService.double;
  triple = this.signalCounterService.triple;
  combined = this.signalCounterService.combined;
  over9000 = this.signalCounterService.over9000;
  message = this.signalCounterService.message;

  increment() {
    this.signalCounterService.increment();
  }
}
