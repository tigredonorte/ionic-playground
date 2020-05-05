import { Component } from '@angular/core';

import { itemList } from '../refresh/refresh.page';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage {

  public items = itemList;
  public customAlertOptions: any = {
    header: 'Fruit options',
    subHeader: 'Select your favorite fruit',
    message: 'You can select only one',
    translucent: true
  };

  public customPopoverOptions: any = {
    header: 'Fruit options',
    subHeader: 'Select your favorite fruit',
    message: 'Only select your dominant hair color'
  };

  public customActionSheetOptions: any = {
    header: 'Fruit options',
    subHeader: 'Select your favorite fruit'
  };
}
