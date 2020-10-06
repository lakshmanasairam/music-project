import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddSongComponent } from './add-song/add-song.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongListComponent } from './song-list/song-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"song-list",component:SongListComponent},
  {path:"song-detail/:sid",component:SongDetailComponent},
  {path:"add-song",component:AddSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
