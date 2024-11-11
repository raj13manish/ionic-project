import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyberTestPageRoutingModule } from './cyber-test-routing.module';

import { CyberTestPage } from './cyber-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyberTestPageRoutingModule
  ],
  declarations: [CyberTestPage]
})
export class CyberTestPageModule {}
