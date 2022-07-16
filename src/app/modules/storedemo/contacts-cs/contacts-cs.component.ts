import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-cs',
  templateUrl: './contacts-cs.component.html',
  styleUrls: ['./contacts-cs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsCsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
