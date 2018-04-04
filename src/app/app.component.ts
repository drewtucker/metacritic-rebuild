import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { ENTRIES } from './mock-entries';
import * as $ from 'jquery';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(){
    console.log(this.currentRoute);
  }

  title = 'metacritic';
  selectedEntry = null;
  currentRoute: string = this.router.url;

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
