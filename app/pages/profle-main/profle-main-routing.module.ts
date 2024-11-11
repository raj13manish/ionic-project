import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfleMainPage } from './profle-main.page';

const routes: Routes = [
  {
    path: '',
    component: ProfleMainPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfleMainPageRoutingModule {}
