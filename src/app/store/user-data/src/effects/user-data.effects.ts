import { Injectable } from '@angular/core';
import { LoginService } from '@gorila/shared';
import { SocketService } from '@gorila/socket';
import { Actions, Effect, EffectNotification, ofType, OnRunEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { isNil, path } from 'ramda';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';

import * as UserDataActions from '../actions/user-data.actions';
import { FundIdType } from '../models/fund.model';
import { Auth0UserService } from '../services/auth0-user.service';
import { PaymentUserService } from '../services/payment-user.service';
import * as Selectors from '../user-data.selectors';
import { State } from '../user-data.state';

@Injectable()
export class UserDataEffects implements OnRunEffects {
  @Effect()
  public loginEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserLoginAction),
    map(data => new UserDataActions._UserLogin())
  );

  @Effect()
  public logoutEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserLogoutAction),
    map(_ => new UserDataActions._UserLogout())
  );

  @Effect()
  public saveDataEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserSaveDataAction),
    withLatestFrom(this.store$),
    map(([_, store]) => [_, Selectors.selectFeature(store)]),
    map(([_, store]) => [_, store.funds[store.currentFundId]['user_id']]),
    map(([action, user_id]: [Action, string]) => this.auth0.saveData(user_id, action['data'])),
    map(data => new UserDataActions._UserSaveData(data))
  );

  @Effect()
  public setAuthDataEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserSetAuthDataAction),
    map((action: any) => ({ ...action.data, token: action['token'] })),
    map(data => new UserDataActions._UserSetAuthData(data, !data || !data.token))
  );

  @Effect()
  public setCurrentFundEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserSetCurrentFundAction),
    withLatestFrom(this.store$),
    map(([_, store]) => [_, Selectors.selectFeature(store)]),
    map(([action, store]) => [store.funds[action['fundId']] && action['fundId'] || store.currentFundId, store.currentFundId]),
    map(([fundId, currentFundId]) => [fundId, currentFundId]),
    map(([fundId, currentFundId]) => {
      const error = fundId === currentFundId;
      if (!error && !!this.socketService && !!fundId) {
        this.socketService.emit('unsubscribe', currentFundId);
        this.loginService.setFundId(fundId);
        this.socketService.emit('subscribe', fundId);
      }
      return [ fundId, error ];
    }),
    map(([fundId, error]: [FundIdType, boolean]) => new UserDataActions._UserSetCurrentFund(fundId, error))
  );

  @Effect()
  public setFundDataEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserSetFundDataAction),
    map(action => action['data']),
    map(data => new UserDataActions._UserSetFundData(data, !data))
  );

  @Effect()
  public removeFundEffect$ = this.actions$.pipe(
    ofType(UserDataActions.UserDataActionTypes.UserRemoveFundAction),
    withLatestFrom(this.store$),
    map(([action, store]) => [action['fundId'], Selectors.selectFeature(store)]),
    filter(([fundId, store]) => !!store.funds[fundId]),
    map(([fundId, _]) => new UserDataActions._UserRemoveFund(fundId))
  );

  @Effect({ dispatch: false })
  public setDataEffect$ = this.actions$.pipe(
    ofType(
      UserDataActions.UserDataActionTypes.UserSetDataAction,
      UserDataActions.UserDataActionTypes._UserSetAuthDataAction,
      UserDataActions.UserDataActionTypes._UserSaveDataAction
    ),
    withLatestFrom(this.store$),
    map(([_, store]) => [_, Selectors.selectFeatureUser(store)])
  );

  public ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
    return this.actions$.pipe(
      ofType(UserDataActions.UserDataActionTypes.UserLoginAction),
      exhaustMap(() =>
        resolvedEffects$.pipe(
          takeUntil(this.actions$.pipe(ofType(UserDataActions.UserDataActionTypes._UserLogoutAction)))
        )
      )
    );
  }

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private auth0: Auth0UserService,
    private socketService: SocketService,
    private loginService: LoginService
  ) { }
}
