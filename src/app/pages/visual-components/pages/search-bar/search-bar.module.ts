import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { SearchBarPageRoutingModule } from './search-bar-routing.module';
import { SearchBarPage } from './search-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBarPageRoutingModule,
    UiModule
  ],
  declarations: [SearchBarPage]
})
export class SearchBarPageModule {}
