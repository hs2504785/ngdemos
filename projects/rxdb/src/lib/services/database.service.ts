import { Injectable } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
addRxPlugin(require('pouchdb-adapter-idb'));

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {
    this.ensureDBCreated();
  }

  async ensureDBCreated() {
    const db = await createRxDatabase({
      name: 'heroesdb', // <- name
      adapter: 'idb', // <- storage-adapter
      // password: 'myPassword',     // <- password (optional)
      multiInstance: true, // <- multiInstance (optional, default: true)
      eventReduce: false, // <- eventReduce (optional, default: true)
    });
    console.dir(db);
  }
}
