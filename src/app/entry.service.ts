import { Injectable } from '@angular/core';
import { Entry } from '../models/entry';
import { ENTRIES } from './mock-entries';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EntryService {

  entries: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase)
  {
      this.entries = database.list('entries');
  }

  getEntries()
  {
    return this.entries;
  }

  addEntry(newEntry: Entry)
  {
    this.entries.push(newEntry);
  }

}
