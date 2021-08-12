import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserCsStore } from '../users-cs/services/user-cs-store.service';

@Component({
  selector: 'app-csdemo',
  templateUrl: './csdemo.component.html',
  styleUrls: ['./csdemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserCsStore],
})
export class CsdemoComponent {}
