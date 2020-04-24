import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ChipPageRoutingModule } from './chip-routing.module';
import { ChipPage } from './chip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChipPageRoutingModule,
    UiModule
  ],
  declarations: [ChipPage]
})
export class ChipPageModule {}
