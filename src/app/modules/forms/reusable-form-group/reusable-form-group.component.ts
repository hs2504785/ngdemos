import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';

@Component({
  selector: 'app-reusable-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddressFormComponent],
  templateUrl: './reusable-form-group.component.html',
  styleUrls: ['./reusable-form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReusableFormGroupComponent {
  private fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: 'Hemant',
      email: 'hemant@gmail.com',
      address: this.fb.group({
        state: 'Telangana',
        country: 'India',
        pin: 237646,
      }),
    });
  }

  onSubmit() {
    console.log('FROM VAL', this.form.value);
  }
}
