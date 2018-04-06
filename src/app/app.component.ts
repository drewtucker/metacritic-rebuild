import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { ENTRIES } from './mock-entries';
import * as $ from 'jquery';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent implements OnInit {

  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(private router: Router, public authService: AuthenticationService)
  {
    this.authService.user.subscribe(user => {
      if(user == null)
      {
        this.isLoggedIn = false;
      }
      else
      {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login()
  {
    this.authService.login();
  }

  logout()
  {
    this.authService.logout();
  }

  ngOnInit(){
    console.log(this.currentRoute);
  }

  title = 'metacritic';
  selectedEntry = null;
  currentRoute: string = this.router.url;

  // entries: FirebaseListObservable<any[]>;

  masterEntryList: Entry[] = ENTRIES;

  newEntry()
  {
    $("#newEntryForm").fadeToggle();
  }

  // addEntry(newEntry: Entry)
  // {
  //   this.masterEntryList.push(newEntry);
  // }

  editEntry(clickedEntry)
  {
    this.selectedEntry = clickedEntry;
  }

  finishedEditing()
  {
    this.selectedEntry = null;
  }
}
