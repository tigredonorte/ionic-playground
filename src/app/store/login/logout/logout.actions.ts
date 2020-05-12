import { Action } from '@ngrx/store';

export class ActionTypes {
  public static LOGOUT = '[App] logout';
}

export class Logout implements Action {
  public readonly type = ActionTypes.LOGOUT;
}
