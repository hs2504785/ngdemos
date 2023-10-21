import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
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
export class ReusableFormGroupComponent implements OnInit, AfterViewInit {
  private fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: 'Hemant',
      email: 'hemant@gmail.com',
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.form.patchValue({
      name: 'Hemant 1',
      email: 'hemant@gmail.com 1',
      address: {
        state: 'Telangana 1',
        country: 'India 1',
        pin: 222222,
      },
    });
  }

  onSubmit() {
    console.log('FROM VAL', this.form.value);
  }
}
