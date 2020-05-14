import * as Actions from './exercice.action';
import { exerciceInitialState, ExerciceState } from './exercice.state';

export function reducer(state = exerciceInitialState, action: Actions.ExerciceActions): ExerciceState {
  try {
    switch (action.type) {
      case Actions.actions.listedExercices: {
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
