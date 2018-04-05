import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/entry';
import { EntryService } from '../entry.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css'],
  providers: [EntryService]
})
export class EntryDetailsComponent implements OnInit {

  entryId: string;
  entryToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private entryService: EntryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.entryId = urlParameters['id'];
    });
    this.entryToDisplay = this.entryService.getEntryById(this.entryId);
  }


  scoreColor(inputObservable)
  {
    let item;

    inputObservable.subscribe(data => {
      item = data;
    });
    if (item != undefined) {
      if (item.metascore >= 75)
      {
        return "bg-success";
      }
      else if (item.metascore >= 45)
      {
        return "bg-warning";
      }
      else {
        return "bg-danger";
      }
    }
  }


}
