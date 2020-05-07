import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ContentPageRoutingModule } from './content-routing.module';
import { ContentPage } from './content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContentPageRoutingModule,
    UiModule
  ],
  declarations: [ContentPage]
})
export class ContentPageModule {}
