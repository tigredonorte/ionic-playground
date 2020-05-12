import { UserPaymentActionTypes, UserPaymentAllActions } from '../actions/payment.actions';
import { Charge, getEmptyBilling, getEmptyCard, SubscriptionEvent, SubscriptionStatus } from '../models/payment.model';
import { initialState, State } from '../payment.state';
import { mergeDeepWithKey, path } from 'ramda';

export function reducer(state = initialState, action: UserPaymentAllActions): State {
  switch (action.type) {
    case UserPaymentActionTypes.UserUpdateCardAction:
    case UserPaymentActionTypes.UserSubscribeAction: {
      return {
        ...state,
        creditcard: {
          ...state.creditcard,
          saving: true,
          failed: ''
        }
      };
    }
    case UserPaymentActionTypes._UserUpdateCardAction:
    case UserPaymentActionTypes._UserSubscribeAction: {
      return {
        ...state,
        creditcard: {
          ...state.creditcard,
          saving: false,
          failed: ''
        }
      };
    }

    case UserPaymentActionTypes._UserSubscribeErrorAction: {
      return {
        ...state,
        creditcard: {
          ...state.creditcard,
          saving: false,
          failed: action.message
        }
      };
    }

    case UserPaymentActionTypes._UserGetBillingDateAction: {
      const payment = state.payment;
      payment['billing'] = action.data.nextCharge;
      return {
        ...state,
        payment
      };
    }

    case UserPaymentActionTypes._UserGetCreditCardInfoAction: {
      const payment = state.payment;
      payment['creditCard'] = {
        ...action.data,
        'company_name': action.data.company_name.toLowerCase(),
      };
      return {
        ...state,
        payment
      };
    }

    case UserPaymentActionTypes.UserSubscriptionRequestResult: {
      const payment = state.payment;
      const event = action.data.event;
      payment.event = event;
      if (event === SubscriptionEvent.REMOVE) {
        payment.subscriptionStatus = SubscriptionStatus.CANCELED;
        payment.isPremium = false;
        payment.creditCard = getEmptyCard();
        payment.billing = getEmptyBilling();
      }
      return {
        ...state,
        payment
      };
    }

    case UserPaymentActionTypes._UserGetSubscriptionStatusAction: {
      const payment = state.payment;
      const status = action.data.Status;
      payment.subscriptionStatus = status;
      payment.isPremium = [SubscriptionStatus.ACTIVE, SubscriptionStatus.WARNING].indexOf(status) !== -1;
      return {
        ...state,
        payment
      };
    }

    case UserPaymentActionTypes.UserGetPaymentHistoryAction: {
      if (!!path(['payment', 'history', 'User'], state)) {
        return state;
      }
      return mergeDeepWithKey((k, a, b) => b, state, {
        payment: { loading: { history: true } }
      });
    }

    case UserPaymentActionTypes._UserGetPaymentHistoryAction: {
      const data = action.data;
      data.Charges = data.Charges.filter((item: Charge) => ['Paid', 'Rejected'].indexOf(item.Status) !== -1);
      return mergeDeepWithKey((k, a, b) => b, state, {
        payment: {
          history: data,
          loading: { history: false }
        }
      });
    }

    default:
      return state;
  }
}
