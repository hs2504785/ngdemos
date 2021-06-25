import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-jquery-plugin',
  templateUrl: './jquery-plugin.component.html',
  styleUrls: ['./jquery-plugin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JqueryPluginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
