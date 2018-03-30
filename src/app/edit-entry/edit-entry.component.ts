import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from '../../models/entry';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent {

  @Input() childSelectedEntry: Entry;
  @Output() clickedDone = new EventEmitter();
  clickedEntry = null;

  editEntry(clickedEntry)
  {
    this.clickedEntry = clickedEntry;
  }

  finishedEditing()
  {
    this.clickedDone.emit();
  }

}
