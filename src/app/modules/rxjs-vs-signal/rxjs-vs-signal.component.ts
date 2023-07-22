import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-vs-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-vs-signal.component.html',
  styleUrls: ['./rxjs-vs-signal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsVsSignalComponent {

}
