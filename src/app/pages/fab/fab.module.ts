import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { FabPageRoutingModule } from './fab-routing.module';
import { FabPage } from './fab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabPageRoutingModule,
    UiModule
  ],
  declarations: [FabPage]
})
export class FabPageModule {}
