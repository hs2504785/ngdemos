import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  API_URL = 'https://hksocket.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  sendMessage(data) {
    return this.http.post(`${this.API_URL}/messages`, data);
  }
  // getMessage() {
  //   return this.fromEvent('message').pipe(map((data: any) => data.message));
  // }
}
