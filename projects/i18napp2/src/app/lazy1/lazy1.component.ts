import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lazy1Component {

}
