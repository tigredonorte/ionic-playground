import { Component } from '@angular/core';

import { itemList } from '../refresh/refresh.page';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage {

  public items = itemList;
  public radio = '';
  public changed = (data) => console.log(data);
}
