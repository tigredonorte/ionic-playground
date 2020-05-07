import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage {

  constructor(private router: NavController) { }

  navigate() {
    this.router.navigateForward('visual-components/navegacao2');
  }

}
