import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdbSampleComponent } from './idb-sample.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { FormsModule } from '@angular/forms';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'people',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    },
  ],
};

const routes: Routes = [{ path: '', component: IdbSampleComponent }];

@NgModule({
  declarations: [IdbSampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
})
export class IdbSampleModule {}
