import { Component, Input, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ModalController } from '@ionic/angular';
import { WatchYoutubeService } from '../service/watch-youtube.service';

@Component({
  selector: 'app-watch-video-modal',
  templateUrl: './watch-video-modal.component.html',
  styleUrls: ['./watch-video-modal.component.scss'],
})
export class WatchVideoModalComponent implements OnInit {

  @Input() public videoId = '';

  constructor(
    private youtubeService: WatchYoutubeService,
    private modalCtrl: ModalController,
    private screenOrientation: ScreenOrientation
  ) { }

  public ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.youtubeService.openVideo(`youtube`, this.videoId);
  }

  public dismiss = () => {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.screenOrientation.unlock();
    this.modalCtrl.dismiss({
      closed: true
    });
  }

}
