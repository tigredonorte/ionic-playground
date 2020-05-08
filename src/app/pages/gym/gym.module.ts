import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { GymPageRoutingModule } from './gym-routing.module';
import { GymPage } from './gym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymPageRoutingModule,
    UiModule
  ],
  declarations: [GymPage]
})
export class GymPageModule {}
