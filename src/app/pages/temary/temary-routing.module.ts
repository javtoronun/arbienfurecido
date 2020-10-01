import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemaryPage } from './temary.page';

const routes: Routes = [
  {
    path: '',
    component: TemaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemaryPageRoutingModule {}
