import { Component } from '@angular/core';
import { keys } from 'ramda';

import { effects } from './effects';
import { timer } from 'rxjs';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage {

  items = [
    {
      img: 'https://media-manager.noticiasaominuto.com/1920/1557486293/naom_5cd55a3f25614.jpg',
    },
    {
      img: 'https://img.elo7.com.br/product/zoom/278140E/painel-de-festa-vingadores-marvel-avengers-endgame-ultimato.jpg'
    },
    {
      img: 'https://cdn.ome.lt/jSsx4qiWUwgc9CJoGf1dHw4eeiM=/770x0/smart/uploads/conteudo/fotos/marvels-avengers-estatua-capitao.jpg',
    }
  ];

  public changing = false;
  public slideOpts = {};
  public effectList = keys(effects);
  public selectEffect = (segment) => {
    this.slideOpts = effects[segment.detail.value] || {};
    this.changing = true;
    timer(50).subscribe(() => this.changing = false);
  }
}
