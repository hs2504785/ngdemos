import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialDepsModule } from '../material-deps.module';

import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import * as fromPost from './post/post.reducer';
import { PostEffects } from './post/post.effects';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: ':userId', component: UserComponent }],
  },
];

@NgModule({
  declarations: [AdminComponent, PostComponent, UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialDepsModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects, PostEffects]),
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer),
  ],
})
export class BlogModule {}
