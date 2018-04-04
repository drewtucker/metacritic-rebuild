import { Component, ModuleWithProviders, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../../models/entry';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EntryService]
})
export class AdminComponent implements OnInit {

  entries: FirebaseListObservable<any[]>;
  selectedEntry = null;
  currentRoute: string = this.router.url;


  constructor(private entryService: EntryService, private router: Router) { }

  ngOnInit() {
    this.entries = this.entryService.getEntries();
    console.log(this.router.url);
  }




  submitForm(type: string, title: string, creator: string, metascore: string, releaseDate: string, description: string, image: string)
  {
    let newEntry: Entry = new Entry(type, title, creator, parseInt(metascore), releaseDate, description, image);
    this.entryService.addEntry(newEntry);
    $("#newEntryForm").fadeToggle();
  }

  newEntry()
  {
    $("#newEntryForm").fadeToggle();
  }

  finishedEditing()
  {
    this.selectedEntry = null;
  }

  scoreColor(currentEntry)
  {
    if(currentEntry.metascore >= 75)
    {
      return "bg-success";
    }
    else if (currentEntry.metascore >= 45)
    {
      return "bg-warning";
    }
    else {
      return "bg-danger";
    }
  }



}
