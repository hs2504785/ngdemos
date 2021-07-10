import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChitChatRoutingModule } from './chit-chat-routing.module';
import { ChitChatComponent } from './chit-chat.component';

@NgModule({
  declarations: [ChitChatComponent],
  imports: [CommonModule, ChitChatRoutingModule],
})
export class ChitChatModule {}
