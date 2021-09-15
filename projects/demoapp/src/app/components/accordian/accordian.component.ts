import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { AccordionItemInterface } from './accordian-item-interface';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordianComponent implements OnInit {
  @Input() public items: AccordionItemInterface[] = [];

  public toggle(item: AccordionItemInterface): void {
    item.isExpanded = !item.isExpanded;
  }
  constructor() {}

  ngOnInit(): void {}
}
