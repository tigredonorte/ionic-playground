import { ActionTypes } from './logout.actions';

export function clearState(reducer) {
  return function (state, action) {

    if (action.type === ActionTypes.LOGOUT) {
      state = undefined;
    }

    return reducer(state, action);
  };
}
