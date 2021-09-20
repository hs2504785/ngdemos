import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderType } from './loader/models/loader-type.enum';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent implements OnInit {
  public loaderType = LoaderType.Loading;
  public toggleValue = false;
  progressValue = 25;

  constructor() {}

  ngOnInit(): void {}

  onToggle(val) {
    console.log('Emmitted value ', val);
  }

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }
}
