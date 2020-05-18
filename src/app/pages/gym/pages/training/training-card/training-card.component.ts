import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  public index = 0;
  public current = {};
  public slideOpts = {};
  @Input() public set currentExercice(index) {
    this.index = index;
    this.slideOpts = {
      initialSlide: index
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

  private updateCurrent() {
    if (!!this._exercices && !!this._exercices[this.index]) {
      this.current = this._exercices[this.index];
      this.slideChanged();
    }
  }

  public async slideChanged() {
    // const index = await this.slides.getActiveIndex();
    this.videoSelected.emit({
      index: this.index,
      video: this._exercices[this.index].video
    });
  }
}
