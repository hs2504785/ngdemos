import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesComponent {
  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];
  // public html = '<a href="https://www.YouTube.com/Codingtutorials360" target="blank">YouTube </a>';
  // public stringArray: string[] = ['Courses', 'YouTube', 'Twitter', 'LinkedIn'];
  // public objectArray: { [key: string]: string; }[] = [
  //   { content: 'Courses' },
  //   { content: 'YouTube' },
  //   { content: 'Twitter' },
  //   { content: 'LinkedIn' },
  // ];
  public modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }
  public reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
