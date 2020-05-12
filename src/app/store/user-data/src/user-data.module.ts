import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CacheService, HttpClientService } from '@gorila-bot/gorila-base';
import { clearState } from '@gorila/root-store/logout/logout.state';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserPaymentEffects } from './effects/payment.effects';
import { UserDataEffects } from './effects/user-data.effects';
import { Key as PaymentKey } from './payment.state';
import * as fromPaymentData from './reducers/payment.reducer';
import * as fromUserData from './reducers/user-data.reducer';
import { Auth0UserService } from './services/auth0-user.service';
import { PaymentUserService } from './services/payment-user.service';
import { Key } from './user-data.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(Key, fromUserData.reducer, { metaReducers: [clearState] }),
    StoreModule.forFeature(PaymentKey, fromPaymentData.reducer, { metaReducers: [clearState] }),
    EffectsModule.forFeature([UserDataEffects, UserPaymentEffects])
  ],
  providers: [
    Auth0UserService,
    PaymentUserService,
    HttpClientService,
    CacheService
  ],
  declarations: []
})
export class UserDataModule { }
