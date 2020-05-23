import { Injectable } from '@angular/core';
import { ApiService } from '@app/store/utils/api.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

import * as actions from './gym-record.action';
import { GymRecord } from './gym-record.state';

@Injectable()
export class GymRecordEffects {

  @Effect() public listGymRecords = this.actions$.pipe(
    ofType(actions.actions.listGymRecords),
    mergeMap((action: actions.ListGymRecords) => this.apiService.get(`gymRecord/${action.userId}`)),
    map((gymRecords: GymRecord[]) => new actions.ListGymRecordsEnd(gymRecords))
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}
