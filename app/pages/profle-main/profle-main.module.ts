import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfleMainPageRoutingModule } from './profle-main-routing.module';

import { ProfleMainPage } from './profle-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfleMainPageRoutingModule
  ],
  declarations: [ProfleMainPage]
})
export class ProfleMainPageModule {}
