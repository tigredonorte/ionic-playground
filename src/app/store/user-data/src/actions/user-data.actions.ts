/* tslint:disable:class-name */
import { Action } from '@ngrx/store';

import { FundIdType } from '../models/fund.model';

export enum UserDataErrorMessages {
  _UserSetAuthDataAction = '[UserSetAuthData ERROR] Invalid provided token',
  _UserSetFundDataAction = '[UserSetFundData ERROR] Malformed fund data',
  _UserSetCurrentFundAction = '[UserSetCurrentFund ERROR] Invalid FundId',
}

export enum UserDataActionTypes {
  UserLoginAction = '[User.Data] UserLogin',
  UserLogoutAction = '[User.Data] UserLogout',
  UserRemoveFundAction = '[User.Data] UserRemoveFund',
  UserSaveDataAction = '[User.Data] UserSaveData',
  UserSetAuthDataAction = '[User.Data] UserSetAuthDataAction',
  UserSetCurrentFundAction = '[User.Data] UserSetCurrentFund',
  UserSetFundDataAction = '[User.Data] UserSetFundDataAction',
  UserSetDataAction = '[User.Data] UserSetData',
  _UserLoginAction = '[User.Data] UserLogin END',
  _UserLogoutAction = '[User.Data] UserLogout END',
  _UserRemoveFundAction = '[User.Data] UserRemoveFund END',
  _UserSetAuthDataAction = '[User.Data] UserSetAuthDataAction END',
  _UserSaveDataAction = '[User.Data] UserSaveData END',
  _UserSetCurrentFundAction = '[User.Data] UserSetCurrentFund END',
  _UserSetFundDataAction = '[User.Data] UserSetFundDataAction END',
  AddUser = '[User.Data] AddUser',
  SetHasCash = '[User.Data] SetHasCash',
  ToggleHidePatrimonyAction = '[User.Preferences] ToggleHidePatrimony',
}

export class UserLogin implements Action {
  public readonly type = UserDataActionTypes.UserLoginAction;
  constructor() {}
}
export class _UserLogin implements Action {
  public readonly type = UserDataActionTypes._UserLoginAction;
  constructor() {}
}

export class UserLogout implements Action {
  public readonly type = UserDataActionTypes.UserLogoutAction;
  constructor() {}
}
export class _UserLogout implements Action {
  public readonly type = UserDataActionTypes._UserLogoutAction;
  constructor() {}
}

export class UserSaveData implements Action {
  public readonly type = UserDataActionTypes.UserSaveDataAction;
  constructor(public data: any) {}
}
export class _UserSaveData implements Action {
  public readonly type = UserDataActionTypes._UserSaveDataAction;
  constructor(public data: any) {}
}

export class UserSetAuthData implements Action {
  public readonly type = UserDataActionTypes.UserSetAuthDataAction;
  constructor(public data: any, public token: string) {}
}
export class _UserSetAuthData implements Action {
  public readonly type = UserDataActionTypes._UserSetAuthDataAction;
  constructor(public data: any, public error?: any) {}
}

export class UserSetData implements Action {
  public readonly type = UserDataActionTypes.UserSetDataAction;
  constructor(data: any) {}
}

export class UserSetCurrentFund implements Action {
  public readonly type = UserDataActionTypes.UserSetCurrentFundAction;
  constructor(public fundId: FundIdType) {}
}
export class _UserSetCurrentFund implements Action {
  public readonly type = UserDataActionTypes._UserSetCurrentFundAction;
  constructor(public fundId: FundIdType, public error: any) {}
}

export class UserSetFundData implements Action {
  public readonly type = UserDataActionTypes.UserSetFundDataAction;
  constructor(public data: any) {}
}
export class _UserSetFundData implements Action {
  public readonly type = UserDataActionTypes._UserSetFundDataAction;
  constructor(public data: any, public error: any) {}
}

export class UserRemoveFund implements Action {
  public readonly type = UserDataActionTypes.UserRemoveFundAction;
  constructor(public fundId) {}
}
export class _UserRemoveFund implements Action {
  public readonly type = UserDataActionTypes._UserRemoveFundAction;
  constructor(public fundId) {}
}
export class AddUser implements Action {
  public readonly type = UserDataActionTypes.AddUser;
  constructor(public data: any) {}
}

export class SetHasCash implements Action {
  public readonly type = UserDataActionTypes.SetHasCash;
  constructor(public hasCash: boolean) {}
}

export class ToggleHidePatrimony implements Action {
  public readonly type = UserDataActionTypes.ToggleHidePatrimonyAction;
  constructor() {}
}

export type UserDataActions =
  | UserLogin
  | UserLogout
  | UserRemoveFund
  | UserSaveData
  | UserSetAuthData
  | UserSetData
  | UserSetCurrentFund
  | UserSetFundData;

export type _UserDataActions =
  | _UserLogin
  | _UserLogout
  | _UserRemoveFund
  | _UserSaveData
  | _UserSetAuthData
  | _UserSetCurrentFund
  | _UserSetFundData
  | AddUser
  | SetHasCash
  | ToggleHidePatrimony;

export type UserDataAllActions = UserDataActions | _UserDataActions;
