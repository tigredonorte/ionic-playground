import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss'],
})
export class SampleModalComponent {

  @Input() public title = '';

  constructor(private modalCtrl: ModalController) { }

  public dismiss = () => this.modalCtrl.dismiss({
    returnedData: 'sample'
  })
}
