import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpCachingService } from './services/http-caching.service';

@Component({
  selector: 'app-http-caching',
  templateUrl: './http-caching.component.html',
  styleUrls: ['./http-caching.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpCachingComponent {}
