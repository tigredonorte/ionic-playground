import { indexBy, prop } from 'ramda';

import { UserDataActionTypes, UserDataAllActions, UserDataErrorMessages } from '../actions/user-data.actions';
import { fromServer, Fund, getEmptyFund } from '../models/fund.model';
import { initialState, State } from '../user-data.state';

export function reducer(state = initialState, action: UserDataAllActions): State {
  switch (action.type) {

    case UserDataActionTypes._UserSaveDataAction: {
      const user = action['data'];
      for (const i in user) {
        if (!user[i]) { continue; }
        state['data'][i] = user[i];
      }
      if (user['user_metadata']) {
        for (const i in user['user_metadata']) {
          if (!user['user_metadata'][i]) { continue; }
          state['data'][i] = user['user_metadata'][i];
        }
      }
      return {
        ...state
      };
    }

    case UserDataActionTypes._UserSetCurrentFundAction: {
      const error = action['error'] ? UserDataErrorMessages._UserSetCurrentFundAction : '';
      const currentFundId = action['fundId'].toString();
      return {
        ...state,
        currentFundId,
        error
      };
    }

    case UserDataActionTypes._UserSetAuthDataAction: {
      const error = action['error'] ? UserDataErrorMessages._UserSetAuthDataAction : '';
      const user = error ? null : action['data'];
      if (user['user_metadata']) {
        for (const i in user['user_metadata']) {
          if (!user['user_metadata'][i]) { continue; }
          user[i] = user['user_metadata'][i];
        }
      }
      return {
        ...state,
        user,
        error
      };
    }

    case UserDataActionTypes._UserSetFundDataAction: {
      const error = action['error'] ? UserDataErrorMessages._UserSetFundDataAction : '';
      const user: Fund = error ? getEmptyFund() : fromServer(action['data']);
      const loggedUserFundId = user.fundId;
      const indexById = (array: Fund[]): {[key: string]: Fund} => indexBy(prop('fundId'), array);
      const funds: {[key: string]: Fund} =
        indexById([user, ...user.relatedFunds].map((fund: Fund): Fund => ({ ...fund, relatedFunds: null })));
      const trader = action.data.Trader;
      const hasCash = action.data.ProfitabilityUseCash;
      const clientType = action.data.ClientType;
      return {
        ...state,
        funds,
        error,
        loggedUserFundId,
        trader,
        hasCash,
        clientType
      };
    }

    case UserDataActionTypes.AddUser: {
      const funds = state.funds;
      funds[action.data.fundId] = action.data;
      return {
        ...state,
        funds
      };
    }

    case UserDataActionTypes._UserRemoveFundAction: {
      const funds = state.funds;
      if (typeof state.funds[action['fundId']] !== 'undefined') {
        delete funds[action['fundId']];
      }
      return {
        ...state,
        funds
      };
    }

    case UserDataActionTypes.SetHasCash: {
      return {
        ...state,
        hasCash: action.hasCash
      };
    }

    case UserDataActionTypes.ToggleHidePatrimonyAction: {
      const preferences = state.preferences;
      preferences.hidePatrimony = !preferences.hidePatrimony;
      return {
        ...state,
        preferences
      };
    }

    default:
      return state;
  }
}
