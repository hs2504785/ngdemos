import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleCachingService } from './services/simple-caching.service';

@Component({
  selector: 'app-simple-caching-demo',
  templateUrl: './simple-caching-demo.component.html',
  styleUrls: ['./simple-caching-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCachingDemoComponent {

  countries$: Observable<any> = this.httpCachingService.getCountries();

  constructor(private httpCachingService: SimpleCachingService) { }
}
