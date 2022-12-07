import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/shared/services/helper.service';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-aggriddemo',
  templateUrl: './aggriddemo.component.html',
  styleUrls: ['./aggriddemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AggriddemoComponent implements OnInit {
  public isScreenSmall: boolean;
  pageTitle: string;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private helperService: HelperService,
  ) {
    this.helperService.loadStyle('aggrid.min.css');
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

  setTitle(title: string) {
    this.pageTitle = title;
  }
}
