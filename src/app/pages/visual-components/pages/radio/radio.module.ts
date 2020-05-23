import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { RadioPageRoutingModule } from './radio-routing.module';
import { RadioPage } from './radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadioPageRoutingModule,
    UiModule
  ],
  declarations: [RadioPage]
})
export class RadioPageModule {}
