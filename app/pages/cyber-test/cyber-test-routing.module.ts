import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyberTestPage } from './cyber-test.page';

const routes: Routes = [
  {
    path: '',
    component: CyberTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberTestPageRoutingModule {}
