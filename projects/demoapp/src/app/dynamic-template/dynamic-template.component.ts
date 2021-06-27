import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.scss'],
})
export class DynamicTemplateComponent implements AfterViewInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl', { read: TemplateRef }) tmpl: TemplateRef<any>;
  @ViewChild('tmp2', { read: TemplateRef }) tmpl2: TemplateRef<any>;

  ngAfterViewInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Hemant Kumar Singh',
      location: 'Bangalore, India',
    });
  }

  addTemplate() {
    this.entry && this.entry.createEmbeddedView(this.tmpl2);
  }
}
