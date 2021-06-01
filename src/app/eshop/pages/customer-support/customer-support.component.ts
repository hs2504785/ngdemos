import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomerSupportService } from '../../shared/services/customer-support.service';
import { sendingCustomerSupportMessage } from '../state/customer-support.actions';
import { CustomerSupportInterface } from '../state/customer-support.reducer';
import {
  selectIsSentSuccess,
  selectName,
} from '../state/customer-support.selectors';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.scss'],
})
export class CustomerSupportComponent implements OnInit {
  name$: Observable<string>;
  isSentSuccess$: Observable<boolean>;
  constructor(
    private customerSupportService: CustomerSupportService,
    private store: Store<CustomerSupportInterface>,
  ) {}

  isSendSuccess: boolean | null = null;

  ngOnInit(): void {
    this.name$ = this.store.pipe(select(selectName));
    this.isSentSuccess$ = this.store.pipe(select(selectIsSentSuccess));
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(sendingCustomerSupportMessage({ data: f.value }));
    // this.customerSupportService.sendMessage(f.value).subscribe(success => {
    //   console.log(success);
    //   this.isSendSuccess = success;
    // });
  }

  clearFeedback() {
    this.isSendSuccess = null;
  }
}
