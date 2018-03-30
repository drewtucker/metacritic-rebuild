import { Component } from '@angular/core';
import { Entry } from '../models/entry';
import * as $ from 'jquery';

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
    new Entry("Show", "The Americans: Season 6", "FX", 92, "March 28, 2018", "The sixth and final season of the acclaimed espionage drama.", "https://tinyurl.com/ycj738qc"),
    new Entry("Movie", "Acrimony", "Tyler Perry", 24, "March 30, 2018", "A faithful wife becomes enraged after she has been betrayed.", "https://tinyurl.com/ycfvj8t5"),
    new Entry("Game", "Sea of Thieves", "Microsoft Game Studios", 69, "March 20, 2018", "Join up with your friends, and be the pirate you always wanted to be!", "https://tinyurl.com/ydx2ffll"),
    new Entry("Album", "Blonde", "Frank Ocean", 87, "Aug 20, 2016", "Features contributions from Radiohead, Kendrick Lamar and Kanye West.", "https://tinyurl.com/ycy4vmgy"),
    new Entry("Movie", "Ready Player One", "Steven Spielberg", 64, "March 29, 2018", "Young hero Wade Watts enters into a digital contest to win an immense fortune.", "https://tinyurl.com/yclwlx5s")

  ]

  newEntry()
  {
    $("#newEntryForm").fadeToggle();
  }

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
