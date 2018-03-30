import { Component } from '@angular/core';
import { Entry } from '../models/entry';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metacritic';
  selectedEntry = null;

  masterEntryList: Entry[] =
  [
    new Entry("Movie", "Gladiator", "Ridley Scott", 67, "May 5, 2000", "A former Roman General taken prisoner and forced to fight for his freedom.", "https://tinyurl.com/ybgymxu7"),
    new Entry("Game", "Far Cry 5", "Ubisoft Montreal", 81, "March 27, 2018", "Battle a Doomsday cult led by a psychotic leader in the Montana wilderness.", "https://tinyurl.com/yahlrqb7"),
    new Entry("Album", "Boarding House Reach", "Jack White", 74, "March 23, 2018", "The third solo release for the former member of the White Stripes/Raconteurs", "https://tinyurl.com/ydhz54ka"),
    new Entry("Show", "The Americans: Season 6", "FX", 92, "March 28, 2018", "The sixth and final season of the acclaimed espionage drama.", "https://tinyurl.com/ycj738qc")

  ]

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
