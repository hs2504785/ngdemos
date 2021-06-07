import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService extends Socket {
  constructor() {
    super({
      url: `${environment.socketConfig.url}`,
      options: environment.socketConfig.opts,
    });
  }

  sendMessage(message: string) {
    this.emit('message', message);
  }

  getMessage() {
    return this.fromEvent('message').pipe(map((data: any) => data.message));
  }
}
