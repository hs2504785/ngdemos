import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { SharedModule } from '../../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    LoaderComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
  ],
  imports: [CommonModule, SharedModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
