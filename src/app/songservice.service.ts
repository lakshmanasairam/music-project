import { song } from './song.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongserviceService {

  lakshman: song[] =
    [
      new song(1, "Shape of You", "Private Album", "Ed Sheran", "English", "https://www.much.com/wp-content/uploads/2017/02/Shape-of-You-Cover.jpg", new Date('10/07/1999')),
      new song(2, "Bekhayali", "kabirsingh", "Arijit Singh", "Hindi", "https://i.ytimg.com/vi/PVDPkS4v8FQ/maxresdefault.jpg", new Date("10/08/2018")),
      new song(3, "Barish", "HalfGirlfriend", "Ash King", "Hindi", "https://www.lyricsbell.com/wp-content/uploads/2020/03/baarish-sonu-kakkar.jpg", new Date("8/8/2017")),
    ];

    addNewsong(newsong:song){
      this.lakshman.push(newsong);
    }

    getsongs():song[]{
      return this.lakshman;
    }
}
