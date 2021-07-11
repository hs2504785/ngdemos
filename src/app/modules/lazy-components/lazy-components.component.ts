import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

@Component({
  selector: 'app-lazy-components',
  templateUrl: './lazy-components.component.html',
  styleUrls: ['./lazy-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyComponentsComponent {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    const { Lazy1Component } = await import(
      './components/lazy1/lazy1.component'
    );
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component),
    );
  }

  async getLazy2() {
    this.viewContainerRef.clear();
    const { Lazy2Component } = await import(
      './components/lazy2/lazy2.component'
    );
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component),
    );
  }
}
