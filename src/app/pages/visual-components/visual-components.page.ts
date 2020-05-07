import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { routes } from './routes';

@Component({
  selector: 'app-visual-components',
  templateUrl: './visual-components.page.html',
  styleUrls: ['./visual-components.page.scss'],
})
export class VisualComponentsPage {

  public selectedIndex = 0;
  public routes: any[] = routes.filter(route => !!route.data).map(route => ({
    title: route.data.title,
    icon: route.data.icon,
    url: route.path
  }));

  constructor(private router: NavController) { }

  navigate(data, i) {
    this.selectedIndex = i;
    console.log(data);
    this.router.navigateForward(`visual-components/${data.url}`);
  }

}
