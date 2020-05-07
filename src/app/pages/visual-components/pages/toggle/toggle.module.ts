import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { TogglePageRoutingModule } from './toggle-routing.module';
import { TogglePage } from './toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TogglePageRoutingModule,
    UiModule
  ],
  declarations: [TogglePage]
})
export class TogglePageModule {}
