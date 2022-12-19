import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy-modals',
  templateUrl: './lazy-modals.component.html',
  styleUrls: ['./lazy-modals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyModalsComponent {

}
