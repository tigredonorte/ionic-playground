import * as Actions from './gym-record.action';
import { gymRecordInitialState, GymRecordState } from './gym-record.state';

export function reducer(state = gymRecordInitialState, action: Actions.GymRecordActions): GymRecordState {
  try {
    switch (action.type) {
      case Actions.actions.listedGymRecords: {
        return { ...state, gymRecords: action.gymRecords };
      }

      default:
        return state;
    }
  } catch (e) {
    console.warn(e);
    return state;
  }
}
