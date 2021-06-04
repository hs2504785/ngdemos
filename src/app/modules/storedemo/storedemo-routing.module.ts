import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoredemoComponent } from './storedemo.component';
import { UserStoreResolver } from './users-store/services/user-store.resolver';

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
      },
      {
        path: 'users-data',
        loadChildren: () =>
          import('./users-data/users-data.module').then(m => m.UsersDataModule),
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
