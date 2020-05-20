import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { timer } from 'rxjs';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  public loading = false;
  public currentIndex = 0;
  public currentSetIndex = 0;
  public currentSet: {series: number, weight: number};
  public current;
  public slideOpts = {};
  public cssClass = 'animate__animated animate__fadeInRight';
  @Input() public set currentExercice(currentIndex: number) {
    this.currentIndex = currentIndex;
    this.slideOpts = {
      initialSlide: currentIndex
    };
    this.updateCurrent();
  }
  @Input() public subtitle = '';

  public _exercices = [];
  @Input() public set exercices(exercices) {
    this._exercices = exercices;
    this.updateCurrent();
  }

  @Output() public videoSelected = new EventEmitter();
  @Output() public techniqueSelected = new EventEmitter();
  @Output() public formChanged = new EventEmitter();

  public updateCurrent(currentIndex?: number) {
    if (!isNaN(currentIndex)) {
      this.currentIndex = currentIndex;
    }
    if (!!this._exercices && !!this._exercices[this.currentIndex]) {
      this.current = this._exercices[this.currentIndex];
      this.currentSetIndex = 0;
      this.currentSet = this.current.setExecution[this.currentSetIndex];
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
    if (index < 0 || index > this.current.setExecution.length - 1) {
      return;
    }
    let cssClass = 'animate__animated animate__fadeInRight';
    if (index < this.currentSetIndex) {
      cssClass = 'animate__animated animate__fadeInLeft';
    }
    this.cssClass = cssClass;
    this.currentSetIndex = index;
    this.currentSet = this.current.setExecution[this.currentSetIndex];
    this.loading = true;
    timer(1).subscribe(() => this.loading = false);
  }

  public formChanges(data) {
    this.formChanged.emit({index: this.currentIndex, ...data});
  }
}
