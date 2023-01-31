import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'i18nhome',
    loadChildren: () =>
      import('./modules/i18nhome/i18nhome.module').then(m => m.I18nhomeModule),
  },
  {
    path: 'lazyi18n',
    loadChildren: () =>
      import('./modules/lazyi18n/lazyi18n.module').then(m => m.Lazyi18nModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
