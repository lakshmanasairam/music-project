import { SongserviceService } from './songservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { AddSongComponent } from './add-song/add-song.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SairamComponent } from './sairam/sairam.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongDetailComponent,
    AddSongComponent,
    HomeComponent,
    HeaderComponent,
    SairamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule
  ],
  providers: [SongserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
