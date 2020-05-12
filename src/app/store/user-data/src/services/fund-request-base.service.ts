import { select, Store } from '@ngrx/store';
import { Observable ,  zip } from 'rxjs';
import { take } from 'rxjs/operators';

import { FundIdType } from '../models/fund.model';
import * as Selectors from '../user-data.selectors';

export abstract class FundRequestBaseService<T = any> {

  constructor(protected store: Store<T>) { }

  protected getFundId(): Observable<FundIdType> {
    return this.store.pipe(select(Selectors.selectFeatureCurrentFundId), take(1));
  }

  protected getLoggedFundId(): Observable<FundIdType> {
    return this.store.pipe(select(Selectors.selectFeatureLoggedUserFundId), take(1));
  }

  protected getFundIds(): Observable<FundIdType[]> {
    return zip(
      this.getFundId(),
      this.getLoggedFundId()
    );
  }
}
