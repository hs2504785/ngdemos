import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-with-template-outlet',
  templateUrl: './with-template-outlet.component.html',
  styleUrls: ['./with-template-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithTemplateOutletComponent {

}
