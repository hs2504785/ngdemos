import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LazyDialogService } from 'src/app/shared/services/lazy-dialog.service';

@Component({
  selector: 'app-lazy-modals',
  templateUrl: './lazy-modals.component.html',
  styleUrls: ['./lazy-modals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyModalsComponent {

  constructor(public lazyDialog: LazyDialogService) {}

}
