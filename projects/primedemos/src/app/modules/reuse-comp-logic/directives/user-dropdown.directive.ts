import { Directive, OnDestroy, OnInit, Self } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Directive({
  selector: '[appUserDropdown]',
})
export class UserDropdownDirective implements OnInit, OnDestroy {
  getEmployeeSubscription: Subscription;

  constructor(
    private userService: UserService,
    // Injecting the Dropdown component instance.
    @Self() private readonly primeDropdown: Dropdown,
  ) // private readonly httpClient: HttpClient
  {}

  ngOnInit() {
    // You can set all inputs and subscribe to all outputs, by injected instance.
    this.primeDropdown.filter = this.primeDropdown.showClear = true;
    this.primeDropdown.placeholder = 'Choose an employee';
    this.getEmployeeSubscription = this.userService
      .getEmployeesAsSelectList()
      .subscribe(
        employees => {
          this.primeDropdown.options = employees;
        },
        error => {
          // TODO: Handle errors
        },
      );
  }

  ngOnDestroy() {
    // You should unsubscribe from subscribed outputs to prevent memory leaks.
    if (!!this.getEmployeeSubscription) {
      this.getEmployeeSubscription.unsubscribe();
    }
  }
}
