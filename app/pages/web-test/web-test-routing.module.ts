import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebTestPage } from './web-test.page';

const routes: Routes = [
  {
    path: '',
    component: WebTestPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebTestPageRoutingModule {}
