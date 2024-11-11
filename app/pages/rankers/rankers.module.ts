import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankersPageRoutingModule } from './rankers-routing.module';

import { RankersPage } from './rankers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankersPageRoutingModule
  ],
  declarations: [RankersPage]
})
export class RankersPageModule {}
