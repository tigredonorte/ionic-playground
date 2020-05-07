import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage {

  public months = [
    {name: 'Janeiro', checked: false, value: 1},
    {name: 'Fevereiro', checked: false, value: 2},
    {name: 'Março', checked: false, value: 3},
    {name: 'Abril', checked: false, value: 4},
    {name: 'Maio', checked: false, value: 5},
    {name: 'Junho', checked: false, value: 6},
    {name: 'Julho', checked: false, value: 7},
    {name: 'Agosto', checked: false, value: 8},
    {name: 'Setembro', checked: false, value: 9},
    {name: 'Outubro', checked: false, value: 10},
    {name: 'Novembro', checked: false, value: 11},
    {name: 'Dezembro', checked: true, value: 12},
  ];
  public test(data) {
    console.log(data);
  }

}
