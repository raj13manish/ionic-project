import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataScienceTestPageRoutingModule } from './data-science-test-routing.module';

import { DataScienceTestPage } from './data-science-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataScienceTestPageRoutingModule
  ],
  declarations: [DataScienceTestPage]
})
export class DataScienceTestPageModule {}
