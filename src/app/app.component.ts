import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { ENTRIES } from './mock-entries';
import * as $ from 'jquery';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}

  ngOnInit(){}

  title = 'metacritic';
  selectedEntry = null;

  // entries: FirebaseListObservable<any[]>;

  masterEntryList: Entry[] = ENTRIES;

  newEntry()
  {
    $("#newEntryForm").fadeToggle();
  }

  // addEntry(newEntry: Entry)
  // {
  //   this.masterEntryList.push(newEntry);
  // }

  editEntry(clickedEntry)
  {
    this.selectedEntry = clickedEntry;
  }

  finishedEditing()
  {
    this.selectedEntry = null;
  }
}
