import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiService } from '@gorila-bot/gorila-base';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentUserService {
  constructor(
    protected apiService: ApiService,
  ) { }

  public subscribeUser(token: string): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions`;
    return this.apiService.doPost(url, {}, { token });
  }

  public updateCard(token: string): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions`;
    return this.apiService.doUpdate(url, { token });
  }

  public cancelSubscription(): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions`;
    return this.apiService.dropData(url);
  }

  public getBillingDate(): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions/next`;
    return this.apiService.getData(url);
  }

  public getCreditCardData(): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions/profile`;
    return this.apiService.getData(url);
  }

  public getSubscriptionStatus(): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions/status`;
    return this.apiService.getData(url);
  }

  public getPaymentHistory(): Observable<any> {
    const url = `${environment.serviceBaseUrl}subscriptions/charges`;
    return this.apiService.getData(url);
  }
}
