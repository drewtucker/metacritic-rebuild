import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { FirebaseListObservable } from 'angularfire2/database';
import { EntryService } from '../entry.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryService]
})
export class EntryListComponent implements OnInit {

  constructor(private entryService: EntryService){}

  entries: FirebaseListObservable<any[]>;
  ngOnInit(){this.entries = this.entryService.getEntries()}



  // @Input() childEntryList: Entry[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(entryToEdit: Entry)
  {
    this.clickSender.emit(entryToEdit);
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
