import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbookComponent } from './ebook.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './modules/auth/services/auth.guard';
import { StoreModule } from '@ngrx/store';
import { layoutFeatureKey, layoutReducer } from './state/layout.reducer';

const routes: Routes = [
  {
    path: '',
    component: EbookComponent,
    children: [
      {
        path: 'books',
        loadChildren: () =>
          import('./modules/books/books.module').then(m => m.BooksModule),
        canActivate: [AuthGuard],
      },
      // {
      //   path: 'users',
      //   loadChildren: () =>
      //     import('./users/users.module').then(m => m.UsersModule),
      //   resolve: {
      //     users: UserResolver,
      //   },
      // },
      // {
      //   path: 'counter',
      //   loadChildren: () =>
      //     import('./counter/counter.module').then(m => m.CounterModule),
      // },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    EbookComponent,
    SidenavComponent,
    ToolbarComponent,
    NavItemComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    StoreModule.forFeature(layoutFeatureKey, layoutReducer),
  ],
  exports: [EbookComponent],
})
export class EbookModule {}
