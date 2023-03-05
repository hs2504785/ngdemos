import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">HomeComponent</button>
    <h2>Home page</h2>
    <app-component-one></app-component-one>
    <app-component-two></app-component-two>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  logChangeDetection() {
    console.log('HomeComponent rendered');
    return true;
  }
}
