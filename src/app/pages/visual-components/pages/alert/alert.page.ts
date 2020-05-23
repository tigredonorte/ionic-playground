import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage {

  constructor(private alertCtrl: AlertController) { }

  alert = () => this.callAlert({
    header: 'Ok button',
    subHeader: 'Its just an ok button',
    message: 'Clica em ok cara',
    buttons: ['Ok']
  })

  multiple = () => this.callAlert({
    header: 'Multiple Buttons',
    subHeader: 'lots of buttons',
    message: 'choose one',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (data) => {
          console.log('Confirm cancel', data);
        }
      },
      {
        text: 'ok',
        handler: (data) => {
          console.log('Confirm ok', data);
        }
      },
      {
        text: 'another ok',
        cssClass: 'tertiary',
        handler: (data) => {
          console.log('Confirm another ok', data);
        }
      }
    ]
  })

  form = () => this.callAlert({
    header: 'Inputs',
    message: 'testing inputs',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
       // multiline input.
       {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'name3',
        value: 'http://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      },
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        checked: true
      },
      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2'
      },
      {
        name: 'radio1',
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        checked: true
      },
      {
        name: 'radio2',
        type: 'radio',
        label: 'Radio 2',
        value: 'value2'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (data) => {
          console.log('Confirm cancel', data);
        }
      },
      {
        text: 'save',
        handler: (data) => {
          console.log('Confirm save', data);
        }
      }
    ]
  })

  private async callAlert(data) {
    const alert = await this.alertCtrl.create(data);

    alert.present();
  }
}
