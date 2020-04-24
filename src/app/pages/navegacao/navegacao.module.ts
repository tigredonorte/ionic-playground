import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { NavegacaoPageRoutingModule } from './navegacao-routing.module';
import { NavegacaoPage } from './navegacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavegacaoPageRoutingModule,
    UiModule
  ],
  declarations: [NavegacaoPage]
})
export class NavegacaoPageModule {}
