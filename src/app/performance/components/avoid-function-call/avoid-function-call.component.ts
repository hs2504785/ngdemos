import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avoid-function-call',
  templateUrl: './avoid-function-call.component.html',
  styleUrls: ['./avoid-function-call.component.scss'],
})
export class AvoidFunctionCallComponent implements OnInit {
  EXAMPLE_DATA: any[] = [
    {
      weight: 1.0079,
      symbol: 'H',
    },
    {
      weight: 4.0026,
      symbol: 'He',
    },
    {
      weight: 6.941,
      symbol: 'Li',
    },
    {
      weight: 9.0122,
      symbol: 'Be',
    },
    {
      weight: 10.811,
      symbol: 'B',
    },
    {
      weight: 12.0107,
      symbol: 'C',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  returnFullSymbol(symbol: string) {
    console.log('Called ');
    switch (symbol) {
      case 'H':
        return 'Hydrogen';
      case 'He':
        return 'Hellium';
      case 'Li':
        return 'Lithium';
      case 'Be':
        return 'Beryllium';
      case 'B':
        return 'Boron';
      case 'C':
        return 'Carbon';
      default:
        return 'No Match';
    }
  }
}
