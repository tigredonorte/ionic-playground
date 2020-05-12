import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as actions from './workout.action';
import { WorkoutService } from './workout.service';
import { WorkoutItem } from './workout.state';

@Injectable()
export class WorkoutEffects {

  @Effect() public listWorkouts = this.actions$.pipe(
    ofType(actions.actions.listWorkouts),
    mergeMap((action: actions.ListWorkouts) => this.workoutService.listWorkouts(action.userId)),
    map((workouts: WorkoutItem[]) => new actions.ListWorkoutsEnd(workouts))
  );

  constructor(
    private actions$: Actions,
    private workoutService: WorkoutService
  ) {}
}
