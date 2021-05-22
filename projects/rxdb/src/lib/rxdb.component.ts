import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './services/database.service';

@Component({
  selector: 'lib-rxdb',
  templateUrl: './rxdb.component.html',
  styles: [],
})
export class RxdbComponent implements OnInit {
  constructor(private dbService: DatabaseService) {}

  ngOnInit(): void {
    console.log(this.dbService);
  }
}
