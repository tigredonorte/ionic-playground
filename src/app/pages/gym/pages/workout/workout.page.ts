import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListExercices } from '@app/store/gym/exercice/exercice.action';
import { selectGymRecordItem } from '@app/store/gym/gym-record';
import { selectWorkoutItem } from '@app/store/gym/workout';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

  public userId = '1';
  public workoutCode = '0';
  public workout$: Observable<any>;
  public gymRecord$: Observable<any>;

  constructor(
    private router: Router,
    private store: Store<any>
  ) {
    this.workoutCode = this.router.url.split('/').pop();
  }

  public ngOnInit() {
    this.store.dispatch(new ListExercices(this.workoutCode));
    this.workout$ = this.store.pipe(select(selectWorkoutItem(this.workoutCode)));
    this.gymRecord$ = this.store.pipe(select(selectGymRecordItem(this.workoutCode)));
  }

  public selectDay(index) {
    this.router.navigate([`gym/training/${this.workoutCode}/${index}`], {});
  }

}
