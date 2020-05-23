import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { CheckboxPageRoutingModule } from './checkbox-routing.module';
import { CheckboxPage } from './checkbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxPageRoutingModule,
    UiModule
  ],
  declarations: [CheckboxPage]
})
export class CheckboxPageModule {}
