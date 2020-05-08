import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SampleModalComponent } from './sample-modal/sample-modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  constructor(private modal: ModalController) { }

  public simpleModal = () => this.callModal({
    component: SampleModalComponent,
    componentProps: {title: 'Ihuuuu'}
  })

  private async callModal(options) {
    const modal = await this.modal.create(options);
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
