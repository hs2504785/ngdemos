import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitardemoComponent } from './guitardemo.component';
import { GuitarsListComponent } from './guitars-list/guitars-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { GuitarEffects } from './state/guitar.effects';
import { StoreModule } from '@ngrx/store';
import { guitarFeatureKey, guitarReducer } from './state/guitar.reducer';
import { CommonModule } from '@angular/common';
import { GuitarComponent } from './guitar/guitar.component';

const routes: Routes = [
  {
    path: '',
    component: GuitardemoComponent,
    children: [
      // {
      //   path: 'blog',
      //   loadChildren: () =>
      //     import('./blog/blog.module').then(m => m.BlogModule),
      //   resolve: [BlogResolver],
      // },
      // {
      //   path: '',
      //   redirectTo: 'blog',
      // },
    ],
  },
];

@NgModule({
  declarations: [
    GuitardemoComponent,
    HeaderComponent,
    HomeComponent,
    GuitarsListComponent,
    GuitarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(guitarFeatureKey, guitarReducer),
    EffectsModule.forFeature([GuitarEffects]),
  ],
})
export class GuitardemoModule {}
