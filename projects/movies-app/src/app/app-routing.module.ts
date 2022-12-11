import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  {
    path: 'movies',
    loadChildren: () =>
      import('./modules/movies/movies.module').then(m => m.MoviesModule),
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./modules/movie/movie.module').then(m => m.MovieModule),
  },
  {
    path: 'genres',
    loadChildren: () =>
      import('./modules/genres/genres.module').then(m => m.GenresModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
