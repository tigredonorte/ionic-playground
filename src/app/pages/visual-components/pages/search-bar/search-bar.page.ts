import { Component, OnInit } from '@angular/core';

import { itemList } from '../refresh/refresh.page';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage {

  public items = itemList;
  public search = '';
  public filtered = [];

  constructor() { }

  public doFilter = (str) => {
    this.filtered = str === '' ? [] : itemList.filter((it) => it.label.toLocaleLowerCase().startsWith(str));
  }

}
