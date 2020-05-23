import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { SelectPageRoutingModule } from './select-routing.module';
import { SelectPage } from './select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPageRoutingModule,
    UiModule
  ],
  declarations: [SelectPage]
})
export class SelectPageModule {}
