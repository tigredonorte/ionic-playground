import { Component } from '@angular/core';

import { itemList } from '../refresh/refresh.page';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage {

  public items = itemList;
  public doReorder = (ev) => {
    console.log(ev.detail);
    ev.target.complete();
  }
}
