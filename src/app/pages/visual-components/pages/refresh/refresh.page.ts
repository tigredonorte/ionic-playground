import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

export const itemList = [
  {label: 'Abacate', color: 'primary', checked: true},
  {label: 'Morango', color: 'danger', checked: false},
  {label: 'Pêssego', color: 'warning', checked: false},
  {label: 'Abacaxi', color: 'secondary', checked: false},
  {label: 'Manga', color: 'dark', checked: false},
  {label: 'Pêra', color: 'tertiary', checked: false}
];

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage {

  public value = 0;
  public items = itemList;

  public refresh = (ev) => timer(1200).subscribe(() => {
    this.items = [...itemList, ...this.items];
    ev.target.complete();
  })

}
