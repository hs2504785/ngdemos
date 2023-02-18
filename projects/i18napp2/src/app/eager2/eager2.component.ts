import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eager2',
  templateUrl: './eager2.component.html',
  styleUrls: ['./eager2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Eager2Component {

}
