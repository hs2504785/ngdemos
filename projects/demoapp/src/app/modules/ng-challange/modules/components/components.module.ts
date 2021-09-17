import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { SharedModule } from '../../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    LoaderComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    QuoteComponent,
    ToggleComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
  ],
  imports: [CommonModule, SharedModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
