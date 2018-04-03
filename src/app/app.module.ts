import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { MovienessPipe } from './movieness.pipe';
import { GamenessPipe } from './gameness.pipe';
import { AlbumnessPipe } from './albumness.pipe';
import { ShownessPipe } from './showness.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { ReportsComponent } from './reports/reports.component';
import { routing } from './app.routing';




export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EditEntryComponent,
    NewEntryComponent,
    MovienessPipe,
    GamenessPipe,
    AlbumnessPipe,
    ShownessPipe,
    AdminComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
