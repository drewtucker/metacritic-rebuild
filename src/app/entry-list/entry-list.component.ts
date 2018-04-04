import { Component, Input, Output, EventEmitter, ModuleWithProviders, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EntryService } from '../entry.service';
import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryService]
})
export class EntryListComponent implements OnInit {

  entries: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private entryService: EntryService, private router: Router){}


  ngOnInit(){
    this.entries = this.entryService.getEntries();
    console.log(this.currentRoute);
  }

  @Output() clickSender = new EventEmitter();


  goToDetailPage(clickedEntry){
    this.router.navigate(['details', clickedEntry.$key]);
  }

  editButtonClicked(entryToEdit: Entry)
  {
    this.clickSender.emit(entryToEdit);
  }

  scoreColor(currentEntry)
  {
    if(currentEntry.metascore >= 75)
    {
      return "bg-success";
    }
    else if (currentEntry.metascore >= 45)
    {
      return "bg-warning";
    }
    else {
      return "bg-danger";
    }
  }
}
