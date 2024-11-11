import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankersPage } from './rankers.page';

const routes: Routes = [
  {
    path: '',
    component: RankersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankersPageRoutingModule {}
