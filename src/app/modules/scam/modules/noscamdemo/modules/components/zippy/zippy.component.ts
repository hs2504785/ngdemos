import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-zippycomp',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZippyComponent {
  @Input()
  label = 'Toggle';

  isExpanded = false;

  onToggle() {
    this.isExpanded = !this.isExpanded;
  }
}
