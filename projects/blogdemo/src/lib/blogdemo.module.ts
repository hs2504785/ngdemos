import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { BlogdemoComponent } from './blogdemo.component';
const routes: Routes = [
  {
    path: '',
    component: BlogdemoComponent,
    children: [
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then(m => m.BlogModule),
      },
      {
        path: '',
        redirectTo: 'blog',
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
    // StoreModule.forFeature('blogModule', reducers),
    // StoreModule.forFeature(titleFeatureKey, titleReducer),
  ],
  exports: [BlogdemoComponent],
})
export class BlogdemoModule {}
