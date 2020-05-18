import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss'],
})
export class TrainingListComponent {

  @Input() public subtitle = '';
  @Input() public exercices;
  @Output() public videoSelected = new EventEmitter<{index: any, video: any}>();
  @Output() public techniqueSelected = new EventEmitter<{index: any, video: any}>();

  public videoSelect = (index, exercice) => this.videoSelected.emit({index, video: exercice.video});
}
