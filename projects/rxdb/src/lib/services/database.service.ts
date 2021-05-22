import { Injectable } from '@angular/core';
import { createRxDatabase, addRxPlugin } from 'rxdb/plugins/core';
addRxPlugin(require('pouchdb-adapter-idb'));

async function ensureDBCreated() {
  const db = await createRxDatabase({
    name: 'heroesdb', // <- name
    adapter: 'idb', // <- storage-adapter
    // password: 'myPassword',     // <- password (optional)
    multiInstance: true, // <- multiInstance (optional, default: true)
    eventReduce: false, // <- eventReduce (optional, default: true)
  });
  console.dir(db);
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {
    ensureDBCreated();
  }
}
