import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  public currentIndex = 0;
  public current;
  public slideOpts = {};
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

  public updateCurrent(currentIndex?: number) {
    if (!isNaN(currentIndex)) {
      this.currentIndex = currentIndex;
    }
    if (!!this._exercices && !!this._exercices[this.currentIndex]) {
      this.current = this._exercices[this.currentIndex];
      this.slideChanged();
    }
  }

  public next = () => this.updateCurrent(this.currentIndex + 1);
  public prev = () => this.updateCurrent(this.currentIndex - 1);

  public async slideChanged() {
    this.videoSelected.emit({
      index: this.currentIndex,
      video: this._exercices[this.currentIndex].video
    });
  }
}
