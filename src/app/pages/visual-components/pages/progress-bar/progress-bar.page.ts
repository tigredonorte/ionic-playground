import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public value = 0;
  constructor() { }

  ngOnInit() {
    timer(500, 500).subscribe(() => {
      this.value += .1;
      if (this.value > 1) {
        this.value = 0;
      }
    });
  }

}
