import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rxjs-vs-signal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './rxjs-vs-signal.component.html',
  styleUrls: ['./rxjs-vs-signal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsVsSignalComponent {}
