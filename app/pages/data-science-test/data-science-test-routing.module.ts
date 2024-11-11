import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataScienceTestPage } from './data-science-test.page';

const routes: Routes = [
  {
    path: '',
    component: DataScienceTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataScienceTestPageRoutingModule {}
