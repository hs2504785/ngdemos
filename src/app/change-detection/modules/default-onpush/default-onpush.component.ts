import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-onpush',
  templateUrl: './default-onpush.component.html',
  styleUrls: ['./default-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultOnpushComponent {

}
