import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry, Movie, Game, Album, Show} from '../../models/entry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent {

  @Input() childEntryList: Entry[];

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
