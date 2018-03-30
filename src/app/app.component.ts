import { Component } from '@angular/core';
import { Entry, Movie, Game, Album, Show } from '../models/entry';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'metacritic';

  masterEntryList: Entry[] =
  [
    new Movie("Gladiator", "Ridley Scott", 67, "May 5, 2000", "A former Roman General taken prisoner and forced to fight for his freedom.", "https://tinyurl.com/ybgymxu7"),
    new Game("Far Cry 5", "Ubisoft Montreal", 81, "March 27, 2018", "Battle a Doomsday cult in the Montana wilderness.", "https://tinyurl.com/yahlrqb7"),
    new Album("Boarding House Reach", "Jack White", 74, "March 23, 2018", "The third solo release for the former member of the White Stripes/The Raconteurs", "https://tinyurl.com/ydhz54ka"),
    new Show("The Americans: Season 6", "FX", 92, "March 28, 2018", "The sixth and final season of the espionage drama.", "https://tinyurl.com/ycj738qc")

  ]
}
