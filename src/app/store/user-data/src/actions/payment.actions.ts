/* tslint:disable:class-name */
import { Action } from '@ngrx/store';

export enum UserPaymentActionTypes {
  UserSubscriptionRequestResult = '[User.Payment] UserSubscriptionRequestResult',
  UserCancelSubscriptionAction = '[User.Payment] UserCancelSubscription',
  UserGetSubscriptionStatusAction = '[User.Payment] UserGetSubscriptionStatus',
  UserGetCreditCardInfoAction = '[User.Payment] UserGetCreditCardInfo',
  UserGetBillingDateAction = '[User.Payment] UserGetBillingDate',
  UserGetPaymentHistoryAction = '[User.Payment] UserGetPaymentHistory',
  UserSubscribeAction = '[User.Payment] UserSubscribe',
  UserUpdateCardAction = '[User.Payment] UserUpdateCard',
  _UserSubscribeAction = '[User.Payment] UserSubscribe END',
  _UserSubscribeErrorAction = '[User.Payment] UserSubscribe Error',
  _UserCancelSubscriptionAction = '[User.Payment] UserCancelSubscription END',
  _UserGetSubscriptionStatusAction = '[User.Payment] UserGetSubscriptionStatus END',
  _UserGetCreditCardInfoAction = '[User.Payment] UserGetCreditCardInfo END',
  _UserGetBillingDateAction = '[User.Payment] UserGetBillingDate END',
  _UserRequestError = '[User.Payment] UserRequestError END',
  _UserGetPaymentHistoryAction = '[User.Payment] UserGetPaymentHistory END',
  _UserUpdateCardAction = '[User.Payment] UserUpdateCard END',
}

export class UserSubscribe implements Action {
  public readonly type = UserPaymentActionTypes.UserSubscribeAction;
  constructor(public data: any) {}
}

export class _UserSubscribe implements Action {
  public readonly type = UserPaymentActionTypes._UserSubscribeAction;
  constructor() {}
}

export class UserUpdateCard implements Action {
  public readonly type = UserPaymentActionTypes.UserUpdateCardAction;
  constructor(public data: any) {}
}

export class _UserUpdateCard implements Action {
  public readonly type = UserPaymentActionTypes._UserUpdateCardAction;
  constructor() {}
}

export class _UserSubscribeError implements Action {
  public readonly type = UserPaymentActionTypes._UserSubscribeErrorAction;
  constructor(public message = '') {}
}

export class UserSubscriptionRequestResult implements Action {
  public readonly type = UserPaymentActionTypes.UserSubscriptionRequestResult;
  constructor(public data: any) {}
}

export class UserCancelSubscription implements Action {
  public readonly type = UserPaymentActionTypes.UserCancelSubscriptionAction;
  constructor() {}
}

export class _UserCancelSubscription implements Action {
  public readonly type = UserPaymentActionTypes._UserCancelSubscriptionAction;
  constructor() {}
}

export class UserGetBillingDate implements Action {
  public readonly type = UserPaymentActionTypes.UserGetBillingDateAction;
   constructor() {}
}

export class _UserGetBillingDate implements Action {
  public readonly type = UserPaymentActionTypes._UserGetBillingDateAction;
   constructor(public data: any) {}
}

export class UserGetCreditCardInfo implements Action {
  public readonly type = UserPaymentActionTypes.UserGetCreditCardInfoAction;
  constructor(public data: any) {}
}

export class _UserGetCreditCardInfo implements Action {
  public readonly type = UserPaymentActionTypes._UserGetCreditCardInfoAction;
  constructor(public data: any) {}
}

export class UserGetSubscriptionStatus implements Action {
  public readonly type = UserPaymentActionTypes.UserGetSubscriptionStatusAction;
  constructor(public data: any) {}
}

export class _UserGetSubscriptionStatus implements Action {
  public readonly type = UserPaymentActionTypes._UserGetSubscriptionStatusAction;
  constructor(public data: any) {}
}

export class UserGetPaymentHistoryAction implements Action {
  public readonly type = UserPaymentActionTypes.UserGetPaymentHistoryAction;
  constructor() {}
}

export class _UserGetPaymentHistory implements Action {
  public readonly type = UserPaymentActionTypes._UserGetPaymentHistoryAction;
  constructor(public data: any) {}
}

export class _UserRequestError implements Action {
  public readonly type = UserPaymentActionTypes._UserRequestError;
  constructor() {}
}

export type UserPaymentActions =
  | UserSubscribe
  | UserCancelSubscription
  | UserGetBillingDate
  | UserGetCreditCardInfo
  | UserGetSubscriptionStatus
  | UserGetPaymentHistoryAction
  | UserUpdateCard;

export type _UserPaymentActions =
  | UserSubscriptionRequestResult
  | _UserSubscribe
  | _UserSubscribeError
  | _UserCancelSubscription
  | _UserGetBillingDate
  | _UserGetCreditCardInfo
  | _UserGetSubscriptionStatus
  | _UserGetPaymentHistory
  | _UserUpdateCard
  | _UserRequestError;

export type UserPaymentAllActions = UserPaymentActions | _UserPaymentActions;
