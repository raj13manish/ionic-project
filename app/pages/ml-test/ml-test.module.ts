import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MlTestPageRoutingModule } from './ml-test-routing.module';

import { MlTestPage } from './ml-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MlTestPageRoutingModule
  ],
  declarations: [MlTestPage]
})
export class MlTestPageModule {}
