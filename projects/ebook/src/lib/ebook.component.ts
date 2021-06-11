import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-ebook',
  template: `
    <mat-sidenav-container fullscreen>
      <lib-sidenav [open]="showSidenav$ | async" (closeMenu)="closeSidenav()">
        <lib-nav-item
          (navigate)="closeSidenav()"
          *ngIf="loggedIn$ | async"
          routerLink="/"
          icon="book"
          hint="View your book collection"
        >
          My Collection
        </lib-nav-item>
        <lib-nav-item
          (navigate)="closeSidenav()"
          *ngIf="loggedIn$ | async"
          routerLink="/books/find"
          icon="search"
          hint="Find your next book!"
        >
          Browse Books
        </lib-nav-item>
        <lib-nav-item
          (navigate)="closeSidenav()"
          *ngIf="(loggedIn$ | async) === false"
        >
          Sign In
        </lib-nav-item>
        <lib-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </lib-nav-item>
      </lib-sidenav>
      <lib-toolbar (openMenu)="openSidenav()"> Book Collection </lib-toolbar>

      <router-outlet></router-outlet>
    </mat-sidenav-container>
  `,
  styles: [
    `
      mat-sidenav-container {
        background: rgba(0, 0, 0, 0.03);
      }

      /* *,
      /deep/ * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      } */
    `,
  ],
})
export class EbookComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(private store: Store) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    // this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav);
    // this.loggedIn$ = this.store.select(fromAuth.selectLoggedIn);
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    // this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    // this.store.dispatch(LayoutActions.openSidenav());
  }

  logout() {
    // this.store.dispatch(AuthActions.logoutConfirmation());
  }
}
