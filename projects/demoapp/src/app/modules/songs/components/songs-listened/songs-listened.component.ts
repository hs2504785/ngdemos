import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { SongsService } from '../../services/songs.service';
import { Store } from '../../state/store';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <songs-list [list]="listened$ | async" (toggle)="onToggle($event)">
        Played
      </songs-list>
    </div>
  `,
})
export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]>;

  constructor(private store: Store, private songsService: SongsService) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist').pipe(
      filter(Boolean),
      map((playlist: any[]) => playlist.filter(track => track.listened)),
    );
  }

  onToggle(event) {
    this.songsService.toggle(event);
  }
}
