import { Component, OnInit } from '@angular/core';
import { keys } from 'ramda';

import { videos } from '../../videos';
import { Router } from '@angular/router';
import { treinos } from '../../treinos';

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
    this.subtitle = keys(groups).join(' + ');
  }

}
