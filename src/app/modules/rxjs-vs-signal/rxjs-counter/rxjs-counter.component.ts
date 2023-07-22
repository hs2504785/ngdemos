import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsCounterService } from '../services/rxjs-counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsCounterComponent {
  private sub: Subscription;
  private rxjsCounterService = inject(RxjsCounterService);
  count$ = this.rxjsCounterService.count$;
  double$ = this.rxjsCounterService.double$;
  triple$ = this.rxjsCounterService.triple$;
  combined$ = this.rxjsCounterService.combined$;
  over9000$ = this.rxjsCounterService.over9000$;
  message$ = this.rxjsCounterService.message$;

  increment() {
    this.rxjsCounterService.increment();
  }
}
