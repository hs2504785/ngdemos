import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/mailapp/src/environments/environment';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail.interface';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get<Mail[]>(`${this.API_URL}/messages?folder=${folder}`);
  }

  getMessage(messageId: string): Observable<Mail> {
    return this.http.get<Mail>(`${this.API_URL}/messages/${messageId}`);
  }
}
