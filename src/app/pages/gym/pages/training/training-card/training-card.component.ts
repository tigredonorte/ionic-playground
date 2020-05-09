import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss'],
})
export class TrainingCardComponent {

  @ViewChild('slides', { static: false }) slides: IonSlides;

  public slideOpts = {};
  @Input() public set currentExercice(index) {
    this.slideOpts = {
      initialSlide: index
    };
  }
  @Input() public subtitle = '';
  @Input() public exercices;

  @Output() public videoSelected = new EventEmitter();

  public async slideChanged() {
    const index = await this.slides.getActiveIndex();
    this.videoSelected.emit({
      index,
      exercice: this.exercices.exercices[index]
    });
  }
}
