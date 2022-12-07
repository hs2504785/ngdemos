import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-simple',
  templateUrl: './ag-simple.component.html',
  styleUrls: ['./ag-simple.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgSimpleComponent {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
