import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { BlogdemoComponent } from './blogdemo.component';
import { BlogResolver } from './services/blog.resolver';
import { PostDataService } from './services/post-data.service';
import { UserDataService } from './services/user-data.service';
const routes: Routes = [
  {
    path: '',
    component: BlogdemoComponent,
    children: [
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then(m => m.BlogModule),
        resolve: [BlogResolver],
      },
      {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
      },
    ],
  },
];

@NgModule({
  declarations: [BlogdemoComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ],
  exports: [BlogdemoComponent],
  providers: [UserDataService, PostDataService, BlogResolver],
})
export class BlogdemoModule {}
