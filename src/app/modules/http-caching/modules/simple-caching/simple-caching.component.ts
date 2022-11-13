import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCachingService } from '../../services/http-caching.service';

@Component({
  selector: 'app-simple-caching',
  templateUrl: './simple-caching.component.html',
  styleUrls: ['./simple-caching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCachingComponent {
  countries$: Observable<any> = this.httpCachingService.getCountries();

  constructor(private httpCachingService: HttpCachingService) { }

}
