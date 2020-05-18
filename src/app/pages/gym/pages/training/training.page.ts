import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListExercices } from '@app/store/gym/exercice/exercice.action';
import { selectExerciceList } from '@app/store/gym/exercice/exercice.selector';
import { Exercice } from '@app/store/gym/exercice/exercice.state';
import { ModalController, Platform } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { uniq } from 'ramda';
import { Observable } from 'rxjs';

import { WatchYoutubeService } from './service/watch-youtube.service';
import { WatchVideoModalComponent } from './watch-video-modal/watch-video-modal.component';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  public currentExercice = 0;
  public mode = 'card'; // list, card
  public exercices$: Observable<Exercice[]>;
  public weekCode;
  public workoutId;
  public title = '';
  public subtitle = '';
  public userId = '1';
  constructor(
    private router: Router,
    private youtubeService: WatchYoutubeService,
    private modalController: ModalController,
    private platform: Platform,
    private store: Store<any>
  ) {
    const temp = this.router.url.split('/');
    this.workoutId = temp.pop();
    this.weekCode = temp.pop();
  }

  public ngOnInit() {
    this.store.dispatch(new ListExercices(this.userId, {workoutId: this.workoutId}));
    this.exercices$ = this.store.pipe(select(selectExerciceList));
    this.exercices$.subscribe(data => this.subtitle = uniq(data.map((v) => v.group.title)).join(' - '));
  }

  public async slideChanged(data) {
    this.currentExercice = data.index;
    const videoId = this.getVideoId(data.video);
    const width = this.platform.width() - 10;
    this.youtubeService.openVideo(`youtube_${data.index}`, videoId, {
      playerSize: { width, height: (360 / 640) * width }
    });
  }

  public log(dt) {
    console.log({dt});
  }

  public async presentModal(dt) {
    const videoId = this.getVideoId(dt.video);
    const modal = await this.modalController.create({
      component: WatchVideoModalComponent,
      componentProps: {videoId}
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

  private getVideoId = (video) => video.indexOf('=') !== -1 ? video.split('=').pop() : video.split('/').pop();

}
