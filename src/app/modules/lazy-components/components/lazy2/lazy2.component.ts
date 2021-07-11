import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { Lazy2aComponent } from './lazy2a/lazy2a.component';
import { Lazy2bComponent } from './lazy2b/lazy2b.component';

@Component({
  selector: 'app-lazy2',
  templateUrl: './lazy2.component.html',
  styleUrls: ['./lazy2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lazy2Component implements OnInit {
  @ViewChild('childContainer', { read: ViewContainerRef, static: true })
  childContainer: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    const componentFactorya = this.cfr.resolveComponentFactory(Lazy2aComponent);
    const componentFactoryb = this.cfr.resolveComponentFactory(Lazy2bComponent);
    this.childContainer.clear();
    this.childContainer.createComponent(componentFactorya);
    this.childContainer.createComponent(componentFactoryb);
  }
}
