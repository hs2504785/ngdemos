
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';

@NgModule({
  exports: [
    A11yModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTooltipModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class CustomMaterialModule { }