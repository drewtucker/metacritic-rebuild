import { Component, Input, Output, EventEmitter, ModuleWithProviders, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';
import { EntryService } from '../entry.service';
import { Router, Routes, RouterModule } from '@angular/router';
import * as $ from 'jquery';
import * as firebase from "firebase";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [EntryService, AuthenticationService]
})
export class NavbarComponent implements OnInit {

  user;
  private isLoggedIn: Boolean;
  private userName: String;
  currentRoute: string = this.router.url;
  title: string ="metacritic";

  constructor(private entryService: EntryService, private router: Router, public authService: AuthenticationService)
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

  ngOnInit() {
  }

  newEntry()
  {
    $("#newEntryForm").fadeToggle();
  }

  ngDoCheck()
  {
    this.user = firebase.auth().currentUser;
  }

}
