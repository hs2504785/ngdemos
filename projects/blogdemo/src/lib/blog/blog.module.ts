import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { PostListComponent } from './post-list/post-list.component';
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
import { PostComponent } from './post/post.component';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { UserDataService } from '../services/user-data.service';
import { PostDataService } from '../services/post-data.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{ path: ':userId', component: UserComponent }],
  },
];

export const userFeatureKey = 'User';
export const postFeatureKey = 'Post';

export const entityMetadata: EntityMetadataMap = {
  [userFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticAdd: true,
    },
  },
  [postFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticAdd: true,
    },
  },
};

@NgModule({
  declarations: [
    AdminComponent,
    PostListComponent,
    UserComponent,
    PostComponent,
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
  ],
})
export class BlogModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private userDataService: UserDataService,
    private postDataService: PostDataService,
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      userFeatureKey,
      this.userDataService,
    );
    this.entityDataService.registerService(
      postFeatureKey,
      this.postDataService,
    );
  }
}
