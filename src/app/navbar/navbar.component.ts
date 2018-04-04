import { Component, Input, Output, EventEmitter, ModuleWithProviders, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EntryService } from '../entry.service';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [EntryService]
})
export class NavbarComponent implements OnInit {

  currentRoute: string = this.router.url;
  title: string ="metacritic";

  constructor(private entryService: EntryService, private router: Router) { }

  ngOnInit() {
  }

}
