import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListGymRecords, selectGymRecordList } from '@app/store/gym/gym-record';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ListWorkouts } from '@app/store/gym/workout';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  userId = '1';
  public treinos$: Observable<any> = this.store.pipe(select(selectGymRecordList));

  constructor(
    private router: Router,
    private store: Store<any>
  ) { }

  public ngOnInit() {
    this.store.dispatch(new ListWorkouts(this.userId));
    this.store.dispatch(new ListGymRecords(this.userId));
  }

  public selectTreino(cod) {
    this.router.navigate([`gym/workout/${cod}`], {});
  }
}
