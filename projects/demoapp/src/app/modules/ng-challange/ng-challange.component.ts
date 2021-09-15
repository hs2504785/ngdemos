import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccordionItemInterface } from '../../components/accordian/accordian-item-interface';

@Component({
  selector: 'app-ng-challange',
  templateUrl: './ng-challange.component.html',
  styleUrls: ['./ng-challange.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgChallangeComponent implements OnInit {
  public accordionItems: AccordionItemInterface[] = [
    {
      title: 'Example 1',
      content: 'Exampled Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Exampled Content 2',
      isExpanded: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
