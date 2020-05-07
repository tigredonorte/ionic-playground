import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  // constructor(private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
    // this.youtube.openVideo('O_yDZ_6Uy5s');
  }

}
