import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SampleModalComponent } from '../../../modal/sample-modal/sample-modal.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {

  constructor(private popoverCtrl: PopoverController) { }

  public async showPopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: SampleModalComponent,
      componentProps: {title: 'Ihuuuu', isPopover: true},
      event: ev
    });
    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);
  }

}
