import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { treinos } from './treinos';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage {
  public treinos = treinos;

  constructor(private router: Router) { }

  public selectTreino(cod) {
    this.router.navigate([`gym/week/${cod}`], {});
  }
}
