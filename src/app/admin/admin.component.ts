import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { Entry } from '../../models/entry';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EntryService]
})
export class AdminComponent implements OnInit {

  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }

  selectedEntry = null;


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



}
