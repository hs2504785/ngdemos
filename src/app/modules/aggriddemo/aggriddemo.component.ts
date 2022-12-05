import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-aggriddemo',
  templateUrl: './aggriddemo.component.html',
  styleUrls: ['./aggriddemo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AggriddemoComponent implements OnInit {
  public isScreenSmall: boolean;
  pageTitle: string;
  isDarkTheme: boolean = false;
  dir: string = 'ltr';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {}

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
