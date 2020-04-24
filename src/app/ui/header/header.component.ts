import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() backButton = false;
  constructor(private route: ActivatedRoute) {}

  public title = this.route.snapshot.data.title;

}
