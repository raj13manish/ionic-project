import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiTestPageRoutingModule } from './ai-test-routing.module';

import { AiTestPage } from './ai-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiTestPageRoutingModule
  ],
  declarations: [AiTestPage]
})
export class AiTestPageModule {}
