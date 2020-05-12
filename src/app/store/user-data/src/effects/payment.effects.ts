import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { isNil, path } from 'ramda';
import { from } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom, filter, mergeMap } from 'rxjs/operators';

import * as UserPaymentActions from '../actions/payment.actions';
import { PaymentUserService } from '../services/payment-user.service';
import { State } from '../payment.state';
import { getBillingData, getCreditCard, getPaymentHistory, getStatus } from '../payment.selectors';
import { SubscriptionEvent, SubscriptionStatus } from '../models/payment.model';

@Injectable()
export class UserPaymentEffects {

  @Effect()
  public subcribeUserEffect$ = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserSubscribeAction),
    switchMap(action => this.paymentService.subscribeUser(action['data']['token']).pipe(
      catchError(e => {
        if (path(['error', 'text'], e) === 'Accepted') {
          return from([true]);
        }
        console.warn(e);
        return from([null]);
      })
    )),
    map((data) => (isNil(data))
      ? new UserPaymentActions._UserSubscribeError('request error')
      : new UserPaymentActions._UserSubscribe()
    )
  );

  @Effect()
  public updateCardEffect$ = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserUpdateCardAction),
    switchMap(action => this.paymentService.updateCard(action['data']['token']).pipe(
      catchError(e => {
        if (path(['error', 'text'], e) === 'Accepted') {
          return from([true]);
        }
        console.warn(e);
        return from([null]);
      })
    )),
    map((data) => (isNil(data))
      ? new UserPaymentActions._UserSubscribeError('request error')
      : new UserPaymentActions._UserUpdateCard()
    )
  );

  @Effect()
  public cancelSubscriptionEffect$ = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserCancelSubscriptionAction),
    switchMap(() => this.paymentService.cancelSubscription()),
    map(() => new UserPaymentActions._UserCancelSubscription())
  );

  @Effect()
  public getBillingDateEffect$ = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserGetBillingDateAction),
    withLatestFrom(this.store$),
    filter(([_, store$]) => !getBillingData(store$).date),
    switchMap(() => this.paymentService.getBillingDate().pipe(
      map(data => new UserPaymentActions._UserGetBillingDate(data)),
      catchError(e => {
        console.warn(e);
        return from([new UserPaymentActions._UserRequestError()]);
      })
    )),
  );

  @Effect()
  public getCreditCardData = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserGetCreditCardInfoAction),
    withLatestFrom(this.store$),
    filter(([action, store$]) => {
      const card = getCreditCard(store$);
      return action['data']['forceUpdate'] || !card.company_name || card.company_name === 'n/a';
    }),
    switchMap(() => this.paymentService.getCreditCardData().pipe(
      map(data => new UserPaymentActions._UserGetCreditCardInfo(data)),
      catchError(e => {
        console.warn(e);
        return from([new UserPaymentActions._UserRequestError()]);
      })
    )),
  );

  @Effect()
  public getSubscriptionStatus = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserGetSubscriptionStatusAction),
    withLatestFrom(this.store$),
    filter(([action, store$]) => action['data']['forceUpdate'] || !getStatus(store$)),
    switchMap(() => this.paymentService.getSubscriptionStatus().pipe(
      mergeMap(data => {
        const out = [];
        out.push(new UserPaymentActions._UserGetSubscriptionStatus(data));
        if ([SubscriptionStatus.ACTIVE, SubscriptionStatus.WARNING, SubscriptionStatus.DEBIT].indexOf(data.Status) !== -1) {
          out.push(new UserPaymentActions.UserGetCreditCardInfo({ forceUpdate: true }));
        }
        return out;
      }),
      catchError(e => {
        console.warn(e);
        return from([new UserPaymentActions._UserRequestError()]);
      })
    )),
  );

  @Effect()
  public getPaymentHistory = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserGetPaymentHistoryAction),
    withLatestFrom(this.store$),
    filter(([_, store$]) => !getPaymentHistory(store$).User),
    switchMap(() => this.paymentService.getPaymentHistory().pipe(
      map(data => new UserPaymentActions._UserGetPaymentHistory(data)),
      catchError(e => {
        console.warn(e);
        return from([new UserPaymentActions._UserRequestError()]);
      })
    )),
  );

  @Effect()
  public handleSubscriptionRequestResult = this.actions$.pipe(
    ofType(UserPaymentActions.UserPaymentActionTypes.UserSubscriptionRequestResult),
    filter(action => action['data']['event'] === SubscriptionEvent.NEW),
    switchMap(() => this.paymentService.getSubscriptionStatus().pipe(
      mergeMap(() => [
        new UserPaymentActions.UserGetSubscriptionStatus({ forceUpdate: true }),
        new UserPaymentActions.UserGetBillingDate()
      ])
    )),
  );

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private paymentService: PaymentUserService
  ) { }
}
