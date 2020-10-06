import { SongserviceService } from './../songservice.service';
import { SongDetailComponent } from './../song-detail/song-detail.component';
import { song } from './../song.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  AllSong:song[]=[];

  //songs:song[];
  constructor(private service:SongserviceService) { }

  ngOnInit(): void {
    this.GetAllSong();
  }

  GetAllSong() {
    this.AllSong=this.service.getsongs();
  }


}


// export class SongListComponent implements OnInit {

//   songs:song[];
//   constructor(private service:SongserviceService) { }

//   ngOnInit(): void {
//     this.songs=this.service.getSongs();
//   }

// }
