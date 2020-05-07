import { Component, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss'],
})
export class SampleModalComponent {

  @Input() public title = '';
  @Input() public isPopover = false;

  constructor(private modalCtrl: ModalController, private popoverCtrl: PopoverController) { }

  public dismiss = () => {
    const data = {
      returnedData: 'sample'
    };
    if (this.isPopover) {
      this.popoverCtrl.dismiss(data);
    }
    else {
      this.modalCtrl.dismiss(data);
    }
  }
}
