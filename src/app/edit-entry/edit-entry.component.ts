import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
  providers: [EntryService]
})
export class EditEntryComponent {

  constructor(private entryService: EntryService){}

  @Input() selectedEntry;
  @Output() clickedDone = new EventEmitter();
  clickedEntry = null;

  editEntry(clickedEntry)
  {
    this.clickedEntry = clickedEntry;
  }

  beginUpdatingEntry(entryToUpdate)
  {
    this.entryService.updateEntry(entryToUpdate);
  }

  finishedEditing()
  {
    this.clickedDone.emit();
  }

}
