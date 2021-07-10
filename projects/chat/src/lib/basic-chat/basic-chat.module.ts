import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicChatRoutingModule } from './basic-chat-routing.module';
import { BasicChatComponent } from './basic-chat.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicChatComponent],
  imports: [CommonModule, BasicChatRoutingModule, ReactiveFormsModule],
})
export class BasicChatModule {}
