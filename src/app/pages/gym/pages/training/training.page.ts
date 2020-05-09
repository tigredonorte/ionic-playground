import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { keys } from 'ramda';

import { treinos } from '../../treinos';
import { videos } from '../../videos';
import { WatchYoutubeService } from './service/watch-youtube.service';
import { WatchVideoModalComponent } from './watch-video-modal/watch-video-modal.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  public watching = false;
  public currentExercice = 0;
  public mode = 'card'; // list, card
  public exercices;
  public weekCode;
  public trainCode;
  public subtitle = '';
  public slideOpts = {};
  constructor(
    private router: Router,
    private youtubeService: WatchYoutubeService,
    private modalController: ModalController
  ) {
    const temp = this.router.url.split('/');
    this.trainCode = temp.pop();
    this.weekCode = temp.pop();
    this.retrieveExercices(this.weekCode, this.trainCode);
  }

  private retrieveExercices(weekCode, trainCode) {
    const temp = treinos[weekCode].days[trainCode];
    temp.exercices = temp.exercices.map(exercices => {
      const video = videos.find(v => v.title === exercices.title);
      return {
        ...exercices,
        group: video.group,
        video: video.video
      };
    });
    this.exercices = temp;
  }

  public ngOnInit() {
    const groups = {};
    this.exercices.exercices.forEach(element => {
      if (element.group.title !== 'Técnica avançada') {
        groups[element.group.title] = '';
      }
    });
    this.subtitle = keys(groups).join(' + ');
  }

  public async slideChanged() {
    const index = await this.slides.getActiveIndex();
    this.currentExercice = index;
    this.slideOpts = {
      initialSlide: index
    }
    this.openVideo(index, this.exercices.exercices[index].video);
  }

  public openVideo(i, video) {
    const videoId = video.split('=').pop();
    this.youtubeService.openVideo(`youtube_${i}`, videoId);
  }

  async presentModal(video) {
    this.watching = true;
    const videoId = video.split('=').pop();
    const modal = await this.modalController.create({
      component: WatchVideoModalComponent,
      componentProps: {videoId}
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
