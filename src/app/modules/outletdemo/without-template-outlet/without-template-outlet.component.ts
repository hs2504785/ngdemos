import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-without-template-outlet',
  templateUrl: './without-template-outlet.component.html',
  styleUrls: ['./without-template-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithoutTemplateOutletComponent {

}
