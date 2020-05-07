import { Component, OnInit } from '@angular/core';

import { itemList } from '../refresh/refresh.page';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage {

  public items = itemList;

}
