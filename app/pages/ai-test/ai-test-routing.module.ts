import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiTestPage } from './ai-test.page';

const routes: Routes = [
  {
    path: '',
    component: AiTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiTestPageRoutingModule {}
