import { MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';

export function defaultDialogConfig() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '400px';

  return dialogConfig;
}
