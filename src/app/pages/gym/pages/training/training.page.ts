import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListWorkouts } from '@app/store/gym/workout/workout.action';
import { selectExerciceList } from '@app/store/gym/workout/workout.selector';
import { Exercice } from '@app/store/gym/workout/workout.state';
import { ModalController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { keys } from 'ramda';
import { Observable } from 'rxjs';

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

  public currentExercice = 0;
  public mode = 'card'; // list, card
  public exercices$: Observable<Exercice[]>;
  public exercices;
  public weekCode;
  public trainCode;
  public subtitle = '';
  constructor(
    private router: Router,
    private youtubeService: WatchYoutubeService,
    private modalController: ModalController,
    private store: Store<any>
  ) {
    const temp = this.router.url.split('/');
    this.trainCode = temp.pop();
    this.weekCode = temp.pop();
  }

  public ngOnInit() {
    this.store.dispatch(new ListWorkouts('10'));
    this.exercices$ = this.store.pipe(select(selectExerciceList));
    this.exercices$.subscribe(data => data.forEach(element => {
      const groups = {};
      if (element.group.title !== 'Técnica avançada') {
        groups[element.group.title] = '';
      }
      this.subtitle = keys(groups).join(' + ');
    }));
  }

  public async slideChanged(data) {
    this.currentExercice = data.index;
    const videoId = data.exercice.video.split('=').pop();
    this.youtubeService.openVideo(`youtube_${data.index}`, videoId);
  }

  async presentModal(dt) {
    const videoId = dt.exercice.video.split('=').pop();
    const modal = await this.modalController.create({
      component: WatchVideoModalComponent,
      componentProps: {videoId}
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
