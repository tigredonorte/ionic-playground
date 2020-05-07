import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ButtonsPageRoutingModule } from './buttons-routing.module';
import { ButtonsPage } from './buttons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPageRoutingModule,
    UiModule
  ],
  declarations: [ButtonsPage]
})
export class ButtonsPageModule {}
