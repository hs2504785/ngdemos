import { Component } from '@angular/core';
import { PostInterface } from 'projects/crud/src/lib/posts/models/post.interface';
import { PostService } from 'projects/crud/src/lib/posts/services/post.service';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { LocaleService } from './shared/services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts$: Observable<PostInterface[]>;
  locale$: Observable<string> = this.localeService.localeStore$;
  sub: Subscription;
  selectedLang;

  constructor(
    private dataService: DataService,
    private localeService: LocaleService,
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.updateLocale();
  }

  getPosts() {
    this.posts$ = this.dataService.getPosts();
  }

  updateLocale() {
    this.locale$.subscribe(lang => {
      this.selectedLang = lang;
      this.getPosts();
    });
  }
}
