import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail.interface';
import { MailService } from './mail.service';

@Injectable({
  providedIn: 'root'
})
export class MailFolderResolver implements Resolve<Mail[]> {
  constructor(private mailService: MailService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mail[]> {
    return this.mailService.getFolder(route.params.name);
  }
}
