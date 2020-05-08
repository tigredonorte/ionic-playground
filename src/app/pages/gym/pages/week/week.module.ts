import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { WeekPageRoutingModule } from './week-routing.module';
import { WeekPage } from './week.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekPageRoutingModule,
    UiModule
  ],
  declarations: [WeekPage]
})
export class WeekPageModule {}
