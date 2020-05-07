import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { RefreshPageRoutingModule } from './refresh-routing.module';
import { RefreshPage } from './refresh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshPageRoutingModule,
    UiModule
  ],
  declarations: [RefreshPage]
})
export class RefreshPageModule {}
