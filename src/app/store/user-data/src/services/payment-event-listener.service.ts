import { Injectable } from '@angular/core';
import { SocketEventService } from '@gorila/socket';
import { Store } from '@ngrx/store';
import { path } from 'ramda';
import * as UserPaymentActions from '../actions/payment.actions';

@Injectable()
export class PaymentEventListenerService {
  private started = false;
  public constructor(
    private socketEventService: SocketEventService,
    private store$: Store<any>
  ) {}

  public listenSubscriptionEvents() {
    try {
      if (this.started) {
        return;
      }
      this.started = true;
      this.socketEventService
        .getObserver('SUBSCRIPTION')
        .subscribe((data) => this.subscribeUpdate(data));
    } catch (e) {
      console.warn(e);
    }
  }

  private subscribeUpdate(data: any) {
    try {
      const methodName = 'event_' + (<string>(path(['Status'], data) || '')).toLowerCase();
      if (!!this[methodName]) {
        this[methodName](data);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  private event_finish = (data) => this.store$.dispatch(
    new UserPaymentActions.UserSubscriptionRequestResult({
      event: path(['Event'], data)
    })
  )

  private event_error = (data) => this.store$.dispatch(
    new UserPaymentActions._UserSubscribeError('credit card event error')
  )
}
