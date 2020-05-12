import { TestBed } from '@angular/core/testing';
import { LoginService, LoginServiceStub } from '@gorila/shared';
import { SocketService } from '@gorila/socket';
import { NgRxTestingModule, SocketServiceStub } from '@gorila/tests';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { Auth0UserTestingService } from '../../testing';
import * as UserDataActions from '../actions/user-data.actions';
import { Auth0UserService } from '../services/auth0-user.service';
import { initialState } from '../user-data.state';
import { UserDataEffects } from './user-data.effects';
import { PaymentUserService } from '../services/payment-user.service';
import { PaymentUserTestingService } from '../../testing/payment-user-testing.service';

describe('UserDataEffects', () => {
  let actions$: Observable<any>; // tslint:disable-line
  let effects: UserDataEffects;

  const auth0Data = {
    'name': 'Gorila Tester',
    'picture': '',
    'created_at': 'genesis',
    'email': 'tester@gorila.com.br',
    'email_verified': false,
    'first_time': false,
    'user_id': 'auth0|123',
    'app_metadata': {},
    'data': {}
  };
  const auth0DataToken = 'asfasfasfa.sglkhsbfvhblvanhldgfdlhsg.kj3tihsefslg';
  const auth0DataWithToken = { ...auth0Data, token: auth0DataToken };
  const defaultSpec = spec => it(spec.message, () => {
    const a = spec.inputAction;
    const b = spec.outputAction;

    const m1 = '--a---aa-a|---a';
    const m2 = '--b---bb-b|    ';

    actions$ = hot(m1, { a });
    const expected = cold(m2, { b });

    expect(spec.getEffect()).toBeObservable(expected);
  });
  const fundData = {
    fundId: '2341',
    fundTypeName: 'CLIENT',
    approved: false,
    activated: true,
    lastUpdate: '',
    updateWorkItemId: ''
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Store,
        UserDataEffects,
        { provide: Auth0UserService, useClass: Auth0UserTestingService },
        provideMockActions(() => actions$),
        { provide: Store, useValue: new NgRxTestingModule({'user-data': initialState}) },
        { provide: SocketService, useClass: SocketServiceStub.Dummy },
        { provide: LoginService, useClass: LoginServiceStub.Dummy },
        { provide: PaymentUserService, userClass: PaymentUserTestingService },
      ]
    });

    effects = TestBed.get(UserDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('1-1 dispatches', () => {
      [
        {
          message: 'should map external login action to related internal',
          inputAction: new UserDataActions.UserLogin(),
          outputAction: new UserDataActions._UserLogin(),
          getEffect: () => effects.loginEffect$
        },
        {
          message: 'should map external logout action to related internal',
          inputAction: new UserDataActions.UserLogout(),
          outputAction: new UserDataActions._UserLogout(),
          getEffect: () => effects.logoutEffect$
        },
        {
          message: 'should map external set auth data action to related internal',
          inputAction: new UserDataActions.UserSetAuthData(auth0Data, auth0DataToken),
          outputAction: new UserDataActions._UserSetAuthData(auth0DataWithToken, false),
          getEffect: () => effects.setAuthDataEffect$
        },
        {
          message: 'should map external set current fund action to related internal with error for invalid fundid',
          inputAction: new UserDataActions.UserSetCurrentFund('0'),
          outputAction: new UserDataActions._UserSetCurrentFund('0', true),
          getEffect: () => effects.setCurrentFundEffect$
        },
        {
          message: 'should map external set fund data action to related internal',
          inputAction: new UserDataActions.UserSetFundData(fundData),
          outputAction: new UserDataActions._UserSetFundData(fundData, false),
          getEffect: () => effects.setFundDataEffect$
        }
      ].forEach(defaultSpec);
  });

  describe('store with custom state', () => {
    const fundId = fundData.fundId;

    beforeEach(() => {
      TestBed.get(Store).next({ 'user-data': {
        user: auth0DataWithToken,
        currentFundId: '0',
        error: '',
        funds: {
          [fundId]: fundData
        }
      }});
    });

    [
      {
        message: 'should map external set current fund action to related internal',
        inputAction: new UserDataActions.UserSetCurrentFund(fundId),
        outputAction: new UserDataActions._UserSetCurrentFund(fundId, false),
        getEffect: () => effects.setCurrentFundEffect$
      }
    ].forEach(defaultSpec);
  });
});
