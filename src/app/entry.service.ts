import { Injectable } from '@angular/core';
import { Entry } from '../models/entry';
import { entries } from './mock-entries';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EntryService {

  constructor() { }

  getEntries()
  {
    return entries;
  }

}
