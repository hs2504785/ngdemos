import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoredemoComponent } from './storedemo.component';
import { UserDataResolver as UserDataResolver1 } from './users-data/services/user-data.resolver';
import { UserEntityResolver } from './users-entity/services/user-entity.resolver';
import { UserDataResolver } from './users-service/services/user-data.resolver';
import { UserStoreResolver } from './users-store/services/user-store.resolver';
import { UserWsResolver } from './users-ws/services/user-ws.resolver';

const routes: Routes = [
  {
    path: '',
    component: StoredemoComponent,
    children: [
      {
        path: 'users-store',
        loadChildren: () =>
          import('./users-store/users-store.module').then(
            m => m.UsersStoreModule,
          ),
        resolve: [UserStoreResolver],
      },
      {
        path: 'users-entity',
        loadChildren: () =>
          import('./users-entity/users-entity.module').then(
            m => m.UsersEntityModule,
          ),
        resolve: [UserEntityResolver],
      },
      {
        path: 'users-data',
        loadChildren: () =>
          import('./users-data/users-data.module').then(m => m.UsersDataModule),
        resolve: [UserDataResolver1],
      },
      {
        path: 'users-ws',
        loadChildren: () =>
          import('./users-ws/users-ws.module').then(m => m.UsersWsModule),
        resolve: [UserWsResolver],
      },
      {
        path: 'users-service',
        loadChildren: () =>
          import('./users-service/users-data.module').then(
            m => m.UsersDataModule,
          ),
        resolve: {
          users: UserDataResolver,
        },
      },
      {
        path: '',
        redirectTo: 'users-data',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoredemoRoutingModule {}