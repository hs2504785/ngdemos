import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store } from '../state/store';

export interface Song {
  _id: number;
  name: string;
  listened: boolean;
  favourite: boolean;
}

@Injectable()
export class SongsService {
  API_URL = 'http://localhost:3000/playlist';
  getPlaylist$: Observable<Song[]> = this.http
    .get<Song[]>(this.API_URL)
    .pipe(tap(data => this.store.set('playlist', data)));

  constructor(private http: HttpClient, private store: Store) {}

  toggle(event: any) {
    this.http
      .put(`${this.API_URL}/${event.track._id}`, event.track)
      .subscribe((track: Song) => {
        const value = this.store.value.playlist;

        const playlist = value.map((song: Song) => {
          if (event.track._id === song._id) {
            return { ...song, ...event.track };
          } else {
            return song;
          }
        });

        this.store.set('playlist', playlist);
      });
  }
}
