import { SongserviceService } from './../songservice.service';
import { song } from './../song.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  id:string;

  songs:song[];

  songById:song;

  constructor(private service:SongserviceService,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params.sid;
   }

  ngOnInit(): void {
    this.songs=this.service.getsongs();
    this.getSongbyid();
  }
  getSongbyid(){
    for(let item of this.songs){
      if(item.songid.toString()==this.id){
        this.songById=item;
      }
    }
  }
}
