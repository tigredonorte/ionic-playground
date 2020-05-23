import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {

  constructor(private toastCtrl: ToastController) { }

  presentToast = () => this.displayToast({
    message: 'Dados salvos corretamente',
    animated: true,
    color: 'danger',
    duration: 2000
  })

  presentToastWithOptions = () => this.displayToast({
    header: 'Toast header',
    message: 'Click to Close',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  })

  private async displayToast(options) {
    const toast = await this.toastCtrl.create(options);
    toast.present();
  }

}
