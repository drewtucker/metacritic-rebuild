import { Component, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Entry } from '../../models/entry';
@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent{

  @Output() sendEntry = new EventEmitter();

  submitForm(type: string, title: string, creator: string, metascore: string, releaseDate: string, description: string, image: string)
  {
    let newEntry: Entry = new Entry(type, title, creator, parseInt(metascore), releaseDate, description, image);
    this.sendEntry.emit(newEntry);
    $("#newEntryForm").fadeToggle();
  }



}
