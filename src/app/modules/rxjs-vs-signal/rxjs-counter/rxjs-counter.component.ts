import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsCounterComponent {

}
