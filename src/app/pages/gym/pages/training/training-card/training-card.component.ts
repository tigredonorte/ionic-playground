import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent implements OnInit {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  public loading = false;
  public currentIndex = 0;
  public currentSetIndex = 0;
  public currentSet: {series: number, weight: number};
  public slideOpts = {};
  public cssClass = 'animate__animated animate__fadeInRight';
  @Input() public set currentExercice(currentIndex: number) {
    this.currentIndex = currentIndex;
    this.slideOpts = {
      initialSlide: currentIndex
    };
  }
  @Input() public subtitle = '';

  public _exercices = [];
  @Input() public set exercices(exercices) {
    this._exercices = exercices;
    this.currentSet = this.getCurrentExercice().setExecution[this.currentSetIndex];
  }

  @Output() public videoSelected = new EventEmitter();
  @Output() public techniqueSelected = new EventEmitter();
  @Output() public formChanged = new EventEmitter();

  public ngOnInit() {
    this.updateCurrent(0);
  }

  public updateCurrent(currentIndex?: number) {
    if (!isNaN(currentIndex)) {
      this.currentIndex = currentIndex;
    }
    const currentExercice = this.getCurrentExercice();
    if (!!this._exercices && !!currentExercice) {
      this.currentSetIndex = 0;
      this.currentSet = currentExercice.setExecution[this.currentSetIndex];
      this.slideChanged();
    }
  }

  public next = () => this.updateCurrent(this.currentIndex + 1);
  public prev = () => this.updateCurrent(this.currentIndex - 1);

  public async slideChanged() {
    const index = !!this.slides ? await this.slides.getActiveIndex() : this.currentIndex;
    this.videoSelected.emit({
      index,
      video: this._exercices[index].video
    });
  }

  public nextIndex = (index) => {
    console.log('@@##', index);
    if (index < 0 || index > this.getCurrentExercice().setExecution.length - 1) {
      return;
    }
    let cssClass = 'animate__animated animate__fadeInRight';
    if (index < this.currentSetIndex) {
      cssClass = 'animate__animated animate__fadeInLeft';
    }
    this.cssClass = cssClass;
    this.currentSetIndex = index;
    this.currentSet = this.getCurrentExercice().setExecution[this.currentSetIndex];
    this.loading = true;
    timer(1).subscribe(() => this.loading = false);
  }

  public trackByFn = (item) => item.id;
  public getCurrentExercice = () => this._exercices[this.currentIndex] || {};

  public formChanges(data) {
    this.formChanged.emit({id: this.getCurrentExercice().id, ...data});
  }
}
