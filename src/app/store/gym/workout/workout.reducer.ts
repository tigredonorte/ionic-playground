import * as Actions from './workout.action';
import { workoutInitialState, WorkoutState } from './workout.state';

export function reducer(state = workoutInitialState, action: Actions.WorkoutActions): WorkoutState {
  try {
    switch (action.type) {
      case Actions.actions.listedWorkouts: {
        return { ...state, exercices: action.exercices };
      }

      default:
        return state;
    }
  } catch (e) {
    console.warn(e);
    return state;
  }
}
