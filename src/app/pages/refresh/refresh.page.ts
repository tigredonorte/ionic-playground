import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

export const itemList = [
  {label: 'Abacate'},
  {label: 'Morango'},
  {label: 'Pêssego'},
  {label: 'Abacaxi'},
  {label: 'Manga'},
  {label: 'Pêra'}
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
