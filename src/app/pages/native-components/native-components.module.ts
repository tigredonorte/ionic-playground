import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NativeComponentsPageRoutingModule } from './native-components-routing.module';

import { NativeComponentsPage } from './native-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NativeComponentsPageRoutingModule
  ],
  declarations: [NativeComponentsPage]
})
export class NativeComponentsPageModule {}
