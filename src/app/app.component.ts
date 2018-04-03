import { Component } from '@angular/core';
import { Entry } from '../models/entry';
import { entries } from './mock-entries';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metacritic';
  selectedEntry = null;

  masterEntryList: Entry[] = entries;

  newEntry()
  {
    $("#newEntryForm").fadeToggle();
  }

  addEntry(newEntry: Entry)
  {
    this.masterEntryList.push(newEntry);
  }

  editEntry(clickedEntry)
  {
    this.selectedEntry = clickedEntry;
  }

  finishedEditing()
  {
    this.selectedEntry = null;
  }
}
