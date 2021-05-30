import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { PostDataService } from './services/post-data.service';

export const postFeatureKey = 'post-ngrx-data';

export const entityMetadata: EntityMetadataMap = {
  [postFeatureKey]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
    },
  },
};

@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
    PostComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
  providers: [PostDataService],
})
export class PostsModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private postDataService: PostDataService,
  ) {
    this.eds.registerMetadataMap(entityMetadata);

    this.entityDataService.registerService(
      postFeatureKey,
      this.postDataService,
    );
  }
}
