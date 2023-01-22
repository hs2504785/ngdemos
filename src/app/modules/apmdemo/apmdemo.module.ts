import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApmdemoRoutingModule } from './apmdemo-routing.module';
import { ApmdemoComponent } from './apmdemo.component';
import { UserModule } from './user/user.module';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [CommonModule, UserModule, ApmdemoRoutingModule],
  declarations: [ApmdemoComponent, MenuComponent, WelcomeComponent],
})
export class ApmdemoModule {}
