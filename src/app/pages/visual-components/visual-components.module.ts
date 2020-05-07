import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { VisualComponentsPageRoutingModule } from './visual-components-routing.module';
import { VisualComponentsPage } from './visual-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualComponentsPageRoutingModule,
    UiModule
  ],
  declarations: [VisualComponentsPage]
})
export class VisualComponentsPageModule {}
