import { Action, createReducer, on } from '@ngrx/store';

import * as Actions from './workout.action';
import { workoutInitialState, WorkoutState } from './workout.state';

// const workoutReducer = createReducer(
//   workoutInitialState,
//   on(, (state, action) => ({ ...state, workouts: action.workouts })),
// );


export function reducer(state = workoutInitialState, action: Actions.WorkoutActions): WorkoutState {
  try {
    switch (action.type) {
      case Actions.actions.listedWorkouts: {
        return { ...state, workouts: action.workouts };
      }

      default:
        return state;
    }
  } catch (e) {
    console.warn(e);
    return state;
  }
}
