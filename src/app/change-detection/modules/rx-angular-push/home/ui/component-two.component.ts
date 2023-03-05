import { AsyncPipe, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DummyService } from '../../shared/data-access/dummy.service';
import { CoolButtonComponent } from '../../shared/ui/cool-button.component';
import { LetModule } from '@rx-angular/template/let';
import { PushModule } from '@rx-angular/template/push';

@Component({
  selector: 'app-component-two',
  imports: [CoolButtonComponent, NgIf, AsyncPipe, PushModule, LetModule],
  template: `
    <ng-container *rxLet="dummyService.dummyObs$ as val">
      {{ val }}
    </ng-container>

    <p>{{ dummyService.dummyObs$ | push }}</p>

    <ng-container *ngIf="logChangeDetection()"></ng-container>
    <button (click)="({})">ComponentTwo</button>
    <p>Component two</p>
    <app-cool-button></app-cool-button>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentTwo {
  constructor(public dummyService: DummyService) {}

  logChangeDetection() {
    console.log('ComponentTwo rendered');
    return true;
  }
}
