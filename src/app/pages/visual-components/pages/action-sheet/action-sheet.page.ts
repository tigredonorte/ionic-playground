import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage {

  constructor(private actionSheet: ActionSheetController) {}

  public async exec() {
    const sheet = this.actionSheet.create({
      header: 'What do you want with this image?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => console.log('delete click')
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => console.log('share click')
        },
      ]
    });

    (await sheet).present();
  }
}
