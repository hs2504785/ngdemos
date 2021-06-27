import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.scss'],
})
export class TemplateOutletComponent {
  ctx = {
    $implicit: 'Arya Singh',
    location: 'Ameenpur, India',
  };
}
