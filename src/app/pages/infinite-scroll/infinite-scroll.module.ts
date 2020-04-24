import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollPage } from './infinite-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollPageRoutingModule,
    UiModule
  ],
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
