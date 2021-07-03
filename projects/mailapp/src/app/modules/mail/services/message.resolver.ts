import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Mail } from '../models/mail.interface';
import { MailService } from './mail.service';

@Injectable({
  providedIn: 'root',
})
export class MessageResolver implements Resolve<Mail> {
  constructor(private mailService: MailService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Mail> {
    return this.mailService.getMessage(route.params.id);
  }
}
