import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onpush-async',
  templateUrl: './onpush-async.component.html',
  styleUrls: ['./onpush-async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushAsyncComponent {

}
