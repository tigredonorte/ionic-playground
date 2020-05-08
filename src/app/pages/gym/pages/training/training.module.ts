import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { TrainingPageRoutingModule } from './training-routing.module';
import { TrainingPage } from './training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPageRoutingModule,
    UiModule
  ],
  declarations: [TrainingPage]
})
export class TrainingPageModule {}
