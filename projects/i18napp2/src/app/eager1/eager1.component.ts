import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eager1',
  templateUrl: './eager1.component.html',
  styleUrls: ['./eager1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Eager1Component {

}
