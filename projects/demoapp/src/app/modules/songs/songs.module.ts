import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs.component';
import { Store } from './state/store';
import { SongsFavouritesComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongsService } from './services/songs.service';

@NgModule({
  declarations: [
    SongsComponent,
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongsListComponent,
  ],
  imports: [CommonModule, SongsRoutingModule],
  exports: [
    SongsFavouritesComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
  ],
  providers: [Store, SongsService],
})
export class SongsModule {}
