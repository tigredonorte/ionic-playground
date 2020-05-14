import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { WorkoutPageRoutingModule } from './workout-routing.module';
import { WorkoutPage } from './workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPageRoutingModule,
    UiModule
  ],
  declarations: [WorkoutPage]
})
export class WorkoutPageModule {}
