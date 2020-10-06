import { SongserviceService } from './../songservice.service';
import { Component, OnInit } from '@angular/core';
import { song } from '../song.model';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {

  constructor(private service:SongserviceService) { }

  ngOnInit(): void {
  }

  userModel:any={};

  onSubmit(){
    this.service.addNewsong(new song(this.userModel.songid,this.userModel.songname,this.userModel.songalbum,
      this.userModel.songartist,this.userModel.genre,this.userModel.image,this.userModel.relasedate));
  }
}
