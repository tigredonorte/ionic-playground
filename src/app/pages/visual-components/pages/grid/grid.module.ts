import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { GridPageRoutingModule } from './grid-routing.module';
import { GridPage } from './grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPageRoutingModule,
    UiModule
  ],
  declarations: [GridPage]
})
export class GridPageModule {}
