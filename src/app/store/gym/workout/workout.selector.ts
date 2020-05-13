import { createSelector } from '@ngrx/store';
import { path } from 'ramda';

import { key, WorkoutState } from './workout.state';

const selectWorkoutState = state => path([key], state);
export const selectExerciceList = createSelector(
  selectWorkoutState,
  (state: WorkoutState): any => (path(['exercices'], state))
);
