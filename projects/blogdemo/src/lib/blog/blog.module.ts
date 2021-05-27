import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: ':userId', component: UserComponent }],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    PostListComponent,
    PostComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    // EffectsModule.forFeature([UserEffects, PostEffects]),
    // StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer)
  ],
})
export class BlogModule {}
