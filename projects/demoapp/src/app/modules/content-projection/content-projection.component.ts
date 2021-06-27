import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
})
export class ContentProjectionComponent implements OnDestroy {
  component: ComponentRef<AuthFormComponent>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  sub: Subscription;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(pagetTitle?) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.component = this.entry.createComponent(factory);

    this.component.instance.title = 'Create Account';
    this.sub = this.component.instance.submitted.subscribe(res => {
      console.log(res);
    });
    console.log(this.component);
  }

  destroyComponent() {
    this.component.destroy();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
