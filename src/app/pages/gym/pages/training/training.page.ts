import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { YoutubePlayerWeb } from 'capacitor-youtube-player';
import { keys } from 'ramda';

import { treinos } from '../../treinos';
import { videos } from '../../videos';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  public exercices;
  public weekCode;
  public trainCode;
  public subtitle = '';
  constructor(private router: Router) {
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
    console.log(this.exercices);
    this.subtitle = keys(groups).join(' + ');
  }

  public openVideo(video) {
    const id = video.split('=').pop();
    Capacitor.platform === 'web' ? this.initializeYoutubePlayerPluginWeb(id) : this.initializeYoutubePlayerPluginNative(id);
  }

  async initializeYoutubePlayerPluginWeb(videoId) {
    console.log('HomePage::initializeYoutubePlayerPluginWeb() | method called');
    const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId};
    const result = await YoutubePlayerWeb.initialize(options);
    console.log('playerReady', result);

    (result as any).player.addEventListener('onPlaybackQualityChange', (event) => {
      console.log('playback quality is', event);
    });

    (result as any).player.addEventListener('onStateChange', (event) => {
      console.log('state is', event);
    });
  }

  async destroyYoutubePlayerPluginWeb() {
    const result = await YoutubePlayerWeb.destroy('youtube-player');
    console.log('destroyYoutubePlayer', result);
  }

  async initializeYoutubePlayerPluginNative(videoId) {
    const { YoutubePlayer } = Plugins;
    const options = {width: 640, height: 360, videoId};
    const playerReady = await YoutubePlayer.initialize(options);
  }


}
