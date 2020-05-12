import { createSelector } from '@ngrx/store';
import { isNil, path } from 'ramda';

import { Fund } from './models/fund.model';
import { initialState, Key, State } from './payment.state';
import { CreditCard, Billing, SubscriptionStatus, SubscriptionEvent, PaymentHistory } from './models/payment.model';

export const loggedFundIsAdvisor = (fund: Fund) => fund.fundTypeName === 'ADVISOR';

export const selectFeature = state => state[Key];
export const getBillingData = (state): Billing => path([Key, 'payment', 'billing'], state);
export const getCreditCard = (state): CreditCard => path([Key, 'payment', 'creditCard'], state);
export const getPaymentHistory = (state): PaymentHistory => path([Key, 'payment', 'history'], state);
export const getStatus = (state): SubscriptionStatus => path([Key, 'payment', 'subscriptionStatus'], state);

const selectInCreditCardState = (key: string, state: State, valueDefault: any) => {
  let data: any = path(['creditcard', key], state);
  if (!isNil(data)) {
    return data;
  }
  data = path(['creditcard', key], initialState);
  if (!isNil(data)) {
    return data;
  }
  return valueDefault;
};
export const selectCreditCardSubscribeError = createSelector(
  selectFeature,
  (state: State): string => selectInCreditCardState('failed', state, '')
);
export const selectCreditCardSaving = createSelector(
  selectFeature,
  (state: State): boolean => selectInCreditCardState('saving', state, false)
);
export const selectFeaturePayment = createSelector(
  selectFeature,
  (state: State) => state && state.payment || initialState.payment
);
export const selectFeaturePaymentBilling = createSelector(
  selectFeature,
  (state: State): Billing => path(['payment', 'billing'], state) || initialState.payment.billing
);
export const selectFeaturePaymentCard = createSelector(
  selectFeature,
  (state: State): CreditCard => path(['payment', 'creditCard'], state) || initialState.payment.creditCard
);
export const selectFeaturePaymentStatus = createSelector(
  selectFeature,
  (state: State): SubscriptionStatus => path(['payment', 'subscriptionStatus'], state) || initialState.payment.subscriptionStatus
);
export const selectFeaturePaymentEvent = createSelector(
  selectFeature,
  (state: State): SubscriptionEvent => path(['payment', 'event'], state) || initialState.payment.event
);
export const selectFeaturePaymentHistory = createSelector(
  selectFeature,
  (state: State) => path(['payment', 'history'], state) || initialState.payment.history
);
export const selectFeaturePaymentHistoryLoading = createSelector(
  selectFeature,
  (state: State): boolean => path(['payment', 'loading', 'history'], state) || false
);
export const selectFeaturePaymentHistoryDetails = createSelector(
  selectFeature,
  (state: State) => path(['payment', 'history', 'Charges'], state) || initialState.payment.history.Charges
);
export const selectIsPremium = createSelector<any, any, boolean>(
  selectFeature,
  (state: State) => path(['payment', 'isPremium'], state)
);
