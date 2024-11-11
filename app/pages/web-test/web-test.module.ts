import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebTestPageRoutingModule } from './web-test-routing.module';

import { WebTestPage } from './web-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebTestPageRoutingModule
  ],
  declarations: [WebTestPage]
})
export class WebTestPageModule {}
