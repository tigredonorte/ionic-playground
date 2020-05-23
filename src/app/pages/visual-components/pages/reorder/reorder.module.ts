import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ReorderPageRoutingModule } from './reorder-routing.module';
import { ReorderPage } from './reorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderPageRoutingModule,
    UiModule
  ],
  declarations: [ReorderPage]
})
export class ReorderPageModule {}
