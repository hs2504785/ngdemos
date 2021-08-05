import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { CarSearchService } from '../services/car-search.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CarSearchService],
})
export class CarSearchComponent implements OnInit {
  cars$: Observable<string[]>;

  constructor(private carSearchService: CarSearchService) {}

  ngOnInit() {
    this.cars$ = this.carSearchService.cars$;
  }

  searchCars(query: string) {
    this.carSearchService.searchCars(query);
  }
}
