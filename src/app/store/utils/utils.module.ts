import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ApiService } from './api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ApiService]
})
export class UtilsModule {}
