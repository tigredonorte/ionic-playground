import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {

  @Input() backButton = false;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.pipe(
      filter(data => data instanceof NavigationEnd),
      map(data => data['url']),
      filter(url => url.startsWith('/visual-components/')),
      untilDestroyed(this)
    ).subscribe(url => this.backButton = true);
  }

  public title = this.route.snapshot.data.title;

  public ngOnDestroy() {}
}
