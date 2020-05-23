import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { BadgePageRoutingModule } from './badge-routing.module';
import { BadgePage } from './badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgePageRoutingModule,
    UiModule
  ],
  declarations: [BadgePage]
})
export class BadgePageModule {}
