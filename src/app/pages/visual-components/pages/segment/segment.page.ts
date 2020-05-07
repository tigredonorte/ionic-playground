import { Component } from '@angular/core';

import { itemList } from '../refresh/refresh.page';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage {
  public items = itemList;
  public isFruit = false;
  public segmentChanged = (segment) => this.isFruit = segment.detail.value === 'fruit';
}
