import { Injectable } from '@angular/core';
import { ApiService } from '@app/store/utils/api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as actions from './exercice.action';
import { Exercice } from './exercice.state';

@Injectable()
export class ExerciceEffects {

  @Effect() public listExercices = this.actions$.pipe(
    ofType(actions.actions.listExercices),
    mergeMap((action: actions.ListExercices) => this.apiService.get(`exercice/${action.userId}`)),
    map((exercices: Exercice[]) => new actions.ListExercicesEnd(exercices))
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
