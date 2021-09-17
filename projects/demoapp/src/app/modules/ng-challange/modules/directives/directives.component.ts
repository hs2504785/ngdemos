import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  log() {
    console.log('Making users api call...');
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res);
    });
  }
}
