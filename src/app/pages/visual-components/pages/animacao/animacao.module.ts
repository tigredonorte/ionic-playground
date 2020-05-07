import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacaoPageRoutingModule } from './animacao-routing.module';

import { AnimacaoPage } from './animacao.page';
import { UiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacaoPageRoutingModule,
    UiModule
  ],
  declarations: [AnimacaoPage]
})
export class AnimacaoPageModule {}
