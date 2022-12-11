import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Observable } from 'rxjs';
import { defaultDialogConfig } from '../shared/dialogs/default-dialog-config';
import { UcardInterface } from './models/ucard-interface';
import { UcardService } from './services/ucard.service';
import { UcardDialogComponent } from './ucard-dialog/ucard-dialog.component';

@Component({
  selector: 'app-ucard',
  templateUrl: './ucard.component.html',
  styleUrls: ['./ucard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UcardComponent implements OnInit {
  users$: Observable<UcardInterface[]>;
  constructor(private ucardService: UcardService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.users$ = this.ucardService.getUcards();
  }

  removeCard() {
    console.log('REmove user');
  }

  addUserCard() {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Add Ucard User',
      mode: 'create',
    };

    this.dialog.open(UcardDialogComponent, dialogConfig);
  }

  openEditCard() {
    const dialogConfig = defaultDialogConfig();
    const user = { name: 'hemant' };
    dialogConfig.data = {
      dialogTitle: 'Edit User',
      user,
      mode: 'update',
    };

    this.dialog
      .open(UcardDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        console.log('Closed', res);
      });
  }
}
