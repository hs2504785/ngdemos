import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() public isOn = false;
  @Output() toggleChange = new EventEmitter();

  public toggle() {
    this.isOn = !this.isOn;
    this.toggleChange.emit(this.isOn);
  }
}
