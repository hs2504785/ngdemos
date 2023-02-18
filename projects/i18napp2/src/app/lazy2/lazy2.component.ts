import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lazy2Component {

}
