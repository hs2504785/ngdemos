import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lazy-components',
  templateUrl: './lazy-components.component.html',
  styleUrls: ['./lazy-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyComponentsComponent {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  async getLazy1() {
    this.entry.clear();
    const { Lazy1Component } = await import(
      './components/lazy1/lazy1.component'
    );
    this.entry.createComponent(
      this.cfr.resolveComponentFactory(Lazy1Component),
    );
  }

  async getLazy2() {
    this.entry.clear();
    const { Lazy2Component } = await import(
      './components/lazy2/lazy2.component'
    );
    this.entry.createComponent(
      this.cfr.resolveComponentFactory(Lazy2Component),
    );
  }
}
