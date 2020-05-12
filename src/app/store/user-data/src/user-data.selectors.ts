import { createSelector } from '@ngrx/store';
import { isNil, path } from 'ramda';

import { Fund } from './models/fund.model';
import { User } from './models/user.model';
import { initialState, Key, State } from './user-data.state';

export const loggedFundIsAdvisor = (fund: Fund) => fund.fundTypeName === 'ADVISOR';
export const fundIsBrokerClient = (fund: Fund) => fund.fundTypeName === 'BROKERCLIENT';
const loggedFundNotCurrent = (state: State) => state.loggedUserFundId !== state.currentFundId;

export const selectFeature = state => state[Key];

export const selectFeatureCurrentFundId = createSelector(
  selectFeature,
  (state: State): string => path(['currentFundId'], state) || initialState.currentFundId
);
export const selectFeatureCurrentFundData = createSelector(
  selectFeature,
  (state: State) => path(['funds', state.currentFundId], state) || initialState.funds[initialState.currentFundId]
);
export const selectFeatureCurrentLoggedFundData = createSelector(
  selectFeature,
  (state: State) => state && state.funds[state.loggedUserFundId] || initialState.funds[initialState.loggedUserFundId]
);
export const selectFeatureFunds = createSelector(
  selectFeature,
  (state: State) => state && state.funds || {}
);
export const selectFeatureLoggedUserFundId = createSelector(
  selectFeature,
  (state: State) => state && state.loggedUserFundId || initialState.loggedUserFundId
);
export const selectFeatureUser = createSelector(
  selectFeature,
  (state: State) => state && state.user || initialState.user
);
export const selectFeatureUserToken = createSelector(
  selectFeatureUser,
  (user: User) => user && user.token || ''
);
export const selectAdvisorMode = createSelector(
  selectFeatureCurrentLoggedFundData,
  loggedFundIsAdvisor
);
export const selectAdvisorAsClient = createSelector(
  selectFeature,
  (state: State) => state
    ? loggedFundNotCurrent(state) && loggedFundIsAdvisor(state.funds[state.loggedUserFundId])
    : false
);
export const selectBrokerClientMode = createSelector(
  selectFeatureCurrentFundData,
  fundIsBrokerClient
);
export const selectHidePatrimony = createSelector(
  selectFeature,
  (state: State) => path(['preferences', 'hidePatrimony'], state) || initialState.preferences.hidePatrimony
);
export const selectCreatedAt = createSelector(
  selectFeature,
  (state: State) => (path(['user', 'created_at'], state) || '') as string
);
export const selectTraderData = createSelector(
  selectFeature,
  (state: State) => path(['trader'], state) || initialState.trader
);
export const selectHasCash = createSelector(
  selectFeature,
  (state: State): boolean => path(['hasCash'], state) || initialState.hasCash
);
