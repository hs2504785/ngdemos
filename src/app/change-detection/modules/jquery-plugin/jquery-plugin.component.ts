import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewChecked,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-jquery-plugin',
  templateUrl: './jquery-plugin.component.html',
  styleUrls: ['./jquery-plugin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JqueryPluginComponent implements OnInit, AfterViewChecked {
  displayOptimized = false;
  color: string;

  constructor() {}

  ngOnInit() {}

  showOptimized() {
    this.displayOptimized = true;
  }

  showRegular() {
    this.displayOptimized = false;
  }

  onChange(color: string) {
    this.color = color;
  }

  ngAfterViewChecked() {
    console.log('View checked!');
  }

  hello() {
    console.log('Hello');
  }
}
