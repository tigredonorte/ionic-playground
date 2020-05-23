import { createSelector } from '@ngrx/store';
import { path } from 'ramda';

import { key, GymRecordState } from './gym-record.state';

const selectGymRecordState = state => path([key], state);
export const selectGymRecordList = createSelector(
  selectGymRecordState,
  (state: GymRecordState): any => state.gymRecords
);

export const selectGymRecordItem = (gymRecordId: string) => createSelector(
  selectGymRecordState,
  (state: GymRecordState): any => ((state.gymRecords.filter(it => it.gymRecordId === gymRecordId) || [])[0])
);
