import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';
import { SampleModalComponent } from './sample-modal/sample-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    UiModule
  ],
  declarations: [ModalPage, SampleModalComponent],
  exports: [SampleModalComponent],
  entryComponents: [SampleModalComponent]
})
export class ModalPageModule {}
