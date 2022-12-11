import { CommonModule } from '@angular/common';
import { 
  ChangeDetectionStrategy, Component, OnInit, Self, NgModule, Input, Optional
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { Subscription } from 'rxjs';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() group: FormGroup = new FormGroup({});
  @Input() formControlName!: string;
  @Input() placeholder = 'Enter a value';
  @Input() options = [];
 
  control!: FormControl;
 
  subscriptions: Subscription[] = [];

  constructor(
    @Self() @Optional() public ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  //ControlValueAccessor interface
  writeValue(_: any) {  }

  registerOnChange(_: any) { }

  registerOnTouched(_: any) { }

  setDisabledState?(_: boolean) { }

  ngOnInit(): void {
    this.control = this.formControlName ? this.group.get(this.formControlName) as FormControl: new FormControl();;
  }
}

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSliderModule, FormsModule, ReactiveFormsModule],
  declarations: [SliderComponent],
  exports: [SliderComponent]
})
export class SliderModule {

}
