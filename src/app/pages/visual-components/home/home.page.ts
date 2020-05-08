import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { routes } from '../routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public selectedIndex = 0;
  public routes: any[] = routes.filter(route => !!route.data).map(route => ({
    title: route.data.title,
    icon: route.data.icon,
    url: route.path
  })).sort((a, b) => a.title === b.title ? 0 : a.title > b.title ? 1 : -1);

  constructor(private router: NavController) { }

  navigate(data, i) {
    this.selectedIndex = i;
    this.router.navigateForward(`visual-components/${data.url}`);
  }

}
