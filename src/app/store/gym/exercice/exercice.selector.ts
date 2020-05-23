import { createSelector } from '@ngrx/store';
import { path } from 'ramda';

import { key, ExerciceState } from './exercice.state';

const selectExerciceState = state => path([key], state);
export const selectExerciceList = createSelector(
  selectExerciceState,
  (state: ExerciceState): any => state.exercices
);
