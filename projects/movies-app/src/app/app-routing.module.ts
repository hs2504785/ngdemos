import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'movies',
  //   component: MoviesComponent,
  // },
  // {
  //   path: 'movies/genres/:genreId',
  //   component: MoviesComponent,
  // },
  // {
  //   path: 'movie/:id',
  //   component: MovieComponent,
  // },
  // {
  //   path: 'genres',
  //   component: GenresComponent,
  // },
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
