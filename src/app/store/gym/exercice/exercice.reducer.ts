import { values } from 'ramda';

import * as Actions from './exercice.action';
import { exerciceInitialState, ExerciceState } from './exercice.state';

export function reducer(state = exerciceInitialState, action: Actions.ExerciceActions): ExerciceState {
  try {
    switch (action.type) {
      case Actions.actions.listedExercices: {
        return { ...state, exercices: action.exercices };
      }

      case Actions.actions.updateExerciceSet: {
        const exerciceIndex = state.exercices.findIndex(data => action.setItem.id === data.id);
        const index: number = action.setItem.i;
        return {
          ...state,
          exercices: values({
            ...state.exercices,
            [exerciceIndex]: {
              ...state.exercices[exerciceIndex],
              setExecution: values({
                ...state.exercices[exerciceIndex].setExecution,
                [index]: {
                  series: action.setItem.series,
                  weight: action.setItem.weight
                }
              })
            }
          })
        };
      }


      default:
        return state;
    }
  } catch (e) {
    console.warn(e);
    return state;
  }
}
