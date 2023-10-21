import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class AddressFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  @Input({ required: true }) controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);
  get form() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.form.addControl(
      this.controlKey,
      this.fb.group({
        state: 'Telangana',
        country: 'India',
        pin: 237646,
      }),
    );
  }

  ngOnDestroy(): void {
    this.form.removeControl(this.controlKey);
  }
}
