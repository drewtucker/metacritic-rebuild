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

  getEntryById(entryId: string)
  {
    return this.database.object('entries/' + entryId);
  }

  addEntry(newEntry: Entry)
  {
    this.entries.push(newEntry);
  }

  updateEntry(localUpdatedEntry)
  {
    var entryInFirebase = this.getEntryById(localUpdatedEntry.$key);
    entryInFirebase.update(
      {
        type: localUpdatedEntry.type,
        title: localUpdatedEntry.title,
        creator: localUpdatedEntry.creator,
        metascore: localUpdatedEntry.metascore,
        releaseDate: localUpdatedEntry.releaseDate,
        description: localUpdatedEntry.description,
        image: localUpdatedEntry.image});
      }

}
