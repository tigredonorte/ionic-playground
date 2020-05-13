import { Injectable } from '@angular/core';
import { ApiService } from '@app/store/utils/api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as actions from './workout.action';
import { Exercice } from './workout.state';

@Injectable()
export class WorkoutEffects {

  @Effect() public listWorkouts = this.actions$.pipe(
    ofType(actions.actions.listWorkouts),
    mergeMap((action: actions.ListWorkouts) => this.apiService.get(`workout/${action.userId}`)),
    map((exercices: Exercice[]) => new actions.ListWorkoutsEnd(exercices))
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
