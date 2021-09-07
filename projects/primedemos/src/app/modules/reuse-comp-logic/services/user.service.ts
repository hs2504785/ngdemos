import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly dataService: DataService) {}

  getEmployeesAsSelectList(): Observable<any> {
    return this.dataService.getUsers().pipe(
      map(rawData => {
        return rawData.map(user => ({
          value: user._id,
          label: `${user.username} - ${user.email}`,
        }));
      }),
    );
  }
}
