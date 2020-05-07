import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UiModule } from 'src/app/ui/ui.module';

import { ModalPageModule } from '../modal/modal.module';
import { SampleModalComponent } from '../modal/sample-modal/sample-modal.component';
import { PopoverPageRoutingModule } from './popover-routing.module';
import { PopoverPage } from './popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverPageRoutingModule,
    UiModule,
    ModalPageModule
  ],
  declarations: [PopoverPage],
  entryComponents: [SampleModalComponent]
})
export class PopoverPageModule {}
