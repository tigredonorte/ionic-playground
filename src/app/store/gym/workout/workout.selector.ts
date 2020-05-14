import { createSelector } from '@ngrx/store';
import { path } from 'ramda';

import { key, WorkoutState } from './workout.state';

const selectWorkoutState = state => path([key], state);
export const selectWorkoutList = createSelector(
  selectWorkoutState,
  (state: WorkoutState): any => state.workouts
);

export const selectWorkoutItem = (gymRecordId: string) => createSelector(
  selectWorkoutState,
  (state: WorkoutState): any => state.workouts.filter(it => it.gymRecordId === gymRecordId)
);
