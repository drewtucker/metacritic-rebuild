import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
