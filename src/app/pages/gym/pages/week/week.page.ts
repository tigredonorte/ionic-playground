import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { treinos } from '../../treinos';

@Component({
  selector: 'app-week',
  templateUrl: './week.page.html',
  styleUrls: ['./week.page.scss'],
})
export class WeekPage {

  public week;
  public weekCode;
  constructor(private router: Router) {
    this.weekCode = this.router.url.split('/').pop();
    this.retrieveTraining(this.weekCode);
  }

  private retrieveTraining(index) {
    this.week = treinos[index];
  }

  public selectDay(index) {
    this.router.navigate([`gym/training/${this.weekCode}/${index}`], {});
  }

}
