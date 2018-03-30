import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../models/entry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent {

  @Input() childEntryList: Entry[];
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
    else if (currentEntry.metascore >= 50)
    {
      return "bg-warning";
    }
    else {
      return "bg-danger";
    }
  }
}
