import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let styleLink = this.document.getElementById(
      'lazy-styles',
    ) as HTMLLinkElement;
    if (styleLink) {
      styleLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'lazy-styles';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
}
