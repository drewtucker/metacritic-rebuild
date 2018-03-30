import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { MovienessPipe } from './movieness.pipe';
import { GamenessPipe } from './gameness.pipe';
import { AlbumnessPipe } from './albumness.pipe';
import { ShownessPipe } from './showness.pipe';



@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EditEntryComponent,
    NewEntryComponent,
    MovienessPipe,
    GamenessPipe,
    AlbumnessPipe,
    ShownessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
