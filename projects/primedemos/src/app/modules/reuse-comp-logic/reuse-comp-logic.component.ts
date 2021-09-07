import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-reuse-comp-logic',
  templateUrl: './reuse-comp-logic.component.html',
  styleUrls: ['./reuse-comp-logic.component.scss'],
})
export class ReuseCompLogicComponent {
  users$: Observable<any[]> = this.userService.getEmployeesAsSelectList();
  constructor(private userService: UserService) {}
}
